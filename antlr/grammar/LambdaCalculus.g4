grammar LambdaCalculus;

expression: application | lambda | variable | integer;
application: '('expression')' expression;
lambda: '\\' parameters '->' expression;
integer: INT;
variable: VARIABLE;
parameters: parameter*;
parameter: VARIABLE;

VARIABLE: 'A'..'Z' | 'a'..'z';
INT: [0-9]+;

WS : [ \t\r\n]+ -> skip ;
