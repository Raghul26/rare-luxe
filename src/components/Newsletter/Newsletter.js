import React from 'react'
import image from "../assets/images/vecteezy_folha-de-palmeira_15100099.png"
import "../assets/style/Newsletter.css"

const Newsletter = () => {
    return (
        <div className='Newslettercontainer'>
            <div className='Newslettercontent'>
                <div className='Newslettermaincontent'>
                    <div className='Newslettercontentdesimg'>
                        <img src={image} alt='' />
                    </div>
                    <div>
                        <div className='Newslettercontent_heading'>
                            <p className='Newslettercontent_heading_title'>JOIN OUR NEWSLETTER</p>
                            <p className='Newslettercontent_heading_subp'>receive updates on arrivals and fashion trends.</p>
                        </div>
                        <div className='Newslettercontent_form'>
                            <input type="email" placeholder='yourmail@gamil.com' />
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter