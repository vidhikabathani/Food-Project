import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../redux/Action'

function Navbarr() {

    let data = useSelector((store) => store.UserReducer)
    let dispatch=useDispatch()

    return (
        <div className='header'>
            <div className="container">
                <nav className='nav'>
                    <NavLink to='/' className="navbar active">Home</NavLink>
                    <NavLink to='/addproduct' className="navbar">Add Product</NavLink>
                    <NavLink to='/product' className="navbar">Products</NavLink>
                    <NavLink to='/cart' className="navbar">Cart</NavLink>
                    <NavLink to='/signup' className="navbar">SignUp</NavLink>
                    {/* {data.isLogin ? (<span className='navbar'>{data.userdata.username}</span>) : <NavLink to='/signup' className="navbar">SignUp</NavLink>} */}
                    {data.isLogin ? (<span className='navbar' onClick={()=>dispatch(Logout())}>Logout</span>) : <NavLink to='/login' className="navbar">Login</NavLink>}
                    <span className='nav-in'></span>
                </nav>
            </div>
        </div>
    )
}

export default Navbarr