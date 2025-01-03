import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = () => {

  return (
    <div className="container d-flex justify-content-between">
    <div className="card" style={{width: "18rem"}}>
        <img src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Leer Más...</a>
        </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
        <img src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Leer Más...</a>
        </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
        <img src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Leer Más...</a>
        </div>
    </div>
    </div>
  );

};

