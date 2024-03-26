import React, { useEffect, useState } from 'react'
import "../assets/style/Productpromos.css"
import videos from "../assets/images/video2.mp4"
import loadinglogo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

const Productpromos = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
      console.log("loaded");
    }, 1200);
  }, [])
  return (
    <>
      {
        loading ? <>

          <div className='loading'>
            <img src={loadinglogo} className='loadinglogo' alt='loading' />
          </div>
        </> : <>
          <div className='productvideocontainer'>
            <div className='productvideocontant'>
              <video loop autoPlay>
                <source src={videos} type="video/mp4" />
              </video>
              {/* <div className='productvideocontantbtn'>
                <button><Link to={"/signup"} className='productvideocontantbtnlink'>Signup</Link></button>
              </div> */}
            </div>
          </div>
          <div>
          </div>
        </>
      }
    </>
  )
}

export default Productpromos