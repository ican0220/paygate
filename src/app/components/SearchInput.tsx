
// components/SearchInput.tsx
import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = "Search for currency..." }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='p-2'
      InputProps={{
        startAdornment: (
          <SearchIcon/>
        ),
      }}
    />
  );
};

export default SearchInput;