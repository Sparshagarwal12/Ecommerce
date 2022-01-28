import React from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import CartCard from '../../component/CartCard';

function Cart(props) {
    console.log(props.total);
    return <div className='cart-page-view'>
        {props.cartData !== null ? <>
            <div className='card-page-list'>
                {
                    props.cartData.map((value, index) => {
                        return <CartCard item={value} changeQuantity={props.changeQuantity} delete={props.delete} index={index} />
                    })
                }
            </div>
            <Calculation item={props.cartData} total={props.total} />
        </> :
            <div>No Data</div>
        }
    </div>;
}

export default Cart;
