import React from 'react';

export interface IIncrementerProps {
  label: string;
  increment: () => void
}

export class IncrementerComponent extends React.PureComponent<IIncrementerProps> {

  constructor(props: any) {
    super(props);
    this.state = {
      clicks: 0
    };
  }


  render() {
    return (
      <button onClick={this.props.increment} className="btn btn-success">
        {this.props.label}
      </button>);
  }
}