import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { ParallaxProvider } from 'react-scroll-parallax';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider>
    <ThemeProvider>
      <App />
      </ThemeProvider>
    </ParallaxProvider>
  </StrictMode>,
)
