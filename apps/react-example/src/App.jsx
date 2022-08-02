import React from 'react';
import { useTogglefly } from '@togglefly/react-client';
import { pipe, hasActiveFeature } from '@togglefly/utils';

const ToggleflyProvider = ({children}) => <>{children}</>

const ToggleflyConfig = ({ children }) => {
  const configs = {
    system: 'S#1',
    clientToken: '',
    secret: '',
  }
  return (
    <ToggleflyProvider value={configs}>
      {children}
    </ToggleflyProvider>
  )
};

const Page = () => {

  const doesItHaveAccess = pipe(
    hasActiveFeature('TOGGLE_INSERT_TEST_IS_ACTIVE_TEST'),
  );

  const [loading, toggles] = useTogglefly();

  if(loading) {
    return (
      <span>loading</span>
    )
  }

  if(!doesItHaveAccess(toggles)) {
    return (
      <span>You do not have access to this page.</span>
    );
  }

  return (
    <span>You have access to this page!</span>
  )
};

export function App() {
  return (
    <ToggleflyConfig>
      <Page />
    </ToggleflyConfig>
  )
}
