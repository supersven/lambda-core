"use strict";

var antlr4 = require('antlr4/index');

var LambdaCalculusLexer = require("../antlr/generated/LambdaCalculusLexer");
var LambdaCalculusListener = require("../antlr/generated/LambdaCalculusListener").LambdaCalculusListener;
var LambdaCalculusVisitor = require("../antlr/generated/LambdaCalculusVisitor").LambdaCalculusVisitor;
var Immutable = require('immutable');
var _ = require('lodash');

var AstNodeFactory = require("./AstNodeFactory.js").AstNodeFactory;

function AstCreator() {
    LambdaCalculusVisitor.call(this);
    return this;
}

// inherit default listener
AstCreator.prototype = Object.create(LambdaCalculusVisitor.prototype);
AstCreator.prototype.constructor = AstCreator;

// override default listener behavior
AstCreator.prototype.visitInteger = function (ctx) {
    return AstNodeFactory.IntegerLiteral(ctx.getText());
};

AstCreator.prototype.visitVariable = function (ctx) {
    return AstNodeFactory.Variable(ctx.getText());
};

AstCreator.prototype.visitLambda = function (ctx) {
    return AstNodeFactory.LambdaDefinition(ctx.children[1].accept(this), ctx.children[3].accept(this));
};

AstCreator.prototype.visitParameter = function (ctx) {
    return ctx.getText();
};

AstCreator.prototype.visitParameters = function (ctx) {
    var visitor = this;
    return _.map(ctx.children, function (child) {
        return child.accept(visitor);
    });
};

AstCreator.prototype.visitApplication = function (ctx) {
    return AstNodeFactory.Application(ctx.children[1].accept(this), ctx.children[3].accept(this))
};

AstCreator.prototype.visitExpression = function (ctx) {
    return ctx.children[0].accept(this);
};

module.exports.AstCreator = AstCreator;
