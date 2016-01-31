"use strict";

var expect = require('expect.js');
var Parser = require('../lib/Parser.js').parser;

describe("Parser", function () {

    it("should parse literal '1'", function () {
        var ast = runParser("1");

        expect(ast).to.eql(
            {type: 'integerLiteral', x: '1'}
        );
    });

    function runParser(toBeParsed) {
        console.log("toBeParsed : " + toBeParsed);

        var result = Parser.parse(toBeParsed);

        console.log("result : " + JSON.stringify(result));

        expect(result.status).to.be.ok();
        return result.value;
    }

    it("should parse literal '1234'", function () {
        var ast = runParser("1234");

        expect(ast).to.eql(
            {type: 'integerLiteral', x: '1234'}
        );
    });

    it("should parse variable 'a'", function () {
        var ast = runParser("a");

        expect(ast).to.eql(
            {type: 'variable', x: 'a'}
        );
    });

    it("should parse constant lambda expression '\\->1'", function () {
        var ast = runParser("\\->1");

        expect(ast).to.eql(
            {
                type: 'lambdaDefinition',
                parameters: [],
                expression: {type: 'integerLiteral', x: '1'}
            }
        );
    });

    it("should parse constant lambda expression with parameter '\\x->1'", function () {
        var ast = runParser("\\x->1");

        expect(ast).to.eql(
            {
                type: 'lambdaDefinition',
                parameters: ['x'],
                expression: {type: 'integerLiteral', x: '1'}
            }
        );
    });

    it("should parse the identity lambda expression '\\x->x'", function () {
        var ast = runParser("\\x->x");

        expect(ast).to.eql(
            {
                type: 'lambdaDefinition',
                parameters: ['x'],
                expression: {type: 'variable', x: 'x'}
            }
        );
    });

    it("should parse nested lambda expression '\\x->\\y->1'", function () {
        var ast = runParser("\\x->\\y->1");

        expect(ast).to.eql(
            {
                type: 'lambdaDefinition',
                parameters: ['x'],
                expression: {
                    type: 'lambdaDefinition',
                    parameters: 'y',
                    expression: {type: 'integerLiteral', x: '1'}
                }
            }
        );
    });

    it("should parse a lambda expression with two arguments delimited by space '\\x y->1'", function () {
            var ast = runParser("\\x y->1");

            expect(ast).to.eql(
                {
                    type: 'lambdaDefinition',
                    parameters: ['x', 'y'],
                    expression: {
                        type: 'integerLiteral', x: '1'
                    }
                });
        }
    );

    it("should parse a lambda expression with undelimited two arguments'\\xy->1'", function () {
            var ast = runParser("\\xy->1");

            expect(ast).to.eql(
                {
                    type: 'lambdaDefinition',
                    parameters: ['x', 'y'],
                    expression: {
                        type: 'integerLiteral', x: '1'
                    }
                });
        }
    );

    it("should parse application '(\\x->x) 1'", function () {
        var ast = runParser("(\\x->x)*(1)");

        expect(ast).to.eql(
            {
                type: 'application',
                left: {
                    type: 'lambdaDefinition',
                    parameters: 'x',
                    expression: {type: 'variable', x: 'x'}
                },

                right: {type: 'integerLiteral', x: '1'}
            }
        );
    })
})
;


