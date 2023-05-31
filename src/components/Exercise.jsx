/* eslint-disable react/prop-types */
import { useState , useEffect } from "react"
import  Pagination  from "@mui/material/Pagination"
import { Stack , Box , Typography } from "@mui/material"

import ExerciseCard from "./ExerciseCard"
import { fetchData , exerciseOptions } from "../utils/fetchData"


const Exercise = ({exercises , setExercises , bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage= 6;
 
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e , value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800 , behavior: 'smooth'})
  }

  useEffect(()=> {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[bodyPart])

  return (
    <Box id ='exercise'
    sx={{
      mt:{lg: '110px'}}}
      mt='50px'
      p='40px'
    >
      <Typography variant="h2" mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row'
      sx={{gap: {lg: '110px', xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'
      >
        {currentExercises.map((exercise , index) => (
          <ExerciseCard exercise={exercise} key={index}/>
        ))}
      </Stack>
     
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercise