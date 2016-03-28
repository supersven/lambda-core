// Generated from /home/sven/IdeaProjects/patricia-lambda-core/antlr/grammar/LambdaCalculus.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LambdaCalculusParser.

function LambdaCalculusVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LambdaCalculusVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LambdaCalculusVisitor.prototype.constructor = LambdaCalculusVisitor;

// Visit a parse tree produced by LambdaCalculusParser#expression.
LambdaCalculusVisitor.prototype.visitExpression = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#application.
LambdaCalculusVisitor.prototype.visitApplication = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#lambda.
LambdaCalculusVisitor.prototype.visitLambda = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#integer.
LambdaCalculusVisitor.prototype.visitInteger = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#variable.
LambdaCalculusVisitor.prototype.visitVariable = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#parameters.
LambdaCalculusVisitor.prototype.visitParameters = function(ctx) {
};


// Visit a parse tree produced by LambdaCalculusParser#parameter.
LambdaCalculusVisitor.prototype.visitParameter = function(ctx) {
};



exports.LambdaCalculusVisitor = LambdaCalculusVisitor;