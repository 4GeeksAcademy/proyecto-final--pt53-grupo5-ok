import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://fuzzy-umbrella-qg4xv49r7xg3xqg5-3001.app.github.dev/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/inicio");
            } else {
                const errorMessage = await response.text();
                setError(errorMessage || "Credenciales incorrectas");
            }
        } catch (err) {
            setError("Ocurrió un error. Inténtalo de nuevo.");
            console.error(err);
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <div className="form-container bg-white shadow rounded p-4" style={{ width: "400px" }}>
                <div className="text-center">
                    <h1 className="text-primary mb-2">¡Bienvenido!</h1>
                    <h3 className="mb-4">Inicia Sesión</h3>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label>Correo Electrónico</label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};