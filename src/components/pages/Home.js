import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Carrousel from '../Carrousel/carrousel';
import PillBox from '../HomePagePills/homePagePills';

const Home = (props) => {
  return (
    <div className="Home">
      <Navbar />
      <Carrousel />
      <PillBox />
      <Footer />
    </div>
  );
};

export default Home;
