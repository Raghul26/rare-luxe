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
import { useDispatch } from 'react-redux';
import { addtofavourite } from '../redux/feature/CartProduct';
import heart1 from "../assets/images/icons8-heart-90.png"

const NewProduct = () => {
    const dispatch = useDispatch()
    const productData = productlistdata;
    const [showimg, setshowimg] = useState(true)
    const [showlist, setshowlist] = useState(true)
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

    const sendtofavourite = (e) => {
        dispatch(addtofavourite(e))
        // console.log(userfavourite, "userfavourite");
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
                                            <input type="radio" id="btn1" name='group' className='productcatgoriesbutton' onClick={() => setselectedlist(productData)} />
                                            <label for="btn1">ALL</label>
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

                    <div className='productluxury'>
                        <div className='productcol'>
                            <div className='productcatgories'>
                                <p>ALL CATGORIES</p>
                                <div className='product-listcatgories product-listcatgoriesactive'>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn5" name='group' className='productcatgoriesbutton' onClick={() => setselectedlist(productData)} />
                                        <label for="btn5">All</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn6" name='group' className='productcatgoriesbutton' onClick={() => openuserlist("Men")} />
                                        <label for="btn6">MENS</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn7" name='group' className='productcatgoriesbutton' onClick={() => openuserlist("Women")} />
                                        <label for="btn7">WOMENS</label>
                                    </div>
                                    <div className='productcatgoriesbtn'>
                                        <input type="radio" id="btn8" name='group' className='productcatgoriesbutton' onClick={() => openuserlist(alert("No Beauty Products"))} />
                                        <label for="btn8">BEAUTY</label>
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



                                                            <Link onClick={(e) => sendtofavourite(product, e)}>
                                                                <div className='productimgicon'>
                                                                    <img src={heart} alt='heart' />
                                                                </div>
                                                            </Link>




                                                        </Link>
                                                        <div className='productname'>
                                                            <div className='productoldnewprice'>
                                                                <div className='productprice'>
                                                                    <p>Rs : {product.productprice}</p>
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
                                                            {/* <Link to={'/'} onClick={(e) => sendtofavourite(product)}>
                                                                <div className='productimgicon'>
                                                                    <img src={heart} alt='heart' />
                                                                </div>
                                                            </Link> */}

                                                            <Link onClick={(e) => sendtofavourite(product, e)}>
                                                                <div className='productimgicon productimgicon2'>
                                                                    <img src={heart} alt='heart' />
                                                                </div>
                                                            </Link>

                                                        </Link>
                                                        <div className='productname productname2'>
                                                            <div className='productimgp productimgp2'>
                                                                <div className='productprice productprice2'>
                                                                    <p>{product.productprice}</p>
                                                                    <p className='oldproductprice2'>{product.oldproductprice}</p>
                                                                </div>
                                                                <p>{product.productname}</p>
                                                            </div>
                                                            <div className='productimgsub productimgsub2'>
                                                                <p>{product.productsubname}</p>
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