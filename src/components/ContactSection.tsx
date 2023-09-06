import {
  Box,
  Button,
  Col,
  Container,
  Grid,
  TextInput,
  Textarea,
  Title,
  Input,
} from '@mantine/core';
import React, { useState } from 'react';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && email && description) {
      setIsSubmitting(true);
      // Perform email sending logic here
      // For demonstration, let's just simulate sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEmailSent(true);
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setDescription('');
    }
  };

  return (
    <div style={{ backgroundColor: '#1864AB', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Title order={2} color='white' mb={'10px'}>
            KONTAKTA OSS
          </Title>
        </Box>
        <Grid gutter='lg'>
          <Col span={12}>
            <form onSubmit={handleFormSubmit}>
              <Input.Wrapper
                id='name-input'
                withAsterisk
                label='Namn'
                required
                labelProps={{ style: { color: 'white' } }}
                >
                <TextInput
                  value={name}
                  onChange={event => setName(event.currentTarget.value)}
                  placeholder='Ange ditt namn här'
                  style={{ marginBottom: '15px' }}
                />
              </Input.Wrapper>

              <Input.Wrapper
                id='email-input'
                withAsterisk
                label='Email'
                required
                labelProps={{ style: { color: 'white' } }}

              >
                <TextInput
                  type='email'
                  value={email}
                  onChange={event => setEmail(event.currentTarget.value)}
                  placeholder='Uppge din email här'
                  style={{ marginBottom: '15px' }}
                />
              </Input.Wrapper>

              <Input.Wrapper
                id='description-input'
                withAsterisk
                label='Beskrivning'
                required
                labelProps={{ style: { color: 'white' } }}
                >
                <Textarea
                  value={description}
                  onChange={event => setDescription(event.currentTarget.value)}
                  placeholder='Beskriv ärendet...'
                  style={{ marginBottom: '15px' }}
                />
              </Input.Wrapper>

              <Button
                type='submit'
                variant='outline'
                color={isSubmitting ? 'white' : undefined}
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? 'transparent' : 'white',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'block',
                  margin: '0 auto',
                }}
              >
                {isSubmitting ? 'Skickar...' : 'Skicka'}
              </Button>
            </form>
            {emailSent && (
              <div
                style={{
                  marginTop: '15px',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Ditt meddelande har skickats!
              </div>
            )}
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactSection;
