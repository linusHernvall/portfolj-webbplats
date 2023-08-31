import { Avatar, Button, Paper, Text } from '@mantine/core';

function CoworkerCard(props: {
  name: string;
  expertise: string;
  bio: string;
  phone: string;
  email: string;
}) {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { name, expertise, bio, phone, email } = props;

  // TSX ------------------------------------------------------------------------
  return (
    // <div>
    //   <div style={{ border: "2px solid red" }}>
    //     <h3>{name}</h3>
    //     <h5>{expertise}</h5>
    //     <p>{phone}</p>
    //     <p>{email}</p>
    //     <p>{bio}</p>
    //   </div>
    // </div>
    <Paper
      radius='md'
      withBorder
      p='lg'
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={phone} size={120} radius={120} mx='auto' />
      <Text ta='center' fz='lg' weight={500} mt='md'>
        {name}
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        {bio} {expertise} {email}
      </Text>

      <Button variant='default' fullWidth mt='md'>
        Send message
      </Button>
    </Paper>
  );
}

export default CoworkerCard;
