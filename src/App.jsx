import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ImageGrid from './components/ImageGrid';
import PropagandaLeft from './components/PropagandaLeft';
import CallUs from './components/CallUs';
import PropagandaRight from './components/PropagandaRight';
import  ContactUs  from './components/Contact';
import Footer from './components/Footer';
import AutoPlayCarousel from './components/AutoPlayCarousel';
import './App.css';


function App() {

  return (
    <div classname="App">
      <Header/>

      <section id="home">
        <ImageCarousel />
      </section>
      <CallUs/>
      <PropagandaLeft />
 
      <section id="gallery">
      <ImageGrid/>
      </section>
      

      <section id="about">
        <PropagandaRight />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <AutoPlayCarousel />
      <Footer />
    </div>
  );
}

export default App;