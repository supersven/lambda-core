"use strict";

module.exports.helpers = function Helpers() {

    var self = {};

    self.isLambda = function (expression) {
        return expression.get("type") === "lambdaDefinition";
    };

    self.isVariable = function (expression) {
        return expression.get("type") === "variable";
    };

    self.isInteger = function (expression) {
        return expression.get("type") === "integerLiteral";
    };

    self.isApplication = function (expression) {
        return expression.get("type") === "application";
    };

    return self;
}();