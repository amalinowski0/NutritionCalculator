import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css';

export default function Header() {
    return (
        <header style={headerStl}>
            <Link style={linkStyle} to="/">
                <h1 style={{color: '#e85200'}}>NutritionCalculator</h1>
            </Link>
        </header>
    )
}

const headerStl = {
    background: '#111111',
    color: '#fff',
    textAlign: 'center',
    padding: '11px',
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}