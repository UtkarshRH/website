import React, { useState } from 'react';
import { Element } from 'react-scroll';
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
import Career from './components/Home/Menu/Career';


function App() {
  const componentsVisibility = useSelector((state) => state.activeComponent.componentsVisibility);




  // Dynamically render active components
  const renderComponent = () => {
    console.log('Current component visibility state:', componentsVisibility);

    const components = [];

    // Check if each component is active and render it
    if (componentsVisibility.Playbook) components.push(<Playbook key="Playbook" />);
    if (componentsVisibility.Contact) components.push(<Element name="Contact" key="Contact"><Contact /></Element>);
    if (componentsVisibility.Solution) components.push(<Element name="Solution" key="Solution"><Solution /></Element>);
    if (componentsVisibility.Service) components.push(<Element name="Service" key="Service"><Service /></Element>);
    if (componentsVisibility.Experties) components.push(<Element name="Experties" key="Experties"><Experties /></Element>);
    if (componentsVisibility.Industrie) components.push(<Element name="Industrie" key="Industrie"><Industrie /></Element>);
    if (componentsVisibility.About) components.push(<Element name="About" key="About"><About /></Element>);
    if (componentsVisibility.Career) components.push(<Element name="Career" key="Career"><Career /></Element>);

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
