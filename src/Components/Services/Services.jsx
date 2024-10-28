import React, { useRef } from 'react'
import './Services.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import service_1 from '../../assets/service-1.png'
import service_2 from '../../assets/service-2.png'
import service_3 from '../../assets/service-3.png'
import service_4 from '../../assets/service-4.png'




const Services = () => {

    const Slide=useRef();
    let tx=0;


const slideForward=()=>{
    if(tx>-50){
        tx-=25;

    }
    Slide.current.style.transform=`translateX(${tx}%)`

}

const slideBackward=()=>{

    if(tx<0){
        tx+=25;

    }
    Slide.current.style.transform=`translateX(${tx}%)`
    
}

  return (
    <div className='Services'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className='Slider'>
            <ul ref={Slide}>
                <li>
                    <div className="slide">
                        <div className="serv-info">
                            <img src={service_1} alt="" />
                            <div>
                                <h3>Oil Change</h3>
                            </div>
                        </div>
                        <p>We provide expert oil changing services using the right oil type for your vehicle's optimal use of engine health.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="serv-info">
                            <img src={service_2} alt="" />
                            <div>
                                <h3>Brake Repairs</h3>
                            </div>
                        </div>
                        <p>Our brake repair team is dedicated to providing quality service, from inspection to replacement, to keep your brakes best.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="serv-info">
                            <img src={service_3} alt="" />
                            <div>
                                <h3>Battery Replacement</h3>
                            </div>
                        </div>
                        <p>Our battery replacement service not only includes installing a new battery but also checks the overall health of your vehicle's electrical system.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="serv-info">
                            <img src={service_4} alt="" />
                            <div>
                                <h3>Engine Diagnostics</h3>
                            </div>
                        </div>
                        <p>Experience reliable engine diagnostics with us,where we perform visual inspections and performance testing to ensure your engine runs smoothly.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Services