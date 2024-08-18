import { createTheme } from '@mui/material/styles';

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#00a244', // 
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#ffffff', // White for the background
      paper: '#ffffff', // White for paper elements
    },
    text: {
      primary: '#000000', // Black for primary text
      secondary: '#575757', // Dark grey for secondary text
    },
    action: {
      hover: '#9EFFB9', // Light green hover color for rows
    },
  },
  typography: {
    fontFamily: "'Geograph', sans-serif", // Use Geograph if available
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '0.05em',
      color: '#000000', // Black for headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.05em',
      color: '#000000', // Black for headings
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#575757', // Dark grey for body text
    },
    button: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0.075em',
      textTransform: 'none',
      color: '#ffffff', // White text on buttons
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#9EFFB9', // Entire row turns light green on hover
          },
          '& > *': {
            // Apply the hover style to all cells within the row
            backgroundColor: 'inherit !important',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "'Geograph', sans-serif", // Use Geograph if available
          borderBottom: '1px solid #e0e0e0', // Light grey bottom border for all rows
          padding: '21px 25px',
          backgroundColor: '#ffffff', // Ensure cells have a white background
        },
      },
    },
  },
});

export { greenTheme };
