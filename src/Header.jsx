import React from 'react';
import SearchBar from './SearchBar';
import Items from './Items';
import Clear from './Clear';

const Header = props => (
	<React.Fragment>
		<SearchBar searchMovie={props.searchMovie} />
		<Items />
		<Clear />
	</React.Fragment>
)

export default Header;
