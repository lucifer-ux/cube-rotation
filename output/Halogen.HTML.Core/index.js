// Generated by purs version 0.14.4
"use strict";
var DOM_HTML_Indexed_ButtonType = require("../DOM.HTML.Indexed.ButtonType/index.js");
var DOM_HTML_Indexed_CrossOriginValue = require("../DOM.HTML.Indexed.CrossOriginValue/index.js");
var DOM_HTML_Indexed_DirValue = require("../DOM.HTML.Indexed.DirValue/index.js");
var DOM_HTML_Indexed_FormMethod = require("../DOM.HTML.Indexed.FormMethod/index.js");
var DOM_HTML_Indexed_InputAcceptType = require("../DOM.HTML.Indexed.InputAcceptType/index.js");
var DOM_HTML_Indexed_InputType = require("../DOM.HTML.Indexed.InputType/index.js");
var DOM_HTML_Indexed_KindValue = require("../DOM.HTML.Indexed.KindValue/index.js");
var DOM_HTML_Indexed_MenuType = require("../DOM.HTML.Indexed.MenuType/index.js");
var DOM_HTML_Indexed_MenuitemType = require("../DOM.HTML.Indexed.MenuitemType/index.js");
var DOM_HTML_Indexed_OnOff = require("../DOM.HTML.Indexed.OnOff/index.js");
var DOM_HTML_Indexed_OrderedListType = require("../DOM.HTML.Indexed.OrderedListType/index.js");
var DOM_HTML_Indexed_PreloadValue = require("../DOM.HTML.Indexed.PreloadValue/index.js");
var DOM_HTML_Indexed_ScopeValue = require("../DOM.HTML.Indexed.ScopeValue/index.js");
var DOM_HTML_Indexed_StepValue = require("../DOM.HTML.Indexed.StepValue/index.js");
var DOM_HTML_Indexed_WrapValue = require("../DOM.HTML.Indexed.WrapValue/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Halogen_Query_Input = require("../Halogen.Query.Input/index.js");
var Halogen_VDom = require("../Halogen.VDom/index.js");
var Halogen_VDom_DOM_Prop = require("../Halogen.VDom.DOM.Prop/index.js");
var Halogen_VDom_Types = require("../Halogen.VDom.Types/index.js");
var Web_HTML_Common = require("../Web.HTML.Common/index.js");
var HTML = function (x) {
    return x;
};
var widget = function ($19) {
    return HTML(Halogen_VDom_Types.Widget.create($19));
};
var toPropValue = function (dict) {
    return dict.toPropValue;
};
var text = function ($20) {
    return HTML(Halogen_VDom_Types.Text.create($20));
};
var ref = function (f) {
    return Halogen_VDom_DOM_Prop.Ref.create(function ($21) {
        return f((function (v) {
            if (v instanceof Halogen_VDom_DOM_Prop.Created) {
                return new Data_Maybe.Just(v.value0);
            };
            if (v instanceof Halogen_VDom_DOM_Prop.Removed) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match at Halogen.HTML.Core (line 103, column 21 - line 105, column 23): " + [ v.constructor.name ]);
        })($21));
    });
};
var prop = function (dictIsProp) {
    return function (v) {
        var $22 = Halogen_VDom_DOM_Prop.Property.create(v);
        var $23 = toPropValue(dictIsProp);
        return function ($24) {
            return $22($23($24));
        };
    };
};
var newtypeHTML = {
    Coercible0: function () {
        return undefined;
    }
};
var renderWidget = function (f) {
    return function (g) {
        return function (v) {
            return Halogen_VDom_Types.renderWidget(Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Halogen_VDom_DOM_Prop.functorProp)(Data_Functor.map(Halogen_Query_Input.functorInput)(f))))((function () {
                var $25 = Data_Newtype.un()(HTML);
                return function ($26) {
                    return $25(g($26));
                };
            })())(v);
        };
    };
};
var keyed = function (ns) {
    return function (name) {
        return function (props) {
            return function (children) {
                return new Halogen_VDom_Types.Keyed(ns, name, props, children);
            };
        };
    };
};
var isPropWrapValue = {
    toPropValue: function ($27) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_WrapValue.renderWrapValue($27));
    }
};
var isPropString = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromString
};
var isPropStepValue = {
    toPropValue: function ($28) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_StepValue.renderStepValue($28));
    }
};
var isPropScopeValue = {
    toPropValue: function ($29) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_ScopeValue.renderScopeValue($29));
    }
};
var isPropPreloadValue = {
    toPropValue: function ($30) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_PreloadValue.renderPreloadValue($30));
    }
};
var isPropOrderedListType = {
    toPropValue: function ($31) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_OrderedListType.renderOrderedListType($31));
    }
};
var isPropOnOff = {
    toPropValue: function ($32) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_OnOff.renderOnOff($32));
    }
};
var isPropNumber = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromNumber
};
var isPropMenuitemType = {
    toPropValue: function ($33) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_MenuitemType.renderMenuitemType($33));
    }
};
var isPropMenuType = {
    toPropValue: function ($34) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_MenuType.renderMenuType($34));
    }
};
var isPropMediaType = {
    toPropValue: (function () {
        var $35 = Data_Newtype.unwrap();
        return function ($36) {
            return Halogen_VDom_DOM_Prop.propFromString($35($36));
        };
    })()
};
var isPropKindValue = {
    toPropValue: function ($37) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_KindValue.renderKindValue($37));
    }
};
var isPropInt = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromInt
};
var isPropInputType = {
    toPropValue: function ($38) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_InputType.renderInputType($38));
    }
};
var isPropInputAcceptType = {
    toPropValue: function ($39) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_InputAcceptType.renderInputAcceptType($39));
    }
};
var isPropFormMethod = {
    toPropValue: function ($40) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_FormMethod.renderFormMethod($40));
    }
};
var isPropDirValue = {
    toPropValue: function ($41) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_DirValue.renderDirValue($41));
    }
};
var isPropCrossOriginValue = {
    toPropValue: function ($42) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_CrossOriginValue.renderCrossOriginValue($42));
    }
};
var isPropButtonType = {
    toPropValue: function ($43) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_ButtonType.renderButtonType($43));
    }
};
var isPropBoolean = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromBoolean
};
var handler = Halogen_VDom_DOM_Prop.Handler.create;
var element = function (ns) {
    return function (name) {
        return function (props) {
            return function (children) {
                return new Halogen_VDom_Types.Elem(ns, name, props, children);
            };
        };
    };
};
var bifunctorHTML = {
    bimap: function (f) {
        return function (g) {
            return function (v) {
                return Data_Bifunctor.bimap(Halogen_VDom_Types.bifunctorVDom)(Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Halogen_VDom_DOM_Prop.functorProp)(Data_Functor.map(Halogen_Query_Input.functorInput)(g))))(f)(v);
            };
        };
    }
};
var functorHTML = {
    map: Data_Bifunctor.rmap(bifunctorHTML)
};
var attr = function (ns) {
    return function (v) {
        return Halogen_VDom_DOM_Prop.Attribute.create(ns)(v);
    };
};
module.exports = {
    HTML: HTML,
    renderWidget: renderWidget,
    widget: widget,
    text: text,
    element: element,
    keyed: keyed,
    prop: prop,
    attr: attr,
    handler: handler,
    ref: ref,
    toPropValue: toPropValue,
    newtypeHTML: newtypeHTML,
    bifunctorHTML: bifunctorHTML,
    functorHTML: functorHTML,
    isPropString: isPropString,
    isPropInt: isPropInt,
    isPropNumber: isPropNumber,
    isPropBoolean: isPropBoolean,
    isPropMediaType: isPropMediaType,
    isPropButtonType: isPropButtonType,
    isPropCrossOriginValue: isPropCrossOriginValue,
    isPropDirValue: isPropDirValue,
    isPropFormMethod: isPropFormMethod,
    isPropInputType: isPropInputType,
    isPropKindValue: isPropKindValue,
    isPropMenuitemType: isPropMenuitemType,
    isPropMenuType: isPropMenuType,
    isPropOnOff: isPropOnOff,
    isPropOrderedListType: isPropOrderedListType,
    isPropPreloadValue: isPropPreloadValue,
    isPropScopeValue: isPropScopeValue,
    isPropStepValue: isPropStepValue,
    isPropWrapValue: isPropWrapValue,
    isPropInputAcceptType: isPropInputAcceptType,
    ElemName: Halogen_VDom.ElemName,
    Namespace: Halogen_VDom.Namespace,
    Attribute: Halogen_VDom_DOM_Prop.Attribute,
    Handler: Halogen_VDom_DOM_Prop.Handler,
    Property: Halogen_VDom_DOM_Prop.Property,
    Ref: Halogen_VDom_DOM_Prop.Ref,
    AttrName: Web_HTML_Common.AttrName,
    ClassName: Web_HTML_Common.ClassName,
    PropName: Web_HTML_Common.PropName
};
