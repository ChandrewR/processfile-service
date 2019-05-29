var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('EventDetails', new Schema(
    {
        eventid : String,
        eventdate : Date,
        employeeid : String,
        employeename : String,
        volunteerhours : Number,
        travelhours : Number,
        /* livesimpacted : Number, */
        businessunit : String,
        status : String,
        iiepcategory : String
    }
));