# How to Use

## Binding with your React Project

```jsx
import { Togglefly } from '@togglefly/client'

const Fallback = () => <p>Carregando...</p>
const Error = (error) => <p>Error...</p>

export function App() {
  return (
    <Togglefly
      value={{
        system: 'S1',
        secret: 'bazz',
        fallback: Fallback,
        loadgin: Error, 
      }}
    >
      <h1>Your App!</h1>
    </Togglefly>
  );
}

```

## Allowing Access with Hooks
```jsx
import { useTogglefly, hasRole, hasActiveFeature } from '@togglefly/client'
import { pipe } from '@togglefly/utils';

const Fallback = () => <p>Carregando...</p>
const Error = (error) => <p>Error...</p>

const hasAccessToModule = () => {
  return pipe(
    hasRole('ADMIN'),
    hasActiveFeature('MODULE_A'),
  )
}

export function Admin() {
  const [ hasAccess ] = useTogglefly(hasAccessToModule);
  
  if(hasAccess) {
    return (
      <h1>Module A</h1>
    )
  }
  
  return null;
}
```

## Allowing Access Globally

We recommend you to use this library with Princible of Least Privilage — POLP, in mind.  With that you can use this project to allow your user to do things based on enabled features based on roles and systems. 

For operations that are related with users you can use `hasRole` with `hasFeature`. 

```javascript
import { hasRole, hasActiveFeature } from '@togglefly/client';
import { pipe } from '@togglefly/utils';

const canEdit = pipe(
  hasRole('ADMIN'),
  hasActiveFeature('ACCESS_MODULE_BLOG'),
  hasActiveFeature('EDIT_POST'),
);
```

This sentence is equivalent to "Thare is two features called ACCESS_MODULE_BLOG and EDIT_POST both with the role ADMIN?"

You can use this methodology related to systems too. For that you can use `hasSystem` and `hasActiveFeature` together. 

```javascript
import { hasSystem, hasActiveFeature } from '@togglefly/client';
import { pipe } from '@togglefly/utils';

const canAccessModuleA = pipe(
  hasSystem('SYSTEM_1'),
  hasActiveFeature('MODULE_A'),
);
```

This sentence is equivalent to "Thare is a feature called MODULE_A for the system SYSTEM_1?".
