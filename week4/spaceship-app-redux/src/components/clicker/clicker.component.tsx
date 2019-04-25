import React from 'react';
import { IncrementerComponent } from './clicker-incrementer/clicker-incrementer.component';
import { IClickerState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { updateClicks } from '../../actions/clicker.actions';


interface IClickerProps {
  clicker: IClickerState,
  updateClicks: (amount: number) => void
}

export class ClickerComponent extends React.Component<IClickerProps, {}> {

  render() {
    return (
      <div>
        <h2>Clicks: {this.props.clicker.clicks}</h2>
        <IncrementerComponent label="+1" increment={() => this.props.updateClicks(1)} />
        <br />
        {
          this.props.clicker.clicks >= 47 &&
          <IncrementerComponent label="+2" increment={() => this.props.updateClicks(2)} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    clicker: state.clicker
  }
}

const mapDispatchToProps = {
  updateClicks: updateClicks
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);