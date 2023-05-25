import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container,Nav,Navbar} from 'react-bootstrap'
import '../Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_links">
            <LinkContainer to='/cart'>
            <Nav.Link><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link><i class="fa-solid fa-user"></i>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header