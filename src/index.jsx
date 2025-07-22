import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import Banner from './componentes/banner';
import Sobrenos from './componentes/sobrenos';
import Form from './componentes/form';
import Footer from './componentes/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Sobrenos />
    <Form />
    <Footer />
  </React.StrictMode>
);
