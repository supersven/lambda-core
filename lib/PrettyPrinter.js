"use strict";

var Helpers = require('./Helpers').helpers;

module.exports.printer = function PrettyPrinter() {

    var self = {};

    self.print = function (ast) {
        if (Helpers.isInteger(ast)) {
            return ast.get("value");
        }
        if (Helpers.isVariable(ast)) {
            return ast.get("name");
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
        return parameters.join(" ");
    };

    return self;
}();