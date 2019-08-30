// var MathCalculatorLoader = function (require, exports, module) {
//     var exec = require('cordova/exec');

//     // var intervalId;

//     function Mathcalculator() { }
//     Mathcalculator.prototype.add = function (arg0, success, error) {
//         exec(success, error, 'MathcalculatorManager', 'add', [arg0]);
//     };

//     Mathcalculator.prototype.subtract = function (arg0, success, error) {
//         exec(success, error, 'MathcalculatorManager', 'subtract', [arg0]);
//     };

//     var mathCalculator = new Mathcalculator();
//     module.exports = mathCalculator;
// };



////////////////////////////////////////////

var exec = require('cordova/exec');

function mathCalculator() { }

mathCalculator.prototype.add = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'add', [arg0]);
};

mathCalculator.prototype.subtract = function (arg0, success, error) {
    exec(success, error, 'Mathcalculator', 'subtract', [arg0]);
};


module.exports = new mathCalculator();
