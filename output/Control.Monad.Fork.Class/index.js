// Generated by purs version 0.14.4
"use strict";
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Completed = (function () {
    function Completed(value0) {
        this.value0 = value0;
    };
    Completed.create = function (value0) {
        return new Completed(value0);
    };
    return Completed;
})();
var Failed = (function () {
    function Failed(value0) {
        this.value0 = value0;
    };
    Failed.create = function (value0) {
        return new Failed(value0);
    };
    return Failed;
})();
var Killed = (function () {
    function Killed(value0) {
        this.value0 = value0;
    };
    Killed.create = function (value0) {
        return new Killed(value0);
    };
    return Killed;
})();
var uninterruptible = function (dict) {
    return dict.uninterruptible;
};
var suspend = function (dict) {
    return dict.suspend;
};
var never = function (dict) {
    return dict.never;
};
var monadForkAff = {
    suspend: Effect_Aff.suspendAff,
    fork: Effect_Aff.forkAff,
    join: Effect_Aff.joinFiber,
    Monad0: function () {
        return Effect_Aff.monadAff;
    },
    Functor1: function () {
        return Effect_Aff.functorFiber;
    }
};
var monadKillAff = {
    kill: Effect_Aff.killFiber,
    MonadFork0: function () {
        return monadForkAff;
    },
    MonadThrow1: function () {
        return Effect_Aff.monadThrowAff;
    }
};
var monadBracketAff = {
    bracket: function (acquire) {
        return function (release) {
            return function (run) {
                return Effect_Aff.generalBracket(acquire)({
                    completed: function ($18) {
                        return release(Completed.create($18));
                    },
                    failed: function ($19) {
                        return release(Failed.create($19));
                    },
                    killed: function ($20) {
                        return release(Killed.create($20));
                    }
                })(run);
            };
        };
    },
    uninterruptible: Effect_Aff.invincible,
    never: Effect_Aff.never,
    MonadKill0: function () {
        return monadKillAff;
    },
    MonadError1: function () {
        return Effect_Aff.monadErrorAff;
    }
};
var kill = function (dict) {
    return dict.kill;
};
var join = function (dict) {
    return dict.join;
};
var fork = function (dict) {
    return dict.fork;
};
var monadForkReaderT = function (dictMonadFork) {
    return {
        suspend: function (v) {
            var $21 = suspend(dictMonadFork);
            return function ($22) {
                return $21(v($22));
            };
        },
        fork: function (v) {
            var $23 = fork(dictMonadFork);
            return function ($24) {
                return $23(v($24));
            };
        },
        join: (function () {
            var $25 = Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)(dictMonadFork.Monad0());
            var $26 = join(dictMonadFork);
            return function ($27) {
                return $25($26($27));
            };
        })(),
        Monad0: function () {
            return Control_Monad_Reader_Trans.monadReaderT(dictMonadFork.Monad0());
        },
        Functor1: dictMonadFork.Functor1
    };
};
var monadKillReaderT = function (dictMonadKill) {
    return {
        kill: function (e) {
            var $28 = Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)((dictMonadKill.MonadThrow1()).Monad0());
            var $29 = kill(dictMonadKill)(e);
            return function ($30) {
                return $28($29($30));
            };
        },
        MonadFork0: function () {
            return monadForkReaderT(dictMonadKill.MonadFork0());
        },
        MonadThrow1: function () {
            return Control_Monad_Reader_Trans.monadThrowReaderT(dictMonadKill.MonadThrow1());
        }
    };
};
var bracket = function (dict) {
    return dict.bracket;
};
var monadBracketReaderT = function (dictMonadBracket) {
    return {
        bracket: function (v) {
            return function (release) {
                return function (run) {
                    return function (r) {
                        return bracket(dictMonadBracket)(v(r))(function (c) {
                            return function (a) {
                                return Control_Monad_Reader_Trans.runReaderT(release(c)(a))(r);
                            };
                        })(function (a) {
                            return Control_Monad_Reader_Trans.runReaderT(run(a))(r);
                        });
                    };
                };
            };
        },
        uninterruptible: function (k) {
            return function (r) {
                return uninterruptible(dictMonadBracket)(Control_Monad_Reader_Trans.runReaderT(k)(r));
            };
        },
        never: Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)(((dictMonadBracket.MonadError1()).MonadThrow0()).Monad0())(never(dictMonadBracket)),
        MonadKill0: function () {
            return monadKillReaderT(dictMonadBracket.MonadKill0());
        },
        MonadError1: function () {
            return Control_Monad_Reader_Trans.monadErrorReaderT(dictMonadBracket.MonadError1());
        }
    };
};
module.exports = {
    bracket: bracket,
    fork: fork,
    join: join,
    kill: kill,
    never: never,
    suspend: suspend,
    uninterruptible: uninterruptible,
    Completed: Completed,
    Failed: Failed,
    Killed: Killed,
    monadForkAff: monadForkAff,
    monadForkReaderT: monadForkReaderT,
    monadKillAff: monadKillAff,
    monadKillReaderT: monadKillReaderT,
    monadBracketAff: monadBracketAff,
    monadBracketReaderT: monadBracketReaderT
};
