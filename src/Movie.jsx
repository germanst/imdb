import React from 'react';

const Movie = (props) => (
  <div className="movie-container">
    <img className="movie-img" alt="lala" src={props.movie.Poster} />
    <div>{props.movie.Title}</div>
    <button disabled={props.favorites.find(m => m.imdbID === props.movie.imdbID)} className="add-button" onClick={() => props.addFavorite(props.movie)}>ADD</button>
  </div>
);

export default Movie;