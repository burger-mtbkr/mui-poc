import React from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';

interface DrawerMenuProps {
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
}

const components = ['TextBoxDemo', 'ComboBoxDemo', 'ButtonsDemo', 'DataGridDemo', 'TabDemo','BasicBarChart'];

const DrawerMenu: React.FC<DrawerMenuProps> = ({ selectedComponent, setSelectedComponent }) => {

  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {components.map((text) => (
          <ListItem disablePadding key={text} onClick={() => setSelectedComponent(text)}>
            <ListItemButton selected={selectedComponent === text}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerMenu;
