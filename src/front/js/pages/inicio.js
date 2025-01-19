import React, { useContext, useEffect, useState } from "react";
import { Feed } from "../component/posteos";  // Importa el Feed desde el componente de posteos
import { useNavigate } from "react-router-dom";
import { TituloMuro } from "../component/TituloMuro";
import { ProfesionalesLateral } from "../component/LateralProfesionales";
import { Context } from "../store/appContext";

export const Inicio = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios
    const { store, actions } = useContext(Context);

    useEffect(() => {
// los cambios van desde aqui... líneas 14 a 44
        const token = localStorage.getItem("token"); // O sessionStorage.getItem("authToken")
        if (!token) {
          // Si no hay token, redirige al login
          navigate("/login");
          return;
        }
        
        const fetchUsuarios = async () => {
            try {
                const response = await fetch(
                    "https://psychic-space-goldfish-wr9qr6v7xp7p2ggxg-3001.app.github.dev/api/listado-profesionales", {
                        headers: {
                            "Authorization": `Bearer ${token}`, // Incluye el token en las cabeceras de la petición
                            "Content-Type": "application/json"
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setUsuarios(data.results || []); // Asegúrate de que `data` es un arreglo de objetos
            } catch (error) {
                console.error("Error fetching profesionales data:", error);
            }
        };


        fetchUsuarios();
        actions.getListadoProfesionales();
    }, [navigate, actions]);
// ... hasta aquí.
    return (
        <div className="container">
            <div className="row">
                {/* Sección principal con el muro */}
                <div className="col-lg-10 col-md-8 col-sm-12">
                    <TituloMuro />
                    <Feed />
                </div>

                {/* Sección lateral con los profesionales */}
                <div className="col-lg-2 col-md-4 col-sm-12">
                    <ProfesionalesLateral usuarios={store.profesionales}/>
                </div>
            </div>
        </div>
    );
};
