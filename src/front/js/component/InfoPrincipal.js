import React from "react";
import apoyo from "./apoyo.png";


export const InfoPrincipal = () => {
    return (

        <div className="row mb-5 mt-5">
            <div className="col-6">
                <h3 className="texto1">BIENVEND@S A:</h3>
                <h1 className="texto2">THERAPY LINK</h1>
                <p className="texto3">En Therapy Link, nuestra misión es brindar un espacio seguro y confiable para que encuentres el apoyo necesario en tu camino hacia el bienestar mental. 
                    <br/>
                    Porque cuidar de tu mente es tan importante como cuidar de tu cuerpo, en Therapy Link estamos aquí para acompañarte en cada paso.
                    <br/>
                    ¡Únete ahora y comienza tu camino hacia una mejor versión de ti!</p>
                    
                <h3 className="texto6 my-3">AQUÍ PODRÁS: </h3>
                    <p>
                    • Informarte sobre temas como la depresión, ansiedad y otros aspectos importantes de la salud mental.
                    <br/>
                    • Contactar líneas de ayuda y especialistas para obtener orientación personalizada.
                    <br/>
                    • Unirte a nuestra comunidad como paciente, doctor o soporte, compartiendo experiencias y brindando apoyo mutuo.
                    <br/>
                    • Agendar citas con profesionales calificados de manera fácil y rápida.Postear y recibir apoyo, creando un entorno colaborativo y empático.
                    <br/>                    
                </p>                
            </div>
            <div className="col-6">
                <img src={apoyo}
                    alt="imagen apoyo"
                    style={{
                        width: "650px",
                        height: "auto",



                    }}
                />
            </div>
        </div>
    );
};