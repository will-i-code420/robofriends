import React from 'react';

const SearchBox = ({ searchInput }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots..."
				onChange={searchInput}
			/>
		</div>
	);
};

export default SearchBox;
