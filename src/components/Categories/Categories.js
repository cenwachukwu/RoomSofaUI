import React from 'react';
import './Categories.scss';
import Sidebar from '../Sidebar/Sidebar';

const Categories = (props) => {
  return (
    <div className="Categories">
      <div className="categoriesContainer">
        <Sidebar />
      </div>
    </div>
  );
};

export default Categories;
