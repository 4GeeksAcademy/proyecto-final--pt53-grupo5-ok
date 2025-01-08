import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../store/appContext";


export const AddUser = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("") 
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState ("")    
    const [gender, setGender] = useState ("")
    const [type, setType] = useState ("")
    const [region, setRegion] = useState ("")
    const [password, setPassword] = useState ("")

    const { handleGetUsers } = useContext(UserContext)

    const handleCreateUser = () => {

        fetch("https://fuzzy-umbrella-qg4xv49r7xg3xqg5-3001.app.github.dev/registro", {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "lastName": lastName,
                "email": email,
                "birthdate": birthdate,
                "gender": gender,
                "type": type,
                "region": region,
                "password": password

            }),

            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) console.log("Usuario agregado correctamente")
            })
            .then(async () => await handleGetUsers())
        setName("")
        setLastName("")
        setEmail("")
        setBirthdate("")
        setGender("")
        setType("")
        setRegion("")
        setPassword("")



    }


    return (

        <div className="container formulario bg-secundary mb-3 p-4 w-100">
            <div className="titulo text-dark text-center">
                <h1 className="">Registro de Usuario</h1>
            </div>
            <div className="datos text-dark mb-2">
                <label className="w-100">Nombre</label>
                <input className="w-100" type="text" placeholder="Ingresa tu nombre" required onChange={(e) => setName(e.target.value)} value={name}></input>
                <label className="w-100">Apellido</label>
                <input className="w-100" type="text" placeholder="Ingresa tu apellido" required onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                <label className="w-100">Correo Electrónico</label>
                <input className="w-100" type="text" placeholder="Ingresa tu correo electrónico" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="w-100">Fecha de Nacimiento</label>
                <input className="w-100" type="text" placeholder="Selecciona tu fecha de Nacimiento" onChange={(e) => setBirthdate(e.target.value)} value={birthdate}></input>
                <label className="w-100">Genero</label>
                <input className="w-100" type="text" placeholder="Selecciona tu genero" onChange={(e) => setGender(e.target.value)} value={gender}></input>
                <label className="w-100 my-1">Tipo de Usuario</label>
                <div className="form-check ms-5" required>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Profesional
                        </label>
                </div>
                <div className="form-check ms-5">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Soporte
                        </label>
                </div>
                <div className="form-check ms-5 mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Usuario
                        </label>
                </div>
                <label className="w-100">Región</label>
                <input className="w-100" type="text" placeholder="Selecciona tu región" onChange={(e) => setRegion(e.target.value)} value={region}></input>
                <label className="w-100">Password</label>
                <input className="w-100" type="text" placeholder="Ingresa tu Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <label className="w-100">Confirmar Password</label>
                <input className="w-100" type="text" placeholder="Confirma tu Password" onChange={(e) => setAddress(e.target.value)} value={address}></input>
            </div>
            <div className="guardar p-2 d-flex justify-content-end">
                <Link to="/" className="back me-3 text-dark">Volver a la pagina principal</Link>
                <button type="button" className="btn btn-primary save" onClick={() => handleCreateUser()}>Registrar</button>

            </div>
        </div>
    )
}

