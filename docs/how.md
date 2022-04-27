# How to Use

We recommend you to use this library with Princible of Least Privilage — POLP, in mind.  With that you can use this project to allow your user to do things based on enabled features based on roles and systems. 

For operations that are related with users you can use `hasRole` with `hasFeature`. 

```javascript
import { hasRole, hasActiveFeature } from '@togglefly/client';
import { asyncPipe } from '@togglefly/utils';

const canEdit = await asyncPipe(
  hasRole('ADMIN'),
  hasActiveFeature('ACCESS_MODULE_BLOG'),
  hasActiveFeature('EDIT_POST'),
);
```

This sentence is equivalent to "Thare is two features called ACCESS_MODULE_BLOG and EDIT_POST both with the role ADMIN?"

You can use this methodology related to systems too. For that you can use `hasSystem` and `hasActiveFeature` together. 

```javascript
import { hasSystem, hasActiveFeature } from '@togglefly/client';
import { asyncPipe } from '@togglefly/utils';

const canAccessModuleA = await asyncPipe(
  hasSystem('SYSTEM_1'),
  hasActiveFeature('MODULE_A'),
);
```

This sentence is equivalent to "Thare is a feature called MODULE_A for the system SYSTEM_1?".
