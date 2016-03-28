// Generated from /home/sven/IdeaProjects/patricia-lambda-core/antlr/grammar/LambdaCalculus.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LambdaCalculusListener = require('./LambdaCalculusListener').LambdaCalculusListener;
var LambdaCalculusVisitor = require('./LambdaCalculusVisitor').LambdaCalculusVisitor;

var grammarFileName = "LambdaCalculus.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\t-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0015",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0007\u0007&\n\u0007",
    "\f\u0007\u000e\u0007)\u000b\u0007\u0003\b\u0003\b\u0003\b\u0002\u0002",
    "\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0002)\u0002\u0014\u0003\u0002",
    "\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001b\u0003\u0002",
    "\u0002\u0002\b \u0003\u0002\u0002\u0002\n\"\u0003\u0002\u0002\u0002",
    "\f\'\u0003\u0002\u0002\u0002\u000e*\u0003\u0002\u0002\u0002\u0010\u0015",
    "\u0005\u0004\u0003\u0002\u0011\u0015\u0005\u0006\u0004\u0002\u0012\u0015",
    "\u0005\n\u0006\u0002\u0013\u0015\u0005\b\u0005\u0002\u0014\u0010\u0003",
    "\u0002\u0002\u0002\u0014\u0011\u0003\u0002\u0002\u0002\u0014\u0012\u0003",
    "\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0003\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u0018\u0005",
    "\u0002\u0002\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019\u001a\u0005",
    "\u0002\u0002\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "\u0005\u0002\u0002\u001c\u001d\u0005\f\u0007\u0002\u001d\u001e\u0007",
    "\u0006\u0002\u0002\u001e\u001f\u0005\u0002\u0002\u0002\u001f\u0007\u0003",
    "\u0002\u0002\u0002 !\u0007\b\u0002\u0002!\t\u0003\u0002\u0002\u0002",
    "\"#\u0007\u0007\u0002\u0002#\u000b\u0003\u0002\u0002\u0002$&\u0005\u000e",
    "\b\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\r\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002*+\u0007\u0007\u0002\u0002+\u000f\u0003\u0002",
    "\u0002\u0002\u0004\u0014\'"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'", "'\\'", "'->'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', "VARIABLE", 
                      "INT", "WS" ];

var ruleNames =  [ "expression", "application", "lambda", "integer", "variable", 
                   "parameters", "parameter" ];

function LambdaCalculusParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LambdaCalculusParser.prototype = Object.create(antlr4.Parser.prototype);
LambdaCalculusParser.prototype.constructor = LambdaCalculusParser;

Object.defineProperty(LambdaCalculusParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LambdaCalculusParser.EOF = antlr4.Token.EOF;
LambdaCalculusParser.T__0 = 1;
LambdaCalculusParser.T__1 = 2;
LambdaCalculusParser.T__2 = 3;
LambdaCalculusParser.T__3 = 4;
LambdaCalculusParser.VARIABLE = 5;
LambdaCalculusParser.INT = 6;
LambdaCalculusParser.WS = 7;

LambdaCalculusParser.RULE_expression = 0;
LambdaCalculusParser.RULE_application = 1;
LambdaCalculusParser.RULE_lambda = 2;
LambdaCalculusParser.RULE_integer = 3;
LambdaCalculusParser.RULE_variable = 4;
LambdaCalculusParser.RULE_parameters = 5;
LambdaCalculusParser.RULE_parameter = 6;

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.application = function() {
    return this.getTypedRuleContext(ApplicationContext,0);
};

ExpressionContext.prototype.lambda = function() {
    return this.getTypedRuleContext(LambdaContext,0);
};

ExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExpressionContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.ExpressionContext = ExpressionContext;

LambdaCalculusParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LambdaCalculusParser.RULE_expression);
    try {
        this.state = 18;
        switch(this._input.LA(1)) {
        case LambdaCalculusParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.application();
            break;
        case LambdaCalculusParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.lambda();
            break;
        case LambdaCalculusParser.VARIABLE:
            this.enterOuterAlt(localctx, 3);
            this.state = 16;
            this.variable();
            break;
        case LambdaCalculusParser.INT:
            this.enterOuterAlt(localctx, 4);
            this.state = 17;
            this.integer();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ApplicationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_application;
    return this;
}

ApplicationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ApplicationContext.prototype.constructor = ApplicationContext;

ApplicationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ApplicationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterApplication(this);
	}
};

ApplicationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitApplication(this);
	}
};

ApplicationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitApplication(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.ApplicationContext = ApplicationContext;

LambdaCalculusParser.prototype.application = function() {

    var localctx = new ApplicationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LambdaCalculusParser.RULE_application);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(LambdaCalculusParser.T__0);
        this.state = 21;
        this.expression();
        this.state = 22;
        this.match(LambdaCalculusParser.T__1);
        this.state = 23;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_lambda;
    return this;
}

LambdaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;

LambdaContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

LambdaContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LambdaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterLambda(this);
	}
};

LambdaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitLambda(this);
	}
};

LambdaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitLambda(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.LambdaContext = LambdaContext;

LambdaCalculusParser.prototype.lambda = function() {

    var localctx = new LambdaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LambdaCalculusParser.RULE_lambda);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(LambdaCalculusParser.T__2);
        this.state = 26;
        this.parameters();
        this.state = 27;
        this.match(LambdaCalculusParser.T__3);
        this.state = 28;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_integer;
    return this;
}

IntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

IntegerContext.prototype.INT = function() {
    return this.getToken(LambdaCalculusParser.INT, 0);
};

IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitInteger(this);
	}
};

IntegerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitInteger(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.IntegerContext = IntegerContext;

LambdaCalculusParser.prototype.integer = function() {

    var localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LambdaCalculusParser.RULE_integer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(LambdaCalculusParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(LambdaCalculusParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.VariableContext = VariableContext;

LambdaCalculusParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LambdaCalculusParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(LambdaCalculusParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.ParametersContext = ParametersContext;

LambdaCalculusParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LambdaCalculusParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LambdaCalculusParser.VARIABLE) {
            this.state = 34;
            this.parameter();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LambdaCalculusParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.VARIABLE = function() {
    return this.getToken(LambdaCalculusParser.VARIABLE, 0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof LambdaCalculusListener ) {
        listener.exitParameter(this);
	}
};

ParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LambdaCalculusVisitor ) {
        return visitor.visitParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LambdaCalculusParser.ParameterContext = ParameterContext;

LambdaCalculusParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LambdaCalculusParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(LambdaCalculusParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LambdaCalculusParser = LambdaCalculusParser;
