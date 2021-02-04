/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import GooglePic from "./photos/developers.png"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar is-spaced is-light" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <a className="navbar-start" href="#" >
                    <img src={GooglePic} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </img>
                </a>
                <Link to="/search" className="navbar-item">

                    <button className="button is-outlined is-warning">Search Books</button>
                </Link>


                <Link to="/saved" className="navbar-item">

                    <button className="button is-outlined is-warning">Saved Books</button>
                </Link>


            </div>
        </nav>

    )

}
export default Navbar
