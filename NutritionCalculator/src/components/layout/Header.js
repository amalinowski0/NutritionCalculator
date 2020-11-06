import React from 'react'

import Logo from '../logo/logo.png'

export default function Header() {

    const refresh = () => {
        window.location.href = window.location.href
    }

    return (
        <div className="header">
            <img className='header-logo' src={Logo} alt="HOME" width='65px' height='40px' onClick={refresh}/>
            <div className="header-title">
                <h1>Welcome to Nutrition Calculator</h1>
            </div>
        </div>
    )
}