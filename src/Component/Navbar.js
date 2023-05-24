import React, { useRef } from 'react'
import './all.css'
import Time from './Time'
import IntroPage from './IntroPage'
import About from './About'
import { FaArrowDown } from 'react-icons/fa'
function Navbar() {
  const about = useRef(null)
  const skill = useRef(null)
  const projects = useRef(null)

  const ScrolltoSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }



  return (
    <div>
      <div className='btn-nav'>
        <div className='nav'>
        <button>Home</button>
        <button onClick={() => ScrolltoSection(about)}>About</button>
        <button onClick={() => ScrolltoSection(skill)}>Skill</button>
        <button onClick={() => ScrolltoSection(projects)}>Projects</button>
        </div>
        <Time />
        <FaArrowDown />
      </div>
      <IntroPage />
      <About 
      about={about} 
      skill={skill}
      project={projects}
      />
    </div>
  )
}

export default Navbar