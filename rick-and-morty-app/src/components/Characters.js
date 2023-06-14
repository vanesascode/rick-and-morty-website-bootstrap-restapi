import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row mt-5">
      {characters.map((item, index) => (

        <div key={index} className="col mb-5">
          <div className="card shadow-sm" style={{ minHeight: "510px" }}>
            <div className="text-center">
              <h4 className="card-title my-3 text-success">{item.name}</h4>
            </div>

            <img src={item.image} alt="character" />
            <div className="card-body d-flex justify-content-between align-items-center" style={{ paddingBottom: 0 }}>
              <div>
                <p className="m-0"><b>Location:</b> {item.location.name}</p>
                <p><b>Species:</b> {item.species}</p>
              </div>
              <a href={item.image} className="btn btn-md btn-success align-bottom" style={{ maxHeight: "40px" }}>Pic</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
