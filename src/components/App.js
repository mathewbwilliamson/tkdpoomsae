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
      data: {count: 0},
      aString: 'this is a thingy',
    }

    this.increaseCount = this.increaseCount.bind(this)
  }

  async setupDatabase() {
    this.dataRef = await base.syncState(`data`, {
        context: this,
        state: 'data'
    })

  }

  componentDidMount() {
    //Reinstate Local Storage
    const localStorageRef = localStorage.getItem('data')
    if (localStorageRef) {
        this.setState({ data: JSON.parse(localStorageRef)})
    }

    //Setup the database
    this.setupDatabase()

  }

  componentDidUpdate() {
    // Pattern for Adding Local Storage:
    // 1. In ComponentDidUpdate(), localStorage.setItem(key, value)
    // 2. In ComponentDidMount(), localStorageRef = localStorage.getItem(ID)
    // 3. If localStorageRef, setState(value) 
    // Remember that if there's no update because state doesn't change, this won't appear
    localStorage.setItem('data', JSON.stringify(this.state.data))
  }

  componentWillUnmount() {
    base.removeBinding(this.dataRef)
  }

  increaseCount() {
    // Common update the state pattern: Copy, Update, Set
    // 1. Take a copy of the current state
    const data = {...this.state.data}

    // 2. Update that state
    data.count ?
    (
      data.count = data.count + 1
    )
    : 
    (
      data.count = 1
    )

    // 3. Set that to state
    this.setState({data})
  }
  
  render() {
    
    return (
      <div className="main">
      <LockedComponent />
        <header className="App-header">
          <p>This is the header</p>
        </header>

        <main>
          <p>This is the main page</p>
          <p>state.thing: {this.state.data.count}</p>
          <button onClick={this.increaseCount}>+ Count</button>
        </main>
      </div>
    );
  }
}

export default App;
