import {Box} from '@mui/material'
import {Routes , Route} from 'react-router-dom'


import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'
import ExerciseDetalis from  './Pages/ExerciseDetalis'

function App() {
  return (
    <Box width='400px' sx={{ width: {xl:'1488px'} }} m='auto'> 
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/exercise/:id' element= {<ExerciseDetalis/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
