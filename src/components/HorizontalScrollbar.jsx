/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box , Typography} from '@mui/material'


import leftArrow from '../assets/icons/left-arrow.png'
import rightArrow from '../assets/icons/right-arrow.png'
import BodyPart from './BodyPart'

const LeftArrow = () =>{
  const {scrollPerv} = useContext(VisibilityContext)
  return(
    <Typography onClick = {() => scrollPerv()} className='right-arrow'>
      <img src= {leftArrow} alt="/" />
    </Typography>
  )
  };

  const RightArrow = () =>{
  const {scrollNext} = useContext(VisibilityContext);

  return(
    <Typography onClick = {() => scrollNext()} className='left-arrow'>
      <img src= {rightArrow} alt="/" />
    </Typography>
  )
  };

const HorizontalScrollbar = ({data, setBodyPart , bodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((item)=>(
            <Box 
            key={item.id || item}
            itemID={item.id || item}
            title= {item.id || item}
            m='0 40px'
            >
                <BodyPart item ={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
            </Box>
         ))} 
    </ScrollMenu>
  
  );
};

export default HorizontalScrollbar