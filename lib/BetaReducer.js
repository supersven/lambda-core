"use strict";

var Parser = require('./Parser.js').parser;

module.exports.betaReducer = function BetaReducer() {

    var self = {};

    self.replaceVariableRecursive = function (expression, name, replacement) {
        if (expression.get("type") === "variable" && expression.get("x") === name) {
            return replacement;
        }
        if (expression.get("type") === "lambdaDefinition") {
// todo - use persistent data structure semantics here: no new required
            return new Parser.LambdaDefinition(expression.get("parameters"), self.replaceVariableRecursive(expression.get("expression"), name, replacement));
        }

        if (expression.get("type") === "application") {
            var applicationNode = expression;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

// todo - use persistent data structure semantics here: no new required
            return new Parser.Application(self.replaceVariableRecursive(left, name, replacement), self.replaceVariableRecursive(right, name, replacement));
        }

        return expression;
    };


    self.reduceNextRedex = function (ast) {
        if (ast.get("type") === "application") {
            var applicationNode = ast;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

            if (left.get("type") === "lambdaDefinition") {
                return self.replaceVariableRecursive(left.get("expression"), left.get("parameters").first(), applicationNode.get("right"));
            } else {
                return new Parser.Application(self.reduceNextRedex(left), right);
            }
        } else {
            return ast;
        }
    };

    self.parseAndReduce = function (expressionString) {
        var ast = Parser.parse(expressionString).get("value");
        return self.reduceNextRedex(ast);
    };

    return self;
}();
