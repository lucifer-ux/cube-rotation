// Generated by purs version 0.14.4
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var prj = function (dict) {
    return dict.prj;
};
var injectReflexive = {
    inj: Control_Category.identity(Control_Category.categoryFn),
    prj: Data_Maybe.Just.create
};
var injectLeft = {
    inj: Data_Either.Left.create,
    prj: Data_Either.either(Data_Maybe.Just.create)(Data_Function["const"](Data_Maybe.Nothing.value))
};
var inj = function (dict) {
    return dict.inj;
};
var injectRight = function (dictInject) {
    return {
        inj: (function () {
            var $3 = inj(dictInject);
            return function ($4) {
                return Data_Either.Right.create($3($4));
            };
        })(),
        prj: Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(prj(dictInject))
    };
};
module.exports = {
    inj: inj,
    prj: prj,
    injectReflexive: injectReflexive,
    injectLeft: injectLeft,
    injectRight: injectRight
};