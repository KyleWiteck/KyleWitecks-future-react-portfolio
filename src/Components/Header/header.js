import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
	state = {
		navClass: 'hero-header',
	};

	linkItems = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'About',
			url: '/about',
		},
		{
			name: 'Projects',
			url: '/projects',
		},
		{
			name: 'Contact',
			url: '/contact',
		},
	];

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		if (window.location.pathname !== '/') {
			this.setState({
				navClass: 'header',
			});
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		//Gets the home hero element
		const homeHeroDiv = document.getElementsByClassName('homeHero');

		// Checks if the current pathname matches the home page pathname
		if (window.location.pathname === '/') {
			//Checks if the scrolling position matches the end of the homeHero element,
			// the homeHero elements class to make it transparent.
			if (window.scrollY >= homeHeroDiv[0].clientHeight - 120) {
				//Changes the class of the homeHero element.
				//This class changes the background to black.
				this.setState({
					navClass: 'scrollNav',
				});
			} else {
				//Changes the class of the homeHero element so it becomes transparent.
				this.setState({
					navClass: 'hero-header',
				});
			}
		}
	};

	headerItems = () => {
		//Maps through the linkItems object and returns out nav links based linkItems
		const listItems = this.linkItems.map((item, key) => {
			return (
				<li key={key}>
					<NavLink activeClassName="current" to={item.url} exact>
						{item.name}
					</NavLink>
				</li>
			);
		});

		return listItems;
	};

	render() {
		return (
			<header className={this.state.navClass}>
				<nav>
					{/* <img src="/img/react_logo.png" alt="temporary logo" /> */}
					<ul className="headerList">{this.headerItems()}</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
