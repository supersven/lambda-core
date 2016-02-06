"use strict";

var Parser = require('./Parser.js').parser;

module.exports.betaReducer = function BetaReducer() {

    var self = {};

    self.replaceVariableRecursive = function (expression, name, replacement) {
        if (expression.get("type") === "variable" && expression.get("x") === name) {
            return replacement;
        }
        if (expression.get("type") === "lambdaDefinition") {
            return new Parser.LambdaDefinition(expression.get("parameters"), self.replaceVariableRecursive(expression.get("expression"), name, replacement));
        }

        return expression;
    };

    self.reduce = function (expressionString) {
        var ast = Parser.parse(expressionString).get("value");
        if (ast.get("type") === "application") {
            var applicationNode = ast;
            var left = applicationNode.get("left");

            return self.replaceVariableRecursive(left.get("expression"), left.get("parameters").first(), applicationNode.get("right"));
        } else {
            return ast;
        }
    };

    return self;
}();
