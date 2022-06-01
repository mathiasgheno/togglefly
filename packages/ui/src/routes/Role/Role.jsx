import React, { useState } from 'react';
import { createRole } from './Role.service';
import { Container } from './Role.styled';
import { Button } from '@togglefly/components';

export const Role = () => {
  const [ error, setError ] = useState(false);
  const [ submitting, setSubmitting ] = useState(false);
  const [ name, setName ] = useState('');

  const handleOnSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    createRole({
      name,
    }).finally(() => setSubmitting(false));
  }

  if(error) {
    return (
      <div>
        <a href="#/roles">Voltar</a>
        <h3>New Role</h3>
        <span>Oops! There is a Bug here.</span>
      </div>
    )
  }

  return (
    <Container>
      <a href="#/roles">Voltar</a>
      <h3>New Role</h3>
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
