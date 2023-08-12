import React from 'react'
import gameIMG from '../../image/undraw_gaming_re_cma2.svg'
import educationIMG from '../../image/undraw_education_f8ru.svg'
import creditIMG from '../../image/undraw_credit_card_re_blml.svg'
import { ThemeContext } from './../../theme/DarkMode'
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

export const Features = () => {

    const { theme } = React.useContext(ThemeContext);

    const { t } = useTranslation()

    const content = [
        { id: 1, img: gameIMG, featureList: t('features.game.header'), describe: t('features.game.title') },
        { id: 2, img: educationIMG, featureList: t('features.online-payment.header'), describe: t('features.online-payment.title')},
        { id: 3, img: creditIMG, featureList: t('features.education.header'), describe: t('features.education.title') },
    ]

    return (
        <Fade bottom>
            <article className={theme === 'light' ? 'light-features-wrapper' : 'features-wrapper'} id='features'>
                <h1>{t('features.header')}</h1>
                {content.map(item => (
                    <div className={theme === 'light' ? 'light-features' : 'features'} key={item.id}>
                        <img src={item.img} alt='features' className={theme === 'light' ? 'light-feature-img' : 'feature-img'} />
                        <div>
                            <h3 className={theme === 'light' ? 'light-feature-title' : 'feature-title'}>{item.featureList}</h3>
                            <p className={theme === 'light' ? 'light-detail' : 'detail'}>{item.describe}</p>
                        </div>
                    </div>
                ))}
            </article>
        </Fade>
    )
}
