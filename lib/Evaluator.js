"use strict";

var BetaReducer = require('../lib/BetaReducer').betaReducer;
var Parser = require('../lib/Parser').parser;
var Printer = require('../lib/PrettyPrinter').printer;
var Desugarer = require('../lib/Desugarer').desugarer;
var Immutable = require('immutable');

module.exports.evaluator = function Evaluator() {
    var self = {};

    function reduceTillThereAreNoMoreRedexes(desugared) {
        var nextResult = desugared;
        while (true) {
            var result = BetaReducer.reduceNextRedex(nextResult);
            nextResult = BetaReducer.reduceNextRedex(result);

            if (result.equals(nextResult)) {
                break;
            }
        }
        return nextResult;
    }

    /**
     *
     * @param {string} expressionString
     */
    self.eval = function (expressionString) {
        var ast = Parser.parse(expressionString).get("value");
        var desugared = Desugarer.desugar(ast);
        var nextResult = reduceTillThereAreNoMoreRedexes(desugared);

        return Printer.print(nextResult);
    };

    return self;
}();
