import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaHome, FaSearch } from 'react-icons/fa';
import './navbarMain.css'

export const NavbarMain = () => {

  return (
    <Navbar variant="dark" className="navbar-style" expand="lg" >
      <Container >
          <Nav className="ms-auto border-0">
            <div className="d-flex navbar-links">
              <li className="mx-3" >
                <Nav.Link as={NavLink} to="/" activeclassname="link-active"><FaHome/></Nav.Link>
              </li>
              <li className="mx-3">
                <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active"><FaSearch/></Nav.Link>
              </li>
            </div>
          </Nav>
      </Container>
    </Navbar>
  )
}
