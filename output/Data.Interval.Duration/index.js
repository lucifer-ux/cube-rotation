// Generated by purs version 0.14.4
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Second = (function () {
    function Second() {

    };
    Second.value = new Second();
    return Second;
})();
var Minute = (function () {
    function Minute() {

    };
    Minute.value = new Minute();
    return Minute;
})();
var Hour = (function () {
    function Hour() {

    };
    Hour.value = new Hour();
    return Hour;
})();
var Day = (function () {
    function Day() {

    };
    Day.value = new Day();
    return Day;
})();
var Week = (function () {
    function Week() {

    };
    Week.value = new Week();
    return Week;
})();
var Month = (function () {
    function Month() {

    };
    Month.value = new Month();
    return Month;
})();
var Year = (function () {
    function Year() {

    };
    Year.value = new Year();
    return Year;
})();
var Duration = function (x) {
    return x;
};
var showDurationComponent = {
    show: function (v) {
        if (v instanceof Minute) {
            return "Minute";
        };
        if (v instanceof Second) {
            return "Second";
        };
        if (v instanceof Hour) {
            return "Hour";
        };
        if (v instanceof Day) {
            return "Day";
        };
        if (v instanceof Week) {
            return "Week";
        };
        if (v instanceof Month) {
            return "Month";
        };
        if (v instanceof Year) {
            return "Year";
        };
        throw new Error("Failed pattern match at Data.Interval.Duration (line 38, column 1 - line 45, column 21): " + [ v.constructor.name ]);
    }
};
var showDuration = {
    show: function (v) {
        return "(Duration " + (Data_Show.show(Data_Map_Internal.showMap(showDurationComponent)(Data_Show.showNumber))(v) + ")");
    }
};
var newtypeDuration = {
    Coercible0: function () {
        return undefined;
    }
};
var eqDurationComponent = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Second && y instanceof Second) {
                return true;
            };
            if (x instanceof Minute && y instanceof Minute) {
                return true;
            };
            if (x instanceof Hour && y instanceof Hour) {
                return true;
            };
            if (x instanceof Day && y instanceof Day) {
                return true;
            };
            if (x instanceof Week && y instanceof Week) {
                return true;
            };
            if (x instanceof Month && y instanceof Month) {
                return true;
            };
            if (x instanceof Year && y instanceof Year) {
                return true;
            };
            return false;
        };
    }
};
var ordDurationComponent = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Second && y instanceof Second) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Second) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Second) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Minute && y instanceof Minute) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Minute) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Minute) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Hour && y instanceof Hour) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Hour) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Hour) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Day && y instanceof Day) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Day) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Day) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Week && y instanceof Week) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Week) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Week) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Month && y instanceof Month) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Month) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Month) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Year && y instanceof Year) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Data.Interval.Duration (line 36, column 1 - line 36, column 62): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDurationComponent;
    }
};
var semigroupDuration = {
    append: function (v) {
        return function (v1) {
            return Data_Map_Internal.unionWith(ordDurationComponent)(Data_Semiring.add(Data_Semiring.semiringNumber))(v)(v1);
        };
    }
};
var monoidDuration = {
    mempty: Data_Map_Internal.empty,
    Semigroup0: function () {
        return semigroupDuration;
    }
};
var eqDuration = {
    eq: function (x) {
        return function (y) {
            return Data_Eq.eq(Data_Map_Internal.eqMap(eqDurationComponent)(Data_Eq.eqNumber))(x)(y);
        };
    }
};
var ordDuration = {
    compare: function (x) {
        return function (y) {
            return Data_Ord.compare(Data_Map_Internal.ordMap(ordDurationComponent)(Data_Ord.ordNumber))(x)(y);
        };
    },
    Eq0: function () {
        return eqDuration;
    }
};
var durationFromComponent = function (k) {
    return function (v) {
        return Data_Map_Internal.singleton(k)(v);
    };
};
var hour = durationFromComponent(Hour.value);
var millisecond = (function () {
    var $29 = durationFromComponent(Second.value);
    return function ($30) {
        return $29((function (v) {
            return v / 1000.0;
        })($30));
    };
})();
var minute = durationFromComponent(Minute.value);
var month = durationFromComponent(Month.value);
var second = durationFromComponent(Second.value);
var week = durationFromComponent(Week.value);
var year = durationFromComponent(Year.value);
var day = durationFromComponent(Day.value);
module.exports = {
    Duration: Duration,
    Second: Second,
    Minute: Minute,
    Hour: Hour,
    Day: Day,
    Week: Week,
    Month: Month,
    Year: Year,
    year: year,
    month: month,
    week: week,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    eqDuration: eqDuration,
    ordDuration: ordDuration,
    newtypeDuration: newtypeDuration,
    showDuration: showDuration,
    semigroupDuration: semigroupDuration,
    monoidDuration: monoidDuration,
    eqDurationComponent: eqDurationComponent,
    ordDurationComponent: ordDurationComponent,
    showDurationComponent: showDurationComponent
};
