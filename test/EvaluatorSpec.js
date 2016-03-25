"use strict";

var expect = require('expect.js');
var Evaluator = require("../lib/Evaluator.js").evaluator;

describe("Evaluator", function () {

    it("should evaluate '(\\x y->x) 1' to '\\y->1'", function () {
        var result = Evaluator.eval("(\\x y->x) 1");

        expect(result).to.eql("\\y->1");
    });

    it("should evaluate '((\\x y->x) 1) 2' to '\\y->1'", function () {
        var result = Evaluator.eval("((\\x y->x) 1) 2");

        expect(result).to.eql("1");
    });

    it("should evaluate SKK to I (identity)", function () {
        var S = "\\f->\\g->\\x->" + apply(apply("f", "x"), apply("g", "x"));
        var K = "\\x->\\y->x";

        var SKK = apply(apply(S,K),K);
        console.log(SKK);

        var result = Evaluator.eval(SKK);

        expect(result).to.eql("\\x->x");
    });

    it("should evaluate '(\\x->(\\z->x) y) 1' to '1'", function () {
        var result = Evaluator.eval("(\\x->(\\z->x) y) 1");

        expect(result).to.eql("1");
    });

// todo - duplicated from BetaReducerSpec
    function apply(left, right) {
        return "(" + left + ")" + right + ""
    }
});