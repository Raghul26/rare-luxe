import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import productlistdata from '../Data/productlistdata';
import Navbar from "../Navbar/Navbar"
import "../assets/style/ProductDetails.css"
import loadinglogo from "../assets/images/logo.png"
import ratingimg from "../assets/images/icons8-rating-96.png"
import Logo from "../assets/images/logo.png"
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import "../assets/style/PersonalScreen.css"
import user from "../assets/images/user.png"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart, removelengthitem } from '../redux/feature/CartProduct';
import size from "../assets/images/Your paragraph text.png"
import cancelmenu2 from "../assets/images/close menu2.png"
import Footer from '../Footer/Footer';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { usercart } = useSelector((state) => state.cart)
  const { userfavourite } = useSelector((state) => state.cart)
  const [showmenus, setshowmenus] = useState(true);
  const [showmenus1, setshowmenus1] = useState(true);
  const [openlist, setopenlist] = useState(true);
  const [openlist1, setopenlist1] = useState(true);
  const loggedin = window.localStorage.getItem("loggeduser")
  const [useroffermessage] = useState(loggedin)
  const userlogintime = window.localStorage.getItem("time");
  const userlogindate = window.localStorage.getItem("date")
  const username = JSON.parse(localStorage.getItem("user"));

  const openmenu = () => {
    setshowmenus(!showmenus)
  }
  const openmenu1 = () => {
    setshowmenus1(!showmenus1)
  }
  const openinfo = () => {
    setopenlist(!openlist)
  }
  const openinfo1 = () => {
    setopenlist1(!openlist1)
  }
  // const productsize = [
  //   {
  //     id: 0,
  //     sizeproduct: "S",
  //   },
  //   {
  //     id: 1,
  //     sizeproduct: "M",
  //   },
  //   {
  //     id: 2,
  //     sizeproduct: "L"
  //   },
  //   {
  //     id: 3,
  //     sizeproduct: "XL"
  //   }
  // ]
  // console.log(useParams());
  const { productId } = useParams()
  const product = productlistdata.find((product) => product.id === productId)
  const { id, productname, image, productsubname, rating, offer, offerproducts, productprice, category, sm, m, l, xl } = product;
  const [selectsize, setselectsize] = useState(null)
  const handelselectsize = (sizeproduct) => {
    setselectsize(sizeproduct);
  }
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1200);
  }, [])
  const sendtocart = (e) => {
    dispatch(addtocart(e))
  }
  const [showusernotificationn, setshowusernotificationn] = useState(false)
  const shownotification = () => {
    setshowusernotificationn(!showusernotificationn)
  }
  const [sizeinfo, setsizeinfo] = useState(false)
  const showsizeinfo = () => {
    setsizeinfo(!sizeinfo)
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
  const [showproducticon, setshowproducticon] = useState()
  const opencart = () => {
    setshowproducticon(!showproducticon)
  }
  const [updatenotification, setupdatenotification] = useState(true)
  const viewupdatenotification = () => {
    setupdatenotification(false)
  }
  return (
    <>
      {
        loading ? <div className='loading'>
          <img src={loadinglogo} className='loadinglogo' alt='loading' />
        </div> : <>
          {
            loggedin ? <div className='Container'>
              {
                sizeinfo ? <>
                  <div className='ProductDetails_sizeimgcontent'>
                    <div className='ProductDetails_sizeimgclosebtn'>
                      <img src={cancelmenu2} alt='closebtn' onClick={(e) => showsizeinfo(e)} />
                    </div>
                    <div className='ProductDetails_sizeimg'>
                      <img src={size} alt='size' />
                    </div>
                  </div>
                </> : null
              }

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
                <img src={Logo} alt='rare-luxe' style={{
                  width: '59px',
                  height: '50px',
                  cursor: "pointer"
                }} />
                <Link className='userprofileactive' to={"/account"} onClick={openmenu1}>
                  <div className='usercontainer'>
                    <div className='usercontent'>
                      <img src={user} alt='user' className='userimg' />
                    </div>
                  </div>
                </Link>
                <div className={
                  showmenus ? "Menu" : "Menu_active"
                }>
                  <div className='Menu_Link'>
                    <Link to="/auth" className='linkmenu'>HOME</Link>
                  </div>
                  <div className='Menu_Link'>
                    <Link to="/home" className='linkmenu'>MEN</Link>
                  </div>
                  <div className='Menu_Link'>
                    <Link to="/home" className='linkmenu'>WOMEN</Link>
                  </div>
                  <div className='Menu_Link'>
                    <Link to="/home" className='linkmenu'>BEAUTY</Link>
                  </div>
                </div>
                <div className='logo_menu'>
                  <img src={Logo} alt='rare-luxe' style={{
                    width: '59px',
                    height: '50px',
                    cursor: "pointer"
                  }} />
                </div>

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
            </div> : <Navbar />
          }
          <div className='PrdouctDetailscontainer' id='ProductDetails'>
            {
              usercart.length ? <div className={
                showproducticon ? "viewcartconatienractive" : 'viewcartconatienr'
              }>
                <div className='viewcartcontant'>
                  <div className='closebtn' onClick={opencart}>
                    <img src={Closebar} alt='menu' style={{
                      width: '29px', cursor: "pointer"
                    }} />
                  </div>
                  <p className='clearall'>clear all</p>
                  {
                    usercart.map((product, index) => {
                      return (
                        <div className='productcart' key={index}>
                          <img src={product.image} />
                          <div className='productcartdetailes'>
                            <p className='productcartproductname'>{product.productname}</p>
                            <p className='productcartprice'>{product.productprice}</p>
                            {/* <p className='productcartquantity'>Quantity : {product.quantity}</p> */}
                            <div className='productcartquantity'>
                              <button onClick={
                                product.quantity <= 1 ? () => decrementitemproduct(product.id) : () => decrementsingleproduct(product)
                              }>-</button>
                              <p className='productcartlength'>{product.quantity}</p>
                              <button onClick={(e) => incrementitemproduct(product)}>+</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  <div className='viewall'>
                    <Link className='productcartp' to={"/cart"}><p>view all</p></Link>
                  </div>
                </div>
              </div> : null
            }
            <div className='PrdouctDetailscontent'>
              <div className='ProductDetailstop'>
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
                    }}>Product</p>
                  </div>
                </div>
                <div className='ProductDetails_img'>
                  <img src={image} alt={productname} />
                </div>
                <div className='ProductDetails_sub'>
                  <div className='ProductDetails_brname'>
                    <p className='productdetailsname'>{productname}</p>
                    <p className='productdetailproductprice'>Rs : {productprice}</p>
                    <p className='productdetailsubname'>{productsubname}</p>
                  </div>
                  <div className='ProductDetails_ratings'>
                    <p>Rating {rating}</p>
                    <img src={ratingimg} alt='ratingimg' />
                  </div>
                  <div className='ProductDetails_sizecontent'>
                    {
                      loggedin ? <>
                        <div className={
                          `${selectsize === sm ? 'ProductDetails_sizeactive' : 'ProductDetails_size'}`
                        } onClick={() => handelselectsize(sm)}>
                          <p>{sm}</p>
                        </div>
                        <div className={
                          `${selectsize === m ? 'ProductDetails_sizeactive' : 'ProductDetails_size'}`
                        } onClick={() => handelselectsize(m)}>
                          <p>{m}</p>
                        </div>
                        <div className={
                          `${selectsize === l ? 'ProductDetails_sizeactive' : 'ProductDetails_size'}`
                        } onClick={() => handelselectsize(l)}>
                          <p>{l}</p>
                        </div>
                        <div className={
                          `${selectsize === xl ? 'ProductDetails_sizeactive' : 'ProductDetails_size'}`
                        } onClick={() => handelselectsize(xl)}>
                          <p>{xl}</p>
                        </div>
                      </> : <>
                        <div className="ProductDetails_size" onClick={() => handelselectsize(sm)} style={{
                          cursor: "not-allowed"
                        }}>
                          <p>{sm}</p>
                        </div>
                        <div className="ProductDetails_size" onClick={() => handelselectsize(m)} style={{
                          cursor: "not-allowed"
                        }}>
                          <p>{m}</p>
                        </div>
                        <div className="ProductDetails_size" onClick={() => handelselectsize(l)} style={{
                          cursor: "not-allowed"
                        }}>
                          <p>{l}</p>
                        </div>
                        <div className="ProductDetails_size" onClick={() => handelselectsize(xl)} style={{
                          cursor: "not-allowed"
                        }}>
                          <p>{xl}</p>
                        </div>
                      </>
                    }
                  </div>
                  <p className='productdetailssizename' onClick={(e) => showsizeinfo(e)}>view size chart</p>
                  {
                    loggedin ? <p className='ProductDetails_offer'>{offer} <Link>{offerproducts}</Link></p> : <p className='ProductDetails_offer'>Create account to get 25% Off On Rs.3990 & Above. Max Discount Rs. 1500. <Link>{offerproducts}</Link></p>
                  }
                  <div className='ProductDetailsbutton'>
                    {
                      loggedin ?
                        <>
                          {
                            selectsize ? <div className='ProductDetailscartbtn' onClick={(e) => sendtocart({
                              id: id,
                              image: image,
                              productname: productname,
                              productsubname: productsubname,
                              productprice: productprice,
                              category: category,
                              rating: rating,
                              sm: sm,
                              m: m,
                              l: l,
                              xl: xl,
                              selectsize: selectsize,
                            })}>
                              Add to cart
                            </div> : <div className='ProductDetailscartdisablebtn'>
                              Add to cart
                            </div>
                          }
                          {
                            selectsize ? <div className='ProductDetailsbuybtn' onClick={(e) => sendtocart({
                              id: id,
                              image: image,
                              productname: productname,
                              productsubname: productsubname,
                              productprice: productprice,
                              category: category,
                              rating: rating,
                              sm: sm,
                              m: m,
                              l: l,
                              xl: xl,
                              selectsize: selectsize,
                            })}>
                              Buy Now
                            </div> : <div className='ProductDetailsbuydisablebtn'>
                              Buy Now
                            </div>
                          }
                        </>
                        : <>
                          <div className='productbuybtn' style={{
                            cursor: "default",
                            color: "#7C7C7C",
                            width: '190px'
                          }}>
                            Before purchase create an account!
                          </div>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className='ProductDetailabout'>
                <p className='ProductDetailabout_head'>About REPLAY</p>
                <p className='ProductDetailabout_subp'>Replay, a premium {productname} brand from Italy is known for innovative flair, characteristic Italian design and the superb quality of its denim . The brand brings to RARE and LUXE, its entire range of denims, casualwear, footwear and accessories for men and women.</p>
                <p className='ProductDetailabout_subp'>Iconic, sexy, and practical. Replay Jeans are irreplaceable. Perfect for all situations and suitable for any of your style needs. Replay denim is a style guarantee and you can find your perfect style and fit on the RARE and LUXE. Replay jeans are like a second skin that compliment your lifestyle and your figure. From the most casual to the most glamorous looks, you can’t go wrong with denim.</p>
                <p className='ProductDetailabout_subp'>The RARE and LUXE range also includes Replay’s signature capsule, the Hyperflex range of jeans which boasts of superior flexibility, recovery and comfort, making them perfect for today’s mobile lifestyle.</p>
                <p className='ProductDetailabout_subp'>The Replay collection on RARE and LUXE also includes topwear, outwear, footwear and accessories for men and women that range from casual cool to glamourous chic, catering to the differing tastes and styles of our globe-trotting, trend-setting audience.</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  )
}

export default ProductDetails
