import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './app.css'

class App extends Component {

  render() {
    return (
      <div className="container mt-5">

        <div className="row mb-5">
          <div className="col">
            <a className="btn btn-primary" href="#">Get Top-Rated Movies</a>
          </div>
        </div>

        <div className="row">
          // Movie posters will go here
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
