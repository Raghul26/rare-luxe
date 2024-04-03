import React, { useEffect, useState } from 'react'
import "../assets/style/Scrolltop.css"
import scrollbuttonimg from "../assets/images/inof1.png"

const Scrolltop = () => {
  const [movedtotop, setmovedtotop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1800) {
        setmovedtotop(true)
      } else {
        setmovedtotop(false)
      }
    })
  }, [])

  const movetotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        movedtotop && (
          <div className='Scrolltopcontainer'>
            <div className='Scrolltopcontant'>
              <img src={scrollbuttonimg} alt='scrolltotop' onClick={(e) => movetotop(e)} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Scrolltop