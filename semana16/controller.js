const userModel = require('./model');

// Controller de login
function login(username, password) {
  const authenticated = userModel.findByCredentials(username, password);
  return authenticated;
}

module.exports = {
  login
};