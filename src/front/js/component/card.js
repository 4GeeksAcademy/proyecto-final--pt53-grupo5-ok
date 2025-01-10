import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ topic }) => {
    const navigate = useNavigate();

    const handleLeerMas = () => {
        navigate(`/detalles/${topic.Id}`)
    };

    const imageUrl = topic?.ImageUrl || "https://odphp.health.gov/sites/default/files/2023-03/Screening-tests-talk-to-doc-1267603624.jpg";

    return (

        <div className="container d-flex justify-content-between cards-container">
            <div className="container  align-items-stretch ">
                <div className="card" style={{ width: "18rem", height: "500px", borderRadius: "30px" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px", objectFit: "cover", height: "18rem" }} />
                    <div className="card-body">
                        <h5 className="card-title titulocard">{topic.Title}</h5>
                        <button onClick={handleLeerMas} className="btn btn-primary btnCard text-dark">
                            <strong>APRENDE MAS AQUÍ</strong>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

};

