// Generated from /home/sven/IdeaProjects/patricia-lambda-core/antlr/grammar/LambdaCalculus.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LambdaCalculusParser.
function LambdaCalculusListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LambdaCalculusListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LambdaCalculusListener.prototype.constructor = LambdaCalculusListener;

// Enter a parse tree produced by LambdaCalculusParser#expression.
LambdaCalculusListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#expression.
LambdaCalculusListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#application.
LambdaCalculusListener.prototype.enterApplication = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#application.
LambdaCalculusListener.prototype.exitApplication = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#lambda.
LambdaCalculusListener.prototype.enterLambda = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#lambda.
LambdaCalculusListener.prototype.exitLambda = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#integer.
LambdaCalculusListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#integer.
LambdaCalculusListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#variable.
LambdaCalculusListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#variable.
LambdaCalculusListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#parameters.
LambdaCalculusListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#parameters.
LambdaCalculusListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by LambdaCalculusParser#parameter.
LambdaCalculusListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by LambdaCalculusParser#parameter.
LambdaCalculusListener.prototype.exitParameter = function(ctx) {
};



exports.LambdaCalculusListener = LambdaCalculusListener;