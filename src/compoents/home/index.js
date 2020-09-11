import React from 'react'
import './Home.css'
import Product from '../product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="img"
                />
                <div className="home_row">
                    <Product
                        id="14789"
                        title='Samsung LC49'
                        price={129.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product
                        id="58318"
                        title='New Apple ipad Pro (12.9-inc, wifi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="45875" 
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'
                        rating={3}
                    />
                    <Product
                        id="14789"
                        title='Samsung LC49'
                        price={129.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product
                        id="55687"
                        title='Amazon Echo (3rd generation)'
                        price={98.99}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                        rating={2}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="45875" 
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
