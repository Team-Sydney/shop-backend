module.exports = { 
    uploadImageFile(req, res, next) {
        return require('./uploadImageFile.js')(req, res, next);
    }
}