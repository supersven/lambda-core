"use strict";

var expect = require('expect.js');
var Printer = require('../lib/PrettyPrinter.js').printer;

describe("PrettyPrinter", function () {

    it("should print literal '1'", function () {
        var result = Printer.print(
            {type: 'integerLiteral', x: '1'}
        );

        expect(result).to.eql("1");
    })

    it("should print variable 'a'", function () {
        var result = Printer.print(
            {type: 'variable', x: 'a'}
        );

        expect(result).to.eql("a");
    });

    it("should print constant lambda expression '\\->1'", function () {
        var result = Printer.print(
            {
                type: 'lambdaDefinition',
                parameters: [],
                expression: {type: 'integerLiteral', x: '1'}
            }
        );

        expect(result).to.eql("\\->1")
    });

    it("should print constant lambda expression with parameter '\\x->1'", function () {
        var result = Printer.print(
            {
                type: 'lambdaDefinition',
                parameters: ['x'],
                expression: {type: 'integerLiteral', x: '1'}
            }
        );

        expect(result).to.eql("\\x->1");
    });

    it("should print nested lambda expression '\\x->\\y->x'", function () {
        var result = Printer.print(
            {
                type: 'lambdaDefinition',
                parameters: ['x'],
                expression: {
                    type: 'lambdaDefinition',
                    parameters: ['y'],
                    expression: {type: 'variable', x: 'x'}
                }
            }
        );

        expect(result).to.eql("\\x->\\y->x")
    });

    it("should print a lambda expression with two arguments '\\x y->1'", function () {
        var result = Printer.print(
            {
                type: 'lambdaDefinition',
                parameters: ['x', 'y'],
                expression: {
                    type: 'integerLiteral', x: '1'
                }
            });

            expect(result).to.eql("\\x y->1")
        }
    );

    it("should print application '(\\x->x) 1'", function () {
        var result = Printer.print(
            {
                type: 'application',
                left: {
                    type: 'lambdaDefinition',
                    parameters: ['x'],
                    expression: {type: 'variable', x: 'x'}
                },

                right: {type: 'integerLiteral', x: '1'}
            }
        );

        expect(result).to.eql("(\\x->x)*(1)");
    })
});
