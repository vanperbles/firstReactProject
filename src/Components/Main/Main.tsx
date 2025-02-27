import React from 'react'
import './main.scss'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


import img from '../../assets/img2.jpg'


const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CALTURAL RELAX',
    fees: '$700',
    description: 'The epitom of romance, Bora Bora is on of the best traveling destinationin the world. The place is know for the lauxirious stay and adventures activities.',
  }
]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt="" />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">
                    {destTitle}
                  </h4>

                  <span className="container flex">
                    <HiOutlineLocationMarker className='icon'/>
                    {location}
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
                </div>
                <button className='btn flex'>
                  Details <HiOutlineClipboardCheck  className='icon'/>
                </button>
              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Main