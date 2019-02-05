import React, { Component } from 'react';
import './testimonials.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Swipeable from 'react-swipeable';

class Testimonials extends Component {
	state = {
		fourStarReviews: [],
		activeIndex1: 0,
		activeIndex2: 1,
		activeIndex3: 2,
		flipIndex1: 0,
		flipIndex2: 1,
		testimonialCenter: 'review review-center',
		testimonialLeft: 'review review-left',
		testimonialRight: 'review review-right',
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
		const onClickLeft = () => {
			if (this.state.activeIndex3 === 2) {
				this.setState({
					activeIndex1: this.reviews.length - 1,
					activeIndex2: 0,
					activeIndex3: 1,
				});
			} else if (this.state.activeIndex2 === 0) {
				this.setState({
					activeIndex1: this.reviews.length - 2,
					activeIndex2: this.reviews.length - 1,
					activeIndex3: 0,
				});
			} else if (this.state.activeIndex2 === this.reviews.length - 1) {
				this.setState({
					activeIndex1: this.reviews.length - 3,
					activeIndex2: this.reviews.length - 2,
					activeIndex3: this.reviews.length - 1,
				});
			} else {
				this.setState({
					activeIndex1: this.state.activeIndex1 - 1,
					activeIndex2: this.state.activeIndex2 - 1,
					activeIndex3: this.state.activeIndex3 - 1,
				});
			}

			this.setState({
				flipIndex1: this.state.flipIndex1 === 0 ? 1 : 0,
				flipIndex2: this.state.flipIndex2 === 1 ? 0 : 1,
				testimonialCenter: 'review review-center review-animate-left',
				testimonialLeft: 'review review-left review-animate',
				testimonialRight: 'review review-right review-animate',
			});

			setTimeout(() => {
				this.setState({
					testimonialCenter: 'review review-center',
					testimonialLeft: 'review review-left',
					testimonialRight: 'review review-right',
				});
			}, 300);
		};

		const onClickRight = () => {
			if (this.state.activeIndex3 === this.reviews.length - 1) {
				this.setState({
					activeIndex1: this.reviews.length - 2,
					activeIndex2: this.reviews.length - 1,
					activeIndex3: 0,
				});
			} else if (this.state.activeIndex2 === this.reviews.length - 1) {
				this.setState({
					activeIndex1: this.reviews.length - 1,
					activeIndex2: 0,
					activeIndex3: 1,
				});
			} else if (this.state.activeIndex2 === 0) {
				this.setState({
					activeIndex1: 0,
					activeIndex2: 1,
					activeIndex3: 2,
				});
			} else {
				this.setState({
					activeIndex1: this.state.activeIndex1 + 1,
					activeIndex2: this.state.activeIndex2 + 1,
					activeIndex3: this.state.activeIndex3 + 1,
				});
			}

			this.setState({
				flipIndex1: this.state.flipIndex1 === 0 ? 1 : 0,
				flipIndex2: this.state.flipIndex2 === 1 ? 1 : 0,
				testimonialCenter: 'review review-center review-animate-right',
				testimonialLeft: 'review review-left review-animate',
				testimonialRight: 'review review-right review-animate',
			});

			setTimeout(() => {
				this.setState({
					testimonialCenter: 'review review-center',
					testimonialLeft: 'review review-left',
					testimonialRight: 'review review-right',
				});
			}, 300);
		};

		const buttonLeft = () => {
			return (
				<button className="slider-btn-left" onClick={onClickLeft}>
					&lt;
				</button>
			);
		};

		const buttonRight = () => {
			return (
				<button className="slider-btn-right" onClick={onClickRight}>
					&gt;
				</button>
			);
		};

		const testimonialCard = (classname, activeIndex) => {
			console.log(this.reviews.length);
			console.log(activeIndex);
			return (
				<div className={classname}>
					<div className="reviewer">
						<img src={this.reviews[activeIndex].picture} alt="" />
						<div className="reviewer-info">
							<h4>{this.reviews[activeIndex].name}</h4>
							<h4>{this.reviews[activeIndex].title}</h4>
						</div>
					</div>
					<div className="review-text">
						<p>{this.reviews[activeIndex].testimonial}</p>
					</div>
				</div>
			);
		};

		if (this.reviews.length >= 3) {
			return (
				<Swipeable
					style={{ margin: 0 }}
					onSwipedRight={onClickLeft}
					onSwipedLeft={onClickRight}
					delta={50}
					flickThreshold={5}
					className="slider"
				>
					{buttonLeft()}

					{testimonialCard(this.state.testimonialLeft, this.state.activeIndex1)}

					{testimonialCard(
						this.state.testimonialCenter,
						this.state.activeIndex2
					)}

					{testimonialCard(
						this.state.testimonialRight,
						this.state.activeIndex3
					)}

					{buttonRight()}
				</Swipeable>
			);
		} else if (this.reviews.length === 2) {
			return (
				<div className="slider">
					{buttonLeft()}

					{testimonialCard(this.state.testimonialCenter, this.state.flipIndex1)}

					{buttonRight()}
				</div>
			);
		} else if (this.reviews.length === 1) {
			testimonialCard(this.state.testimonialCenter, this.state.flipIndex1);
		} else {
			return (
				<h4>
					There are no testimonials at this time. Please click the button bellow
					to add yours! THANKS!
				</h4>
			);
		}
	};

	componentDidMount() {
		this.setState({
			fourStarReviews: this.reviews.filter(review => review.star >= 4),
		});
	}

	render() {
		console.log(this.reviews.length);
		return (
			<div className="testimonials">
				<h2>Testimonials</h2>
				<div className="review-container">
					{this.reviewsCreator(this.reviews)}
				</div>

				<button className="add-testimonial-btn">Give Your Testimonial</button>
			</div>
		);
	}
}

export default Testimonials;
