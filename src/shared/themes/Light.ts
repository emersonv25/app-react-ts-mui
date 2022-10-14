import { createTheme } from "@mui/material";
import { pink, purple } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary:{
          main: pink['A400'],
          dark: pink[800],
          light: pink[400],
          contrastText: 'white',
        },
        secondary: {
           main: purple[500],
           dark: purple[400],
           light: purple[300],
           contrastText: 'white',
        },
        background:{
          paper: '#ffffff',
          default: '#f7f6f3'
        }
      },
});