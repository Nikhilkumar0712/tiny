import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({

  palette: {
    primary: {
      main: '#204289',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: '#FFFFFF',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});

export default theme;