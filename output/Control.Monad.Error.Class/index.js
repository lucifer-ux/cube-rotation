// Generated by purs version 0.14.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var throwError = function (dict) {
    return dict.throwError;
};
var monadThrowMaybe = {
    throwError: Data_Function["const"](Data_Maybe.Nothing.value),
    Monad0: function () {
        return Data_Maybe.monadMaybe;
    }
};
var monadThrowEither = {
    throwError: Data_Either.Left.create,
    Monad0: function () {
        return Data_Either.monadEither;
    }
};
var monadThrowEffect = {
    throwError: Effect_Exception.throwException,
    Monad0: function () {
        return Effect.monadEffect;
    }
};
var monadErrorMaybe = {
    catchError: function (v) {
        return function (v1) {
            if (v instanceof Data_Maybe.Nothing) {
                return v1(Data_Unit.unit);
            };
            if (v instanceof Data_Maybe.Just) {
                return new Data_Maybe.Just(v.value0);
            };
            throw new Error("Failed pattern match at Control.Monad.Error.Class (line 79, column 1 - line 81, column 33): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    MonadThrow0: function () {
        return monadThrowMaybe;
    }
};
var monadErrorEither = {
    catchError: function (v) {
        return function (v1) {
            if (v instanceof Data_Either.Left) {
                return v1(v.value0);
            };
            if (v instanceof Data_Either.Right) {
                return new Data_Either.Right(v.value0);
            };
            throw new Error("Failed pattern match at Control.Monad.Error.Class (line 72, column 1 - line 74, column 35): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    MonadThrow0: function () {
        return monadThrowEither;
    }
};
var monadErrorEffect = {
    catchError: Data_Function.flip(Effect_Exception.catchException),
    MonadThrow0: function () {
        return monadThrowEffect;
    }
};
var catchError = function (dict) {
    return dict.catchError;
};
var catchJust = function (dictMonadError) {
    return function (p) {
        return function (act) {
            return function (handler) {
                var handle = function (e) {
                    var v = p(e);
                    if (v instanceof Data_Maybe.Nothing) {
                        return throwError(dictMonadError.MonadThrow0())(e);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return handler(v.value0);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Error.Class (line 57, column 5 - line 59, column 26): " + [ v.constructor.name ]);
                };
                return catchError(dictMonadError)(act)(handle);
            };
        };
    };
};
var $$try = function (dictMonadError) {
    return function (a) {
        return catchError(dictMonadError)(Data_Functor.map(((((dictMonadError.MonadThrow0()).Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Right.create)(a))((function () {
            var $19 = Control_Applicative.pure(((dictMonadError.MonadThrow0()).Monad0()).Applicative0());
            return function ($20) {
                return $19(Data_Either.Left.create($20));
            };
        })());
    };
};
var withResource = function (dictMonadError) {
    return function (acquire) {
        return function (release) {
            return function (kleisli) {
                return Control_Bind.bind(((dictMonadError.MonadThrow0()).Monad0()).Bind1())(acquire)(function (resource) {
                    return Control_Bind.bind(((dictMonadError.MonadThrow0()).Monad0()).Bind1())($$try(dictMonadError)(kleisli(resource)))(function (result) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(((dictMonadError.MonadThrow0()).Monad0()).Bind1())(release(resource))(function () {
                            return Data_Either.either(throwError(dictMonadError.MonadThrow0()))(Control_Applicative.pure(((dictMonadError.MonadThrow0()).Monad0()).Applicative0()))(result);
                        });
                    });
                });
            };
        };
    };
};
module.exports = {
    catchError: catchError,
    throwError: throwError,
    catchJust: catchJust,
    "try": $$try,
    withResource: withResource,
    monadThrowEither: monadThrowEither,
    monadErrorEither: monadErrorEither,
    monadThrowMaybe: monadThrowMaybe,
    monadErrorMaybe: monadErrorMaybe,
    monadThrowEffect: monadThrowEffect,
    monadErrorEffect: monadErrorEffect
};