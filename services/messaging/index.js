module.exports = { 
  sendNotification(token) {
      return require('./notifyOrder.js')(token);
  }
}