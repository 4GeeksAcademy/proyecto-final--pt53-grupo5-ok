import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ topic }) => {
    const navigate = useNavigate();

    const handleLeerMas = () => {
        navigate(`/detalles/${topic.Id}`)
    };

    const imageUrl = topic?.ImageUrl || "https://odphp.health.gov/sites/default/files/2023-03/Screening-tests-talk-to-doc-1267603624.jpg";

    return (
        <div className="container d-flex justify-content-between">
            <div className="card" style={{ width: "18rem", borderRadius: "30px" }}>
                <img src={imageUrl} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }} />
                <div className="card-body">
                    <h5 className="card-title">{topic.Title}</h5>
                    <p className="card-text">{topic?.DescriptionText?.substring(0, 100) || "Descripción no disponible"}</p>
                    <button onClick={handleLeerMas} className="btn btn-primary">
                        Leer más
                    </button>
                </div>
            </div>

            
        </div>
    );

};

