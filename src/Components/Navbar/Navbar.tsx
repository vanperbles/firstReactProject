import './navbar.css'
import './navbar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
const [navBarActive, setnavBarActive] = useState('navBar')
// fucntion to show toggle navBar
const showNav = () =>{
  setnavBarActive('navBar setActiveNavbar')
}

// fuction to close navebar toggle
const removeNavbar = () =>{
  setnavBarActive('navBar')
}


  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="" className='logo flex'>
            <h1> <MdOutlineTravelExplore className='icon' />Travels.</h1>

          </a>
          
        </div>

        <div className={navBarActive}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to={'/'} className="navLink">Home</NavLink>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Package</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <NavLink to={'/about'} className="navLink">About</NavLink>
              
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <NavLink to={'/contact'} className="navLink">Contact</NavLink>
            </li>

            <button className='btn'>
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavBar"><IoIosCloseCircle className='icon'/></div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar