import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(()=>{
    fetch('https://sampalproject.onrender.com/')
    .then(res=>res.json())
    .then(data=>setMessage(data.message))
    .catch(err=>setMessage("Service is suspended by the owner"))

  },[])

  return (
    <>
      <h1>{message}</h1>

    </>
  )
}

export default App
