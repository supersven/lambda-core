"use strict";

var Parser = require('../lib/Parser.js').parser;
var Helpers = require('./Helpers').helpers;

module.exports.desugarer = function Desugarer() {

    var self = {};

    self.desugar = function (ast) {
        if (Helpers.isLambda(ast)) {
            var expression = ast.get("expression");
            var parameters = ast.get("parameters");

            return self.recursiveLambda(parameters, expression);
        }
        if(Helpers.isApplication(ast)){
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