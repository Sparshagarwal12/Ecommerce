import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import '../calculation/calculation.css';

function Calculation(props) {

  var nav = useNavigate();

  const theme = useContext(ThemeContext);

  const handleCheckout = () => {
    nav('/check-out')
  }
  return <>
    <div className={theme.theme === "Dark" ? 'cal-container-dark' : 'cal-container'} >
      <p className={theme.theme === "Dark" ? 'cal-page-price-dark' : 'cal-page-price'}>Price</p>
      <ul>
        {
          props.item.map((value, i) => {
            return <>
              <div className={theme.theme === "Dark" ? 'cal-page-product-spec-dark' : 'cal-page-product-spec'} key={value.id}>
                <li ><p>{value["name"]} </p></li><p>x{value["selectQuantity"]}</p><p>= Rs. {value["price"]}</p>
              </div></>;
          })
        }
      </ul>
      <div className={theme.theme === "Dark" ? 'cal-page-total-dark' : 'cal-page-total'}><p>Total</p><p>Rs. {props.total}</p></div>
    </div>
    <div className='button-align'>
      <button className={theme.theme ==="Dark"?'cal-page-buy-now-dark':'cal-page-buy-now'} onClick={handleCheckout}>Buy Now</button>

    </div>
  </>;
}

export default Calculation;
