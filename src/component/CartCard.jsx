import React from 'react';
import { topProduct } from '../model/product-model';


function CartCard() {
    return (<div className='cart-page-card'>
        <div className='cart-item-column'>
            <img className='cart-page-product-delete' src={require('../assets/delete.png')}></img>
            <div className='cart-page-product-name'>Product Name: {topProduct[0].name}</div>
            <div className='cart-page-product-price' ><p>Rs.100</p></div>
            <img src={topProduct[0].image} className='cart-page-product-image' />
            <div className='cart-page-product-quantity'>
                <p className='cart-page-product-quantity-increase'>-</p>
                <p className='cart-page-product-quantity-value'>{1}</p>
                <p className='cart-page-product-quantity-decrease'>+</p>
            </div>
        </div>
    </div>);
}

export default CartCard;
