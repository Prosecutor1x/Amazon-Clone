import React from 'react';
import './Product.css';
import { UseStateValue } from './StateProvider';

function Product({ id, title, img, price, rating }) {
  const [{ basket }, dispatch] = UseStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs: </small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          <p>Customer Rating: </p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket} className="add_to_basket">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
