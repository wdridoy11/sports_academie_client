import React from 'react'

import Gallery from '../gallery/Gallery'
import Hero from '../hero/Hero'
import PopularInstructor from '../popularInstructor/PopularInstructor'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <PopularInstructor></PopularInstructor>
      <Gallery></Gallery>
    </div>
  )
}

export default Home