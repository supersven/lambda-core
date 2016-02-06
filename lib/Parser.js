"use strict";

var Parsimmon = require('parsimmon');
var Immutable = require('immutable');

var parser = (function Parser() {

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

    var lambda = Parsimmon.string("\\").desc("lambda");
    var arrow = Parsimmon.string('->').desc("arrow");
    var parameter = Parsimmon.seq(Parsimmon.letter, Parsimmon.string(" ").many()).desc("parameter").map(
        function (x) {
            return x[0]
        }
    );

    var lazyExpression = Parsimmon.lazy("expression", function () {
        return expression
    });

    var lambdaDefinition = Parsimmon.seq(lambda, parameter.many(), arrow, lazyExpression).map(function (x) {
        return new self.LambdaDefinition(x[1], x[3])
    }).desc("lambdaDefinition");

    var integerLiteral = Parsimmon.digit.atLeast(1).map(function (digits) {
        return new self.IntegerLiteral(digits)
    }).desc("integerLiteral");


    var variable = Parsimmon.letter.map(function (name) {
        return new self.Variable(name);
    }).desc("variable");

    var openBracket = Parsimmon.string("(").desc("(");

    var closeBracket = Parsimmon.string(")").desc(")");

    var application = Parsimmon.seq(openBracket, lazyExpression, closeBracket, Parsimmon.string("*").desc("whitespace"), openBracket, lazyExpression, closeBracket).map(function (x) {
        return new self.Application(x[1], x[5]);
    }).desc("application");

    var expression = Parsimmon.alt(integerLiteral, variable, lambdaDefinition, application).desc("one of").desc("expression");

    /**
     *
     * @param x string to parse
     * @returns @type{IntegerLiteral}
     */
    self.parse = function (x) {
        return Immutable.fromJS(expression.parse(x));
    };

    return self;
})();

module.exports.parser = parser;
