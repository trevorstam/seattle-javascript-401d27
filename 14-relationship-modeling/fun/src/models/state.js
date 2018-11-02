import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
});

const model = mongoose.model('State', schema);

export default model;