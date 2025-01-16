import React from "react";

export const ProfesionalesLateral = ({ usuarios }) => {
    // Filtra los usuarios por tipo "Profesional" y limita el resultado a 15
    const profesionales = usuarios
        .filter((usuario) => usuario.type === "Profesional")
        .slice(0, 15);

    return (
        <div className="card justify-content-center" style={{ fontSize: "0.8rem", padding: "0px", marginLeft: "30px", width: "100%"  }}>
            <div className="card-body">
                <h5 className="card-title">Profesionales Destacados</h5>
                <ul className="list-group list-group-flush">
                    {profesionales.length > 0 ? (
                        profesionales.map((profesional) => (
                            <li key={profesional.id} className="list-group-item" style={{ padding: "5px 10px" }}>
                                <strong>{profesional.nombre}</strong> - {profesional.especialidad}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No hay profesionales disponibles.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};