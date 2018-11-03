import supergoose, {
  startDB,
  stopDB,
} from '../src/supergoose';
import usStates from '../src/models/us-states';

const {
  server,
} = require('../src/app');

const mockRequest = supergoose(server);

const url = '/api/v1/states';
const cali = {
  name: 'California',
  capital: 'Sacramento',
  region: 'West',
};

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  await usStates.deleteMany({});
});

describe('testing routes of the api server', () => {
  describe('testing the post methods', () => {
    it('should respond with a 200 upon valid post request', async () => {
      const response = await mockRequest.post(url).send(cali);
      expect(response.status).toBe(200);
    });

    it('should respond with a 404 when request is invalid on post', async () => {
      console.log('yoohoo');
      const response = await mockRequest.post('/api/v1/beepbeep').send(cali);

      expect(response.status).toBe(404);
    });
    it('should return 400 when a request body is not passed into the post request', async () => {
      const response = await mockRequest.post(url).send();
      expect(response.status).toBe(400);
    });
  });
  describe('testing the get methods', () => {
    it('should get a 200 response upon a valid get request', async () => {
      const response = await mockRequest.get(url);

      expect(response.status).toBe(200);
    });
    it('should get a 404 upon invalid get request', async () => {
      const response = await mockRequest.get('/api/v1/bollocks');
      expect(response.status).toBe(404);
    });
  });
  describe('testing the put methods', () => {
    it('should get a 200 response upon a valid put request', async () => {
      const modify = {
        name: 'Golden State',
      };
      const response = await mockRequest.post(url).send(cali);
      const id = response.body._id;

      const putRequest = await mockRequest.put(`${url}/${id}`).send(modify);
      expect(putRequest.status).toBe(200);

    });
    it('should get a 404 response upon invalid put request', async () => {
      const response = await mockRequest.put('/api/v1/bollocks');
      expect(response.status).toBe(404);
    });
    it('should get a 400 response when a nothing is passed into the put request', async () => {
      const response = await mockRequest.post(url).send(cali);
      const id = response.body._id;
      const emptyPut = await mockRequest.put(`${url}/${id}`).send();
      console.log(emptyPut.status);
      expect(emptyPut.status).toBe(400);
    });
  });

});