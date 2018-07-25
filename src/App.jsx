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
			favorites: [],
		}
	}

	searchMovie = movie => {
		this.api.get(`&s=${movie}`)
		.then(response => {
			const movies = response.Search;
			this.setState({ movies })
		});
	}

	addFavorite = movie => {
		if (!this.state.favorites.find(m => m.imdbID === movie.imdbID)) {
			this.setState({
				favorites: [...this.state.favorites, movie],
			});
		}
	}

	clear = () => {
		this.setState({
			favorites: [],
		});
	}

	render() {
		return (
			<div className="App">
				<Header searchMovie={this.searchMovie} favorites={this.state.favorites} clear={this.clear} />
				<List movies={this.state.movies} addFavorite={this.addFavorite} favorites={this.state.favorites}/>
			</div>
		);
	}
}

export default App;
