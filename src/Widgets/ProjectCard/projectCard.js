import React from 'react';

const ProjectCard = props => {
	const project = props.projects
		.slice(props.start, props.end)
		.map((item, key) => (
			<div className={`project-container key${key}`} key={key}>
				<img className={item.name} src={item.img} alt={item.alt} />
				<h3>{item.name}</h3>
				<p>{item.info}</p>
			</div>
		));

	return project;
};

export default ProjectCard;
