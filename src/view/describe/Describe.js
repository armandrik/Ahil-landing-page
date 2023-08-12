import React from 'react'
import secure from '../../image/undraw_security_on_re_e491.svg'
import time from '../../image/undraw_time_management_re_tk5w.svg'
import simple from '../../image/undraw_note_list_re_r4u9.svg'
import { ThemeContext } from './../../theme/DarkMode';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

export const Describe = () => {

    const { theme } = React.useContext(ThemeContext);

    const { t } = useTranslation()

    const content = [
        { id: 1, img: secure, title: t('describe.security.header'), describe: t('describe.security.title') },
        { id: 2, img: time, title: t('describe.time.header'), describe: t('describe.time.title') },
        { id: 3, img: simple, title: t('describe.simple.header'), describe: t('describe.simple.title') },
    ]

    return (
        <Fade bottom>
            <article id='choseus' className={theme === 'light' ? 'light-describe-container' : 'describe-container'}>
                <h1 className={theme === 'light' ? 'light-describe-title' : 'describe-title'}>{t('describe.header')}</h1>
                <div className='describe-wrapper'>
                    {content.map(item => (
                        <div key={item.id} className={theme === 'light' ? 'light-describe-content' : 'describe-content'}>
                            <img src={item.img} alt={item.title} />
                            <h1>{item.title}</h1>
                            <p>{item.describe}</p>
                        </div>
                    ))}
                </div>
            </article>
        </Fade>
    )
}