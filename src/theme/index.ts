import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03D69D',
    },
    grey: {
      900: '#AFAFAF',
    },
    secondary: {
      main: '#dc004e', 
    },
    error: {
      main: '#f44336', 
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#133A6F', 
    },
    success: {
      main: '#4caf50', 
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#4D4D4D', 
      secondary: '#E5E5E5', 
      disabled: '#AFAFAF',
    },
  },
  typography: {
    fontFamily: 'Nunito, Roboto, Arial, sans-serif',
    h1: {
      fontSize: 24, 
    },
    h2: {
      fontSize: 20, 
    },
    h3: {
      fontSize: 18, 
    },
    subtitle1: {
      fontSize: 16, 
    },
    subtitle2: {
      fontSize: 12, 
    },
  },
  shape: {
    borderRadius: 8,
  }

});

export default theme;
