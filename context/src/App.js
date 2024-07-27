import React, { createContext } from 'react'
import CompA from './component/CompA';

const Data=createContext();

const App = () => {
  return (
    <div>
      <Data.Provider  value={"secret"} >
      <CompA/>
      </Data.Provider>
    </div>
  )
}

export default App
export {Data};