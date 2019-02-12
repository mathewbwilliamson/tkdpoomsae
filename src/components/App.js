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
      poomsae_basic_href: {
        '1 - Taegeuk Il Jang': 'https://youtu.be/FD1yQP_o5Bs',
        '2 - Taegeuk Ee Jang': 'https://youtu.be/lsmS_Nny0ZI', 
        '3 - Taegeuk Sam Jang': 'https://youtu.be/hEFvnmPGi0Y', 
        '4 - Taegeuk Sa Jang': 'https://youtu.be/7vWzIIC3SG8', 
        '5 - Taegeuk Oh Jang': 'https://youtu.be/AOO8IKExvjI?t=04', 
        '6 - Taegeuk Yuk Jang': 'https://youtu.be/t0V2dtbuvpA', 
        '7 - Taegeuk Chil Jang': 'https://youtu.be/ijr0Vn6yWws', 
        '8 - Taegeuk Pal Jang': 'https://youtu.be/TGbIcl2aiDw', 
        'Koryo': 'https://youtu.be/55WKzmYHN-0?t=09', 
        'Keumgang': 'https://youtu.be/5AqficgjJyI?t=11', 
        'Taebaek': 'https://www.youtube.com/watch?v=7CW5SLGdH2Y'
      },
      poomsae_teaching_href: {
        '1 - Taegeuk Il Jang': '',
        '2 - Taegeuk Ee Jang': '', 
        '3 - Taegeuk Sam Jang': '', 
        '4 - Taegeuk Sa Jang': '', 
        '5 - Taegeuk Oh Jang': '', 
        '6 - Taegeuk Yuk Jang': '', 
        '7 - Taegeuk Chil Jang': '', 
        '8 - Taegeuk Pal Jang': '', 
        'Koryo': '', 
        'Keumgang': '', 
        'Taebaek': ''
      }
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
    const DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const poomsae = this.state.poomsae
    let todaysDay = new Date(Date.now()).getDay()   

    return (
      <div className="main">
      {/* <LockedComponent /> */}
        <header className="App-header">
          <h2>TKD Poomsae Weekly Randomizer</h2>
        </header>

        <main>
          {poomsae && DaysOfTheWeek.map((day, index) => {
            let visibility = 'visible'

            if (index < todaysDay) {
              visibility = 'invisible'
            }

            return (
              <div key={`${day}${index}`} className={`day ${visibility}`}>
                <h2>{day}</h2>
                <div className={day+index}>
                  <h3><input type="checkbox" />{poomsae[index]}</h3>
                  <div className='videos'>
                    <p className='basicvid'><a href={this.state.poomsae_basic_href[poomsae[index]]}>Basic Video</a></p>
                    <p className='teachingvid'><a href={this.state.poomsae_teaching_href[poomsae[index]]}>Teaching Video</a></p>
                  </div>
                </div>
                {poomsae[index + 7] &&
                  <div className={day+index}>
                    <h3><input type="checkbox" />{poomsae[index + 7]}</h3>
                    <div className='videos'>
                      <p className='basicvid'><a href={this.state.poomsae_basic_href[poomsae[index + 7]]}>Basic Video</a></p>
                      <p className='teachingvid'><a href={this.state.poomsae_teaching_href[poomsae[index + 7]]}>Teaching Video</a></p>
                    </div>
                  </div>
                }
              </div>
              )
              }
            )
          }
          
          <button onClick={this.randomizePoomsae}>Randomize Poomsae</button>
        </main>
      </div>
    );
  }
}

export default App;
