import React from 'react';
import { NormalizeCSS } from './NormalizeCSS';
import styled from 'styled-components';

import { Header } from './components/Header';
import {
  Systems,
  Role,
  Roles,
  Toggles,
  Toggle,
  System,
} from './routes';
import { useHashedRouter } from './hooks/useHashedRouter/useHashedRouter';

const Container = styled.div`
  width: clamp(500px, 65%, 800px);
  margin: 0 auto;
  max-width: 100%;
`;

function RouteWithParams({params, query}) {
  return (
    <div>
      <code>
        {JSON.stringify(params)}
      </code>
      <code>
        {JSON.stringify(query)}
      </code>
    </div>
  )
}

export function App() {
  const { route, getQuery, matchWith, getParams } = useHashedRouter();

  console.log({route});

  return (
    <Container>
      <NormalizeCSS />
      <Header />
      {/*<Router route={"#/home"} children={<Toggles />} />*/}
      {matchWith('#/home') && <Toggles />}
      {matchWith('#/toggles') && <Toggles />}
      {matchWith('#/toggle') && <Toggle />}
      {matchWith('#/roles') && <Roles />}
      {matchWith('#/role') && <Role />}
      {matchWith('#/systems') && <Systems />}
      {matchWith('#/system') && <System />}
      {matchWith('#/toggle/:id') && <RouteWithParams params={getParams('#/toggle/:id')} query={getQuery('#/toggle/:id')} />}
    </Container>
  )
}
