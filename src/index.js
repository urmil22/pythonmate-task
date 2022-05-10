import './style.css'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "./context/AuthProvider"
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router> 
    <AuthProvider>
      <App />  
    </AuthProvider>
  </Router>
  </React.StrictMode>
);

