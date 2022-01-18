// Generated by purs version 0.14.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var RequestIdleCallbackId = function (x) {
    return x;
};
var RequestAnimationFrameId = function (x) {
    return x;
};
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var promptDefault = function (msg) {
    return function (defaultText) {
        return function (window) {
            return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_prompt"](msg)(defaultText)(window));
        };
    };
};
var prompt = function (msg) {
    return function (window) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_prompt"](msg)("")(window));
    };
};
var opener = function (window) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_opener"](window));
};
var open = function (url$prime) {
    return function (name) {
        return function (features) {
            return function (window) {
                return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_open"](url$prime)(name)(features)(window));
            };
        };
    };
};
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Window");
var eqRequestIdleCallbackId = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordRequestIdleCallbackId = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
        };
    },
    Eq0: function () {
        return eqRequestIdleCallbackId;
    }
};
var eqRequestAnimationFrameId = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordRequestAnimationFrameId = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
        };
    },
    Eq0: function () {
        return eqRequestAnimationFrameId;
    }
};
module.exports = {
    toEventTarget: toEventTarget,
    fromEventTarget: fromEventTarget,
    open: open,
    prompt: prompt,
    promptDefault: promptDefault,
    opener: opener,
    eqRequestAnimationFrameId: eqRequestAnimationFrameId,
    ordRequestAnimationFrameId: ordRequestAnimationFrameId,
    eqRequestIdleCallbackId: eqRequestIdleCallbackId,
    ordRequestIdleCallbackId: ordRequestIdleCallbackId,
    document: $foreign.document,
    navigator: $foreign.navigator,
    location: $foreign.location,
    history: $foreign.history,
    innerWidth: $foreign.innerWidth,
    innerHeight: $foreign.innerHeight,
    alert: $foreign.alert,
    confirm: $foreign.confirm,
    moveBy: $foreign.moveBy,
    moveTo: $foreign.moveTo,
    outerHeight: $foreign.outerHeight,
    outerWidth: $foreign.outerWidth,
    print: $foreign.print,
    resizeBy: $foreign.resizeBy,
    resizeTo: $foreign.resizeTo,
    screenX: $foreign.screenX,
    screenY: $foreign.screenY,
    scroll: $foreign.scroll,
    scrollBy: $foreign.scrollBy,
    scrollX: $foreign.scrollX,
    scrollY: $foreign.scrollY,
    localStorage: $foreign.localStorage,
    sessionStorage: $foreign.sessionStorage,
    requestAnimationFrame: $foreign.requestAnimationFrame,
    cancelAnimationFrame: $foreign.cancelAnimationFrame,
    requestIdleCallback: $foreign.requestIdleCallback,
    cancelIdleCallback: $foreign.cancelIdleCallback,
    parent: $foreign.parent
};
