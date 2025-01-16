import React, { useState, useEffect } from "react";

// Este componente es un solo post
export const Post = ({ content, author }) => {
    const [likes, setLikes] = useState(0);
    

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="card w-100 mb-3">
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text textolike">{content}</p>
                <button className="btn btn-like" onClick={handleLike}>
                    👍 Like ({likes})
                </button>
            </div>
        </div>
    );
};

// Función para decodificar el token JWT y extraer el payload (donde suele estar la info del usuario)
const decodeJWT = (token) => {
    try {
        const base64Url = token.split('.')[1]; // Extraemos la parte del payload
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error("Error decodificando el token", error);
        return null;
    }
};

// Este componente es el feed (el muro) que contiene varios posts
export const Feed = () => {
    // Función para obtener el nombre del usuario desde el token JWT almacenado en localStorage
    const getUserNameFromToken = () => {
        const token = localStorage.getItem("token"); // Asumiendo que el token se guarda con la clave "token"
        if (token) {
            const decoded = decodeJWT(token);
            console.log("Token decodificado:", decoded);
            return decoded?.name || "Usuario Anónimo"; // El nombre del usuario suele estar en el payload como "name"
        }
        return "Usuario Anónimo";
    };

    const [posts, setPosts] = useState([
        { id: 1, content: "Hoy fue un gran día", author: "Juan Pérez" },
        { id: 2, content: "Me encanta programar en React", author: "Ana López" },
        { id: 3, content: "No puedo esperar a terminar mi proyecto", author: "Carlos García" }
    ]);

    const [newPost, setNewPost] = useState(""); // Estado para el contenido del nuevo post
    const [author, setAuthor] = useState(getUserNameFromToken()); // Usar el nombre del usuario desde el token

    // Función para manejar el envío del nuevo post
    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() === "") return; // Validamos que no esté vacío

        const newPostObj = {
            id: posts.length + 1,
            content: newPost,
            author: author, // Se usa el nombre del usuario autenticado
        };

        setPosts([newPostObj, ...posts]); // Agregamos el nuevo post al inicio de la lista
        setNewPost(""); // Limpiamos el campo de texto
    };

    return (
        <div className="container mt-5 d-flex justify-content-start">
            <div className="w-100" >
                {/* Formulario para crear un nuevo post, ya no pedimos el nombre */}
                <div className="card w-100 mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Crear un nuevo post</h5>
                        <form onSubmit={handlePostSubmit}>
                            <div className="mb-3">
                                {/* Mostrar el nombre del usuario autenticado */}
                                <p><strong>Posteando como:</strong> {author}</p>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control textopost"
                                    placeholder="Escribe algo..."
                                    value={newPost}
                                    onChange={(e) => setNewPost(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-post">Postear</button>
                        </form>
                    </div>
                </div>

                {/* Mostrar los posteos en formato Bootstrap card */}
                {posts.map(post => (
                    <Post key={post.id} content={post.content} author={post.author} />
                ))}
            </div>
        </div>
    );
};
