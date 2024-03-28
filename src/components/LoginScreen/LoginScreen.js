import React, { useEffect, useState } from 'react'
import "../assets/style/LoginScreen.css"
import Login from "../assets/images/login2.jpg"
import logo from "../assets/images/logo.png"
import loginmsg from "../assets/images/loginmsg.png"
import close from "../assets/images/close.png"
import open from "../assets/images/open.png"
import { Link, useNavigate } from 'react-router-dom'
import loadinglogo from "../assets/images/logo.png"
import Validationlogin from '../Validation/Validationlogin'



const LoginScreen = () => {
    const navigate = useNavigate()
    const [showpassword, setshowpassword] = useState(true)
    // const [logedin, setlogedin] = useState(false)
    const visible = () => {
        setshowpassword(!showpassword)
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
        email: "",
        password: "",
        loggedin: 'false'
    })
    function handelInput(e) {
        const newData = {
            ...values, [e.target.name]: e.target.value
        }
        setvalues(newData);
        console.log(setvalues(newData));
    }

    function handelsubmit(e) {
        e.preventDefault();
        seterror(Validationlogin(values));
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (values.email === loggeduser.email && values.password === loggeduser.password) {
            localStorage.setItem("loggeduser", true)
            navigate("/auth")
            alert("Email and password match")

            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString();
            console.log(time, "time");
            console.log(date, "date");
            window.localStorage.setItem("date", (date))
            window.localStorage.setItem("time", (time))

        } else if (values.email === "" || values.password === "" || loggeduser.email === "" || loggeduser.password === "") {
            seterror(Validationlogin(values));
            alert("Email and password didn't match")
        }
        window.localStorage.setItem("loggedin", true)
    }
    return (
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
                                    <p className='wellcome_msgp'>WELCOME BACK</p>
                                    <img src={loginmsg} style={{
                                        width: '32px',
                                        height: '32px',
                                        marginBottom: '7px'
                                    }} alt='loginmsg' />
                                </div>
                                <div style={{
                                    width: '100%',
                                    display: "flex",
                                    justifyContent: 'center'
                                }}>
                                    <p className='wellcome_msgp1'>Login with your personal information to stay connect with us</p>
                                </div>
                            </div>




                            <form className='form' onSubmit={handelsubmit}>
                                <div className='input'>
                                    <input type='email' placeholder='yourmail@gmail.com' className='email_input' onChange={handelInput} name='email' />
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
                                <button className='login_button' type='submit'>LOGIN</button>
                                <div className='forgotpassword_loginsiginup'>
                                    <p className='forgotpassword'>Forgot password?</p>
                                    <div className='account_divison'>
                                        <p className='account_divisonp'>OR</p>
                                        <hr className='divison' />
                                    </div>
                                    <p className='loginsiginup'>Don't have an account, <Link to="/signup" className='link'>signup</Link></p>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default LoginScreen