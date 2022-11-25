const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
  {
    status: {
      type: String,
      default: 'waiting',
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const declareModel = () => {
  try {
    const model = mongoose.model('lectures');
    // model already declared
    return model;
  } catch {
    // declare model
    return mongoose.model('lectures', lectureSchema);
  }
}

module.exports = declareModel();
