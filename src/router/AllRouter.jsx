import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import SignUpp from '../pages/SignUpp'
import Login from '../pages/Login'
import Error from '../pages/Error'
import SinglePage from '../pages/SinglePage'
function AllRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/signup' element={<SignUpp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/product/:id' element={<SinglePage/>}></Route>
        </Routes>
    )
}

export default AllRouter