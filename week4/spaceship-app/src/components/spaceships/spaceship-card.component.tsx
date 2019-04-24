import React from 'react';
import { Spaceship } from '../../model/spaceship';

interface IShipCardProps {
  ship: Spaceship;
}

export class SpaceshipCardComponent extends React.PureComponent<IShipCardProps> {
  render() {
    const ship = this.props.ship;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ship.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Speed: {ship.speed}</li>
          <li className="list-group-item">Weight: {ship.weight}</li>
          <li className="list-group-item">Description: {ship.description}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}