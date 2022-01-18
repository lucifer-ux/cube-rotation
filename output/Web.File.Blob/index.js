// Generated by purs version 0.14.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Int = require("../Data.Int/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var $$Math = require("../Math/index.js");
var EndByte = function (x) {
    return x;
};
var StartByte = function (x) {
    return x;
};
var type_ = function (blob) {
    var blobType = $foreign.typeImpl(blob);
    var $0 = blobType === "";
    if ($0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(blobType);
};
var slice$prime = $foreign.slice("");
var idxFromNumber = function ($1) {
    return $$Math.round($1);
};
var idxFromInt = function ($2) {
    return Data_Int.toNumber($2);
};
var fromString = function (str) {
    return function (ct) {
        return $foreign.blobImpl([ str ])(ct);
    };
};
var fromArray = function (args) {
    return function (opts) {
        return $foreign.blobImpl(args)(opts);
    };
};
module.exports = {
    fromString: fromString,
    fromArray: fromArray,
    type_: type_,
    StartByte: StartByte,
    EndByte: EndByte,
    idxFromInt: idxFromInt,
    idxFromNumber: idxFromNumber,
    "slice'": slice$prime,
    size: $foreign.size,
    slice: $foreign.slice
};
