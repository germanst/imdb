import React from 'react';
import SearchBar from './SearchBar';
import Items from './Items';
import Clear from './Clear';

const Header = props => (
	<div>
		<SearchBar searchMovie={props.searchMovie} />
		<Items favorites={props.favorites} />
		<Clear clear={props.clear}/>
	</div>
)

export default Header;
