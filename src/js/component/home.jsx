import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Cards from './Cards'; 
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
