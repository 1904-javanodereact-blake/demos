import React from 'react';
import { IChuckNorrisState, IClickerState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { buyJoke } from '../../actions/chuck-norris.actions';

interface IChuckNorrisProps {
  norris: IChuckNorrisState,
  clicker: IClickerState,
  buyJoke: () => void
}

export class ChuckNorrisComponent extends React.Component<IChuckNorrisProps> {

  render() {
    const {norris, clicker} = this.props;
    return (
      <div>
        <h1> {norris.joke} </h1>
        <button onClick={this.props.buyJoke} 
          className="btn btn-success"
          disabled={norris.proccessingNewJoke || clicker.clicks < 10}>New Joke</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    norris: state.chuckNorris,
    clicker: state.clicker
  }
}

const mapDispatchToProps = {
  buyJoke: buyJoke
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent);
