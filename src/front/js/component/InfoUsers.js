import React from "react";
import User from "./User.png"; // Ajusta la ruta según sea necesario
import Pro from "./Pro.png";
import Sopo from "./Sopo.png";

export const InfoUsers = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={User} className="d-block w-100" alt="Usuario" />
            </div>
            <div className="col-6 text-start px-4">
              <h1>!Usuarios!</h1>
              <p>
                Si ya eres usuario, puedes ingresar fácilmente desde la barra
                superior utilizando tus credenciales. Si todavía no tienes una
                cuenta, no te preocupes, ¡es muy fácil registrarte! Solo haz
                clic en “Registrarse” y completa el formulario.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={Pro} className="d-block w-100" alt="Profesional" />
            </div>
            <div className="col-6 text-start px-4">
              <h1>¡Registro para Profesionales!</h1>
              <p>
              Si eres un doctor o psicólogo, puedes registrarte con nosotros y ofrecer tu apoyo a quienes lo necesiten. Únete a nuestra comunidad de profesionales que se dedican a ayudar a otros. Puedes registrarte fácilmente desde la barra superior. ¡Estamos encantados de tenerte a bordo!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={Sopo} className="d-block w-100" alt="Usuario" />
            </div>
            <div className="col-6 text-start px-4">
              <h1>Red de Apoyo</h1>
              <p>
              En Therapy Link, creemos en la importancia de contar con una red de apoyo sólida. Nuestra plataforma está diseñada para conectar a personas que buscan ayuda con profesionales de la salud mental, así como para fomentar un sentido de comunidad entre quienes enfrentan desafíos similares.</p>
              <small><strong>Puedes registrarte fácilmente desde la barra superior.</strong></small>
             
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};