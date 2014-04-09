var request = require('supertest');
var routes = require('../lib/routes');

describe('routes', function() {

  describe('GET /users', function() {
    it('call users#index', function(done) {
      var usersIndex = this.sinon.spy(function(req, res) {
        res.json({ a: 1 });
      });
      var users = { index: usersIndex };
      request(routes(users)).get('/users')
      .expect(200)
      .end(function(err, res) {
        expect(usersIndex).to.have.been.called;
        done();
      });
    });
  });

  describe('GET /users/bouzuya', function() {
    it('call users#show and req.params.user === "bouzuya"', function(done) {
      var usersShow = this.sinon.spy(function(req, res) {
        res.json({ a: 1 });
      });
      var users = { show: usersShow };
      request(routes(users)).get('/users/bouzuya')
      .expect(200)
      .end(function(err, res) {
        expect(usersShow).to.have.been.called;
        var req = usersShow.firstCall.args[0];
        expect(req).to.have.deep.property('params.user', 'bouzuya');
        done();
      });
    });
  });

  describe('POST /users', function() {
    it('call users#create and req.body.username === "bouzuya"', function(done) {
      var usersCreate = this.sinon.spy(function(req, res) {
        res.json({ a: 1 });
      });
      var users = { create: usersCreate };
      request(routes(users)).post('/users').send({ username: 'bouzuya' })
      .expect(202)
      .end(function(err, res) {
        expect(usersCreate).to.have.been.called;
        var req = usersCreate.firstCall.args[0];
        expect(req).to.have.deep.property('body.username', 'bouzuya');
        done();
      });
    });
  });
});

