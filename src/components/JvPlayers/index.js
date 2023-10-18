import React from "react";

const JvPlayers = ({JvPlayers}) => {
    return (
        <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/freshman/${JvPlayers.name}.jpg`)} 
          className="card-img-top" 
          alt={JvPlayers.name}
        />
      <div className="card-body">
        <p className="card-text">
          {JvPlayers.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <p className="card-number">
                {JvPlayers.number}
            </p>
          </div>
      </div>
    </div>
    </div>
    );
};

export default JvPlayers;