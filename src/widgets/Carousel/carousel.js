import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

const Carousel = props => {
	let reactSwipeEl;
	console.log(props.testimonials);
	return (
		<div>
			<ReactSwipe
				className="carousel"
				swipeOptions={{ continuous: false }}
				ref={el => (reactSwipeEl = el)}
			>
				{props.testimonials}
			</ReactSwipe>
			<button onClick={() => reactSwipeEl.next()}>Next</button>
			<button onClick={() => reactSwipeEl.prev()}>Previous</button>
		</div>
	);
};

export default Carousel;
