import React from 'react'
import { useTranslation } from 'react-i18next';
import '@material/web/iconbutton/standard-icon-button.js';
import { ThemeContext } from '../../theme/DarkMode';
import EN from '../../image/us.png';
import IR from '../../image/ir.png';


export const LocalDropDown = ({ setShowLocalList }) => {

    const { i18n } = useTranslation();
    const { theme } = React.useContext(ThemeContext);

    const chnageLocalToEN = () => {
        i18n.changeLanguage('en')
        document.body.dir = 'ltr';
        setShowLocalList(false)
    }

    const chnageLocalToFA = () => {
        i18n.changeLanguage('FA')
        document.body.dir = 'rtl';
        setShowLocalList(false)
    }

    return (
        <div className={theme === 'light' ? 'light-dropDown-container' : 'dropDown-container'}>
            <p className={theme === 'light' ? 'light-local' : 'local'} onClick={chnageLocalToEN}><img alt='en-flag' src={EN} className='local-img'/> EN</p>
            <p className={theme === 'light' ? 'light-local' : 'local'} onClick={chnageLocalToFA}><img alt='ir-flag' src={IR} className='local-img'/> FA</p>
        </div>
    )
}
