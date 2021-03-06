import React from 'react';
import './recentWork.css';

//widgets
import ProjectCard from '../../../Widgets/ProjectCard/projectCard';

const RecentWork = () => {
	const projects = [
		{
			name: 'My Portfolio',
			img: 'img/projects/capture.png',
			alt: 'HTML icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'Neighborhood React App',
			img: 'img/projects/neighborhoodReact.PNG',
			alt: 'CSS icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'Memory Matching Game',
			img: 'img/projects/memorygame.png',
			alt: 'JavaScript Icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'Neighborhood React App',
			img: 'img/projects/neighborhoodReact.png',
			alt: 'React Icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'My Portfolio',
			img: 'img/projects/capture.png',
			alt: 'HTML icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'Neighborhood React App',
			img: 'img/projects/neighborhoodReact.png',
			alt: 'CSS icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi.',
		},
		{
			name: 'My Portfolio',
			img: 'img/projects/capture.png',
			alt: 'JavaScript Icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.',
		},
		{
			name: 'Memory Matching Game',
			img: 'img/projects/memorygame.png',
			alt: 'JavaScript Icon',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, fermentum vitae dui ac, tempus dictum mi. Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante.Donec mollis dignissim pellentesque. Mauris quis nunc vitae felis commodo lobortis ac eu ante. Donec mollis dignissim pellentesque.',
		},
	];

	return (
		<div className="recent-work">
			<h2>Recent Work</h2>
			<div className="recentwork-container">
				<ProjectCard projects={projects} start={0} end={3} />
			</div>
		</div>
	);
};

export default RecentWork;
