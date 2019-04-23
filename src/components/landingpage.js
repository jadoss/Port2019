import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<div className="banner-text">

							<br/>

							<h1>James Doss</h1>

							<hr/>

							<h1>Full Stack Web Developer</h1>

							<hr/>

							<p>HTML/CSS | Bootstrap | JavaSCript | React | NodeJs | Express | MongoDb | Flash Animation</p>

							<div className="social-links">
								{/*  LinkedIn */}
								<a href="https://www.linkedin.com/in/jalexdoss/" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/*  Github */}
								<a href="https://github.com/jadoss" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								<a href="mailto:jalexdoss@gmail.com" rel="noopener noreferrer">
									<i className="fa fa-envelope-square" aria-hidden="true" />
								</a>

							</div>

						</div>
					</Cell>
				</Grid>
				<Grid className='aboutme'>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img
								src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/48982679_10212636283811632_7251336127859130368_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-1.xx&oh=aced0bf9cac47f7cf1ccedb9c4643bac&oe=5D3F830D"
								alt="avatar"
								style={{height: '280px'}}
							/>
						</div>
						<h2>James Doss</h2>
						<h4 style={{color: 'grey'}}>Programmer</h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
						<h5>Location</h5>
						<p> Austin, Texas 78721 </p>
						<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
					</Cell>
					<Cell className="about-right-col" col={8}>
						<h2 style={{ textAlign: 'center'}}>About Me</h2>
						<hr/>
						<p style={{ textAlign: 'center', marginLeft: '20%', marginRight: '20%'}}>
							Hello! Welcome to my web page. I am a Full Stack Web Developer who enjoys a challenge and working with others 
							to develop new & valuable applications. I've had the privilege of working on some exciting projects with fellow 
							team members and I love to collaborate on fresh ideas. My main strengths are my knowledge of 
							JavaScript, React, Bootstrap, and server deployment. I believe as a developer, the best way for me to stay 
							sharp is to push myself to learn new languages, and always be creating something. My background in 
							theatre and culinary arts has shown me the power of partnership.  Coming together with a team to pull off 
							an extraordinary experience on (or behind) stage or satisfying the hunger of hundreds on any given day has 
							shown me that when people get together with a common goal amazing things can happen. 
							As a mission I seek to take this ability to the world of technology and find an outlet to collaborate with others. 
							You will find some examples of my work in the Projects page, and feel free to contact me with the link provided below to get in touch. Thank you!
						</p>
						<div style={{ textAlign: 'center'}}>
						<h5>Contact</h5>
						<p>469.995.9705</p>
						<a href="mailto:jalexdoss@gmail.com">
	 						    	Jalexdoss@gmail.com
	 					</a>
	 					<p>
	 					<a href="https://drive.google.com/file/d/18_l3CWDVCGLu_sXPxjUPW6vN-oQKlLNH/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
	 					</p>
	 					</div>
					</Cell>
				</Grid>

				
				
				</div>

		)
	}
}

export default Landing;