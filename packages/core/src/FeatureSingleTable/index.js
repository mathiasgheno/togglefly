import { FeaturesSingleTableEntity } from './FeatureSingleTable.js';

// log.setLevel('debug');

const featuresSingleTable = new FeaturesSingleTableEntity('features');
// await featuresSingleTable.createTable();
// const resultado = await featuresSingleTable.listAll();
const resultado = await featuresSingleTable.listAll();
console.log(resultado);
