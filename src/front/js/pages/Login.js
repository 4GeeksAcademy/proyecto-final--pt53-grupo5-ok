import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {


    return (

        <div className="container formulario bg-secundary mb-3 p-4 w-100">
            <div className="titulo text-dark text-center">
                <h1 className="">¡Bienvenido!</h1>
                <h3>Inicia Sesión</h3>
            </div>
            <div className="datos text-dark mb-2">

                <label className="w-100">Correo Electrónico</label>
                <input className="w-100" type="text" placeholder="Ingresa tu correo electrónico" ></input>

                <label className="w-100">Password</label>
                <input className="w-100" type="text" placeholder="Ingresa tu Password" ></input>

            </div>
            <div className="guardar p-2 d-flex justify-content-center ">

                <button type="button" className="btn btn-primary save" >Iniciar Sesion</button>

            </div>
            <div className=" text-center ">
                <p>
                    ¿Aún no eres parte de TherapyLink?
                </p>
                <button type="button" className="btn btn-primary mb-3" to="/register" >Registrate</button>
            </div>



            <Link to="/" className="back d-flex justify-content-center text-dark">Volver a la pagina principal</Link>
        </div>
    )
}