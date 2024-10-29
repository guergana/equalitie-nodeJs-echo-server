const request = require('supertest');
const server = require('../index.js');

describe('POST', () => {
  it('echos sent message', function() {
    let result = request(server).post('/').send('hola!')

    expect(result._data).toEqual('hola!');


  });

});



