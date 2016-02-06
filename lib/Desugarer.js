"use strict";

var Parser = require('../lib/Parser.js').parser;

module.exports.desugarer = function Desugarer() {

    var self = {};

    self.desugar = function (ast) {
        if (ast.get("type") === "lambdaDefinition") {
            var expression = ast.get("expression");
            var parameters = ast.get("parameters");

            return self.recursiveLambda(parameters, expression);
        }
        if(ast.get("type") === "application"){
            var left = ast.get("left");
            var right = ast.get("right");

            return Parser.Application(self.desugar(left), self.desugar(right));
        }
        return ast;
    };

    self.recursiveLambda = function (parameters, expression) {
        if(parameters.size === 1){
            return Parser.LambdaDefinition(parameters.first(), expression);
        } else {
            return Parser.LambdaDefinition(parameters.first(), self.recursiveLambda(parameters.rest(), expression));
        }
    };

    return self;
}();