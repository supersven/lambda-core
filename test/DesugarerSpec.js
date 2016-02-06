"use strict";

var expect = require('expect.js');
var Desugarer = require('../lib/Desugarer.js').desugarer;
var Parser = require('../lib/Parser.js').parser;
var Printer = require('../lib/PrettyPrinter.js').printer;
var Immutable = require('immutable');

describe("Desugarer", function () {

    it("should leave integer literals untouched", function () {
        var result = desugar("1");
        expect(result).to.eql("1")
    });

    it("should leave variables untouched", function () {
        var result = desugar("a");
        expect(result).to.eql("a")
    });

    it("should desugar a two parameter lambda expression ('\\xy->1') to two nested lambda expressions ('\\x->\\y->1')", function(){
        var result = desugar("\\xy->1");
        expect(result).to.eql("\\x->\\y->1")
    });

    function desugar(expression) {
        var ast = Parser.parse(expression);
        console.log(ast.toJSON());

        var result = Desugarer.desugar(ast.get("value"));
        console.log(result.toJSON());

        return Printer.print(result);
    }

    it("should desugar a three parameter lambda expression ('\\xyz->1') to two nested lambda expressions ('\\x->\\y->\\z->1')", function(){
        var result = desugar("\\xyz->1");
        expect(result).to.eql("\\x->\\y->\\z->1")
    });

    it("should desugar applications", function(){
        var result = desugar("(\\xyz->1)*(\\abc->b)");
        expect(result).to.eql("(\\x->\\y->\\z->1)*(\\a->\\b->\\c->b)")
    });
});

