import React from 'react';
import './nav.scss';

import { Link } from 'react-router-dom';

const Nav = ({ toggle, nav }) => {
  
	let style;
	if (nav) {
		style = {
			transform: `translate(0)`,
      opacity: 1
		}
  } 

	return (
    
		<nav className="nav-slide" style={style}>
			<div className="page-links">
        <Link onClick={toggle} className= {`link-page ${nav ? 'link-page-open' : ""}`} to="/">
					 HOME
				</Link>
				<Link onClick={toggle} className={`link-page ${nav ? 'link-page-open' : ""}`} to="/about">
					ABOUT
				</Link>
				<Link onClick={toggle} className={`link-page ${nav ? 'link-page-open' : ""}`} to="/contact">
					CONTACT
        </Link>
        
        <div className="social-icons">
        
        </div>
			</div>
		</nav>
	);
};

export default Nav;
