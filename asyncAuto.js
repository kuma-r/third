//async auto
    //Code:
        var async=require('async');
        async.auto({
            company: function(callback) {
                callback(null, 'Oneplus');
            },
            model: function(callback) {
                callback(null, '6T');
            },
            year: ['company', 'model', function(results, callback) {
                callback(null, 2018);
            }]
        }, function(err, results) {
            if(err)
            console.log(`error occured! ${err}`);
            else
            console.log(results);
        })
