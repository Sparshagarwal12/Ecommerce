import React, { useRef, useEffect } from 'react';
import '../checkout/Checkout.css';

function Checkout() {

    const nameList = ['fname', 'lname', 'mail', 'number'];
    

    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        nameList.forEach((value) => { console.log(ref.current[value].value); })
    }


    return <div className='checkout-page'>
        <div className='checkout-navbar'>
            <p className='checkout-heading'>Checkout Page</p>
            <div className='checkout-back-button'>Back</div>
        </div>
        <div className='checkout-page-detail-section'>
            <div className='checkout-form'>
                <form onSubmit={handleSubmit} ref={ref}>
                    <div className='checkout-name'>
                        <input type={"text"} placeholder='Enter firstname' className='text-field' name={nameList[0]} />
                        <input type={"text"} placeholder='Enter lastname' className='text-field' name={nameList[1]} />
                    </div>
                    <div className='checkout-basic-detail'>
                        <input type={"text"} placeholder='Enter your mail' className='text-field' name={nameList[2]} />
                        <input type={"text"} placeholder='Enter your number' className='text-field' name={nameList[3]} />
                    </div>
                    <div className='checkout-basic-info'>
                        <div className='gender-info'>
                            <p className='gender'>Gender:</p>
                            <div className='male-check'>
                                <input type={"radio"} />
                                <label>Male</label>
                            </div>
                            <div className='male-check'>
                                <input type={"radio"} />
                                <label>Female</label>
                            </div>
                        </div>
                        <div>
                            <input type={"text"} placeholder='Enter your age' className='new-text-field' />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>;
}

export default Checkout;
