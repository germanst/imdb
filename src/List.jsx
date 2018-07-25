import React from 'react';

const List = props => (
	<ul>
		{
			props.movies.map(movie => <li>{movie.Title}</li>)
		}
	</ul>
)

export default List;
