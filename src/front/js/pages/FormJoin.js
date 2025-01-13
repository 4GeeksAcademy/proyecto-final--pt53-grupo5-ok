import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../store/appContext";


export const AddUser = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("")
    const [type, setType] = useState("")
    const [region, setRegion] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const handleCreateUser = () => {

        if (password !== confirmPassword) {
            alert("las contraseñas no coinciden");
            return;
        }
        const data = {
            firstname: name,
            lastname: lastName,
            email: email,
            birthdate: birthdate,
            gender: gender,
            type: type,
            region: region,
            password: password
        }
        console.log(data)

        fetch("https://fictional-space-trout-4jg496gvvg4xfqr99-3001.app.github.dev/api/registro", {
            method: "POST",
            body: JSON.stringify(data),

            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) {
                    console.log("Usuario agregado correctamente");
                    navigate("/login"); // Redirige después de un registro exitoso
                } else {
                    return res.json().then((errorData) => {
                        throw new Error(errorData.message || "Error al registrar usuario");
                    });
                }
            })
            .catch((error) => console.warn(error))



        setName("")
        setLastName("")
        setEmail("")
        setBirthdate("")
        setGender("")
        setType("")
        setRegion("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="d-flex justify-content-center align-items-center  py-3 ">
            <div className="form-container  shadow  p-4 formRegistro" style={{ width: "400px" }}>
                <h1 className="text-center mb-4 tituloJoin">Registro de Usuario</h1>
                <div className="mb-3">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingresa tu nombre"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label>Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingresa tu apellido"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div className="mb-3">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingresa tu correo electrónico"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setBirthdate(e.target.value)}
                        value={birthdate}
                    />
                </div>
                <div className="mb-3">
                    <label>Género</label>
                    <select id="genero" className="w-100 p-2 rounded form-control" name="genero" required onChange={(e) => setGender(e.target.value)}>
                        <option value="" disbled selected>Selecciona una opción</option>
                        <option value="m">Masculino</option>
                        <option value="f">Femenino</option>
                        <option value="ne">Prefieron no especificarlo</option>

                    </select>

                </div>
                <div className="mb-3">
                    <label>Tipo de Usuario</label>
                    <select id="typeUser" className="w-100 p-2 rounded form-control" name="typeUser" required onChange={(e) => setType(e.target.value)}>
                        <option value="" disbled selected>Selecciona una opción</option>
                        <option value="profesional">Profesional</option>
                        <option value="apoyo">Apoyo</option>
                        <option value="usuario">Usuario</option>

                    </select>
                </div>
                <div className="mb-3">
                    <label>Región</label>
                    <select id="region" className="w-100 p-2 rounded form-control" name="region" required onChange={(e) => setRegion(e.target.value)}>
                        <option value="" disbled selected>Selecciona una opción</option>
                        <option value="XV">XV Región de Arica y Parinacota</option>
                        <option value="I">I Región de Tarapacá</option>
                        <option value="II">II Región de Antofagasta</option>
                        <option value="III">III Región de Atacama</option>
                        <option value="IV">IV Región de Coquimbo</option>
                        <option value="V">V Región de Valaparaíso</option>
                        <option value="RM">Región Metropolitana</option>
                        <option value="VI">VI Región del Libertador General Bernardo O’Higgins</option>
                        <option value="VII">VII Región del Maule</option>
                        <option value="XVI">XVI Región de Ñuble</option>
                        <option value="VIII">VIII Región del Biobío</option>
                        <option value="IX">IX Región de La Araucanía</option>
                        <option value="XIV">XIV Región de Los Ríos</option>
                        <option value="X">X Región de Los Lagos</option>
                        <option value="XI">XI Región de Aysén del General Carlos Ibáñez del Campo</option>
                        <option value="XII">XII Región de Magallanes y de la Antártica Chilena</option>

                    </select>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingresa tu password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirmar Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirma tu password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="btn btn-outline-secondary btnVolver text-dark">Volver</Link>
                    <button className="btn btn-primary btnRegistrar text-dark" onClick={handleCreateUser}>
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    );
};