var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('EventSummary', new Schema(
    {
        eventid : String,
        month : String,
        baselocation : String,
        beneficiaryname : String,
        venueaddress : String,
        councilname : String,
        project : String,
        Category : String,
        eventname : String,
        eventdesc : String,
        eventdate : String,
        totalnoofvolunteers : Number,
        totalnoofvolunteerhours : Number,
        totalnooftravelhours : Number,
        overallvolunteeringhrs : Number,
        livesimpacted : Number,
        activitytype : String,
        status : String,
        pocid : String,
        pocname : String,
        poccontactnumber : String
    }
));