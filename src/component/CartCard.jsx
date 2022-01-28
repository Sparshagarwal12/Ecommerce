import React from 'react';
import { topProduct } from '../model/product-model';


function CartCard(props) {
    return (<div className='cart-page-card'>
        <div className='cart-item-column'>
            <img className='cart-page-product-delete' src={require('../assets/delete.png')} onClick={() => { props.delete(props.item.id, props.index) }}></img>
            <div className='cart-page-product-name'>Product Name: {props.item.name}</div>
            <div className='cart-page-product-price' ><p>Rs. {props.item.price}</p></div>
            <img src={props.item.image} className='cart-page-product-image' />
            <div className='cart-page-product-quantity'>
                <button className='cart-page-product-quantity-decrease' onClick={() => props.changeQuantity("decrease", props.item.id)}>-</button>
                <p className='cart-page-product-quantity-value'>{props.item.selectQuantity}</p>
                <button className='cart-page-product-quantity-increase' onClick={() => props.changeQuantity("increase", props.item.id)}>+</button>
            </div>
        </div>
    </div>);
}

export default CartCard;
