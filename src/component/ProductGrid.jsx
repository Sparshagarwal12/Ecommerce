import React from 'react';

function ProductGrid(props) {


    return <div className='top-product-list-view'> {
        props.productName.map((item) => {
            <div className='product -list-card'>
                <img src={item.image} className='product-list-image' alt="" />
                <div className='product-list-name'>{item.name}</div>
                <div className='product-list-description'>{item.description}</div>
                <div className='price-cart-row'>
                    <div className='product-list-price'>Rs. {item.price}</div>
                    <button className='add-to-cart' onClick={() => props.handleCart(item)}>Add to Cart</button>
                </div>
            </div>
        })
    } </div>;
}

export default ProductGrid;
