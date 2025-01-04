import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


export const Professional = () => {


    return (

        <div className="container formulario bg-secundary mb-3 p-4 w-100">
            <div className="titulo text-dark text-center">
                <h1 className= "">Registro de Usuario</h1>
            </div>
            <div className="datos text-dark mb-2">
               
                <label className="w-100">Correo Electrónico</label>
                <input className="w-100" type="text" placeholder="Ingresa tu correo electrónico" ></input>
                
                <label className="w-100">Password</label>
                <input className="w-100" type="text" placeholder="Ingresa tu Password" ></input>
                
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