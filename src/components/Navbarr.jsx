import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

function Navbarr() {

    let data = useSelector((store) => store.UserReducer)

    const handlelogout = () => {
        // data.isLogin(false);
    }

    return (
        <div className='header'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='f-11'>
                    <NavLink to="/" className='text-decoration-none fs-5 fw-bold f-primary'> <img src="https://preview.colorlib.com/theme/ogani/img/logo.png.webp" alt="" /> </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-5">
                            <NavLink className='f-gray text-decoration-none' to='/'>HOME</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/about'>ABOUT</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/reservation'>SHOP</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/addproducts'>ADD PRODUCTS</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/menu'>MENU</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/blog'>BLOG</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/contact'>CONTACT</NavLink>
                            <NavLink className='f-gray text-decoration-none' to='/cart'>CART</NavLink>
                            {/* <img src="https://img.icons8.com/?size=100&id=Epw9VnbWsXCB&format=png&color=000000" alt="" /> */}
                            {/* <NavDropdown title="USER" id="basic-nav-dropdown">
                                <NavDropdown.Item>{data.isLogin ? (<span className='navbar'>{data.userdata.username}</span>) :
                                (<NavLink className='f-gray text-decoration-none' to='/signup'>SIGNUP</NavLink>)}</NavDropdown.Item>
                                <NavDropdown.Item>
                                {data.isLogin ? (<span className='navbar' onClick={handlelogout}>LOGOUT</span>) :
                                (<NavLink className='f-gray text-decoration-none' to='/login'>LOGIN</NavLink>)}
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr