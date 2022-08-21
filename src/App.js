import React from 'react';

import { Footer, Games, About, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <About />
    <CTA />
    <Games />
    <Footer />
  </div>
);

export default App;
