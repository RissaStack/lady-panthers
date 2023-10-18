import React from "react";

const VarsityPlayers = ({VarsityPlayers}) => {
    return (
        <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/freshman/${VarsityPlayers.name}.jpg`)} 
          className="card-img-top" 
          alt={VarsityPlayers.name}
        />
      <div className="card-body">
        <p className="card-text">
          {VarsityPlayers.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <p className="card-number">
                {VarsityPlayers.number}
            </p>
          </div>
      </div>
    </div>
    </div>
    );
};

export default VarsityPlayers;