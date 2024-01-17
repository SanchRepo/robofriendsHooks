import React from 'react';


const SearchBar = ({searchChange}) => {
	return (
		<div className = "pa2">
		<input className ="pa3 ba b--green bg-lightest-blue"
		 onChange={searchChange} type="search" placeholder="Search for Robots" />
		</div>

		);





}
export default SearchBar