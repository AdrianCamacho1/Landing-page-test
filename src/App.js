import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from "./components/banner/Banner.jsx"
import { Slider } from './components/banner/Slider.jsx';

import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
    </div>
  );
}

export default App;