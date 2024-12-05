import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import './Component_css/Navbar.css'
import Avatar from '../Images/avatar.png'
import CustomerSupport from './CustomerSupport'
import HomeCards from './HomeCards'
import ProfileDropdown from './ProfileDropdown'
import { NavLink,useNavigate } from 'react-router-dom'
import Logo from '../Images/logo.png'
import title from '../Images/title.png'
import SearchLogo from '../Images/search-b.png'



const Navbar = () => {
    const navigate = useNavigate();
    const [openProfile,setOpenProfie] = useState(false);

    const handleClick = () =>{
        navigate("/home");

    }

    return (
        <div className='Nav-wrapper'>
            <nav>
                <span className='components'>
                    <div className='logo' title='DoorStep' onClick={handleClick}>
                        <img src={title} />
                    </div>
                    <div className='links'>
                        <label><NavLink to='/home'>Home</NavLink></label>
                        <label><NavLink to='/services'>Services</NavLink></label>
                        {/* <label><NavLink to='/customersupport'>Support</NavLink></label> */}
                        <label><NavLink to='/seller'>Service Provider</NavLink></label>
                    </div>
                    <div className='cart-logo' onClick={() => navigate('/cart')}>
                        <i className="fa-solid fa-cart-shopping "></i>
                        <label>4</label> 
                    </div>
                    <div className='search-box'>
                        <input type='text' placeholder='Search' />
                        <img src={SearchLogo} alt='search' className='search-icon' />
                    </div>
                    <img className="nav-avatar" src='/images/nav-avatar.png' onClick={() => setOpenProfie((prev) => !prev)}/>
                    {/* <button className='components-login-btn' onClick={() => setOpenProfie((prev) => !prev)}>Login</button> */}
                </span>
                {
                    openProfile && <ProfileDropdown/>

                }

            </nav>
            
        </div>
    )
}

export default Navbar;