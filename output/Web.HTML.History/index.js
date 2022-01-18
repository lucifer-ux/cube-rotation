// Generated by purs version 0.14.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Ord = require("../Data.Ord/index.js");
var URL = function (x) {
    return x;
};
var DocumentTitle = function (x) {
    return x;
};
var Delta = function (x) {
    return x;
};
var newtypeURL = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDocumentTitle = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDelta = {
    Coercible0: function () {
        return undefined;
    }
};
var eqURL = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordURL = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Ord.ordString)(x)(y);
        };
    },
    Eq0: function () {
        return eqURL;
    }
};
var eqDocumentTitle = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordDocumentTitle = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Ord.ordString)(x)(y);
        };
    },
    Eq0: function () {
        return eqDocumentTitle;
    }
};
var eqDelta = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordDelta = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
        };
    },
    Eq0: function () {
        return eqDelta;
    }
};
module.exports = {
    DocumentTitle: DocumentTitle,
    Delta: Delta,
    URL: URL,
    eqDocumentTitle: eqDocumentTitle,
    ordDocumentTitle: ordDocumentTitle,
    newtypeDocumentTitle: newtypeDocumentTitle,
    eqDelta: eqDelta,
    ordDelta: ordDelta,
    newtypeDelta: newtypeDelta,
    eqURL: eqURL,
    ordURL: ordURL,
    newtypeURL: newtypeURL,
    back: $foreign.back,
    forward: $foreign.forward,
    go: $foreign.go,
    pushState: $foreign.pushState,
    replaceState: $foreign.replaceState,
    state: $foreign.state
};
