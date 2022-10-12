import { Icon, IconButton } from "@mui/material";
import { useAppThemeContext } from "../contexts";


export function DarkModeButton() {
    const { toggleTheme, themeName } = useAppThemeContext();

    return (
        <div>
            <IconButton onClick={toggleTheme} color='inherit'>
                <Icon>{themeName === 'dark' ? 'dark_mode' : 'sunny' }</Icon>
            </IconButton>
        </div>
    )
}