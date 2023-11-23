import React, { useState, useEffect } from 'react';
import './App.css';

import logo from './img/logoLaranja.jpg';
import leftButtonImage from './img/btn-ajuda.jpeg';
import rightButtonImage from './img/btn-config.jpeg';
import btnLupa from './img/ico-lupa.png';
import medicamento from './img/medicamento.png';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function App() {
 const [isLoading, setIsLoading] = useState(true);
 const [imageSrc, setImageSrc] = useState(logo);
 const [searchInput, setSearchInput] = useState('');

 useEffect(() => {
 setTimeout(() => {
 setIsLoading(false);
 }, 1000);
 }, []);

 if (isLoading) {
 return (
 <div className="App">
  <header className="App-header">
    <div className="center-content">
      <img src={imageSrc} className="App-logo" alt="logo" />
      <p className='nome-logo'>Seu Genérico</p>
    </div>
  </header>
 </div>
 );
 }

 return (
 <div className="App">
 <header className="App-header">
  <nav className="navbar">
    <button className="navbar-button">
      <img className='nav-ajuda' src={leftButtonImage} alt="Left Button" />
    </button>
    <img className='nav-logo' src={logo} alt="Center Image" />
    <button className="navbar-button">
      <img className='nav-config' src={rightButtonImage} alt="Right Button" />
    </button>
  </nav>
  <div className='ctn-input'>
   <input className='search-med'
     type="text"
     placeholder="Procurar Medicamento"
     value={searchInput}
     onChange={(e) => setSearchInput(e.target.value)}
   />
   <button className='btn-lupa'><img className='btn-lupa' src={btnLupa} alt="Botão Lupa"/></button>
  </div>

  <Carousel className='carrossel-1'>
    <div>
      <img src={medicamento} />
      <p className="legend">Aclidínio</p>
    </div>
    <div>
      <img src={medicamento} />
      <p className="legend">Aciclovir</p>
    </div>
    <div>
      <img src={medicamento} />
      <p className="legend">Adalimumabe</p>
    </div>
  </Carousel>
 </header>
 </div>
 );
}

export default App;
