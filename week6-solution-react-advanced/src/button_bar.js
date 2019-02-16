import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ButtonBar extends Component {

  render() {
    return (
    <div className="row mb-5">
      <div className="col">
        <a className="btn btn-primary" href="#" onClick={() => this.props.onClick("top_rated")}>Get Top-Rated Movies</a>
        <a className="btn btn-secondary ml-3" href="#" onClick={() => this.props.onClick("now_playing")}>Now Playing</a>
        <a className="btn btn-danger ml-3" href="#" onClick={() => this.props.onClick("upcoming")}>Coming Soon</a>
      </div>
    </div>
    )
  }
}

export default ButtonBar;
