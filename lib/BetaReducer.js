"use strict";

var AntlrParser = require('./AntlrParser').AntlrParser;
var AstNodeFactory = require('./AstNodeFactory.js').AstNodeFactory;
var Helpers = require('./Helpers').helpers;
var Desugarer = require('../lib/Desugarer').desugarer;
var AlphaConverter = require('../lib/AlphaConverter').alphaConverter;


module.exports.betaReducer = function BetaReducer() {

    var self = {};

    self.replaceVariableRecursive = function (expression, id, replacement) {
        if (Helpers.isVariable(expression) && expression.get("id") === id) {
            return replacement;
        }
        if (Helpers.isLambda(expression)) {
// todo - use persistent data structure semantics here: no new required
            return new AstNodeFactory.LambdaDefinition(expression.get("parameters"), self.replaceVariableRecursive(expression.get("expression"), id, replacement));
        }

        if (Helpers.isApplication(expression)) {
            var applicationNode = expression;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

// todo - use persistent data structure semantics here: no new required
            return new AstNodeFactory.Application(self.replaceVariableRecursive(left, id, replacement), self.replaceVariableRecursive(right, id, replacement));
        }

        return expression;
    };


    self.reduceNextRedex = function (ast) {
        if (Helpers.isApplication(ast)) {
            var applicationNode = ast;
            var left = applicationNode.get("left");
            var right = applicationNode.get("right");

            if (Helpers.isLambda(left)) {
                var parameter = left.get("parameters").first();
                return self.replaceVariableRecursive(left.get("expression"), parameter.get("id"), applicationNode.get("right"));
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
        var desugared = Desugarer.desugar(ast);
        var alphaConverted = AlphaConverter.convert(desugared);

        return self.reduceNextRedex(alphaConverted);
    };

    return self;
}();
