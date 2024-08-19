import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
  Button,
  SelectChangeEvent,
  ListItemIcon,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';

interface Option {
  label: string;
  color: string;
}

const options: Option[] = [
  { label: 'Option 1', color: '#FF5733' }, // Red Dot
  { label: 'Option 2', color: '#33FF57' }, // Green Dot
  { label: 'Option 3', color: '#3357FF' }, // Blue Dot
  { label: 'Option 4', color: '#FFD700' }, // Yellow Dot
];

interface Row {
  name: string;
  address: {
    street: string;
    suburb: string;
    city: string;
  };
  country: string;
}

const rows: Row[] = [
  {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      suburb: 'Central',
      city: 'Auckland',
    },
    country: 'New Zealand',
  },
  {
    name: 'Jane Smith',
    address: {
      street: '456 Elm St',
      suburb: 'North Shore',
      city: 'Auckland',
    },
    country: 'New Zealand',
  },
  {
    name: 'Michael Brown',
    address: {
      street: '789 Oak St',
      suburb: 'South',
      city: 'Wellington',
    },
    country: 'New Zealand',
  },
  {
    name: 'Emily White',
    address: {
      street: '101 Pine St',
      suburb: 'Eastside',
      city: 'Christchurch',
    },
    country: 'New Zealand',
  },
  {
    name: 'William Black',
    address: {
      street: '202 Cedar St',
      suburb: 'Westend',
      city: 'Hamilton',
    },
    country: 'New Zealand',
  },
];

interface DropdownWithDotProps {
  selectedOption: string;
  onChange: (value: string) => void;
}

function DropdownWithDot({ selectedOption, onChange }: DropdownWithDotProps) {
  return (
    <FormControl fullWidth variant="outlined" size="small">
      <Select
        value={selectedOption}
        onChange={(event: SelectChangeEvent<string>) => onChange(event.target.value as string)}
        displayEmpty
        renderValue={(selected) =>
          selected ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  bgcolor: options.find((opt) => opt.label === selected)?.color,
                  borderRadius: '50%',
                  marginRight: 1,
                }}
              />
              <Typography>{selected}</Typography>
              <ArrowDropDownIcon sx={{ marginLeft: 'auto', color: 'black' }} />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Select an option</Typography>
              <ArrowDropDownIcon sx={{ marginLeft: 'auto', color: 'black' }} />
            </Box>
          )
        }
        IconComponent={() => null} // Hide the default dropdown arrow
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '16px', // Rounder corners for the dropdown menu
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  bgcolor: option.color,
                  borderRadius: '50%',
                  marginRight: 1,
                }}
              />
              <Typography>{option.label}</Typography>
            </Box>
            {selectedOption === option.label && (
              <ListItemIcon>
                <CheckIcon sx={{ color: '#9E9E9E' }} /> {/* Flat grey icon */}
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function CustomTable() {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const handleOptionChange = (rowIndex: number, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [rowIndex]: value }));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Country</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {row.address.street}
                </Typography>
                <Typography variant="body2" sx={{ color: '#9E9E9E' }}>
                  {row.address.suburb}, {row.address.city}
                </Typography>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    color: 'black',
                    borderRadius: '16px',
                    textTransform: 'none',
                    fontWeight: 'normal',
                    minWidth: 'auto', 
                    padding: '8px 20px', 
                  }}
                  disableElevation
                >
                  {row.country}
                </Button>
              </TableCell>
              <TableCell align="center">
                <DropdownWithDot
                  selectedOption={selectedOptions[index] || ''}
                  onChange={(value) => handleOptionChange(index, value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
