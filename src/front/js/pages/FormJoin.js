import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


export const FormJoin = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    // const { handleGetContacts } = useContext(ContactContext)

    // const handleCreateContact = () => {

    //     fetch("https://playground.4geeks.com/contact/agendas/agendafs002/contacts", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             "name": name,
    //             "phone": phone,
    //             "email": email,
    //             "address": address
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then((res) => {
    //             if (res.ok) console.log("Contacto agregado correctamente")
    //         })
    //         .then(async () => await handleGetContacts())
    //     setName("")
    //     setPhone("")
    //     setEmail("")
    //     setAddress("")


    // }


    return (

        <div className="container formulario bg-secundary mb-3 p-4 w-100">
            <div className="titulo text-dark text-center">
                <h1 className= "">Registro de Usuario</h1>
            </div>
            <div className="datos text-dark mb-2">
                <label className="w-100">Nombre</label>
                <input className="w-100" type="text" placeholder="Ingresa tu nombre" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label className="w-100">Apellido</label>
                <input className="w-100" type="text" placeholder="Ingresa tu apellido" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="w-100">Correo Electrónico</label>
                <input className="w-100" type="text" placeholder="Ingresa tu correo electrónico" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                <label className="w-100">Fecha de Nacimiento</label>
                <input className="w-100" type="text" placeholder="Selecciona tu fecha de Nacimiento" onChange={(e) => setAddress(e.target.value)} value={address}></input>
                <label className="w-100">Genero</label>
                <input className="w-100" type="text" placeholder="Selecciona tu genero" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label className="w-100">Tipo de Usuario</label>
                <input className="w-100" type="text" placeholder="Selecciona tu tipo de usuario" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="w-100">Región</label>
                <input className="w-100" type="text" placeholder="Selecciona tu región" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                <label className="w-100">Password</label>
                <input className="w-100" type="text" placeholder="Ingresa tu Password" onChange={(e) => setAddress(e.target.value)} value={address}></input>
                <label className="w-100">Confirmar Password</label>
                <input className="w-100" type="text" placeholder="Confirma tu Password" onChange={(e) => setAddress(e.target.value)} value={address}></input>
            </div>
            <div className="guardar p-2 d-flex justify-content-end">
                <Link to="/" className="back me-3">Volver a la pagina principal</Link>
                <button type="button" className="btn btn-primary save" onClick={() => handleCreateContact()}>Registrar</button>
                
            </div>
        </div>
    )
}

