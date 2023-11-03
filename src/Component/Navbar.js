import React, { useRef, useState, useEffect } from 'react'
import { useAnimate, stagger  } from 'framer-motion'
import Close from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Menu from '@mui/icons-material/Menu'
import Want from './Want'
import IntroPage from './IntroPage'
import About from './About'
import WbSunnyRounded from '@mui/icons-material/WbSunny'
import Typography from '@mui/material/Typography'
import Time from './Time'
import Box from '@mui/material/Box'






function Navbar() {
  const [visible, setVisible] = useState(false)
 

  const toggleMenu = () => {
    setVisible(!visible)
  }



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
    <Box sx={{ flexGrow: 1}}>
    <AppBar position='static'>
    <Toolbar sx={{ justifyContent: 'space-between'}}>
    <Typography><Time /> </Typography>
    
     <p class='flex md:hidden' onClick={toggleMenu}><Menu  /></p>
     
  {visible && ( <motion.div initial={{  x: 200  }} whileInView={{ x: 88 }} class='ml-24 fixed top-0 md:hidden'> <div class='flex flex-col bg-slate-300 items-start justify-start right-[-300px] w-[500px] h-[100vh] pt-10 pl-8  gap-7 md:hidden'>
 <p onClick={toggleMenu} class=' duration-100' ><Close  /></p> 
    <button>Home</button>
    <button onClick={() => ScrolltoSection(about)}>About</button>
    <button onClick={() => ScrolltoSection(skill)}>Skill</button>
    <button onClick={() => ScrolltoSection(projects)}>Projects</button>
    <WbSunnyRounded />
    </div> </motion.div>)},

    <div class='absolute hidden -ml-28 pl-14 pr-5 flex-col bg-slate-300 pb-80 pt-12  md:pb-0 md:pt-0 md:bg-transparent md:mt-0 md:relative  md:flex md:flex-row gap-7'>
    <button>Home</button>
    <button onClick={() => ScrolltoSection(about)}>About</button>
    <button onClick={() => ScrolltoSection(skill)}>Skill</button>
    <button onClick={() => ScrolltoSection(projects)}>Projects</button>
    <WbSunnyRounded />
    </div>
    </Toolbar>
    </AppBar>
    </Box>
    <IntroPage />
    <About  
    about={about} 
    skill={skill}
    project={projects}
    />
    <Want />
    </div>
  )
}

export default Navbar 


//
// import About from './About'
// import { FaArrowDown } from 'react-icons/fa'
// <div className='btn-nav'>
// <div className='nav'>
// <button>Home</button>
// <button onClick={() => ScrolltoSection(about)}>About</button>
// <button onClick={() => ScrolltoSection(skill)}>Skill</button>
// <button onClick={() => ScrolltoSection(projects)}>Projects</button>
// </div>
// <Time />
// <FaArrowDown />
// </div>
// 
// <About 
// about={about} 
// skill={skill}
// project={projects}
// />