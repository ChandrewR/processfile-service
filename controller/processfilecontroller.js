const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
var EventDetails   = require('../models/eventdetails');
var EventSummary   = require('../models/eventsummary');
var EventPOCDetails   = require('../models/eventpoc');
var FileStatus   = require('../models/filestatus');
var AssociateDetails = require('../models/associatedetails');
processfileapp = express();
var bodyParser  = require('body-parser');
processfileapp.use(bodyParser.urlencoded({ extended: false }));
processfileapp.use(bodyParser.json());

exports.processfile = function(req, res) {
  
    try {
      if(req.body.fileType == 'EventDetails') {
        EventDetails.insertMany(req.body.eventdetails);
      } else if (req.body.fileType == 'EventSummary') {
        EventSummary.insertMany(req.body.eventsummary);
        EventPOCDetails.insertMany(req.body.eventpocdetails);
      } else if (req.body.fileType == 'AssociateDetails') {
        AssociateDetails.insertMany(req.body.associatedetails);
      }

      var filestatus = new FileStatus({ 
        filename: req.body.fileName,
        processedby : req.body.ID,
        processedon : new Date(),
        status : 'Processed successfully'
      });
  
      filestatus.save().then(result => {
        return res.sendOk({ _id : result._id, date : result.processedon, status : 'Processed successfully'});
      });
      

      
    } catch(e) {
      var filestatus = new FileStatus({ 
        filename: req.body.fileName,
        processedby : req.body.ID,
        processedon : new Date(),
        status : 'Failed :'+e
      });
      filestatus.save().then(result => {
        return res.sendError({ _id : result._id, date : result.processedon,status :'Failed :'+e});
      });;
      
    }
}

exports.getfilestatus = function(req, res) {
  
  //var fs = new FileStatus = [];

  try {
    FileStatus.find().then(data  => {
      console.log(data);
      for(var i=0; i<data.length; i++) {
        console.log(data.filename);
      }
      return res.sendOk(data);
      //return res.json({"statusCode":200, filestatus : data});
    });
  } catch(e) {
    return res.sendError({result : {Status : 'Failed'}});
  }
}