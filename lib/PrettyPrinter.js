"use strict";

var Immutable = require('immutable');

module.exports.printer = function PrettyPrinter() {

    var self = {};

    self.print = function (ast) {
        if (ast.type === "integerLiteral") {
            return ast.x;
        }
        if (ast.type === "variable") {
            return ast.x;
        }
        if (ast.type === "lambdaDefinition") {
            return "\\" + self.printParameters(ast.parameters) + "->" + self.print(ast.expression)
        }
        if (ast.type === "application") {
            return "(" + self.print(ast.left) + ")*(" + self.print(ast.right) + ")";
        }
    };

    self.printParameters = function (parameters) {
        var parameterList  = Immutable.fromJS(parameters);

        return parameterList.join(" ");
    };

    return self;
}();