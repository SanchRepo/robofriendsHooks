import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import './App.css';

function App() {

	const [robots, setRobots] = useState([]);
	const [searchfield,setSearchField] = useState('')

// useEffect is similiar to componentDidMount when is has the dependencies
// as an empty []. if it was let's say [robot], then it would run everytime App
// is run. useEffect runs immediately after App is mounted
	useEffect(()=>{
		getRobots();
	},[]);

	const getRobots = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))

	}

		
	




	const onChangeSearch = (event) => {
		setSearchField(event.target.value)

	}

	const filteredBots = robots.filter(robot => {
		return robot.name.toLowerCase()
		.includes(searchfield.toLowerCase())

	})		

		//const {robots, searchfield} = this.state;

		if (!robots.length) {
			return <h1 className="tc">Loading...</h1>;
		} else {

			return (
				<>
					<div className="tc">
						<div>
							<h1 className="f1">RoboFriends</h1>
							<SearchBar searchChange={onChangeSearch}/>
						</div>
						<Scroll>
							<ErrorBoundary>
								<CardList robots = {filteredBots}/>
							</ErrorBoundary>
						</Scroll>
					</div>
				</>

			)
		}



	

}

export default App