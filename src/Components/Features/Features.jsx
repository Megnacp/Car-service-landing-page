import React from 'react'
import './Features.css'
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow  from '../../assets/white-arrow.png';



export const Features = () => {
  return (


    <div className='features'>
     <div className='gallery'>
        <img src={gallery_1} alt="" />
        <div className='caption'>
        
            <p>ONLINE BOOKING <br/>available with options<br/> to select service type</p>
        </div>
     </div>

     <div className='gallery'>
        <img src={gallery_2} alt="" />
        <div className='caption'>
            
            <p>PAYMENT OPTION<br/>UPI,credit/debit cards,<br/>digital wallet</p>
        </div>
     </div>



     <div className='gallery'>
        <img src={gallery_3} alt="" />
        <div className='caption'>
            
            <p>EMERGENCY SERVICES<br/>On-demand roadside,<br/>assisstance</p>
        </div>
     </div>

     <div className='gallery'>
        <img src={gallery_4} alt="" />
        <div className='caption'>
            
            <p>DETAILING AND CLEANING<br/>Spotless,showroom-quality<br/> finish with our detailed<br/> car cleaning services</p>
        
            
   
            </div>
        
        

            </div>
     
     <button className='btn dark-btn'>Explore<img src={white_arrow} alt=''/></button>

     </div>
    
    
  )

  
  
}
