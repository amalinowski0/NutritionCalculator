import React from 'react'
import badge from '../badge/attrib-badge.png'

export default function Footer() {
    return (
        <div className="footer">
            POWERED BY 
            <img className="badge" src={badge} alt="Edamam_badge" height="26"/>
        </div>
    )
}
