import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TextBoxDemo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>Outlined textbox label:</Typography>
        <TextField variant="outlined" size='small' />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>Custom Label:</Typography>
        <TextField variant="standard" size='small' />
      </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>Textbox with placeholder:</Typography>
        <TextField variant="standard" size='small' placeholder='this is a placeholder' />
      </Box>
      <TextField label="Standard" variant="standard" fullWidth />
      <TextField label="Error" variant="standard" error helperText="Incorrect entry." fullWidth />
      <TextField label="Helper Text" variant="standard" helperText="Some important text" fullWidth />
    </Box>
  );
};

export default TextBoxDemo;
