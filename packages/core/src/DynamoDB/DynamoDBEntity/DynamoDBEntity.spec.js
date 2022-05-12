import { DynamoDBEntity } from './DynamoDBEntity.js';

xdescribe('DynamoDBEntity', () => {
  let entity;

  beforeEach(async () => {
    entity = new DynamoDBEntity('features');
    entity.setLocalEnvironment();
    await entity.createTable();
  });

  describe('insert', () => {
    test('should insert one object and return it with id', async () => {
      const feature = {
        title: 'FEATURE_1',
        anabled: false,
        systems: ['S1'],
      };
      const { id, ...rest } = await entity.insert(feature);
      expect(rest).toEqual(feature)
    });

    test.todo('should insert more than one object if array and return it with ids');
  });

  describe('search', () => {
    test.todo('should return undefined if nothing');
    test.todo('should return by id');
  });

  describe('listAll', () => {
    test.todo('shoudl return undefined if nothing');
    test.todo('should return all objects');
    test.todo('should return objects in the second page');
  });

  describe('remove', () => {
    test.todo('should remove the object and return it');
    test.todo('should remove more than one object if array and return it');
  });

  describe('update', () => {
    test.todo('should return undefined if nothing');
    test.todo('should update object and return it');
  });
});
