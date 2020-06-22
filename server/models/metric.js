var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var primaryDB = new Schema({
    timestamp: {
       type: Date
    },
    inlet: {
       type: Number
    },
    outlet: {
       type: Number
    },
    flow: {
       type: Number
    }
 })



var minute = mongoose.model('Parameter',primaryDB, 'minute_primary');
var hourly = mongoose.model('Parameter',primaryDB, 'hourly_primary');
var daily = mongoose.model('Parameter',primaryDB, 'daily_primary');
var weekly = mongoose.model('Parameter',primaryDB, 'weekly_primary');
var monthly = mongoose.model('Parameter',primaryDB, 'monthly_primary');

module.exports = {
    minute : minute,
    hourly : hourly,
    daily : daily,
    weekly : weekly,
    monthly : monthly   
};




