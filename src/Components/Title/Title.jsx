import React from 'react'
import './Title.css'

const Title = ({subTitle,Title}) => {
  return (
    <div className='title'>
        <h2>{Title}</h2>
        <p>{subTitle}</p>

    </div>
  )
}

export default Title