module.exports = { 
  getAuthToken(req, res, next) {
    return require('./getAuthToken.js')(req, res, next);
  },
  checkIfAuthenticated(req, res, next) {
    return require('./checkIfAuthenticated.js')(req, res, next);
  }
}