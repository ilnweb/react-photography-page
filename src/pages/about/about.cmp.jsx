import React from 'react';
import './about.scss';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

class AboutPage extends React.Component {
	constructor() {
		super();
		this.state = {
			revield: false
		};
	}

	handleWaypoint = () => {
		this.setState((prevState) => ({
			revield:true
		}));
	};

	render() {
		
		return (
			<div className="about flex-c">
				
				<div className={`letters ${this.state.revield ? 'show' : ''}`}>Photographer.</div>
				<div className="backround" />
        <div className={`about-text flex-c ${this.state.revield ? 'show' : ''}`}>
        <Waypoint onEnter={this.handleWaypoint} />
					<h1 className="title">About me</h1>
					<h2>I'm a photographer who loves a challange and exiting projects.</h2>
					<p>
						Five years ago I started doing photography on a professional level. I'm using high end equipment that gives
						me full controll of the scenery and opportunity for more exiting pictures. I learned by observing the styles
						and techniques of world famous photographers.{' '}
					</p>
					<div className="about-social flex-c">
						<Link className="link-button" to="/contact">
							Contact me
						</Link>
						<a href="https://www.instagram.com/iliyan.tsachev/" target="blank">
							<FaInstagram className="react-icons" />
						</a>
						<a href="https://www.facebook.com/itsachevphotography/?modal=admin_todo_tour" target="blank">
							<FaFacebookSquare className="react-icons" />
						</a>
					</div>
				</div>
				<div className="about-image-area flex-c">
					<img
						src="https://res.cloudinary.com/ilnphotography/image/upload/v1578492915/HomePage/shadow_zsw6h2.png"
						className={`about-img ${this.state.revield ? 'show' : ''}`}
						alt="iliyan-portrait"
					/>
				</div>
			</div>
		);
	}
}

export default AboutPage;
