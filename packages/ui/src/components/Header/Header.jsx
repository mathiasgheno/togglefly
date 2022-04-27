import React from 'react';
import {
  Link,
  Container,
  Navegation,
} from './Header.styled';

export function Header() {
  return (
    <Container>
      <h1>🚀</h1>
      <Navegation>
        <Link href="#/home">Features</Link>
        <Link href="#/systems">Systems</Link>
        <Link href="#/roles">Roles</Link>
      </Navegation>
    </Container>
  )
}
