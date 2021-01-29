
module.exports = { 
    sendSMS(to, text){
        return require('./sendNotificationSMS.js')(to, text);
    }
}