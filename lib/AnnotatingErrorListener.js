"use strict";

var antlr4 = require('antlr4/index');

var LambdaCalculusLexer = require("../antlr/generated/LambdaCalculusLexer").LambdaCalculusLexer;
var LambdaCalculusListener = require("../antlr/generated/LambdaCalculusListener").LambdaCalculusListener;
var LambdaCalculusVisitor = require("../antlr/generated/LambdaCalculusVisitor").LambdaCalculusVisitor;
var LambdaCalculusParser = require("../antlr/generated/LambdaCalculusParser").LambdaCalculusParser;

// class for gathering errors and posting them to ACE editor
var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
    });
};

AnnotatingErrorListener.prototype.validate = function(input) {
    var stream = new antlr4.InputStream(input);
    var lexer = new LambdaCalculusLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new LambdaCalculusParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations)
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.expression();
    return annotations;
};

module.exports.AnnotatingErrorListener = AnnotatingErrorListener;