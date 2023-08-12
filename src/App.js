import React from 'react';
import './sass/App.css';
import { Describe } from './view/describe/Describe';
import { Features } from './view/features/Features';
import { Footer } from './view/footer/Footer';
import { Headr } from './view/header/Headr';
import { Navbar } from './view/navbar/Navbar';
import { VideoPlayer } from './view/video/VideoPlayer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from './theme/DarkMode';
import { Contact } from './view/contact/Contact';
import { useTranslation } from 'react-i18next';
import { Exon } from './view/exon/Exon';

function App() {

  const { theme } = React.useContext(ThemeContext)
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.body.dir = 'ltr';
    i18n.changeLanguage('en')

  }, [i18n])


  return (
    <div className={theme === 'light' ? 'light-App' : 'App'} id='top'>
      <div className='navbar-header-wrapper'>
        <Navbar />
        <Headr />
      </div>
      <VideoPlayer />
      <Describe />
      <Features />
      <Exon/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
