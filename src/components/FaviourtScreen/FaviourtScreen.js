import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import heart1 from "../assets/images/icons8-heart-90.png";
import "../assets/style/FaviourtScreen.css"
import Logo from "../assets/images/logo.png"
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import image from "../assets/images/vecteezy_folha-de-palmeira_15100099.png"
// import "../assets/style/PersonalScreen.css"
import user from "../assets/images/user.png"
import empty from "../assets/images/empty1.png"
import loadinglogo from "../assets/images/logo.png"
import { allclearcart, clearfavcart } from '../redux/feature/CartProduct';

const FaviourtScreen = () => {
  const dispatch = useDispatch()
  const { userfavourite } = useSelector((state) => state.cart)
  console.log(userfavourite, "added to favourite");
  // const clearfavcart = (e) => {
  //   dispatch(clearfavcart(e))
  // }
  const removefavitem = (faviourt) => {
    dispatch(clearfavcart(faviourt))
  }

  const userlogintime = window.localStorage.getItem("time");
  const userlogindate = window.localStorage.getItem("date")
  const username = JSON.parse(localStorage.getItem("user"));
  const loggedin = window.localStorage.getItem("loggeduser")
  const [useroffermessage] = useState(loggedin)
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
  }
  const emptyfavcart = () => {
    dispatch(allclearcart())
  }

  return (
    <div>
      {
        loading ? <div className='loading'>
          <img src={loadinglogo} className='loadinglogo' alt='loading' />
        </div> :
          <>


            {
              userfavourite.length > 0 ? <>

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
                                      <img src={user} alt='img' style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                      }} />
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
                                      <div className='useroffermessageusertimeanddate'>
                                        <p>{userlogindate}</p>
                                        <p>{userlogintime}</p>
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

                      <div className='cart notification_msg'>
                        {
                          userfavourite ? <Link to="/faviourt">
                            <img src={Favourite} alt='cart' className='account_img' />
                            <div className='notificationmsg'>
                              <p>{userfavourite.length}</p>
                            </div>
                          </Link> : <Link to="/faviourt">
                            <img src={Favourite} alt='cart' className='account_img' />
                          </Link>
                        }
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



                <div className='favouritecontainer'>

                  <div className='ProductDetailstopback'>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Link to={'/'} style={{
                        textDecoration: "none",
                        color: 'var(--subtext-color)',
                        marginRight: '5px',
                        fontFamily: "var(--subtext)",
                        fontSize: "15px"
                      }}>Home</Link> <span style={{
                        fontWeight: '600',
                        marginRight: '5px',
                        fontFamily: "var(--subtext)"
                      }}>/</span> <p style={{
                        color: 'var(--text-color)',
                        marginRight: '5px',
                        fontFamily: "var(--subtext)",
                        fontSize: "15px"
                      }}>Favourite</p>
                    </div>
                  </div>
                  <div className='favouritecontainerow'>
                    {userfavourite.length > 0 ? <button onClick={() => emptyfavcart()}>All clear</button> : null}

                  </div>
                </div>



                {
                  userfavourite.map((faviourt, index) => {
                    return (
                      <div className='favouritecontainercol'>
                        <Link to={`/ProductDetails/${faviourt.id}`} style={{
                          textDecoration: 'none'
                        }} className='productimg productimg2'>

                          <div className='productdetails' key={index}>
                            <img src={faviourt.image} />

                            <Link onClick={(e) => removefavitem(faviourt, e)}>
                              <div>
                                <img src={heart1} alt='heart' />
                              </div>
                            </Link>



                            <div className='productname favouriteproductname'>
                              <div className='productoldnewprice'>
                                <div className='productprice'>
                                  <p>Rs : {faviourt.productprice}</p>
                                </div>
                                <div className='oldproductprice'>
                                  <p>{faviourt.oldproductprice}</p>
                                </div>
                              </div>
                              <div className='productimgp'>
                                <p>{faviourt.productname}</p>
                              </div>
                              <div className='productimgsub'>
                                <p>{faviourt.productsubname}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </> :
                // <div className='favouriteproudctno'>
                //   <p>Oops no, faviourt product's was <br /> founded.</p>
                //   <img src={empty} alt='empty' />
                // </div>
                <div className='Cartcontainer'>
                  <div className='Cartcontant favouriteproudctno'>
                    <p>OOPS IT'S EMPTY</p>
                    <div className='Cartemptyimage favouriteproudctno'>
                      <img src={empty} alt='empty' />
                    </div>
                    <div className='Cartshopbutton favouriteproudctno'>
                      <Link to={"/auth"} className='Cartshoplinkbutton'>Back To Shop</Link>
                    </div>
                  </div>
                </div>


            }
          </>
      }

    </div>
  )
}

export default FaviourtScreen