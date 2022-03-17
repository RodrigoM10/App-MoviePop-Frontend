import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';
import './navbarMain.css'

export const NavbarMain = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Navbar variant="dark" className="navbar-style" expand="lg" >
      <Container >
          <Nav className="ms-auto border-0">        
            <div>
              {splitLocation[1] === "movieDetails" 
                  ?  
                   <div  className="d-flex navbar-links">
                      <li className="mx-3" >
                          <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active"><FaArrowLeft/></Nav.Link>
                      </li>  
                   </div>
                 :
                  <div  className="d-flex navbar-links">
                      <li className="mx-3" >
                        <Nav.Link as={NavLink} to="/" activeclassname="link-active"><FaHome/></Nav.Link>
                      </li>
                      <li className="mx-3">
                        <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active"><FaSearch/></Nav.Link>
                      </li>
                  </div>
              }
            </div>
          </Nav>
      </Container>
    </Navbar>
  )
}
