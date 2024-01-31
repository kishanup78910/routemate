
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit=()=>{
    console.log("--------")
    navigate("/")
  }

  return (
    <>
    <div className='component'>Contact</div>
    <button onClick={handleSubmit}>Back to Home</button>
    </>
  )
}

export default Contact
