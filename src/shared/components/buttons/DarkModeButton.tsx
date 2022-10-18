import { Icon, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useAppThemeContext } from "../../contexts/ThemeContext";


export function DarkModeButton() {
    const { toggleTheme, themeName } = useAppThemeContext();
    return (
        <div>
            <IconButton onClick={toggleTheme} color='inherit'>
                <Icon>{themeName === 'dark' ? 'dark_mode' : 'sunny'}</Icon>
            </IconButton>
        </div>
    )
}