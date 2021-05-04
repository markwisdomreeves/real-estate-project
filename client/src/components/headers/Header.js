import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import MainPageTopHeader from "./MainPageTopHeader";
import "./header.css";
import axios from 'axios'



function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const logoutUser = async () =>{
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
              <Link to="/create_product" className="my-custom-links nav-link ml-3">Create</Link>
              <Link to="/category" className="my-custom-links nav-link ml-3">Categories</Link>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
              <Link to="/history" className="my-custom-links nav-link ml-3">History</Link>
              <Link to="/" onClick={logoutUser} className="my-custom-links nav-link ml-3" id="logout-link">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </Link>
            </>
        )
    }


  return (
      <>
        <MainPageTopHeader />
        <div className="navbar-wrapper">
          <Navbar className="navbar-dark max-navbar-width" expand="lg">

            <Link to="/" className="ml-3" id="brand-logo">
              {isAdmin ? <RiAdminFill id="Page-Logo" /> : <FaHome id="Page-Logo" />}
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/" className="my-custom-links nav-link ml-3">
                  Home
                </Link>
                <Link to="/products" className="my-custom-links nav-link ml-3">
                  Products
                </Link>
                <Link to="/blogs" className="my-custom-links nav-link ml-3">
                  Blogs
                </Link>
                <Link to="/about-us" className="my-custom-links nav-link ml-3">
                  About
                </Link>
                <Link to="/contact" className="my-custom-links nav-link ml-3">
                  Contact
                </Link>

                {isAdmin && adminRouter()}

                {
                  isLogged ?
                  loggedRouter()
                  :
                  <Link to="/login" className="my-custom-links nav-link ml-3" id="login-style">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    Sign In
                  </Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
}


export default Header
