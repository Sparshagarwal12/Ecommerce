import React, { useContext } from 'react';
import '../navBar/navbar.css';
import icon from '../../assets/icon.png';
import cart from '../../assets/cart.png';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../App';
import UseSwitchesCustom from '../Toggle';
import { DARK_SECONDARY_COLOR, LIGHT_SECONDARY_COLOR } from '../bgColor';

function NavBar() {
    const theme = useContext(ThemeContext);

    function handleClick() {
        if (theme.theme === "Dark") {
            theme.changeTheme("Light");
        }
        else
            theme.changeTheme("Dark");
        localStorage.setItem("theme", theme.theme);
    }

    return (
        <><div className='nav-bar-design' style={{ backgroundColor: theme.theme === "Dark" ? DARK_SECONDARY_COLOR : LIGHT_SECONDARY_COLOR }}>
            <div className='nav-bar-category'>
                <img src={icon} alt="" className='nav-bar-logo' />
                <ul className='nav-bar-category-listing'>
                    <Link to="/home-page" className='linker'><li className='nav-bar-category-item1'>Home</li></Link>
                    <Link to="/category-page" className='linker'><li className='nav-bar-category-item2'>Category </li></Link>
                    <Link to="/cart-page" className='linker'><li className='nav-bar-category-item3'>Cart </li></Link>
                    <Link to="/my-orders-page" className='linker'><li className='nav-bar-category-item4'>My Orders</li></Link>
                </ul>
                {/* <img src={cart} alt="" className='nav-bar-cart' /> */}
                <i className={theme.theme === "Dark" ? "fas fa-cart-plus nav-bar-cart-dark" : "fas fa-cart-plus nav-bar-cart"}></i>
                {/* <div className='nav-bar-toggle'> */}
                <button className='nav-bar-toggle' onClick={handleClick}><UseSwitchesCustom /></button>
                {/* </div> */}
            </div>
        </div>
            <Outlet />
        </>
    );
}

export default NavBar;
