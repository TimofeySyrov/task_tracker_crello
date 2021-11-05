import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4E97C2',
    },
    secondary: {
      main: '#026AA7',
    },
    background: {
      default: '#284968',
    },
    text: {
      secondary: '#80B4D3',
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      letterSpacing: '0.02em',
      fontSize: '2.2rem',
    },
    h3: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '0.9rem',
      letterSpacing: '0.01em',
    },
  },
});
