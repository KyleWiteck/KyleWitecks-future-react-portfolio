import React, { Component } from 'react';
import './home.css';

//components
import Services from './Services/services';
import RecentWork from './RecentWork/recentWork';
import Testimonials from './Testimonials/testimonials';
import ReviewModal from './reviewModal/reviewModal';

class Home extends Component {
	state = {
		showTestimonialModal: false,
	};

	showModalButton = () => {
		console.log('working');
		this.setState({
			showTestimonialModal: true,
		});
	};

	closeModalButton = () => {
		this.setState({
			showTestimonialModal: false,
		});
	};

	render() {
		return (
			<div>
				<Services />
				<RecentWork />
				<ReviewModal
					closeModal={() => {
						this.setState({
							showTestimonialModal: false,
						});
					}}
					modalState={this.state.showTestimonialModal}
				/>
				<Testimonials showModal={this.showModalButton} />
			</div>
		);
	}
}

export default Home;
