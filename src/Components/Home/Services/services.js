import React from 'react';
import './services.css';

const Services = () => {
	const services = [
		{
			name: 'HTML',
			img: 'img/Services/HTML_330.png',
			alt: 'HTML icon',
		},
		{
			name: 'CSS',
			img: 'img/Services/CSS_330.png',
			alt: 'CSS icon',
		},
		{
			name: 'JavaScript',
			img: 'img/Services/JavaScript_330.png',
			alt: 'JavaScript Icon',
		},
		{
			name: 'React',
			img: 'img/Services/React_330.png',
			alt: 'React Icon',
		},
	];

	const specialties = obj => {
		const service = obj.map((icon, key) => (
			<div className="icon-container" key={key}>
				<img className={icon.name} src={icon.img} alt={icon.alt} />
			</div>
		));
		return service;
	};

	return (
		<div className="services">
			<h2>Specialties</h2>
			<div className="services-container"> {specialties(services)}</div>
		</div>
	);
};

export default Services;
