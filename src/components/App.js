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
      poomsae: [1, 2, 3, 4, 5, 6, 7, 8, 'Koryo', 'Keumgang', 'Taebaek'],
    }

    this.randomizePoomsae = this.randomizePoomsae.bind(this)
  }

  async setupDatabase() {
    // The default value basically is the default state. Ignore the state above because it will get replaced when it first runs.
    return this.dataRef = await base.syncState(`poomsae`, {
        context: this,
        defaultValue: [1, 2, 3, 4, 5, 6, 7, 8, 'Koryo', 'Keumgang', 'Taebaek'],
        state: 'poomsae'
    })
  }

  componentDidMount() {
    //Setup the database
    this.setupDatabase()
    
    //Reinstate Local Storage    
    const localStorageRef = localStorage.getItem('poomsae')
    
    if (localStorageRef) {
      this.setState({ poomsae: JSON.parse(localStorageRef)})
    }
  }

  componentDidUpdate() {
    // Pattern for Adding Local Storage:
    // 1. In ComponentDidUpdate(), localStorage.setItem(key, value)
    // 2. In ComponentDidMount(), localStorageRef = localStorage.getItem(ID)
    // 3. If localStorageRef, setState(value) 
    localStorage.setItem('poomsae', JSON.stringify(this.state.poomsae))
  }

  componentWillUnmount() {
    base.removeBinding(this.dataRef)
  }

  randomizePoomsae() {
    // Common update the state pattern: Copy, Update, Set
    // 1. Take a copy of the current state
    const randomizedPoomsae = this.state.poomsae

    // 2. Update that state
    randomizedPoomsae.sort(() => 0.5 - Math.random());    

    // 3. Set that to state    
    this.setState({poomsae: randomizedPoomsae})
  }
  
  render() {    
    return (
      <div className="main">
      {/* <LockedComponent /> */}
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
