import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { App } from "./App"
import Codes from './Codes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Codes />
    <App ad="idris" soyad="veliyev" />
    <App ad="eyyub" soyad="bayramov" />
    <App ad="pakize" soyad="testov" />
    <div>
      <h3>Men react oyrenirem!</h3>
    </div>
  </div>
);
