import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav.jsx'
import Main from './main.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
let currentYear = new Date().getFullYear();
root.render(
    <>
      <Nav />
      <Main />
      <footer>
        <h4 id='margin'>© {currentYear} GIGI's development. All rights reserved.</h4>
        </footer>
    </>
);
