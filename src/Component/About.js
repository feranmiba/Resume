import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Message from './Message'
import Want from './Want'
import { FaCode, FaHandPaper } from 'react-icons/fa'


function About(props) {
  return (
    <section className='sec' ref={props.about}>
        <div className='about-div'>
            <div>
            <b className='code'><FaCode /></b>
            <div  className='about'>
            <h1>About</h1>
            <p className='hey'><b>Hey<FaHandPaper /></b>  <span>,i'm Demilade</span></p>
            <p><b className='great'>Great! You have arrived here</b></p>
            <p className='fir'>I'm a self taught Frontend developer and a Freelancer </p>
            <p className='mo'>I am self-taught and i love talking & building Web-site and as well developing and redesigning it.<br/>
             I've been programming, building Web-site and developing basic web for more than 2 years and looking forward to work professionally in a company.
             I've built and deployed numerous website clone applications with several APIs and can interact with third parties. I'm currently in search of any Internship company to
             work with in order to be more versatile with the web system.
             
            </p>
            </div>
            </div>
        </div>
        <Skills 
        skill={props.skill} 
        />
        <Projects 
        project={props.project}
        />
        <Message />
        <Want />
    </section>
  )
}

export default About