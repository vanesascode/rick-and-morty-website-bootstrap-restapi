import React from "react";
import Pagination from "./Pagination";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container text-uppercase justify-content-center align-items-center">
        <a className="navbar-brand text-uppercase" href="/">{brand}</a>
      </div>

    </nav>


  )
}

export default Navbar