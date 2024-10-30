const request = require('supertest');
const {app} = require('../index.js');


describe('POST', () => {

  afterEach((done) => {
      app.close(done); 
  });

  it('echos sent message', async () => {
    let result = await request(app).post('/').send('hola!')
    expect(result.text).toEqual('hola!');
    
  });

});



