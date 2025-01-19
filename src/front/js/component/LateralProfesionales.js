import React, { useEffect, useState } from "react";


export const ProfesionalesLateral = ({ usuarios = [] }) => {
  const [profesionales, setProfesionales] = useState([]);

  const guardarEnLocalStorage = (profesionales) => {
    localStorage.setItem("profesionales", JSON.stringify(profesionales));
  };

  // Cargar profesionales desde localStorage al montar el componente
  useEffect(() => {
    const datosGuardados = localStorage.getItem("profesionales");
    if (datosGuardados) {
      setProfesionales(JSON.parse(datosGuardados));
    } else if (usuarios.length > 0) {
      // Filtramos y guardamos en caso de que usuarios no esté vacío
      const profesionalesFiltrados = usuarios
        .filter((user) => user.type === "profesional")
        .slice(0, 15);

      setProfesionales(profesionalesFiltrados);
      guardarEnLocalStorage(profesionalesFiltrados);
    }
    // Dependencia vacía para que esto se ejecute solo al montar
  }, []);


  return (
    <div
      className="card justify-content-center"
      style={{ fontSize: "0.8rem", padding: "0px", marginLeft: "30px", width: "100%" }}
    >
      <div className="card-body">
        <h5 className="card-title">Profesionales Destacados</h5>
        <ul className="list-group list-group-flush">
          {profesionales.length > 0 ? (
            profesionales.map((profesional) => (
              <li key={profesional.id} className="list-group-item" style={{ padding: "5px 10px" }}>
                <strong>{profesional.firstname} {profesional.lastname}</strong>
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