"use strict";

var expect = require('expect.js');
var List = require('immutable').List;
var Printer = require('../lib/PrettyPrinter.js').printer;

describe("Printer.printParameters()", function () {

    it("should print one parameter", function () {
        var result = Printer.printParameters(List("x"));

        expect(result).to.eql("x");
    });

    it("should print two parameters", function () {
        var result = Printer.printParameters(List.of("x", "y"));

        expect(result).to.eql("x y");
    });
});
