import React, { useState } from 'react'

const ChangeTheme = ({ colorDay, colorNight }) => {

  let [dayMode, nightMode] = useState(false);


    const changeColors = ()  => {
        nightMode(!dayMode)
        colorNight(!colorDay)
    } 

  return (

      <div className={`box ${dayMode ? 'dayLight' : 'nightLight'}`}>
          <button onClick={changeColors}>  Update Day  </button>
      </div>   
    
  )

}

export default ChangeTheme