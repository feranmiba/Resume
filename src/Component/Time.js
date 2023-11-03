import React, { useEffect, useState } from 'react'

function Time() {

    const [morningmessage, SetMorningMessage] = useState()
    const [date, setdate] = useState(new Date())

   const dates = new Date();
   const day = `${dates.getDate()}`.padStart(2, 0)
   const month = dates.getMonth() + 1
   const year = dates.getFullYear() 
   const hours = dates.getHours()
   let da = new Date().toLocaleTimeString()
   
   const nowDay = `${day}/${month}/${year}  ${da}`

   function refreshClock() {
    setdate(new Date())
   }

 useEffect(() => {
    const timerId = setInterval(refreshClock, 1000); 
        return function cleanUp() {
           clearInterval(timerId) 
        };
   
 }, [])
 useEffect(() => {
    if (hours <=  11) {
        SetMorningMessage(`Good Morning`)
    } else if (hours <= 18) {
        SetMorningMessage(`Good Afternoon`)
    } else if(hours <= 23) {
        SetMorningMessage(`Good Evening`)
    }
 }, [])
   
 

  return (
    <div>
        <b
        style={{
            color: `#fff`
        }}
        >{nowDay}  {morningmessage && <em>{morningmessage}</em>}</b>
    </div>
  )
}

export default Time
