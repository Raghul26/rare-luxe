import React from 'react'
import "../assets/style/Productsreview.css"
import reivew1 from "../assets/images/review1.jpg"
import reivew2 from "../assets/images/review2.jpg"
import reivew3 from "../assets/images/review3.jpg"
import reivew4 from "../assets/images/review4.jpg"
import reivew5 from "../assets/images/review5.jpg"
import rating from "../assets/images/icons8-rating-96.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Productsreview = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 300 },
            items: 1,
        }
    };
    const productreview = [
        {
            id: 1,
            image: reivew1,
            productreviewname: 'ALFREDO LEVIN',
            productrevieuserpalce: '1 weeks ago',
            productrevieratings: 'Ratings 4',
            productreviep: 'The fit was great and the quality was top-notch. The customer service was also excellent; the staff was very friendly and helpful. Highly recommend this store for all your fashion needs, rare and luxe Thankyou! 😍'
        },
        {
            id: 2,
            image: reivew2,
            productreviewname: 'Craig Bator',
            productrevieuserpalce: '4 days ago',
            productrevieratings: 'Ratings 4.5',
            productreviep: 'I recently purchased a dress and I am absolutely in love with it! The fabric is soft and comfortable and the design is so unique and stylish.'
        },
        {
            id: 3,
            image: reivew3,
            productreviewname: 'Alena Mango',
            productrevieuserpalce: '2 weeks ago',
            productrevieratings: 'Ratings 4.5',
            productreviep: 'The fit was great and the quality was top-notch. The customer service was also excellent; the staff was very friendly and helpful. Highly recommend this store for all your fashion needs!'
        },
        {
            id: 4,
            image: reivew4,
            productreviewname: 'Alena Mango',
            productrevieuserpalce: '2 weeks ago',
            productrevieratings: 'Ratings 4.5',
            productreviep: 'The quality was top-notch. The customer service was also excellent; the staff was very friendly and helpful. Highly recommend this store for all your fashion needs! 😍'
        },
        {
            id: 5,
            image: reivew5,
            productreviewname: 'Alena Mango',
            productrevieuserpalce: '2 weeks ago',
            productrevieratings: 'Ratings 4.5',
            productreviep: 'The fit was great and the quality was top-notch. The customer service was also excellent; the staff was very friendly and helpful. Highly recommend this store for all your fashion needs!'
        }
    ]
    return (
        <div className='productreviewcontainer'>
            <div className='productreviewcontent'>
                <div className='producttitle'>
                    <p className='productp'>OUR VALUEBLE CUSTOMER</p>
                    <div className='productsubtitle'>
                        <p className='productsubreviewp'>Content For Shopping Can Help Customers Make Informed Decisions When Buying Products. When you feel confident that you've found the right store, go ahead and make your purchase knowing that you've made an informed decision.</p>
                    </div>
                </div>
                <Carousel responsive={responsive} className='productreviewrow'>

                    {
                        productreview.map((productreviewitem, index) => (
                            <div className='productreviewcolumn' key={index}>
                                <div className='productreviews'>
                                    <div className='productreviewtop'>
                                        <img src={productreviewitem.image} alt='' />
                                        <div>
                                            <p className='productreviewtopname'>{productreviewitem.productreviewname}</p>
                                            <p className='productreviewtopsubname'>{productreviewitem.productrevieuserpalce}</p>
                                        </div>
                                    </div>
                                    <div className='productreviewratings'>
                                        <div style={{
                                            width: 'max-content',
                                            display: 'flex',
                                            // alignItems: "center"
                                        }}>
                                            <p className='productreviewratingsdetail'>{productreviewitem.productrevieratings}</p>
                                            <img src={rating} alt="rating" style={{
                                                width: '21px',
                                                height: '21px',
                                                marginTop: '-4px'
                                            }} />
                                        </div>
                                        <p className='productreviewratingsp'>{productreviewitem.productreviep}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Carousel>
            </div>
        </div>
    )
}

export default Productsreview