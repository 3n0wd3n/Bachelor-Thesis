const Account = require("../models/Accounts");

async function findOneFromMongo(collection, param, key) {
  return await new Promise((resolve) => {
    collection.findOne({ [param]: key }, (err, data) => {
      if (err) throw err;
      if (data) resolve(data);
      else resolve(false);
    });
  });
}

async function login(username, password) {
  const account = await findOneFromMongo(Account, "username", username);
  if (account.password === password) return account;
  return false;
}

async function createAdmin(data) {
  return await Account(data).save();
}

async function createStudent(data) {
  return await Account(data).save();
}

async function createParent(data) {
  return await Account(data).save();
}

async function getAccount(param, key) {
  return await findOneFromMongo(Account, param, key);
}

exports.createAdmin = createAdmin;
exports.createStudent = createStudent;
exports.createParent = createParent;
exports.getAccount = getAccount;
exports.login = login;
