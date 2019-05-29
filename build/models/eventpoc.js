var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('EventPOCDetails', new Schema(
    {
        eventid : String,
        pocid : String,
        pocname : String,
        poccontactnumber : String
    }
));