import React from 'react'
import { Tooltip } from '@mui/material';
import { ThemeContext } from './../../theme/DarkMode';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/iconbutton/lib/icon-button';
import '@material/web/iconbutton/lib/shared-styles.css';
import '@material/web/iconbutton/lib/standard-styles.css';
import '@material/web/icon/icon.js';
import '@material/web/icon/lib/icon-styles.css';
import '@material/web/icon/lib/icon.js';
import enamad from '../../image/eNAMAD.png';
import { SocialMedia } from '../socialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

  const { theme } = React.useContext(ThemeContext);

  const {t} = useTranslation()

  return (
    <footer className={theme === 'light' ? 'light-footer-wrapper' : 'footer-wrapper'}>
      <div className='footer-contnent'>
        <div className='tags'>
          <h4>{t('footer.about')}</h4>
          <h4>{t('footer.contact-us')}</h4>
          <h4>{t('footer.blog')}</h4>
          <h4>{t('footer.creators')}</h4>
        </div>
        <img src={enamad} alt='enamad' />
        <p className='social-title'>{t('footer.social-media')}</p>
        <SocialMedia/>
        <p>Made by Drik © 2023</p>
      </div>
    </footer>
  )
}
