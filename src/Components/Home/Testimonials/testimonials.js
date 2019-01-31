import React, { Component } from 'react';
import './testimonials.css';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Testimonials extends Component {
	state = {
		fourStarReviews: [],
		activeIndex1: 0,
		activeIndex2: 1,
		activeIndex3: 2,
	};

	reviews = [
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			star: 1,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'jane dickson',
			title: 'Web Dev',
			star: 5,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'kyle tim',
			title: 'Web Dev',
			star: 5,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'steve hon',
			title: 'Web Dev',
			star: 4,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
		},
		{
			name: 'steph jill',
			title: 'Web Dev',
			star: 4,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboruUt enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.',
		},
		{
			name: 'brad simmons',
			title: 'Web Dev',
			star: 2,
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
	];

	reviewsCreator = array => {
		const review = (
			<div className="slider" index={this.state.activeIndex1}>
				<button
					onClick={() => {
						this.setState({
							activeIndex1: this.state.activeIndex1 - 1,
							activeIndex2: this.state.activeIndex2 - 1,
							activeIndex3: this.state.activeIndex3 - 1,
						});
					}}
				>
					back
				</button>
				<div className="review">
					<div className="reviewer">
						<img src={this.reviews[this.state.activeIndex1].picture} alt="" />
						<div className="reviewer-info">
							<h4>{this.reviews[this.state.activeIndex1].name}</h4>
							<h4>{this.reviews[this.state.activeIndex1].title}</h4>
						</div>
					</div>
					<div className="review-text">
						<p>{this.reviews[this.state.activeIndex1].testimonial}</p>
					</div>
				</div>

				<div className="review review-center">
					<div className="reviewer">
						<img src={this.reviews[this.state.activeIndex2].picture} alt="" />
						<div className="reviewer-info">
							<h4>{this.reviews[this.state.activeIndex2].name}</h4>
							<h4>{this.reviews[this.state.activeIndex2].title}</h4>
						</div>
					</div>
					<div className="review-text">
						<p>{this.reviews[this.state.activeIndex2].testimonial}</p>
					</div>
				</div>

				<div className="review">
					<div className="reviewer">
						<img src={this.reviews[this.state.activeIndex3].picture} alt="" />
						<div className="reviewer-info">
							<h4>{this.reviews[this.state.activeIndex3].name}</h4>
							<h4>{this.reviews[this.state.activeIndex3].title}</h4>
						</div>
					</div>
					<div className="review-text">
						<p>{this.reviews[this.state.activeIndex3].testimonial}</p>
					</div>
				</div>
				<button
					onClick={() => {
						this.setState({
							activeIndex1: this.state.activeIndex1 + 1,
							activeIndex2: this.state.activeIndex2 + 1,
							activeIndex3: this.state.activeIndex3 + 1,
						});
					}}
				>
					next
				</button>
			</div>
		);

		return review;
	};

	componentDidMount() {
		this.setState({
			fourStarReviews: this.reviews.filter(review => review.star >= 4),
		});
	}

	render() {
		return (
			<div className="testimonials">
				<h2>Testimonials</h2>
				<div className="review-container">
					{this.reviewsCreator(this.reviews)}
				</div>

				<button>Give Your Testimonial</button>
			</div>
		);
	}
}

export default Testimonials;
