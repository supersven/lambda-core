"use strict";

var antlr4 = require('antlr4/index');

var LambdaCalculusLexer = require("../antlr/generated/LambdaCalculusLexer");
var LambdaCalculusParser = require("../antlr/generated/LambdaCalculusParser");

var AstCreator = require("./ParseTreeListeningAstCreator").AstCreator;
var Immutable = require('immutable');

module.exports.AntlrParser = function () {

    var self = {};

    self.parse = function (input) {
        var chars = new antlr4.InputStream(input);
        var lexer = new LambdaCalculusLexer.LambdaCalculusLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new LambdaCalculusParser.LambdaCalculusParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.expression();

        var astCreator = new AstCreator();
        var result = tree.accept(astCreator);

        // todo - implement error handling
        return Immutable.fromJS({
            value: result,
            status: true
        });
    };

    return self;
}();