import React from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaUserAlt, FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { getLogout } from '../../reducers/auth/actions';
import { selectAuth } from '../../reducers/auth/authReducer';
import './navbarMain.css'
import { SuccessLogoutAlert } from '../alert/SweetAlert';
import LogoutGoogle from '../auth/LogoutGoogle';

export const NavbarMain = () => {

  const isAuthenticated = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    SuccessLogoutAlert(dispatch,navigate)
  };

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Navbar variant="dark" className="navbar-style" expand="lg" >
      <Container >
        <NavDropdown
          className="d-inline d-lg-none  "
          title={<FaUserAlt className="icon-fa-user" />}
          id="basic-nav-dropdown"
        >
          {isAuthenticated ?
            <NavDropdown.Item className="navbar-links-dropdown"  as={NavLink} to="/" onClick={(e) => handleLogout(e)} activeclassname="link-active">
              Logut <BiLogOutCircle />
            </NavDropdown.Item>
            :
            <>
              <NavDropdown.Item className="navbar-links-dropdown" as={NavLink} to="/login" activeclassname="link-active">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navbar-links-dropdown" as={NavLink} to="/register" activeclassname="link-active">
                Register
              </NavDropdown.Item>
            </>
          }
        </NavDropdown>
        <Nav className="d-none d-lg-flex justify-content-center align-items-center">
          {isAuthenticated ?
            <Nav.Link as={NavLink} to="/" onClick={(e) => handleLogout(e)} activeclassname="link-active">Logut <BiLogOutCircle /></Nav.Link>
            : <>
              <Nav.Link as={NavLink} to="/login" activeclassname="link-active">Login</Nav.Link>
              /
              <Nav.Link as={NavLink} to="/register" activeclassname="link-active">Register</Nav.Link>
            </>
          }
        </Nav>
        <Nav className="ms-auto border-0">
          <div>
            {splitLocation[1] === "movieDetails"
              ?
              <div className="d-flex navbar-links">
                <li className="mx-3" >
                  <Nav.Link as={NavLink} to="/searchPage" className="" activeclassname="link-active"><FaArrowLeft /></Nav.Link>
                </li>
              </div>
              :
              <div className="d-flex navbar-links">
                <li className="mx-3" >
                  <Nav.Link as={NavLink} to="/" activeclassname="link-active"><FaHome /></Nav.Link>
                </li>
                <li className="mx-3">
                  <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active"><FaSearch /></Nav.Link>
                </li>
              </div>
            }
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}
