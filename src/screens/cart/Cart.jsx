import React from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import CartCard from '../../component/CartCard';

function Cart(props) {
    return <div className='cart-page-view'>
        {props.total !== 0 ? <>
            <div className='card-page-list'>
                {
                    props.cartData.map((value, index) => {
                        return <CartCard key={props.id} item={value} delete={props.delete} increase={props.increase} decrease={props.decrease} />
                    })
                }
            </div>
            <Calculation item={props.cartData} total={props.total} />
        </> :
            <div className='cart-page-no-data'>No Data</div>
        }
    </div>;
}

export default Cart;
