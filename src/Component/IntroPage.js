import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { FaGithub, FaTwitter, FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa'


function IntroPage() {
  return (
   <header className='hero'>
    <Container class='text-white p-10' fixed>
    <Typography letterSpacing={5}fontWeight={700} variant='h4' fontFamily={'Monoton'} >amiola</Typography>
    <Box class=' flex justify-between p-14 sm:p-14 mt-10 md:mt-0 md:gap-36 lg:p-20'>
      <Box>
        <div>
        <Typography fontFamily={'Cinzel Decorative'} class='text-2xl sm:text-4xl mb-3 font-black md:text-5xl'>Frontend <br/> Developer</Typography>
        <Typography marginBottom={10} fontFamily={'Cinzel Decorative'} class='text-sm mb-10 md:text-lg'>I like to craft and build scalable frontend product with great user interface, animations, responsive and user experince website.</Typography>
        </div> 
        <Stack direction={'row'} spacing={4}>
        <div>
        <Typography fontFamily={'Cinzel Decorative'} class='text-sm md:text-lg'>Highly skilled in all current Front-end tools in the enhancement of designing a beautiful UI. </Typography>
        </div>
        <div>
        <Typography fontFamily={'Cinzel Decorative'} class='text-sm md:text-lg'>Over a year of experience building products.</Typography>
        </div>
        </Stack> 
      </Box>

      <Box class='w-[30%] hidden md:block'>
      <Stack spacing={3}>
      <a href='https://github.com/feranmiba'><FaGithub class='text-3xl'/></a>
      <a href="https://twitter.com/emmanuel_amiola"> <FaTwitter class=' text-3xl'/></a>   
      <a href="./"> <FaLinkedin class='text-3xl'/></a>  
      <a href="https://www.facebook.com/amiola.emmanuel.5"><FaFacebook class='text-3xl'/> </a> 
      <a href="https://web.telegram.org/z/#-1422953789">   <FaTelegram class='text-3xl'/></a>
      </Stack>
      </Box>
      </Box>
    </Container>
   </header>
  )
}

export default IntroPage