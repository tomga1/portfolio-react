import React from 'react'
import './Navbar.Module.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <a href='#' className='logo' id='logo'> <h1>Portfolio</h1></a>
        <ul className='menu'>
            <li><a className='menu-link' href='#'>Sobre mí</a></li>
            <li><a className='menu-link' href='#'>Proyectos</a></li>
            <li><a className='menu-link' href='#'>Contacto</a></li>
        </ul>
    </nav>
  )
}
