import React from 'react'
import './About.css'

import About_1 from '../../assets/About1.png'
import About_2 from '../../assets/About2.png'
import About_3 from '../../assets/About3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faGears, faMedal } from '@fortawesome/free-solid-svg-icons'




const About = () => {
  return (
    <div className='Abouts'>
     <div className='About'>
        <img src={About_1} alt=""  />
        <div className='caption'>
        <FontAwesomeIcon icon={faMedal} size="3x"  />
        
            <p style={{fontWeight:'bold', fontSize:'20px'}}>Good Quality Servicing</p>
        </div>
     </div>

     <div className='About'>
        <img src={About_2} alt="" />
        <div className='caption'>

        
        <FontAwesomeIcon icon={faAward} size='3x'/>
            
            <p  style={{fontWeight:'bold', fontSize:'20px'}}>Expert Workers</p>
        </div>
     </div>

     <div className='About'>
        <img src={About_3} alt="" />
        <div className='caption'>
        <FontAwesomeIcon icon={faGears} size='3x' />
            
            <p  style={{fontWeight:'bold', fontSize:'20px'}}>Modern Equipments</p>
        </div>
     </div>


    </div>
  )
}

export default About