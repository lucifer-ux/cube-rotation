// Generated by purs version 0.14.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var List = function (x) {
    return x;
};
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var nil = List(Data_Lazy.defer(function (v) {
    return Nil.value;
}));
var newtypeNonEmptyList = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeList = {
    Coercible0: function () {
        return undefined;
    }
};
var step = (function () {
    var $225 = Data_Newtype.unwrap();
    return function ($226) {
        return Data_Lazy.force($225($226));
    };
})();
var semigroupList = {
    append: function (xs) {
        return function (ys) {
            var go = function (v) {
                if (v instanceof Nil) {
                    return step(ys);
                };
                if (v instanceof Cons) {
                    return new Cons(v.value0, Data_Semigroup.append(semigroupList)(v.value1)(ys));
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 104, column 5 - line 104, column 21): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    }
};
var monoidList = {
    mempty: nil,
    Semigroup0: function () {
        return semigroupList;
    }
};
var lazyList = {
    defer: function (f) {
        return List(Data_Lazy.defer(function ($227) {
            return step(f($227));
        }));
    }
};
var functorList = {
    map: function (f) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Nil) {
                    return Nil.value;
                };
                if (v instanceof Cons) {
                    return new Cons(f(v.value0), Data_Functor.map(functorList)(f)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 113, column 5 - line 113, column 17): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    }
};
var functorNonEmptyList = {
    map: function (f) {
        return function (v) {
            return Data_Functor.map(Data_Lazy.functorLazy)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(functorList))(f))(v);
        };
    }
};
var eq1List = {
    eq1: function (dictEq) {
        return function (xs) {
            return function (ys) {
                var go = function ($copy_v) {
                    return function ($copy_v1) {
                        var $tco_var_v = $copy_v;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1) {
                            if (v instanceof Nil && v1 instanceof Nil) {
                                $tco_done = true;
                                return true;
                            };
                            if (v instanceof Cons && (v1 instanceof Cons && Data_Eq.eq(dictEq)(v.value0)(v1.value0))) {
                                $tco_var_v = step(v.value1);
                                $copy_v1 = step(v1.value1);
                                return;
                            };
                            $tco_done = true;
                            return false;
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $copy_v1);
                        };
                        return $tco_result;
                    };
                };
                return go(step(xs))(step(ys));
            };
        };
    }
};
var eq1NonEmptyList = {
    eq1: function (dictEq) {
        return function (v) {
            return function (v1) {
                return Data_Eq.eq1(Data_Lazy.eq1Lazy)(Data_NonEmpty.eqNonEmpty(eq1List)(dictEq))(v)(v1);
            };
        };
    }
};
var eqList = function (dictEq) {
    return {
        eq: Data_Eq.eq1(eq1List)(dictEq)
    };
};
var eqNonEmptyList = function (dictEq) {
    return Data_Lazy.eqLazy(Data_NonEmpty.eqNonEmpty(eq1List)(dictEq));
};
var ord1List = {
    compare1: function (dictOrd) {
        return function (xs) {
            return function (ys) {
                var go = function ($copy_v) {
                    return function ($copy_v1) {
                        var $tco_var_v = $copy_v;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1) {
                            if (v instanceof Nil && v1 instanceof Nil) {
                                $tco_done = true;
                                return Data_Ordering.EQ.value;
                            };
                            if (v instanceof Nil) {
                                $tco_done = true;
                                return Data_Ordering.LT.value;
                            };
                            if (v1 instanceof Nil) {
                                $tco_done = true;
                                return Data_Ordering.GT.value;
                            };
                            if (v instanceof Cons && v1 instanceof Cons) {
                                var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
                                if (v2 instanceof Data_Ordering.EQ) {
                                    $tco_var_v = step(v.value1);
                                    $copy_v1 = step(v1.value1);
                                    return;
                                };
                                $tco_done = true;
                                return v2;
                            };
                            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 90, column 5 - line 90, column 20): " + [ v.constructor.name, v1.constructor.name ]);
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $copy_v1);
                        };
                        return $tco_result;
                    };
                };
                return go(step(xs))(step(ys));
            };
        };
    },
    Eq10: function () {
        return eq1List;
    }
};
var ord1NonEmptyList = {
    compare1: function (dictOrd) {
        return function (v) {
            return function (v1) {
                return Data_Ord.compare1(Data_Lazy.ord1Lazy)(Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd))(v)(v1);
            };
        };
    },
    Eq10: function () {
        return eq1NonEmptyList;
    }
};
var ordList = function (dictOrd) {
    return {
        compare: Data_Ord.compare1(ord1List)(dictOrd),
        Eq0: function () {
            return eqList(dictOrd.Eq0());
        }
    };
};
var ordNonEmptyList = function (dictOrd) {
    return Data_Lazy.ordLazy(Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd));
};
var cons = function (x) {
    return function (xs) {
        return List(Data_Lazy.defer(function (v) {
            return new Cons(x, xs);
        }));
    };
};
var foldableList = {
    foldr: function (op) {
        return function (z) {
            return function (xs) {
                var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(cons))(nil);
                return Data_Foldable.foldl(foldableList)(Data_Function.flip(op))(z)(rev(xs));
            };
        };
    },
    foldl: function (op) {
        var go = function ($copy_b) {
            return function ($copy_xs) {
                var $tco_var_b = $copy_b;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(b, xs) {
                    var v = step(xs);
                    if (v instanceof Nil) {
                        $tco_done = true;
                        return b;
                    };
                    if (v instanceof Cons) {
                        $tco_var_b = op(b)(v.value0);
                        $copy_xs = v.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy.Types (line 128, column 7 - line 130, column 40): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_b, $copy_xs);
                };
                return $tco_result;
            };
        };
        return go;
    },
    foldMap: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldl(foldableList)(function (b) {
                return function (a) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(b)(f(a));
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    }
};
var extendList = {
    extend: function (f) {
        return function (l) {
            var go = function (a) {
                return function (v) {
                    var acc$prime = cons(a)(v.acc);
                    return {
                        val: cons(f(acc$prime))(v.val),
                        acc: acc$prime
                    };
                };
            };
            var v = step(l);
            if (v instanceof Nil) {
                return nil;
            };
            if (v instanceof Cons) {
                return cons(f(l))((Data_Foldable.foldr(foldableList)(go)({
                    val: nil,
                    acc: nil
                })(v.value1)).val);
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 200, column 5 - line 203, column 55): " + [ v.constructor.name ]);
        };
    },
    Functor0: function () {
        return functorList;
    }
};
var extendNonEmptyList = {
    extend: function (f) {
        return function (v) {
            var go = function (a) {
                return function (v1) {
                    return {
                        val: cons(f(Data_Lazy.defer(function (v2) {
                            return new Data_NonEmpty.NonEmpty(a, v1.acc);
                        })))(v1.val),
                        acc: cons(a)(v1.acc)
                    };
                };
            };
            var v1 = Data_Lazy.force(v);
            return NonEmptyList(Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(f(v), (Data_Foldable.foldr(foldableList)(go)({
                    val: nil,
                    acc: nil
                })(v1.value1)).val);
            }));
        };
    },
    Functor0: function () {
        return functorNonEmptyList;
    }
};
var foldableNonEmptyList = {
    foldr: function (f) {
        return function (b) {
            return function (v) {
                return Data_Foldable.foldr(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
            };
        };
    },
    foldl: function (f) {
        return function (b) {
            return function (v) {
                return Data_Foldable.foldl(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
            };
        };
    },
    foldMap: function (dictMonoid) {
        return function (f) {
            return function (v) {
                return Data_Foldable.foldMap(Data_NonEmpty.foldableNonEmpty(foldableList))(dictMonoid)(f)(Data_Lazy.force(v));
            };
        };
    }
};
var showList = function (dictShow) {
    return {
        show: function (xs) {
            return "(fromFoldable [" + ((function () {
                var v = step(xs);
                if (v instanceof Nil) {
                    return "";
                };
                if (v instanceof Cons) {
                    return Data_Show.show(dictShow)(v.value0) + Data_Foldable.foldl(foldableList)(function (shown) {
                        return function (x$prime) {
                            return shown + ("," + Data_Show.show(dictShow)(x$prime));
                        };
                    })("")(v.value1);
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 67, column 13 - line 70, column 78): " + [ v.constructor.name ]);
            })() + "])");
        }
    };
};
var showNonEmptyList = function (dictShow) {
    return {
        show: function (v) {
            return "(NonEmptyList " + (Data_Show.show(Data_Lazy.showLazy(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow))))(v) + ")");
        }
    };
};
var showStep = function (dictShow) {
    return {
        show: function (v) {
            if (v instanceof Nil) {
                return "Nil";
            };
            if (v instanceof Cons) {
                return "(" + (Data_Show.show(dictShow)(v.value0) + (" : " + (Data_Show.show(showList(dictShow))(v.value1) + ")")));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 37, column 1 - line 39, column 62): " + [ v.constructor.name ]);
        }
    };
};
var foldableWithIndexList = {
    foldrWithIndex: function (f) {
        return function (b) {
            return function (xs) {
                var v = (function () {
                    var rev = Data_Foldable.foldl(foldableList)(function (v1) {
                        return function (a) {
                            return new Data_Tuple.Tuple(v1.value0 + 1 | 0, cons(a)(v1.value1));
                        };
                    });
                    return rev(new Data_Tuple.Tuple(0, nil))(xs);
                })();
                return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v1) {
                    return function (a) {
                        return new Data_Tuple.Tuple(v1.value0 - 1 | 0, f(v1.value0 - 1 | 0)(a)(v1.value1));
                    };
                })(new Data_Tuple.Tuple(v.value0, b))(v.value1));
            };
        };
    },
    foldlWithIndex: function (f) {
        return function (acc) {
            var $228 = Data_Foldable.foldl(foldableList)(function (v) {
                return function (a) {
                    return new Data_Tuple.Tuple(v.value0 + 1 | 0, f(v.value0)(v.value1)(a));
                };
            })(new Data_Tuple.Tuple(0, acc));
            return function ($229) {
                return Data_Tuple.snd($228($229));
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_FoldableWithIndex.foldlWithIndex(foldableWithIndexList)(function (i) {
                return function (acc) {
                    var $230 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
                    var $231 = f(i);
                    return function ($232) {
                        return $230($231($232));
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    },
    Foldable0: function () {
        return foldableList;
    }
};
var foldableWithIndexNonEmptyList = {
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return function (v) {
                return Data_FoldableWithIndex.foldMapWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(dictMonoid)((function () {
                    var $233 = Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1));
                    return function ($234) {
                        return f($233($234));
                    };
                })())(Data_Lazy.force(v));
            };
        };
    },
    foldlWithIndex: function (f) {
        return function (b) {
            return function (v) {
                return Data_FoldableWithIndex.foldlWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))((function () {
                    var $235 = Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1));
                    return function ($236) {
                        return f($235($236));
                    };
                })())(b)(Data_Lazy.force(v));
            };
        };
    },
    foldrWithIndex: function (f) {
        return function (b) {
            return function (v) {
                return Data_FoldableWithIndex.foldrWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))((function () {
                    var $237 = Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1));
                    return function ($238) {
                        return f($237($238));
                    };
                })())(b)(Data_Lazy.force(v));
            };
        };
    },
    Foldable0: function () {
        return foldableNonEmptyList;
    }
};
var functorWithIndexList = {
    mapWithIndex: function (f) {
        return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
            return function (x) {
                return function (acc) {
                    return cons(f(i)(x))(acc);
                };
            };
        })(nil);
    },
    Functor0: function () {
        return functorList;
    }
};
var functorWithIndexNonEmptyList = {
    mapWithIndex: function (f) {
        return function (v) {
            return NonEmptyList(Data_Lazy.defer(function (v1) {
                return Data_FunctorWithIndex.mapWithIndex(Data_NonEmpty.functorWithIndex(functorWithIndexList))((function () {
                    var $239 = Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1));
                    return function ($240) {
                        return f($239($240));
                    };
                })())(Data_Lazy.force(v));
            }));
        };
    },
    Functor0: function () {
        return functorNonEmptyList;
    }
};
var toList = function (v) {
    return Control_Lazy.defer(lazyList)(function (v1) {
        var v2 = Data_Lazy.force(v);
        return cons(v2.value0)(v2.value1);
    });
};
var semigroupNonEmptyList = {
    append: function (v) {
        return function (as$prime) {
            var v1 = Data_Lazy.force(v);
            return Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(v1.value0, Data_Semigroup.append(semigroupList)(v1.value1)(toList(as$prime)));
            });
        };
    }
};
var traversableList = {
    traverse: function (dictApplicative) {
        return function (f) {
            return Data_Foldable.foldr(foldableList)(function (a) {
                return function (b) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(a)))(b);
                };
            })(Control_Applicative.pure(dictApplicative)(nil));
        };
    },
    sequence: function (dictApplicative) {
        return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
    },
    Functor0: function () {
        return functorList;
    },
    Foldable1: function () {
        return foldableList;
    }
};
var traversableNonEmptyList = {
    traverse: function (dictApplicative) {
        return function (f) {
            return function (v) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                    return NonEmptyList(Data_Lazy.defer(function (v1) {
                        return xxs;
                    }));
                })(Data_Traversable.traverse(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(f)(Data_Lazy.force(v)));
            };
        };
    },
    sequence: function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                return NonEmptyList(Data_Lazy.defer(function (v1) {
                    return xxs;
                }));
            })(Data_Traversable.sequence(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(Data_Lazy.force(v)));
        };
    },
    Functor0: function () {
        return functorNonEmptyList;
    },
    Foldable1: function () {
        return foldableNonEmptyList;
    }
};
var traversableWithIndexList = {
    traverseWithIndex: function (dictApplicative) {
        return function (f) {
            return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
                return function (a) {
                    return function (b) {
                        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(i)(a)))(b);
                    };
                };
            })(Control_Applicative.pure(dictApplicative)(nil));
        };
    },
    FunctorWithIndex0: function () {
        return functorWithIndexList;
    },
    FoldableWithIndex1: function () {
        return foldableWithIndexList;
    },
    Traversable2: function () {
        return traversableList;
    }
};
var traversableWithIndexNonEmptyList = {
    traverseWithIndex: function (dictApplicative) {
        return function (f) {
            return function (v) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                    return NonEmptyList(Data_Lazy.defer(function (v1) {
                        return xxs;
                    }));
                })(Data_TraversableWithIndex.traverseWithIndex(Data_NonEmpty.traversableWithIndexNonEmpty(traversableWithIndexList))(dictApplicative)((function () {
                    var $241 = Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1));
                    return function ($242) {
                        return f($241($242));
                    };
                })())(Data_Lazy.force(v)));
            };
        };
    },
    FunctorWithIndex0: function () {
        return functorWithIndexNonEmptyList;
    },
    FoldableWithIndex1: function () {
        return foldableWithIndexNonEmptyList;
    },
    Traversable2: function () {
        return traversableNonEmptyList;
    }
};
var unfoldable1List = {
    unfoldr1: (function () {
        var go = function (f) {
            return function (b) {
                return Control_Lazy.defer(lazyList)(function (v) {
                    var v1 = f(b);
                    if (v1.value1 instanceof Data_Maybe.Just) {
                        return cons(v1.value0)(go(f)(v1.value1.value0));
                    };
                    if (v1.value1 instanceof Data_Maybe.Nothing) {
                        return cons(v1.value0)(nil);
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy.Types (line 152, column 28 - line 154, column 33): " + [ v1.constructor.name ]);
                });
            };
        };
        return go;
    })()
};
var unfoldableList = {
    unfoldr: (function () {
        var go = function (f) {
            return function (b) {
                return Control_Lazy.defer(lazyList)(function (v) {
                    var v1 = f(b);
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return nil;
                    };
                    if (v1 instanceof Data_Maybe.Just) {
                        return cons(v1.value0.value0)(go(f)(v1.value0.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy.Types (line 158, column 28 - line 160, column 39): " + [ v1.constructor.name ]);
                });
            };
        };
        return go;
    })(),
    Unfoldable10: function () {
        return unfoldable1List;
    }
};
var unfoldable1NonEmptyList = {
    unfoldr1: function (f) {
        return function (b) {
            return NonEmptyList(Data_Lazy.defer(function (v) {
                return Data_Unfoldable1.unfoldr1(Data_NonEmpty.unfoldable1NonEmpty(unfoldableList))(f)(b);
            }));
        };
    }
};
var comonadNonEmptyList = {
    extract: function (v) {
        return Data_NonEmpty.head(Data_Lazy.force(v));
    },
    Extend0: function () {
        return extendNonEmptyList;
    }
};
var monadList = {
    Applicative0: function () {
        return applicativeList;
    },
    Bind1: function () {
        return bindList;
    }
};
var bindList = {
    bind: function (xs) {
        return function (f) {
            var go = function (v) {
                if (v instanceof Nil) {
                    return Nil.value;
                };
                if (v instanceof Cons) {
                    return step(Data_Semigroup.append(semigroupList)(f(v.value0))(Control_Bind.bind(bindList)(v.value1)(f)));
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 181, column 5 - line 181, column 17): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    },
    Apply0: function () {
        return applyList;
    }
};
var applyList = {
    apply: Control_Monad.ap(monadList),
    Functor0: function () {
        return functorList;
    }
};
var applicativeList = {
    pure: function (a) {
        return cons(a)(nil);
    },
    Apply0: function () {
        return applyList;
    }
};
var applyNonEmptyList = {
    apply: function (v) {
        return function (v1) {
            var v2 = Data_Lazy.force(v1);
            var v3 = Data_Lazy.force(v);
            return Data_Lazy.defer(function (v4) {
                return new Data_NonEmpty.NonEmpty(v3.value0(v2.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v3.value1)(cons(v2.value0)(nil)))(Control_Apply.apply(applyList)(cons(v3.value0)(v3.value1))(v2.value1)));
            });
        };
    },
    Functor0: function () {
        return functorNonEmptyList;
    }
};
var bindNonEmptyList = {
    bind: function (v) {
        return function (f) {
            var v1 = Data_Lazy.force(v);
            var v2 = Data_Lazy.force(Data_Newtype.unwrap()(f(v1.value0)));
            return Data_Lazy.defer(function (v3) {
                return new Data_NonEmpty.NonEmpty(v2.value0, Data_Semigroup.append(semigroupList)(v2.value1)(Control_Bind.bind(bindList)(v1.value1)(function ($243) {
                    return toList(f($243));
                })));
            });
        };
    },
    Apply0: function () {
        return applyNonEmptyList;
    }
};
var altNonEmptyList = {
    alt: Data_Semigroup.append(semigroupNonEmptyList),
    Functor0: function () {
        return functorNonEmptyList;
    }
};
var altList = {
    alt: Data_Semigroup.append(semigroupList),
    Functor0: function () {
        return functorList;
    }
};
var plusList = {
    empty: nil,
    Alt0: function () {
        return altList;
    }
};
var alternativeList = {
    Applicative0: function () {
        return applicativeList;
    },
    Plus1: function () {
        return plusList;
    }
};
var monadPlusList = {
    Monad0: function () {
        return monadList;
    },
    Alternative1: function () {
        return alternativeList;
    }
};
var monadZeroList = {
    Monad0: function () {
        return monadList;
    },
    Alternative1: function () {
        return alternativeList;
    },
    MonadZeroIsDeprecated2: function () {
        return undefined;
    }
};
var applicativeNonEmptyList = {
    pure: function (a) {
        return Data_Lazy.defer(function (v) {
            return Data_NonEmpty.singleton(plusList)(a);
        });
    },
    Apply0: function () {
        return applyNonEmptyList;
    }
};
var monadNonEmptyList = {
    Applicative0: function () {
        return applicativeNonEmptyList;
    },
    Bind1: function () {
        return bindNonEmptyList;
    }
};
module.exports = {
    List: List,
    Nil: Nil,
    Cons: Cons,
    step: step,
    nil: nil,
    cons: cons,
    NonEmptyList: NonEmptyList,
    toList: toList,
    showStep: showStep,
    newtypeList: newtypeList,
    showList: showList,
    eqList: eqList,
    eq1List: eq1List,
    ordList: ordList,
    ord1List: ord1List,
    lazyList: lazyList,
    semigroupList: semigroupList,
    monoidList: monoidList,
    functorList: functorList,
    functorWithIndexList: functorWithIndexList,
    foldableList: foldableList,
    foldableWithIndexList: foldableWithIndexList,
    unfoldable1List: unfoldable1List,
    unfoldableList: unfoldableList,
    traversableList: traversableList,
    traversableWithIndexList: traversableWithIndexList,
    applyList: applyList,
    applicativeList: applicativeList,
    bindList: bindList,
    monadList: monadList,
    altList: altList,
    plusList: plusList,
    alternativeList: alternativeList,
    monadZeroList: monadZeroList,
    monadPlusList: monadPlusList,
    extendList: extendList,
    newtypeNonEmptyList: newtypeNonEmptyList,
    eqNonEmptyList: eqNonEmptyList,
    ordNonEmptyList: ordNonEmptyList,
    eq1NonEmptyList: eq1NonEmptyList,
    ord1NonEmptyList: ord1NonEmptyList,
    showNonEmptyList: showNonEmptyList,
    functorNonEmptyList: functorNonEmptyList,
    applyNonEmptyList: applyNonEmptyList,
    applicativeNonEmptyList: applicativeNonEmptyList,
    bindNonEmptyList: bindNonEmptyList,
    monadNonEmptyList: monadNonEmptyList,
    altNonEmptyList: altNonEmptyList,
    extendNonEmptyList: extendNonEmptyList,
    comonadNonEmptyList: comonadNonEmptyList,
    semigroupNonEmptyList: semigroupNonEmptyList,
    foldableNonEmptyList: foldableNonEmptyList,
    traversableNonEmptyList: traversableNonEmptyList,
    unfoldable1NonEmptyList: unfoldable1NonEmptyList,
    functorWithIndexNonEmptyList: functorWithIndexNonEmptyList,
    foldableWithIndexNonEmptyList: foldableWithIndexNonEmptyList,
    traversableWithIndexNonEmptyList: traversableWithIndexNonEmptyList
};
