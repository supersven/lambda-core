"use strict";

var Parser = require('./Parser.js').parser;

module.exports.evaluator = function Evaluator() {

    var self = {};

    self.replaceVariableRecursive = function (expression, name, replacement) {
        if (expression.type === "variable" && expression.x === name) {
            return replacement;
        }
        if (expression.type === "lambdaDefinition") {
            return new Parser.LambdaDefinition(expression.parameters, self.replaceVariableRecursive(expression.expression, name, replacement));
        }

        return expression;
    };

    self.betaReduce = function (expressionString) {
        var ast = Parser.parse(expressionString).value;
        if (ast.type === "application") {
            var applicationNode = ast;
            var left = applicationNode.left;

            return self.replaceVariableRecursive(left.expression, left.parameters[0], applicationNode.right);
        } else {
            return ast;
        }
    };

    return self;
}();
