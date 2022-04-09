const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    students: {
      type: [String],
      default: [],
    },
    phone: {
      type: String,
      default: "",
    },
    lectures: {
      type: [String],
      default: [],
    },
    legalRepresentative: {
      type: String,
      default: "",
    },
    totalLectures: {
      type: [String],
      default: [],
    },
    lecturePrice: {
      type: Number,
      default: 0,
    },
    homework: {
      type: [
        {
          type: String,
          checked: Boolean,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("accounts", accountSchema);
module.exports = Account;
