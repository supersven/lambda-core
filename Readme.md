## Lambda Core
[![Build Status](https://travis-ci.org/supersven/lambda-core.svg?branch=master)](https://travis-ci.org/supersven/lambda-core)

A library for the untyped lambda calculus.

It solves expressions with a naive approach as one would by hand. It can simplify expressions stepwise.
So it's hopefully useful for educational purposes.

Do not use it when you need a fast interpreter - There are much better tools for that!

## Usage
The syntax is similar to Haskell's lambda abstractions. See `test/EvaluatorSpec.js` for examples.

## To Do
1. implement comments
1. implement visitor.visitErrorNode in AstCreator
1. Extract helper methods for types, parameters, etc.
1. Eta-Reduction
1. let expressions
1. case expressions
