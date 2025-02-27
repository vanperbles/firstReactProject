import './navbar.css'
import './navbar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useState } from 'react';

const Navbar = () => {
const [active, setActive] = useState('navBar')
// fucntion to show toggle navBar
const showNav = () =>{
  setActive('navBar setActiveNavbar')
}

// fuction to close navebar toggle
const removeNavbar = () =>{
  setActive('navBar')
}


  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="" className='logo flex'>
            <h1> <MdOutlineTravelExplore className='icon' />Travels.</h1>

          </a>
          
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Package</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
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