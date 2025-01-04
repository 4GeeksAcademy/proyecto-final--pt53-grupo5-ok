import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="clearfix mt-5 text-center text-light">
			<div className="fw-bold ">
				<h>No Waitlists. 24/7 online therapy. Personalized Care.</h>
			</div>
        <p>
         <h1>You Deserve to Feel Better and Be Happy</h1>
        </p>
        <p>
         La depresión puede hacerte sentir aislado, pero estamos aquí para recordarte que siempre hay esperanza y ayuda disponible. Juntos, podemos romper el estigma, fomentar la comprensión y encontrar el camino hacia la sanación.
        </p>
       </div>
	);
};
