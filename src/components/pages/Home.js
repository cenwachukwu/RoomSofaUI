import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Carrousel from '../Carrousel/carrousel';

const Home = (props) => {
  return (
    <div className="Home">
      <Navbar />
      <Carrousel />
      <Footer />
    </div>
  );
};

export default Home;
