var Metric = require('../models/metric').Metric;

module.exports = {
    create : function(request, response){
            var data = new Metric({
                name : request.body.name,
                description : request.body.description
            }).save(function(err, metric){
                if(err){
                    console.log("Error in create new metrics", err);
                    throw err
                }

                response.json(metric);
            })
    },
}