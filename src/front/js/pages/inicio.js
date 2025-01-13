import React, { useEffect } from "react";
import { Feed } from "../component/posteos";  // Importa el Feed desde el componente de posteos
import { useNavigate } from "react-router-dom";
import { TituloMuro } from "../component/TituloMuro";

export const Inicio = () => {
    const navigate = useNavigate();

    const fetchInicio = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        fetch("https://fuzzy-umbrella-qg4xv49r7xg3xqg5-3001.app.github.dev/api/inicio", {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                console.log("Inicio data:", data);
            })
            .catch(error => console.error("Error fetching inicio data:", error));
    };

    useEffect(() => {
        fetchInicio();
    }, []);


    return (
        <>
            <TituloMuro />
            <div>
                <Feed />  {/* Renderiza el Feed con los posteos */}
            </div>
        </>
    );
};

