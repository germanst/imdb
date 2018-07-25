import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movie: ''
		}
	}

	handleChange = (event) => {
		this.setState({ movie: event.target.value });
	}

	render() {
		return (
			<div>
				<input 
					name="movie" 
					value={this.state.movie}
					type="text" 
					placeholder="Type ..." 
					onChange={this.handleChange}
				/>
				<button type="submit" onClick={() => this.props.searchMovie(this.state.movie)}>Search</button>
			</div>
		);
	}
	
}

export default SearchBar;
