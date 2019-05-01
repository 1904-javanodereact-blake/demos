import React from 'react';
import { Spaceship } from '../../model/spaceship';
import { SpaceshipCardComponent } from './spaceship-card.component';
import { environment } from '../../environment';

interface IState {
  ships: Spaceship[];
}

export class SpaceshipsComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      ships: []
    };
  }

  // in here we should initialize http calls
  componentDidMount = async () => {
    const resp = await fetch(environment.context + '/spaceships', {
      credentials: 'include'
    });
    const body = await resp.json();
    this.setState({
      ships: body
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.ships.map(ship => (
            <SpaceshipCardComponent key={'ship-' +ship.shipId} ship={ship}/>
          ))}
        </div>
      </div>
    );
  }
}