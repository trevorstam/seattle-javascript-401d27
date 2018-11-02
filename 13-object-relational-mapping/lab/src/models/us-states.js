// define your schema

// create your model

// export your model
const mongoose = require('mongoose');

const statesSchema = mongoose.Schema({
  name: String,
  capital: String,
  region: String,
});

const usStates = mongoose.model('states', statesSchema);

export default usStates;