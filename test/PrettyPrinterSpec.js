"use strict";

var expect = require('expect.js');
var Printer = require('../lib/PrettyPrinter.js').printer;
var Immutable = require('immutable');

describe("PrettyPrinter", function () {

    it("should print literal '1'", function () {
        var result = print(
            {type: 'integerLiteral', value: '1'}
        );

        expect(result).to.eql("1");
    });

    it("should print variable 'a'", function () {
        var result = print(
            {type: 'variable', name: 'a'}
        );

        expect(result).to.eql("a");
    });

    it("should print constant lambda expression '\\->1'", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [],
                expression: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("\\->1")
    });

    it("should print constant lambda expression with parameter '\\x->1'", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [{type: 'parameter', name: 'x'}],
                expression: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("\\x->1");
    });

    it("should print nested lambda expression '\\x->\\y->x'", function () {
        var result = print(
            {
                type: 'lambdaDefinition',
                parameters: [{type: 'parameter', name: 'x'}],
                expression: {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'parameter', name: 'y'}],
                    expression: {type: 'variable', name: 'x'}
                }
            }
        );

        expect(result).to.eql("\\x->\\y->x")
    });

    it("should print a lambda expression with two arguments '\\x y->1'", function () {
            var result = print(
                {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'parameter', name: 'x'}, {type: 'parameter', name: 'y'}],
                    expression: {
                        type: 'integerLiteral', value: '1'
                    }
                });

            expect(result).to.eql("\\x y->1")
        }
    );

    it("should print application '(\\x->x) 1'", function () {
        var result = print(
            {
                type: 'application',
                left: {
                    type: 'lambdaDefinition',
                    parameters: [{type: 'parameter', name: 'x'}],
                    expression: {type: 'variable', name: 'x'}
                },

                right: {type: 'integerLiteral', value: '1'}
            }
        );

        expect(result).to.eql("(\\x->x) 1");
    });

    function print(json) {
        return Printer.print(Immutable.fromJS(json));
    }
});
