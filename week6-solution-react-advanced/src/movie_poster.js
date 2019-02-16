import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MoviePoster extends Component {

  render() {
    return (
      <div className="col-sm-3 text-center">
          <img src={"http://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path}
              className="img-fluid"/>
          <p>{this.props.movie.release_date.substr(0,4)}</p>
      </div>
    )
  }
}

export default MoviePoster;
