import React from 'react'
import { increment } from './Action'
import { useSelector,useDispatch } from 'react-redux'

const App = () => {

  const count=useSelector(state=> state.count)

  const dispatch = useDispatch();

  function Handler(){
    dispatch(increment())
  }

  return (
    <div>
      <h1> count : {count}</h1>
      <button onClick={Handler}></button>
    </div>
  )
}

export default App