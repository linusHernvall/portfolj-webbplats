import { Avatar, Paper, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function CoworkerCard(props: { img: string; name: string; expertise: string; shortBio: string }) {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { img, name, expertise, shortBio } = props;

  const matches = useMediaQuery('(min-width: 1104px)');

  // TSX ------------------------------------------------------------------------
  return (
    <Paper
      radius='md'
      w={300}
      h={350}
      withBorder
      p='lg'
      m={matches ? '30px' : '0px'}
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        // flexBasis: `calc(33.33% - 10px)`, 
      })}
    >
      <Avatar src={img} size={120} radius={120} mx='auto' />
      <Text ta='center' fz='lg' weight={500} mt='md'>
        {name}
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        {expertise}
      </Text>
      <Text ta='center' c='dimmed' fz='sm' mt='md'>
        {expertise} {shortBio}
      </Text>
    </Paper>
  );
}

export default CoworkerCard;
