import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import SignUpp from '../pages/SignUpp'
import Login from '../pages/Login'
import Error from '../pages/Error'
import SinglePage from '../pages/SinglePage'
import About from '../pages/About'
import Reservation from '../pages/Reservation'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Blog from '../pages/Blog'
import AddProduct from '../pages/Addproduct'
import BookTable from '../pages/BookTable'
function AllRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/addproducts' element={<AddProduct/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/reservation' element={<Reservation/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/booktable' element={<BookTable/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/signup' element={<SignUpp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/product/:id' element={<SinglePage/>}></Route>
        </Routes>
    )
}

export default AllRouter