import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  handleDrawerToggle: () => void;
  handleThemeChange: (event: SelectChangeEvent) => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle, handleThemeChange, currentTheme }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          MUI Components Demo
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <Select
            value={currentTheme}
            onChange={handleThemeChange}
            autoWidth
            displayEmpty
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="green">Green</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
