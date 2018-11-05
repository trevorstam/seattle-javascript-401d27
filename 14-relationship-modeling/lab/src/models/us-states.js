const mongoose = require('mongoose');

const statesSchema = mongoose.Schema({
  name: String,
  capital: String,
  region: String,
});

const usStates = mongoose.model('states', statesSchema);

export default usStates;