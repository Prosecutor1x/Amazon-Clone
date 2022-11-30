import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
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
      <CurrencyFormat
        renderText={(value)=> (
          <>
            <p>
              SubTotal ({basket?.length}items):{' '}
              <strong>{format.format(getBasketValue(basket))}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketValue(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
