import { FaBars,FaTimes } from 'react-icons/fa';
import '../style/index.css';
import React,{ useLayoutEffect,useState,useRef } from 'react';
import { NavLink,Link } from 'react-router-dom';
import gsap from 'gsap';
export default function Header(){
  //burger menu close and open
  const navRef= useRef(null);
  const showNav = ()=>{
    navRef.current.classList.toggle("open")
  }
  const closeNav = () => {
    navRef.current.classList.remove('open');
  };
  // animation of header
  const hd_logo=useRef(null);
  useLayoutEffect(()=>{
    gsap.fromTo(
     navRef.current,
     { opacity: 0, x: -200 },
     { opacity: 1, x: 0, duration:1.5 }
    )
    gsap.fromTo(
     hd_logo.current,
     { opacity: 0, y: -200 },
     { opacity: 1, y: 0, duration: 1 }
    )
    },[])
    return (
        <>
        <header className='d-flex'>
           <div className="container d-flex justify-content-center  align-items-center">
             <div className="logo-holder d-flex justify-content-center  align-items-center">
              <Link className='logo-img' to={'/home'}>
                 <img ref={hd_logo}  src="./imgs/mfLogo.png" alt="" />
              </Link>
             </div>
             <nav >
               <ul ref={navRef} className=' list-unstyled'>
                 <li>
                 <NavLink to='./home'  className="fs-5 text-decoration-none links" onClick={closeNav} >Home</NavLink>
                 </li>
                 <li>
                 <NavLink to='./about' className="fs-5 text-decoration-none links" onClick={closeNav} >About</NavLink>
                 </li>
                 <li>
                 <NavLink to='./Courses' className="fs-5 text-decoration-none links" onClick={closeNav} >Courses</NavLink>
                 </li>
                 <li>
                 <NavLink to='./Blog' className="fs-5 text-decoration-none links" onClick={closeNav} >Blogs</NavLink>
                 </li>
                 <li>
                 <NavLink to='./Contact' className="fs-5 text-decoration-none links" onClick={closeNav} >Contact</NavLink>
                 </li>
                 <button onClick={showNav} className='icon-close'>
                  <FaTimes/>
                 </button>
               </ul>
             </nav>
             <button onClick={showNav}  className='icon-open'>
                  <FaBars/>
                 </button>
           </div>
        </header>
       
        </>
    )
}