import React from 'react';
import './about.scss';
import { Waypoint } from 'react-waypoint';

class AboutPage extends React.Component {
	constructor() {
		super();
    this.state = {
      revield:false
    };
  }
  
  handleWaypoint = () => {
    this.setState(prevState => ({
      revield: !prevState.revield
    }));
   
  }


  render() {
    console.log(this.state.revield);
		return (
			<div className="about flex-c">
				<Waypoint onEnter={this.handleWaypoint} onLeave={this.handleWaypoint} />
				<div className={`letters ${this.state.revield ? 'show' : ''}`}>Photographer.</div>
				<div className="backround" />
				<div className={`about-text flex-c ${this.state.revield ? 'show' : ''}`}>
					<h1 className="title">About me</h1>
					<h2>I'm a photographer who loves a challange and exiting projects.</h2>
					<p>
						Five years ago I started doing photography on a professional level. I'm using high end equipment that gives
						me full controll of the scenery and opportunity for more exiting pictures. I learned by observing the styles
						and techniques of world famous photographers.{' '}
					</p>
				</div>
				<div className="about-image-area flex-c">
					<div className={`about-img ${this.state.revield ? 'show' : ''}`} />
				</div>
			</div>
		);
	}
}

export default AboutPage;
