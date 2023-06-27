module.exports = func => (req,res,next)=>{
    Promise.resolve(func(req,res,next)).catch(next)
}

/*
-🎗️Part Of Funtional Programming
-🎗️Use Promise In Javascript which Handles asynchronous operations;
-🎗️A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively
resolve:-> when the async operation has been successfully completed.
reject :->  when the async operation fails or if some error occurs.
-🎗️In case we use alternative .catch instead reject If anything bad then next back! 
@FOLLOW_PROCES_&_CHOOSE_ONE 
try catch async await || bigPromise
-🎗️import in home CONTROLLER because promise expect one one function that is present on constroller that's MOTO 
*/