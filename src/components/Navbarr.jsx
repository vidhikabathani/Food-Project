import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navbarr() {

    return (
        <div className='header'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='p-2'>
                    <NavLink to="/" className='text-light text-decoration-none fs-5 fw-bold f-primary'> Yum </NavLink>
                    <Nav className="m-auto gap-5">
                        <NavLink className='text-light text-decoration-none' to='/'>HOME</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/about'>ABOUT</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/reservation'>RESERVATION</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/menu'>MENU</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/blog'>BLOG</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/contact'>CONTACT</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/cart'>CART</NavLink>
                    </Nav>
                    <Nav className='gap-4'>
                        <NavLink className='text-light text-decoration-none' to='/signup'>SIGNUP</NavLink>
                        <NavLink className='text-light text-decoration-none' to='/login'>LOGIN</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr