import { use, useState } from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home.jsx"
import Courses from "./components/Courses.jsx"
import About from "./components/about.jsx"
import Blog from "./components/Blog.jsx"
import Contact from "./components/Contact.jsx"
import CourseDetails from './components/courseDetails.jsx'
import BlogDetails from './components/blogDetails.jsx'
import ScrollToTop from './components/data/scrolltotop.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      
          <Header/> 
          <ScrollToTop />
          <Routes>
           <Route path="/" element={<Home />} />
           <Route index path='/home' element={<Home/>}/>
           <Route path='/about' element={<About/>} />
           <Route path='/Courses' element={<Courses/>} />
           <Route path='/Blog' element={<Blog/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/Courses/:id' element={<CourseDetails/>} />
           <Route path='/Blog/:id' element={<BlogDetails/>} />
          </Routes>
          <Footer/>
  
    </>
  )
}

export default App
