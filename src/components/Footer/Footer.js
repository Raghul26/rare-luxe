import React from 'react'
import "../assets/style/Footer.css"
import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <div className='footercontainer'>
            <div className='footercontant'>
                <div className='footerlogo'>
                    <img src={logo} alt='rare-luxe' />
                    <p>Rare & Luxe</p>
                </div>
            </div>
        </div>
    )
}

export default Footer