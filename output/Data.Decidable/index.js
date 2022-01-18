// Generated by purs version 0.14.4
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Decide = require("../Data.Decide/index.js");
var Data_Divisible = require("../Data.Divisible/index.js");
var Data_Void = require("../Data.Void/index.js");
var lose = function (dict) {
    return dict.lose;
};
var lost = function (dictDecidable) {
    return lose(dictDecidable)(Control_Category.identity(Control_Category.categoryFn));
};
var decidablePredicate = {
    lose: function (f) {
        return function (a) {
            return Data_Void.absurd(f(a));
        };
    },
    Decide0: function () {
        return Data_Decide.choosePredicate;
    },
    Divisible1: function () {
        return Data_Divisible.divisiblePredicate;
    }
};
var decidableOp = function (dictMonoid) {
    return {
        lose: function (f) {
            return function (a) {
                return Data_Void.absurd(f(a));
            };
        },
        Decide0: function () {
            return Data_Decide.chooseOp(dictMonoid.Semigroup0());
        },
        Divisible1: function () {
            return Data_Divisible.divisibleOp(dictMonoid);
        }
    };
};
var decidableEquivalence = {
    lose: function (f) {
        return function (a) {
            return Data_Void.absurd(f(a));
        };
    },
    Decide0: function () {
        return Data_Decide.chooseEquivalence;
    },
    Divisible1: function () {
        return Data_Divisible.divisibleEquivalence;
    }
};
var decidableComparison = {
    lose: function (f) {
        return function (a) {
            return function (v) {
                return Data_Void.absurd(f(a));
            };
        };
    },
    Decide0: function () {
        return Data_Decide.chooseComparison;
    },
    Divisible1: function () {
        return Data_Divisible.divisibleComparison;
    }
};
module.exports = {
    lose: lose,
    lost: lost,
    decidableComparison: decidableComparison,
    decidableEquivalence: decidableEquivalence,
    decidablePredicate: decidablePredicate,
    decidableOp: decidableOp
};
