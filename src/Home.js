import React from 'react'
import './Home.css'
import Product from './Product'
function Home(){
  return (
    <div className="home">
      {/* 2 products */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg"
        alt=""/>
        {/* Product [id, title, price, rating, image] */}
        <div className="home__row">
          <Product
            id="924973"
            title="
            Good Vibes, Good Life: How Self-Love Is the Key to Unlocking Your Greatness"
            price={625.43}
            rating={5}
            image="https://m.media-amazon.com/images/I/61oWOz2lTgL._AC._SR360,460.jpg"
          />
          <Product
            id="724925"
            title="Stephen Hawking: 21 (Little People, Big Dreams)"
            price={646.89}
            rating={5}
            image="https://m.media-amazon.com/images/I/71f6b9pVnTL._AC._SR360,460.jpg"
          />
        </div>

        {/* Another product */}
        {/* Demo for more than 2 column of products */}
        <div className="home__row">
          <Product
            id="927040"
            title="The Planets: A Sunday Times Bestseller"
            price={428.17}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41cyr+iWfhL._AC_US327_QL65_.jpg"
          />
          <Product
            id="464908"
            title="Collins Stargazing: Beginners guide to astronomy (Royal Observatory Greenwich)"
            price={449.77}
            rating={5}
            image="https://m.media-amazon.com/images/I/71FprNKdxQL._AC._SR360,460.jpg"
          />
          <Product
            id="972133"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={100.89}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01, 204, 203, 200_.jpg"
          />
        </div>
        {/* Another product */}
        <div className="home__row">
          <Product
            id="811969"
            title="Turn Left At Orion"
            price={127.18}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Ol2W+xn8L._AC_SX184_.jpg"
          />
          <Product
            id="519050"
            title="Unlocking the Universe"
            price={571.92}
            rating={5}
            image="https://m.media-amazon.com/images/I/81f2HPmIDFL._AC._SR360,460.jpg"
          />
          <Product
            id="906559"
            title="Forces of Nature"
            price={509.19}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/6146P7fxwLL._AC_US327_QL65_.jpg"
          />
          <Product
            id="941579"
            title="Where The Crawdads Sing"
            price={235.39}
            rating={5}
            image="https://m.media-amazon.com/images/I/81guS1mHhJL._AC._SR360,460.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="985379"
            title="Samsung 2020 75in Q60T QLED 4K Quantum HDR Smart TV with Tizen OS Black [Energy Class A+]"
            price={195909.84}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/811tY9-aqrL._AC_SX679_.jpg"
          />
        </div>

    </div>
  )
}

export default Home;


// React is component bases. So, each component loads in its own timeline and hence the user needn't wait for the entire webpage to load
// React only "reacts" to the component of the webpage that is changing.
