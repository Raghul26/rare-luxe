import React, { useState } from 'react'
import "../assets/style/ExclusiveScreen.css"
import image1 from "../assets/images/vecteezy_isolated-white-t-shirt-white-hanger_8847289.png";
import image2 from "../assets/images/vecteezy_isolated-black-t-shirt-white-hanger_8847294.png";
import image3 from "../assets/images/vecteezy_isolated-blue-front-sweater_8847343.png"
import logo1 from "../assets/images/logo1.png";
import logo from "../assets/images/logo.png"
import image from "../assets/images/vecteezy_folha-de-palmeira_15100099.png"
import productlist from "../assets/images/Line.png"
import { Link } from 'react-router-dom';

const ExclusiveScreen = () => {
    const product = [
        {
            id: 0,
            image: image2,
            logoimg: logo1,
        },
        {
            id: 1,
            image: image3,
            logoimg: logo1,
        },
        {
            id: 2,
            image: image1,
            logoimg: logo,
        }
    ]
    const [showimage, setshowimage] = useState(image1)
    // const [logoimg, setlogoimg] = useState(logo)
    const handelproduct = (image, logoimg) => {
        setshowimage(image);
        // setlogoimg(logoimg);
    }
    return (
        <div className='exclusivecontainer'>
            <div className='exclusivecontant'>
                <div className='exclusivecontantcol'>
                    <div className='exclusivecontanttitle'>
                        <p>EXCLUSIVE <br />OUR BRAND</p>
                    </div>
                    {/* <div className='exclusivebtn'>
                        <button>SHOP NOW</button>
                    </div> */}
                    <div className='exclusivesubp'>
                        <p>Our exclusive series is a curated collection limited edition releases each piece meticulously selected to epitomize sophistication and exclusivity.</p>
                    </div>
                    <div className='exclusivebtn'>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className='exclusivecontantcol'>
                    <div className='exclusivecontantproductimg'>
                        <img src={showimage} alt='' className='exclusivecontantproduct_img' />
                        {/* <img src={logo} alt='' className='exclusiveproduct_img' /> */}
                        <div className='exclusiveproductlist' >
                            <p style={{
                                paddingBottom: '10px'
                            }}>scroll</p>
                            <img src={productlist} alt='' className='exclusiveproduct_list' />
                        </div>
                    </div>
                </div>
                <div className='exclusivecontantcol exclusivecontantdes'>
                    <div className='exclusiveproduct_des'>
                        <p>Trendy fashion collection for men and women</p>
                    </div>
                    <div className='exclusiveproductdesimg'>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
            <div className='exclusivecontantproductlist'>
                <div className='exclusivecontantproducts'>
                    {
                        product.map((item, index) => (
                            <div className='exclusiveproductimg' key={index} onClick={() => handelproduct(item.image)}>
                                <Link>
                                    <img src={item.image} alt="" className='exclusivecontantproductlist_img' />
                                    {/* <img src={item.logoimg} alt='' className='exclusivecontantproductlogo_img exclusivecontantproductlogo_img1' /> */}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className='exclusivebtn'>
                <button>SHOP NOW</button>
            </div> */}
        </div>
    )
}

export default ExclusiveScreen