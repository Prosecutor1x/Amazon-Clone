import React from 'react';
import './Checkoutitems.css';
import { UseStateValue } from './StateProvider';

function Checkoutitems({ id, title, img, price, rating }) {
  const [{ basket }, dispatch] = UseStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_img" src={img} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>Rs: </small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          <p>Customer Rating: </p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>

      <button onClick={removeFromBasket}>Remove From basket</button>
    </div>
  );
}
export default Checkoutitems;
