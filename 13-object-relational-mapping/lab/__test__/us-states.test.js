import supergoose, {
  startDB,
  stopDB,
} from '../src/supergoose';
import usStates from '../src/models/us-states';

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  await usStates.deleteMany({});
});

xdescribe('post route', () => {
  it('should create new state', (done) => {
    const nevadaCapital = {
      capital: 'Carson City',
    };
    const nevada = new usStates(nevadaCapital);
    console.log(nevada);
    expect(nevada.capital).toBe(nevadaCapital.capital);
    done();
  });
});