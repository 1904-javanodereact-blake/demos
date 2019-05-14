import React from 'react';
import { environment } from '../../environment';

export class HomeComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const resp = await fetch(environment.context + '/movies', {
      credentials: 'include'
    });

    if (resp.status === 200) {
      const movies = await resp.json();
      this.setState({ movies })
    } else {
      // notify user of whatever
    }
  }

  render() {
    return this.state.movies.map(movie => (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rating: {movie.rating.rating}</li>
          <li className="list-group-item">Genres:
            {
              movie.genres.map(genre => <span style={{marginRight: "0.1em"}}>{genre.name},</span>)
            }
          </li>
          <li className="list-group-item">Description: {movie.description}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    ))
  }
}