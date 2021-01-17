import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import { store } from './store/store';

ReactDOM.render(
	<BrowserRouter>
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
