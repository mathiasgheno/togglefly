# @togglefly/utils

This package contains some usefull utilities that can be used with Togglefly. Those avaliable functions can be considred filters. Those functionst are pure and don't have any side effects. You can use it separately or with another package, like `@togglefly/react-client`.

## How to use

First, you need to install it. 

```shell
npm install -g @togglefly/utils
```

Then, you can use it.

```javascript
import { hasActiveFeature, hasSystem, hasAccess } from '@togglefly/utils';

const canLoadFeature1 = pipe(
  hasSystem('SYSTEM_1'),
  hasActiveFeature('FEATURE_1'),
);
```

## Available Functions

- `hasActiveFeature`
- `hasSystem`
- `hasRole`
- `hasFeature`
