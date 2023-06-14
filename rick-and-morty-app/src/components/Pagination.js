import React from "react";



const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }


  return (
    <nav>
      <ul className="pagination justify-content-end">
        {
          prev ?
            (<li className="page-item">
              <button className="mt-0 page-link link-dark" onClick={handlePrevious}>Previous</button>
            </li>)
            :
            null
        }
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
