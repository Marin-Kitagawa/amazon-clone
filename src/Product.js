import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
function Product({
  id,
  title,
  image,
  price,
  rating
}){
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt=""/>
      <button onClick={ addToBasket } className="">Add to Basket</button>
    </div>
  )
}

// If extends React.component is present then it means it is a class or if there is a word 'class'
// We use a function based design here because all of them say function
export default Product;
