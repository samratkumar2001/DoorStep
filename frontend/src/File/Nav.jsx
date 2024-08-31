import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='nav' style={{display: 'flex',justifyContent:'space-evenly'}} >
                
                    <label id='l'><NavLink to='/'>Home</NavLink></label>
                    <label><NavLink to='/about'>About</NavLink></label>
                    <label><NavLink to='/contact'>Contact</NavLink></label>
                    <label><NavLink to='/service'>Service</NavLink></label>

            </div>
        </>
    )
}

export default Nav