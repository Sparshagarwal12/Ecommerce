import React from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import CartCard from '../../component/CartCard';

function Cart(props) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    console.log(typeof cartData);

    return <div className='cart-page-view'>
        <div className='card-page-list'>
            {
                cartData.map((value) => {
                    return <CartCard item={value} />
                })
            }
        </div>
        <Calculation />
    </div>;
}

export default Cart;
