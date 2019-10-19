import React, { Component } from 'react'
import { Tabs, Tab, Grid, Card, Cell, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl'

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
				<Grid>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%', height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNZvhoJ5p8EyINrNiTuUziQsq6T0i73Tp65Xo-vd7sUfWJrgY) center / cover'}} >Fireboard</CardTitle>
							 <CardText>
							 React, Node, Material-UI, GraphQL, React-Router, MongoDB
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/danielryne/fireboard" target="_blank">Github</Button>
							 	<Button colored href="https://fireboard-app.herokuapp.com/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%', height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://cdn-images-1.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}} >What-To-Weather</CardTitle>
							 <CardText>
							 Weather API, Ebay API, HTML, CSS, JQUERY, Bootstrap
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/anjunha93/what-to-weather" target="_blank">Github</Button>
							 	<Button colored href="https://anjunha93.github.io/what-to-weather/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%', height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://cdn-images-1.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}} >Star Wars Hang-Man</CardTitle>
							 <CardText>
							 HTML, CSS, JavaScript
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/jadoss/Hangman-Game" target="_blank">Github</Button>
							 	<Button colored href="https://jadoss.github.io/Hangman-Game/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
				</Grid>

				<Grid>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%',height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://cdn-images-1.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}} >Game of Thrones RPG</CardTitle>
							 <CardText>
							 HTML, CSS, JQUERY
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/jadoss/RPG " target="_blank">Github</Button>
							 	<Button colored href="https://jadoss.github.io/RPG/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%', height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://cdn-images-1.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}} >Cheese Trivia</CardTitle>
							 <CardText>
							 HTML, CSS, JavaScript, Bootstrap, JQUERY, 
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/jadoss/MyTriviaGame" target="_blank">Github</Button>
							 	<Button colored href="https://jadoss.github.io/MyTriviaGame/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{width: '100%', height: '100%', margin: 'auto'}}>
							<CardTitle style={{color: 'black', height: '176px', background:
							 'url(https://cdn-images-1.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}} >Train Scheduler</CardTitle>
							 <CardText>
							 BootStrap, Firebase, JQUERY
							 </CardText>
							 <CardActions border>
							 	<Button colored href="https://github.com/jadoss/TrainSchedule/" target="_blank">Github</Button>
							 	<Button colored href="https://jadoss.github.io/TrainSchedule/" target="_blank">LiveDemo</Button>
							 </CardActions>
							 <CardMenu style={{color: '#fff'}}>
							 	
							 </CardMenu>
						</Card>
					</Cell>
				</Grid>
			</div>
				
				
			)
		} else if(this.state.activeTab === 1) {
		  return(<div>coming soon</div>)
		}
	}
	


	render() {
		return(
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
					<Tab>Projects</Tab>
					<Tab>Animation</Tab>
				</Tabs>
					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
			</div>
		)
	}
}

export default Projects;