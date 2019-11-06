import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import Create Store
import { createStore } from "redux";
//Import Provider
import { Provider } from "react-redux";
//Import Reducer from file path
import { carReducer } from "./reducers";


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
