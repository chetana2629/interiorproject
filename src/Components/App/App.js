import React from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';


const App = () => {
  return (
    <div>
    <Header/>
      <main>
        <Carousel/>
        <Contact/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
