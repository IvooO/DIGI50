import React from 'react'
import {FaBitcoin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaBitcoin className='icon' />
                <h1> #DIGI50 Digital Asset Index <span className='purple'>50</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
