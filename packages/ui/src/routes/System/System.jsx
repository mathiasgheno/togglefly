import React, { useState } from 'react';
import { createSystem } from './System.service';
import { Container } from './System.styled';
import { Button } from '@togglefly/components';

export const System = () => {
  const [ error, setError ] = useState(false);
  const [ submitting, setSubmitting ] = useState(false);
  const [ name, setName ] = useState('');

  const handleOnSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    createSystem({
      name,
    }).finally(() => setSubmitting(false));
  }

  if(error) {
    return (
      <div>
        <a href="#/systems">Voltar</a>
        <h3>New System</h3>
        <span>Oops! There is a Bug here.</span>
      </div>
    )
  }

  return (
    <Container>
      <a href="#/systems">Voltar</a>
      <h3>New System</h3>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          disabled={submitting}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </Container>
  )
}
