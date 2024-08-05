import React from 'react';
import Navbar from './Navbar'; // Ajusta la ruta según la ubicación de tu archivo
import Jumbotron from './Jumbotron'; // Ajusta la ruta según la ubicación de tu archivo
import Cards from './Cards'; // Ajusta la ruta según la ubicación de tu archivo
import Footer from './Footer'; // Ajusta la ruta según la ubicación de tu archivo
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap
import '../../styles/index.css'; // Importación de estilos personalizados

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
