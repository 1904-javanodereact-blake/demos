import React from 'react';
import { IncrementerComponent } from './clicker-incrementer/clicker-incrementer.component';

interface IState {
  clicks: number;
}

export class ClickerComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  click = (amount: number) => {
    this.setState({
      clicks: this.state.clicks + amount
    });
  }

  render() {
    return (
      <div>
        <h2>Clicks: {this.state.clicks}</h2>
        <IncrementerComponent label="+1" increment={() => this.click(1)} />
        <br />
        {
          this.state.clicks >= 47 &&
          <IncrementerComponent label="+2" increment={() => this.click(2)} />
        }
      </div>
    );
  }
}