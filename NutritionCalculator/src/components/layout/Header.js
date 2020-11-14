import React, { useState, useEffect } from 'react'

import Logo from '../images/logo.png'

export default function Header() {
    const [visible, setVisible] = useState(true)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect( () => {
        function onScroll () {
            let currentPosition = window.pageYOffset;
            if(currentPosition > 30)
            {
                setVisible(false)
            }
            else if(currentPosition === 0)
            {
                setVisible(true)
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
        }
        window.addEventListener("scroll", onScroll);
        return window.addEventListener("scroll", onScroll);
    },[scrollTop])  

    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className={visible ? 'header' : 'header faded'}>
            <img className='header-logo' src={Logo} alt="HOME" width='65px' height='40px' onClick={refresh}/>
        </div>
    )
}