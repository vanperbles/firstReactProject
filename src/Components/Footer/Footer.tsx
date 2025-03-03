import React,{useEffect} from 'react'
import './footer.css'
import './footer.scss'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";

import Aos from 'aos';
import 'aos/dist/aos.css';

import video2 from '../../assets/video2.mp4'

const Footer = () => {

  useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

  return (
    <section className="footer">
      <div className="vidDiv">
        <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secondContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with US</h2>
          </div>

          <div className="input flex">
            <input data-aos="fade-up" type="text" placeholder='Enter email address' />
            <button data-aos="fade-up" className='btn flex' typeof="submit" >Send <FiSend className='icon'/></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className='icon'/>
              Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerPraragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde autem quisquam esse eligendi optio expedita voluptas commodi tempore itaque amet, voluptatum aliquam nam ab laudantium eius sapiente doloribus beatae!
            </div>
            <div className="footerSocials flax">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube  className='icon'/>
              <AiFillInstagram  className='icon'/>
              <FaTripadvisor  className='icon'/>              
            </div>
          </div>

          <div className="footerLinks grid">
            {/* {First Div } */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Service
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourisim
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
              </li>
            </div>

            {/* {Second Div } */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTINES
              </span>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Booking
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              RentCars
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Hotelworld
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
              </li>
            </div>

            {/* {Third Div } */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTS
              </span>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              London
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Carlifonia
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Acrra
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              DeltaState
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Koforidua
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVELING WEBSITE THEME</small>
            <small>COPYRIGHTS RESEVED - PERBLES 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer