// Generated from /home/sven/IdeaProjects/patricia-lambda-core/antlr/grammar/LambdaCalculus.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\t(\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0006\u0007\u001e\n\u0007\r\u0007\u000e\u0007\u001f\u0003",
    "\b\u0006\b#\n\b\r\b\u000e\b$\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002",
    "\u0005\u0004\u0002C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
    "\"\")\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002",
    "\u0002\u0005\u0013\u0003\u0002\u0002\u0002\u0007\u0015\u0003\u0002\u0002",
    "\u0002\t\u0017\u0003\u0002\u0002\u0002\u000b\u001a\u0003\u0002\u0002",
    "\u0002\r\u001d\u0003\u0002\u0002\u0002\u000f\"\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0007*\u0002\u0002\u0012\u0004\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007+\u0002\u0002\u0014\u0006\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u0007^\u0002\u0002\u0016\b\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0007/\u0002\u0002\u0018\u0019\u0007@\u0002\u0002\u0019\n\u0003",
    "\u0002\u0002\u0002\u001a\u001b\t\u0002\u0002\u0002\u001b\f\u0003\u0002",
    "\u0002\u0002\u001c\u001e\t\u0003\u0002\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u000e\u0003\u0002\u0002",
    "\u0002!#\t\u0004\u0002\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&",
    "\u0003\u0002\u0002\u0002&\'\b\b\u0002\u0002\'\u0010\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u001f$\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LambdaCalculusLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LambdaCalculusLexer.prototype = Object.create(antlr4.Lexer.prototype);
LambdaCalculusLexer.prototype.constructor = LambdaCalculusLexer;

LambdaCalculusLexer.EOF = antlr4.Token.EOF;
LambdaCalculusLexer.T__0 = 1;
LambdaCalculusLexer.T__1 = 2;
LambdaCalculusLexer.T__2 = 3;
LambdaCalculusLexer.T__3 = 4;
LambdaCalculusLexer.VARIABLE = 5;
LambdaCalculusLexer.INT = 6;
LambdaCalculusLexer.WS = 7;


LambdaCalculusLexer.modeNames = [ "DEFAULT_MODE" ];

LambdaCalculusLexer.literalNames = [ 'null', "'('", "')'", "'\\'", "'->'" ];

LambdaCalculusLexer.symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 
                                      "VARIABLE", "INT", "WS" ];

LambdaCalculusLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "VARIABLE", 
                                  "INT", "WS" ];

LambdaCalculusLexer.grammarFileName = "LambdaCalculus.g4";



exports.LambdaCalculusLexer = LambdaCalculusLexer;

