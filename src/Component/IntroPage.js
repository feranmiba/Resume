import React from 'react'
import {  FaConnectdevelop, FaHandPeace } from 'react-icons/fa'
import img from './Image/cv.jpg'
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaTelegram, FaDownload } from 'react-icons/fa'

function IntroPage() {


  return (
   <header>
      <div className='icns'>
         <a href="https://github.com/feranmiba"> <FaGithub /></a>
         <a href="https://twitter.com/emmanuel_amiola"> <FaTwitter /></a>   
         <a href="./"> <FaLinkedin /></a>  
        <a href="https://www.facebook.com/amiola.emmanuel.5"><FaFacebook /> </a> 
         <a href="https://web.telegram.org/z/#-1422953789">   <FaTelegram /></a>
    </div>



    <section>
        <h2> Hello There <FaHandPeace/></h2>
        <h1>amiola demilade <FaConnectdevelop/></h1>
        <p>Freelancer | Frontend developer</p>
        <span>
        <button className='pro'> <a href={img}>Resume <FaDownload /> </a></button>
            <button className='con'>Contact</button>
            
        </span>
    </section>
  
   </header>
  )
}

export default IntroPage