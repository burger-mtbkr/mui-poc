import React from 'react';
import { Divider, List, ListItem, ListItemText, Toolbar } from '@mui/material';

interface DrawerMenuProps {
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ selectedComponent, setSelectedComponent }) => {
  const components = ['TextBoxDemo', 'ComboBoxDemo', 'ButtonsDemo', 'DataGridDemo'];

  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {components.map((text) => (
          <ListItem button key={text} selected={selectedComponent === text} onClick={() => setSelectedComponent(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerMenu;
