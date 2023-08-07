import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './features/authentication/Login';
import HomePage from './features/base/HomePage';
import Instagram from './features/base/Instagram';
import Portal from './features/administrator/Portal';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>

    <Routes>

          <Route path = "/" element={<App />}>
          
          <Route path = "/" element={<HomePage />} />

          <Route path = "/instagram" element={<Instagram />} />

          <Route path = "/authentication/login" element={<Login />} />

          <Route path = "/portal" element={<Portal />} />

          </Route></Routes>

    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);