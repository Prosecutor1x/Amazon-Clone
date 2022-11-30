import React from 'react';
import './Subtotal.css';
import { UseStateValue } from '../utils/StateProvider';
import { getBasketValue } from '../utils/reducer';


function Subtotal() {
  const [{ basket }, dispatch] = UseStateValue();

  var format = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  });

  return (
    <div className="subtotal">
            <p>
              SubTotal ({basket?.length}items) :  {' '}
              <strong>{format.format (getBasketValue (basket))}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
