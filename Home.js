import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img className="home__image"
           src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" 
           alt="" /> 

           {/* product id,title,price,rating,name*/}
            <div className="home__row">
              <Product
                id="12332341"
                title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
                price={115900.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg" 
              />
              <Product
                id="49538094"
                title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Black)"
                price={4499.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg" 
              />
            </div>

            <div className="home__row">
            <Product
                id="4903850"
                title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Space Grey (4th Generation)"
                price={66800.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/71LJWOMyP4L._SL1500_.jpg" 
              />
              <Product
                id="23445930"
                title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
                price={17830.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/71BbEhvMi2L._SL1500_.jpg" 
              />
              <Product
                id="3254354345"
                title="Havells CAPTURE 500 Watt Mixer Grinder with 3 Stainless Steel Jar (Grey & Green) with 5 year Motor warranty"
                price={2399.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/51Eho8gQCPL._SL1500_.jpg" 
              />
            </div>
            <div className="home__row">
            <Product
                id="90829332"
                title="Samsung 138 cm (55 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA55AUE70AKLXL (Black) (2021 Model)"
                price={57990.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg" 
              />
            </div>
           
        </div>
    )
}

export default Home
