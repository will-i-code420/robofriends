import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots,
			searchField: ''
		};
	}
	onSearchInput = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchInput={this.onSearchInput} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
