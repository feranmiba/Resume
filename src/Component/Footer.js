import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Home from '@mui/icons-material/Home'
import PhoneAndroid from '@mui/icons-material/PhoneAndroid'
import Mail from '@mui/icons-material/Mail'
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaTelegram} from 'react-icons/fa'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Copyright from '@mui/icons-material/Copyright'
import Web from '@mui/icons-material/Web'
import WebAsset from '@mui/icons-material/WebAsset'
import Typography from '@mui/material/Typography'


function Footer() {
  return (
    <footer class='bg-slate-200 mt-5 py-14'>
    <Box>
    <Container>
    <Stack direction={'column'}>
    <Typography variant='h5' fontFamily={'Cinzel Decorative'} fontWeight={700}>Amiola Demilade</Typography>
    <Typography fontFamily={'Cinzel Decorative'}>Frontend Developer</Typography>
    </Stack>

    <div class='pt-8'>
   

    <Stack direction={'row'} spacing={2}>
    <a href="https://www.facebook.com/amiola.emmanuel.5"><FaFacebook class='text-2xl  text-blue-600'/> </a> 
            <a href="https://twitter.com/emmanuel_amiola"><FaTwitter class='text-2xl  text-blue-600'/>   </a>
            <a href="https://github.com/feranmiba"> <FaGithub class='text-2xl  '/></a> 
            <a href="https://web.telegram.org/z/#-1422953789"> <FaTelegram class='text-2xl  text-blue-600'/></a> 
            <a href="https://github.com/feranmiba"> <FaLinkedin class='text-2xl  text-blue-600'/></a> 
    </Stack>


    <Stack class='flex flex-wrap justify-between pt-8 mt-5 gap-5'>
    <Stack direction={'column'} spacing={2}>
    <Typography variant='h5' fontFamily={'Cinzel Decorative'}>About</Typography>
    <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}> <BusinessCenterIcon />About us </Typography></Stack> 
    <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}> <WebAsset /> Disclamer</Typography></Stack> 
    </Stack>

    <Stack direction={'column'} spacing={2}>
    <Typography variant='h5' fontFamily={'Cinzel Decorative'}> Services</Typography>
    <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}> <Web /> Web design</Typography></Stack> 
    <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}> <WebAsset /> Web development</Typography></Stack> 
    </Stack>


    <Stack direction={'column'} spacing={2}>
    <Typography variant='h5' fontFamily={'Cinzel Decorative'}> Contact</Typography>
   <Stack direction={'row'}> <Typography fontFamily={'Cinzel Decorative'}><Home /> Adress: 46, community road isawo Lagos Nigeria</Typography></Stack>
   <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}><PhoneAndroid /> Phone: +234 70 1904 0834</Typography></Stack> 
   <Stack direction={'row'}><Typography fontFamily={'Cinzel Decorative'}><Mail /> E-mail: amiolademilade@gmail.com</Typography></Stack> 
    </Stack>


    </Stack>
    </div>
    <Typography textAlign={'center'} marginTop={5} fontFamily={'Monotov'} textTransform={'uppercase'}><Copyright /> Amiola Demilade</Typography>
        </Container>
        </Box>
    </footer>
  )
}

export default Footer;