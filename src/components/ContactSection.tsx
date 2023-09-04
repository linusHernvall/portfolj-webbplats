import { Box, Button, Col, Container, Grid, TextInput, Textarea, Title } from '@mantine/core';
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
              <TextInput
                required
                label={name && !name.trim() && !emailSent ? 'Namn' : undefined}
                value={name}
                onChange={event => setName(event.currentTarget.value)}
                placeholder='Namn'
                style={{ marginBottom: '15px' }}
              />
              <TextInput
                required
                type='email'
                label={email && !/\S+@\S+\.\S+/.test(email) && !emailSent ? 'Email' : undefined}
                value={email}
                onChange={event => setEmail(event.currentTarget.value)}
                placeholder='Email'
                style={{ marginBottom: '15px' }}
              />
              <Textarea
                required
                label={description && !description.trim() && !emailSent ? 'Description' : undefined}
                value={description}
                onChange={event => setDescription(event.currentTarget.value)}
                placeholder='Beskriv ärendet...'
                style={{ marginBottom: '15px' }}
              />
              <Button
                type='submit'
                variant='outline'
                color={isSubmitting ? 'white' : undefined}
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? 'transparent' : 'white', // Set white background when not submitting
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
