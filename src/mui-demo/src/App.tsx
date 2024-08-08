import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, ThemeProvider } from '@mui/material';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import greenTheme from './themes/greenTheme';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import Header from './components/Header/Header';
import MainContent from './Pages/Home';
import { SelectChangeEvent } from '@mui/material/Select';

const drawerWidth = 240;

const App: React.FC = () => {
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('TextBoxDemo');
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleDrawerToggle = () => {
    setAppDrawerOpen(!appDrawerOpen);
  };

  const handleThemeChange = (event: SelectChangeEvent) => {
    setCurrentTheme(event.target.value as string);
  };

  const getTheme = () => {
    switch (currentTheme) {
      case 'dark':
        return darkTheme;
      case 'green':
        return greenTheme;
      case 'light':
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} handleThemeChange={handleThemeChange} currentTheme={currentTheme} />
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          <Drawer
            anchor='left'
            variant="persistent"
            open={appDrawerOpen}
            ModalProps={{ keepMounted: false }}
          >
            <DrawerMenu selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
          </Drawer>
          <Drawer
            variant="persistent"
            open
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerMenu selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
          </Drawer>
        </Box>
        <MainContent selectedComponent={selectedComponent} drawerWidth={drawerWidth} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
