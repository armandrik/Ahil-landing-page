import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children})=>{

    const [theme  ,setTheme] = React.useState('light')

    const ToggleTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return(
        <ThemeContext.Provider value={{theme , ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
