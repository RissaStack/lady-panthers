import React from 'react';
import  {JvPlayers} from '../data/';
import Team from '../components/Team';

const Jv = () => {
  return (
  <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
    {JvPlayers.map((team, i) => (
      <Team team={team} key={i} />
    ))}
    </div>
  );
};

export default Jv;