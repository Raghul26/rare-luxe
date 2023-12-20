import React, { useState } from 'react'
import "../assets/style/Navbar.css"
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import image from "../assets/images/vecteezy_folha-de-palmeira_15100099.png"
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { usercart } = useSelector((state) => state.id === state.cart)
    const [showmenus, setshowmenus] = useState(true);
    const openmenu = () => {
        setshowmenus(!showmenus)
    }
    return (
        <div className='Container'>
            <div className='Navbarhead'>
                <div className='Menubar' onClick={openmenu}>
                    {
                        showmenus ? <img src={Menubar} alt='menu' style={{
                            width: '31px', cursor: "pointer"
                        }} /> : <img src={Closebar} alt='menu' style={{
                            width: '31px', cursor: "pointer"
                        }} />
                    }
                </div>
                {/* <div className='logo'> */}
                <img src={Logo} alt='rare-luxe' style={{
                    width: '66px',
                    height: '53px',
                    cursor: "pointer",
                }} />
                <img src={image} alt='' className='navbarimg' />
                {/* </div> */}
                <div className={
                    showmenus ? "Menu" : "Menu_active"
                }>
                    <div className='Menu_Link'>
                        <Link to="/" className='linkmenu'>HOME</Link>
                    </div>
                    <div className='Menu_Link'>
                        <Link to="/" className='linkmenu'>MEN</Link>
                    </div>
                    <div className='Menu_Link'>
                        <Link to="/" className='linkmenu'>WOMEN</Link>
                    </div>
                    <div className='Menu_Link'>
                        <Link to="/" className='linkmenu'>BEAUTY</Link>
                    </div>
                    <div className='Menu_Link'>
                        <Link to='/Signup' className='Loginbutton'>Signup</Link>
                    </div>
                </div>
                <div className='logo_menu'>
                    <img src={Logo} alt='rare-luxe' style={{
                        width: '59px',
                        height: '50px',
                        cursor: "pointer"
                    }} />
                </div>
                {/* <div className='useraccount'>
                    <Link to='/account'>user</Link>
                </div> */}
                {/* <div>
                    <Link to='/login' className='Loginbutton'>Login</Link>
                </div> */}
                <div className='account'>
                    <div className='notification'>
                        <div className='notification_msg'>
                            <img src={Notofication} alt='notification' className='account_img' />
                            {/* <div className='notificationmsg'>
                                <p>0</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='favourite'>
                        <img src={Favourite} alt='favourite' className='account_img' />
                    </div>
                    <div className='cart'>
                        <div className='notification_msg'>
                            {/* <Link to="/cart">
                                <img src={Cart} alt='cart' className='account_img' />
                                <div className='notificationmsg'>
                                    {
                                        usercart ? <p>{usercart.length}</p> : <p>0</p>
                                    }
                                </div>
                            </Link> */}
                            <div className='notification_msg'>
                                <img src={Cart} alt='cart' className='account_img' />
                                {/* <div className='notificationmsg'>
                                <p>0</p>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <Link to='/Signup' className='Login_button button'>Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar