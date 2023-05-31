/* eslint-disable react/prop-types */
import {Stack , Button , Typography } from "@mui/material"

 import BodyPartImg from '../assets/icons/body-part.png'
 import EquipmentImg from '../assets/icons/equipment.png'
 import TargetImg from '../assets/icons/target.png'

const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDeatail = [
    {
      icon : BodyPartImg,
      title: bodyPart
    },
    {
      icon: TargetImg,
      title: target
    },
    {
      icon:EquipmentImg,
      title:equipment
    }
  ]
  return (
  
    <Stack gap='60px' sx={{flexDirection: {lg:'row'} , p:'40px' , alignItems: 'center'}}>
      <img src= {gifUrl}alt={name} loading='lazy'className="detail-image"/>
      
     <Stack sx={{gap: {lg: '35px' ,  xs: '20px'} , textTransform: 'capitalize'}}>
      <Typography variant="h3">
        {name}
      </Typography>
      <Typography variant='h6'>
         {name} bup is one of the best exercises to target your {target}.It will help you improve your
          mood and gain energy.
      </Typography>
      {extraDeatail.map((item)=> (
        <Stack key={item.title} direction='row'gap='24px' alignItems='center'>
          <Button sx={{backgroundColor: '#fff2bd', borderRadius: '50%', width:'80px', height:'80px'}}>
            <img src={item.icon} alt={item.title} />
          </Button>
          <Typography variant="h5">
            {item.title}
          </Typography>
        </Stack>

      ))}
     </Stack>
    </Stack>
  )
}

export default Detail