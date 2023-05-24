import React from 'react'
import './all.css'
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaTelegram, FaLocationArrow, FaPhone, FaMailBulk} from 'react-icons/fa'


function Footer() {
  return (
    <footer>
      <div className='ami'>
      <h1>Amiola Demilade</h1>
          <p>Freelancer | Frontend Developer</p>
          </div>
      <section className='foot'>
      <div className='soc'>
        <a href="https://www.facebook.com/amiola.emmanuel.5"><FaFacebook /> </a> 
        <a href="https://twitter.com/emmanuel_amiola"><FaTwitter />   </a>
        <a href="https://github.com/feranmiba"> <FaGithub /></a> 
        <a href="https://web.telegram.org/z/#-1422953789"> <FaTelegram /></a> 
        <a href="https://github.com/feranmiba"> <FaLinkedin /></a> 

        </div>

        <div className='col'>
            <h4>Link</h4>
      
            <a href="./">Home</a>
             <a href="./">Projects</a>
             <a href="./">About</a>
             <a href="./">Message</a>
           
        </div>

      

        <div className='col'>
            <h4>Services</h4>
            <p>Web design</p>
            <div class="row">
             
            </div>
            <p>Web development</p>
          
        </div>

        <div className='col'>
            <h4>Contact</h4>
            <p><b><FaLocationArrow /> Adress:</b> 46, community road isawo Lagos Nigeria</p>
            <p><b><FaPhone /> Phone:</b> +234 70 1904 0834 </p>
            <p><b><FaMailBulk /> E-mail:</b> amiolademilade@gmail.com</p>
            <div class="follow">
                <h5> Follow me</h5>
            </div>
            </div>



        
           
        </section>
    </footer>
  )
}

export default Footer