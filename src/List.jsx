import React from 'react';
import Movie from './Movie';

const List = props => (
	props.movies.map(movie => <Movie addFavorite={props.addFavorite} movie={movie} favorites={props.favorites} />)
);

export default List;
