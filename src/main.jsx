import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/courses.css'
import './style/contact.css'
import './style/index.css'
import './style/blog.css'
import './style/about.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     <App />
    </Router>
  </StrictMode>,
)
