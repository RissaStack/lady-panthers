import React from "react";

const FreshPlayers = ({ freshPlayers }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="card h-100">
        <img
          src={require(`../../assets/freshman/${freshPlayers.name}.jpg`)}
          className="card-img-top"
          alt={freshPlayers.name}
        />
        <div className="card-body">
          <p className="card-text">
            {freshPlayers.description}
          </p>
          <div className="d-flex justify-content-between">
            <p className="card-number">
              {freshPlayers.number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshPlayers;

