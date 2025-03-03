import React, {useEffect} from 'react'
import './main.scss'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


import img from '../../assets/img2.jpg'
import img2 from '../../assets/img3.jpg'
import img3 from '../../assets/img4.jpg'
import img4 from '../../assets/img5.jpg'
import img5 from '../../assets/img6.jpg'
import img6 from '../../assets/img7.jpg'
import img7 from '../../assets/img8.jpg'
import img8 from '../../assets/img9.jpg'
import img39 from '../../assets/img.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CALTURAL RELAX',
    fees: '$800',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Wili Fall',
    location: 'Ghana',
    grade: 'CALTURAL RELAX',
    fees: '$700',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Boti Falls',
    location: 'Ghana',
    grade: 'CALTURAL RELAX',
    fees: '$900',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'The love we give',
    location: 'Australia',
    grade: 'CALTURAL RELAX',
    fees: '$800',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Wili Fall',
    location: 'Ghana',
    grade: 'CALTURAL RELAX',
    fees: '$700',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Boti Falls',
    location: 'Ghana',
    grade: 'CALTURAL RELAX',
    fees: '$900',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  }

]

const Main = () => {
  useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt="" />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">
                    {destTitle}
                  </h4>

                  <span className="container flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>                    
                  </div>
                  <div className="desc">
                      <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck  className='icon'/>
                  </button>
                </div>
              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Main