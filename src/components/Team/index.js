import React from 'react';
import './style.css';

const Team = ({team}) => {
  return (
    <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/freshman/${team.name}.jpg`)} 
          className="card-img-top" 
          alt={team.name}
        />
      <div className="card-body">
        <p className="card-text">
          {team.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <p className="playerName">
            {team.name}
            </p>
          </div>
          <div className="d-flex justify-content-space-between">
            <p className="playerNumber">
              {team.number}
            </p>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Team;