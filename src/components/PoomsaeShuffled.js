import React from 'react'

const PoomsaeShuffled = ({poomsae, poomsae_basic_href, poomsae_teaching_href, randomizePoomsae}) => {
    const DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todaysDay = new Date(Date.now()).getDay()

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
                    <h3><input type="checkbox" />{poomsae[index]}</h3>
                    <div className='videos'>
                        <p className='basicvid'><a href={poomsae_basic_href[poomsae[index]]}>Basic Video</a></p>
                        <p className='teachingvid'><a href={poomsae_teaching_href[poomsae[index]]}>Teaching Video</a></p>
                    </div>
                    </div>
                    {poomsae[index + 7] &&
                    <div className={day+index}>
                        <h3><input type="checkbox" />{poomsae[index + 7]}</h3>
                        <div className='videos'>
                        <p className='basicvid'><a href={poomsae_basic_href[poomsae[index + 7]]}>Basic Video</a></p>
                        <p className='teachingvid'><a href={poomsae_teaching_href[poomsae[index + 7]]}>Teaching Video</a></p>
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