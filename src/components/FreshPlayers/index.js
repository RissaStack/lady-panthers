import React from "react";

const FreshPlayers = ({freshPlayers}) => {
    return (
        <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/freshman/${freshPlayers.name}.jpg`)} 
          className="card-img-top" 
          alt={freshPlayers.name}
        />
      <div className="card-body">
        <p className="card-text">
          {freshPlayers.description}
        </p>
          <div  className="d-flex justify-content-space-between">
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