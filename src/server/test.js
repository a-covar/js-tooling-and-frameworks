const request = require('supertest');
const server = require('./server.js');
const assert = require('assert');

function validateObject(obj){
  assert.ok("id" in obj);
  assert.ok("url" in obj);
  assert.ok("img" in obj);
  assert.ok("name" in obj);
  assert.ok("type" in obj);
  assert.ok("likes" in obj);
  assert.ok("dislikes" in obj);
}


describe('API TEST', () => {
  it('[GET] ALL ITEMS', (done) => {
    request(server)
        .get('/api/items')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const response = res.body;
          assert.ok(Array.isArray(response.items));
          assert.strictEqual(response.items.length, 10);
          for( let obj of response.items){
            validateObject(obj);
          }
        })
        .expect(200, done);
  });
  it('[GET] FIVE ITEMS', (done) => {
    request(server)
        .get('/api/items?q=five')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const response = res.body;
          assert.ok(Array.isArray(response.items));
          assert.strictEqual(response.items.length, 5);
          for( let obj of response.items){
            validateObject(obj);
          }
        })
        .expect(200, done);
  });
  it('NON EXISTING ROUTE', (done) => {
    request(server)
        .get('/api/asd')
        .expect('Content-Type', /json/)
        .expect(404, done);
  });
});
