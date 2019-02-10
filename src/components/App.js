import React, { Component } from 'react'
import base, {firebaseApp} from '../base'
import Login from './Login'
import firebase from 'firebase'
import LockedComponent from './LockedComponent'
import './App.css'
import Checkbox from './Checkbox'

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
    }

    this.randomizePoomsae = this.randomizePoomsae.bind(this)
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

  
  render() {    
    const DaysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const poomsae = this.state.poomsae    

    return (
      <div className="main">
      {/* <LockedComponent /> */}
        <header className="App-header">
          <h2>TKD Poomsae Weekly Randomizer</h2>
        </header>

        <main>
          {poomsae && DaysOfTheWeek.map((day, index) => (
              <div key={`${day}${index}`} className='day'>
                <h2>{day}</h2>
                <div className={day+index}>
                  <h3><input type="checkbox" />{poomsae[index]}</h3>
                  <div className='videos'>
                    <p className='basicvid'>Basic Video</p>
                    <p className='teachingvid'>Teaching Video</p>
                  </div>
                </div>
                {poomsae[index + 7] &&
                  <div className={day+index}>
                    <h3><input type="checkbox" />{poomsae[index + 7]}</h3>
                    <div className='videos'>
                      <p className='basicvid'>Basic Video</p>
                      <p className='teachingvid'>Teaching Video</p>
                    </div>
                  </div>
                }
              </div>
              )
            )
          }
          
          <button onClick={this.randomizePoomsae}>Randomize Poomsae</button>
        </main>
      </div>
    );
  }
}

export default App;
