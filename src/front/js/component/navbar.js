import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-transparent">
			<div className="container">
				<div>
					<Link className="navbar-brand" to="/">
						<img
						  src={Logo}
						  alt="Our Logo"
						  style={{
							width: "100px",
							height: "100px",
							borderRadius: "600%",
							boxShadow: "0 4px 8px rgba(176, 76, 76, 0.1)",
							
							
						  }}
						/>
					</Link>
				</div>
				<div className="collapse navbar-collapse d-flex justify-content-end menu" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active text-dark register mx-3" aria-current="page" to="/register"><strong>REGISTRATE</strong></Link>
						</li>
						<li className="nav-item dropdown">
						<Link className="nav-link active text-dark login" aria-current="page" to="/login"><strong>INICIAR SESION</strong></Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};