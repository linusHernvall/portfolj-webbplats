import { Burger } from '@mantine/core';

interface BurgerMenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu, isOpen }) => {
  const label = isOpen ? 'Close navigation' : 'Open navigation';
  return <Burger opened={isOpen} onClick={toggleMenu} aria-label={label} color='#FFF' />;
};

export default BurgerMenu;
