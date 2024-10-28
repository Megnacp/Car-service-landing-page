import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-text'>
            <h1>REV UP YOUR RIDE</h1>
            <p>Our cutting-edge , open doors to top-notch car service thet keeps your vehicle running like new.</p>
            <button className='btn' >Explore more <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Home
