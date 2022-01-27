import React from 'react';
import '../navBar/navbar.css';
import icon from '../../assets/icon.png';
import { Link, Outlet } from 'react-router-dom';
function NavBar() {
    
    return (
        <><div className='nav-bar-design'>
            <div className='nav-bar-category'>
                <img src={icon} alt="" className='nav-bar-logo' />
                <ul className='nav-bar-category-listing'>
                    <Link to="/home-page" className='linker'><li className='nav-bar-category-item1'>Home</li></Link>
                    <Link to="/category-page" className='linker'><li className='nav-bar-category-item2'>Category </li></Link>
                    <Link to="/cart-page" className='linker'><li className='nav-bar-category-item3'>Cart </li></Link>
                    <Link to="/my-orders-page" className='linker'><li className='nav-bar-category-item4'>My Orders</li></Link>
                </ul>
            </div>
        </div>
            <Outlet />
        </>
    );
}

export default NavBar;
