import React, { useState } from "react";

// Este componente es un solo post
export const Post = ({ content, author }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="post-card">
            <h5>{author}</h5>
            <p>{content}</p>
            <button onClick={handleLike}>👍 Like ({likes})</button>
        </div>
    );
};

// Este componente es el feed (el muro) que contiene varios posts
export const Feed = () => {
    // Aquí estamos simulando posteos que eventualmente vendrían de una base de datos o backend.
    const posts = [
        { id: 1, content: "Hoy fue un gran día", author: "Juan Pérez" },
        { id: 2, content: "Me encanta programar en React", author: "Ana López" },
        { id: 3, content: "No puedo esperar a terminar mi proyecto", author: "Carlos García" }
    ];

    return (
        <div className="feed-container">
            {posts.map(post => (
                <Post key={post.id} content={post.content} author={post.author} />
            ))}
        </div>
    );
};
