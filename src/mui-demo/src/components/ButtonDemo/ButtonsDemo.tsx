import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonsDemo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
    </Box>
  );
};

export default ButtonsDemo;
