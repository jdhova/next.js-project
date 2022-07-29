import React from 'react';
// import {Link } from 'react-router-dom'
// import { Container,Navbar } from 'react-bootstrap';
import Link from 'next/link'
import navStyles from '../../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href ='/' >Home</Link>
            </li>
            <li>
                <Link href ='/drinks' >Drinks</Link>
            </li>
            <li>
                <Link href ='/food' >Food</Link>
            </li>
        </ul>

     </nav>
  )
}

export default Nav

