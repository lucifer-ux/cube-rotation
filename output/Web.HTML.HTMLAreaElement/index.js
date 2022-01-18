// Generated by purs version 0.14.4
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLAreaElement");
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    alt: $foreign.alt,
    setAlt: $foreign.setAlt,
    coords: $foreign.coords,
    setCoords: $foreign.setCoords,
    shape: $foreign.shape,
    setShape: $foreign.setShape,
    target: $foreign.target,
    setTarget: $foreign.setTarget,
    download: $foreign.download,
    setDownload: $foreign.setDownload,
    rel: $foreign.rel,
    setRel: $foreign.setRel,
    relList: $foreign.relList,
    hreflang: $foreign.hreflang,
    setHreflang: $foreign.setHreflang,
    type_: $foreign.type_,
    setType: $foreign.setType
};
