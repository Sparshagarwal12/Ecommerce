import React from 'react';
import '../calculation/calculation.css';

function Calculation(props) {
  return <>
    <div className='cal-container'>
      <p className='cal-page-price'>Price</p>
      <ul>
        {
          props.item.map((value, i) => {
            return <>
              <div className='cal-page-product-spec'>
                <li><p>{value["name"]} </p></li><p>x{value["selectQuantity"]}</p><p>= Rs. {parseInt(value["selectQuantity"]) * parseInt(value["price"])}</p>
              </div></>;
          })
        }

      </ul>
      <div className='cal-page-total'><p>Total</p><p>Rs. {props.total}</p></div>
    </div>
    <div className='button-align'>
      <button className='cal-page-buy-now'>Buy Now</button>

    </div>
  </>;
}

export default Calculation;
