// Generated by purs version 0.14.4
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_Svg_Core = require("../Halogen.Svg.Core/index.js");
var Web_HTML_Common = require("../Web.HTML.Common/index.js");
var Matrix = (function () {
    function Matrix(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    Matrix.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new Matrix(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    return Matrix;
})();
var Translate = (function () {
    function Translate(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Translate.create = function (value0) {
        return function (value1) {
            return new Translate(value0, value1);
        };
    };
    return Translate;
})();
var Scale = (function () {
    function Scale(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Scale.create = function (value0) {
        return function (value1) {
            return new Scale(value0, value1);
        };
    };
    return Scale;
})();
var Rotate = (function () {
    function Rotate(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Rotate.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Rotate(value0, value1, value2);
            };
        };
    };
    return Rotate;
})();
var SkewX = (function () {
    function SkewX(value0) {
        this.value0 = value0;
    };
    SkewX.create = function (value0) {
        return new SkewX(value0);
    };
    return SkewX;
})();
var SkewY = (function () {
    function SkewY(value0) {
        this.value0 = value0;
    };
    SkewY.create = function (value0) {
        return new SkewY(value0);
    };
    return SkewY;
})();
var Start = (function () {
    function Start() {

    };
    Start.value = new Start();
    return Start;
})();
var AnchorMiddle = (function () {
    function AnchorMiddle() {

    };
    AnchorMiddle.value = new AnchorMiddle();
    return AnchorMiddle;
})();
var End = (function () {
    function End() {

    };
    End.value = new End();
    return End;
})();
var PathCommand = function (x3) {
    return x3;
};
var AutoOrient = (function () {
    function AutoOrient() {

    };
    AutoOrient.value = new AutoOrient();
    return AutoOrient;
})();
var AutoStartReverse = (function () {
    function AutoStartReverse() {

    };
    AutoStartReverse.value = new AutoStartReverse();
    return AutoStartReverse;
})();
var Meet = (function () {
    function Meet() {

    };
    Meet.value = new Meet();
    return Meet;
})();
var Slice = (function () {
    function Slice() {

    };
    Slice.value = new Slice();
    return Slice;
})();
var UserSpaceOnUse = (function () {
    function UserSpaceOnUse() {

    };
    UserSpaceOnUse.value = new UserSpaceOnUse();
    return UserSpaceOnUse;
})();
var StrokeWidth = (function () {
    function StrokeWidth() {

    };
    StrokeWidth.value = new StrokeWidth();
    return StrokeWidth;
})();
var Freeze = (function () {
    function Freeze() {

    };
    Freeze.value = new Freeze();
    return Freeze;
})();
var Remove = (function () {
    function Remove() {

    };
    Remove.value = new Remove();
    return Remove;
})();
var Duration = (function () {
    function Duration(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Duration.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Duration(value0, value1, value2, value3);
                };
            };
        };
    };
    return Duration;
})();
var Sweep0 = (function () {
    function Sweep0() {

    };
    Sweep0.value = new Sweep0();
    return Sweep0;
})();
var Sweep1 = (function () {
    function Sweep1() {

    };
    Sweep1.value = new Sweep1();
    return Sweep1;
})();
var Rel = (function () {
    function Rel() {

    };
    Rel.value = new Rel();
    return Rel;
})();
var Abs = (function () {
    function Abs() {

    };
    Abs.value = new Abs();
    return Abs;
})();
var Arc0 = (function () {
    function Arc0() {

    };
    Arc0.value = new Arc0();
    return Arc0;
})();
var Arc1 = (function () {
    function Arc1() {

    };
    Arc1.value = new Arc1();
    return Arc1;
})();
var RGB = (function () {
    function RGB(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    RGB.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new RGB(value0, value1, value2);
            };
        };
    };
    return RGB;
})();
var RGBA = (function () {
    function RGBA(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    RGBA.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new RGBA(value0, value1, value2, value3);
                };
            };
        };
    };
    return RGBA;
})();
var Cm = (function () {
    function Cm(value0) {
        this.value0 = value0;
    };
    Cm.create = function (value0) {
        return new Cm(value0);
    };
    return Cm;
})();
var Mm = (function () {
    function Mm(value0) {
        this.value0 = value0;
    };
    Mm.create = function (value0) {
        return new Mm(value0);
    };
    return Mm;
})();
var Inches = (function () {
    function Inches(value0) {
        this.value0 = value0;
    };
    Inches.create = function (value0) {
        return new Inches(value0);
    };
    return Inches;
})();
var Px = (function () {
    function Px(value0) {
        this.value0 = value0;
    };
    Px.create = function (value0) {
        return new Px(value0);
    };
    return Px;
})();
var Pt = (function () {
    function Pt(value0) {
        this.value0 = value0;
    };
    Pt.create = function (value0) {
        return new Pt(value0);
    };
    return Pt;
})();
var Pc = (function () {
    function Pc(value0) {
        this.value0 = value0;
    };
    Pc.create = function (value0) {
        return new Pc(value0);
    };
    return Pc;
})();
var Em = (function () {
    function Em(value0) {
        this.value0 = value0;
    };
    Em.create = function (value0) {
        return new Em(value0);
    };
    return Em;
})();
var Ex = (function () {
    function Ex(value0) {
        this.value0 = value0;
    };
    Ex.create = function (value0) {
        return new Ex(value0);
    };
    return Ex;
})();
var Rem = (function () {
    function Rem(value0) {
        this.value0 = value0;
    };
    Rem.create = function (value0) {
        return new Rem(value0);
    };
    return Rem;
})();
var Vw = (function () {
    function Vw(value0) {
        this.value0 = value0;
    };
    Vw.create = function (value0) {
        return new Vw(value0);
    };
    return Vw;
})();
var Vh = (function () {
    function Vh(value0) {
        this.value0 = value0;
    };
    Vh.create = function (value0) {
        return new Vh(value0);
    };
    return Vh;
})();
var Vmin = (function () {
    function Vmin(value0) {
        this.value0 = value0;
    };
    Vmin.create = function (value0) {
        return new Vmin(value0);
    };
    return Vmin;
})();
var Vmax = (function () {
    function Vmax(value0) {
        this.value0 = value0;
    };
    Vmax.create = function (value0) {
        return new Vmax(value0);
    };
    return Vmax;
})();
var Pct = (function () {
    function Pct(value0) {
        this.value0 = value0;
    };
    Pct.create = function (value0) {
        return new Pct(value0);
    };
    return Pct;
})();
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var XXSmall = (function () {
    function XXSmall() {

    };
    XXSmall.value = new XXSmall();
    return XXSmall;
})();
var XSmall = (function () {
    function XSmall() {

    };
    XSmall.value = new XSmall();
    return XSmall;
})();
var Small = (function () {
    function Small() {

    };
    Small.value = new Small();
    return Small;
})();
var Medium = (function () {
    function Medium() {

    };
    Medium.value = new Medium();
    return Medium;
})();
var Large = (function () {
    function Large() {

    };
    Large.value = new Large();
    return Large;
})();
var XLarge = (function () {
    function XLarge() {

    };
    XLarge.value = new XLarge();
    return XLarge;
})();
var XXLarge = (function () {
    function XXLarge() {

    };
    XXLarge.value = new XXLarge();
    return XXLarge;
})();
var Smaller = (function () {
    function Smaller() {

    };
    Smaller.value = new Smaller();
    return Smaller;
})();
var Larger = (function () {
    function Larger() {

    };
    Larger.value = new Larger();
    return Larger;
})();
var FontSizeLength = (function () {
    function FontSizeLength(value0) {
        this.value0 = value0;
    };
    FontSizeLength.create = function (value0) {
        return new FontSizeLength(value0);
    };
    return FontSizeLength;
})();
var Auto = (function () {
    function Auto() {

    };
    Auto.value = new Auto();
    return Auto;
})();
var UseScript = (function () {
    function UseScript() {

    };
    UseScript.value = new UseScript();
    return UseScript;
})();
var NoChange = (function () {
    function NoChange() {

    };
    NoChange.value = new NoChange();
    return NoChange;
})();
var ResetSize = (function () {
    function ResetSize() {

    };
    ResetSize.value = new ResetSize();
    return ResetSize;
})();
var Ideographic = (function () {
    function Ideographic() {

    };
    Ideographic.value = new Ideographic();
    return Ideographic;
})();
var Alphabetic = (function () {
    function Alphabetic() {

    };
    Alphabetic.value = new Alphabetic();
    return Alphabetic;
})();
var Hanging = (function () {
    function Hanging() {

    };
    Hanging.value = new Hanging();
    return Hanging;
})();
var Mathematical = (function () {
    function Mathematical() {

    };
    Mathematical.value = new Mathematical();
    return Mathematical;
})();
var Central = (function () {
    function Central() {

    };
    Central.value = new Central();
    return Central;
})();
var BaselineMiddle = (function () {
    function BaselineMiddle() {

    };
    BaselineMiddle.value = new BaselineMiddle();
    return BaselineMiddle;
})();
var TextAfterEdge = (function () {
    function TextAfterEdge() {

    };
    TextAfterEdge.value = new TextAfterEdge();
    return TextAfterEdge;
})();
var TextBeforeEdge = (function () {
    function TextBeforeEdge() {

    };
    TextBeforeEdge.value = new TextBeforeEdge();
    return TextBeforeEdge;
})();
var Min = (function () {
    function Min() {

    };
    Min.value = new Min();
    return Min;
})();
var Mid = (function () {
    function Mid() {

    };
    Mid.value = new Mid();
    return Mid;
})();
var Max = (function () {
    function Max() {

    };
    Max.value = new Max();
    return Max;
})();
var z = "z";
var xlinkHref = Halogen_HTML_Properties.attrNS("xlink")("xlink:href");
var showOrient = {
    show: function (v1) {
        if (v1 instanceof AutoOrient) {
            return "auto";
        };
        if (v1 instanceof AutoStartReverse) {
            return "auto-start-reverse";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 154, column 1 - line 156, column 47): " + [ v1.constructor.name ]);
    }
};
var showMarkerUnit = {
    show: function (v1) {
        if (v1 instanceof UserSpaceOnUse) {
            return "userSpaceOnUse";
        };
        if (v1 instanceof StrokeWidth) {
            return "strokeWidth";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 166, column 1 - line 168, column 35): " + [ v1.constructor.name ]);
    }
};
var showCommandSweepChoice = {
    show: function (v1) {
        if (v1 instanceof Sweep0) {
            return "Sweep0";
        };
        if (v1 instanceof Sweep1) {
            return "Sweep1";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 262, column 10 - line 264, column 23): " + [ v1.constructor.name ]);
    }
};
var showCommandPositionReference = {
    show: function (v1) {
        if (v1 instanceof Abs) {
            return "Abs";
        };
        if (v1 instanceof Rel) {
            return "Rel";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 239, column 10 - line 241, column 17): " + [ v1.constructor.name ]);
    }
};
var showCommandArcChoice = {
    show: function (v1) {
        if (v1 instanceof Arc0) {
            return "Arc0";
        };
        if (v1 instanceof Arc1) {
            return "Arc1";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 248, column 10 - line 250, column 19): " + [ v1.constructor.name ]);
    }
};
var showCSSLength = {
    show: function (v1) {
        if (v1 instanceof Cm) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "cm";
        };
        if (v1 instanceof Mm) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "mm";
        };
        if (v1 instanceof Inches) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "in";
        };
        if (v1 instanceof Px) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "px";
        };
        if (v1 instanceof Pt) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "pt";
        };
        if (v1 instanceof Pc) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "pc";
        };
        if (v1 instanceof Em) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "em";
        };
        if (v1 instanceof Ex) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "ex";
        };
        if (v1 instanceof Rem) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "rem";
        };
        if (v1 instanceof Vw) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "vw";
        };
        if (v1 instanceof Vh) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "vh";
        };
        if (v1 instanceof Vmin) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "vmin";
        };
        if (v1 instanceof Vmax) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "vmax";
        };
        if (v1 instanceof Pct) {
            return Data_Show.show(Data_Show.showNumber)(v1.value0) + "%";
        };
        if (v1 instanceof Nil) {
            return "0";
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 121, column 10 - line 136, column 15): " + [ v1.constructor.name ]);
    }
};
var showFontSize = {
    show: function (v1) {
        if (v1 instanceof XXSmall) {
            return "xx-small";
        };
        if (v1 instanceof XSmall) {
            return "x-small";
        };
        if (v1 instanceof Small) {
            return "small";
        };
        if (v1 instanceof Medium) {
            return "medium";
        };
        if (v1 instanceof Large) {
            return "large";
        };
        if (v1 instanceof XLarge) {
            return "x-large";
        };
        if (v1 instanceof XXLarge) {
            return "xx-large";
        };
        if (v1 instanceof Smaller) {
            return "smaller";
        };
        if (v1 instanceof Larger) {
            return "larger";
        };
        if (v1 instanceof FontSizeLength) {
            return Data_Show.show(showCSSLength)(v1.value0);
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 176, column 10 - line 186, column 33): " + [ v1.constructor.name ]);
    }
};
var seconds = function (s_) {
    return new Duration(Data_Maybe.Nothing.value, Data_Maybe.Nothing.value, new Data_Maybe.Just(s_), Data_Maybe.Nothing.value);
};
var renderCommand = function (cmd) {
    return function (s_) {
        if (cmd instanceof Rel) {
            return s_;
        };
        if (cmd instanceof Abs) {
            return Data_String_Common.toUpper(s_);
        };
        throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 273, column 24 - line 275, column 20): " + [ cmd.constructor.name ]);
    };
};
var renderCommand1Arg = function (s_) {
    return function (ref) {
        return function (a_) {
            return PathCommand(renderCommand(ref)(s_) + Data_Show.show(Data_Show.showNumber)(a_));
        };
    };
};
var v = renderCommand1Arg("v");
var renderCommand2Args = function (s_) {
    return function (ref) {
        return function (a_) {
            return function (b) {
                return PathCommand(renderCommand(ref)(s_) + (Data_Show.show(Data_Show.showNumber)(a_) + (", " + Data_Show.show(Data_Show.showNumber)(b))));
            };
        };
    };
};
var t = renderCommand2Args("t");
var renderCommand4Args = function (s_) {
    return function (ref) {
        return function (a_) {
            return function (b) {
                return function (c_) {
                    return function (d_) {
                        return PathCommand(renderCommand(ref)(s_) + (Data_Show.show(Data_Show.showNumber)(a_) + (", " + (Data_Show.show(Data_Show.showNumber)(b) + (", " + (Data_Show.show(Data_Show.showNumber)(c_) + (", " + Data_Show.show(Data_Show.showNumber)(d_))))))));
                    };
                };
            };
        };
    };
};
var s = renderCommand4Args("s");
var q = renderCommand4Args("q");
var printTransform = function (v1) {
    if (v1 instanceof Matrix) {
        return "matrix(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showNumber))([ v1.value0, v1.value1, v1.value2, v1.value3, v1.value4, v1.value5 ])) + ")");
    };
    if (v1 instanceof Translate) {
        return "translate(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showNumber))([ v1.value0, v1.value1 ])) + ")");
    };
    if (v1 instanceof Scale) {
        return "scale(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showNumber))([ v1.value0, v1.value1 ])) + ")");
    };
    if (v1 instanceof Rotate) {
        return "rotate(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showNumber))([ v1.value0, v1.value1, v1.value2 ])) + ")");
    };
    if (v1 instanceof SkewX) {
        return "skewX(" + (Data_Show.show(Data_Show.showNumber)(v1.value0) + ")");
    };
    if (v1 instanceof SkewY) {
        return "skewY(" + (Data_Show.show(Data_Show.showNumber)(v1.value0) + ")");
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 214, column 18 - line 226, column 31): " + [ v1.constructor.name ]);
};
var printTextAnchor = function (v1) {
    if (v1 instanceof Start) {
        return "start";
    };
    if (v1 instanceof AnchorMiddle) {
        return "middle";
    };
    if (v1 instanceof End) {
        return "end";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 189, column 19 - line 192, column 15): " + [ v1.constructor.name ]);
};
var printPathCommand = function (v1) {
    return v1;
};
var showPathCommand = {
    show: function (val) {
        return printPathCommand(val);
    }
};
var printOrient = function (v1) {
    if (v1 instanceof AutoOrient) {
        return "auto";
    };
    if (v1 instanceof AutoStartReverse) {
        return "auto-start-reverse";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 158, column 1 - line 158, column 32): " + [ v1.constructor.name ]);
};
var printMeetOrSlice = function (v1) {
    if (v1 instanceof Meet) {
        return "meet";
    };
    if (v1 instanceof Slice) {
        return "slice";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 338, column 20 - line 340, column 19): " + [ v1.constructor.name ]);
};
var printMarkerUnit = function (v1) {
    if (v1 instanceof UserSpaceOnUse) {
        return "userSpaceOnUse";
    };
    if (v1 instanceof StrokeWidth) {
        return "strokeWidth";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 171, column 19 - line 173, column 31): " + [ v1.constructor.name ]);
};
var printFillState = function (v1) {
    if (v1 instanceof Freeze) {
        return "freeze";
    };
    if (v1 instanceof Remove) {
        return "remove";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 483, column 18 - line 485, column 21): " + [ v1.constructor.name ]);
};
var printDurationF = function (dictShow) {
    return function (v1) {
        var f = function (u) {
            return Data_Maybe.maybe("")(function (val) {
                return Data_Show.show(dictShow)(val) + u;
            });
        };
        return f("h")(v1.value0) + (f("m")(v1.value1) + (f("s")(v1.value2) + f("i")(v1.value3)));
    };
};
var printDuration = printDurationF(Data_Show.showNumber);
var printCommandSweepChoice = function (v1) {
    if (v1 instanceof Sweep0) {
        return "0";
    };
    if (v1 instanceof Sweep1) {
        return "1";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 267, column 27 - line 269, column 16): " + [ v1.constructor.name ]);
};
var printCommandArcChoice = function (v1) {
    if (v1 instanceof Arc0) {
        return "0";
    };
    if (v1 instanceof Arc1) {
        return "1";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 253, column 25 - line 255, column 14): " + [ v1.constructor.name ]);
};
var printColor = function (v1) {
    if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof RGB) {
        return "rgb(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showInt))([ v1.value0.value0, v1.value0.value1, v1.value0.value2 ])) + ")");
    };
    if (v1 instanceof Data_Maybe.Just && v1.value0 instanceof RGBA) {
        return "rgba(" + (Data_String_Common.joinWith(",")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showInt))([ v1.value0.value0, v1.value0.value1, v1.value0.value2 ])) + ("," + (Data_Show.show(Data_Show.showNumber)(v1.value0.value3) + ")")));
    };
    if (v1 instanceof Data_Maybe.Nothing) {
        return "None";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 88, column 14 - line 91, column 20): " + [ v1.constructor.name ]);
};
var printBaseline = function (v1) {
    if (v1 instanceof Auto) {
        return "auto";
    };
    if (v1 instanceof UseScript) {
        return "use-script";
    };
    if (v1 instanceof NoChange) {
        return "no-change";
    };
    if (v1 instanceof ResetSize) {
        return "reset-size";
    };
    if (v1 instanceof Ideographic) {
        return "ideographic";
    };
    if (v1 instanceof Alphabetic) {
        return "alphabetic";
    };
    if (v1 instanceof Hanging) {
        return "hanging";
    };
    if (v1 instanceof Mathematical) {
        return "mathematical";
    };
    if (v1 instanceof Central) {
        return "central";
    };
    if (v1 instanceof BaselineMiddle) {
        return "middle";
    };
    if (v1 instanceof TextAfterEdge) {
        return "text-after-edge";
    };
    if (v1 instanceof TextBeforeEdge) {
        return "text-before-edge";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 199, column 17 - line 211, column 39): " + [ v1.constructor.name ]);
};
var printAlign = function (v1) {
    if (v1 instanceof Min) {
        return "Min";
    };
    if (v1 instanceof Mid) {
        return "Mid";
    };
    if (v1 instanceof Max) {
        return "Max";
    };
    throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 330, column 14 - line 333, column 15): " + [ v1.constructor.name ]);
};
var m = renderCommand2Args("m");
var l = renderCommand2Args("l");
var h = renderCommand1Arg("h");
var functorDurationF = {
    map: function (f) {
        return function (m1) {
            return new Duration(Data_Functor.map(Data_Maybe.functorMaybe)(f)(m1.value0), Data_Functor.map(Data_Maybe.functorMaybe)(f)(m1.value1), Data_Functor.map(Data_Maybe.functorMaybe)(f)(m1.value2), Data_Functor.map(Data_Maybe.functorMaybe)(f)(m1.value3));
        };
    }
};
var eqPathCommand = {
    eq: function (x3) {
        return function (y3) {
            return x3 === y3;
        };
    }
};
var eqCommandSweepChoice = {
    eq: function (x3) {
        return function (y3) {
            if (x3 instanceof Sweep0 && y3 instanceof Sweep0) {
                return true;
            };
            if (x3 instanceof Sweep1 && y3 instanceof Sweep1) {
                return true;
            };
            return false;
        };
    }
};
var eqCommandPositionReference = {
    eq: function (x3) {
        return function (y3) {
            if (x3 instanceof Rel && y3 instanceof Rel) {
                return true;
            };
            if (x3 instanceof Abs && y3 instanceof Abs) {
                return true;
            };
            return false;
        };
    }
};
var eqCommandArcChoice = {
    eq: function (x3) {
        return function (y3) {
            if (x3 instanceof Arc0 && y3 instanceof Arc0) {
                return true;
            };
            if (x3 instanceof Arc1 && y3 instanceof Arc1) {
                return true;
            };
            return false;
        };
    }
};
var c = function (ref) {
    return function (x1_) {
        return function (y1_) {
            return function (x2_) {
                return function (y2_) {
                    return function (x_) {
                        return function (y_) {
                            return PathCommand(renderCommand(ref)("c") + (Data_Show.show(Data_Show.showNumber)(x1_) + (", " + (Data_Show.show(Data_Show.showNumber)(y1_) + (", " + (Data_Show.show(Data_Show.showNumber)(x2_) + (", " + (Data_Show.show(Data_Show.showNumber)(y2_) + (Data_Show.show(Data_Show.showNumber)(x_) + (", " + Data_Show.show(Data_Show.showNumber)(y_)))))))))));
                        };
                    };
                };
            };
        };
    };
};
var attr = Halogen_Svg_Core.attr;
var attributeName = attr("attributeName");
var begin = attr("begin");
var class_ = (function () {
    var $118 = attr("class");
    var $119 = Data_Newtype.un()(Web_HTML_Common.ClassName);
    return function ($120) {
        return $118($119($120));
    };
})();
var classes = (function () {
    var $121 = attr("class");
    var $122 = Data_String_Common.joinWith(" ");
    return function ($123) {
        return $121($122($123));
    };
})();
var cx = (function () {
    var $124 = attr("cx");
    var $125 = Data_Show.show(Data_Show.showNumber);
    return function ($126) {
        return $124($125($126));
    };
})();
var cy = (function () {
    var $127 = attr("cy");
    var $128 = Data_Show.show(Data_Show.showNumber);
    return function ($129) {
        return $127($128($129));
    };
})();
var d = (function () {
    var $130 = attr("d");
    var $131 = Data_String_Common.joinWith(" ");
    return function ($132) {
        return $130($131($132));
    };
})();
var dominant_baseline = (function () {
    var $133 = attr("dominant-baseline");
    return function ($134) {
        return $133(printBaseline($134));
    };
})();
var dur = (function () {
    var $135 = attr("dur");
    return function ($136) {
        return $135(printDuration($136));
    };
})();
var fill = (function () {
    var $137 = attr("fill");
    return function ($138) {
        return $137(printColor($138));
    };
})();
var fillAnim = (function () {
    var $139 = attr("fill");
    return function ($140) {
        return $139(printFillState($140));
    };
})();
var font_size = (function () {
    var $141 = attr("font-size");
    var $142 = Data_Show.show(showFontSize);
    return function ($143) {
        return $141($142($143));
    };
})();
var from = attr("from");
var height = (function () {
    var $144 = attr("height");
    var $145 = Data_Show.show(Data_Show.showNumber);
    return function ($146) {
        return $144($145($146));
    };
})();
var id = attr("id");
var markerEnd = attr("marker-end");
var markerHeight = (function () {
    var $147 = attr("markerHeight");
    var $148 = Data_Show.show(Data_Show.showNumber);
    return function ($149) {
        return $147($148($149));
    };
})();
var markerUnits = (function () {
    var $150 = attr("markerUnits");
    return function ($151) {
        return $150(printMarkerUnit($151));
    };
})();
var markerWidth = (function () {
    var $152 = attr("markerWidth");
    var $153 = Data_Show.show(Data_Show.showNumber);
    return function ($154) {
        return $152($153($154));
    };
})();
var orient = (function () {
    var $155 = attr("orient");
    return function ($156) {
        return $155(printOrient($156));
    };
})();
var path = (function () {
    var $157 = attr("path");
    var $158 = Data_String_Common.joinWith(" ");
    return function ($159) {
        return $157($158($159));
    };
})();
var preserveAspectRatio = function (align) {
    return function (slice) {
        var align_str = (function () {
            if (align instanceof Data_Maybe.Nothing) {
                return "none";
            };
            if (align instanceof Data_Maybe.Just) {
                return Data_String_Common.joinWith("")([ "x", printAlign(align.value0.x_), "Y", printAlign(align.value0.y_) ]);
            };
            throw new Error("Failed pattern match at Halogen.Svg.Attributes (line 364, column 17 - line 366, column 78): " + [ align.constructor.name ]);
        })();
        return attr("preserveAspectRatio")(Data_String_Common.joinWith(" ")([ align_str, printMeetOrSlice(slice) ]));
    };
};
var r = (function () {
    var $160 = attr("r");
    var $161 = Data_Show.show(Data_Show.showNumber);
    return function ($162) {
        return $160($161($162));
    };
})();
var refX = (function () {
    var $163 = attr("refX");
    var $164 = Data_Show.show(Data_Show.showNumber);
    return function ($165) {
        return $163($164($165));
    };
})();
var refY = (function () {
    var $166 = attr("refY");
    var $167 = Data_Show.show(Data_Show.showNumber);
    return function ($168) {
        return $166($167($168));
    };
})();
var repeatCount = (function () {
    var $169 = attr("repeatCount");
    var $170 = Data_Show.show(Data_Show.showInt);
    return function ($171) {
        return $169($170($171));
    };
})();
var rx = (function () {
    var $172 = attr("rx");
    var $173 = Data_Show.show(Data_Show.showNumber);
    return function ($174) {
        return $172($173($174));
    };
})();
var ry = (function () {
    var $175 = attr("ry");
    var $176 = Data_Show.show(Data_Show.showNumber);
    return function ($177) {
        return $175($176($177));
    };
})();
var stroke = (function () {
    var $178 = attr("stroke");
    return function ($179) {
        return $178(printColor($179));
    };
})();
var strokeWidth = (function () {
    var $180 = attr("stroke-width");
    var $181 = Data_Show.show(Data_Show.showNumber);
    return function ($182) {
        return $180($181($182));
    };
})();
var text_anchor = (function () {
    var $183 = attr("text-anchor");
    return function ($184) {
        return $183(printTextAnchor($184));
    };
})();
var to = attr("to");
var transform = (function () {
    var $185 = attr("transform");
    var $186 = Data_String_Common.joinWith(" ");
    var $187 = Data_Functor.map(Data_Functor.functorArray)(printTransform);
    return function ($188) {
        return $185($186($187($188)));
    };
})();
var viewBox = function (x_) {
    return function (y_) {
        return function (w) {
            return function (h_) {
                return attr("viewBox")(Data_String_Common.joinWith(" ")(Data_Functor.map(Data_Functor.functorArray)(Data_Show.show(Data_Show.showNumber))([ x_, y_, w, h_ ])));
            };
        };
    };
};
var width = (function () {
    var $189 = attr("width");
    var $190 = Data_Show.show(Data_Show.showNumber);
    return function ($191) {
        return $189($190($191));
    };
})();
var x = (function () {
    var $192 = attr("x");
    var $193 = Data_Show.show(Data_Show.showNumber);
    return function ($194) {
        return $192($193($194));
    };
})();
var x1 = (function () {
    var $195 = attr("x1");
    var $196 = Data_Show.show(Data_Show.showNumber);
    return function ($197) {
        return $195($196($197));
    };
})();
var x2 = (function () {
    var $198 = attr("x2");
    var $199 = Data_Show.show(Data_Show.showNumber);
    return function ($200) {
        return $198($199($200));
    };
})();
var y = (function () {
    var $201 = attr("y");
    var $202 = Data_Show.show(Data_Show.showNumber);
    return function ($203) {
        return $201($202($203));
    };
})();
var y1 = (function () {
    var $204 = attr("y1");
    var $205 = Data_Show.show(Data_Show.showNumber);
    return function ($206) {
        return $204($205($206));
    };
})();
var y2 = (function () {
    var $207 = attr("y2");
    var $208 = Data_Show.show(Data_Show.showNumber);
    return function ($209) {
        return $207($208($209));
    };
})();
var a = function (ref) {
    return function (rx_) {
        return function (ry_) {
            return function (rot) {
                return function (arc) {
                    return function (sweep) {
                        return function (x_) {
                            return function (y_) {
                                return PathCommand(renderCommand(ref)("a") + (Data_Show.show(Data_Show.showNumber)(rx_) + (", " + (Data_Show.show(Data_Show.showNumber)(ry_) + (", " + (Data_Show.show(Data_Show.showNumber)(rot) + (printCommandArcChoice(arc) + (" " + (printCommandSweepChoice(sweep) + (Data_Show.show(Data_Show.showNumber)(x_) + (" " + Data_Show.show(Data_Show.showNumber)(y_))))))))))));
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    RGB: RGB,
    RGBA: RGBA,
    printColor: printColor,
    Matrix: Matrix,
    Translate: Translate,
    Scale: Scale,
    Rotate: Rotate,
    SkewX: SkewX,
    SkewY: SkewY,
    Start: Start,
    AnchorMiddle: AnchorMiddle,
    End: End,
    Cm: Cm,
    Mm: Mm,
    Inches: Inches,
    Px: Px,
    Pt: Pt,
    Pc: Pc,
    Em: Em,
    Ex: Ex,
    Rem: Rem,
    Vw: Vw,
    Vh: Vh,
    Vmin: Vmin,
    Vmax: Vmax,
    Pct: Pct,
    Nil: Nil,
    XXSmall: XXSmall,
    XSmall: XSmall,
    Small: Small,
    Medium: Medium,
    Large: Large,
    XLarge: XLarge,
    XXLarge: XXLarge,
    Smaller: Smaller,
    Larger: Larger,
    FontSizeLength: FontSizeLength,
    AutoOrient: AutoOrient,
    AutoStartReverse: AutoStartReverse,
    printOrient: printOrient,
    UserSpaceOnUse: UserSpaceOnUse,
    StrokeWidth: StrokeWidth,
    printMarkerUnit: printMarkerUnit,
    printTextAnchor: printTextAnchor,
    Auto: Auto,
    UseScript: UseScript,
    NoChange: NoChange,
    ResetSize: ResetSize,
    Ideographic: Ideographic,
    Alphabetic: Alphabetic,
    Hanging: Hanging,
    Mathematical: Mathematical,
    Central: Central,
    BaselineMiddle: BaselineMiddle,
    TextAfterEdge: TextAfterEdge,
    TextBeforeEdge: TextBeforeEdge,
    printBaseline: printBaseline,
    printTransform: printTransform,
    printPathCommand: printPathCommand,
    Rel: Rel,
    Abs: Abs,
    Arc0: Arc0,
    Arc1: Arc1,
    printCommandArcChoice: printCommandArcChoice,
    Sweep0: Sweep0,
    Sweep1: Sweep1,
    printCommandSweepChoice: printCommandSweepChoice,
    m: m,
    l: l,
    h: h,
    v: v,
    c: c,
    s: s,
    q: q,
    t: t,
    a: a,
    z: z,
    Min: Min,
    Mid: Mid,
    Max: Max,
    printAlign: printAlign,
    Meet: Meet,
    Slice: Slice,
    printMeetOrSlice: printMeetOrSlice,
    attr: attr,
    cx: cx,
    cy: cy,
    r: r,
    viewBox: viewBox,
    preserveAspectRatio: preserveAspectRatio,
    rx: rx,
    ry: ry,
    width: width,
    height: height,
    x: x,
    y: y,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    stroke: stroke,
    fill: fill,
    transform: transform,
    d: d,
    text_anchor: text_anchor,
    font_size: font_size,
    dominant_baseline: dominant_baseline,
    class_: class_,
    classes: classes,
    id: id,
    markerWidth: markerWidth,
    markerHeight: markerHeight,
    refX: refX,
    refY: refY,
    orient: orient,
    markerUnits: markerUnits,
    strokeWidth: strokeWidth,
    markerEnd: markerEnd,
    Duration: Duration,
    printDurationF: printDurationF,
    printDuration: printDuration,
    seconds: seconds,
    Freeze: Freeze,
    Remove: Remove,
    printFillState: printFillState,
    dur: dur,
    attributeName: attributeName,
    from: from,
    to: to,
    begin: begin,
    repeatCount: repeatCount,
    fillAnim: fillAnim,
    xlinkHref: xlinkHref,
    path: path,
    showCSSLength: showCSSLength,
    showOrient: showOrient,
    showMarkerUnit: showMarkerUnit,
    showFontSize: showFontSize,
    eqPathCommand: eqPathCommand,
    showPathCommand: showPathCommand,
    eqCommandPositionReference: eqCommandPositionReference,
    showCommandPositionReference: showCommandPositionReference,
    eqCommandArcChoice: eqCommandArcChoice,
    showCommandArcChoice: showCommandArcChoice,
    eqCommandSweepChoice: eqCommandSweepChoice,
    showCommandSweepChoice: showCommandSweepChoice,
    functorDurationF: functorDurationF
};