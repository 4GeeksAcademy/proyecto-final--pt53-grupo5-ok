import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }


    return (
        <nav className="navbar navbar-expand-lg bg-transparent m-3">
            <div className="container">
                <div>
                    <a className="navbar-brand" href="/">
						<img
							src={Logo}
							alt="Our Logo"
							style={{
								width: "100px",
								height: "100px",
								borderRadius: "600%",
								boxShadow: "0 4px 8px rgba(94, 11, 11, 0.1)",
							}}
						/>
					</a>
                </div>
                <div className="collapse navbar-collapse d-flex justify-content-end menu" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {token ?
                            (
                                <li className="nav-item">
                                    <a className="nav-link active text-dark mx-3 btn-cs" aria-current="page" onClick={() => logout()}><strong>Cerrar Sesión</strong></a>
                                </li>
                            ) :
                            (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-dark register mx-3" aria-current="page" to="/register"><strong>Registrate</strong></Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link active text-dark login" aria-current="page" to="/login"><strong>Inicio Sesion</strong></Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
};''
