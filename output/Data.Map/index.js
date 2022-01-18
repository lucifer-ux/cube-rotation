// Generated by purs version 0.14.4
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Set = require("../Data.Set/index.js");
var SemigroupMap = function (x) {
    return x;
};
var traversableWithIndexSemigroupMap = Data_Map_Internal.traversableWithIndexMap;
var traversableSemigroupMap = Data_Map_Internal.traversableMap;
var showSemigroupMap = function (dictShow) {
    return function (dictShow1) {
        return Data_Map_Internal.showMap(dictShow)(dictShow1);
    };
};
var semigroupSemigroupMap = function (dictOrd) {
    return function (dictSemigroup) {
        return {
            append: function (v) {
                return function (v1) {
                    return Data_Map_Internal.unionWith(dictOrd)(Data_Semigroup.append(dictSemigroup))(v)(v1);
                };
            }
        };
    };
};
var plusSemigroupMap = function (dictOrd) {
    return Data_Map_Internal.plusMap(dictOrd);
};
var ordSemigroupMap = function (dictOrd) {
    return function (dictOrd1) {
        return Data_Map_Internal.ordMap(dictOrd)(dictOrd1);
    };
};
var ord1SemigroupMap = function (dictOrd) {
    return Data_Map_Internal.ord1Map(dictOrd);
};
var newtypeSemigroupMap = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidSemigroupMap = function (dictOrd) {
    return function (dictSemigroup) {
        return {
            mempty: Data_Map_Internal.empty,
            Semigroup0: function () {
                return semigroupSemigroupMap(dictOrd)(dictSemigroup);
            }
        };
    };
};
var keys = (function () {
    var $20 = Data_Functor["void"](Data_Map_Internal.functorMap);
    return function ($21) {
        return Data_Set.fromMap($20($21));
    };
})();
var functorWithIndexSemigroupMap = Data_Map_Internal.functorWithIndexMap;
var functorSemigroupMap = Data_Map_Internal.functorMap;
var foldableWithIndexSemigroupMap = Data_Map_Internal.foldableWithIndexMap;
var foldableSemigroupMap = Data_Map_Internal.foldableMap;
var eqSemigroupMap = function (dictEq) {
    return function (dictEq1) {
        return Data_Map_Internal.eqMap(dictEq)(dictEq1);
    };
};
var eq1SemigroupMap = function (dictEq) {
    return Data_Map_Internal.eq1Map(dictEq);
};
var bindSemigroupMap = function (dictOrd) {
    return Data_Map_Internal.bindMap(dictOrd);
};
var applySemigroupMap = function (dictOrd) {
    return Data_Map_Internal.applyMap(dictOrd);
};
var altSemigroupMap = function (dictOrd) {
    return Data_Map_Internal.altMap(dictOrd);
};
module.exports = {
    keys: keys,
    SemigroupMap: SemigroupMap,
    eq1SemigroupMap: eq1SemigroupMap,
    eqSemigroupMap: eqSemigroupMap,
    ord1SemigroupMap: ord1SemigroupMap,
    ordSemigroupMap: ordSemigroupMap,
    newtypeSemigroupMap: newtypeSemigroupMap,
    showSemigroupMap: showSemigroupMap,
    semigroupSemigroupMap: semigroupSemigroupMap,
    monoidSemigroupMap: monoidSemigroupMap,
    altSemigroupMap: altSemigroupMap,
    plusSemigroupMap: plusSemigroupMap,
    functorSemigroupMap: functorSemigroupMap,
    functorWithIndexSemigroupMap: functorWithIndexSemigroupMap,
    applySemigroupMap: applySemigroupMap,
    bindSemigroupMap: bindSemigroupMap,
    foldableSemigroupMap: foldableSemigroupMap,
    foldableWithIndexSemigroupMap: foldableWithIndexSemigroupMap,
    traversableSemigroupMap: traversableSemigroupMap,
    traversableWithIndexSemigroupMap: traversableWithIndexSemigroupMap,
    alter: Data_Map_Internal.alter,
    catMaybes: Data_Map_Internal.catMaybes,
    checkValid: Data_Map_Internal.checkValid,
    "delete": Data_Map_Internal["delete"],
    difference: Data_Map_Internal.difference,
    empty: Data_Map_Internal.empty,
    filter: Data_Map_Internal.filter,
    filterKeys: Data_Map_Internal.filterKeys,
    filterWithKey: Data_Map_Internal.filterWithKey,
    findMax: Data_Map_Internal.findMax,
    findMin: Data_Map_Internal.findMin,
    foldSubmap: Data_Map_Internal.foldSubmap,
    fromFoldable: Data_Map_Internal.fromFoldable,
    fromFoldableWith: Data_Map_Internal.fromFoldableWith,
    fromFoldableWithIndex: Data_Map_Internal.fromFoldableWithIndex,
    insert: Data_Map_Internal.insert,
    insertWith: Data_Map_Internal.insertWith,
    intersection: Data_Map_Internal.intersection,
    intersectionWith: Data_Map_Internal.intersectionWith,
    isEmpty: Data_Map_Internal.isEmpty,
    isSubmap: Data_Map_Internal.isSubmap,
    lookup: Data_Map_Internal.lookup,
    lookupGE: Data_Map_Internal.lookupGE,
    lookupGT: Data_Map_Internal.lookupGT,
    lookupLE: Data_Map_Internal.lookupLE,
    lookupLT: Data_Map_Internal.lookupLT,
    mapMaybe: Data_Map_Internal.mapMaybe,
    mapMaybeWithKey: Data_Map_Internal.mapMaybeWithKey,
    member: Data_Map_Internal.member,
    pop: Data_Map_Internal.pop,
    showTree: Data_Map_Internal.showTree,
    singleton: Data_Map_Internal.singleton,
    size: Data_Map_Internal.size,
    submap: Data_Map_Internal.submap,
    toUnfoldable: Data_Map_Internal.toUnfoldable,
    toUnfoldableUnordered: Data_Map_Internal.toUnfoldableUnordered,
    union: Data_Map_Internal.union,
    unionWith: Data_Map_Internal.unionWith,
    unions: Data_Map_Internal.unions,
    update: Data_Map_Internal.update,
    values: Data_Map_Internal.values
};
