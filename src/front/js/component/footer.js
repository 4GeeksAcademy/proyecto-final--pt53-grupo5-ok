import React from "react";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta

export const Footer = () => (
	<div className="bg-light text-dark fixed bottom mt-5">
		<div className="container text-center">
			<div className="d-flex align-items-center justify-content-center">
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
				<div>
					<h5><strong>Contacto</strong></h5>
					<p>
						<strong>Línea Prevención del Suicidio:</strong> * 4141
						<br />
						<strong>Línea de Prevención del Suicidio y Crisis :</strong> 998
						<br />
						<strong>Central de Ayuda  </strong>
                            <a 
                                 href="https://988lifeline.org/es/inicio/" 
                                 target="_blank" 
                                  rel="noopener noreferrer" 
                                 className="text-dark text-decoration-none "
                               >
                                    ⇢ Si necesitas ayuda ⇠
                            </a>
						<br />
					</p>
				</div>
			</div>
			<div className="d-grid gap-2 d-md-flex justify-content-md-end mb-1">
				<button className="btn btn-light" type="button">
					<i className="fa-brands fa-facebook"></i>
				</button>
				<button className="btn btn-light" type="button">
					<i className="fa-brands fa-instagram"></i>
				</button>
				<button className="btn btn-light" type="button">
					<i className="fa-brands fa-tiktok"></i>
				</button>
			</div>
			<div className=" text-center">
				<p>© Grupo Power 2025.</p>
			</div>
		</div>
	</div>
);