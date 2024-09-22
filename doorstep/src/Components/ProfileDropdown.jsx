import React from 'react';
import "./Component_css/ProfileDropdown.css";
import ProfileIcon from "../Images/profileIcon.png";
import SettingsIcon from "../Images/settingsIcon.png";
import LogoutIcon from "../Images/logoutIcon.png";
import DashboardIcon from "../Images/dashboardIcon.png";
import CartIcon from "../Images/cartIcon.png";
import { Link } from 'react-router-dom';
import CustomersupportIcon from "../Images/cussupportIcon.png";
const ProfileDropdown = () => {
    const handleLogout = () => {
        // Remove login from localStorage
        localStorage.removeItem('login');
        window.alert("Logged Out");
        
        // Redirect to login page
        navigate('/signin');
      };
    return (
        <div className='dropDown-container'>
            <ul className='dropDown-item-container'>
                <div className="dropDownItem">
                    <img src={ProfileIcon} alt='' />
                    <li>Profile</li>
                </div>
                <div className="dropDownItem">
                    <img src={CartIcon} alt='' />
                    <li><Link to="/cart">Cart</Link></li>
                </div>
                <div className="dropDownItem">
                    <img src={DashboardIcon} alt='' />
                    <li><a href='/dashboard'>Dashboard</a></li>
                </div>
                <div className="dropDownItem">
                    <img src={SettingsIcon} alt='' />
                    <li>Settings</li>
                </div>
                <div className="dropDownItem">
                    <img src={CustomersupportIcon} alt='' />
                    <li>Help </li>
                </div>
                <div className="dropDownItem">
                    <img src={LogoutIcon} alt='' />
                    <li><Link onClick={handleLogout} to="/">Logout</Link></li>
                </div>
            </ul>
        </div>
    )
}
export default ProfileDropdown;