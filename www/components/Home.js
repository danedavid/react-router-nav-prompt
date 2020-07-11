import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    Home
    <div><Link to="/render-prop-form">Render prop Form</Link></div>
    <div><Link to="/form">Form</Link></div>
    <div><Link to="/about">About</Link></div>
  </div>
);