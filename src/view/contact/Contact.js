import React from 'react'
import '@material/web/button/tonal-button.js';
import { ThemeContext } from '../../theme/DarkMode';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

export const Contact = () => {

    const { theme } = React.useContext(ThemeContext)

    const {t} = useTranslation()

    return (
        <Fade bottom>
            <article className='contact-wrapper'>
                <h1 className={theme === 'light' ? 'light-title' : 'title'}>{t('contact.header')}</h1>
                <div className='email-btn-wraaper'>
                    <input placeholder={t('contact.placeHolder')} className={theme === 'light' ? 'light-input' : 'input'}/>
                    <div className='send-button'>
                        <md-tonal-button>
                            {t('contact.sendButton')}
                            <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" /></svg>
                        </md-tonal-button>
                    </div>
                </div>
            </article>
        </Fade>
    )
}
