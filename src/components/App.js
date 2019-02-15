import React, { Component } from 'react'
import base, {firebaseApp} from '../base'
import Login from './Login'
import firebase from 'firebase'
import LockedComponent from './LockedComponent'
import './App.css'
import Checkbox from './Checkbox'
import PoomsaeShuffled from './PoomsaeShuffled'
import {poomsaeDefault, poomsae_dataDefault} from './defaults'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      poomsae: poomsaeDefault,
      poomsae_data: poomsae_dataDefault,
      loading: true
    }

    this.randomizePoomsae = this.randomizePoomsae.bind(this)
    this.togglePoomsaeActivation = this.togglePoomsaeActivation.bind(this)
  }

  async setupDatabaseWithPoomsae() {
    // The default value basically is the default state. Ignore the state above because it will get replaced when it first runs.
    
    return this.dataRef = await base.syncState(`poomsae`, {
        context: this,
        defaultValue: poomsaeDefault,
        state: 'poomsae'
    })
  }

  async setupDatabaseWithPoomsaeData() {
    // The default value basically is the default state. Ignore the state above because it will get replaced when it first runs.
    
    return this.dataRef = await base.syncState(`poomsae_data`, {
        context: this,
        defaultValue: poomsae_dataDefault,
        state: 'poomsae_data'
    })
  }

  componentDidMount() {
    //Setup the database
    this.setupDatabaseWithPoomsae()
    this.setupDatabaseWithPoomsaeData()
    
    //Reinstate Local Storage    
    const localStorageRef = localStorage.getItem('poomsae')
    
    if (localStorageRef) {
      this.setState({ poomsae: JSON.parse(localStorageRef)})
    }

    const localStorageRefData = localStorage.getItem('poomsae_data')
    
    if (localStorageRefData) {
      this.setState({ poomsae_data: JSON.parse(localStorageRefData)})
    }

    this.setState({loading: false})

  }

  componentDidUpdate() {
    // Pattern for Adding Local Storage:
    // 1. In ComponentDidUpdate(), localStorage.setItem(key, value)
    // 2. In ComponentDidMount(), localStorageRef = localStorage.getItem(ID)
    // 3. If localStorageRef, setState(value) 
    localStorage.setItem('poomsae', JSON.stringify(this.state.poomsae))
    localStorage.setItem('poomsae_data', JSON.stringify(this.state.poomsae_data))
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

  togglePoomsaeActivation(poomsae) {
    const tempState = this.state.poomsae_data
    let activeState = tempState[poomsae].active
    let newState

    if (activeState === 'active_button') {
      tempState[poomsae].active = 'inactive_button'
    } else {
      tempState[poomsae].active = 'active_button'
    }

    this.setState({poomsae_data: tempState})
  }

  // Idea below would be to show Login screen OR PoomsaeShuffled based on if person is logged in or not
  render() {    
    const loading = this.state.loading

    if (loading) {
      return null
    } else {
      return (
        <PoomsaeShuffled 
          poomsae={this.state.poomsae}
          poomsae_data={this.state.poomsae_data}
          randomizePoomsae={this.randomizePoomsae} 
          togglePoomsaeActivation={this.togglePoomsaeActivation}
        />
      )
    }
  }
}

export default App;
