// Generated by purs version 0.14.4
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Gen = require("../Control.Monad.Gen/index.js");
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class/index.js");
var Data_Char_Gen = require("../Data.Char.Gen/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var genString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (genChar) {
            return Control_Monad_Gen_Class.sized(dictMonadGen)(function (size) {
                return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(1)(Data_Ord.max(Data_Ord.ordInt)(1)(size)))(function (newSize) {
                    return Control_Monad_Gen_Class.resize(dictMonadGen)(Data_Function["const"](newSize))(Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_String_CodeUnits.fromCharArray)(Control_Monad_Gen.unfoldable(dictMonadRec)(dictMonadGen)(Data_Unfoldable.unfoldableArray)(genChar)));
                });
            });
        };
    };
};
var genUnicodeString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genUnicodeChar(dictMonadGen));
    };
};
var genDigitString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genDigitChar(dictMonadGen));
    };
};
var genAsciiString$prime = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen["genAsciiChar'"](dictMonadGen));
    };
};
var genAsciiString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAsciiChar(dictMonadGen));
    };
};
var genAlphaUppercaseString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlphaUppercase(dictMonadGen));
    };
};
var genAlphaString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlpha(dictMonadGen));
    };
};
var genAlphaLowercaseString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlphaLowercase(dictMonadGen));
    };
};
module.exports = {
    genString: genString,
    genUnicodeString: genUnicodeString,
    genAsciiString: genAsciiString,
    "genAsciiString'": genAsciiString$prime,
    genDigitString: genDigitString,
    genAlphaString: genAlphaString,
    genAlphaLowercaseString: genAlphaLowercaseString,
    genAlphaUppercaseString: genAlphaUppercaseString
};
