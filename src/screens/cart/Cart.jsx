import React from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import CartCard from '../../component/CartCard';

function Cart() {
    return <div className='cart-page-view'>
        <CartCard />
        <Calculation />
    </div>;
}

export default Cart;
