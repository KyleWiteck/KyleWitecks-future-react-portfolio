import React, { Component } from 'react';
import './home.css';

//components
import Services from './Services/services';
import RecentWork from './RecentWork/recentWork';
import Testimonials from './Testimonials/testimonials';

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<Services />
				<RecentWork />
				<Testimonials />
			</div>
		);
	}
}

export default Home;
