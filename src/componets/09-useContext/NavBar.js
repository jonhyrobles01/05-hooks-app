import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				useContext
			</Link>
			<div className="collapse navbar-collapse" id="navbarsExample02">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink exact activeClassName="active" className="nav-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							activeClassName="active"
							className="nav-link"
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							activeClassName="active"
							className="nav-link"
							to="/login"
						>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
