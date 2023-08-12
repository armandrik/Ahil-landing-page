import React from 'react'
import ahilLightMood from '../../image/ahil-lightmood.png';
import ahilDarkMood from '../../image/ahil-darkmood.png';
import { ThemeContext } from '../../theme/DarkMode';
import '@material/web/button/tonal-button';
import '@material/web/circularprogress/circular-progress.js';
import '@material/web/circularprogress/lib/circular-progress-styles.css';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

export const Headr = () => {

    const { theme } = React.useContext(ThemeContext);

    const {t} = useTranslation()

    const openInNewTab = (url) => {
        window.open(url, "_blank");
    }

    const downLoadApp = () => {
        openInNewTab("https://www.exontech.ir/download/ahil.apk");
    }

    React.useEffect(() => {

        const img = new Image();
        img.onload = () => {
            console.log('loaded');
        };
        img.src = ahilDarkMood;

    }, [])



    return (
        <Fade bottom>
            <main className={theme === 'light' ? 'light-header-wrapper' : 'header-wrapper'}>
                <div className='title'>
                    <h1 className='ahil-h'>{t('header.ahil-header')}</h1>
                    <h3 className='header-title'>{t('header.ahil-title')}</h3>
                    <p className='word-piece'>{t("header.word-piece")}</p>
                    <div className='btn-wrapper'>
                        <md-tonal-button aria-label="download application" onClick={downLoadApp}>
                            <p>{t('header.download-button')}</p>
                        </md-tonal-button>
                    </div>
                </div>
                <div className='header-menu-content'>
                    {theme === 'light' ?
                        <img src={ahilLightMood} alt='light app ahil' />
                        :
                        <img src={ahilDarkMood} alt='dark app ahil' />
                    }
                </div>
            </main>
        </Fade>
    )
}