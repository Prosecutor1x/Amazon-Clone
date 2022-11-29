import React from 'react';
import './Checkoutitems.css';
import { UseStateValue } from '../utils/StateProvider';

function Checkoutitems({ id, title, img, price, rating,hideButton }) {
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
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={img} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
)
}
export default Checkoutitems;
