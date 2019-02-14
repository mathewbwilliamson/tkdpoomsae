import React from 'react'

const PoomsaeShuffled = ({poomsae, poomsae_data, randomizePoomsae, togglePoomsaeActivation}) => {
    const DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todaysDay = new Date(Date.now()).getDay()
    console.log('[matt] poomsae_data.basicVideo', poomsae_data[poomsae[7]].basicVideo)
    

    return (
        <div className="main">
        {/* <LockedComponent /> */}
            <header className="App-header">
            <h2>TKD Poomsae Weekly Shuffler</h2>
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
                    <h3><button onClick={() => togglePoomsaeActivation(poomsae[index])} className={poomsae_data[poomsae[index]].active}>Practiced?</button>{poomsae[index]}</h3>
                    <div className='videos'>
                        <p className='basicvid'><a href={poomsae_data[poomsae[index]].basicVideo}>Basic Video</a></p>
                        <p className='teachingvid'><a href={poomsae_data[poomsae[index]].teachingVideo}>Teaching Video</a></p>
                    </div>
                    </div>
                    {poomsae[index + 7] &&
                    <div className={day+index}>
                        <h3><button onClick={() => togglePoomsaeActivation(poomsae[index + 7])} className={poomsae_data[poomsae[index + 7]].active}>Practiced?</button>{poomsae[index + 7]}</h3>
                        <div className='videos'>
                        <p className='basicvid'><a href={poomsae_data[poomsae[index + 7]].basicVideo}>Basic Video</a></p>
                        <p className='teachingvid'><a href={poomsae_data[poomsae[index + 7]].teachingVideo}>Teaching Video</a></p>
                        </div>
                    </div>
                    }
                </div>
                )
                }
                )
            }
            
            <button onClick={randomizePoomsae}>Randomize Poomsae</button>
            </main>
        </div>
    )
}

export default PoomsaeShuffled