import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary:{
          main: pink['A400'],
          dark: pink[800],
          light: pink[400],
          contrastText: 'white',
        }
      },
});