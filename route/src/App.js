import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import './App.css'

const App = () => {
  return (
    <div>
      <nav>
        <ul className='nav1'>
          <li className='list'><Link className='link' to='/'>Home</Link></li>
          <li className='list'><Link className='link' to='/About'>About</Link></li>
          <li className='list'><Link className='link' to='/Product'>Product</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Product' element={<Product></Product>}></Route>
      </Routes>
    </div>
  )
}

export default App
