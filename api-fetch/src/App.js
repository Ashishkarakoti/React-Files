import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data, setdata]=useState("");
  const [error, seterror]=useState(null);
  const [isLoad, setLoad]=useState(true);

  useEffect(()=>{
    const fetchdata=async ()=>{
      try {
        const response=await fetch("https://api.tvmaze.com/singlesearch/shows?q=boy");
        const respdata=await response.json();
        setdata(respdata);
      }
      catch (error) {
        seterror(error);
      }
      finally{
        setLoad(false);
      }
    }
    fetchdata();

  },[]);

  if(isLoad){
    return <h1>Loading ....</h1>
  }

  if(error){
    return <h1>Error : {error.message}</h1>
  }
  console.log(data)

  return (
    <div className='box'>
      <h1 className='title'>{data.name}</h1>
      <h1 className='language'>{data.language}</h1>   
      <img className='cover' src={data.image.medium} alt='nothing'></img>
    </div>
  )
}

export default App
