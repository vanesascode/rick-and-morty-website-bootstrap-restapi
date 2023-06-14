import React from "react";
import Banner from '../assets/rick-e-morty.jpg'

const Navbar = ({ brand }) => {
  return (

    <div className="container justify-content-center align-items-center mb-0" >
      <img className="mt-4" src={Banner} alt="banner" style={{ height: "250px", width: "100%", objectFit: "cover" }} />
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <img className="mt-2" src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" style={{ height: "80px" }} alt="logo" />
        <h3 className="text-uppercase fw-bold mt-1 text-wrap d-block mb-0" href="/">{brand}</h3>
      </div>
    </div >




  )
}

export default Navbar