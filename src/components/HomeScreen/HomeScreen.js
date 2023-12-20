import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "../assets/style/HomeScreen.css"
import OfferImage1 from "../assets/images/Trending now (1).jpg";
import OfferImage2 from "../assets/images/SHOP COLLECTION.jpg"
import PopularProduct from '../PopularProduct/PopularProduct';
import loadinglogo from "../assets/images/logo.png"
import ExclusiveScreen from '../ExclusiveScreen/ExclusiveScreen';
import NewProduct from '../New product/NewProduct';
import Productsreview from '../Productsreview/Productsreview';
import Productpromos from "../Productpromos/Productpromos"
import Productapp from '../Productapp/Productapp';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';

const HomeScreen = () => {
    const loggedin = window.localStorage.getItem("loggeduser")
    const [cartmessage, setcartmessage] = useState(true)
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
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
                    <Navbar />
                    <div className='Homecontainer'>
                        <div className='Homecontent'>
                            <img src={OfferImage1} className='img1' alt='offer_img' />
                            <img src={OfferImage2} className='img2' alt='offer_img' />
                        </div>
                    </div>
                    <div>
                        <PopularProduct />
                        <ExclusiveScreen />
                        <NewProduct cartmessage={cartmessage} />
                        <Productpromos />
                        <Productsreview />
                        <Productapp />
                        <Newsletter />
                        <Footer />
                    </div>
                </>
            }
        </>
    )
}

export default HomeScreen