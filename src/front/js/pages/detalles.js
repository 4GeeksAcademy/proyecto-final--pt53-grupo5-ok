import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detalles = () => {
    const { id } = useParams(); 
    const [topic, setTopic] = useState(null);
  
    useEffect(() => {
      
      fetch(`https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=${id}`)
        .then(response => response.json())
        .then(data => {
          
          setTopic(data.Result.Resources.Resource[0]);
        })
        .catch(error => console.log('Error al cargar los detalles:', error));
    }, [id]);
  
    if (!topic) {
      return <p>Cargando detalles...</p>; 
    }

    const sections = topic.Sections?.section || [];
  
    return (
      <div className="container mt-4">
        <h2>{topic.Title}</h2> 
        <p>{topic.Description}</p> 
        <h3>Información</h3>
            {sections.length > 0 ? (
                <ul>
                    {sections.map((sectionItem, index) => (
                        <li key={index}>
                            <h4>{sectionItem.Title}</h4>
                            <p>{sectionItem.Description}</p>

                            {/* Si existe contenido, lo mostramos */}
                            {sectionItem.Content && (
                                <div>
                                    <h5>Contenido:</h5>
                                    <p>{sectionItem.Content}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay secciones disponibles.</p>
            )}
      </div>
    );
  };
  
  