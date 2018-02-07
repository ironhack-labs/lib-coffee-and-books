
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

PlaceSchema.index({ location: '2dsphere' });

const place = mongoose.model('place', PlaceSchema);

module.exports = place;
