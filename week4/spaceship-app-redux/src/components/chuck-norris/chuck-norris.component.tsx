import React from 'react';

interface IChuckNorrisState {
  joke: string
}

export class ChuckNorrisComponent extends React.Component<any, IChuckNorrisState> {

  constructor(props) {
    super(props);
    this.state = {
      joke: 'Chuck Norris Caught all 151 Pokemon with no Pokepalls'
    }
  }

  newJoke = async () => {
    const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    const body = await resp.json();
    this.setState({
      joke: body.value.joke
    })
  }

  render() {
    return (
      <div>
        <h1> {this.state.joke} </h1>
        <button onClick={this.newJoke} className="btn btn-success">New Joke</button>
      </div>
    );
  }
}