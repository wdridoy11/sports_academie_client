import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const basketball=`https://cdn.pixabay.com/photo/2020/06/01/04/45/sports-5245098_1280.jpg`
const badminton =`https://img.freepik.com/free-photo/boy-with-badminton-rackets-outdoors_155003-13781.jpg?w=1380&t=st=1686101925~exp=1686102525~hmac=fa5b122be58eb61da1ffa135483ad7cefc23a0f1f28234a406a162ab8a4b3cc3`
const foodball = `https://img.freepik.com/free-photo/full-shot-boy-kicking-ball_23-2148361481.jpg?w=900&t=st=1686078054~exp=1686078654~hmac=be90bda3b113ea67af9ba83836670e8be2a539dc0e46b7b4226df3decf599e63`
const Hero = () => {
  return (
    <div>
        <AwesomeSlider>
            <div data-src={`${basketball}`} >
                <h1 className='text-white z-10 absolute text-4xl font-semibold'>Our Basketball training programs</h1>
            </div>
            <div className='' data-src={`${foodball}`}>
                <h1 className='text-black z-10 absolute text-4xl font-semibold'>Our Foodball training programs</h1>
            </div>
            <div className='' data-src={`${badminton}`}>
                <h1 className='text-white z-10 absolute text-4xl font-semibold'>Our Badminton training programs</h1>
            </div>
        </AwesomeSlider>
    </div>
  )
}

export default Hero