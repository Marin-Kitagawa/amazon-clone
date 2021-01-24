import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import './CheckoutProduct.css'
import Subtotal from './Subtotal'

function Checkout(){
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Augarmait20/ghd_pc.jpg"
          alt="" />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Amazon Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one click on "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Shopping Cart</h2>
              {/* List of all the checkout project */}
              {basket.map(item =>(
                <CheckoutProduct
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                />
              ))}
            </div>
          )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          {/* <h1>Subtotal</h1> */}
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout;
