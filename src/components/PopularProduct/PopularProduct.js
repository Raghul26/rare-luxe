import React from 'react'
import "../assets/style/PopularProduct.css"
import populardata from "../Data/populardata";

const PopularProduct = () => {

    const productdata = populardata;

    return (
        <div className='popularproductcontainer'>
            <div className='popularproductcontent'>
                <div className='popularproducttitle'>
                    <p className='popularproductp'>OUR POPULAR PRODUCT</p>
                    <div className='popularproductsubtitle'>
                        <p className='popularproductsubp'>AIt’s time to your fashion game without breaking the bank! Dive into our
                            exclusive off sale and discover unbeatable deals on the most Luxury
                            products</p>
                    </div>
                </div>


                <div className='popularproduct'>
                    {
                        productdata.map((item, index) => (
                            <div className='popularproductcol' key={index}>
                                <img src={item.image} alt='popularproduct' className='popularproductimg' />
                                <div className='popularproductname'>
                                    <p className='popularproducttitle'>{item.name}</p>
                                    <p className='popularproductsubname'>{item.sublist}</p>
                                </div>
                                <div className='popularproductbtn'>
                                    <button className='popularproductbuy'>
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularProduct