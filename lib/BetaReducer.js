"use strict";

var AntlrParser = require('./AntlrParser').AntlrParser;
var AstNodeFactory = require('./AstNodeFactory.js').AstNodeFactory;
var Helpers = require('./Helpers').helpers;

module.exports.betaReducer = function BetaReducer() {

    var self = {};

    self.replaceVariableRecursive = function (expression, name, replacement) {
        if (Helpers.isVariable(expression) && expression.get("x") === name) {
            return replacement;
        }
        if (Helpers.isLambda(expression)) {
// todo - use persistent data structure semantics here: no new required
            return new AstNodeFactory.LambdaDefinition(expression.get("parameters"), self.replaceVariableRecursive(expression.get("expression"), name, replacement));
        }

        if (Helpers.isApplication(expression)) {
            var applicationNode = expression;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

// todo - use persistent data structure semantics here: no new required
            return new AstNodeFactory.Application(self.replaceVariableRecursive(left, name, replacement), self.replaceVariableRecursive(right, name, replacement));
        }

        return expression;
    };


    self.reduceNextRedex = function (ast) {
        if (Helpers.isApplication(ast)) {
            var applicationNode = ast;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

            if (Helpers.isLambda(left)) {
                return self.replaceVariableRecursive(left.get("expression"), left.get("parameters").first(), applicationNode.get("right"));
            } else {
                return new AstNodeFactory.Application(self.reduceNextRedex(left), right);
            }
        } else if (Helpers.isLambda(ast)) {
            var lambdaNode = ast;
            return new AstNodeFactory.LambdaDefinition(lambdaNode.get("parameters"),self.reduceNextRedex(lambdaNode.get("expression")))
        } else {
            return ast;
        }
    };

    self.parseAndReduce = function (expressionString) {
        var ast = AntlrParser.parse(expressionString).get("value");
        return self.reduceNextRedex(ast);
    };

    return self;
}();
