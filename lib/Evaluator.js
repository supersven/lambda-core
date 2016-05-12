"use strict";

var BetaReducer = require('../lib/BetaReducer').betaReducer;
var AntlrParser = require('../lib/AntlrParser').AntlrParser;
var Printer = require('../lib/PrettyPrinter').printer;
var Desugarer = require('../lib/Desugarer').desugarer;
var AlphaConverter = require('../lib/AlphaConverter').alphaConverter;

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

    self.eval = function (expressionString) {
        var ast = AntlrParser.parse(expressionString).get("value");
        var desugared = Desugarer.desugar(ast);
        var alphaConverted = AlphaConverter.convert(desugared);
        var nextResult = reduceTillThereAreNoMoreRedexes(alphaConverted);

        return Printer.print(nextResult);
    };

    return self;
}();
