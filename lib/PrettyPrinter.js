"use strict";

var Immutable = require('immutable');

module.exports.printer = function PrettyPrinter() {

    var self = {};

    self.print = function (ast) {
        var type = ast.get("type");
        if (type === "integerLiteral") {
            return ast.get("x");
        }
        if (type === "variable") {
            return ast.get("x");
        }
        if (type === "lambdaDefinition") {
            return "\\" + self.printParameters(ast.get("parameters")) + "->" + self.print(ast.get("expression"))
        }
        if (type === "application") {
            var left = self.print(ast.get("left"));
            var right = self.print(ast.get("right"));

            return "(" + left + ")*(" + right + ")";
        }
    };

    self.printParameters = function (parameters) {
        return parameters.join(" ");
    };

    return self;
}();