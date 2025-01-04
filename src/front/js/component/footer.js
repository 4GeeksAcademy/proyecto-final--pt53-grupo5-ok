import React from "react";
import Myimage from "./Myimage.png"; // Asegúrate de que la ruta sea correcta

export const Footer = () => (
	<div className="bg-light text-dark">
		<div className="container text-center">
			<div className="d-flex align-items-center justify-content-center">
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
					className="me-3" // Espaciado derecho para separar el logo del texto
				/>
				<div>
					<h5>Contacto</h5>
					<p>
						<strong>Tel:</strong> 011 4816.1200
						<br />
						<strong>Tel:</strong> 011 2649.3531
						<br />
						<strong>Central de Turnos:</strong> 0800.222.4549
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