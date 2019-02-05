import React from 'react';
import './footer.css';

const Footer = () => {
	let currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div>
				<span>Copyright &copy; {currentYear} Kyle Witeck</span>
				<span>All Rights Reserved</span>
				<span>Designed By Kyle Witeck</span>
			</div>
			<div className="social-media">
				<a
					href="https://www.linkedin.com/in/kylewiteck/"
					class="fa fa-linkedin"
				/>
				<a href="https://github.com/KyleWiteck" class="fa fa-github" />
			</div>
		</footer>
	);
};

export default Footer;
