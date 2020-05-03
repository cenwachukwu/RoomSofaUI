import React from 'react';
import './Categories.scss';
import MobileSidebar from '../../MobileSidebar/Container/Container';
import Sidebar from '../../Sidebar/Sidebar';
import Footer from '../../Footer/footer';

const Categories = (props) => {
  return (
    <div className="Categories">
      <MobileSidebar />
      <div className="categoriesContainer">
        <Sidebar />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
