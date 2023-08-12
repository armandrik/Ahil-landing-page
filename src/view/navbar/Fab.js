import React from 'react'
import { Tooltip } from '@mui/material'
import '@material/web/iconbutton/filled-icon-button';
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/icon/icon.js';
import '@material/web/icon/lib/icon-styles.css';
import '@material/web/icon/lib/icon.js';
import { useTranslation } from 'react-i18next';

export const Fab = () => {

    const {t} = useTranslation()

    return (
        <Tooltip title={t('navbar.fab')}>
            <div className='go-up-btn'>
                <md-filled-tonal-icon-button href='#top'>
                    <md-icon filled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                            <path fill='#ffffff' fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                    </md-icon>
                </md-filled-tonal-icon-button>
            </div>
        </Tooltip>
    )
}
