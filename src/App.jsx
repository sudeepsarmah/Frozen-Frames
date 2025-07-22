import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Bio from './pages/Bio'
import './css/App.css'
import Home from './pages/Home'
import Posters from './pages/Posters'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posters' element={<Posters />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/bio' element={<Bio />} />
        </Routes>
        <ScrollToTop></ScrollToTop>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
