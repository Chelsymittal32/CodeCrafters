import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseComp from './UI/CourseComp'
import SubroutesComp from './UI/SubroutesComp'
import Home from './UI/Home'
import Tech from './UI/Tech'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import Mylearning from './UI/Mylearning'
import Cart from './UI/Cart'
import SearchComp from './UI/SearchComp'

const Navstore = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course/:category' element={<CourseComp/>} />
        <Route path='/course/:category/:subcategory' element={<SubroutesComp/>} />
        <Route path='/techudemy' element={<Tech/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/mylearning' element={<Mylearning/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/searchcomp' element={<SearchComp/>} />
      </Routes>
    </div>
  )
}

export default Navstore