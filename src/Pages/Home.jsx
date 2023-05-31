import {Box} from '@mui/material'
import { useState } from 'react'

import HeroBanner from '../components/HeroBanner'
import Exercise from '../components/Exercise'
import SearchExercise from '../components/SearchExercise'

const Home = () => {

  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercise
       setExercises={setExercises}
       bodyPart={bodyPart}
       exercises={exercises}
      />
    </Box>
  )
}

export default Home