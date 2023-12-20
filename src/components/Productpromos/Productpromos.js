import React, { useEffect, useState } from 'react'
import "../assets/style/Productpromos.css"
import videos from "../assets/images/video2.mp4"
import img from "../assets/images/favourite.png"
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
  // const companydata = [
  //   {
  //     id: "0",
  //     image: img
  //   },
  //   {
  //     id: "1",
  //     image: img
  //   },
  //   {
  //     id: "2",
  //     image: img
  //   },
  //   {
  //     id: "3",
  //     image: img
  //   }
  // ]
  return (
    <>
      <div className='productvideocontainer'>
        <div className='productvideocontant'>
          <video loop autoPlay controls>
            <source src={videos} type="video/mp4" />
          </video>
          <div className='productvideocontantbtn'>
            <button><Link to={"/signup"} className='productvideocontantbtnlink'>Signup</Link></button>
          </div>
        </div>
      </div>
      <div>
        {/* {
          companydata.map((item, index) => (
            <div key={index} className='companydata'>
              <img src={item.image} alt='' width="90px" height="90px" />
            </div>
          ))
        } */}
      </div>
    </>
  )
}

export default Productpromos