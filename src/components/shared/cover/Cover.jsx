import React from 'react'

const Cover = ({coverImg,title}) => {
  return (
    <div className="hero h-[500px]" style={{backgroundImage:`url(${coverImg})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className='glass px-20 py-14 rounded-lg'>
            <h1 className='text-5xl font-semibold'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Cover