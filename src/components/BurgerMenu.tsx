import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} color='#FFF' />;
}

export default BurgerMenu;
