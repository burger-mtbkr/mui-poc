import React from 'react';
import { Box, Toolbar } from '@mui/material';
import TextBoxDemo from '../components/TextBoxDemo/TextBoxDemo';
import ComboBoxDemo from '../components/ComboBoxDemo/ComboBoxDemo';
import ButtonsDemo from '../components/ButtonDemo/ButtonsDemo';
import DataGridDemo from '../components/DataGridDemo/DataGridDemo';
import BasicBarChart from '../components/ChartDemo/BasicBarChart';
import TabDemo from '../components/TabDemo/TabDemo';

interface HomePageProps {
  selectedComponent: string;
  drawerWidth: number;
}

const HomePage: React.FC<HomePageProps> = ({ selectedComponent, drawerWidth }) => {
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'TextBoxDemo':
        return <TextBoxDemo />;
      case 'ComboBoxDemo':
        return <ComboBoxDemo />;
      case 'ButtonsDemo':
        return <ButtonsDemo />;
      case 'DataGridDemo':
        return <DataGridDemo />;
      case 'TabDemo':
        return <TabDemo />;
      case 'BasicBarChart':
        return <BasicBarChart />;
      default:
        return <TextBoxDemo />;
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      {renderComponent()}
    </Box>
  );
};

export default HomePage;
