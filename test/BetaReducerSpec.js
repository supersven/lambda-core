"use strict";

var expect = require('expect.js');
var BetaReducer = require('../lib/BetaReducer.js').betaReducer;
var Printer = require('../lib/PrettyPrinter.js').printer;
var Immutable = require('immutable');

describe("BetaReducer", function () {

    it("should betaReduce '1' to '1'", function () {
        var result = betaReduce('1');

        expect(result).to.eql("1")
    });

    it("should betaReduce variable 'a' to 'a'", function () {
        var result = betaReduce("a");

        expect(result).to.eql("a");
    });

    function betaReduce(expression) {
        console.log("expression : " + expression);
        var result = BetaReducer.reduce(Immutable.fromJS(expression));
        console.log("result : " + JSON.stringify(result, null, 4));
        return Printer.print(result);
    }

    it("should betaReduce '(\\x->x)*(1)' to '1'", function () {
        var result = betaReduce("(\\x->x)*(1)");

        expect(result).to.eql("1");
    });

    it("should betaReduce '(\\x->y)*(1)' to 'y'", function () {
        var result = betaReduce("(\\x->y)*(1)");

        expect(result).to.eql("y");
    });

    it("should betaReduce '(\\x->\\y->x)*(1)' to '\\y->1'", function () {
        var result = betaReduce("(\\x->\\y->x)*(1)");

        expect(result).to.eql("\\y->1");
    });

    it.skip("should betaReduce '(\\x y->x)*(1)' to '\\y->1'", function () {
        var result = betaReduce("(\\x y->x)*(1)");

        expect(result).to.eql("\\y->1");
    });

    it("should betaReduce '(\\x->\\y->\\z->x)*(1)' to '\\y->\\z->1'", function () {
        var result = betaReduce("(\\x->\\y->\\z->x)*(1)");

        expect(result).to.eql('\\y->\\z->1');
    });

    it("should betaReduce '(\\x->x)*((\\y->y)*(1))' to '1'", function () {
        var firstStep = betaReduce("(\\x->x)*((\\y->y)*(1))");
        var secondStep = betaReduce(firstStep);

        expect(firstStep).to.eql("(\\y->y)*(1)");
        expect(secondStep).to.eql("1");
    });

    function apply(left, right) {
        return "(" + left + ")*(" + right + ")"
    }
    it("should betaReduce the I combinator", function () {
        var I = "\\x->x";
        var result = betaReduce(apply(I, "1"));

        expect(result).to.eql("1");
    });

    it("should betaReduce the K combinator", function () {
        var K = "\\x->\\y->x";
        var result = betaReduce(apply(K, "1"));

        expect(result).to.eql("\\y->1");
    });

    it.skip("should betaReduce the S combinator", function () {
        var S = "\\f->\\g->\\x->" + apply(apply("f", "x"), apply("g", "x"));
        var result = betaReduce(apply(apply(apply(S, "1"), "2"),"3"));

        expect(result).to.eql("((1)*(3))*((2)*(3))");
    });

    it.skip("should reduce SKK to I", function () {
        var result = betaReduce("(\\x->\\y->\\z->((x)*(z))*((y)*(z)))*((\\x->\\y->x)*(\\x->\\y->x))");

        expect(result).to.eql("\\z->z");
    })
});
