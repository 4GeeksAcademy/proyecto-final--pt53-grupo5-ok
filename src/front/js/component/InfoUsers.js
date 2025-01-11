import React from "react";
import User from "./User.jpg"; // Ajusta la ruta según sea necesario
import Pro from "./Pro.jpg";
import Sopo from "./Sopo.jpg";

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
              <img src={User} className="d-block w-100 imgcar" alt="Usuario" />
            </div>
            <div className="col-6 text-start px-4">
              <h1 className="titulocar p-top-5">¡Usuarios!</h1>
              <p>
              Si estás lidiando con momentos difíciles, ansiedad, depresión o cualquier desafío relacionado con tu bienestar emocional, aquí encontrarás un espacio seguro y confiable para buscar apoyo. 
              <br/>
              Therapy Link está diseñado para ayudarte a conectar con profesionales, personas como tú o quienes ya han pasado por lo que estás viviendo hoy. Esto te ayudará a crear una red de apoyo sin límites y marcar una diferencia en tu vida. No tienes que enfrentarlo solo; estamos aquí para acompañarte en cada paso de tu camino hacia el bienestar.
              <br/>
              <strong>Puedes registrarte fácilmente desde la barra superior.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={Pro} className="d-block w-100 imgcar" alt="Profesional" />
            </div>
            <div className="col-6 text-start px-4">
              <h1 className="titulocar">¡Registro para Profesionales!</h1>
              <p>
              Si eres médico o psicólogo, puedes registrarte con nosotros y ofrecer tu apoyo a quienes lo necesiten.
              <br/>
              Únete a nuestra comunidad de profesionales que se dedican a ayudar a otros. 
              <br/>
              Puedes registrarte fácilmente desde la barra superior. 
              <br/>
              ¡Estamos encantados de tenerte a bordo!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={Sopo} className="d-block w-100 imgcar" alt="Usuario" />
            </div>
            <div className="col-6 text-start px-4">
              <h1 className="titulocar">¡Red de Apoyo!</h1>
              <p>
              En Therapy Link, creemos en la importancia de contar con una red de apoyo sólida. Nuestra plataforma está diseñada para conectar a personas que buscan ayuda con profesionales de la salud mental, así como para fomentar un sentido de comunidad entre quienes enfrentan desafíos similares.</p>
              <strong>Puedes registrarte fácilmente desde la barra superior.</strong>
             
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