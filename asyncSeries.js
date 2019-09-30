    //Async Series : Async.series takes the collection of asynchronous functions and optional callback method. When all the tasks complete the execution, then the final callback will be called and return the results
    //Code:
    var async = require('async');
    async.series([
    function task1(callback) {
        console.log('start!');
        setTimeout(function(){
        console.log("T1 Complete");     
        callback(null, 'Value from Task 1'); 
            },5000);
    },
    function task2(callback) {
        setTimeout(function(){
            console.log("T2 Complete");
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