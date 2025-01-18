import React, { useEffect,useState } from "react";
import { Feed } from "../component/posteos";  // Importa el Feed desde el componente de posteos
import { useNavigate } from "react-router-dom";
import { TituloMuro } from "../component/TituloMuro";
import { ProfesionalesLateral } from "../component/LateralProfesionales";


export const Inicio = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios

    const fetchInicio = () => {
        const token = localStorage.getItem("token");

         if (!token) {
            navigate("/login");
             return;
         }

        fetch("https://psychic-space-goldfish-wr9qr6v7xp7p2ggxg-3001.app.github.dev//api/inicio", {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Datos de la API:", data);
                setUsuarios(data.usuarios || []); // Asegúrate de que `data.usuarios` es el formato correcto
            })
            .catch(error => console.error("Error fetching inicio data:", error));
    };

    useEffect(() => {
        fetchInicio();
    }, []);


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
                    <ProfesionalesLateral usuarios={usuarios} />
                </div>
            </div>
        </div>
    );
};

