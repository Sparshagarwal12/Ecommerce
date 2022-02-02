import React from 'react';
import './homepage.css'

import ControlledCarousel from '../../component/Carousel';

import { productName, topProduct } from '../../model/product-model';
import ProductGrid from '../../component/ProductGrid';

function HomePage(props) {
    return (
        <>
            <div>
                <ControlledCarousel />
                {/* Display Top categories product in list */}
                <div className='top-category-heading'>Top Categories</div>
                <div className='product-list-view'> {
                    topProduct.map((item) => 
                        <div className='product-card'>
                            <img src={item.image} className='product-image' alt="" />
                            <div className='product-name'>{item.name}</div>
                        </div>
                    )
                } </div>

                {/* Display Top Products in grid view */}
                <div className='top-product-heading'>Top Products</div>
                <ProductGrid productName={productName} handleCart={props.handleCart} />
                <div className='empty-space'></div>
            </div>
        </>
    );
}

export default HomePage;
