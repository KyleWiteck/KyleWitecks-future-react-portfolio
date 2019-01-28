import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './Components/Home/home';
import Layout from './HOC/Layout/layout';
import Projects from './Components/projects/projects';
import Contact from './Components/Contact/contact';
import About from './Components/About/about';

const Routes = props => {
	//Checks to see if the path name is home and then
	//displays the Home Hero Components if it is.

	return (
		<div>
			<Layout>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Layout>
		</div>
	);
};

export default Routes;
