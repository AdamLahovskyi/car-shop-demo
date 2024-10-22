import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ToggleTheme from './Components/ToggleTheme/ToggleTheme'

function App() {

  return (
    <>
    <Navbar/>
    <ToggleTheme/>
    <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
