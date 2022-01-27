import React from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import { topProduct } from '../../model/product-model';

function Cart() {
    return <div className='cart-page-view'>
        <div className='cart-page-card'>
            <div className='cart-item-column'>
                <img src={topProduct[0].image} className='cart-page-product-image'/>
            </div>
        </div>
        <Calculation />
    </div>;
}

export default Cart;
