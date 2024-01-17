import React from 'react';
import CardList from '../components/CardList';
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield : ''
		}

	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}))

	}

	onChangeSearch = (event) => {
		this.setState({searchfield: event.target.value})

		}

	

	render() {
		const {robots, searchfield} = this.state;
		const filteredBots = robots.filter(robot => {
			return robot.name.toLowerCase()
			.includes(searchfield.toLowerCase())



		})

		if (!robots.length) {
			return <h1 className="tc">Loading...</h1>;
		} else {

			return (
				<React.Fragment>
					<div className="tc">
						<div>
							<h1 className="f1">RoboFriends</h1>
							<SearchBar searchChange={this.onChangeSearch}/>
						</div>
						<Scroll>
							<ErrorBoundary>
								<CardList robots = {filteredBots}/>
							</ErrorBoundary>
						</Scroll>
					</div>
				</React.Fragment>

			)
		}



	}

}

export default App