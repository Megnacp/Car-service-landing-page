import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/carlogo1.png'
import { Link } from 'react-scroll'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Navbar = () => {


  const[mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);


  }
  return (

    

    <nav className='container'>
    
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Abouts' smooth={true} offset={-420} duration={500}>About</Link></li>
            <li><Link to='features' smooth={true} offset={-320} duration={500}>Features</Link></li>
            <li><Link to='Services' smooth={true} offset={-380} duration={500}>Services</Link></li>
            
            <li><Link to='contact' smooth={true} offset={-250} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <FontAwesomeIcon icon={faBars} className='faBars' onClick={toggleMenu}/>
        
        </nav>
    
  )
}

export default Navbar