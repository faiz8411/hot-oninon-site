import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu-container">
      <div>
        <Link><h4>breakfast</h4></Link>

      </div>
      <div>
        <Link><h4>Launch</h4></Link>
      </div>
      <div>
        <Link><h4 className="text-danger">Dinner</h4></Link>
      </div>
    </div>
  );
};

export default Menu;