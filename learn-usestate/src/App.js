const App=()=>{

  let count = 0;

  function handle(){
    count++;
    console.log(count)
  }

  return(
    <div>
      <h1> COUNT : {count}</h1>
      <button onClick={handle}>INCREMENT</button>
    </div>
  );
}

export default App;