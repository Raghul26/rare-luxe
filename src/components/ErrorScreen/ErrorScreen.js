import React from 'react'
import empty from "../assets/images/error.png"
import { Link } from 'react-router-dom';
import "../assets/style/FaviourtScreen.css"

const ErrorScreen = () => {
  return (
    <div className='Cartcontainer'>
      <div className='Cartcontant favouriteproudctno'>
        <p>Oops, we can't find the page you are looking for...</p>
        <div className='Cartemptyimage favouriteproudctno'>
          <img src={empty} alt='empty' />
        </div>
        <div className='Cartshopbutton favouriteproudctno'>
          <Link to={"/auth"} className='Cartshoplinkbutton'>Back To Home</Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorScreen