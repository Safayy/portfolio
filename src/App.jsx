import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Blog from './components/Blog'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App