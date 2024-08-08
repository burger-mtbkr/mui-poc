import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const ColorChips = () => {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
          </Stack>
        <Stack direction="row" spacing={1}>
        <Chip label="error" color="error"/>
        <Chip label="warning" color="warning"/>
          </Stack>
             <Stack direction="row" spacing={1}>
        <Chip label="error" color="error" variant="outlined" />
        <Chip label="warning" color="warning" variant="outlined" />
      </Stack>
    </Stack>
  );
}
