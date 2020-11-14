import React from 'react'
import badge from '../images/attrib-badge.png'

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">POWERED BY</p> 
            <img className="badge" src={badge} alt="Edamam_badge"/>
            <p className="footer-text">Stock footage provided by</p>
            <a href="https://www.videvo.net"  rel="noopener noreferrer" target="_blank">Videvo</a> 
        </div>
    )
}
