import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddUser = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [type, setType] = useState("");
    const [region, setRegion] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [showUploadField, setShowUploadField] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);

    const navigate = useNavigate();

    const handleCreateUser = async () => {
        const errors = [];

        // Validar cada campo
        if (!name.trim()) errors.push("Nombre");
        if (!lastName.trim()) errors.push("Apellido");
        if (!email.trim()) errors.push("Correo Electrónico");
        if (!birthdate.trim()) errors.push("Fecha de Nacimiento");
        if (!gender.trim()) errors.push("Género");
        if (!type.trim()) errors.push("Tipo de Usuario");
        if (!region.trim()) errors.push("Región");
        if (!password.trim()) errors.push("Contraseña");
        if (!confirmPassword.trim()) errors.push("Confirmar Contraseña");
        if (password && confirmPassword && password !== confirmPassword) {
            errors.push("Las contraseñas no coinciden");
        }

        if (errors.length > 0) {
            setErrorMessages(errors);
            return;
        }

        let pdfUrl = null;
        if (type === "profesional" && pdfFile) {
            const formData = new FormData();
            formData.append("file", pdfFile);
            formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
            formData.append("folder", "profesionales_docs");

            try {
                console.log("Uploading file to Cloudinary...");
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await response.json();
                if (response.ok) {
                    pdfUrl = data.secure_url;
                    console.log("File uploaded successfully:", pdfUrl);
                } else {
                    console.error("Error al subir archivo:", data.error.message);
                    alert("Error al subir el documento PDF.");
                    return;
                }
            } catch (error) {
                console.error("Error al subir a Cloudinary:", error);
                alert("Error inesperado al subir el archivo.");
                return;
            }
        }

        const data = {
            firstname: name,
            lastname: lastName,
            email: email,
            birthdate: birthdate,
            gender: gender,
            type: type,
            region: region,
            password: password,
            pdfUrl: pdfUrl // Añade la URL del PDF aquí si es necesario
        };

        try {
            const res = await fetch("https://psychic-space-goldfish-wr9qr6v7xp7p2ggxg-3001.app.github.dev/api/registro", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                alert("Registro Exitoso");
                console.log("Usuario agregado correctamente");
                navigate("/login"); // Redirige después de un registro exitoso
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al registrar usuario");
            }
        } catch (error) {
            console.warn(error);
        }

        // Resetear los campos
        setName("");
        setLastName("");
        setEmail("");
        setBirthdate("");
        setGender("");
        setType("");
        setRegion("");
        setPassword("");
        setConfirmPassword("");
        setPdfFile(null);
        setShowUploadField(false);
        setErrorMessages([]);
    };

    return (
        <div className="d-flex justify-content-center align-items-center py-3">
            <div className="form-container shadow p-4 formRegistro" style={{ width: "400px" }}>
                <h1 className="text-center mb-4 tituloJoin">Registro de Usuario</h1>
                {errorMessages.length > 0 && (
                    <div className="alert alert-danger">
                        <h5>Por favor completa los siguientes campos:</h5>
                        <ul>
                            {errorMessages.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
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
                        required
                        onChange={(e) => setBirthdate(e.target.value)}
                        value={birthdate}
                    />
                </div>
                <div className="mb-3">
                    <label>Género</label>
                    <select
                        id="genero"
                        className="w-100 p-2 rounded form-control"
                        name="genero"
                        required
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="m">Masculino</option>
                        <option value="f">Femenino</option>
                        <option value="ne">Prefiero no especificarlo</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Tipo de Usuario</label>
                    <select
                        id="typeUser"
                        className="w-100 p-2 rounded form-control"
                        name="typeUser"
                        required
                        onChange={(e) => {
                            setType(e.target.value);
                            setShowUploadField(e.target.value === "profesional");
                        }}
                    >
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="profesional">Profesional</option>
                        <option value="apoyo">Apoyo</option>
                        <option value="usuario">Usuario</option>
                    </select>
                </div>
                {showUploadField && (
                    <div className="mb-3">
                        <label>Subir Documento (PDF)</label>
                        <input
                            type="file"
                            accept="application/pdf"
                            className="form-control"
                            onChange={(e) => setPdfFile(e.target.files[0])}
                        />
                    </div>
                )}
                <div className="mb-3">
                    <label>Región</label>
                    <select
                        id="region"
                        className="w-100 p-2 rounded form-control"
                        name="region"
                        required
                        onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="XV">XV Región de Arica y Parinacota</option>
                        <option value="I">I Región de Tarapacá</option>
                        <option value="II">II Región de Antofagasta</option>
                        <option value="III">III Región de Atacama</option>
                        <option value="IV">IV Región de Coquimbo</option>
                        <option value="V">V Región de Valparaíso</option>
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
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingresa tu password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirma tu Contraseña"
                        required
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