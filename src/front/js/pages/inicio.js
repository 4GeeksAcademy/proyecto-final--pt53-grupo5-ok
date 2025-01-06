import React from "react";
import { Feed } from "../component/posteos";  // Importa el Feed desde el componente de posteos

export const Inicio = () => {
    return (
        <div className="container">
            <h2>hOLAAAA</h2>
            <Feed />  {/* Renderiza el Feed con los posteos */}
        </div>
    );
};