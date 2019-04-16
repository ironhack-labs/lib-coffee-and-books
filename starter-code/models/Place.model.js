const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Place', new Schema({
  name: String,
  type: {
    type: String,
    enum: ['CoffeeShop', 'Bookstore'],
  },
  coordinates: [Number],
},
{
  timestamps: true,
}));