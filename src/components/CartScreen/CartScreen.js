import React, { useEffect, useState } from 'react'
import loadinglogo from "../assets/images/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import "../assets/style/CartScreen.css"
import cartemptyimge from "../assets/images/empty-cart.png"
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import "../assets/style/PersonalScreen.css"
import user from "../assets/images/user.png"
import { addtocart, removefromcart, removelengthitem } from '../redux/feature/CartProduct'
import image1 from "../assets/images/download-removebg-preview.png"
import image2 from "../assets/images/download-removebg-preview (1).png"
import image3 from "../assets/images/Paytm_Svg_Logo_xjltof.png"
import image4 from "../assets/images/kisspng-computer-icons-payment-credit-card-electronic-fund-payment-methods-card-icon-5ab06f28258ea4.4371457915215122321538.png"

const CartScreen = ({ id, image, productname, productsubname, rating, productprice }) => {
    console.log(id, image, productname, productsubname, rating, productprice);
    const { usercart } = useSelector((state) => state.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1200);
    }, [])
    const [showmenus, setshowmenus] = useState(true);
    const openmenu = () => {
        setshowmenus(!showmenus)
    }
    function logout() {
        localStorage.removeItem("loggeduser")
        navigate("/login")
    }
    const incrementitemproduct = (e) => {
        dispatch(addtocart(e))
    }
    const decrementitemproduct = (e) => {
        dispatch(removefromcart(e))
    }
    const decrementsingleproduct = (e) => {
        dispatch(removelengthitem(e))
    }
    const ordertypeimage = [
        {
            id: 0,
            image: image1,
        },
        {
            id: 1,
            image: image2,
        },
        {
            id: 2,
            image: image3
        },
        {
            id: 3,
            image: image4
        }
    ]
    const [order, setorder] = useState(null)
    const selectordertype = (image) => {
        setorder(image);
    }
    return (
        <div>
            {
                usercart.length > 0 ? <>
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
                                            <Link to="/" className='linkmenu' onClick={openmenu}>HOME</Link>
                                        </div>
                                        <div className='Menu_Link'>
                                            <Link to="/home" className='linkmenu' onClick={openmenu}>MEN</Link>
                                        </div>
                                        <div className='Menu_Link'>
                                            <Link to="/home" className='linkmenu' onClick={openmenu}>WOMEN</Link>
                                        </div>
                                        <div className='Menu_Link'>
                                            <Link to="/home" className='linkmenu' onClick={openmenu}>BEAUTY</Link>
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
                                        <div className='notification'>
                                            <img src={Notofication} alt='notification' className='account_img' />
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

                            <>
                                <div className='cartordercontainer'>
                                    <div className='cartordercontent'>
                                        <div className='cartordercontentrow'>
                                            <div className='cartordercontentcol'>
                                                <div className="information_list">
                                                    <div className='information_listcontent'>
                                                        <p>My Account</p>
                                                        <hr style={{
                                                            border: '1px dashed rgba(124, 124, 124, 0.58)'
                                                        }} />
                                                    </div>
                                                    <div className='information_listhead'>
                                                        <p className='information_listorder'>Order & Credits</p>
                                                        <div className='information_sublist'>
                                                            <p className='information_sublisthead'>Orders</p>
                                                            <p>Customer care</p>
                                                            <p>Rare & Luxe Wallet</p>
                                                        </div>
                                                    </div>
                                                    <div className='information_listhead'>
                                                        <p className='information_listorder'>Profile</p>
                                                        <div className='information_sublist'>
                                                            <p className='information_sublistheadp'><Link to={"/account"} style={{
                                                                color: '#212427',
                                                                textDecoration: 'none'
                                                            }}>Personal Information</Link></p>
                                                            <p>Payment</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className='logoutbtn' onClick={logout}>Logout</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cartordercontentcol'>
                                                {
                                                    usercart.map((data, index) => {
                                                        return (
                                                            <>
                                                                <div className='cartcontainer'>
                                                                    <div className='cartcontant'>
                                                                        <div className='cartcontantrow'>
                                                                            <div className='cartcontantcol'>
                                                                                <div className='cartcontantimg' key={index}>
                                                                                    <img src={data.image} alt='' style={{
                                                                                        width: '150px',
                                                                                        objectFit: "cover"
                                                                                    }} />
                                                                                </div>
                                                                            </div>
                                                                            <div className='cartcontantcol'>
                                                                                <p className='cartcontantp'>{data.productname}</p>
                                                                                <p className='cartcontantsubp'>{data.productsubname}</p>
                                                                                <div className='cartcontantbtn'>
                                                                                    <button onClick={
                                                                                        data.quantity <= 1 ? () => decrementitemproduct(data.id) : () => decrementsingleproduct(data)
                                                                                    }>-</button>
                                                                                    <p className='cartcontantlength'>{data.quantity}</p>
                                                                                    <button onClick={(e) => incrementitemproduct(data)}>+</button>
                                                                                </div>
                                                                            </div>
                                                                            <div className='cartcontantcol cartcontantp cartcontantprice'>
                                                                                <p className='cartcontantsubp cartcontantsubprice'>{data.productprice}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                            {/* <div className='cartcontantp cartcontantprice'>
                                                <p>price</p>
                                                {
                                                    usercart.map((data, index) => {
                                                        <div key={index}>
                                                            <p className='cartcontantsubp'>{data.productprice}</p>
                                                        </div>
                                                    })
                                                }
                                            </div> */}
                                            <div className='cartordercontentcoltotaltyperow'>
                                                <div className='cartordercontentcol cartordercontenttotal cartordercontentcoltotaltypecol'>
                                                    <p className='cartordercontenttotalsubtotal'>Sub Total</p>
                                                    <p className='cartordercontenttotalsubtotal'>Gst</p>
                                                    <p className='cartordercontenttotalsubtotal'>Company Invoice</p>
                                                    <div className='cartordercontenttotaltotal'>
                                                        <p className='cartordercontentsubtotal'>Total</p>
                                                    </div>
                                                </div>
                                                <div className='cartordercontenttitle'>
                                                    <p>Order options</p>
                                                </div>
                                                <div className='cartordercontentcoltotaltypecol cartordercontentcoltotalcol'>
                                                    {
                                                        ordertypeimage.map((item, index) => (
                                                            <div className={
                                                                `${order === item.image ? 'cartordercontentcoltotaltypeimgactive' : 'cartordercontentcoltotaltypeimg'}`
                                                            } key={index} onClick={() => selectordertype(item.image)}>
                                                                <img src={item.image} alt='' />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className='cartordercontenttitleorder'>
                                                    <p>Place order</p>
                                                    <button>PLACE ORDER</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </>
                    }
                </> : <>
                    <div className='Cartcontainer'>
                        <div className='Cartcontant'>
                            <p>YOUR CART IS EMPTY</p>
                            <div className='Cartemptyimage'>
                                <img src={cartemptyimge} alt='' />
                            </div>
                            <div className='Cartshopbutton'>
                                <Link to={"/auth"} className='Cartshoplinkbutton'>Back To Shop</Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

export default CartScreen