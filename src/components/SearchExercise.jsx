/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions} from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({setExercises , bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchexerciseData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions);
      console.log(bodyPartsData)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchexerciseData(); 
    
  }, [])

  const handleSearch = async () => {
    const exerciseData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions
    );
    const searchedExercise = exerciseData.filter((exercise) => 
    exercise.name.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
    )
    setSearch('')
    setExercises(searchedExercise)

  };



  return (
    <Stack alignItems="center" mt="150px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          heigh="79px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{p: '20px', width:'100%', position: 'relative'}}>  
          <HorizontalScrollbar data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
