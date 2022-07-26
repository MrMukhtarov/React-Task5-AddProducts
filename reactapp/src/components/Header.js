import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark" className='py-3' >
        <Container>
          <Link className='logo' to='/'>REACT.AZ</Link>
          <Nav className="me-auto">
            <Link className='link1' to='/'>Home</Link>
            <Link className='link1' to='/addproducts'>AddProducts</Link>
            <Link className='link1' to='/products'>Products</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header