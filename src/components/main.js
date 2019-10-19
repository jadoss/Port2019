import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage'
import Projects from './projects'
import About from './about'



const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route exact path='/about' component={About} />
		<Route path="/projects" component={Projects} />
	</Switch>
)

export default Main;