import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import React from 'react'
import { FaCss3, FaGithub,  FaHtml5, FaJs,  FaReact, FaSass,} from 'react-icons/fa'
import { motion } from 'framer-motion'

const skills = [
  {
    icon: <FaGithub class='text-2xl' />,
    skill: 'GITHUB'
  }, 
  {
    icon: <FaHtml5 class='text-2xl'/>,
    skill: 'HTML 5'
  },
  {
    icon: <FaCss3 class='text-2xl'/>,
    skill: 'CSS'
  },
  {
    icon: <FaJs class='text-2xl'/>,
    skill: 'JAVASCRIPT'
  },
  {
    icon: <FaReact class='text-2xl'/>,
    skill: 'REACT JS'
  },
  {
    icon: <svg fill="#000000" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
    <path d="M200,108H148.12207l57.37109,54.18408A8,8,0,0,1,200,176H136v60a8,8,0,0,1-13.49316,5.81592l-72-68A7.99941,7.99941,0,0,1,48,168V100a8.00008,8.00008,0,0,1,8-8h51.87793L50.50684,37.81592A8,8,0,0,1,56,24H200a8.00008,8.00008,0,0,1,8,8v68A8.00008,8.00008,0,0,1,200,108Z"/>
  </svg>,
    skill: 'FRAMER'
  },

  {
    icon: <FaSass class='text-2xl' />,
    skill: 'SCSS'
  }, 
  {
    icon: <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="none"/>
    <path d="M8,16.61V15.37l6-3.46V7.23L9,10.12,4,7.23V13l-1,.58L2,13V5l1.07-.62L9,7.81l3.93-2.27,2-1.16L16,5v8.06L10.92,16,15,18.33l5-2.9V11l1-.58L22,11v5.58l-7,4.06-7-4M22,9.75l-1,.58-1-.58V8.58L21,8l1,.58Z"/>
  </svg>,
    skill: 'MUI'
  },
  {
    icon:<svg width="30px" height="30px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z" fill="#000000"/>
    </svg>,
    skill: 'Typescript'
  }
]



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Skills(props) {
  return (
    <section ref={props.skill} class=' border-b-2'>
       <div class='text-center py-10'>
        <div className='tech'>
        <Typography marginBottom={5} variant='h4' fontWeight={700} fontFamily={'Cinzel Decorative'}>Tech Stack</Typography>
     <motion.div   className="container"
     variants={container}
     initial="hidden"
     whileInView="visible" class='flex flex-wrap justify-center text-center gap-5'>
     {skills.map((skilled) => ( <motion.p className="item" variants={item} class='border bg-white py-5 px-14 text-center rounded-lg shadow-2xl'>
        <Stack direction={'column'} spacing={2}>
      <p class='pl-4'>{skilled.icon}</p>   
        <Typography fontFamily={'Cinzel Decorative'}>{skilled.skill}</Typography> 
        </Stack>
        </motion.p>))}

        </motion.div> 
        </div>
        </div>
    </section>
  )
}

export default Skills