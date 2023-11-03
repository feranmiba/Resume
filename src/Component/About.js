import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Message from './Message'
import Want from './Want'
import Typography from '@mui/material/Typography'
import { FaCode } from 'react-icons/fa'
import Container  from '@mui/material/Container'


function About(props) {
  return (
    <section  className='about'  ref={props.about}>
    <Container>
        <div class='text-center border-b-2'>
            <div class='py-14'>
            <Typography variant='h5' marginBottom={1} fontFamily={'Cinzel Decorative'}>About</Typography>
            <Typography marginBottom={1} fontFamily={'Cinzel Decorative'}>Great! You have arrived here</Typography>
            <Typography marginBottom={1} fontFamily={'Cinzel Decorative'}>I'm a self taught Frontend developer.</Typography>
            <Typography fontFamily={'Cinzel Decorative'}>I'm a passionate frontend developer with over a year of professional experience, dedicated to crafting exceptional user experiences through clean, responsive, and visually appealing web applications. My journey in web development has been marked by a commitment to staying up-to-date with the latest technologies and best practices, ensuring that the products I create are not just functional but also cutting-edge. </Typography>
            </div>
        </div>
        <Skills 
        skill={props.skill} 
        />
        <Projects 
        project={props.project}
        />
        <Message />
        </Container>
    </section>
  )
}

export default About