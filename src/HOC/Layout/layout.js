import React, { Component } from 'react';
import './layout.css';

//Components
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import HomeHero from '../../Components/Home/Hero/homeHero';

class Layout extends Component {
	state = {};

	headerOrHero = () => {
		//Checks to see if the path name is home and then
		//displays the Home Hero Components if it is or it just
		//displays the header if the pathname does not match /
		if (window.location.pathname === '/') {
			return <HomeHero />;
		} else {
			return <Header />;
		}
	};

	render() {
		return (
			<div>
				{this.headerOrHero()}
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Layout;
