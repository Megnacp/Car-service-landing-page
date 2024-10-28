import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Home/Home'
import About from './Components/About/About'

import Title from './Components/Title/Title'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from './Components/Features/Features'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'








const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subTitle='For years we havve been dedicated to delivering reliable,high quality car services with focus on trust,transparency,and customer satisfaction.Our mission is simple:to deliver fast,friendly,and professional car care that makes your experience easy and stress-free.' Title='About Us'/>
      <About/>
      <Title subTitle='Why Choose Us' Title='Features'/>
      <Features/>
      <Title subTitle='What We Offer '  Title='Services'/>
      <Services/>
      <Title subTitle='Get In Touch '  Title='Contact Us'/>
      <Contact/>
      <Footer/>
      <Link/>
      <FontAwesomeIcon/>
      
      

     
      </div>
      
    </div>
  )
}

export default App