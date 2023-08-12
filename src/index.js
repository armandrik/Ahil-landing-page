import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/IRANSansWeb.eot'
import './fonts/IRANSansWeb.ttf'
import './fonts/IRANSansWeb.woff'
import { ThemeProvider } from './theme/DarkMode';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.Fragment>
      <App />
    </React.Fragment>
  </ThemeProvider>

);