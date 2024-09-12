import React from 'react'
import Experience from './Data/experience.jsx'
import './main.css'
import data from './Data/data.js'

function Main(){

  return(
    <main>
      <div  className='overlay'>
      <img src='https://raw.githubusercontent.com/GIGIsOtherStuff/BNBclone/main/Media/photo-grid.png' alt="Photo Grid"></img>
      </div>
      <h1 id='OEtitle'>Online Experiences</h1>
      <span>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</span>
      <div className='OnEx'>
      {
        data.map(item => (
          <Experience 
            key={item.id} 
            {...item} 
          />
        ))
      }
      </div>
    </main>
  )
}

export default Main