var express = require('express');
var Metric = require('../controllers/metric');
const router = express.Router();


// Parameter model
var primaryDB = require('../models/metric.js');

var pDB = {minute: primaryDB.minute, hourly: primaryDB.hourly, daily: primaryDB.daily, weekly: primaryDB.weekly, monthly: primaryDB.monthly}


module.exports = function(router,Hero){
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

    router.post('/createMetric', Metric.create);
    
}




  