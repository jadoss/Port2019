import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '/Users/x/github/2019_Portfolio/port/src/images/profile.png';

class About extends Component {
    render() {
    console.log(profile);    
        return (
            <Grid className='aboutme'>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img
								src={profile}
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
						<p>469.866.9511</p>
						<a href="mailto:jalexdoss@gmail.com">
	 						    	Jalexdoss@gmail.com
	 					</a>
	 					<p>
	 					<a href="https://drive.google.com/file/d/18_l3CWDVCGLu_sXPxjUPW6vN-oQKlLNH/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
	 					</p>
	 					</div>
					</Cell>
				</Grid>
        )
    }
}

export default About;