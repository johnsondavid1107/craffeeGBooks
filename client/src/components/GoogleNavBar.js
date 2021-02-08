/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import GooglePic from "./photos/developers.png"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function GoogleNavBar(props) {
    const styles = {
        stretch: {
            width: "100%"
        },
        noPadding: {
            padding: 0
        }
    }

    console.log(props)
    return (
        < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand><img src={GooglePic} alt="Google Books" width="112" height="28">
            </img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>

                    < Link to="/saved" className="nav-link" >
                        <button className="button is-outlined is-warning">Saved Books</button>
                    </Link >



                    <Link to="/search" className="nav-link">
                        <button className="button is-outlined is-warning">Search Books</button>
                        <span className="sr-only">(current)</span>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )

}
export default GoogleNavBar






