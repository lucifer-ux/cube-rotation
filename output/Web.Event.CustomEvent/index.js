// Generated by purs version 0.14.4
"use strict";
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("CustomEvent");
module.exports = {
    fromEvent: fromEvent,
    toEvent: toEvent
};
