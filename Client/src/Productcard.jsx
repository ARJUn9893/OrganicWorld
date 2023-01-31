import React from 'react'
import { Probutton } from './Probutton';

function Productcard(props) {
  const Id = "pr0" + String(props.id);
  return (
    <>
      <div className="col">
        <div className="card shadow-sm border-warning mb-4">
          <img src={props.image} alt="" />
          <div className="card-body text-primary mb-2">
            <p className="card-text"><h5>{props.name}</h5></p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted"><h5>Price:<span className="text-success" id={Id}>{props.price}₹</span></h5></small>
              <Probutton price={props.price} prid={props.id} prname={props.name} />
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Productcard;

