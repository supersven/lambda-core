"use strict";

var expect = require('expect.js');
var Printer = require('../lib/IdPrettyPrinter.js').printer;
var Immutable = require('immutable');

describe("IdPrettyPrinter that prints IDs instead of names from variables / parameters", function () {

    it("should print literal '1'", function () {
        var result = print(
            {type: 'integerLiteral', value: '1'}
        );

        expect(result).to.eql("1");
    });

    it("should print variable 'a' with id 'a1' as 'a1'", function () {
        var result = print(
            {type: 'variable', name: 'a', id: "a1"}
        );

        expect(result).to.eql("a1");
    });

    it("should print constant lambda expression '\\->1' as usual", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [],
                expression: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("\\->1")
    });

    it("should print constant lambda expression with parameter '\\x->1' where x's id is 'x1' with 'x1'", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [{type: 'variable', name: 'x', id: "x1"}],
                expression: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("\\x1->1");
    });

    it("should print nested lambda expression '\\x->\\y->x' with the respective ids", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [{type: 'variable', name: 'x', id: "x1"}],
                expression: {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'variable', name: 'y', id: "y3"}],
                    expression: {type: 'variable', name: 'x', id: "x1"}
                }
            }
        );

        expect(result).to.eql("\\x1->\\y3->x1")
    });

    it("should print a lambda expression with two arguments '\\x y->1' with the respective ids", function () {
            var result = print(
                {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'variable', name: 'x', id: "x1"}, {type: 'variable', name: 'y', id: "y1"}],
                    expression: {
                        type: 'integerLiteral', value: '1'
                    }
                });

            expect(result).to.eql("\\x1 y1->1")
        }
    );

    it("should print application '(\\x->x) 1' with x's id", function () {
        var result = print(
            {
                type: 'application',
                left: {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'variable', name: 'x', id: "x1"}],
                    expression: {type: 'variable', name: 'x', id: "x1"}
                },

                right: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("(\\x1->x1) 1");
    });

    function print(json) {
        return Printer.print(Immutable.fromJS(json));
    }
});
