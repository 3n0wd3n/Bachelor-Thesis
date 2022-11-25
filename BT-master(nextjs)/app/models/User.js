const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    students: {
      type: [String],
      default: []
    },
    phone: {
      type: String,
      default: ""
    },
    lectures: {
      type: [String],
      default: []
    },
    legalRepresentative: {
      type: String,
      default: ""
    },
    totalLectures: {
      type: [String],
      default: []
    },
    lecturePrice: {
      type: Number,
      default: 0
    },
    homework: {
      type: [{
        type: String,
        checked: Boolean
      }],
      default: []
    },
    plan: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const declareModel = () => {
  try {
    const model = mongoose.model('users');
    // model already declared
    return model;
  } catch {
    // declare model
    return mongoose.model('users', userSchema);
  }
}

module.exports = declareModel();
