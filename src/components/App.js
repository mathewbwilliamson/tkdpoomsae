import React, { Component } from 'react'
import base, {firebaseApp} from '../base'
import Login from './Login'
import firebase from 'firebase'
import LockedComponent from './LockedComponent'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      poomsae: {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: 'Koryo', 10: 'Kuemgang', 11: 'Taebaek'},
      defaultPoomsae: {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: 'Koryo', 10: 'Kuemgang', 11: 'Taebaek'},
    }

    this.randomizePoomsae = this.randomizePoomsae.bind(this)
  }

  async setupDatabase() {
    this.dataRef = await base.syncState(`poomsae`, {
        context: this,
        state: 'poomsae'
    })
  }

  componentDidMount() {
    //Setup the database
    this.setupDatabase()
    
    //Reinstate Local Storage    
    const localStorageRef = localStorage.getItem('poomsae')
    console.log('[matt] localStorageRef', localStorageRef)
    
    if (localStorageRef) {
      this.setState({ poomsae: JSON.parse(localStorageRef)})
    }

  }

  componentDidUpdate() {
    // Pattern for Adding Local Storage:
    // 1. In ComponentDidUpdate(), localStorage.setItem(key, value)
    // 2. In ComponentDidMount(), localStorageRef = localStorage.getItem(ID)
    // 3. If localStorageRef, setState(value) 
    // Remember that if there's no update because state doesn't change, this won't appear
    localStorage.setItem('poomsae', JSON.stringify(this.state.poomsae))
  }

  componentWillUnmount() {
    base.removeBinding(this.dataRef)
  }

  randomizePoomsae() {
    // Common update the state pattern: Copy, Update, Set
    // 1. Take a copy of the current state
    console.log('[matt] this.state.poomsae', this.state.poomsae)
    let poomsae

    if (this.state.poomsae) {
      poomsae = {...this.state.defaultPoomsae}
    } else {
      poomsae = {...this.state.poomsae}
    }
    console.log('[matt] poomsae from button', poomsae)
    

    // 2. Update that state
    

    // 3. Set that to state
    this.setState({poomsae})
  }
  
  render() {
    if (!this.state.poomsae) {
      console.log('[matt] TEST', )
      
    }
    
    return (
      <div className="main">
      <LockedComponent />
        <header className="App-header">
          <p>This is the header</p>
        </header>

        <main>
          <p>This is the main page</p>
          <p>state.thing: {this.state.poomsae[9]}</p>
          <button onClick={this.randomizePoomsae}>Randomize Poomsae</button>
        </main>
      </div>
    );
  }
}

export default App;
