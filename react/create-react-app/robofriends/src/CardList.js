import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardComponent = robots.map((robot, i) => {
		return <Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email} />;
	});
	return <div>{cardComponent}</div>;
};

export default CardList;
