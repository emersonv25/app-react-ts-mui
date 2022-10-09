import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary:{
          main: pink['A400'],
          dark: pink[800],
          light: pink[400],
          contrastText: 'white',
        }
      },
});