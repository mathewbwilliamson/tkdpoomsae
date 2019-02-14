import React, { Component } from 'react'
import base, {firebaseApp} from '../base'
import Login from './Login'
import firebase from 'firebase'
import LockedComponent from './LockedComponent'
import './App.css'
import Checkbox from './Checkbox'
import PoomsaeShuffled from './PoomsaeShuffled'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      poomsae: [
        '1 - Taegeuk Il Jang', 
        '2 - Taegeuk Ee Jang', 
        '3 - Taegeuk Sam Jang', 
        '4 - Taegeuk Sa Jang', 
        '5 - Taegeuk Oh Jang', 
        '6 - Taegeuk Yuk Jang', 
        '7 - Taegeuk Chil Jang', 
        '8 - Taegeuk Pal Jang', 
        'Koryo', 
        'Keumgang', 
        'Taebaek'],
      poomsae_data: {
        '1 - Taegeuk Il Jang': 
        {
          basicVideo: 'https://youtu.be/FD1yQP_o5Bs',
          teachingVideo: '',
          active: 'active_button'
        },
        '2 - Taegeuk Ee Jang': {
          basicVideo: 'https://youtu.be/lsmS_Nny0ZI',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '3 - Taegeuk Sam Jang': {
          basicVideo: 'https://youtu.be/hEFvnmPGi0Y',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '4 - Taegeuk Sa Jang': {
          basicVideo: 'https://youtu.be/7vWzIIC3SG8',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '5 - Taegeuk Oh Jang': {
          basicVideo: 'https://youtu.be/AOO8IKExvjI?t=04',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '6 - Taegeuk Yuk Jang': {
          basicVideo: 'https://youtu.be/t0V2dtbuvpA',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '7 - Taegeuk Chil Jang': {
          basicVideo: 'https://youtu.be/ijr0Vn6yWws',
          teachingVideo: '',
          active: 'active_button'
        }, 
        '8 - Taegeuk Pal Jang': {
          basicVideo: 'https://youtu.be/TGbIcl2aiDw',
          teachingVideo: '',
          active: 'active_button'
        }, 
        'Koryo': {
          basicVideo: 'https://youtu.be/55WKzmYHN-0?t=09',
          teachingVideo: '',
          active: 'active_button'
        }, 
        'Keumgang': {
          basicVideo: 'https://youtu.be/5AqficgjJyI?t=11',
          teachingVideo: '',
          active: 'active_button'
        }, 
        'Taebaek': {
          basicVideo: 'https://www.youtube.com/watch?v=7CW5SLGdH2Y',
          teachingVideo: '',
          active: 'active_button'
        }
      },
    }

    this.randomizePoomsae = this.randomizePoomsae.bind(this)
    this.togglePoomsaeActivation = this.togglePoomsaeActivation.bind(this)
  }

  async setupDatabase() {
    // The default value basically is the default state. Ignore the state above because it will get replaced when it first runs.
    return this.dataRef = await base.syncState(`poomsae`, {
        context: this,
        defaultValue: [
          '1 - Taegeuk Il Jang', 
          '2 - Taegeuk Ee Jang', 
          '3 - Taegeuk Sam Jang', 
          '4 - Taegeuk Sa Jang', 
          '5 - Taegeuk Oh Jang', 
          '6 - Taegeuk Yuk Jang', 
          '7 - Taegeuk Chil Jang', 
          '8 - Taegeuk Pal Jang', 
          'Koryo', 
          'Keumgang', 
          'Taebaek'],
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

export default App;
