import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		const fetchTopics = async () => {
            try {
                const urls = [
                    "https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=540",
                    "https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=539",
                    "https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30604"
                ];

                // Hacemos las 3 llamadas a la API simultáneamente
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const data = await Promise.all(responses.map(res => res.json()));

                // Combina los resultados de las 3 respuestas
                const allTopics = data.flatMap(item => item.Result.Resources.Resource);

                setTopics(allTopics);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
        };

        fetchTopics();
    }, []);


	return (

		<div className="container mt-4">
			<div className="row">
				{topics.map((topic, index) => (
					<div className="col-md-4" key={index}>
						<Card topic={topic} /> {/* Pasamos los datos al componente Card */}
					</div>
				))}
			</div>
		</div>

	);

};

