import React, { useEffect, useState } from 'react'

const MySelecteClass = () => {

  const [classes, setClasses] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/classes`)
    .then((res)=>res.json())
    .then((data)=>{
      setClasses(data)
    })
  },[])
console.log(classes)


  return (
    <div>MySelecteClass</div>
  )
}

export default MySelecteClass