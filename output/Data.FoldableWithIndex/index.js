// Generated by purs version 0.14.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor_Coproduct = require("../Data.Functor.Coproduct/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var foldrWithIndex = function (dict) {
    return dict.foldrWithIndex;
};
var traverseWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                var $163 = Control_Apply.applySecond(dictApplicative.Apply0());
                var $164 = f(i);
                return function ($165) {
                    return $163($164($165));
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var forWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return Data_Function.flip(traverseWithIndex_(dictApplicative)(dictFoldableWithIndex));
    };
};
var foldrDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldrWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldlWithIndex = function (dict) {
    return dict.foldlWithIndex;
};
var foldlDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldlWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldableWithIndexTuple = {
    foldrWithIndex: function (f) {
        return function (z) {
            return function (v) {
                return f(Data_Unit.unit)(v.value1)(z);
            };
        };
    },
    foldlWithIndex: function (f) {
        return function (z) {
            return function (v) {
                return f(Data_Unit.unit)(z)(v.value1);
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return function (v) {
                return f(Data_Unit.unit)(v.value1);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableTuple;
    }
};
var foldableWithIndexMultiplicative = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableMultiplicative)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableMultiplicative;
    }
};
var foldableWithIndexMaybe = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableMaybe;
    }
};
var foldableWithIndexLast = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableLast)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableLast)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableLast)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableLast;
    }
};
var foldableWithIndexIdentity = {
    foldrWithIndex: function (f) {
        return function (z) {
            return function (v) {
                return f(Data_Unit.unit)(v)(z);
            };
        };
    },
    foldlWithIndex: function (f) {
        return function (z) {
            return function (v) {
                return f(Data_Unit.unit)(z)(v);
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return function (v) {
                return f(Data_Unit.unit)(v);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableIdentity;
    }
};
var foldableWithIndexFirst = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableFirst)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableFirst;
    }
};
var foldableWithIndexEither = {
    foldrWithIndex: function (v) {
        return function (z) {
            return function (v1) {
                if (v1 instanceof Data_Either.Left) {
                    return z;
                };
                if (v1 instanceof Data_Either.Right) {
                    return v(Data_Unit.unit)(v1.value0)(z);
                };
                throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
            };
        };
    },
    foldlWithIndex: function (v) {
        return function (z) {
            return function (v1) {
                if (v1 instanceof Data_Either.Left) {
                    return z;
                };
                if (v1 instanceof Data_Either.Right) {
                    return v(Data_Unit.unit)(z)(v1.value0);
                };
                throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return function (v) {
                if (v instanceof Data_Either.Left) {
                    return Data_Monoid.mempty(dictMonoid);
                };
                if (v instanceof Data_Either.Right) {
                    return f(Data_Unit.unit)(v.value0);
                };
                throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ f.constructor.name, v.constructor.name ]);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableEither;
    }
};
var foldableWithIndexDual = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableDual)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableDual)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableDual)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableDual;
    }
};
var foldableWithIndexDisj = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableDisj)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableDisj;
    }
};
var foldableWithIndexConst = {
    foldrWithIndex: function (v) {
        return function (z) {
            return function (v1) {
                return z;
            };
        };
    },
    foldlWithIndex: function (v) {
        return function (z) {
            return function (v1) {
                return z;
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (v) {
            return function (v1) {
                return Data_Monoid.mempty(dictMonoid);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableConst;
    }
};
var foldableWithIndexConj = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableConj)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableConj)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableConj)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableConj;
    }
};
var foldableWithIndexAdditive = {
    foldrWithIndex: function (f) {
        return Data_Foldable.foldr(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
    },
    foldlWithIndex: function (f) {
        return Data_Foldable.foldl(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
    },
    foldMapWithIndex: function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldMap(Data_Foldable.foldableAdditive)(dictMonoid)(f(Data_Unit.unit));
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableAdditive;
    }
};
var foldWithIndexM = function (dictFoldableWithIndex) {
    return function (dictMonad) {
        return function (f) {
            return function (a0) {
                return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                    return function (ma) {
                        return function (b) {
                            return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f(i))(b));
                        };
                    };
                })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
            };
        };
    };
};
var foldMapWithIndexDefaultR = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                return function (x) {
                    return function (acc) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(f(i)(x))(acc);
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldableWithIndexArray = {
    foldrWithIndex: function (f) {
        return function (z) {
            var $166 = Data_Foldable.foldr(Data_Foldable.foldableArray)(function (v) {
                return function (y) {
                    return f(v.value0)(v.value1)(y);
                };
            })(z);
            var $167 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Data_Tuple.Tuple.create);
            return function ($168) {
                return $166($167($168));
            };
        };
    },
    foldlWithIndex: function (f) {
        return function (z) {
            var $169 = Data_Foldable.foldl(Data_Foldable.foldableArray)(function (y) {
                return function (v) {
                    return f(v.value0)(y)(v.value1);
                };
            })(z);
            var $170 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Data_Tuple.Tuple.create);
            return function ($171) {
                return $169($170($171));
            };
        };
    },
    foldMapWithIndex: function (dictMonoid) {
        return foldMapWithIndexDefaultR(foldableWithIndexArray)(dictMonoid);
    },
    Foldable0: function () {
        return Data_Foldable.foldableArray;
    }
};
var foldMapWithIndexDefaultL = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                return function (acc) {
                    return function (x) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)(x));
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldMapWithIndex = function (dict) {
    return dict.foldMapWithIndex;
};
var foldableWithIndexApp = function (dictFoldableWithIndex) {
    return {
        foldrWithIndex: function (f) {
            return function (z) {
                return function (v) {
                    return foldrWithIndex(dictFoldableWithIndex)(f)(z)(v);
                };
            };
        },
        foldlWithIndex: function (f) {
            return function (z) {
                return function (v) {
                    return foldlWithIndex(dictFoldableWithIndex)(f)(z)(v);
                };
            };
        },
        foldMapWithIndex: function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(f)(v);
                };
            };
        },
        Foldable0: function () {
            return Data_Foldable.foldableApp(dictFoldableWithIndex.Foldable0());
        }
    };
};
var foldableWithIndexCompose = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return {
            foldrWithIndex: function (f) {
                return function (i) {
                    return function (v) {
                        return foldrWithIndex(dictFoldableWithIndex)(function (a) {
                            return Data_Function.flip(foldrWithIndex(dictFoldableWithIndex1)(Data_Tuple.curry(f)(a)));
                        })(i)(v);
                    };
                };
            },
            foldlWithIndex: function (f) {
                return function (i) {
                    return function (v) {
                        return foldlWithIndex(dictFoldableWithIndex)((function () {
                            var $172 = foldlWithIndex(dictFoldableWithIndex1);
                            var $173 = Data_Tuple.curry(f);
                            return function ($174) {
                                return $172($173($174));
                            };
                        })())(i)(v);
                    };
                };
            },
            foldMapWithIndex: function (dictMonoid) {
                return function (f) {
                    return function (v) {
                        return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)((function () {
                            var $175 = foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid);
                            var $176 = Data_Tuple.curry(f);
                            return function ($177) {
                                return $175($176($177));
                            };
                        })())(v);
                    };
                };
            },
            Foldable0: function () {
                return Data_Foldable.foldableCompose(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
            }
        };
    };
};
var foldableWithIndexCoproduct = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return {
            foldrWithIndex: function (f) {
                return function (z) {
                    return Data_Functor_Coproduct.coproduct(foldrWithIndex(dictFoldableWithIndex)(function ($178) {
                        return f(Data_Either.Left.create($178));
                    })(z))(foldrWithIndex(dictFoldableWithIndex1)(function ($179) {
                        return f(Data_Either.Right.create($179));
                    })(z));
                };
            },
            foldlWithIndex: function (f) {
                return function (z) {
                    return Data_Functor_Coproduct.coproduct(foldlWithIndex(dictFoldableWithIndex)(function ($180) {
                        return f(Data_Either.Left.create($180));
                    })(z))(foldlWithIndex(dictFoldableWithIndex1)(function ($181) {
                        return f(Data_Either.Right.create($181));
                    })(z));
                };
            },
            foldMapWithIndex: function (dictMonoid) {
                return function (f) {
                    return Data_Functor_Coproduct.coproduct(foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(function ($182) {
                        return f(Data_Either.Left.create($182));
                    }))(foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid)(function ($183) {
                        return f(Data_Either.Right.create($183));
                    }));
                };
            },
            Foldable0: function () {
                return Data_Foldable.foldableCoproduct(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
            }
        };
    };
};
var foldableWithIndexProduct = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return {
            foldrWithIndex: function (f) {
                return function (z) {
                    return function (v) {
                        return foldrWithIndex(dictFoldableWithIndex)(function ($184) {
                            return f(Data_Either.Left.create($184));
                        })(foldrWithIndex(dictFoldableWithIndex1)(function ($185) {
                            return f(Data_Either.Right.create($185));
                        })(z)(v.value1))(v.value0);
                    };
                };
            },
            foldlWithIndex: function (f) {
                return function (z) {
                    return function (v) {
                        return foldlWithIndex(dictFoldableWithIndex1)(function ($186) {
                            return f(Data_Either.Right.create($186));
                        })(foldlWithIndex(dictFoldableWithIndex)(function ($187) {
                            return f(Data_Either.Left.create($187));
                        })(z)(v.value0))(v.value1);
                    };
                };
            },
            foldMapWithIndex: function (dictMonoid) {
                return function (f) {
                    return function (v) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(function ($188) {
                            return f(Data_Either.Left.create($188));
                        })(v.value0))(foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid)(function ($189) {
                            return f(Data_Either.Right.create($189));
                        })(v.value1));
                    };
                };
            },
            Foldable0: function () {
                return Data_Foldable.foldableProduct(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
            }
        };
    };
};
var foldlWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function (i) {
                    var $190 = Data_Function.flip(c(i));
                    return function ($191) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($190($191)));
                    };
                })(xs)))(u);
            };
        };
    };
};
var foldrWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function (i) {
                    var $192 = c(i);
                    return function ($193) {
                        return Data_Monoid_Endo.Endo($192($193));
                    };
                })(xs))(u);
            };
        };
    };
};
var surroundMapWithIndex = function (dictFoldableWithIndex) {
    return function (dictSemigroup) {
        return function (d) {
            return function (t) {
                return function (f) {
                    var joined = function (i) {
                        return function (a) {
                            return function (m) {
                                return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(i)(a))(m));
                            };
                        };
                    };
                    return Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
                };
            };
        };
    };
};
var foldMapDefault = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(Data_Function["const"](f));
        };
    };
};
var findWithIndex = function (dictFoldableWithIndex) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                return function (v2) {
                    if (v1 instanceof Data_Maybe.Nothing && p(v)(v2)) {
                        return new Data_Maybe.Just({
                            index: v,
                            value: v2
                        });
                    };
                    return v1;
                };
            };
        };
        return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
    };
};
var findMapWithIndex = function (dictFoldableWithIndex) {
    return function (f) {
        var go = function (v) {
            return function (v1) {
                return function (v2) {
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return f(v)(v2);
                    };
                    return v1;
                };
            };
        };
        return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
    };
};
var anyWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            var $194 = Data_Newtype.unwrap();
            var $195 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra))(function (i) {
                var $197 = t(i);
                return function ($198) {
                    return Data_Monoid_Disj.Disj($197($198));
                };
            });
            return function ($196) {
                return $194($195($196));
            };
        };
    };
};
var allWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            var $199 = Data_Newtype.unwrap();
            var $200 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra))(function (i) {
                var $202 = t(i);
                return function ($203) {
                    return Data_Monoid_Conj.Conj($202($203));
                };
            });
            return function ($201) {
                return $199($200($201));
            };
        };
    };
};
module.exports = {
    foldrWithIndex: foldrWithIndex,
    foldlWithIndex: foldlWithIndex,
    foldMapWithIndex: foldMapWithIndex,
    foldrWithIndexDefault: foldrWithIndexDefault,
    foldlWithIndexDefault: foldlWithIndexDefault,
    foldMapWithIndexDefaultR: foldMapWithIndexDefaultR,
    foldMapWithIndexDefaultL: foldMapWithIndexDefaultL,
    foldWithIndexM: foldWithIndexM,
    traverseWithIndex_: traverseWithIndex_,
    forWithIndex_: forWithIndex_,
    surroundMapWithIndex: surroundMapWithIndex,
    allWithIndex: allWithIndex,
    anyWithIndex: anyWithIndex,
    findWithIndex: findWithIndex,
    findMapWithIndex: findMapWithIndex,
    foldrDefault: foldrDefault,
    foldlDefault: foldlDefault,
    foldMapDefault: foldMapDefault,
    foldableWithIndexArray: foldableWithIndexArray,
    foldableWithIndexMaybe: foldableWithIndexMaybe,
    foldableWithIndexFirst: foldableWithIndexFirst,
    foldableWithIndexLast: foldableWithIndexLast,
    foldableWithIndexAdditive: foldableWithIndexAdditive,
    foldableWithIndexDual: foldableWithIndexDual,
    foldableWithIndexDisj: foldableWithIndexDisj,
    foldableWithIndexConj: foldableWithIndexConj,
    foldableWithIndexMultiplicative: foldableWithIndexMultiplicative,
    foldableWithIndexEither: foldableWithIndexEither,
    foldableWithIndexTuple: foldableWithIndexTuple,
    foldableWithIndexIdentity: foldableWithIndexIdentity,
    foldableWithIndexConst: foldableWithIndexConst,
    foldableWithIndexProduct: foldableWithIndexProduct,
    foldableWithIndexCoproduct: foldableWithIndexCoproduct,
    foldableWithIndexCompose: foldableWithIndexCompose,
    foldableWithIndexApp: foldableWithIndexApp
};