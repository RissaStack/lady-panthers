import React from 'react';
import  {VarsityPlayers} from '../data/';
import Team from '../components/Team';

const Varsity = () => {
  return (
  <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
    {VarsityPlayers.map((team, i) => (
      <Team team={team} key={i} />
    ))}
    </div>
  );
};

export default Varsity;