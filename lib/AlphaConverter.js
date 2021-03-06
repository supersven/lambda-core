"use strict";

var Helpers = require('./Helpers').helpers;
var AstNodeFactory = require('./AstNodeFactory.js').AstNodeFactory;
var Immutable = require('immutable');

module.exports.alphaConverter = function AlphaConverter() {

    var self = {};

    function createID(name, symbolMap) {
        var number = symbolMap.get(name);

        if (number === 0) {
            return name;
        } else {
            return name + number;
        }
    }

    function createVariableWithID(name, symbolMap) {
        var id = createID(name, symbolMap);

        return AstNodeFactory.VariableWithId(name, id);
    }    
    
    function createParameterWithID(name, symbolMap) {
        var id = createID(name, symbolMap);

        return AstNodeFactory.ParameterWithId(name, id);
    }

    function resultWithState(ast, symbolMap) {
        return Immutable.Map({
            type: "resultWithState",
            ast: ast,
            symbolMap: symbolMap
        })
    }

    function takeTheGreaterOne(previous, next) {
        if (previous <= next) {
            return previous;
        } else if (previous < next) {
            return next;
        }
    }

    function initOrIncrement(value) {
        if (value === "notSetValue") {
            return 0;
        }

        return value + 1;
    }

    function convertInternal(ast, symbolMap) {
        if (Helpers.isLambda(ast)) {
            var parameters = ast.get("parameters");

            var firstParameter = parameters.get(0);
            var updatedSymbolMap = symbolMap.update(firstParameter.get("name"), "notSetValue", initOrIncrement);

            var newParameter = createParameterWithID(firstParameter.get("name"), updatedSymbolMap);
            var convertResultWithState = convertInternal(ast.get("expression"), updatedSymbolMap);
            var newExpression = convertResultWithState.get("ast");
            var newSymbolMap = convertResultWithState.get("symbolMap");
            var lambdaDefinition = AstNodeFactory.LambdaDefinition(newParameter, newExpression);

            return resultWithState(lambdaDefinition, updatedSymbolMap.mergeWith(takeTheGreaterOne, newSymbolMap));
        } else if (Helpers.isVariable(ast)) {
            var name = ast.get("name");
            var variable = createVariableWithID(name, symbolMap);
            return resultWithState(variable, symbolMap);
        } else if (Helpers.isApplication(ast)) {
            var left = ast.get("left");
            var right = ast.get("right");

            var leftConverted = convertInternal(left, symbolMap);
            var rightConverted = convertInternal(right, leftConverted.get("symbolMap"));

            return resultWithState(AstNodeFactory.Application(leftConverted.get("ast"), rightConverted.get("ast")), rightConverted.get("symbolMap"));
        } else if (Helpers.isInteger(ast)){
            return resultWithState(ast, symbolMap);
        }

        throw "Should never happen!";
    }

    self.convert = function (ast) {
        return convertInternal(ast, Immutable.Map()).get("ast")
    };

    return self;
}();
