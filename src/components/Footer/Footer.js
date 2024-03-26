import React from 'react'
import "../assets/style/Footer.css"
import { useState, useEffect } from 'react'
import logo from "../assets/images/logo.png"

const Footer = () => {

    const [year, setyear] = useState("")
    useEffect(() => {
        // const today = new Date
        const year = new Date().getFullYear()
        console.log(year, "year");
        setyear(year)
    }, [])

    return (
        <div className='footercontainer'>
            <div className='footercontant'>
                <div className='footermenucontant'>
                    <div className='footermenurow'>
                        <div className='footemenucol'>
                            <p className='footemenucoltitle'>Rare & Luxe</p>
                            <p>Who We Are</p>
                            <p>Join Our TeamTerms & Conditions</p>
                            <p> We Respect Your Privacy</p>
                            <p>Fees & Payments</p>
                            <p>Returns & Refunds Policy</p>
                            <p>Promotions Terms & Conditions</p>
                        </div>
                        <div className='footemenucol'>
                            <p className='footemenucoltitle'>Help</p>
                            <p>Who We Are</p>
                            <p>Join Our TeamTerms & Conditions</p>
                            <p> We Respect Your Privacy</p>
                            <p>Fees & Payments</p>
                            <p>Returns & Refunds Policy</p>
                            <p>Promotions Terms & Conditions</p>
                        </div>
                        <div className='footemenucol'>
                            <p className='footemenucoltitle'>Shop by</p>
                            <p>Track Your Order</p>
                            <p>Frequently Asked Questions</p>
                            <p>Returns</p>
                            <p>Cancellations</p>
                            <p>Payments</p>
                            <p>Customer Care</p>
                            <p>How Do I Redeem My Coupon</p>
                        </div>
                        <div className='footemenucol'>
                            <p className='footemenucoltitle'>Follow us</p>
                            <p>Who We Are</p>
                            <p>Join Our TeamTerms & Conditions</p>
                            <p> We Respect Your Privacy</p>
                            <p>Fees & Payments</p>
                            <p>Returns & Refunds Policy</p>
                            <p>Promotions Terms & Conditions</p>
                        </div>
                    </div>
                    <div className='footercompanyrights'>
                        <p>Copyright @{year} All rights reserved</p>
                        <div className='footerlogo'>
                            <img src={logo} alt='rare-luxe' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer