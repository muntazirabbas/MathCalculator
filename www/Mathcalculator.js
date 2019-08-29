var exec = require('cordova/exec');

//for multiple purpose add module prefixes

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Mathcalculator', 'coolMethod', [arg0]);
// };

module.exports.add = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'add', [arg0]);
};

module.exports.subtract = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'subtract', [arg0]);
};