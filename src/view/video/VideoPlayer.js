import React from 'react'
import logo from '../../logo/Logo_PNG.png'
import { ThemeContext } from '../../theme/DarkMode';
import Fade from 'react-reveal/Fade';
import { SideBar } from './SideBar';
import { useTranslation } from 'react-i18next';

export const VideoPlayer = () => {

    const { theme } = React.useContext(ThemeContext);

    const {t} = useTranslation()

    return (
        <Fade bottom>
            <div className={theme === 'light' ? 'light-video-player-wrapper' : 'video-player-wrapper'} id='intro'>
                <h1 className={theme === 'light' ? 'light-title-header' : 'title-header'}>{t('video.title')}</h1>
                <div className='video-contnet-wrapper'>
                    <SideBar/>
                    <video controls poster={logo} className={theme === 'light' ? 'light-video' : 'video'}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </video>
                </div>
            </div>
        </Fade>
    )
}
