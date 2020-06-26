var express = require('express');
var Metric = require('../controllers/metric');
const router = express.Router();


// Parameter model
var primaryDB = require('../models/metric.js');

var pDB = {minute: primaryDB.minute, hourly: primaryDB.hourly, daily: primaryDB.daily, weekly: primaryDB.weekly, monthly: primaryDB.monthly, clientConfigs: primaryDB.clientConfigs}


var time_range = function time_range (router,Hero){
    router.route('/:input').get((request, response) => {
          var item = request.params["input"]
          pDB[item].find((error, data) => {
            if (error) {
              return next(error)
            } else {
              response.json(data)
            }
          })
    })

    //router.post('/createMetric1', Metric.create);
    
}

var client = function client (router,Hero){
  router.route('/:input/:client').get((request, response) => {
        var item = request.params["input"]
        var client_id = request.params["client"]

        pDB[item].find({client_id: client_id},(error, data) => {
          if (error) {
            return next(error)
          } else {
            response.json(data)
          }
        })
  })

  //router.post('/createMetric2', Metric.create);
  
}

var mtype = function mtype (router,Hero){
  router.route('/:input/:client/:mtype').get((request, response) => {
        var item = request.params["input"]
        var client_id = request.params["client"]
        var machine_type = request.params["mtype"]

        pDB[item].find({client_id: client_id ,machine_type: machine_type},(error, data) => {
          if (error) {
            return next(error)
          } else {
            response.json(data)
          }
        })
  })

//  router.post('/createMetric', Metric.create);
  
}


var mid = function mid (router,Hero){
  router.route('/:input/:client/:mtype/:mid').get((request, response) => {
        var item = request.params["input"]
        var client_id = request.params["client"]
        var machine_type = request.params["mtype"]
        var machine_id = request.params["mid"]

        pDB[item].find({client_id: client_id, machine_type: machine_type, machine_id: machine_id},(error, data) => {
          if (error) {
            return next(error)
          } else {
            response.json(data)
          }
        })
  })

//  router.post('/createMetric', Metric.create);
  
}

module.exports = {
  time_range : time_range,
  client : client,
  mtype : mtype,
  mid : mid  
};


  
