import React, { useState } from 'react'
import '../../style/contact/Scheduled_Time.css'


const SCHEDULED_TIME = ['9:00am - 9:45am','10:00am - 10:45am','11:00am - 11:45am','12:00pm - 12:45pm','2:00pm - 2:45pm','3:00pm - 3:45pm','4:00pm - 4:45pm','5:00pm - 5:45pm', '6:00pm - 6:45pm']

function Scheduled_Time({handleEvent}) {

  const [sctime, setScTime] = useState(false)
  let a = new Date().toLocaleTimeString().split(':');
  a = a[0] + a[1]

  const handleButtonClick = (val) => {
    setScTime(val)
  }

  return (
    <>
      {
        SCHEDULED_TIME.map(time => {
          return (
            <div key={time}>
              <button  onClick={() => handleButtonClick(time)} className={`${time === sctime ? 'custom_btn_left_next' : 'custom_btn'}`} 
              // style={{display : a > time.split("-")[0].split(':')[0]+time.split("-")[0].split(':')[1] ? 'none' : ''}}
              type='button' >
                {
                  time.split("-")[0]
                }
              </button>
              {
                sctime === time && <button onClick={()=>handleEvent(time)}  type='submit' className={`${time === sctime ? 'custom_btn_right_next' : 'd-none'}`}>Next</button>
              }
            </div>
          )
        })
      }

    </>

  )
}

export default Scheduled_Time