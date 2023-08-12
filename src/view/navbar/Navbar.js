import React from 'react'
import logo from '../../logo/Logo_PNG.png'
import { ThemeContext } from '../../theme/DarkMode';
import { ActionButton } from './ActionButton';
import '@material/web/button/text-button';
import { Fab } from './Fab';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {

    const { t } = useTranslation();

    const content = [
        { id: 1, title: t('navbar.why-Ahli'), hrefId: '#intro' },
        { id: 2, title: t('navbar.know-us'), hrefId: '#choseus' },
        { id: 3, title: t('navbar.Advantages'), hrefId: '#features' },
    ]


    const { theme } = React.useContext(ThemeContext);

    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        if (typeof window !== "undefined") {

            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPosition(position);
            }

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPosition])


    return (
        <header className={theme === 'light' ? 'light-navbar-wrapper' : 'navbar-wrapper'}>
            <img src={logo} alt='ahil logo' className='ahil-logo-navbar'/>
            <ul>
                {content.map(item => (
                    <a href={item.hrefId} key={item.id} className={theme === 'light' ? 'light-menu-list' : 'menu-list'} rel="nofollow">
                        <md-text-button>{item.title}</md-text-button>
                    </a>
                ))}
            </ul>
            <ActionButton />
            {scrollPosition > 500 ?
                <Fab />
                : null}
        </header>
    )
}