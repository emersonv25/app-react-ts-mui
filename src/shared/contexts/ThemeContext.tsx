import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { DarkTheme } from './../themes/'
import { LightTheme } from '../themes/Light';
import { Box } from '@mui/material';

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;
}
const ThemeContext = createContext({} as IThemeContextData);

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') 
        {
            return LightTheme
        }
        
        return DarkTheme
    }, [themeName]);


    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box>
                  {children}  
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}