import { featuresEntityFactory } from './features/features.entity.mjs';
import { usersEntityFactory } from './users/users.entity.mjs';

async function main() {
  const features = await featuresEntityFactory();
  const users = await usersEntityFactory();
  return {
    features: features.getIntance(),
    users: users.getIntance(),
  }
}
