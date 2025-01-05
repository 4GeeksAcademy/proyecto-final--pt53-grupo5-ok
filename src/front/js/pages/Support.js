import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


export const Support = () => {


    return (

        <div className="container formulario bg-secundary p-5 ">
            <div className="titulo text-dark text-center">
                <h1 className= "">¿Cómo puedo participar y compartir esta campaña?</h1>
            </div>
            <div className="datos text-dark mb-2 text-red">
               
               <h1><strong>Crisis? Find Help Now</strong></h1>
<h>Sometimes help can’t wait. If you or someone you know is in danger or having a medical emergency, call 911 or go to your nearest emergency room.</h>


                
            </div>
            <div className="guardar p-2 d-flex justify-content-end">
                
                <button type="button" className="btn btn-primary save" >Iniciar Sesion</button>
                
            </div>
            <div className="d-flex">
                <p>
                    ¿Aún no eres parte de ........? 
                </p>
                <button type="button" className="btn btn-primary" to="/register" >Registrate</button>
            </div>



            <Link to="/" className="back me-3">Volver a la pagina principal</Link>
        </div>
    )
}