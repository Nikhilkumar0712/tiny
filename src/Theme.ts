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
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});

export default theme;