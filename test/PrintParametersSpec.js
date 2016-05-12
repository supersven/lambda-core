"use strict";

var expect = require('expect.js');
var List = require('immutable').List;
var Printer = require('../lib/PrettyPrinter.js').printer;
var AstNodeFactory = require('../lib/AstNodeFactory.js').AstNodeFactory;

describe("Printer.printParameters()", function () {

    it("should print one parameter", function () {
        var result = Printer.printParameters(List.of(AstNodeFactory.Parameter('x')));

        expect(result).to.eql("x");
    });

    it("should print two parameters", function () {
        var result = Printer.printParameters(List.of(AstNodeFactory.Parameter("x"), AstNodeFactory.Parameter("y")));

        expect(result).to.eql("x y");
    });
});
