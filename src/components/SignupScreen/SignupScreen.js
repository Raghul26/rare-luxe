import React, { useEffect, useState } from 'react'
import "../assets/style/SignupScreen.css"
import Login from "../assets/images/login2.jpg"
import logo from "../assets/images/logo.png"
import close from "../assets/images/close.png"
import open from "../assets/images/open.png"
import { Link, useNavigate } from 'react-router-dom'
import loadinglogo from "../assets/images/logo.png"
import Validation from '../Validation/Validation'

const SignupScreen = () => {
    const navigate = useNavigate()
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
        }, 4000);
    }, [])
    const [error, seterror] = useState({})
    const [values, setvalues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
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
        // seterror(Validation(values));
        localStorage.setItem("user", JSON.stringify(values))
        if (values.username === "" || values.email === "" | values.password === "" || values.confirmpassword === "") {
            seterror(Validation(values));
        } else {
            navigate("/login")
        }
    }
    return (
        // <div className='container'>
        //     {
        //         loading ? <div className='loading'>
        //             <img src={loadinglogo} className='loadinglogo' alt='loading' />
        //         </div> : <div className='content'>
        //             <div className='login_img'>
        //                 <img src={Login} alt='login' className='img' />
        //             </div>
        //             <div className='content_login'>
        //                 <div className='login_form'>
        //                     <div className='company_logo'>
        //                         <img src={logo} alt='logo' className='logo' />
        //                     </div>
        //                     <div className='wellcome_msg'>
        //                         <div className='msg'>
        //                             <p className='wellcome_msgp'>WELCOME TO RARE & lUXE</p>
        //                             {/* <img src={loginmsg} style={{
        //                             width: '32px',
        //                             height: '32px',
        //                             marginBottom: '7px'
        //                         }} alt='loginmsg' /> */}
        //                         </div>
        //                         <div style={{
        //                             width: '100%',
        //                             display: "flex",
        //                             justifyContent: 'center'
        //                         }}>
        //                             <p className='wellcome_msgp1'>Create an account to get access to exclusive offers and discounts</p>
        //                         </div>
        //                     </div>






        //                     <form className='form' onSubmit={handelsubmit}>
        //                         <div className='input'>
        //                             <input name='username' type='text' placeholder='username' className='email_input' onChange={handelInput} />
        //                             {error.username && <p className='errormsg'>{error.username}</p>}
        //                         </div>
        //                         <div className='input'>
        //                             <input name='email' type='email' placeholder='yourmail@gmail.com' className='email_input' onChange={handelInput} />
        //                             {error.email && <p className='errormsg'>{error.email}</p>}
        //                         </div>
        //                         <div className='input email'>
        //                             <input name='password' type={
        //                                 showpassword ? 'password' : "text"
        //                             } placeholder='password' className='email_input email_securepassowrd' onChange={handelInput} />
        //                             {
        //                                 error.password && <p className='errormsg'>{error.password}</p>
        //                             }
        //                             <div onClick={visible}>
        //                                 {
        //                                     showpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
        //                                 }
        //                             </div>
        //                         </div>
        //                         <div className='input email'>
        //                             <input name='confirmpassword' type={
        //                                 confirmshowpassword ? 'password' : "text"
        //                             } placeholder='confirm password' className='email_input email_securepassowrd' onChange={handelInput} />
        //                             {
        //                                 error.confirmpassword && <p className='errormsg'>{error.confirmpassword}</p>
        //                             }
        //                             <div onClick={visible1}>
        //                                 {
        //                                     confirmshowpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
        //                                 }
        //                             </div>
        //                         </div>
        //                         <button className='login_button' type="submit">SIGNUP</button>
        //                         <div className='forgotpassword_siginup'>
        //                             <p className='forgotpasswordsignup'>By signing up, you agree to our <span className='link'>terms of service</span></p>
        //                             <div className='account_divison'>
        //                                 <p className='account_divisonp'>OR</p>
        //                                 <hr className='divison' />
        //                             </div>
        //                             <p className='loginsiginup'>already have an account, <Link to="/login" className='link'>login</Link></p>
        //                         </div>
        //                     </form>







        //                 </div>
        //             </div>
        //         </div>
        //     }
        // </div>
        <div className='container'>
            {
                loading ? <div className='loading'>
                    <img src={loadinglogo} className='loadinglogo' alt='loading' />
                </div> : <div className='content'>
                    <div className='login_img'>
                        <img src={Login} alt='login' className='img' />
                    </div>
                    <div className='content_login'>
                        <div className='login_form'>
                            <div className='company_logo'>
                                <img src={logo} alt='logo' className='logo' />
                            </div>
                            <div className='wellcome_msg'>
                                <div className='msg'>
                                    <p className='wellcome_msgp'>WELCOME TO RARE & lUXE</p>
                                    {/* <img src={loginmsg} style={{
                                width: '32px',
                                height: '32px',
                                marginBottom: '7px'
                            }} alt='loginmsg' /> */}
                                </div>
                                <div style={{
                                    width: '100%',
                                    display: "flex",
                                    justifyContent: 'center'
                                }}>
                                    <p className='wellcome_msgp1'>Create an account to get access to exclusive offers and discounts</p>
                                </div>
                            </div>






                            <form className='form' onSubmit={handelsubmit}>
                                <div className='input'>
                                    <input name='username' type='text' placeholder='username' className='email_input' onChange={handelInput} />
                                    {error.username && <p className='errormsg'>{error.username}</p>}
                                </div>
                                <div className='input'>
                                    <input name='email' type='email' placeholder='yourmail@gmail.com' className='email_input' onChange={handelInput} />
                                    {error.email && <p className='errormsg'>{error.email}</p>}
                                </div>
                                <div className='input email'>
                                    <input name='password' type={
                                        showpassword ? 'password' : "text"
                                    } placeholder='password' className='email_input email_securepassowrd' onChange={handelInput} />
                                    {
                                        error.password && <p className='errormsg'>{error.password}</p>
                                    }
                                    <div onClick={visible}>
                                        {
                                            showpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                        }
                                    </div>
                                </div>
                                <div className='input email'>
                                    <input name='confirmpassword' type={
                                        confirmshowpassword ? 'password' : "text"
                                    } placeholder='confirm password' className='email_input email_securepassowrd' onChange={handelInput} />
                                    {
                                        error.confirmpassword && <p className='errormsg'>{error.confirmpassword}</p>
                                    }
                                    <div onClick={visible1}>
                                        {
                                            confirmshowpassword ? <img src={close} alt='securepassowrd' className='securepassowrd' /> : <img src={open} alt='securepassowrd' className='securepassowrd' />
                                        }
                                    </div>
                                </div>
                                <button className='login_button' type="submit">SIGNUP</button>
                                <div className='forgotpassword_siginup'>
                                    <p className='forgotpasswordsignup'>By signing up, you agree to our <span className='link'>terms of service</span></p>
                                    <div className='account_divison'>
                                        <p className='account_divisonp'>OR</p>
                                        <hr className='divison' />
                                    </div>
                                    <p className='loginsiginup'>already have an account, <Link to="/login" className='link'>login</Link></p>
                                </div>
                            </form>







                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SignupScreen