"use strict";

var Helpers = require('./Helpers').helpers;

module.exports.printer = function IdPrettyPrinter() {

    var self = {};

    self.print = function (ast) {
        if (Helpers.isInteger(ast)) {
            return ast.get("value");
        }
        if (Helpers.isVariable(ast)) {
            return ast.get("id");
        }
        if (Helpers.isLambda(ast)) {
            return "\\" + self.printParameters(ast.get("parameters")) + "->" + self.print(ast.get("expression"))
        }
        if (Helpers.isApplication(ast)) {
            var left = self.print(ast.get("left"));
            var right = self.print(ast.get("right"));

            return "(" + left + ") " + right;
        }
    };

    self.printParameters = function (parameters) {
        return parameters.map(function (parameter) {
            return parameter.get("id");
        }).join(" ");
    };

    return self;
}();