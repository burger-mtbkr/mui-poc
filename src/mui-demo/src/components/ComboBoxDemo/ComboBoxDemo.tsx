import React from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Autocomplete } from '@mui/material';

const ComboBoxDemo: React.FC = () => {
  const options = [
    { label: 'B&W 802 d4', value: 1 },
    { label: 'Sonus Faber Sonetto', value: 2 },
    { label: 'Paradigm Founder 120H', value: 3 }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Combo Box" variant="outlined" />}
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="select-list">Select List</InputLabel>
        <Select
          label="Select List"
          defaultValue=""
          inputProps={{
            id: 'select-list',
          }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ComboBoxDemo;
