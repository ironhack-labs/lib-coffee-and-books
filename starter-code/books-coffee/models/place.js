const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Coffeeshop','Bookstore']
  },
  location: {
    type: { type:  String },
    coordinates: [Number]
  }
});

placeSchema.index({ location: '2dsphere'});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
