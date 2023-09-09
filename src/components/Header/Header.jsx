import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
function Header() {
    return (
        <header>
            <img className='logo' src="./Logo.svg" alt="Logo" />
            <Nav />
        </header>
    )
}

export default Header