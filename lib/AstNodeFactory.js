"use strict";

var Immutable = require('immutable');

module.exports.AstNodeFactory  = (function () {

    var self = {};

    self.IntegerLiteral = function (x) {
        return Immutable.Map({
            type: "integerLiteral",
            x: x
        });
    };

    self.Variable = function (x) {
        return Immutable.Map({
            type: "variable",
            x: x
        });
    };

    self.LambdaDefinition = function (parameters, expression) {
        var parameterList;
        if (parameters instanceof Immutable.List) {
            parameterList = parameters;
        } else {
            parameterList = Immutable.fromJS([].concat(parameters));
        }

        return Immutable.Map({
            type: "lambdaDefinition",
            parameters: parameterList,
            expression: expression
        })
    };

    self.Expression = function (expression) {
        return Immutable.Map({
            type: "expression",
            expression: expression
        })
    };

    self.Application = function (left, right) {
        return Immutable.Map({
            type: "application",
            left: left,
            right: right
        })
    };

    return self;
})();