import React from 'react'

function Home() {
    return (
        <div>
            <div className="addToCart">
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-10.png" alt="Cart" />
            </div>
            <h1>Home Component</h1>
            <div className="cartWrapper">
                <div className="imageWrapper">
                    <img src="https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png" alt="Mobile" />
                </div>
                <div className="textWrapper">
                    <p>iPhone</p>
                    <p>Price: $1000.00</p>
                </div>
                <div className="btnWrapper">
                    <button type='button'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home