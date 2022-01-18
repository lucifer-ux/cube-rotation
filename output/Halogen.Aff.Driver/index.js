// Generated by purs version 0.14.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad_Fork_Class = require("../Control.Monad.Fork.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Parallel = require("../Control.Parallel/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var Halogen = require("../Halogen/index.js");
var Halogen_Aff_Driver_Eval = require("../Halogen.Aff.Driver.Eval/index.js");
var Halogen_Aff_Driver_State = require("../Halogen.Aff.Driver.State/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_Data_Slot = require("../Halogen.Data.Slot/index.js");
var Halogen_Query_HalogenQ = require("../Halogen.Query.HalogenQ/index.js");
var Halogen_Query_Input = require("../Halogen.Query.Input/index.js");
var Halogen_Subscription = require("../Halogen.Subscription/index.js");
var newLifecycleHandlers = Effect_Ref["new"]({
    initializers: Data_List_Types.Nil.value,
    finalizers: Data_List_Types.Nil.value
});
var handlePending = function (ref) {
    return function __do() {
        var queue = Effect_Ref.read(ref)();
        Effect_Ref.write(Data_Maybe.Nothing.value)(ref)();
        return Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(queue)((function () {
            var $28 = Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff));
            return function ($29) {
                return Halogen_Aff_Driver_Eval.handleAff($28(Data_List.reverse($29)));
            };
        })())();
    };
};
var cleanupSubscriptionsAndForks = function (v) {
    return function __do() {
        Control_Bind.bindFlipped(Effect.bindEffect)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Map_Internal.foldableMap)(Halogen_Subscription.unsubscribe)))(Effect_Ref.read(v.subscriptions))();
        Effect_Ref.write(Data_Maybe.Nothing.value)(v.subscriptions)();
        Control_Bind.bindFlipped(Effect.bindEffect)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Map_Internal.foldableMap)((function () {
            var $30 = Effect_Aff.killFiber(Effect_Exception.error("finalized"));
            return function ($31) {
                return Halogen_Aff_Driver_Eval.handleAff($30($31));
            };
        })()))(Effect_Ref.read(v.forks))();
        return Effect_Ref.write(Data_Map_Internal.empty)(v.forks)();
    };
};
var runUI = function (renderSpec) {
    return function (component) {
        return function (i) {
            var squashChildInitializers = function (lchs) {
                return function (preInits) {
                    return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                        var parentInitializer = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Initialize(Data_Unit.unit)));
                        return Effect_Ref.modify_(function (handlers) {
                            return {
                                initializers: new Data_List_Types.Cons(Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Control_Parallel.parSequence_(Effect_Aff.parallelAff)(Data_List_Types.foldableList)(Data_List.reverse(handlers.initializers)))(function () {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(parentInitializer)(function () {
                                        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(function __do() {
                                            handlePending(st.pendingQueries)();
                                            return handlePending(st.pendingOuts)();
                                        });
                                    });
                                }), preInits),
                                finalizers: handlers.finalizers
                            };
                        })(lchs);
                    });
                };
            };
            var runComponent = function (lchs) {
                return function (handler) {
                    return function (j) {
                        return Halogen_Component.unComponent(function (c) {
                            return function __do() {
                                var lchs$prime = newLifecycleHandlers();
                                var $$var = Halogen_Aff_Driver_State.initDriverState(c)(j)(handler)(lchs$prime)();
                                var pre = Effect_Ref.read(lchs)();
                                Effect_Ref.write({
                                    initializers: Data_List_Types.Nil.value,
                                    finalizers: pre.finalizers
                                })(lchs)();
                                Control_Bind.bindFlipped(Effect.bindEffect)(Halogen_Aff_Driver_State.unDriverStateX((function () {
                                    var $32 = render(lchs);
                                    return function ($33) {
                                        return $32((function (v) {
                                            return v.selfRef;
                                        })($33));
                                    };
                                })()))(Effect_Ref.read($$var))();
                                Control_Bind.bindFlipped(Effect.bindEffect)(squashChildInitializers(lchs)(pre.initializers))(Effect_Ref.read($$var))();
                                return $$var;
                            };
                        });
                    };
                };
            };
            var renderChild = function (lchs) {
                return function (handler) {
                    return function (childrenInRef) {
                        return function (childrenOutRef) {
                            return Halogen_Component.unComponentSlot(function (slot) {
                                return function __do() {
                                    var childrenIn = Data_Functor.map(Effect.functorEffect)(slot.pop)(Effect_Ref.read(childrenInRef))();
                                    var $$var = (function () {
                                        if (childrenIn instanceof Data_Maybe.Just) {
                                            Effect_Ref.write(childrenIn.value0.value1)(childrenInRef)();
                                            var dsx = Effect_Ref.read(childrenIn.value0.value0)();
                                            Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                                                return function __do() {
                                                    Data_Function.flip(Effect_Ref.write)(st.handlerRef)((function () {
                                                        var $34 = Data_Maybe.maybe(Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit))(handler);
                                                        return function ($35) {
                                                            return $34(slot.output($35));
                                                        };
                                                    })())();
                                                    return Halogen_Aff_Driver_Eval.handleAff(Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Receive(slot.input, Data_Unit.unit))))();
                                                };
                                            })(dsx)();
                                            return childrenIn.value0.value0;
                                        };
                                        if (childrenIn instanceof Data_Maybe.Nothing) {
                                            return runComponent(lchs)((function () {
                                                var $36 = Data_Maybe.maybe(Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit))(handler);
                                                return function ($37) {
                                                    return $36(slot.output($37));
                                                };
                                            })())(slot.input)(slot.component)();
                                        };
                                        throw new Error("Failed pattern match at Halogen.Aff.Driver (line 211, column 14 - line 220, column 98): " + [ childrenIn.constructor.name ]);
                                    })();
                                    var isDuplicate = Data_Functor.map(Effect.functorEffect)(function ($38) {
                                        return Data_Maybe.isJust(slot.get($38));
                                    })(Effect_Ref.read(childrenOutRef))();
                                    Control_Applicative.when(Effect.applicativeEffect)(isDuplicate)(Effect_Console.warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                                    Effect_Ref.modify_(slot.set($$var))(childrenOutRef)();
                                    return Control_Bind.bind(Effect.bindEffect)(Effect_Ref.read($$var))(Halogen_Aff_Driver_State.renderStateX(Effect.functorEffect)(function (v) {
                                        if (v instanceof Data_Maybe.Nothing) {
                                            return Effect_Exception["throw"]("Halogen internal error: child was not initialized in renderChild");
                                        };
                                        if (v instanceof Data_Maybe.Just) {
                                            return Control_Applicative.pure(Effect.applicativeEffect)(renderSpec.renderChild(v.value0));
                                        };
                                        throw new Error("Failed pattern match at Halogen.Aff.Driver (line 225, column 37 - line 227, column 50): " + [ v.constructor.name ]);
                                    }))();
                                };
                            });
                        };
                    };
                };
            };
            var render = function (lchs) {
                return function ($$var) {
                    return function __do() {
                        var v = Effect_Ref.read($$var)();
                        var shouldProcessHandlers = Data_Functor.map(Effect.functorEffect)(Data_Maybe.isNothing)(Effect_Ref.read(v.pendingHandlers))();
                        Control_Applicative.when(Effect.applicativeEffect)(shouldProcessHandlers)(Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(v.pendingHandlers))();
                        Effect_Ref.write(Halogen_Data_Slot.empty)(v.childrenOut)();
                        Effect_Ref.write(v.children)(v.childrenIn)();
                        var selfRef = Control_Category.identity(Control_Category.categoryFn)(v.selfRef);
                        var pendingQueries = Control_Category.identity(Control_Category.categoryFn)(v.pendingQueries);
                        var pendingHandlers = Control_Category.identity(Control_Category.categoryFn)(v.pendingHandlers);
                        var handler = (function () {
                            var $39 = Halogen_Aff_Driver_Eval.queueOrRun(pendingHandlers);
                            var $40 = Data_Functor["void"](Effect_Aff.functorAff);
                            var $41 = Halogen_Aff_Driver_Eval.evalF(render)(selfRef);
                            return function ($42) {
                                return $39($40($41($42)));
                            };
                        })();
                        var childHandler = (function () {
                            var $43 = Halogen_Aff_Driver_Eval.queueOrRun(pendingQueries);
                            return function ($44) {
                                return $43(handler(Halogen_Query_Input.Action.create($44)));
                            };
                        })();
                        var rendering = renderSpec.render(function ($45) {
                            return Halogen_Aff_Driver_Eval.handleAff(handler($45));
                        })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
                        var children = Effect_Ref.read(v.childrenOut)();
                        var childrenIn = Effect_Ref.read(v.childrenIn)();
                        Halogen_Data_Slot.foreachSlot(Effect.applicativeEffect)(childrenIn)(function (v1) {
                            return function __do() {
                                var childDS = Effect_Ref.read(v1)();
                                Halogen_Aff_Driver_State.renderStateX_(Effect.applicativeEffect)(renderSpec.removeChild)(childDS)();
                                return finalize(lchs)(childDS)();
                            };
                        })();
                        Data_Function.flip(Effect_Ref.modify_)(v.selfRef)(Halogen_Aff_Driver_State.mapDriverState(function (ds$prime) {
                            return {
                                component: ds$prime.component,
                                state: ds$prime.state,
                                refs: ds$prime.refs,
                                children: children,
                                childrenIn: ds$prime.childrenIn,
                                childrenOut: ds$prime.childrenOut,
                                selfRef: ds$prime.selfRef,
                                handlerRef: ds$prime.handlerRef,
                                pendingQueries: ds$prime.pendingQueries,
                                pendingOuts: ds$prime.pendingOuts,
                                pendingHandlers: ds$prime.pendingHandlers,
                                rendering: new Data_Maybe.Just(rendering),
                                fresh: ds$prime.fresh,
                                subscriptions: ds$prime.subscriptions,
                                forks: ds$prime.forks,
                                lifecycleHandlers: ds$prime.lifecycleHandlers
                            };
                        }))();
                        return Control_Applicative.when(Effect.applicativeEffect)(shouldProcessHandlers)(Data_Function.flip(Control_Monad_Rec_Class.tailRecM(Control_Monad_Rec_Class.monadRecEffect))(Data_Unit.unit)(function (v1) {
                            return function __do() {
                                var handlers = Effect_Ref.read(pendingHandlers)();
                                Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(pendingHandlers)();
                                Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)((function () {
                                    var $46 = Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff));
                                    return function ($47) {
                                        return Halogen_Aff_Driver_Eval.handleAff($46(Data_List.reverse($47)));
                                    };
                                })())(handlers)();
                                var mmore = Effect_Ref.read(pendingHandlers)();
                                var $21 = Data_Maybe.maybe(false)(Data_List["null"])(mmore);
                                if ($21) {
                                    return Data_Functor.voidLeft(Effect.functorEffect)(Effect_Ref.write(Data_Maybe.Nothing.value)(pendingHandlers))(new Control_Monad_Rec_Class.Done(Data_Unit.unit))();
                                };
                                return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                            };
                        }))();
                    };
                };
            };
            var finalize = function (lchs) {
                return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                    return function __do() {
                        cleanupSubscriptionsAndForks(st)();
                        var f = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Finalize(Data_Unit.unit)));
                        Effect_Ref.modify_(function (handlers) {
                            return {
                                initializers: handlers.initializers,
                                finalizers: new Data_List_Types.Cons(f, handlers.finalizers)
                            };
                        })(lchs)();
                        return Halogen_Data_Slot.foreachSlot(Effect.applicativeEffect)(st.children)(function (v) {
                            return function __do() {
                                var dsx = Effect_Ref.read(v)();
                                return finalize(lchs)(dsx)();
                            };
                        })();
                    };
                });
            };
            var evalDriver = function (disposed) {
                return function (ref) {
                    return function (q) {
                        return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(disposed)))(function (v) {
                            if (v) {
                                return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Maybe.Nothing.value);
                            };
                            return Halogen_Aff_Driver_Eval.evalQ(render)(ref)(q);
                        });
                    };
                };
            };
            var dispose = function (disposed) {
                return function (lchs) {
                    return function (dsx) {
                        return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                            var v = Effect_Ref.read(disposed)();
                            if (v) {
                                return Data_Unit.unit;
                            };
                            Effect_Ref.write(true)(disposed)();
                            finalize(lchs)(dsx)();
                            return Halogen_Aff_Driver_State.unDriverStateX(function (v1) {
                                return function __do() {
                                    var v2 = Effect_Class.liftEffect(Effect_Class.monadEffectEffect)(Effect_Ref.read(v1.selfRef))();
                                    return Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(v2.rendering)(renderSpec.dispose)();
                                };
                            })(dsx)();
                        });
                    };
                };
            };
            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(newLifecycleHandlers))(function (lchs) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref["new"](0)))(function (fresh) {
                    return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref["new"](false)))(function (disposed) {
                        return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                            var sio = Halogen_Subscription.create();
                            var dsx = Control_Bind.bindFlipped(Effect.bindEffect)(Effect_Ref.read)(runComponent(lchs)((function () {
                                var $48 = Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
                                var $49 = Halogen_Subscription.notify(sio.listener);
                                return function ($50) {
                                    return $48($49($50));
                                };
                            })())(i)(component))();
                            return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                                return Control_Applicative.pure(Effect.applicativeEffect)({
                                    query: evalDriver(disposed)(st.selfRef),
                                    messages: sio.emitter,
                                    dispose: dispose(disposed)(lchs)(dsx)
                                });
                            })(dsx)();
                        });
                    });
                });
            });
        };
    };
};
module.exports = {
    runUI: runUI
};
