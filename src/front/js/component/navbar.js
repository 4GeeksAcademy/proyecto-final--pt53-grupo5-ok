import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-transparent m-3">
			<div className="container">
				<div>
						<img
						  src={Logo}
						  alt="Our Logo"
						  style={{
							width: "100px",
							height: "100px",
							borderRadius: "600%",
						  }}
						/>
				</div>
				<div className="collapse navbar-collapse d-flex justify-content-end menu" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active text-dark register mx-3" aria-current="page" to="/register">Registrate</Link>
						</li>
						<li className="nav-item dropdown">
						<Link className="nav-link active text-dark login" aria-current="page" to="/login">Inicio Sesion</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};