import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './app.css'

class App extends Component {

  state = { movies: [], now_playing: [], top_rated: [] }

  handleTopRatedClick = (e) => {
    e.preventDefault();
    if (this.state.top_rated.length > 0) {
      this.setState({ movies: this.state.top_rated })
    }
    else {
      const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
      const language_param = "language=en-US"
      const region_param = "region=US"
      const top_rated_url = "https://api.themoviedb.org/3/movie/top_rated"
      const full_url = `${top_rated_url}?${api_key_param}&${language_param}&${region_param}`
      $.getJSON(full_url, this.receiveTopRatedData)
    }
  }

  handleNowPlayingClick = (e) => {
    e.preventDefault();
    if (this.state.now_playing.length > 0) {
      this.setState({ movies: this.state.now_playing})
    }
    else {
      const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
      const language_param = "language=en-US"
      const region_param = "region=US"
      const top_rated_url = "https://api.themoviedb.org/3/movie/now_playing"
      const full_url = `${top_rated_url}?${api_key_param}&${language_param}&${region_param}`
      $.getJSON(full_url, this.receiveNowPlayingData)
    }
  }

  receiveNowPlayingData = (movie_data) => {
    console.log("Got movie data:", movie_data)
    this.setState({movies: movie_data.results, now_playing: movie_data.results})
  }

  receiveTopRatedData = (movie_data) => {
    console.log("Got movie data:", movie_data)
    this.setState({movies: movie_data.results, top_rated: movie_data.results})
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
            <a className="btn btn-primary" href="#" onClick={this.handleTopRatedClick}>Get Top-Rated Movies</a>
            <a className="btn btn-primary ml-3" href="#" onClick={this.handleNowPlayingClick}>Now Playing</a>
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
