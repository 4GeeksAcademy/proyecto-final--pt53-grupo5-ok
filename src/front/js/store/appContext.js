import React, { createContext, useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);


export const UserContext = createContext(null);

const UserReducer = (state, action) => {
	// Dependiendo del type de la acción realiza una tarea distinta
	switch (action.type) {
	  case "set":
		return action.payload
	  case "add":
		return [...state, action.payload];
	  case 'clear':
		return []
	  default:
		return state;
	}
  };

  
// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
	const StoreWrapper = (props) => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		// Acción para obtener usuarios profesionales
		const getListadoProfesionales = async () => {
			try {
				const response = await fetch(
					"https://psychic-space-goldfish-wr9qr6v7xp7p2ggxg-3001.app.github.dev/api/listado-profesionales"
				);
				if (!response.ok) throw new Error("Error al obtener los profesionales");

				const data = await response.json();
				setState((prevState) => ({
					...prevState,
					store: {
						...prevState.store,
						profesionales: data.results || [], // Guarda los profesionales en el estado global
					},
				}));
			} catch (error) {
				console.error("Error fetching profesionales:", error);
			}
		};

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 **/
			state.actions.getMessage(); // <---- calling this function from the flux.js actions
		}, []);

		// Agregar la acción al contexto
		useEffect(() => {
			state.actions.getListadoProfesionales = getListadoProfesionales;
		}, [state]);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
