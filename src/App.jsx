import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home';
import Menu from './components/Home/Menu/Menu'
import GridLoaderComponent from './components/Home/GridLoaderComponent';
import Playbook from './components/PlayBook/Playbook';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css';
import { toggleMenu } from './redux/activeComponentSlice';
import Solution from './components/Home/Menu/Solution';
import Service from './components/Home/Menu/Service';
import Experties from './components/Home/Menu/Experties';
import Industrie from './components/Home/Menu/Industrie';
import About from './components/Home/Menu/About';
import CookieConsentBanner from "./components/Cookie/CookieConsentBanner"


function App() {
  const componentsVisibility = useSelector((state) => state.activeComponent.componentsVisibility);




  // Dynamically render active components
  const renderComponent = () => {
    console.log('Current component visibility state:', componentsVisibility);

    const components = [];

    // Check if each component is active and render it
    if (componentsVisibility.Playbook) components.push(<Playbook key="Playbook" />);
    if (componentsVisibility.Contact) components.push(<Contact key="Contact" />);
    if (componentsVisibility.Solution) components.push(<Solution key="Solution" />);
    if (componentsVisibility.Service) components.push(<Service key="Service" />);
    if (componentsVisibility.Experties) components.push(<Experties key="Experties" />);
    if (componentsVisibility.Industrie) components.push(<Industrie key="Industrie" />);
    if (componentsVisibility.About) components.push(<About key="About" />);

    return components;
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Smart Solutions for Industry 4.0</title>
        <meta
          name="description"
          content="Explore innovative solutions for smart factories and cities. Enhance operational efficiency and embrace digital transformation."
        />
        <meta name="keywords" content="Smart Factory, Industry 4.0, Smart City Solutions, Automation Technologies" />
        <meta name="author" content="Vijay Khupse" />
      </Helmet>
      <div>
        <Home handleMenuClick={toggleMenu} /> {/* Pass toggleMenu to Home */}
        {/* {isMenuOpen && <Menu handleMenuItem={handleMenuItem} />} Render Menu only when isMenuOpen is true */}
        {renderComponent()} {/* Dynamically render the active component */}
        <Footer />
        <CookieConsentBanner />
      </div>
    </HelmetProvider>
  );
}

export default App;
