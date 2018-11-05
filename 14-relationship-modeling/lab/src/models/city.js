import mongoose, {
  Schema,
} from 'mongoose';

const citySchema = mongoose.Schema({
  name: String,
  nickname: String,
  state: {
    type: Schema.Types.ObjectID,
    ref: 'state',
  },
});

const city = mongoose.model('city', citySchema);

export default city;