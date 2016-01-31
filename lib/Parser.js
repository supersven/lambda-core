"use strict";

var Parsimmon = require('parsimmon');

var parser = (function Parser() {

    var self = {};

    self.IntegerLiteral = function (x) {
        this.type = "integerLiteral";
        this.x = x
    };

    self.Variable = function (x) {
        this.type = "variable";
        this.x = x
    };

    self.LambdaDefinition = function (parameters, expression) {
        this.type = "lambdaDefinition";
        this.parameters = [].concat(parameters);
        this.expression = expression
    };

    self.Expression = function (expression) {
        this.type = "expression";
        this.expression = expression
    };

    self.Application = function (left, right) {
        this.type = "application";
        this.left = left;
        this.right = right;
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
        return expression.parse(x);
    };

    return self;
})();

module.exports.parser = parser;
