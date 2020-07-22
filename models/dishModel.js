const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      unique: true
  },
  desc: {
      type: String,
      required: true
  }
},
  {
      timestamps: true
  }
);

const Dishes = new mongoose.model("Dish", dishSchema);
module.exports = Dishes;