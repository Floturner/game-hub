import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Dark Mode"
      color="gray.400"
      icon={colorMode === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
      variant="ghost"
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
