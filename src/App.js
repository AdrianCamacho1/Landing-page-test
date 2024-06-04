import React from 'react';
import { Navbar } from './components/Navbar1.jsx';
import { Banner } from './components/banner/Banner.jsx';
import { Slider } from './components/banner/Slider.jsx';
import { Service } from './components/Service.jsx';
import { DesignDev } from './components/designDev.jsx';
import { Subscription } from './components/Subscription.jsx';
// import '../tailwind.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Slider />
        <Service />
        <DesignDev />
        <Subscription />
      </main>
    </div>
  );
}

export default App;