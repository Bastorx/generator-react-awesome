import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const useCreateStore =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(thunk))(createStore)
		: compose(applyMiddleware(thunk))(createStore);

const store = createStore(useCreateStore, combinedReducers);

const App = () => (
	<Provider store={store}>
		<h1>Hello world</h1>
  </Provider>
);

export default App;
