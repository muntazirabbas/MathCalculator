var exec = require('cordova/exec');

//for multiple purpose add module prefixes

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Mathcalculator', 'coolMethod', [arg0]);
// };
function mathCalculator() {


}
mathCalculator.prototype.add = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'add', [arg0]);
};

mathCalculator.prototype.subtract = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'subtract', [arg0]);
};


module.exports = new mathCalculator();
