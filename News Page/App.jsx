import { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsitemList from './Components/NewsitemList'
import Container from './Components/Container'
import './App.css'

function App() {
  const [category, setCategory] = useState([])

  return (
    <>
      <Navbar category={category} setCategory={setCategory}></Navbar>
      <Container>
      <NewsitemList category={category}></NewsitemList>
      </Container>
    </>
  )
}

export default App
