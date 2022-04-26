import { FeaturesSingleTableEntity } from './FeatureSingleTable.js';

log.setLevel('debug');

const featuresSingleTable = new FeaturesSingleTableEntity('features');
// await featuresSingleTable.createTable();
console.log(await featuresSingleTable.listAll());
