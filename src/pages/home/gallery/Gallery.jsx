import React from 'react'
// lightgallery
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import "./gallery.css"

const Gallery = () => {

  const galleryImage=[
    {
      img:"https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg"
    },
    {
      img:"https://images.pexels.com/photos/6203594/pexels-photo-6203594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img:"https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg?w=1380&t=st=1686231711~exp=1686232311~hmac=6c02b29526e494bbd7e4f6106ec4597786d1e0e8f4c368ed2e4299676003f485"
    },
    {
      img:"https://img.freepik.com/free-photo/young-tennis-player-blue-space_155003-13697.jpg?w=1380&t=st=1686231735~exp=1686232335~hmac=10896f4397f673a63009b86543e9e8ad107dac6348e7d954fc9077eab4d274e4"
    },
    {
      img:"https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940874.jpg?w=1380&t=st=1686231803~exp=1686232403~hmac=0fdac9de5afe95ea192379dd1510876bb20aaeb617b20a8fd9b6fcc4a0357508"
    },
    {
      img:"https://cdn.pixabay.com/photo/2013/05/02/21/23/basketball-108622_1280.jpg"
    },
  ]



  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
          <h1 className='text-4xl font-semibold text-black text-center mb-5'>The Gallery Academies</h1>
            <div>
                <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                  {galleryImage.map((gallery, index)=><a href={gallery.img} key={index} className='w-full md:w-1/2 p-2 lg:w-1/3'>
                          <img className='img-responsive w-full h-[320px] rounded-t-lg object-cover' src={gallery.img} alt="player" />
                      </a>)}
                </LightGallery>
            </div>
        </div>
    </div>
  )
}

export default Gallery