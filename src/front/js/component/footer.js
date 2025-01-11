import React from "react";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="bg-light text-dark mt-5">
		<div className="container py-4">
			<div className="row align-items-center">
				<div className="col-md-4 text-start">
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
	                                 className="text-primary-emphasis text-decoration-none">
	                                    <strong>PRESIONA AQUÍ</strong>
                        </a>
					</p>
				</div>
			</div>
			<div className="d-flex justify-content-end mt-3">
				<button className="btn btn-light mx-1" type="button">
					<i className="fa-brands fa-facebook"></i>
				</button>
				<button className="btn btn-light mx-1" type="button">
					<i className="fa-brands fa-instagram"></i>
				</button>
				<button className="btn btn-light mx-1" type="button">
					<i className="fa-brands fa-tiktok"></i>
				</button>
			</div>
			<div className="text-center mt-3">
				<p>© Grupo Power 2025.</p>
			</div>
		</div>
	</div>
);