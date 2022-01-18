// Generated by purs version 0.14.4
"use strict";
var Data_Function = require("../Data.Function/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Comparison = function (x) {
    return x;
};
var semigroupComparison = {
    append: function (v) {
        return function (v1) {
            return Data_Semigroup.append(Data_Semigroup.semigroupFn(Data_Semigroup.semigroupFn(Data_Ordering.semigroupOrdering)))(v)(v1);
        };
    }
};
var newtypeComparison = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidComparison = {
    mempty: function (v) {
        return function (v1) {
            return Data_Ordering.EQ.value;
        };
    },
    Semigroup0: function () {
        return semigroupComparison;
    }
};
var defaultComparison = function (dictOrd) {
    return Data_Ord.compare(dictOrd);
};
var contravariantComparison = {
    cmap: function (f) {
        return function (v) {
            return Data_Function.on(v)(f);
        };
    }
};
module.exports = {
    Comparison: Comparison,
    defaultComparison: defaultComparison,
    newtypeComparison: newtypeComparison,
    contravariantComparison: contravariantComparison,
    semigroupComparison: semigroupComparison,
    monoidComparison: monoidComparison
};