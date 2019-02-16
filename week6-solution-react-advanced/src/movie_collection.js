import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MoviePoster from './movie_poster'

class MovieCollection extends Component {

  render() {
    let content = this.props.items.map((item) => {
      return <MoviePoster movie={item} key={item.id}/>
    })

    return (
      <div className="row">
        {content}
      </div>
    )
  }
}

export default MovieCollection;
