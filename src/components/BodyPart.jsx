
import icon from '../assets/icons/gym.png'
import { Stack , Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const BodyPart = ({item , setBodyPart , bodyPart}) => {
  return (
    <Stack
    type = 'button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625': '',
        backgroundColor : "#fff",
        borderBottomLeftRadius : '20px',
        width: '180px',
        height : '180px',
        cursor : 'pointer',
        gap: '47px'
    }}
    onClick = {()=> {setBodyPart(item)
      window.scrollTo({top: 1800 , left: 100 , behavior: 'smooth'})
    }}
    
    >
        <img src={icon} alt="/" style={{width: '50px' , height: '50px'}} />
        <Typography fontSize='22px'fontWeight='bold'color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart