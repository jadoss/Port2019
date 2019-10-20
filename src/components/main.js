import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage'
import Projects from './projects'
import About from './about'



const Main = () => (
	<Switch>
		<Route exact path="Port2019/" component={Landing} />
		<Route exact path='Port2019/about' component={About} />
		<Route path="Port2019/projects" component={Projects} />
	</Switch>
)

export default Main;