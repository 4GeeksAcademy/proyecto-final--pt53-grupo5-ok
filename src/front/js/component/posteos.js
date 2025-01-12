import React, { useState } from "react";

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

// Este componente es el feed (el muro) que contiene varios posts
export const Feed = () => {
    // Aquí estamos simulando posteos que eventualmente vendrían de una base de datos o backend.
    const [posts, setPosts] = useState([
        { id: 1, content: "Hoy fue un gran día", author: "Juan Pérez" },
        { id: 2, content: "Me encanta programar en React", author: "Ana López" },
        { id: 3, content: "No puedo esperar a terminar mi proyecto", author: "Carlos García" }
    ]);

    const [newPost, setNewPost] = useState(""); // Estado para el contenido del nuevo post
    const [author, setAuthor] = useState(""); // Estado para el autor del post

    // Función para manejar el envío del nuevo post
    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() === "" || author.trim() === "") return;

        const newPostObj = {
            id: posts.length + 1,
            content: newPost,
            author: author,
        };

        setPosts([newPostObj, ...posts]); // Agregamos el nuevo post al inicio de la lista
        setNewPost(""); // Limpiamos el campo de texto
        setAuthor("");  // Limpiamos el autor
    };


    return (
        <div className="container mt-5 d-flex justify-content-center"> 
            <div className="w-100" style={{ maxWidth: "800px"}}> 
                {/* Formulario para crear un nuevo post, envuelto en una card */}
                <div className="card w-100 mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Crear un nuevo post</h5>
                        <form onSubmit={handlePostSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tu nombre"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
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