import React from 'react';
import Checkoutitems from './Checkoutitems';
import './Checkout.css';
import Subtotal from './Subtotal';
import { ListItem } from '@mui/material';
import { UseStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_top_img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <h2 className="cart_top_text">Your shopping cart</h2>
        {basket?.map(item => {
          return (
            <Checkoutitems
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              img={item.img}
            />
          );
        })}
      </div>

      <div className="cart_right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
