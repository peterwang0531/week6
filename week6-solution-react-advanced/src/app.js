import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './app.css'
import ButtonBar from './button_bar'
import MovieCollection from './movie_collection'

class App extends Component {

  state = { movies: [] }
  cache = { }
  current_collection_type = null

  receiveMovieData = (movie_data) => {
    console.log("Got movie data:", movie_data)
    if (this.current_collection_type) {
      this.cache[this.current_collection_type] = movie_data.results
    }
    this.setState({movies: movie_data.results})
  }

  handleButtonBarClick = (collection_type) => {
    if (collection_type in this.cache) {
      console.log("Using cache :-)")
      this.setState({ movies: this.cache[collection_type]})
    } else {
      this.current_collection_type = collection_type
      const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
      const language_param = "language=en-US"
      const region_param = "region=US"
      const base_url = `https://api.themoviedb.org/3/movie/${this.current_collection_type}`
      const full_url = `${base_url}?${api_key_param}&${language_param}&${region_param}`
      $.getJSON(full_url, this.receiveMovieData)
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <ButtonBar onClick={this.handleButtonBarClick} />
        <MovieCollection items={this.state.movies} />
      </div>
    )
  }
}

export default App;
