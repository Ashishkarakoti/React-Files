import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [count, setcount] = useState(0);
  const [txt, result] = useState("");

  useEffect(()=>{
  },[count])

  useEffect(()=>{
    console.log('inside useEffect');
  }, [count])

  console.log('Render');
  return (
    <div>
      <h1 className='head'>{count}</h1>
      <input className='inp' type='text' onChange={((e)=>{result(e.target.value)})}></input>
      <button className='but' onClick={()=> setcount(count+1)}>
        increment
      </button>
    </div>
  )
}

export default App