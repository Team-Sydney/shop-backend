
module.exports = { 
    sendNotificationSMS(to, text){
        return require('./sendNotificationSMS.js')(to, text);
    }
}