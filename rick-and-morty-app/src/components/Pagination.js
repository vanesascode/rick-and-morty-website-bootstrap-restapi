import React from "react";



const Pagination = ({ onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }


  return (
    <nav>
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button className="mt-0 page-link link-dark" onClick={handlePrevious}>Previous</button>
        </li>
        <li className="page-item">
          <button className="mt-0 page-link link-dark" onClick={handleNext}>More Characters</button>
        </li>
      </ul>

    </nav>
  )
}

export default Pagination
