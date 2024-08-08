import { createTheme } from '@mui/material/styles';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#38bece',
      light: '#86e8f3',
      dark: '#3c41f1',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#ff1200',
      light: '#ff7b58',
      dark: '#870700',
    },
  },
});

export default blueTheme;
