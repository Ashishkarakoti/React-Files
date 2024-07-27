import React,{useEffect, useState} from 'react';

const App=()=>{
  const [count, setcount]= useState(0);
  const [inp, setinp]= useState("");

  useEffect(()=>{
    console.log("inside use Effect");
  },[]);
  console.log("render");
  return(
    <div>
      <input onChange={()=>setinp()} value={inp}>
      </input>
      <h1> Count : {count}</h1>
        <button onClick={()=>setcount(count+1)}>
          INCREMENT</button>
        <button onClick={()=>setcount(count-1)}>
          DECREMENT</button>
    </div>
  );
}

export default App;