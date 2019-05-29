var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('FileStatus', new Schema(
    {
        filename : String,
        processedby : String,
        processedon : Date,
        status : String
    }
));