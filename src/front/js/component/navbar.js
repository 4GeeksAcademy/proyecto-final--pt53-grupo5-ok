import React from "react";
import { Link } from "react-router-dom";
import Myimage from "./Myimage.png"; // Ajusta la ruta según sea necesario

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-transparent">
			<div className="container">
				<div>
					<Link className="navbar-brand" to="/">
						<img
						  src={Myimage}
						  alt="Our Logo"
						  style={{
							width: "100px",
							height: "100px",
							borderRadius: "100%",
							boxShadow: "0 4px 8px rgba(94, 11, 11, 0.1)",
							cursor: "pointer",
							opacity: 0.5,
						  }}
						/>
					</Link>
				</div>
				<div className="collapse navbar-collapse d-flex justify-content-end menu" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active text-light" aria-current="page" to="/register">REGISTRATE AQUÍ</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								INGRESA COMO:
							</a>
							<ul className="dropdown-menu">
								<li><Link className="dropdown-item" to="/professional">Profesional</Link></li>
								<li><hr className="dropdown-divider" /></li>
								<li><Link className="dropdown-item" to="/support">Soporte</Link></li>
								<li><hr className="dropdown-divider" /></li>
								<li><Link className="dropdown-item" to="/user">Usuario</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};