import React from "react";
import Myimage from "./Myimage.png";

export const Footer = () => (
  <div className="card text-start">
    <div className="card-body">
    <img
  src={Myimage}
  alt="Our Logo"
  style={{
    width: "100px",
    height: "100px", // Asegura un tamaño cuadrado para que el borde sea circular
    borderRadius: "100%", // Hace que la imagen sea circular
    boxShadow: "0 4px 8px rgba(94, 11, 11, 0.1)", // Agrega sombra para un efecto elegante
    cursor:"pointer",
    opacity: 0.5,
    
  
  }}
/>
    </div>
    <div className="card-body text-center">
      <h5 className="card-title">Contacto</h5>
      <p className="card-text">
        <strong>Tel:</strong> 011 4816.1200
        <br />
        <strong>Tel:</strong> 011 2649.3531
        <br />
        <strong>Central de Turnos:</strong> 0800.222.4549
        <br />
      </p>
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
    <div className="card-footer text-center mg-4">
    <p className="mb-4">© Grupo Power 2025.</p>
</div>
</div>
);