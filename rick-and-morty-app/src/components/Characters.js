import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (

        <div key={index} className="col mb-4">
          <div className="card" style={{ minHeight: "485px" }}>
            <img src={item.image} alt="character-image" />
            <div className="card-body" style={{ paddingBottom: 0 }}>
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p><b>Location:</b> {item.location.name}</p>
              <p><b>Species:</b> {item.species}</p>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default Characters;
