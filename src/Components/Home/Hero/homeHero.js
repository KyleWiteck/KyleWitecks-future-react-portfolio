import React, { Component } from 'react';
import './homeHero.css';

//Components
import Header from '../../Header/header';

class HomeHero extends Component {
	state = {};

	render() {
		return (
			<div>
				<Header />
				<div className="homeHero" />
			</div>
		);
	}
}

export default HomeHero;
