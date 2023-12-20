import React from 'react'
import "../assets/style/Productapp.css"
import apppalystoreimg from "../assets/images/google-play-and-apple-app-store-logos-22.png"
import appimg from "../assets/images/iPhone 15 Pro Portrait Mockup (1).jpg"
import appimgback from "../assets/images/vecteezy_abstract-speckles-dots-shapes-element_12597156.png"

const Productapp = () => {
    return (
        <div className='productappcontainer'>
            <div className='productappcontain'>
                <div className='productapprow'>
                    <div className='productappcol'>
                        <div className='productapp_top'>
                            <p className='productapp_heading'>Download the app and get voucher!</p>
                            <p className='productapp_subheading'>Create an account to get access to exclusive offers and discounts</p>
                        </div>
                        <div className='productapp_palystore'>
                            <img src={apppalystoreimg} alt='apppalystoreimg' />
                        </div>
                    </div>
                    <div className='productappcol productappimg'>
                        <div className='productapp_img'>
                            <div className='productapp_imgdesign'>
                                <div className='productapp_appleimg'>
                                    <img src={appimg} alt='' className='productapp_appimg' />
                                </div>
                                <div className='productapp_appback'>
                                    <img src={appimgback} alt='' className='productapp_appimgback' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productapp