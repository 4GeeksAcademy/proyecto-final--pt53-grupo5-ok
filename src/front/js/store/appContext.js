// src/front/js/store/appContext.js
import React, { createContext, useState, useEffect } from 'react';
import backendURL from '../components/backendURL';

export const Context = createContext();

const AppContextProvider = ({ children }) => {
  const [store, setStore] = useState({
    demo: [
      { title: "First item", background: "white", initial: "blue" },
      { title: "Second item", background: "white", initial: "red" }
    ]
  });

  const actions = {
    changeColor: (index, color) => {
      const newDemo = store.demo.map((item, i) => {
        if (i === index) item.background = color;
        return item;
      });
      setStore({ ...store, demo: newDemo });
    }
  };

  useEffect(() => {
    fetch(`${backendURL}/data`)
      .then(response => response.json())
      .then(data => console.log(data)) // Aquí puedes manejar los datos como desees
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;