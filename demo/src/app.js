import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './app.css'


class App extends Component {

  state = { movies: [] }

  handleClick = (event) => {
    event.preventDefault();
    const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
    const language_param = "language=en-US"
    const region_param = "region=US"
    const top_rated_url = "https://api.themoviedb.org/3/movie/top_rated"
    const full_url = `${top_rated_url}?${api_key_param}&${language_param}&${region_param}`
    $.getJSON(full_url, this.receiveTopRatedData)
  }

  receiveTopRatedData = (data) => {
    console.log(data);
    // this.state.movies = data.results
    this.setState({movies: data.results})
  }

  render() {

    let content = this.state.movies.map((movie) => {
      return (
        <div className="col-sm-3 text-center" key={movie.id}>
            <img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}
                className="img-fluid"/>
            <p>{movie.release_date.substr(0,4)}</p>
        </div>
        )
      })

    return (
      <div className="container mt-5">

        <div className="row mb-5">
          <div className="col">
            <a onClick={this.handleClick} className="btn btn-primary" href="#">Get Top-Rated Movies</a>
          </div>
        </div>

        <div className="row">
          {content}
        </div>

      </div>
    )
  }
}

export default App;

// api_url = (resource) => {
//   const resource_url = `https://api.themoviedb.org/3/movie/${resource}`
//   const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
//   const language_param = "language=en-US"
//   const region_param = "region=US"
//   const full_url = `${resource_url}?${api_key_param}&${language_param}&${region_param}`
//   return full_url
// }

// Image base url: http://image.tmdb.org/t/p/w185/*
