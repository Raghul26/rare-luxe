import React, { useState, useEffect, useRef } from 'react'
import "../assets/style/AccountScreen.css"
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import Notofication from "../assets/images/notification.png"
import Favourite from "../assets/images/favourite.png"
import Cart from "../assets/images/cart.png"
import Menubar from "../assets/images/menu.png"
import Closebar from "../assets/images/close menu.png"
import "../assets/style/PersonalScreen.css"
import user from "../assets/images/user.png"
import editbtn from "../assets/images/editbtn.png"
import close from "../assets/images/close.png"
import open from "../assets/images/open.png"
import info from "../assets/images/info.png"
import Accountvalidatoin from "../Validation/Accountvalidation";
import { useSelector } from 'react-redux'
// import axios from 'axios'

const AccountScreen = () => {
    const [showmenus, setshowmenus] = useState(true);
    const [showmenus1, setshowmenus1] = useState(true);
    const [openlist, setopenlist] = useState(true);
    const [openlist1, setopenlist1] = useState(true);
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
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem("user"));
    const userprofile = window.localStorage.getItem("profile");
    const loggedin = window.localStorage.getItem("loggeduser")
    function logout() {
        localStorage.removeItem("loggeduser")
        navigate("/login")
    }
    const [showpassword, setshowpassword] = useState(true)
    const [confirmshowpassword, setconfirmshowpassword] = useState(true)
    const visible = () => {
        setshowpassword(!showpassword)
    }
    const visible1 = () => {
        setconfirmshowpassword(!confirmshowpassword)
    }
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1200);
    }, [])
    const [error, seterror] = useState({})
    const [values, setvalues] = useState({
        username: `${username.username}`,
        email: `${username.email}`,
        password: `${username.password}`,
        confirmpassword: `${username.confirmpassword}`,
        address: `${username.address}`,
        number: `${username.number}`,
        validate: "true"
    })
    function handelInput(e) {
        const newData = {
            ...values, [e.target.name]: e.target.value
        }
        setvalues(newData)
    }
    function handelsubmit(e) {
        e.preventDefault()
        seterror(Accountvalidatoin(values));
        localStorage.setItem("user", JSON.stringify(values))
        // navigate("/login")
    }
    const inputref = useRef(null);
    const [image, setimage] = useState(true)
    const uploadimg = () => {
        inputref.current.click();
    }
    function Imgchange(e) {
        const img = e.target.files[0]
        setimage(img);
        window.localStorage.setItem("profile", URL.createObjectURL(img))
    }
    const { usercart } = useSelector((state) => state.cart)


    return (
        <>
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
                        width: '59px',
                        height: '50px',
                        cursor: "pointer"
                    }} />
                    <Link className='userprofileactive' to={"/account"} onClick={openmenu1}>
                        <div className='usercontainer'>
                            <div className='usercontent'>
                                {
                                    image ? <img src={userprofile} alt='user' className='userimg' /> : <img src={user} alt='user' className='userimg' />
                                }
                            </div>
                        </div>
                    </Link>
                    {/* </div> */}
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
                                    {
                                        image ? <img src={userprofile} alt='user' className='userimg' /> : <img src={user} alt='user' className='userimg' />
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='informationcontainer'>
                {/* <div className='usernavigation'>
                    <Link className='usernavigationpage' to={"/auth"}>Home&nbsp;/ &nbsp;<span><Link className='usernavigationlink'>Profile</Link></span></Link>
                </div> */}


                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center'
                }}>
                    <div className='informationcontent'>



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
                                    <p><Link to={"/cart"} style={{
                                        color: '#212427',
                                        textDecoration: 'none'
                                    }}>Orders</Link></p>
                                    <p>Customer care</p>
                                    <p>Rare & Luxe Wallet</p>
                                </div>
                            </div>
                            <div className='information_listhead'>
                                <p className='information_listorder'>Profile</p>
                                <div className='information_sublist'>
                                    <p className='information_sublisthead'><Link style={{
                                        color: '#212427',
                                        fontWeight: "500",
                                        textDecoration: 'none'
                                    }}>Personal Information</Link></p>
                                    <p>Payment</p>
                                </div>
                            </div>
                            <div>
                                <button className='logoutbtn' onClick={logout}>Logout</button>
                            </div>
                        </div>

































































                        <div className="information_listmenu">
                            <div className='informationmenu'>
                                <div className='informationlist_img'>
                                    <div className='informationlistimgline' onClick={uploadimg}>
                                        {/* <img src={user} alt='user' className='informationlistimg' /> */}
                                        {
                                            image ? <img src={userprofile} alt='user' className='informationlistimg' /> : <img src={user} alt='user' className='informationlistimg' />
                                        }
                                        <div className='uploadimg'>
                                            <img src={editbtn} alt='edit' style={{
                                                width: '25px',
                                                height: '25px'
                                            }} />
                                            <input type="file" name='user' ref={inputref} style={{
                                                display: 'none'
                                            }} onChange={Imgchange} />
                                        </div>
                                    </div>
                                </div>
                                <div className='informationlist_imgtitle'>
                                    <p className='informationlist_title'>Hi, {username.username}</p>
                                    <p className='informationlist_subtitle'>{username.email}</p>
                                </div>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <div className={openlist1 ? 'information_listhead1' : 'information_listhead_active1'} >
                                        <div style={{
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: "space-between"
                                        }} onClick={openinfo1}>
                                            <p className='information_listorder'>Profile</p>
                                            <img src={info} alt='option' className={openlist1 ? "infolist1" : 'infolist_active1'} />
                                        </div>
                                        <div className='information_sublist'>
                                            <p className='information_sublisthead'><Link style={{
                                                color: '#212427',
                                                fontWeight: "500",
                                                textDecoration: 'none'
                                            }}>Personal Information</Link></p>
                                            <p>Payment</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div className={openlist ? 'information_listhead' : 'information_listhead_active'} >
                                        <div style={{
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: "space-between"
                                        }} onClick={openinfo}>
                                            <p className='information_listorder'>Order & Credits</p>
                                            <img src={info} alt='option' className={openlist ? "infolist" : 'infolist_active'} />
                                        </div>
                                        <div className='information_sublist'>
                                            <p><Link to={"/cart"} style={{
                                                color: '#212427',
                                                textDecoration: 'none'
                                            }}>Orders</Link></p>
                                            <p>Customer care</p>
                                            <p>Rare & Luxe Wallet</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='information_listhead'>
                                    <p className='information_listorder'>Profile</p>
                                    <div className='information_sublist'>
                                        <p className='information_sublisthead'>Personal Information</p>
                                        <p>Payment</p>
                                    </div>
                                </div> */}
                                <div>
                                    <button className='logoutbtn' onClick={logout}>Logout</button>
                                </div>
                            </div>



                            <div className='informationlist_menudetails'>
                                <p className='informationlist_titleinfo'>Personal Information</p>
                                <p className='informationlist_subtitleinfo'>Hey there! Fill in your details for a personalized RARE & LUXE shopping experience.</p>
                                <form className='formuser' onSubmit={handelsubmit}>
                                    <div className='forminput'>
                                        <div className='input formpassword'>
                                            <input name='username' type='text' placeholder={username.username} className='email_input' onChange={handelInput} />
                                            {error.username && <p className='errormsg'>{error.username}</p>}
                                        </div>
                                        <div className='input formpassword'>
                                            <input name='email' type='email' placeholder={username.email} className='email_input' onChange={handelInput} />
                                            {error.email && <p className='errormsg'>{error.email}</p>}
                                        </div>
                                    </div>

                                    <div className='forminput'>
                                        <div className='input email formpassword'>
                                            {/* <input name='password' type={
                                        showpassword ? 'password' : "text"
                                    } placeholder={username.password} className='email_input email_securepassowrd' onChange={handelInput} /> */}
                                            <input name='password' type={
                                                showpassword ? 'password' : "text"
                                            } placeholder={showpassword ? "* * * * * * * * *" : username.password} className='email_input email_securepassowrd' onChange={handelInput} />
                                            {
                                                error.password && <p className='errormsg'>{error.password}</p>
                                            }
                                            <div onClick={visible}>
                                                {
                                                    showpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                                }
                                            </div>
                                        </div>
                                        <div className='input email formpassword'>
                                            {/* <input name='confirmpassword' type={
                                        confirmshowpassword ? 'password' : "text"
                                    } placeholder={username.confirmpassword} className='email_input email_securepassowrd' onChange={handelInput} /> */}
                                            {/* <input name='confirmpassword' type={
                                                confirmshowpassword ? 'password' : "text"
                                            } placeholder={confirmshowpassword ? "* * * * * * * * *" : username.confirmpassword} className='email_input email_securepassowrd' onChange={handelInput} /> */}
                                            <input name='confirmpassword' type={
                                                confirmshowpassword ? 'password' : "text"
                                            } placeholder={confirmshowpassword ? "* * * * * * * * *" : username.confirmpassword} className='email_input email_securepassowrd' onChange={handelInput} />
                                            {
                                                error.confirmpassword && <p className='errormsg'>{error.confirmpassword}</p>
                                            }
                                            <div onClick={visible1}>
                                                {
                                                    confirmshowpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='forminfo'>
                                        <div className='input formpassword'>
                                            <input name='address' type='text' placeholder={username.address} className='email_input' onChange={handelInput} />
                                            {error.address && <p className='errormsg'>{error.address}</p>}
                                        </div>
                                        <div className='input formpassword'>
                                            <input name='number' type="number" placeholder={username.number} className='email_input' onChange={handelInput} />
                                            {error.number && <p className='errormsg'>{error.number}</p>}
                                        </div>
                                    </div>


                                    <button className='login_button' type="submit" onClick={logout}>UPDATE</button>
                                </form>
                            </div>
                        </div>




























                        <div className='informationlist_details'>
                            <div className='informationlist_img'>
                                <div className='informationlistimgline' onClick={uploadimg}>
                                    {
                                        image ? <img src={userprofile} alt='user' className='informationlistimg' /> : <img src={user} alt='user' className='informationlistimg' />
                                    }
                                    <div className='uploadimg'>
                                        <img src={editbtn} alt='edit' style={{
                                            width: '25px',
                                            height: '25px'
                                        }} />
                                        <input type='file' name='user' ref={inputref} style={{
                                            display: 'none'
                                        }} onChange={Imgchange} />
                                    </div>
                                </div>
                            </div>
                            <div className='informationlist_imgtitle'>
                                <p className='informationlist_title'>Personal Information</p>
                                <p className='informationlist_subtitle'>Hey there! Fill in your details for a personalized RARE & LUXE shopping experience.</p>
                            </div>
                            <form className='formuser' onSubmit={handelsubmit}>
                                <div className='forminput'>
                                    <div className='input formpassword'>
                                        <input name='username' type='text' placeholder={username.username} className='email_input' />
                                        {error.username && <p className='errormsg'>{error.username}</p>}
                                    </div>
                                    <div className='input formpassword'>
                                        <input name='email' type='email' placeholder={username.email} className='email_input' />
                                        {error.email && <p className='errormsg'>{error.email}</p>}
                                    </div>
                                </div>

                                <div className='forminput'>
                                    <div className='input email formpassword'>
                                        <input name='password' type={
                                            showpassword ? 'password' : "text"
                                        } placeholder={username.password} className='email_input email_securepassowrd' onChange={handelInput} />
                                        {
                                            error.password && <p className='errormsg'>{error.password}</p>
                                        }
                                        <div onClick={visible}>
                                            {
                                                showpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                            }
                                        </div>
                                    </div>
                                    <div className='input email formpassword'>
                                        <input name='confirmpassword' type={
                                            confirmshowpassword ? 'password' : "text"
                                        } placeholder={username.confirmpassword} className='email_input email_securepassowrd' onChange={handelInput} />
                                        {
                                            error.confirmpassword && <p className='errormsg'>{error.confirmpassword}</p>
                                        }
                                        <div onClick={visible1}>
                                            {
                                                confirmshowpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='forminfo'>
                                    <div className='input formpassword'>
                                        <input name='address' type='text' placeholder={username.address} className='email_input' />
                                        {error.address && <p className='errormsg'>{error.address}</p>}
                                    </div>
                                    <div className='input formpassword'>
                                        <input name='number' type="number" placeholder={username.number} className='email_input' />
                                        {error.number && <p className='errormsg'>{error.number}</p>}
                                    </div>
                                </div>


                                <button className='login_button' type="submit">UPDATE</button>
                            </form>
                        </div>





                    </div>
                </div>
            </div >
        </>
    )
}

export default AccountScreen