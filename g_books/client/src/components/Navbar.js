/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import GooglePic from "./developers.png"

function Navbar() {
    return (
        <nav className="navbar is-spaced is-light" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <a className="navbar-start" href="https://bulma.io" >
                    <img src={GooglePic} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </img>
                </a>

                <a className="navbar-item">
                    <button className="button is-outlined is-warning">Search</button>
                </a>
                <a className="navbar-item">
                    <button className="button is-outlined is-warning">Home</button>
                </a>


            </div>
        </nav>

    )

}
export default Navbar

