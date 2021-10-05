import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true) {
		throw new Error('Arrggg');
	}
	return (
		<div>
			{robots.map((robot, i) => {
				return <Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email} />;
			})}
		</div>
	);
};

export default CardList;
