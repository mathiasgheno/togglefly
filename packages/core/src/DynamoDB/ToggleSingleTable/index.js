import { FeaturesSingleTableEntity } from './ToggleSingleTable.js';
import log from 'loglevel';

log.setLevel('debug');
// log.setLevel('debug');

const featuresSingleTable = new FeaturesSingleTableEntity('features');
// await featuresSingleTable.createTable();
// const resultado = await featuresSingleTable.listAll();
const id = 'F#1_1';
const roles = ['R#1', 'R#2'];
const system = ['S#1', 'S#2'];
// const resultado = await featuresSingleTable.insertRolesForFeature(id, roles);
// const resultado = await featuresSingleTable.insert({
//   name: 'TOGGLE_INSERT_TEST',
//   description: 'Toggle de testes',
//   systems: ['S#1', 'S#2'],
//   allowedRoles: ['R#1', 'R#2'],
// });
// const resultado = await featuresSingleTable.getToggle('F#a97400e7-9397-416d-aa2f-eaa98f9dfffd');
// const resultado = await featuresSingleTable.delete('F#298a88a0-4f75-4846-be60-4be08e822c62');
// console.log(resultado);
