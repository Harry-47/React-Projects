import { useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Controls from './Components/Controls'
import './App.css'

function App() {

 
  
  let heroData = [
    {text1: "Dive into", text2:"what you love"},
    {text1: "Indulge", text2:"your passion" },
    {text1: "Give in to", text2:"your passion"},
  ]
  const [isPlaying, setIsPlaying] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(
      
      () => {
        if (!isPlaying)
      setHeroIndex((heroIndex+1) % heroData.length)
     }, 2000)

     
      if(isPlaying){
        clearInterval(interval);
      }

     
   },[heroIndex])
    
  const togglePlayPause = () => {
    setIsPlaying(prevState => !prevState)
  }
  return (
    <>
    
      
      {/* <Navbar></Navbar> */}
      <Hero  index={heroIndex}isPlaying={isPlaying}></Hero>

      <Controls togglePlayPause={togglePlayPause} isPlaying={isPlaying} heroIndex={heroIndex} setHeroIndex={setHeroIndex} heroData={heroData[heroIndex]}></Controls>

    </>
  )
}

export default App
