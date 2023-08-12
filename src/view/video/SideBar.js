import React from 'react'
import { ThemeContext } from '../../theme/DarkMode';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/iconbutton/lib/icon-button';
import '@material/web/iconbutton/lib/shared-styles.css';
import '@material/web/iconbutton/lib/standard-styles.css';
import '@material/web/icon/icon.js';
import '@material/web/icon/lib/icon-styles.css';
import '@material/web/icon/lib/icon.js';
import { useTranslation } from 'react-i18next';

export const SideBar = () => {

    const { theme } = React.useContext(ThemeContext);
    const { t } = useTranslation()


    return (
        <nav className={theme === 'light' ? 'light-video-contnet' : 'video-contnet'}>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 11">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                {t('video.sidebar.manager')}
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 11">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
                {t('video.sidebar.title')}
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 11">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                {t('video.sidebar.exonUrl')} <a href='https://exontech.ir/' className={theme === 'light' ? 'light-axon-link' : 'axon-link'} rel="nofollow">{t('video.sidebar.url')}</a>
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 11">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                {t('video.sidebar.update')} : 1402/04/07
            </p>
            {/* <div>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-share" viewBox="0 0 16 11">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    اشتراک گذاری
                </p>
            </div> */}
        </nav>
    )
}
