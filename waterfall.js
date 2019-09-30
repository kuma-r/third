//waterfall:When we have to run multiple tasks which depend on the output of the previous task, Waterfall can be helpful
    //Code:
    var waterfall = require('async-waterfall');
    waterfall([

    function task1(callback) {
        console.log('start!');
        setTimeout(function(){
        console.log("T1 Complete"); 
        callback(null, 'Value from Task 1'); 
            },5000);
    },
    function task2(task1Result, callback) {
        console.log(task1Result);
        setTimeout(function(){
            callback(null, 'Value from Task 2');
            },1000);       
    }
    ],
    function (err,finalResult) {
        if (err) {
        console.log("error occured");
        } else {
        console.log(finalResult);
        console.log('No error happened in any tasks, all tasks done!');   
        }
    })
