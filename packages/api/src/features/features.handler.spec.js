import { createFeatureHandler } from './features.js';

describe('features handler', () => {
  it('should insert a feature demanding title, allowedRoles and systems', async () => {
    const resultado = await createFeatureHandler({
      body: JSON.stringify({
        title: 'test handler',
        allowedRoles: ['ADMIN'],
        systems: ['S1', 'S2'],
      }),
    });
    expect(resultado.statusCode).toEqual(200);
    const body = JSON.parse(resultado.body);
    expect(body.title).toEqual('test handler');
    expect(body.allowedRoles).toEqual(['ADMIN']);
    expect(body.systems).toEqual(['S1', 'S2']);
  });

  test.todo('should list all active features of one system');
  test.todo('should list all features of one system');
  test.todo('should list all features of one system for an role');
  test.todo('should delete a feature');
  test.todo('should insert a new system in one existing feature');
  test.todo('should insert a new allowedRole in one existing feature');
});
