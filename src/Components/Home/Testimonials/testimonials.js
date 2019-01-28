import React, { Component } from 'react';
import './testimonials.css';
import { Carousel } from 'react-responsive-carousel';

class Testimonials extends Component {
	state = {};

	reviews = [
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
		},
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboruUt enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.',
		},
		{
			name: 'Tim Jones',
			title: 'Web Dev',
			picture: 'img/Testimonials/avatar.png',
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolorinreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laboru',
		},
	];

	reviewsCreator = array => {
		console.log(array);
		const review = array.slice(0, 4).map((review, key) => (
			<div className="review" key={key}>
				<div className="reviewer">
					<img src={review.picture} alt="" />
					<div className="reviewer-info">
						<h4>{review.name}</h4>
						<h4>{review.title}</h4>
					</div>
				</div>
				<div className="review-text">
					<p>{review.testimonial}</p>
				</div>
			</div>
		));

		return review;
	};
	render() {
		return (
			<div className="testimonials">
				<h2>Testimonials</h2>
				<div className="review-container">
					<Carousel testimonials={this.reviewsCreator(this.reviews)} />
				</div>
				<button>Give Your Testimonial</button>
			</div>
		);
	}
}

export default Testimonials;
