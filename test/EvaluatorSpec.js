"use strict";

var expect = require('expect.js');
var Evaluator = require("../lib/Evaluator.js").evaluator;

describe("Evaluator", function () {

    it("should evaluate '(\\x y->x)*(1)' to '\\y->1'", function () {
        var result = Evaluator.eval("(\\x y->x)*(1)");

        expect(result).to.eql("\\y->1");
    });

    it("should evaluate '((\\x y->x)*(1))*(2)' to '\\y->1'", function () {
        var result = Evaluator.eval("((\\x y->x)*(1))*(2)");

        expect(result).to.eql("1");
    });
});