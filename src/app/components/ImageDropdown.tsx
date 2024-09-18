"use client";
// components/ImageDropdown.tsx
import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface Item {
  value: string;
  title: string;
  imageUrl: string;
}

interface ImageDropdownProps {
  items: Item[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const ImageDropdown: React.FC<ImageDropdownProps> = ({ items, selectedValue, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="image-dropdown-label"></InputLabel>
      <Select
        labelId="image-dropdown-label"
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        displayEmpty
        className='flex w-[200px] mr-2 bg-white'
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '20px', marginRight: '10px' }} />
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ImageDropdown;