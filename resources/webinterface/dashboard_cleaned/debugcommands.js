var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (_ = _) && "object" == typeof _ && "default" in _ ? _.default : _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        if (!_.useState)
          throw new Error("mobx-react-lite requires React with Hooks support");
        if (!_.makeObservable)
          throw new Error(
            "mobx-react-lite@3 requires mobx at least version 6 to be available",
          );
        function _(_) {
          _();
        }
        function _(_) {
          _ || (_ = _),
            _.configure({
              reactionScheduler: _,
            });
        }
        function _(_) {
          return _.getDependencyTree(_);
        }
        var _ = !1;
        function _(_) {
          _ = _;
        }
        function _() {
          return _;
        }
        var _,
          _,
          _ = new (
            "undefined" != typeof FinalizationRegistry
              ? FinalizationRegistry
              : (function () {
                  function _(_) {
                    var _ = this;
                    (this.finalize = void 0),
                      (this.registrations = new Map()),
                      (this.sweepTimeout = void 0),
                      (this.sweep = function (_) {
                        void 0 === _ && (_ = 1e4),
                          clearTimeout(_.sweepTimeout),
                          (_.sweepTimeout = void 0);
                        var _ = Date.now();
                        _.registrations.forEach(function (_, _) {
                          _ - _.registeredAt >= _ &&
                            (_.finalize(_.value), _.registrations.delete(_));
                        }),
                          _.registrations.size > 0 && _.scheduleSweep();
                      }),
                      (this.finalizeAllImmediately = function () {
                        _.sweep(0);
                      }),
                      (this.finalize = _);
                  }
                  var _ = _.prototype;
                  return (
                    (_.register = function (_, _, _) {
                      this.registrations.set(_, {
                        value: _,
                        registeredAt: Date.now(),
                      }),
                        this.scheduleSweep();
                    }),
                    (_.unregister = function (_) {
                      this.registrations.delete(_);
                    }),
                    (_.scheduleSweep = function () {
                      void 0 === this.sweepTimeout &&
                        (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                    }),
                    _
                  );
                })()
          )(function (_) {
            var _;
            null == (_ = _.reaction) || _.dispose(), (_.reaction = null);
          });
        function _(_) {
          _.reaction = new _.Reaction("observer" + _.name, function () {
            (_.stateVersion = Symbol()),
              null == _.onStoreChange || _.onStoreChange();
          });
        }
        function _(_, _) {
          if ((void 0 === _ && (_ = "observed"), _())) return _();
          var _ = _.useRef(null);
          if (!_.current) {
            var _ = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: _,
              subscribe: function (_) {
                return (
                  _.unregister(_),
                  (_.onStoreChange = _),
                  _.reaction || (_(_), (_.stateVersion = Symbol())),
                  function () {
                    var _;
                    (_.onStoreChange = null),
                      null == (_ = _.reaction) || _.dispose(),
                      (_.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return _.stateVersion;
              },
            };
            _.current = _;
          }
          var _,
            _,
            _ = _.current;
          if (
            (_.reaction || (_(_), _.register(_, _, _)),
            _.useDebugValue(_.reaction, _),
            _.useSyncExternalStore(_.subscribe, _.getSnapshot, _.getSnapshot),
            _.reaction.track(function () {
              try {
                _ = _();
              } catch (_) {
                _ = _;
              }
            }),
            _)
          )
            throw _;
          return _;
        }
        var _,
          _ = "function" == typeof Symbol && Symbol.for,
          _ =
            null !=
              (_ =
                null ==
                (_ = Object.getOwnPropertyDescriptor(function () {}, "name"))
                  ? void 0
                  : _.configurable) && _,
          _ = _
            ? Symbol.for("react.forward_ref")
            : "function" == typeof _.forwardRef &&
              _.forwardRef(function (_) {
                return null;
              }).$$typeof,
          _ = _
            ? Symbol.for("react.memo")
            : "function" == typeof _.memo &&
              _.memo(function (_) {
                return null;
              }).$$typeof,
          _ = {
            $$typeof: !0,
            render: !0,
            compare: !0,
            type: !0,
            displayName: !0,
          };
        function _(_) {
          var _ = _.children,
            _ = _.render;
          _ &&
            _ &&
            console.error(
              "MobX Observer: Do not use children and render in the same time in `Observer`",
            );
          var _ = _ || _;
          return "function" != typeof _ ? null : _(_);
        }
        function _(_) {
          var _ = _.useState(function () {
            return _.observable(
              _,
              {},
              {
                deep: !1,
              },
            );
          })[0];
          return (
            _.runInAction(function () {
              Object.assign(_, _);
            }),
            _
          );
        }
        (_.displayName = "Observer"), _(_.unstable_batchedUpdates);
        var _ = null != (_ = _.finalizeAllImmediately) ? _ : function () {};
        _.useObserver = function (_, _) {
          return void 0 === _ && (_ = "observed"), _(_, _);
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _,
          _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = "function" == typeof Symbol && Symbol.for,
          _ =
            null !==
              (_ =
                null ===
                  (_ = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === _
                  ? void 0
                  : _.configurable) &&
            void 0 !== _ &&
            _,
          _ = _
            ? Symbol.for("react.forward_ref")
            : "function" == typeof _.forwardRef &&
              (0, _.forwardRef)(function (_) {
                return null;
              }).$$typeof,
          _ = _
            ? Symbol.for("react.memo")
            : "function" == typeof _.memo &&
              (0, _.memo)(function (_) {
                return null;
              }).$$typeof;
        function _(_, _) {
          var _;
          if (_ && _.$$typeof === _)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, _._)()) return _;
          var _ =
              null !== (_ = null == _ ? void 0 : _.forwardRef) &&
              void 0 !== _ &&
              _,
            _ = _,
            _ = _.displayName || _.name;
          if (
            _ &&
            _.$$typeof === _ &&
            ((_ = !0), "function" != typeof (_ = _.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var _,
            _,
            _ = function (_, _) {
              return (0, _._)(function () {
                return _(_, _);
              }, _);
            };
          return (
            (_.displayName = _.displayName),
            _ &&
              Object.defineProperty(_, "name", {
                value: _.name,
                writable: !0,
                configurable: !0,
              }),
            _.contextTypes && (_.contextTypes = _.contextTypes),
            _ && (_ = (0, _.forwardRef)(_)),
            (_ = (0, _.memo)(_)),
            (_ = _),
            (_ = _),
            Object.keys(_).forEach(function (_) {
              _[_] ||
                Object.defineProperty(
                  _,
                  _,
                  Object.getOwnPropertyDescriptor(_, _),
                );
            }),
            _
          );
        }
        var _ = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          _.reaction = new _.Reaction("observer".concat(_.name), function () {
            var _;
            (_.stateVersion = Symbol()),
              null === (_ = _.onStoreChange) || void 0 === _ || _.call(_);
          });
        }
        function _(_, _) {
          if ((void 0 === _ && (_ = "observed"), (0, _._)())) return _();
          var _ = _.useRef(null);
          if (!_.current) {
            var _ = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: _,
              subscribe: function (_) {
                return (
                  _._.unregister(_),
                  (_.onStoreChange = _),
                  _.reaction || (_(_), (_.stateVersion = Symbol())),
                  function () {
                    var _;
                    (_.onStoreChange = null),
                      null === (_ = _.reaction) || void 0 === _ || _.dispose(),
                      (_.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return _.stateVersion;
              },
            };
            _.current = _;
          }
          var _,
            _,
            _ = _.current;
          if (
            (_.reaction || (_(_), _._.register(_, _, _)),
            _.useDebugValue(_.reaction, _._),
            (0, _.useSyncExternalStore)(
              _.subscribe,
              _.getSnapshot,
              _.getSnapshot,
            ),
            _.reaction.track(function () {
              try {
                _ = _();
              } catch (_) {
                _ = _;
              }
            }),
            _)
          )
            throw _;
          return _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _ = new (__webpack_require__("chunkid")._)(function (_) {
          var _;
          null === (_ = _.reaction) || void 0 === _ || _.dispose(),
            (_.reaction = null);
        });
      },
      chunkid: (_, _) => {
        var _ = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          _ = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy"),
          _ = Symbol.iterator;
        var _ = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          _ = Object.assign,
          _ = {};
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        function _() {}
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (_, _) {
            if ("object" != typeof _ && "function" != typeof _ && null != _)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, _, _, "setState");
          }),
          (_.prototype.forceUpdate = function (_) {
            this.updater.enqueueForceUpdate(this, _, "forceUpdate");
          }),
          (_.prototype = _.prototype);
        var _ = (_.prototype = new _());
        (_.constructor = _), _(_, _.prototype), (_.isPureReactComponent = !0);
        var _ = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          _ = {
            current: null,
          },
          _ = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          };
        function _(_, _, _) {
          var _,
            _ = {},
            _ = null,
            _ = null;
          if (null != _)
            for (_ in (void 0 !== _.ref && (_ = _.ref),
            void 0 !== _.key && (_ = "" + _.key),
            _))
              _.call(_, _) && !_.hasOwnProperty(_) && (_[_] = _[_]);
          var _ = arguments.length - 2;
          if (1 === _) _.children = _;
          else if (1 < _) {
            for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
            _.children = _;
          }
          if (_ && _.defaultProps)
            for (_ in (_ = _.defaultProps)) void 0 === _[_] && (_[_] = _[_]);
          return {
            $$typeof: _,
            type: _,
            key: _,
            ref: _,
            props: _,
            _owner: _.current,
          };
        }
        function _(_) {
          return "object" == typeof _ && null !== _ && _.$$typeof === _;
        }
        var _ = /\/+/g;
        function _(_, _) {
          return "object" == typeof _ && null !== _ && null != _.key
            ? (function (_) {
                var _ = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  _.replace(/[=:]/g, function (_) {
                    return _[_];
                  })
                );
              })("" + _.key)
            : _.toString(36);
        }
        function _(_, _, _, _, _) {
          var _ = typeof _;
          ("undefined" !== _ && "boolean" !== _) || (_ = null);
          var _ = !1;
          if (null === _) _ = !0;
          else
            switch (_) {
              case "string":
              case "number":
                _ = !0;
                break;
              case "object":
                switch (_.$$typeof) {
                  case _:
                  case _:
                    _ = !0;
                }
            }
          if (_)
            return (
              (_ = _((_ = _))),
              (_ = "" === _ ? "." + _(_, 0) : _),
              _(_)
                ? ((_ = ""),
                  null != _ && (_ = _.replace(_, "$&/") + "/"),
                  _(_, _, _, "", function (_) {
                    return _;
                  }))
                : null != _ &&
                  (_(_) &&
                    (_ = (function (_, _) {
                      return {
                        $$typeof: _,
                        type: _.type,
                        key: _,
                        ref: _.ref,
                        props: _.props,
                        _owner: _._owner,
                      };
                    })(
                      _,
                      _ +
                        (!_.key || (_ && _.key === _.key)
                          ? ""
                          : ("" + _.key).replace(_, "$&/") + "/") +
                        _,
                    )),
                  _.push(_)),
              1
            );
          if (((_ = 0), (_ = "" === _ ? "." : _ + ":"), _(_)))
            for (var _ = 0; _ < _.length; _++) {
              var _ = _ + _((_ = _[_]), _);
              _ += _(_, _, _, _, _);
            }
          else if (
            ((_ = (function (_) {
              return null === _ || "object" != typeof _
                ? null
                : "function" == typeof (_ = (_ && _[_]) || _["@@iterator"])
                  ? _
                  : null;
            })(_)),
            "function" == typeof _)
          )
            for (_ = _.call(_), _ = 0; !(_ = _.next()).done; )
              _ += _((_ = _.value), _, _, (_ = _ + _(_, _++)), _);
          else if ("object" === _)
            throw (
              ((_ = String(_)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === _
                    ? "object with keys {" + Object.keys(_).join(", ") + "}"
                    : _) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return _;
        }
        function _(_, _, _) {
          if (null == _) return _;
          var _ = [],
            _ = 0;
          return (
            _(_, _, "", "", function (_) {
              return _.call(_, _, _++);
            }),
            _
          );
        }
        function _(_) {
          if (-1 === _._status) {
            var _ = _._result;
            (_ = _()).then(
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 1), (_._result = _));
              },
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 2), (_._result = _));
              },
            ),
              -1 === _._status && ((_._status = 0), (_._result = _));
          }
          if (1 === _._status) return _._result.default;
          throw _._result;
        }
        var _ = {
            current: null,
          },
          _ = {
            transition: null,
          },
          _ = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: _,
          };
        function _() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (_.Children = {
          map: _,
          forEach: function (_, _, _) {
            _(
              _,
              function () {
                _.apply(this, arguments);
              },
              _,
            );
          },
          count: function (_) {
            var _ = 0;
            return (
              _(_, function () {
                _++;
              }),
              _
            );
          },
          toArray: function (_) {
            return (
              _(_, function (_) {
                return _;
              }) || []
            );
          },
          only: function (_) {
            if (!_(_))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return _;
          },
        }),
          (_.Component = _),
          (_.Fragment = _),
          (_.Profiler = _),
          (_.PureComponent = _),
          (_.StrictMode = _),
          (_.Suspense = _),
          (_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
          (_.act = _),
          (_.cloneElement = function (_, _, _) {
            if (null == _)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  _ +
                  ".",
              );
            var _ = _({}, _.props),
              _ = _.key,
              _ = _.ref,
              _ = _._owner;
            if (null != _) {
              if (
                (void 0 !== _.ref && ((_ = _.ref), (_ = _.current)),
                void 0 !== _.key && (_ = "" + _.key),
                _.type && _.type.defaultProps)
              )
                var _ = _.type.defaultProps;
              for (_ in _)
                _.call(_, _) &&
                  !_.hasOwnProperty(_) &&
                  (_[_] = void 0 === _[_] && void 0 !== _ ? _[_] : _[_]);
            }
            var _ = arguments.length - 2;
            if (1 === _) _.children = _;
            else if (1 < _) {
              _ = Array(_);
              for (var _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
              _.children = _;
            }
            return {
              $$typeof: _,
              type: _.type,
              key: _,
              ref: _,
              props: _,
              _owner: _,
            };
          }),
          (_.createContext = function (_) {
            return (
              ((_ = {
                $$typeof: _,
                _currentValue: _,
                _currentValue2: _,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = {
                $$typeof: _,
                _context: _,
              }),
              (_.Consumer = _)
            );
          }),
          (_.createElement = _),
          (_.createFactory = function (_) {
            var _ = _.bind(null, _);
            return (_.type = _), _;
          }),
          (_.createRef = function () {
            return {
              current: null,
            };
          }),
          (_.forwardRef = function (_) {
            return {
              $$typeof: _,
              render: _,
            };
          }),
          (_.isValidElement = _),
          (_.lazy = function (_) {
            return {
              $$typeof: _,
              _payload: {
                _status: -1,
                _result: _,
              },
              _init: _,
            };
          }),
          (_.memo = function (_, _) {
            return {
              $$typeof: _,
              type: _,
              compare: void 0 === _ ? null : _,
            };
          }),
          (_.startTransition = function (_) {
            var _ = _.transition;
            _.transition = {};
            try {
              _();
            } finally {
              _.transition = _;
            }
          }),
          (_.unstable_act = _),
          (_.useCallback = function (_, _) {
            return _.current.useCallback(_, _);
          }),
          (_.useContext = function (_) {
            return _.current.useContext(_);
          }),
          (_.useDebugValue = function () {}),
          (_.useDeferredValue = function (_) {
            return _.current.useDeferredValue(_);
          }),
          (_.useEffect = function (_, _) {
            return _.current.useEffect(_, _);
          }),
          (_.useId = function () {
            return _.current.useId();
          }),
          (_.useImperativeHandle = function (_, _, _) {
            return _.current.useImperativeHandle(_, _, _);
          }),
          (_.useInsertionEffect = function (_, _) {
            return _.current.useInsertionEffect(_, _);
          }),
          (_.useLayoutEffect = function (_, _) {
            return _.current.useLayoutEffect(_, _);
          }),
          (_.useMemo = function (_, _) {
            return _.current.useMemo(_, _);
          }),
          (_.useReducer = function (_, _, _) {
            return _.current.useReducer(_, _, _);
          }),
          (_.useRef = function (_) {
            return _.current.useRef(_);
          }),
          (_.useState = function (_) {
            return _.current.useState(_);
          }),
          (_.useSyncExternalStore = function (_, _, _) {
            return _.current.useSyncExternalStore(_, _, _);
          }),
          (_.useTransition = function () {
            return _.current.useTransition();
          }),
          (_.version = "18.3.1");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        _.exports = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _._,
          _: () => _._,
          _: () => _,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = VRHTML;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _, _, _, _;
        function _() {
          var _;
          return null !==
            (_ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== _
            ? _
            : _.Unknown;
        }
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        }),
          (function (_) {
            (_[(_.Desktop = 1)] = "Desktop"),
              (_[(_.Overlay = 2)] = "Overlay"),
              (_[(_.Unknown = 100)] = "Unknown");
          })(_ || (_ = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (_) {
            (_[(_.Auto = 0)] = "Auto"),
              (_[(_.Low = 1)] = "Low"),
              (_[(_.Medium = 2)] = "Medium"),
              (_[(_.High = 3)] = "High");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (_[(_.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (_[(_.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (_[(_.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (_[(_.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (_[(_.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Seated = 0)] = "Seated"),
              (_[(_.Standing = 1)] = "Standing"),
              (_[(_.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(_ || (_ = {}));
        let _ = 0,
          _ = 0,
          _ = 4294967295;
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        !(function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Shown = 1)] = "Shown"),
            (_[(_.Hidden = 2)] = "Hidden"),
            (_[(_.Exposed = 3)] = "Exposed"),
            (_[(_.Moved = 4)] = "Moved"),
            (_[(_.Resized = 5)] = "Resized"),
            (_[(_.SizeChanged = 6)] = "SizeChanged"),
            (_[(_.Minimized = 7)] = "Minimized"),
            (_[(_.Maximized = 8)] = "Maximized"),
            (_[(_.Restored = 9)] = "Restored"),
            (_[(_.Enter = 10)] = "Enter"),
            (_[(_.Leave = 11)] = "Leave"),
            (_[(_.FocusGained = 12)] = "FocusGained"),
            (_[(_.FocusLost = 13)] = "FocusLost"),
            (_[(_.Close = 14)] = "Close"),
            (_[(_.TakeFocus = 15)] = "TakeFocus"),
            (_[(_.HitTest = 16)] = "HitTest");
        })(_ || (_ = {})),
          (function (_) {
            (_[(_.Activated = 0)] = "Activated"),
              (_[(_.Deactivated = 1)] = "Deactivated");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"), (_[(_.Mouse = 1)] = "Mouse");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.HMD = 1)] = "HMD"),
              (_[(_.Controller = 2)] = "Controller"),
              (_[(_.GenericTracker = 3)] = "GenericTracker"),
              (_[(_.TrackingReference = 4)] = "TrackingReference"),
              (_[(_.DisplayRedirect = 5)] = "DisplayRedirect");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = 0)] = "Unknown"),
              (_[(_.NVIDIA = 1)] = "NVIDIA"),
              (_[(_.AMD = 2)] = "AMD");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.Starting = 1)] = "Starting"),
              (_[(_.Quitting = 2)] = "Quitting"),
              (_[(_.Running = 3)] = "Running"),
              (_[(_.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (_[(_.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (_[(_.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (_[(_.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (_[(_.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (_[(_.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (_[(_.ApplicationQuit = 6)] = "ApplicationQuit");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Normal = 0)] = "Normal"),
              (_[(_.Password = 1)] = "Password"),
              (_[(_.Submit = 2)] = "Submit");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.SingleLine = 0)] = "SingleLine"),
              (_[(_.MultipleLines = 1)] = "MultipleLines");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.LaserMouse = 1)] = "LaserMouse"),
              (_[(_.RoomViewFullyOccludingApp = 2)] =
                "RoomViewFullyOccludingApp"),
              (_[(_.DisplaySuppressed = 4)] = "DisplaySuppressed"),
              (_[(_.SystemButtonDown = 8)] = "SystemButtonDown"),
              (_[(_.DriverIsDrawingControllers = 16)] =
                "DriverIsDrawingControllers"),
              (_[(_.DriverRequestsApplicationPause = 32)] =
                "DriverRequestsApplicationPause"),
              (_[(_.DriverRequestsReducedRendering = 64)] =
                "DriverRequestsReducedRendering"),
              (_[(_.DashboardTutorial = 128)] = "DashboardTutorial"),
              (_[(_.GamepadMode = 512)] = "GamepadMode"),
              (_[(_.SystemKeyboardPrivacy = 1024)] = "SystemKeyboardPrivacy");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ThisSteamVR = 1)] = "ThisSteamVR"),
              (_[(_.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (_[(_.AnotherRuntime = 3)] = "AnotherRuntime"),
              (_[(_.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
              (_[(_.Error = -1)] = "Error");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (_[(_.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (_[(_.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (_[(_.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (_[(_.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (_[(_.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = 0)] = "Unknown"),
              (_[(_.Steam_VRButton = 1)] = "Steam_VRButton"),
              (_[(_.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (_[(_.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (_[(_.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (_[(_.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (_[(_.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (_[(_.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (_[(_.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (_[(_.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(_ || (_ = {})),
          (function (_) {
            _[(_.Hostname = 0)] = "Hostname";
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unavailable = 0)] = "Unavailable"),
              (_[(_.Active = 1)] = "Active"),
              (_[(_.Off = 2)] = "Off");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 1)] = "Default"), (_[(_.Floor = 2)] = "Floor");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Inactive = 0)] = "Inactive"),
              (_[(_.PendingReset = 1)] = "PendingReset"),
              (_[(_.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (_[(_.Default = 3)] = "Default"),
              (_[(_._ = 4)] = "CV"),
              (_[(_.Manual = 5)] = "Manual");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_._ = 1)] = "OK"),
              (_[(_.Warning = 100)] = "Warning"),
              (_[(_.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (_[(_.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (_[(_.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (_[(_.Error = 200)] = "Error"),
              (_[(_.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (_[(_.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (_[(_.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (_[(_.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Small = 0)] = "Small"),
              (_[(_.Medium = 1)] = "Medium"),
              (_[(_.Large = 2)] = "Large"),
              (_[(_.Gigantic = 3)] = "Gigantic"),
              (_[(_.Standing = 4)] = "Standing");
          })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        __webpack_require__("chunkid"), __webpack_require__("chunkid");
        class _ {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(_, _, _, _) {
            this.m_mapTokens.clear();
            let _ = [_, _, _, _];
            for (let _ in _) {
              let _ = _[_];
              for (let _ in _) {
                let _ = _[_];
                for (let _ in _) {
                  let _ = _.toLowerCase();
                  this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]);
                }
              }
            }
          }
          LocalizeString(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          LocalizeStringFromFallback(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapFallbackTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          static GetLocale() {
            const _ = navigator.languages[0];
            try {
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!_) return _;
              _.s_Date.toLocaleTimeString(_);
              return _;
            } catch (_) {
              return _;
            }
          }
        }
        function _(_, ..._) {
          let _ = _.LocalizeString(_);
          return _
            ? (_.length > 0 &&
                (_ = __webpack_require__.replace(/%(\d+)\$s/g, function (_, _) {
                  return void 0 !== _[_ - 1] ? String(_[_ - 1]) : _;
                })),
              _)
            : _;
        }
        _.s_Date = new Date();
        const _ = new _();
        window.LocalizationManager = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        function _(_, _, _) {
          return null == _ || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
        }
        __webpack_require__._(_, {
          _: () => _,
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          constructor(_, _, _) {
            (this.keyCode = _), (this.shift = _), (this.control = _);
          }
          equals(_) {
            return (
              _ &&
              this.keyCode === _.keyCode &&
              this.shift === _.shift &&
              this.control === _.control
            );
          }
          get isValid() {
            return (
              ((_ = this.keyCode) > 47 && _ < 58) ||
              32 == _ ||
              13 == _ ||
              (_ > 64 && _ < 91) ||
              (_ > 95 && _ < 112) ||
              (_ > 185 && _ < 193) ||
              (_ > 218 && _ < 223) ||
              (function (_) {
                return _ >= 37 && _ <= 40;
              })(this.keyCode)
            );
            var _;
          }
          get character() {
            switch (this.keyCode) {
              case 8:
                return "Backspace";
              case 9:
                return "Tab";
              case 13:
                return "Enter";
              case 16:
                return "Shift";
              case 17:
                return "Ctrl";
              case 18:
                return "Alt";
              case 19:
                return "Pause/Break";
              case 20:
                return "Caps Lock";
              case 27:
                return "Esc";
              case 32:
                return "Space";
              case 33:
                return "Page Up";
              case 34:
                return "Page Down";
              case 35:
                return "End";
              case 36:
                return "Home";
              case 37:
                return "Left";
              case 38:
                return "Up";
              case 39:
                return "Right";
              case 40:
                return "Down";
              case 45:
                return "Insert";
              case 46:
                return "Delete";
              case 91:
                return "Windows";
              case 93:
                return "Right Click";
              case 96:
                return "Numpad 0";
              case 97:
                return "Numpad 1";
              case 98:
                return "Numpad 2";
              case 99:
                return "Numpad 3";
              case 100:
                return "Numpad 4";
              case 101:
                return "Numpad 5";
              case 102:
                return "Numpad 6";
              case 103:
                return "Numpad 7";
              case 104:
                return "Numpad 8";
              case 105:
                return "Numpad 9";
              case 106:
                return "Numpad *";
              case 107:
                return "Numpad +";
              case 109:
                return "Numpad -";
              case 110:
                return "Numpad .";
              case 111:
                return "Numpad /";
              case 112:
                return "F1";
              case 113:
                return "F2";
              case 114:
                return "F3";
              case 115:
                return "F4";
              case 116:
                return "F5";
              case 117:
                return "F6";
              case 118:
                return "F7";
              case 119:
                return "F8";
              case 120:
                return "F9";
              case 121:
                return "F10";
              case 122:
                return "F11";
              case 123:
                return "F12";
              case 144:
                return "Num Lock";
              case 145:
                return "Scroll Lock";
              case 182:
                return "My Computer";
              case 183:
                return "My Calculator";
              case 186:
                return ";";
              case 187:
                return "=";
              case 188:
                return ",";
              case 189:
                return "-";
              case 190:
                return ".";
              case 191:
                return "/";
              case 192:
                return "`";
              case 219:
                return "[";
              case 220:
                return "\\";
              case 221:
                return "]";
              case 222:
                return "'";
              default:
                return String.fromCharCode(this.keyCode);
            }
          }
          static fromSerializedString(_) {
            let _ = _.split(",");
            if (3 !== _.length) return null;
            let _ = Number.parseInt(_[0]),
              _ = Number.parseInt(_[1]),
              _ = Number.parseInt(_[2]);
            return new _(_, _ > 0, _ > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let _ = this.character;
            return (
              this.shift && (_ = "shift + " + _),
              this.control && (_ = "ctrl + " + _),
              _
            );
          }
          render() {
            return _.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.shift && "shift",
              this.shift &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.character,
            );
          }
        }
        class _ {
          constructor(_, _) {
            (this.shortcut = void 0),
              (this.sCommand = _),
              (this.sMailbox = _),
              (this.refButton = _.createRef()),
              (0, _.makeObservable)(this);
          }
        }
        (0, _._)([_.observable], _.prototype, "shortcut", void 0);
        class _ {
          dumpShortcuts() {
            let _ = ["Defaults:"];
            this.rCommands.forEach((_) => {
              _.shortcut &&
                _.push(
                  '"' +
                    _.sCommand +
                    '": new KeyboardShortcut( ' +
                    _.shortcut.keyCode +
                    ", " +
                    (_.shortcut.shift ? "true" : "false") +
                    ", " +
                    (_.shortcut.control ? "true" : "false") +
                    " ), // " +
                    _.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(_.join("\n"));
          }
          constructor(_) {
            (this.rCommands = []),
              (this.rCommands = _),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(_) {
            if (!_) return null;
            let _ = this.rCommands.filter((_) => _.equals(_.shortcut));
            return _.length > 0 ? _[0] : null;
          }
          resetCommandShortcuts(_) {
            this.rCommands.forEach((_) => this.resetCommandShortcut(_, !1)),
              _ && this.saveCommandShortcuts();
          }
          getCommandForName(_) {
            let _ = this.rCommands.filter((_) => _.sCommand === _);
            return _.length > 0 ? _[0] : null;
          }
          loadCommandShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              let _;
              try {
                _ = yield _._.GetSettingsValue(_.k_sPropDebugCommandShortcuts);
              } catch (_) {
                return;
              }
              _ &&
                _.split(";").forEach((_) => {
                  let _ = _.split(":");
                  if (2 !== _.length) return;
                  let _ = this.getCommandForName(_[0]),
                    _ = _.fromSerializedString(_[1]);
                  _ && _ && this.bindCommandToShortcut(_, _, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let _ = this.rCommands
              .filter(
                (_) =>
                  !(
                    !_.shortcut ||
                    (_.sCommand in _.k_DefaultShortcuts &&
                      _.k_DefaultShortcuts[_.sCommand].equals(_.shortcut))
                  ),
              )
              .map((_) => _.sCommand + ":" + _.shortcut.toSerializedString())
              .join(";");
            _._.SetSettingsStringValueWithoutSchema(
              _.k_sPropDebugCommandShortcuts,
              _,
            );
          }
          bindCommandToShortcut(_, _, _) {
            let _ = this.getCommandForShortcut(_);
            _ && (_.shortcut = null),
              (_.shortcut = _),
              _ && this.saveCommandShortcuts();
          }
          resetCommandShortcut(_, _) {
            let _ = null;
            _.sCommand in _.k_DefaultShortcuts &&
              (_ = _.k_DefaultShortcuts[_.sCommand]),
              this.bindCommandToShortcut(_, _, _);
          }
        }
        (_.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (_.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new _(69, !1, !1),
            application_throttling_frame_count_cycle: new _(82, !1, !1),
            application_throttling_toggle: new _(82, !0, !1),
            async_mode_running_start_toggle: new _(85, !1, !1),
            async_mode_toggle: new _(65, !0, !1),
            black_clamp_toggle: new _(75, !1, !1),
            camera_room_view_toggle: new _(67, !1, !1),
            collision_bounds_center_marker_toggle: new _(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new _(80, !1, !1),
            collision_bounds_play_space_toggle: new _(79, !1, !1),
            collision_bounds_style_cycle: new _(72, !1, !1),
            debug_counter_increment: new _(32, !1, !1),
            flip_universe_transform_toggle: new _(70, !0, !1),
            gpu_profiler_capture: new _(86, !1, !1),
            grid_mode_cycle: new _(71, !1, !1),
            ipd_offset_decrement: new _(189, !1, !1),
            ipd_offset_increment: new _(187, !1, !1),
            latency_testing_toggle: new _(190, !0, !1),
            motion_vector_debug_mode_toggle: new _(74, !0, !1),
            pixel_line_double_sim_toggle: new _(89, !1, !1),
            reflection_map_reload: new _(88, !1, !1),
            screenshot_all_request: new _(83, !0, !1),
            screenshot_request: new _(83, !1, !1),
            seated_position_reset: new _(90, !1, !1),
            shaders_force_reload: new _(220, !1, !1),
            simulate_3dof_toggle: new _(84, !1, !1),
            single_frame_stepping_request: new _(190, !1, !1),
            user_brightness_decrement: new _(186, !1, !1),
            user_brightness_increment: new _(222, !1, !1),
            vsync_to_photons_big_decrement: new _(219, !0, !1),
            vsync_to_photons_big_increment: new _(221, !0, !1),
            vsync_to_photons_decrement: new _(219, !1, !1),
            vsync_to_photons_increment: new _(221, !1, !1),
          }),
          (0, _._)([_._], _.prototype, "dumpShortcuts", null),
          (0, _._)([_._], _.prototype, "resetCommandShortcut", null);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new _([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = _.createRef()),
              _._.Init(!1),
              (this.mailbox = new _._()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, _._)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let _ = {
                      type: "get_debug_commands",
                    },
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _._,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _._,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = _.commands.concat(_.commands);
                  try {
                    if (
                      yield _._.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let _ = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        _,
                        "get_debug_commands_response",
                      );
                      _ = _.concat(_.commands);
                    }
                  } catch (_) {}
                  let _ = new _(_.map((_) => new _(_.command, _.mailbox)));
                  yield _.initializeKeyboardShortcuts(),
                    this.setState({
                      commands: _,
                    });
                }),
              );
          }
          componentDidMount() {
            (this.previousOnKeyDown = window.onkeypress),
              (window.onkeydown = this.onKeyDown),
              window.addEventListener("focus", this.onWindowFocus),
              window.addEventListener("blur", this.onWindowBlur);
          }
          componentWillUnmount() {
            (window.onkeydown = this.previousOnKeyDown),
              window.removeEventListener("focus", this.onWindowFocus),
              window.removeEventListener("blur", this.onWindowBlur);
          }
          onWindowFocus() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !0,
                }),
              0,
            );
          }
          onWindowBlur() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !1,
                }),
              0,
            ),
              this.endEdit();
          }
          startEdit(_) {
            this.setState({
              editingCommand: _,
            });
          }
          endEdit() {
            this.setState({
              editingCommand: null,
            });
          }
          sendDebugCommand(_) {
            console.log("Sending debug command: " + _.sCommand),
              _.refButton.current &&
                (_.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  _.refButton.current.classList.remove("Active");
                }, 150));
            let _ = {
              type: _.sCommand,
            };
            this.mailbox.SendMessage(_.sMailbox, _);
          }
          onKeyDown(_) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === _.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === _.key && this.isEditing)
              return void this.endEdit();
            let _ = new _(_.keyCode, _.shiftKey, _.ctrlKey);
            if (_.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  _,
                  !0,
                ),
                  this.endEdit();
              else {
                let _ = this.state.commands.getCommandForShortcut(_);
                _ && this.sendDebugCommand(_);
              }
              switch (_.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  _.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(_) {
            sessionStorage.setItem("search", _),
              this.setState({
                sSearch: _,
              });
          }
          onSearchChanged() {
            this.refSearchInput.current &&
              this.setSearch(this.refSearchInput.current.value);
          }
          clearSearch() {
            this.refSearchInput.current &&
              ((this.refSearchInput.current.value = ""),
              setTimeout(() => this.refSearchInput.current.focus(), 0)),
              this.setSearch("");
          }
          onResetShortcuts() {
            this.state.commands.resetCommandShortcuts(!0);
          }
          render() {
            let _ = ["DebugCommandsList"];
            return (
              this.isEditing && _.push("Editing"),
              _.createElement(
                "div",
                {
                  className: "DebugCommands",
                },
                _.createElement(
                  "div",
                  {
                    className: "Header",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "InnerContainer",
                    },
                    _.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      _.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    _.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      _.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.join(" "),
                  },
                  this.state.commands.rCommands
                    .filter(
                      (_) =>
                        !this.state.sSearch ||
                        _.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((_) => {
                      let _ = ["ButtonControl", "DebugCommandButton"],
                        _ = this.state.editingCommand === _;
                      _ && _.push("Editing");
                      let _ = !!_.shortcut;
                      _.push(_ ? "Bound" : "Unbound");
                      let _ = _.createElement("span", null, "unbound");
                      return (
                        _
                          ? (_ = _.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : _.shortcut && (_ = _.shortcut.render()),
                        _.createElement(
                          "div",
                          {
                            key: _.sCommand,
                            ref: _.refButton,
                            onClick: () => this.sendDebugCommand(_),
                            className: _.join(" "),
                          },
                          _.createElement(
                            "div",
                            {
                              className: "CommandName",
                            },
                            _.sCommand,
                          ),
                          _.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (_) => {
                                _.stopPropagation(), this.startEdit(_);
                              },
                            },
                            _,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  _.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  _.createElement(
                    "div",
                    {
                      className: "Footer",
                    },
                    _.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, _._)([_._], _.prototype, "onWindowFocus", null),
          (0, _._)([_._], _.prototype, "onWindowBlur", null),
          (0, _._)([_._], _.prototype, "endEdit", null),
          (0, _._)([_._], _.prototype, "onKeyDown", null),
          (0, _._)([_.computed], _.prototype, "isEditing", null),
          (0, _._)([_._], _.prototype, "onSearchChanged", null),
          (0, _._)([_._], _.prototype, "clearSearch", null),
          (0, _._)([_._], _.prototype, "onResetShortcuts", null),
          (_ = (0, _._)([_._], _)),
          _._(document.getElementById("root")).render(_.createElement(_, null)),
          (window.document.title = "Debug Commands");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        !(function (_) {
          (_[(_.Alive = 0)] = "Alive"), (_[(_.Destroyed = 1)] = "Destroyed");
        })(_ || (_ = {}));
        class _ {
          get OnDestroyed() {
            return this.m_OnDestroyed;
          }
          get frame() {
            return this.m_Frame;
          }
          get pageID() {
            return this.m_unPageID;
          }
          get state() {
            return this.m_eState;
          }
          get summonOverlayKey() {
            return this.m_sSummonOverlayKey;
          }
          get isExternalDashboardOverlay() {
            return !!this.m_bExternalDashboardOverlay;
          }
          get isActivePage() {
            return this.m_Frame.activePageID === this.m_unPageID;
          }
          get isActiveAndVisiblePage() {
            return this.isActivePage && this.frame.isCurrentlyVisible;
          }
          get mountableID() {
            return `frame:${this.frame.frameID}:page:${this.pageID}:mountable`;
          }
          get latestContentSize() {
            return this.size.latestContentSize;
          }
          get logPrefix() {
            let _ = this.frame.title;
            return (
              _.length > _._ && (_ = _.substring(0, _._ - 3) + "..."),
              `${this.frame.frameID}[${this.pageID}] "${_}"`
            );
          }
          RegisterComponent(_) {
            this.m_setComponents.add(_);
          }
          constructor(_, _, _) {
            (this.props = void 0),
              (this.m_eState = _.Alive),
              (this.m_OnDestroyed = new _._()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.Log = new _._("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new _._(this)),
              (this.sharing = void 0),
              (this.size = new _._(this)),
              (this.focus = new _._(this)),
              (this.m_Frame = _),
              (this.m_unPageID = _),
              (this.props = _),
              (0, _.makeObservable)(this);
          }
          Init() {
            for (const _ of this.m_setComponents) _.Init();
          }
          DestroyPage() {
            this.m_eState != _.Destroyed &&
              ((this.m_eState = _.Destroyed),
              this.m_OnDestroyed.Dispatch(),
              this.m_OnDestroyed.ClearAllCallbacks());
          }
          SetSummonOverlayKey(_) {
            this.m_sSummonOverlayKey = _;
          }
          SetIsExternalDashboardOverlay(_) {
            this.m_bExternalDashboardOverlay = _;
          }
          SetMainPanel(_) {
            if (!_)
              return {
                Unset: () => {},
              };
            this.m_mainPanel = _;
            const _ = this.size.SetMainPanel(_).Unset;
            return {
              Unset: () => {
                (this.m_mainPanel = void 0), _();
              },
            };
          }
          get mainPanelID() {
            if (this.m_mainPanel) {
              const _ = this.m_mainPanel.getID();
              if (null == _) return;
              return (0, _._)(_._, _);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, _._)(_._, this.summonOverlayKey) + "_Panel";
            }
          }
          get mainPanelSGID() {
            var _;
            return this.m_mainPanel
              ? this.m_mainPanel.getSGID()
              : (this.isExternalDashboardOverlay &&
                  null != this.summonOverlayKey &&
                  (null === (_ = _._.GetOverlayInfo(this.summonOverlayKey)) ||
                  void 0 === _
                    ? void 0
                    : _.unStandalonePanelSGID)) ||
                  void 0;
          }
          GetPanelAnchorID(_) {
            if (!this.isExternalDashboardOverlay)
              return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${_}`;
            {
              if (null == this.summonOverlayKey) return;
              const _ = (0, _._)(_._, this.summonOverlayKey);
              switch (_) {
                case _._.TopCenter:
                  return _ + "_TopCenter";
                case _._.CenterLeft:
                  return _ + "_CenterLeft";
                case _._.CenterRight:
                  return _ + "_CenterRight";
                case _._.BottomCenter:
                  return _ + "_BottomCenter";
                case _._.BottomRight:
                  return _ + "_BottomRight";
              }
            }
          }
        }
        (0, _._)([_.observable], _.prototype, "props", void 0),
          (0, _._)([_.observable], _.prototype, "m_eState", void 0),
          (0, _._)([_.observable], _.prototype, "m_sSummonOverlayKey", void 0),
          (0, _._)(
            [_.observable],
            _.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, _._)([_.observable], _.prototype, "m_mainPanel", void 0),
          (0, _._)([_.computed], _.prototype, "state", null),
          (0, _._)([_.computed], _.prototype, "summonOverlayKey", null),
          (0, _._)(
            [_.computed],
            _.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, _._)([_.computed], _.prototype, "isActivePage", null),
          (0, _._)([_.computed], _.prototype, "isActiveAndVisiblePage", null),
          (0, _._)([_.computed], _.prototype, "mountableID", null),
          (0, _._)([_.computed], _.prototype, "latestContentSize", null),
          (0, _._)([_.computed], _.prototype, "logPrefix", null),
          (0, _._)([_.action], _.prototype, "DestroyPage", null),
          (0, _._)([_.action], _.prototype, "SetSummonOverlayKey", null),
          (0, _._)(
            [_.action],
            _.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, _._)([_.action], _.prototype, "SetMainPanel", null),
          (0, _._)([_.computed], _.prototype, "mainPanelID", null),
          (0, _._)([_.computed], _.prototype, "mainPanelSGID", null);
        const _ = _.forwardRef(function (_, _) {
            const { children: _, summonOverlayKey: _ } = _,
              { frame: _ } = (0, _._)(),
              _ = _.useMemo(() => _.CreatePage(_), [_]);
            _.useLayoutEffect(() =>
              (0, _.runInAction)(() => {
                _.props = _;
              }),
            ),
              _.useEffect(() => _.SetSummonOverlayKey(_), [_, _, _]),
              (0, _._)(_, _),
              _.useEffect(() => (_.Init(), () => _.DestroyPage()), [_]);
            const _ = (0, _._)(() => _.mountableID);
            return _.createElement(
              _._.Provider,
              {
                value: {
                  frame: _,
                  page: _,
                },
              },
              _.createElement(
                _._,
                {
                  _: _,
                },
                _,
              ),
            );
          }),
          _ = _.forwardRef(function (_, _) {
            var _, _;
            const {
                requireExternalOverlay: _ = !0,
                overlayKey: _,
                componentProps: _,
              } = _,
              _ = (0, _._)(_, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: _ } = (0, _._)(),
              _ = _.useCallback(
                (_) => {
                  null == _ || _.SetIsExternalDashboardOverlay(!0),
                    (0, _._)(_, _);
                },
                [_],
              ),
              _ = (0, _._)(() => _.curvature.curvatureTransformOriginID),
              _ = (0, _._)(() => _._.GetOverlayInfo(_)),
              _ =
                null !== (_ = null == _ ? void 0 : _.unFlags) && void 0 !== _
                  ? _
                  : 0,
              _ = (16 & _) > 0,
              _ = (1073741824 & _) > 0;
            return _ && !_
              ? null
              : _.createElement(
                  _,
                  Object.assign({}, _, {
                    summonOverlayKey:
                      null !== (_ = _.summonOverlayKey) && void 0 !== _ ? _ : _,
                    ref: _,
                    componentProps: Object.assign(Object.assign({}, _), {
                      keyboard: Object.assign(
                        {
                          overlayKeyForKeyboardInput: _,
                        },
                        null == _ ? void 0 : _.keyboard,
                      ),
                      focus: Object.assign(
                        {
                          vrClientPID: _ ? _.unClientPID : void 0,
                          steamInputAppID: _ ? _.unSteamInputAppID : void 0,
                        },
                        null == _ ? void 0 : _.focus,
                      ),
                    }),
                  }),
                  _.createElement(_._, {
                    mountedId: (0, _._)(_._, _),
                  }),
                  _.createElement(_._, {
                    _: (0, _._)(_._, _) + "_CurvatureOrigin",
                    parent_id: _,
                  }),
                  _.children,
                );
          });
        function _(_) {
          const { page: _ } = (0, _._)();
          if ((0, _._)(() => (null == _ ? void 0 : _.isActiveAndVisiblePage)))
            return _.createElement(_.Fragment, null, _.children);
        }
        function _(_) {
          const { frame: _, page: _ } = (0, _._)();
          if (_ && _ && !_.isExternalDashboardOverlay)
            return _.createElement(
              _.Fragment,
              null,
              _._.map((_) =>
                _.createElement(_._, {
                  key: _,
                  _: __webpack_require__.GetPanelAnchorID(_),
                  location: _,
                }),
              ),
            );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid");
        var _ =
            "function" == typeof Object._
              ? Object._
              : function (_, _) {
                  return (
                    (_ === _ && (0 !== _ || 1 / _ == 1 / _)) ||
                    (_ != _ && _ != _)
                  );
                },
          _ = _.useState,
          _ = _.useEffect,
          _ = _.useLayoutEffect,
          _ = _.useDebugValue;
        function _(_) {
          var _ = _.getSnapshot;
          _ = _.value;
          try {
            var _ = _();
            return !_(_, _);
          } catch (_) {
            return !0;
          }
        }
        var _ =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (_, _) {
                return _();
              }
            : function (_, _) {
                var _ = _(),
                  _ = _({
                    inst: {
                      value: _,
                      getSnapshot: _,
                    },
                  }),
                  _ = _[0].inst,
                  _ = _[1];
                return (
                  _(
                    function () {
                      (_.value = _),
                        (_.getSnapshot = _),
                        _(_) &&
                          _({
                            inst: _,
                          });
                    },
                    [_, _, _],
                  ),
                  _(
                    function () {
                      return (
                        _(_) &&
                          _({
                            inst: _,
                          }),
                        _(function () {
                          _(_) &&
                            _({
                              inst: _,
                            });
                        })
                      );
                    },
                    [_],
                  ),
                  _(_),
                  _
                );
              };
        _.useSyncExternalStore =
          void 0 !== _.useSyncExternalStore ? _.useSyncExternalStore : _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        _.exports = __webpack_require__("chunkid");
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_].call(_.exports, _, _.exports, _), _.exports;
  }
  (_._ = _),
    (_ = []),
    (_._ = (_, _, _, _) => {
      if (!_) {
        var _ = 1 / 0;
        for (_ = 0; _ < _.length; _++) {
          for (var [_, _, _] = _[_], _ = !0, _ = 0; _ < _.length; _++)
            (!1 & _ || _ >= _) && Object.keys(_._).every((_) => _._[_](_[_]))
              ? __webpack_require__.splice(_--, 1)
              : ((_ = !1), _ < _ && (_ = _));
          if (_) {
            _.splice(_--, 1);
            var _ = _();
            void 0 !== _ && (_ = _);
          }
        }
        return _;
      }
      _ = _ || 0;
      for (var _ = _.length; _ > 0 && _[_ - 1][2] > _; _--) _[_] = _[_ - 1];
      _[_] = [_, _, _];
    }),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (_._ = (_) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(_, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(_, "__esModule", {
          value: !0,
        });
    }),
    (() => {
      var _ = {
        866: 0,
        260: 0,
        154: 0,
        982: 0,
        47: 0,
        264: 0,
        204: 0,
      };
      _._._ = (_) => 0 === _[_];
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) var _ = _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
          return _._(_);
        },
        _ = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  var _ = _._(void 0, [967, 991, 305, 170, 452, 797, 906], () => _(9513));
  _ = _._(_);
})();
