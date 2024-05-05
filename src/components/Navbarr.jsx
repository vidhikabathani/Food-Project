import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navbarr() {

    return (
        <div className='header'>
            <Navbar>
                <Container className='p-2'>
                    <NavLink to="/" className='text-decoration-none fs-5 fw-bold f-primary'> <img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp" alt="" /> </NavLink>
                    <Nav className="m-auto gap-5">
                        <NavLink className='f-gray text-decoration-none' to='/'>HOME</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/about'>ABOUT</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/reservation'>RESERVATION</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/menu'>MENU</NavLink>
                        {/* <NavLink className='f-gray text-decoration-none' to='/addproducts'>ADD PRODUCTS</NavLink> */}
                        <NavLink className='f-gray text-decoration-none' to='/blog'>BLOG</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/contact'>CONTACT</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/cart'>CART</NavLink>
                    </Nav>
                    <Nav className='gap-4'>
                        <NavLink className='f-gray text-decoration-none' to='/signup'>SIGNUP</NavLink>
                        <NavLink className='f-gray text-decoration-none' to='/login'>LOGIN</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr