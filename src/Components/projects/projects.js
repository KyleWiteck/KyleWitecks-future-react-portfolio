import React from 'react';
import '../Projects/projects.css';

//widgets
import ProjectCard from '../../Widgets/ProjectCard/projectCard';

const Projects = props => {
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
		<div className="my-projects">
			<h1>My Projects</h1>
			<div className="projects-container">
				<ProjectCard projects={projects} start={0} end={12} />
			</div>
		</div>
	);
};

export default Projects;
