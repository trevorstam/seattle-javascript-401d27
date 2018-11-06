import supergoose, {
  startDB,
  stopDB
} from '../supergoose.js';
import {
  app
} from '../../src/app.js';
import process from 'process';

process.env.APP_SECRET = 'barbapapa';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clean up as needed
});

describe('app', () => {


  it('should test for an unregistered route and return a 404 related message', async () => {
    const response = await mockRequest.post('/bollocks');
    expect(response.status).toBe(404);
  });

  it('should sign up with good creds', async () => {
    const userInfo = {
      username: 'foo',
      email: 'foo@bar.com',
      password: 'foobar',
    };
    const response = await mockRequest.post('/api/signup').send(userInfo);
    expect(response.text.split('.').length).toBe(3);
  });

  it('should sign fail with bad creds', async () => {

    const userInfo = {
      username: 'foo',
      email: 'foo@bar.com',
    };

    const response = await mockRequest.post('/api/signup').send(userInfo);

    expect(response.status).toBe(400);

  });

  it('should throw 401 if not authenticated', async () => {

    const userInfo = {
      username: 'foo',
      email: 'foo@bar.com',
      password: 'foobar',
    };

    await mockRequest.post('/api/signup').send(userInfo);

    const getResponse = await mockRequest.get('/api/signin');
    expect(getResponse.status).toBe(401);

  });

  it('should sign in', async () => {
    const userInfo = {
      username: 'foo',
      email: 'foo@bar.com',
      password: 'foobar',
    };

    await mockRequest.post('/api/signup').send(userInfo);

    const response = await mockRequest.get('/api/signin').auth({
      username: 'foo',
      email: 'foo@bar.com',
      password: 'foobar',
    });
    expect(response.status).toBe(200);
  });


});