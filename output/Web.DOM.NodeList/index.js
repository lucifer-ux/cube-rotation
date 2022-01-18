// Generated by purs version 0.14.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Web_DOM_Internal_Types = require("../Web.DOM.Internal.Types/index.js");
var item = function (i) {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $1 = $foreign["_item"](i);
    return function ($2) {
        return $0($1($2));
    };
};
module.exports = {
    item: item,
    length: $foreign.length,
    toArray: $foreign.toArray
};