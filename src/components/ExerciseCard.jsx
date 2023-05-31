/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Button , Stack , Typography } from "@mui/material"

const ExerciseCard = ({exercise}) => {
  return (
    <Link to= {`/exercise/${exercise.id}`} className="exercise-card">
        <img src= {exercise.gifUrl}alt={exercise.name}  loading="lazy"/>
        <Stack direction='row'>

            <Button
            sx={{
              ml:'20px',
              color:'black',
              fontWeight: 'bold',
              backgroundColor: '#ffa9a9',
              textTransform: 'capitalize',
              fontSize : '14px',
              borderRadius: '20px'
            }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
            sx={{
                ml:'20px',
                color:'black',
                fontWeight:'bold',
                backgroundColor: '#fcc557',
                textTransform: 'capitalize',
                fontSize : '14px',
                borderRadius: '20px',
                textDecoration:'none'
              }}
            >
                {exercise.target}
            </Button>
            </Stack>
            
            <Typography ml='20px' fontSize='20px' fontWeight='bold' textTransform='capitalize'pb='10px' mt='10px' color='black'>
                {exercise.name}
            </Typography>
        
    </Link>
  )
}

export default ExerciseCard