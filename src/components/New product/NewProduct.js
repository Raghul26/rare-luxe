import React, { useState } from 'react'
import "../assets/style/NewProduct.css"
import productlistdata from '../Data/productlistdata'
import heart from "../assets/images/heart.png";
import img1 from "../assets/images/img2.png"
import img2 from "../assets/images/img1.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import listproduct from "../assets/images/info.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart, removelengthitem } from '../redux/feature/CartProduct';
import Closebar from "../assets/images/close menu.png"
import producticon from "../assets/images/cart.png"

const NewProduct = ({ cartmessage }) => {
    const { usercart } = useSelector((state) => state.cart)
    const productData = productlistdata;
    const dispatch = useDispatch()
    // console.log(cartdata);
    // console.log(items);
    const [showimg, setshowimg] = useState(true)
    const [showlist, setshowlist] = useState(true)
    const [showproducticon, setshowproducticon] = useState()
    const opencart = () => {
        setshowproducticon(!showproducticon)
    }
    const [selectedlist, setselectedlist] = useState(productData)
    const showimg2 = () => {
        setshowimg(true)
    }
    const showimg1 = () => {
        setshowimg(false)
    }
    const showproducts = () => {
        setshowlist(!showlist)
    }
    const openuserlist = (product) => {
        const result = productData.filter((prevData) => {
            return prevData.category === product
        })
        setselectedlist(result)
        setshowlist(!showlist)
    }
    const sendtocart = (e) => {
        dispatch(addtocart(e))
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
    return (
        <div className='productcontainer'>
            <div className='productcontent'>
                <div className='producttitle'>
                    <p className='productp'>PRODUCT CATALOGUE</p>
                    <div className='productsubtitle'>
                        <p className='productsubp'>Our catalogue to relentless pursuit of the Finest in fashion accessories and lifestyle carefully handpicked to redefine luxury products</p>
                    </div>
                </div>
                {usercart.length ?
                    <div className='showproducticon' onClick={opencart}>
                        <img src={producticon} alt='showproducticon' />
                        <p>{usercart.length}</p>
                    </div> : null
                }



                <div className='products'>
                    <div className='productsimg'>
                        <div className='productsimgcontent'>
                            <div className='productsimgcatgories'>
                                <button onClick={showproducts}>ALL CATGORIES <img className={showlist ? "productsimgcatgoriesmenu" : "productsimgcatgoriesmenu_active"} src={listproduct} alt='list' /></button>
                                <div className={
                                    showlist ? "productsimgcatgorieslist" : "productsimgcatgorieslistactive"
                                }>
                                    <div className='product-listcatgories product-listcatgoriesactive'>
                                        <div className='productcatgoriesbtn'>
                                            <input type="radio" className='productcatgoriesbutton' onClick={() => setselectedlist(productData)} />
                                            <p>ALL</p>
                                        </div>
                                        <div className='productcatgoriesbtn'>
                                            <input type="radio" className='productcatgoriesbutton' onClick={() => openuserlist("Men")} />
                                            <p>MENS</p>
                                        </div>
                                        <div className='productcatgoriesbtn'>
                                            <input type="radio" className='productcatgoriesbutton' onClick={() => openuserlist("Women")} />
                                            <p>WOMENS</p>
                                        </div>
                                        <div className='productcatgoriesbtn'>
                                            <input type="radio" className='productcatgoriesbutton' onClick={() => openuserlist(alert("No Beauty Products"))} />
                                            <p>BEAUTY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='productsimage'>
                                {
                                    showimg ? <img src={img1} alt='img1' className='productsimg1' onClick={showimg1} /> : <img src={img2} alt='img1' className='productsimg2' onClick={showimg1} />
                                }
                                {
                                    showimg ? <img src={img3} alt='img3' className='productsimg3' onClick={showimg2} /> : <img src={img4} alt='img3' className='productsimg4' onClick={showimg2} />
                                }
                            </div>
                        </div>
                    </div>
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
                    <div className='productluxury'>
                        <div className='productcol'>
                            <div className='productcatgories'>
                                <p>ALL CATGORIES</p>
                                <div className='product-listcatgories product-listcatgoriesactive'>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn1" name='group' className='productcatgoriesbutton' onClick={() => setselectedlist(productData)} />
                                        <label for="btn1">All</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn2" name='group' className='productcatgoriesbutton' onClick={() => openuserlist("Men")} />
                                        <label for="btn2">MENS</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn3" name='group' className='productcatgoriesbutton' onClick={() => openuserlist("Women")} />
                                        <label for="btn3">WOMENS</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn4" name='group' className='productcatgoriesbutton' onClick={() => openuserlist(alert("No Beauty Products"))} />
                                        <label for="btn4">BEAUTY</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {
                            showimg ? <div className='productcol'>
                                <div className='productslists'>
                                    <div className='productslist'>
                                        {selectedlist.map((product) => {
                                            return (
                                                <div>
                                                    <div className='productdetails'>
                                                        <Link to={`/ProductDetails/${product.id}`} style={{
                                                            textDecoration: 'none'
                                                        }} className='productimg'>
                                                            <img src={product.image} />
                                                            <div className='productimgicon'>
                                                                <img src={heart} alt='heart' />
                                                            </div>
                                                        </Link>
                                                        <div className='productname'>
                                                            <div className='productoldnewprice'>
                                                                <div className='productprice'>
                                                                    <p>{product.productprice}</p>
                                                                </div>
                                                                <div className='oldproductprice'>
                                                                    <p>{product.oldproductprice}</p>
                                                                </div>
                                                            </div>
                                                            <div className='productimgp'>
                                                                <p>{product.productname}</p>
                                                            </div>
                                                            <div className='productimgsub'>
                                                                <p>{product.productsubname}</p>
                                                            </div>
                                                        </div>
                                                        {
                                                            cartmessage ? <div style={{
                                                                borderBottom: "1px dashed #7c7c7c7f",
                                                                width: '90%',
                                                                paddingTop: "9px",
                                                                marginLeft: "12px",
                                                                marginRight: "0px"
                                                            }} /> : null
                                                        }
                                                        <div className='productbutton'>
                                                            {
                                                                cartmessage ? <>
                                                                    <div className='productbuybtn' style={{
                                                                        cursor: "default",
                                                                        color: "#7C7C7C"
                                                                    }}>
                                                                        Before purchase or add cart create an account!
                                                                    </div>
                                                                </> : <>
                                                                    <div className='productcartbtn' onClick={(e) => sendtocart(product)}>
                                                                        Add to cart
                                                                    </div>
                                                                    <div className='productbuybtn'>
                                                                        Buy Now
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div> : <div className='productcol'>
                                <div className='productslists'>
                                    <div className='productslist'>
                                        {selectedlist.map((product) => {
                                            return (
                                                <div>
                                                    <div className='productdetails'>
                                                        <Link to={`/ProductDetails/${product.id}`} style={{
                                                            textDecoration: 'none'
                                                        }} className='productimg productimg2'>
                                                            <img src={product.image} />
                                                            <div className='productimgicon productimgicon2'>
                                                                <img src={heart} alt='heart' />
                                                            </div>
                                                        </Link>
                                                        <div className='productname productname2'>
                                                            <div className='productimgp productimgp2'>
                                                                <div className='productprice'>
                                                                    <p>{product.productprice}</p>
                                                                </div>
                                                                <p>{product.productname}</p>
                                                            </div>
                                                            <div className='productimgsub productimgsub2'>
                                                                <p>{product.productsubname}</p>
                                                            </div>
                                                        </div>
                                                        <div className='productbutton productbutton2'>
                                                            <div className='productcartbtn' onClick={(e) => sendtocart(product)}>
                                                                Add to cart
                                                            </div>
                                                            <div className='productbuybtn'>
                                                                Buy Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div >
                </div >







            </div >
        </div >
    )
}

export default NewProduct