import React from 'react'
import Cover from '../../components/shared/cover/Cover'
const coverImage = `https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?w=1380&t=st=1686107959~exp=1686108559~hmac=416fd2d9a871e381f690c10bd21f2ce1ae9be581a09438a4a693a396d7e654bc`
const Classes = () => {
  return (
    <div>
      <Cover coverImg={coverImage} title="Classes"></Cover>
      <div>
        <img src="" alt="" />
        <h3>Food Ball</h3>
        <p>Instructor name</p>
        <p>Available seats</p>
        <p>Price</p>
        <button>Select</button>
      </div>
    </div>
  )
}

export default Classes