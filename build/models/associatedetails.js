var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('AssociateDetails', new Schema(
    {
        associateid : String,
        name : String,
        designation : String,
        location : String,
        bu : String
    }
));