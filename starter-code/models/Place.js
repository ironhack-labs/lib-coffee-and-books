const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: { type: String, enum: ['coffe shop', 'bookstore'] },
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: { createAt: 'create_at', updateAt: 'update_at' }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);
