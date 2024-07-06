import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light p-3 mb-3">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span className="navbarbrand px-4 mb-0 h3">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/CreateNewContact">
					<button className="btn btn-primary mx-4">New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
