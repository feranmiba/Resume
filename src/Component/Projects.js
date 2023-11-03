import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Box from '@mui/material/Box'
import Details from './Details'
import { Link, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'


function Projects(props) {
  return (
    <section className=' border-b-2 pb-20'>
    <Typography textAlign={'center'} marginTop={5} fontWeight={800} variant='h4' fontFamily={'Cinzel Decorative'}>Projects</Typography>
    <section className=' flex flex-wrap justify-between  mt-14'  ref={props.project}>
    {Details.map((det) => ( <motion.div initial={{ opacity: 0, y: 172 }} whileInView={{ opacity: 1, y: 0, transitionDuration: 10}}  key={det.name} class=' mt-5 lg:mt-0 border sm:w-[48%] md:w-[48%] lg:w-[31%] bg-white rounded-xl shadow-2xl pb-7'>
    <ImageList  class='flex flex-wrap justify-around'>
      <ImageListItem key={det.name} class='flex flex-wrap '>
      <motion.img initial={{opacity: 1}}
         whileHover={{
        scale: 1.1,
        transistion: { duration: 50} }} src={det.image1} alt={det.name}  style={{ height: '50%', width: '100%', borderTopLeftRadius: '2mm', borderTopRightRadius: '2mm'}}/>
         <motion.img initial={{opacity: 1}}
         whileHover={{
            scale: 1.3,
            transistion: { duration: 50} }} src={det.image3} alt={det.name} style={{ width: '50%', height: '40%'}} />
            <motion.img initial={{opacity: 1}}
            whileHover={{
               scale: 1.3,
               transistion: { duration: 50} }} src={det.image2} alt={det.name}  style={{width:'50%', height: '40%' }}/>
      </ImageListItem>
      <Stack  direction={'column'}>
      <Typography fontWeight={700} fontFamily={'Cinzel Decorative'} marginBottom={1}>{det.name}</Typography>
      <Stack direction={'column'}>
      <Stack direction={'row'}><Typography class='text-lg md:text-base xl:text-lg'>Live Link : </Typography> <Link fontFamily={'Cinzel Decorative'} fontSize={12}> <a href={det.Link}>{det.LinkName}</a> </Link> </Stack>
      <Stack direction={'row'}><Typography class='text-lg md:text-base xl:text-lg'>Repo Link : </Typography> <Link fontSize={12}> <a href={det.Repo}>{det.RepoLinkName}</a></Link></Stack>
      </Stack>
      </Stack>
    </ImageList>
    </motion.div>    ))}
    </section>
    </section>
  )
}

export default Projects

