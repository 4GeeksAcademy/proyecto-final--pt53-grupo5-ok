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
        
        fetch("https://fuzzy-umbrella-qg4xv49r7xg3xqg5-3001.app.github.dev/api/registro", {
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
        <div className="d-flex justify-content-center align-items-center min-vh-100 py-3">
            <div className="form-container bg-white shadow rounded p-4" style={{ width: "400px" }}>
                <h1 className="text-center text-primary mb-4 ">Registro de Usuario</h1>
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
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Selecciona tu género"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                    />
                </div>
                <div className="mb-3">
                    <label>Tipo de Usuario</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            value="profesional"
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label className="form-check-label">Profesional</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            value="soporte"
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label className="form-check-label">Soporte</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            value="usuario"
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label className="form-check-label">Usuario</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Región</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Selecciona tu región"
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}
                    />
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
                    <Link to="/" className="btn btn-outline-secondary">Volver</Link>
                    <button className="btn btn-primary" onClick={handleCreateUser}>
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    );
};