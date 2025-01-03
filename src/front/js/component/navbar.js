import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-transparent">
			<div className="container">
				<div>
					<a className="navbar-brand text-dark" href="#">SU LOGO AQUÍ</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse d-flex justify-content-end menu" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active text-dark" aria-current="page" href="#">REGISTRATE AQUÍ</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								INGRESA COMO:
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Profesional</a></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="#">Soporte</a></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="#">Usuario</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
