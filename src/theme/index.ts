import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03D69D', // Cor primária
    },
    secondary: {
      main: '#dc004e', // Cor secundária
    },
    error: {
      main: '#f44336', // Cor de erro
    },
    warning: {
      main: '#ff9800', // Cor de aviso
    },
    info: {
      main: '#2196f3', // Cor de informação
    },
    success: {
      main: '#4caf50', // Cor de sucesso
    },
    background: {
      default: '#f5f5f5', // Cor de fundo padrão
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fonte padrão
  },
});

export default theme;
