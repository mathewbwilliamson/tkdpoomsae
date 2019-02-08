import React from 'react'
import PropTypes from 'prop-types'
import Login from './Login'
import base, {firebaseApp} from '../base'
import firebase from 'firebase'

class LockedComponent extends React.Component {

    state = {
        uid: null,
        owner: null,
        loading: false
    }

    // TODO: Can I create a loading circle or icon? How does that work? 

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log('[matt] Test Mount', )
            
            if (user) {
                this.setState({
                    loading: true
                })
                this.authHandler({ user })
            }
        })
    }

    authHandler = async (authData) => {
        console.log('[matt] tesst', )
        
        // 1. Look up the current store in the firebase database
        // const store = await base.fetch('data', { context : this })
        // console.log('[matt] store', store)
        

        // 2. If there is no owner, claim it
        // if (!store.owner) {
        //     // Save it as our own
        //     await base.post(`${this.props.storeId}/owner`, {
        //         data: authData.user.uid
        //     })
        // }
        // 3. Set the state of the Inventory component to reflect the current user 
        console.log('[matt] before Set State', this.state)
        
        this.setState({
            uid: authData.user.uid,
            //owner: store.owner || authData.user.uid,
            owner: authData.user.uid,
        })
        console.log('[matt] authData', authData)        
    }

    authenticate = (provider) => {
        console.log('[matt] authenticate', )
        
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
        
    }

    logout = async () => {
        console.log('[matt] Logging Out')
        await firebase.auth().signOut()
        console.log('[matt] test', )
        
        this.setState({
            uid: null,
            owner: null,
        })
    }

    render() { 
        const logout = <button onClick={this.logout}>Log Out!</button>

        // 1. Check if they are logged in
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>
        }

        // 2. Check if they are not the owner of that store
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry, you are not the owner.</p>
                    {logout}
                </div>
            )
        }

        // 3. They must be the owner
        return ( 
            <div className='locked'>
                <h2>You're in!</h2>
                {logout}
            </div> 
        );
    }
}
 
export default LockedComponent