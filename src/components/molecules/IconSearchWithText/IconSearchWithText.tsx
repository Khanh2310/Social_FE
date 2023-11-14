import { IconSearch } from '../../atoms/Icons';
import { Input } from '../../atoms/Input';

export const IconSearchWithText = () => {
  return (
    <>
      <IconSearch className="w-6 h-6 object-contain" />
      <Input id="text" className="no-focus searchbar_input" />
    </>
  );
};
