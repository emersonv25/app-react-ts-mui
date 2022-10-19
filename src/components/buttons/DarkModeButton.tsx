import { Icon, IconButton } from "@mui/material";
import useTheme from "../../hooks/useTheme";


export function DarkModeButton() {
    const { toggleTheme, themeName } = useTheme();
    return (
        <div>
            <IconButton onClick={toggleTheme} color='inherit'>
                <Icon>{themeName === 'dark' ? 'dark_mode' : 'sunny'}</Icon>
            </IconButton>
        </div>
    )
}