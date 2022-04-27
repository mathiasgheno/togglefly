import React, { useEffect } from 'react';
import { NormalizeCSS } from './NormalizeCSS';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Systems, Roles, Features } from './routes';

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;

export function App() {
  const [ activeRoute, setActiveRoute ] = React.useState('#/home');

  const handleRouteChanges = () => {
    const hash = window.location.hash;
    setActiveRoute(hash);
  }

  useEffect(() => {
    window.addEventListener('popstate', handleRouteChanges);
    return () => window.removeEventListener('popstate', handleRouteChanges);
  }, []);

  return (
    <Container>
      <NormalizeCSS />
      <Header />
      {activeRoute === '#/home' && <Features />}
      {activeRoute === '#/roles' && <Roles />}
      {activeRoute === '#/systems' && <Systems />}
    </Container>
  )
}
