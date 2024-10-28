import React from 'react'
import './Contact.css'



import White_arrow from '../../assets/white-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'




const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-box'>
            <h3>We are here for you</h3>
            <p>Feel free to reach out and get in touch for reliable service and hassle-free car care.Your feedback is important for us.</p>
            <ul>
                <li><FontAwesomeIcon icon={faEnvelope}  size='2x' style={{padding:'10px'}}/> contact@automote.com</li>
                <li><FontAwesomeIcon icon={faPhone} size='2x' style={{padding:'10px'}}/>905-637-4300</li>
                <li><FontAwesomeIcon icon={faLocationDot} size='2x' style={{padding:'10px'}} />#49, Diego Martin Main Rd, <br/>Banglore</li>


                
            </ul>
        </div>
        <div className='contact-box'>

            <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>

                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Number' required/>

                <label>Type Your message</label>
                <textarea name='message'  rows="5" placeholder='Enter Your message' required></textarea>

                <button type='submit' className='btn btn-dark'>Submit<img src={White_arrow} alt=''/></button>


            </form>
        </div>
    </div>
  )
}

export default Contact