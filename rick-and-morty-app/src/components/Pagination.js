import React from "react";



const Pagination = ({ next, onNext }) => {


  const handleNext = () => {
    onNext();
  }


  return (
    <nav>
      <ul className="pagination justify-content-center">
        {
          next ? (<li className="page-item">
            <button className="mt-0 page-link link-dark" onClick={handleNext}>More Characters</button>
          </li>)
            :
            null
        }
      </ul>
    </nav>
  )
}

export default Pagination
