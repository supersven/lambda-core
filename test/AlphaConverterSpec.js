"use strict";

var expect = require('expect.js');
var AlphaConverter = require('../lib/AlphaConverter').alphaConverter;
var Printer = require('../lib/PrettyPrinter').printer;
var AntlrParser = require('../lib/AntlrParser').AntlrParser;

describe("AlphaConverter", function () {

    function convert(expression) {
        var converted = AlphaConverter.convert(AntlrParser.parse(expression).get("value"));
        return Printer.print(converted);
    }

    it("should not change '\\x->x'", function () {
        var result = convert("\\x->x");

        expect(result).to.eql('\\x->x');
    });

    it("should not change '\\x->1'", function () {
        var result = convert("\\x->1");

        expect(result).to.eql('\\x->1');
    });

    it("should alpha convert '\\x->\\x->x' to '\\x->\\x1->x1'", function () {
        var result = convert("\\x->\\x->x");

        expect(result).to.eql('\\x->\\x1->x1');
    });

    it("should alpha convert '\\x->\\x->\\x->x' to '\\x->\\x1->\\x2->x2'", function () {
        var result = convert("\\x->\\x->\\x->x");

        expect(result).to.eql('\\x->\\x1->\\x2->x2');
    });

    it("should alpha convert '(\\x->x)*(\\x->x)' to '(\\x->x)*(\\x1->x1)'", function () {
        var result = convert("(\\x->x)*(\\x->x)");

        expect(result).to.eql('(\\x->x)*(\\x1->x1)');
    });

    it("should alpha convert '\\x->(\\x->x)*(\\x->x)' to '\\x->(\\x1->x1)*(\\x2->x2)'", function () {
        var result = convert("\\x->(\\x->x)*(\\x->x)");

        expect(result).to.eql('\\x->(\\x1->x1)*(\\x2->x2)');
    });
});
