import {Box} from '@mui/material'
import { useState , useEffect } from 'react'
import { useParams} from 'react-router-dom'

import {fetchData , exerciseOptions, } from '../utils/fetchData'
import Detail from '../components/Detail';

const ExerciseDetalis = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  
  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}/>
    </Box>
  )
}

export default ExerciseDetalis