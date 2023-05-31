import { useState } from "react"
import {Box , Stack , Typography , Button } from '@mui/material'
 
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{mt : {lg: '110px' , xs:'70px'},
    ml: {sm: '50px'}
    }} position='relative' p='20px'
    >
      <Typography fontWeight='600' fontSize='26px' color='#FF2625' mb={2}>
        Fitness Club
      </Typography>
      <Typography  fontWeight="700" sx={{fontSize: {lg: '44px' , xs: '40px'}}}>
      Eat Sleep, Gym, <br/> and Repeat.
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>
      Make yourself stronger than your excuses.
      </Typography>
      <Button variant="contained" color="error" mb={2} href="#exercise">
        Explore Exercise
      </Button>
      <img src={HeroBannerImage} alt="/" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
