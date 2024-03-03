import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import {Provider} from "react-redux";
import {store} from './store/store'
import Router from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
	  <Router/>
   </Provider>
);
