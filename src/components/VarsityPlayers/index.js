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
        <p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
      {/* <div className="card-body">
        <p className="card-text">
          {VarsityPlayers.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <p className="card-number">
                {VarsityPlayers.number}
            </p>
          </div>
      </div> */}
    </div>
    </div>
    );
};

export default VarsityPlayers;