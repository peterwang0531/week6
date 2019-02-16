app = { movies: [],
        now_playing: [],
        top_rated: []
}

$(function() {
  $("#top_rated").on('click', handleTopRatedClick)
  $("#now_playing").on('click', handleNowPlayingClick)
})

function handleTopRatedClick(e) {
  e.preventDefault();
  if (app.top_rated.length > 0) {
    console.log("Using cached data")
    app.movies = app.top_rated
    $("#movie_collection").html(showMovieCollection())
  }
  else {
    $.getJSON(urlForResource('top_rated'), receiveTopRatedData)
  }
}

function handleNowPlayingClick(e) {
  e.preventDefault();
  if (app.now_playing.length > 0) {
    console.log("Using cached data")
    app.movies = app.now_playing
    $("#movie_collection").html(showMovieCollection())
  }
  else {
    $.getJSON(urlForResource('now_playing'), receiveNowPlayingData)
  }
}

function receiveTopRatedData(movie_data)  {
  console.log("Got movie data:", movie_data)
  app.top_rated = movie_data.results
  app.movies = movie_data.results
  $("#movie_collection").html(showMovieCollection())
}

function receiveNowPlayingData(movie_data)  {
  console.log("Got movie data:", movie_data)
  app.now_playing = movie_data.results
  app.movies = movie_data.results
  $("#movie_collection").html(showMovieCollection())
}

function showMovieCollection() {
  const postersHtml = this.app.movies.map(moviePosterHtml).join("")

  return `
    <div class="row">
      ${postersHtml}
    </div>
  </div>
  `
}

function moviePosterHtml(movie) {
  return `
    <div class="col-sm-3 text-center">
      <img src="http://image.tmdb.org/t/p/w185/${movie.poster_path}"
           class="img-fluid">
      <p>${movie.release_date.substr(0,4)}</p>
    </div>
  `
}
function urlForResource(resource) {
    const api_key_param = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
    const language_param = "language=en-US"
    const region_param = "region=US"
    const base_url = `https://api.themoviedb.org/3/movie/${resource}`
    const full_url = `${base_url}?${api_key_param}&${language_param}&${region_param}`
    return full_url
}
