// Generated by purs version 0.14.4
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Show = require("../Data.Show/index.js");
var Join = function (x) {
    return x;
};
var showJoin = function (dictShow) {
    return {
        show: function (v) {
            return "(Join " + (Data_Show.show(dictShow)(v) + ")");
        }
    };
};
var ordJoin = function (dictOrd) {
    return dictOrd;
};
var newtypeJoin = {
    Coercible0: function () {
        return undefined;
    }
};
var eqJoin = function (dictEq) {
    return dictEq;
};
var bifunctorJoin = function (dictBifunctor) {
    return {
        map: function (f) {
            return function (v) {
                return Data_Bifunctor.bimap(dictBifunctor)(f)(f)(v);
            };
        }
    };
};
var biapplyJoin = function (dictBiapply) {
    return {
        apply: function (v) {
            return function (v1) {
                return Control_Biapply.biapply(dictBiapply)(v)(v1);
            };
        },
        Functor0: function () {
            return bifunctorJoin(dictBiapply.Bifunctor0());
        }
    };
};
var biapplicativeJoin = function (dictBiapplicative) {
    return {
        pure: function (a) {
            return Control_Biapplicative.bipure(dictBiapplicative)(a)(a);
        },
        Apply0: function () {
            return biapplyJoin(dictBiapplicative.Biapply0());
        }
    };
};
module.exports = {
    Join: Join,
    newtypeJoin: newtypeJoin,
    eqJoin: eqJoin,
    ordJoin: ordJoin,
    showJoin: showJoin,
    bifunctorJoin: bifunctorJoin,
    biapplyJoin: biapplyJoin,
    biapplicativeJoin: biapplicativeJoin
};