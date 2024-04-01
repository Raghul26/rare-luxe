import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FaviourtScreen = () => {
  const { userfavourite } = useSelector((state) => state.cart)
  console.log(userfavourite, "added to favourite");
  return (
    <div>
      <Link to={'/'}><p>back to homescreen</p></Link>
      {
        userfavourite.map((faviourt, index) => {
          return (
            <div key={index}>
              <img src={faviourt.image} alt='favproduct' style={{
                aspectRatio: '3/3',
                height: `270px`
              }} />
              <p>{faviourt.productname}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FaviourtScreen