import { createTheme } from '@mui/material/styles';

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#00a244', 
    },
    secondary: {
      main: '#000000', 
    },
    background: {
      default: '#ffffff', 
      paper: '#ffffff', 
    },
    text: {
      primary: '#000000', 
      secondary: '#575757', 
    },
    action: {
      hover: '#9EFFB9', 
    },
  },
  typography: {
    fontFamily: "'Geograph', sans-serif", 
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '0.05em',
      color: '#000000', 
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.05em',
      color: '#000000', 
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#575757', 
    },
    button: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0.075em',
      textTransform: 'none',
      color: '#ffffff', 
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#9EFFB9', 
          },
          '& > *': {
            backgroundColor: 'inherit !important',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "'Geograph', sans-serif", 
          borderBottom: '1px solid #e0e0e0', 
          padding: '21px 25px',
          backgroundColor: '#ffffff', 
        },
        head: {
          fontWeight: 700, // Make headers bold
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          color: 'black',
          borderRadius: '16px',
          textTransform: 'none',
          fontWeight: 'normal',
          minWidth: 'auto', 
          padding: '8px 20px',
          '&.Mui-disabled': {
            backgroundColor: '#e0e0e0',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '5px 10px',
          position: 'relative',
        },
        icon: {
          display: 'none',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
    },
  },
});

export { greenTheme };
