import React from "react";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className=" d-flex bg-footer text-dark mt-5">
		<div className="container" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
			<div className="row align-items-center">
				<div className="col-md-4 text-start">
				<a className="navbar-brand" href="/">
					<img
						src={Logo}
						alt="Our Logo"
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "100%",
							boxShadow: "0 4px 8px rgba(94, 11, 11, 0.1)",
							cursor: "pointer",
						}}
						className="me-3"
					/>
					</a>
				</div>
				<div className="col-md-4 text-center">
					<h5><strong>Contacto</strong></h5>
					<p>
						<strong>Línea Prevención del Suicidio:</strong> * 4141
						<br />
						<strong>Línea de  Crisis:</strong> 998
						<br />
						<strong>Central de Ayuda: </strong>
						<a
							href="https://988lifeline.org/es/inicio/"
							target="_blank"
							rel="noopener noreferrer"
							className="boton-footer btn">
							PRESIONA AQUÍ
						</a>
					</p>
				</div>
				<div className=" col-md-4 d-flex justify-content-end mt-3">
                    <a href="https://www.facebook.com/profile.php?id=61571735830469" target="_blank" rel="noopener noreferrer">
					    <button className="btn mx-1 btn-rs" type="button">
						<i className="fa-brands fa-facebook"></i>
					    </button>
				    </a>
					<a href="https://www.instagram.com/thera.phylink/" target="_blank" rel="noopener noreferrer">
					<button className="btn mx-1 btn-rs" type="button">
						<i className="fa-brands fa-instagram"></i>
					</button>
					</a>
					<a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <button className="btn mx-1 btn-rs" type="button">
                          <i className="fa-brands fa-tiktok"></i>
                       </button>
                    </a>
				</div>
			</div>
			<div className="text-center mt-3">
				<p>© Grupo Power 2025.</p>
			</div>
		</div>
	</div>
);