import React from 'react'

function Message() {
  return (
    <section class="skill">

        <section className='talk'>
        <h2>let's_talk</h2>
    
        <p>LEAVE A MESSAGE. I would love to hear from you</p>

       <p> <input type="text" placeholder='Your Name'/></p>
       <p> <input type="email" placeholder='E-mail'/></p>
       <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>

       <div>
        <button>Send</button>
       </div>
        </section>
    </section>
  )
}

export default Message