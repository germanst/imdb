import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';
import Api from './Api';

class App extends Component {

	constructor(props) {
		super(props);
		this.api = new Api();
		this.state = {
			movies: [],
		}
	}

	searchMovie = movie => {
		this.api.get(`&s=${movie}`)
		.then(response => {
			const movies = response.Search;
			this.setState({ movies })
		});
	}

	render() {
		return (
			<div className="App">
				<Header searchMovie={this.searchMovie} />
				<List movies={this.state.movies} />
			</div>
		);
	}
}

export default App;
