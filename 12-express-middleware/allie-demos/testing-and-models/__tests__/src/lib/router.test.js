'use strict';

const superagent = require('superagent');

const url = 'http://localhost:3000/api/v1/notes';

const { start, stop } = require('../../../src/app.js');

beforeAll( (done) => {
  start(3000);
  done();
});

afterAll( (done) => {
  stop();
  done();
});

describe('Testing the routes', () => {
  let responseID;

  const sample = {title: 'Test note', content: 'Note created in the test'};

  describe('Testing the POST route', () => {

    it('should create a new note' , (done) => {
      superagent
        .post(url)
        .send(sample)
        .then(response => {
          responseID = response.body.id;
          
          expect(response.body.title).toEqual(sample.title);
          expect(response.body.content).toEqual(sample.content);
          expect(response.status).toBe(200);
          done();
        });
    });
  });

  describe('Testing the GET route', () => {
    it('should retrieve a note', (done) => {
      superagent
        .get(`${url}/${responseID}`)
        .then(response => {
          expect(response.body.id).toEqual(responseID);
          expect(response.body.title).toEqual(sample.title);
          expect(response.body.content).toEqual(sample.content);
          done();
        });
    });

    it('should retrieve none of the notes before any notes have been created', (done) => {
      superagent
        .get(url)
        .then(response => {
          expect(response.body).toEqual({});
          done();
        });
    }); 
  });
});
