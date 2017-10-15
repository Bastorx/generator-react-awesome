import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import combinedReducers from "../reducers";
import { WINDOW_RESIZE } from "../actions/action-types";

import Screen from "./screen";

const composed =
	process.env.NODE_ENV === "development"
		? composeWithDevTools(applyMiddleware(thunk, promiseMiddleware()))
		: compose(applyMiddleware(thunk, promiseMiddleware()));

const store = createStore(combinedReducers, composed);
persistStore(store, { whitelist: ["windowState"] }, () => {});
window.addEventListener("resize", () => {
	store.dispatch({
		type: WINDOW_RESIZE,
		windowHeight: window.innerHeight,
		windowWidth: window.innerWidth
	});
});

const App = () => (
	<Provider store={store}>
		<Screen />
	</Provider>
);

export default App;
