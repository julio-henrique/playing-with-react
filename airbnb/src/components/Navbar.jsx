import React from "react"
import logo from "../../images/airbnb-logo.png"

export function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}