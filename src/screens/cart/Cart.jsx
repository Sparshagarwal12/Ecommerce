import React, { useContext } from 'react';
import Calculation from '../../component/calculation/Calculation';
import '../cart/cart.css';
import CartCard from '../../component/CartCard';
import { ThemeContext } from '../../App';

function Cart(props) {

    const theme = useContext(ThemeContext);

    return <div className={theme.theme === "Dark" ? 'cart-page-view-dark' : 'cart-page-view'}>
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
