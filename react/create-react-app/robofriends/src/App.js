import React, { Component } from 'react';
import './App.css';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				res.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
	}
	onSearchInput = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1 className="tc">Loading....</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchInput={this.onSearchInput} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
