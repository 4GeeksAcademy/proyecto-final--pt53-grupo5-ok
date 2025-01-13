import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        try {
            const response = await fetch("https://fictional-space-trout-4jg496gvvg4xfqr99-3001.app.github.dev/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();

                // Almacena el token o información del usuario en el almacenamiento local si es necesario
                localStorage.setItem("token", data.token);

                // Redirige a la vista "/home"
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

        <div className="d-flex justify-content-center align-items-center">
            <div className="form-container shadow p-4 formLogin" style={{ width: "400px" }}>
                <div className="text-center">
                    <h1 className=" mb-2 tituloLogin">¡Bienvenido!</h1>
                    <h3 className="mb-4 subtLogin">Inicia Sesión</h3>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="datos text-dark mb-2">

                        <label className="w-100">Correo Electrónico</label>
                        <input
                            className="form-control w-100"
                            type="email"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className="w-100">Contraseña</label>
                        <input
                            className="form-control w-100 mb-3"
                            type="password"
                            placeholder="Ingresa tu Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100 btnLogin text-dark">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )

}
