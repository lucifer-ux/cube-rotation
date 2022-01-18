// Generated by purs version 0.14.4
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Array_NonEmpty_Internal = require("../Data.Array.NonEmpty.Internal/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var unsafeFromArrayF = Unsafe_Coerce.unsafeCoerce;
var unsafeFromArray = Data_Array_NonEmpty_Internal.NonEmptyArray;
var toArray = function (v) {
    return v;
};
var unionBy$prime = function (eq) {
    return function (xs) {
        var $50 = Data_Array.unionBy(eq)(toArray(xs));
        return function ($51) {
            return unsafeFromArray($50($51));
        };
    };
};
var union$prime = function (dictEq) {
    return unionBy$prime(Data_Eq.eq(dictEq));
};
var unionBy = function (eq) {
    return function (xs) {
        var $52 = unionBy$prime(eq)(xs);
        return function ($53) {
            return $52(toArray($53));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var unzip = (function () {
    var $54 = Data_Bifunctor.bimap(Data_Bifunctor.bifunctorTuple)(unsafeFromArray)(unsafeFromArray);
    return function ($55) {
        return $54(Data_Array.unzip(toArray($55)));
    };
})();
var updateAt = function (i) {
    return function (x) {
        var $56 = Data_Array.updateAt(i)(x);
        return function ($57) {
            return unsafeFromArrayF($56(toArray($57)));
        };
    };
};
var zip = function (xs) {
    return function (ys) {
        return unsafeFromArray(Data_Array.zip(toArray(xs))(toArray(ys)));
    };
};
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            return unsafeFromArray(Data_Array.zipWith(f)(toArray(xs))(toArray(ys)));
        };
    };
};
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return unsafeFromArrayF(Data_Array.zipWithA(dictApplicative)(f)(toArray(xs))(toArray(ys)));
            };
        };
    };
};
var splitAt = function (i) {
    return function (xs) {
        return Data_Array.splitAt(i)(toArray(xs));
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        var $58 = Data_Array.some(dictAlternative)(dictLazy);
        return function ($59) {
            return unsafeFromArrayF($58($59));
        };
    };
};
var snoc$prime = function (xs) {
    return function (x) {
        return unsafeFromArray(Data_Array.snoc(xs)(x));
    };
};
var snoc = function (xs) {
    return function (x) {
        return unsafeFromArray(Data_Array.snoc(toArray(xs))(x));
    };
};
var singleton = function ($60) {
    return unsafeFromArray(Data_Array.singleton($60));
};
var replicate = function (i) {
    return function (x) {
        return unsafeFromArray(Data_Array.replicate(Data_Ord.max(Data_Ord.ordInt)(1)(i))(x));
    };
};
var range = function (x) {
    return function (y) {
        return unsafeFromArray(Data_Array.range(x)(y));
    };
};
var modifyAt = function (i) {
    return function (f) {
        var $61 = Data_Array.modifyAt(i)(f);
        return function ($62) {
            return unsafeFromArrayF($61(toArray($62)));
        };
    };
};
var intersectBy$prime = function (eq) {
    return function (xs) {
        return Data_Array.intersectBy(eq)(toArray(xs));
    };
};
var intersectBy = function (eq) {
    return function (xs) {
        var $63 = intersectBy$prime(eq)(xs);
        return function ($64) {
            return $63(toArray($64));
        };
    };
};
var intersect$prime = function (dictEq) {
    return intersectBy$prime(Data_Eq.eq(dictEq));
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var intercalate = function (dictSemigroup) {
    return Data_Semigroup_Foldable.intercalate(Data_Array_NonEmpty_Internal.foldable1NonEmptyArray)(dictSemigroup);
};
var insertAt = function (i) {
    return function (x) {
        var $65 = Data_Array.insertAt(i)(x);
        return function ($66) {
            return unsafeFromArrayF($65(toArray($66)));
        };
    };
};
var fromFoldable1 = function (dictFoldable1) {
    var $67 = Data_Array.fromFoldable(dictFoldable1.Foldable0());
    return function ($68) {
        return unsafeFromArray($67($68));
    };
};
var fromArray = function (xs) {
    if (Data_Array.length(xs) > 0) {
        return new Data_Maybe.Just(unsafeFromArray(xs));
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Array.NonEmpty (line 159, column 1 - line 159, column 58): " + [ xs.constructor.name ]);
};
var fromFoldable = function (dictFoldable) {
    var $69 = Data_Array.fromFoldable(dictFoldable);
    return function ($70) {
        return fromArray($69($70));
    };
};
var foldr1 = Data_Semigroup_Foldable.foldr1(Data_Array_NonEmpty_Internal.foldable1NonEmptyArray);
var foldl1 = Data_Semigroup_Foldable.foldl1(Data_Array_NonEmpty_Internal.foldable1NonEmptyArray);
var foldMap1 = function (dictSemigroup) {
    return Data_Semigroup_Foldable.foldMap1(Data_Array_NonEmpty_Internal.foldable1NonEmptyArray)(dictSemigroup);
};
var fold1 = function (dictSemigroup) {
    return Data_Semigroup_Foldable.fold1(Data_Array_NonEmpty_Internal.foldable1NonEmptyArray)(dictSemigroup);
};
var difference$prime = function (dictEq) {
    return function (xs) {
        return Data_Array.difference(dictEq)(toArray(xs));
    };
};
var cons$prime = function (x) {
    return function (xs) {
        return unsafeFromArray(Data_Array.cons(x)(xs));
    };
};
var fromNonEmpty = function (v) {
    return cons$prime(v.value0)(v.value1);
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_Array_NonEmpty_Internal.bindNonEmptyArray));
var concat = (function () {
    var $71 = Data_Functor.map(Data_Array_NonEmpty_Internal.functorNonEmptyArray)(toArray);
    return function ($72) {
        return unsafeFromArray(Data_Array.concat(toArray($71($72))));
    };
})();
var appendArray = function (xs) {
    return function (ys) {
        return unsafeFromArray(Data_Semigroup.append(Data_Semigroup.semigroupArray)(toArray(xs))(ys));
    };
};
var alterAt = function (i) {
    return function (f) {
        var $73 = Data_Array.alterAt(i)(f);
        return function ($74) {
            return $73(toArray($74));
        };
    };
};
var adaptMaybe = function (f) {
    var $75 = Data_Maybe.fromJust();
    return function ($76) {
        return $75(f(toArray($76)));
    };
};
var head = adaptMaybe(Data_Array.head);
var init = adaptMaybe(Data_Array.init);
var last = adaptMaybe(Data_Array.last);
var tail = adaptMaybe(Data_Array.tail);
var uncons = adaptMaybe(Data_Array.uncons);
var toNonEmpty = function ($77) {
    return (function (v) {
        return new Data_NonEmpty.NonEmpty(v.head, v.tail);
    })(uncons($77));
};
var unsnoc = adaptMaybe(Data_Array.unsnoc);
var adaptAny = function (f) {
    return function ($78) {
        return f(toArray($78));
    };
};
var all = function (p) {
    return adaptAny(Data_Array.all(p));
};
var any = function (p) {
    return adaptAny(Data_Array.any(p));
};
var catMaybes = adaptAny(Data_Array.catMaybes);
var $$delete = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array["delete"](dictEq)(x));
    };
};
var deleteAt = function (i) {
    return adaptAny(Data_Array.deleteAt(i));
};
var deleteBy = function (f) {
    return function (x) {
        return adaptAny(Data_Array.deleteBy(f)(x));
    };
};
var difference = function (dictEq) {
    return function (xs) {
        return adaptAny(difference$prime(dictEq)(xs));
    };
};
var drop = function (i) {
    return adaptAny(Data_Array.drop(i));
};
var dropEnd = function (i) {
    return adaptAny(Data_Array.dropEnd(i));
};
var dropWhile = function (f) {
    return adaptAny(Data_Array.dropWhile(f));
};
var elem = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.elem(dictEq)(x));
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.elemIndex(dictEq)(x));
    };
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.elemLastIndex(dictEq)(x));
    };
};
var filter = function (f) {
    return adaptAny(Data_Array.filter(f));
};
var filterA = function (dictApplicative) {
    return function (f) {
        return adaptAny(Data_Array.filterA(dictApplicative)(f));
    };
};
var find = function (p) {
    return adaptAny(Data_Array.find(p));
};
var findIndex = function (p) {
    return adaptAny(Data_Array.findIndex(p));
};
var findLastIndex = function (x) {
    return adaptAny(Data_Array.findLastIndex(x));
};
var findMap = function (p) {
    return adaptAny(Data_Array.findMap(p));
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (acc) {
            return adaptAny(Data_Array.foldM(dictMonad)(f)(acc));
        };
    };
};
var foldRecM = function (dictMonadRec) {
    return function (f) {
        return function (acc) {
            return adaptAny(Data_Array.foldRecM(dictMonadRec)(f)(acc));
        };
    };
};
var index = adaptAny(Data_Array.index);
var length = adaptAny(Data_Array.length);
var mapMaybe = function (f) {
    return adaptAny(Data_Array.mapMaybe(f));
};
var notElem = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.notElem(dictEq)(x));
    };
};
var partition = function (f) {
    return adaptAny(Data_Array.partition(f));
};
var slice = function (start) {
    return function (end) {
        return adaptAny(Data_Array.slice(start)(end));
    };
};
var span = function (f) {
    return adaptAny(Data_Array.span(f));
};
var take = function (i) {
    return adaptAny(Data_Array.take(i));
};
var takeEnd = function (i) {
    return adaptAny(Data_Array.takeEnd(i));
};
var takeWhile = function (f) {
    return adaptAny(Data_Array.takeWhile(f));
};
var toUnfoldable = function (dictUnfoldable) {
    return adaptAny(Data_Array.toUnfoldable(dictUnfoldable));
};
var unsafeAdapt = function (f) {
    var $79 = adaptAny(f);
    return function ($80) {
        return unsafeFromArray($79($80));
    };
};
var cons = function (x) {
    return unsafeAdapt(Data_Array.cons(x));
};
var group = function (dictEq) {
    return unsafeAdapt(Data_Array.group(dictEq));
};
var group$prime = function (dictWarn) {
    return function (dictOrd) {
        return unsafeAdapt(Data_Array.groupAll(dictOrd));
    };
};
var groupAllBy = function (op) {
    return unsafeAdapt(Data_Array.groupAllBy(op));
};
var groupAll = function (dictOrd) {
    return groupAllBy(Data_Ord.compare(dictOrd));
};
var groupBy = function (op) {
    return unsafeAdapt(Data_Array.groupBy(op));
};
var insert = function (dictOrd) {
    return function (x) {
        return unsafeAdapt(Data_Array.insert(dictOrd)(x));
    };
};
var insertBy = function (f) {
    return function (x) {
        return unsafeAdapt(Data_Array.insertBy(f)(x));
    };
};
var intersperse = function (x) {
    return unsafeAdapt(Data_Array.intersperse(x));
};
var mapWithIndex = function (f) {
    return unsafeAdapt(Data_Array.mapWithIndex(f));
};
var modifyAtIndices = function (dictFoldable) {
    return function (is) {
        return function (f) {
            return unsafeAdapt(Data_Array.modifyAtIndices(dictFoldable)(is)(f));
        };
    };
};
var nub = function (dictOrd) {
    return unsafeAdapt(Data_Array.nub(dictOrd));
};
var nubBy = function (f) {
    return unsafeAdapt(Data_Array.nubBy(f));
};
var nubByEq = function (f) {
    return unsafeAdapt(Data_Array.nubByEq(f));
};
var nubEq = function (dictEq) {
    return unsafeAdapt(Data_Array.nubEq(dictEq));
};
var reverse = unsafeAdapt(Data_Array.reverse);
var scanl = function (f) {
    return function (x) {
        return unsafeAdapt(Data_Array.scanl(f)(x));
    };
};
var scanr = function (f) {
    return function (x) {
        return unsafeAdapt(Data_Array.scanr(f)(x));
    };
};
var sort = function (dictOrd) {
    return unsafeAdapt(Data_Array.sort(dictOrd));
};
var sortBy = function (f) {
    return unsafeAdapt(Data_Array.sortBy(f));
};
var sortWith = function (dictOrd) {
    return function (f) {
        return unsafeAdapt(Data_Array.sortWith(dictOrd)(f));
    };
};
var updateAtIndices = function (dictFoldable) {
    return function (pairs) {
        return unsafeAdapt(Data_Array.updateAtIndices(dictFoldable)(pairs));
    };
};
var unsafeIndex = function (dictPartial) {
    return adaptAny(Data_Array.unsafeIndex());
};
var toUnfoldable1 = function (dictUnfoldable1) {
    return function (xs) {
        var len = length(xs);
        var f = function (i) {
            return Data_Tuple.Tuple.create(unsafeIndex()(xs)(i))((function () {
                var $49 = i < (len - 1 | 0);
                if ($49) {
                    return new Data_Maybe.Just(i + 1 | 0);
                };
                return Data_Maybe.Nothing.value;
            })());
        };
        return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(f)(0);
    };
};
module.exports = {
    fromArray: fromArray,
    fromNonEmpty: fromNonEmpty,
    toArray: toArray,
    toNonEmpty: toNonEmpty,
    fromFoldable: fromFoldable,
    fromFoldable1: fromFoldable1,
    toUnfoldable: toUnfoldable,
    toUnfoldable1: toUnfoldable1,
    singleton: singleton,
    range: range,
    replicate: replicate,
    some: some,
    length: length,
    cons: cons,
    "cons'": cons$prime,
    snoc: snoc,
    "snoc'": snoc$prime,
    appendArray: appendArray,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    unsnoc: unsnoc,
    index: index,
    elem: elem,
    notElem: notElem,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    find: find,
    findMap: findMap,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    updateAtIndices: updateAtIndices,
    modifyAt: modifyAt,
    modifyAtIndices: modifyAtIndices,
    alterAt: alterAt,
    intersperse: intersperse,
    reverse: reverse,
    concat: concat,
    concatMap: concatMap,
    filter: filter,
    partition: partition,
    splitAt: splitAt,
    filterA: filterA,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    mapWithIndex: mapWithIndex,
    foldl1: foldl1,
    foldr1: foldr1,
    foldMap1: foldMap1,
    fold1: fold1,
    intercalate: intercalate,
    scanl: scanl,
    scanr: scanr,
    sort: sort,
    sortBy: sortBy,
    sortWith: sortWith,
    slice: slice,
    take: take,
    takeEnd: takeEnd,
    takeWhile: takeWhile,
    drop: drop,
    dropEnd: dropEnd,
    dropWhile: dropWhile,
    span: span,
    group: group,
    groupAll: groupAll,
    "group'": group$prime,
    groupBy: groupBy,
    groupAllBy: groupAllBy,
    nub: nub,
    nubBy: nubBy,
    nubEq: nubEq,
    nubByEq: nubByEq,
    union: union,
    "union'": union$prime,
    unionBy: unionBy,
    "unionBy'": unionBy$prime,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    "difference'": difference$prime,
    intersect: intersect,
    "intersect'": intersect$prime,
    intersectBy: intersectBy,
    "intersectBy'": intersectBy$prime,
    zipWith: zipWith,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    any: any,
    all: all,
    foldM: foldM,
    foldRecM: foldRecM,
    unsafeIndex: unsafeIndex
};
