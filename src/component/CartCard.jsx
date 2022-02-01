import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { DARK_PRIMARY_COLOR, LIGHT_PRIMARY_COLOR, LIGHT_SECONDARY_COLOR } from './bgColor';


function CartCard(props) {

    const theme = useContext(ThemeContext);


    return (<div className={theme.theme === "Dark" ? 'cart-page-card-dark' : 'cart-page-card'}>
        <div className='cart-item-column'>
            {/* <img onClick={() => props.delete(props.item.id)} className='cart-page-product-delete' src={require('../assets/delete.png')} ></img> */}
            <i className={theme.theme ==="Dark"?"far fa-trash-alt cart-page-product-delete-dark":"far fa-trash-alt cart-page-product-delete"}></i>
            <div className={theme.theme === "Dark" ? 'cart-page-product-name-dark' : 'cart-page-product-name'}>Product Name: {props.item.name}</div>
            <div className={theme.theme === "Dark" ? 'cart-page-product-price-dark' : 'cart-page-product-price'} ><p>Rs. {props.item.price}</p></div>
            <img src={props.item.image} className='cart-page-product-image' />
            <div className='cart-page-product-quantity'>
                <button className={theme.theme === "Dark" ? 'cart-page-product-quantity-decrease-dark' : 'cart-page-product-quantity-decrease'} onClick={() => props.decrease(props.item.id)}>-</button>
                <p className={theme.theme === "Dark" ? 'cart-page-product-quantity-value-dark' : 'cart-page-product-quantity-value'}>{props.item.selectQuantity}</p>
                <button className={theme.theme === "Dark" ? 'cart-page-product-quantity-increase-dark' : 'cart-page-product-quantity-increase'} onClick={() => props.increase(props.item.id)}>+</button>
            </div>
        </div>
    </div>);
}

export default CartCard;
