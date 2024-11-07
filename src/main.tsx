import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { ColorModeProvider } from './context/ColorModeProvider';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2Vyb2QyNTI1IiwiYSI6ImNtMzZreWYzdTA2c20ybHBwb3AzMWpleHEifQ.ZQifMNXoZF9zZsxPrg9VTA';

if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opción de geolocalización');
  throw new Error('Tu navegador no tiene opción de geolocalización');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
