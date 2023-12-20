import React, { useEffect, useState } from 'react'
// import AccountScreen from '../AccountScreen/AccountScreen'
import OfferImage1 from "../assets/images/Trending now (1).jpg";
import OfferImage2 from "../assets/images/SHOP COLLECTION.jpg"
// import { useNavigate } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import image from "../assets/images/vecteezy_folha-de-palmeira_15100099.png"
import "../assets/style/PersonalScreen.css"
import user from "../assets/images/user.png"
import PopularProduct from '../PopularProduct/PopularProduct'
import ExclusiveScreen from '../ExclusiveScreen/ExclusiveScreen'
import NewProduct from '../New product/NewProduct'
import Productsreview from '../Productsreview/Productsreview'
// import Productapp from '../Productapp/Productapp'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import loadinglogo from "../assets/images/logo.png"
import { useSelector } from 'react-redux';

const PersonalScreen = () => {
    const userprofile = window.localStorage.getItem("profile");
    const username = JSON.parse(localStorage.getItem("user"));
    const loggedin = window.localStorage.getItem("loggeduser")
    const [useroffermessage, setuseroffermessage] = useState(loggedin)
    const [showmenus, setshowmenus] = useState(true);
    const { usercart } = useSelector((state) => state.cart)
    const openmenu = () => {
        setshowmenus(!showmenus)
    }
    // const userprofile = localStorage.getItem("profile");
    // const navigate = useNavigate();
    // const username = JSON.parse(localStorage.getItem("user"));
    // function logout() {
    //     localStorage.removeItem("loggeduser")
    //     navigate("/login")
    // }
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1200);
    }, [])
    // const userofferbtn = () => {
    //     setuseroffermessage(false)
    //     window.localStorage.setItem("setuseroffermessage", true)
    // }
    const [showusernotificationn, setshowusernotificationn] = useState(false)
    const shownotification = () => {
        setshowusernotificationn(!showusernotificationn)
    }

    const [updatenotification, setupdatenotification] = useState(true)
    const viewupdatenotification = () => {
        setupdatenotification(false)
        window.localStorage.setItem("userfirstnotification", true)
    }

    return (
        <div>
            {
                loading ? <div className='loading'>
                    <img src={loadinglogo} className='loadinglogo' alt='loading' />
                </div> : <>
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
                                cursor: "pointer"
                            }} />
                            <img src={image} alt='' className='navbarimg' />
                            <Link className='userprofileactive' to={"/account"}>
                                <div className='usercontainer'>
                                    <div className='usercontent'>
                                        <img src={user} alt='user' className='userimg' />
                                    </div>
                                </div>
                            </Link>
                            {/* </div> */}
                            <div className={
                                showmenus ? "Menu" : "Menu_active"
                            }>
                                <div className='Menu_Link'>
                                    <Link to="/auth" className='linkmenu' onClick={showmenus ? null : openmenu}>HOME</Link>
                                </div>
                                <div className='Menu_Link'>
                                    <Link to="/auth" className='linkmenu' onClick={showmenus ? null : openmenu}>MEN</Link>
                                </div>
                                <div className='Menu_Link'>
                                    <Link to="/auth" className='linkmenu' onClick={showmenus ? null : openmenu}>WOMEN</Link>
                                </div>
                                <div className='Menu_Link'>
                                    <Link to="/auth" className='linkmenu' onClick={showmenus ? null : openmenu}>BEAUTY</Link>
                                </div>
                            </div>
                            <div className='logo_menu'>
                                <img src={Logo} alt='rare-luxe' style={{
                                    width: '59px',
                                    height: '50px',
                                    cursor: "pointer"
                                }} />
                            </div>
                            {/* <div>
                    <Link to='/login' className='Loginbutton'>Login</Link>
                </div> */}
                            <div className='account'>
                                {/* <div className='notification'>
                                    <img src={Notofication} alt='notification' className='account_img' />
                                </div> */}
                                <div className='cart notification notification_msg'>
                                    <img src={Notofication} alt='cart' className='account_img' onClick={shownotification} />
                                    <div className='notificationmsg' onClick={shownotification}>
                                        {
                                            useroffermessage ? <p>1</p> : <p>0</p>
                                        }
                                    </div>
                                    {
                                        showusernotificationn ? <>
                                            <span className='useroffermessagecontainertop' />
                                            <div className='useroffermessagecontainer'>
                                                <div className='useroffermessagecontant'>
                                                    <div className='useroffermessageuserinfo' onClick={viewupdatenotification}>
                                                        <p className={updatenotification ? 'useroffermessagecontantindicatoractive' : 'useroffermessagecontantindicator'} />
                                                        <div className='useroffermessageuserinforow'>
                                                            <div className='useroffermessageuserinfocol'>
                                                                {userprofile ?
                                                                    <img src={user} alt='img' style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        objectFit: "cover",
                                                                        borderRadius: "50%"
                                                                    }} /> : <img src={userprofile} alt='img' style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        objectFit: "cover",
                                                                        borderRadius: "50%"
                                                                    }} />
                                                                }
                                                            </div>
                                                            <div className='useroffermessageuserinfocol'>
                                                                <div className='useroffermessageuserprow'>
                                                                    <div className='useroffermessageuserpcol'>
                                                                        <p className='useroffermessageuserpcolp'>Welcome, {username.username}</p>
                                                                    </div>
                                                                    <div className='useroffermessageuserpcol'>
                                                                        <p className='useroffermessageuserpcolsubp'>to our rare & luxe, claim your 20% welcome discount on exclusive shirts etc... <Link style={{
                                                                            color: '#2962FF'
                                                                        }}>click here</Link> to claim the discount.  Thankyou for connecting us!</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <p className='useroffermessageuserinfoviewall'><Link style={{
                                                    color: '#7C7C7C',
                                                    textDecoration: 'none'
                                                }}>View all</Link></p>
                                            </div>
                                        </> : null
                                    }
                                </div>
                                <div className='favourite'>
                                    <img src={Favourite} alt='favourite' className='account_img' />
                                </div>
                                <div className='cart notification_msg'>
                                    <Link to="/cart">
                                        <img src={Cart} alt='cart' className='account_img' />
                                        <div className='notificationmsg'>
                                            {
                                                usercart ? <p>{usercart.length}</p> : <p>0</p>
                                            }
                                        </div>
                                    </Link>
                                </div>
                                <Link className='userprofile' to={"/account"}>
                                    <div className='usercontainer'>
                                        <div className='usercontent'>
                                            <img src={user} alt='user' className='userimg' />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <p>{username.username}</p> */}
                    {/* <button onClick={logout}>logout</button> */}
                    <div className='Homecontainer'>
                        <div className='Homecontent'>
                            <img src={OfferImage1} className='img1' alt='offer_img' />
                            <img src={OfferImage2} className='img2' alt='offer_img' />
                        </div>
                    </div>
                    {/* {
                        useroffermessage ? <div>
                            <button onClick={userofferbtn}>close</button>
                            <p>rare and luxe offer</p>
                        </div> : null
                    } */}
                    <div>
                        <PopularProduct />
                        <ExclusiveScreen />
                        <NewProduct />
                        <Productsreview />
                        {/* <Productapp /> */}
                        <Newsletter />
                        <Footer />
                    </div>
                </>
            }
        </div >
    )
}

export default PersonalScreen