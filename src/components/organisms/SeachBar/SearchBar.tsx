import { useState } from 'react';
import { IconSearchWithText } from '../../molecules/IconSearchWithText';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="searchbar">
      <IconSearchWithText />
    </div>
  );
};
