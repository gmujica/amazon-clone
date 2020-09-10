import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_raing">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="img"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
