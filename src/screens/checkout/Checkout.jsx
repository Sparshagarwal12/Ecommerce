import React from 'react';
import '../checkout/Checkout.css';

function Checkout() {
    return <div className='checkout-page'>
        <div className='checkout-navbar'>
            <p className='checkout-heading'>Checkout Page</p>
            <div className='checkout-back-button'>Back</div>
        </div>
        <div className='checkout-page-detail-section'></div>
    </div>;
}

export default Checkout;
