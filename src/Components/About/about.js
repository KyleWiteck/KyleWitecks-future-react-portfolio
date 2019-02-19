import React from 'react';
import './about.css';

const About = () => {
	return (
		<div className="about">
			<div className="about-info">
				<div className="about-content">
					<h2>Passanate, Driven, Devoted</h2>
					<h1>My Name Is Kyle Witeck</h1>
				</div>

				{/* <img src="img/About/temp-male.jpg" alt="" /> */}
			</div>
			<div className="random-facts">
				<div className="random-facts-container">
					<img src="/img/About/randomFacts/minnie.jpg" alt="" />

					<p>
						Vivamus dignissim varius mi. Cras dapibus aliquet sollicitudin.
						Aliquam quam odio, egestas et odio vitae, condimentum sollicitudin
						urna. Aliquam tellus felis, lobortis vulputate est vitae, vulputate
						dignissim augue. Etiam quis vestibulum tortor, ac varius nisi.
					</p>
				</div>
				<div className="random-facts-container">
					<p>
						Vivamus dignissim varius mi. Cras dapibus aliquet sollicitudin.
						Aliquam quam odio, egestas et odio vitae, condimentum sollicitudin
						urna. Aliquam tellus felis, lobortis vulputate est vitae, vulputate
						dignissim augue. Etiam quis vestibulum tortor, ac varius nisi.
					</p>
					<img src="/img/About/randomFacts/minnie.jpg" alt="" />
				</div>
				<div className="random-facts-container">
					<img src="/img/About/randomFacts/minnie.jpg" alt="" />

					<p>
						Vivamus dignissim varius mi. Cras dapibus aliquet sollicitudin.
						Aliquam quam odio, egestas et odio vitae, condimentum sollicitudin
						urna. Aliquam tellus felis, lobortis vulputate est vitae, vulputate
						dignissim augue. Etiam quis vestibulum tortor, ac varius nisi.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
