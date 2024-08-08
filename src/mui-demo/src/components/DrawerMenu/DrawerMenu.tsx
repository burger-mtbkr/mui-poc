import React from 'react';
import { Divider, List, ListItem, ListItemText, Toolbar } from '@mui/material';

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
          <ListItem button key={text} selected={selectedComponent === text} onClick={() => setSelectedComponent(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerMenu;
