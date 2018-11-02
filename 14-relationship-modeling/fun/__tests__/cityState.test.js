import { startDB, stopDB } from '../src/supergoose.js';

import City from '../src/models/city.js';
import State from '../src/models/state.js';

beforeAll(startDB);
afterAll(stopDB);
beforeEach((done) => {
  City.deleteMany({}).then(results => done());
  State.deleteMany({}).then(results => done());
});

describe('City <-> State', () => {
  
  it('should associate a city and state', async () => {

    const state = await State.create({ name : 'Washington' });

    const seattle = await City.create({ name : 'Seattle', state: state._id });

    const bothell = await City.create({ name : 'Bothell', state: state._id });

    const foundSeattle = await City.findById(seattle._id).populate('state');

    expect(foundSeattle.state.name).toBe('Washington');

    const foundBothell = await City.findById(bothell._id).populate('state');

    expect(foundBothell.state.name).toBe('Washington');

  });

  it('should get all cities in Washington', async () => {

    const wa = await State.create({ name : 'Washington' });

    const oregon = await State.create({ name : 'Oregon' });

    await City.create({ name : 'Seattle', state: wa._id });

    await City.create({ name : 'Bothell', state: wa._id });

    await City.create({ name : 'Portland', state: oregon._id });

    const citiesInWashington = await City.find({state : wa._id});

    expect(citiesInWashington.length).toBe(2);

  });

  it('should get all cities in Washington where cities are populated', async () => {

    // when GET /state/:id want array of cities to be populate

    // set up
    const wa = await State.create({ name : 'Washington' });

    await City.create({ name : 'Seattle', state: wa._id });

    await City.create({ name : 'Bothell', state: wa._id });

    const id = wa._id;

    // now API route simulation begins /state/:id

    const washington = await State.findOne({_id : id});

    const citiesInWashington = await City.find({state : id});

    washington.cities = citiesInWashington;

    expect(washington.cities[0].name).toBe('Seattle');

    expect(washington.cities[1].name).toBe('Bothell');

  });


});