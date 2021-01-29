module.exports = { 
  sendNotification(token, msg) {
      return require('./notifyOrder.js')(token, msg);
  }
}