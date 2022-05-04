import { FeaturesSingleTableEntity } from './ToggleSingleTable.js';

// log.setLevel('debug');

const featuresSingleTable = new FeaturesSingleTableEntity('features');
// await featuresSingleTable.createTable();
// const resultado = await featuresSingleTable.listAll();
const resultado = await featuresSingleTable.insert({
 description: 'bla',
 name: 'FEATURE_BLA',
});
console.log(resultado);
