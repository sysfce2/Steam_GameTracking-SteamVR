var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
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
        __webpack_require__._(_, {
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
        });
        var _ = __webpack_require__("chunkid"),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid");
        const _ = VRHTML;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "vrcompositor_systemlayer",
          _ = "vrwebui_dashboardstore",
          _ = "binding_callouts/main",
          _ = "scene_graph";
        class _ {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_sMailboxName = ""),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_sWebSecret = ""),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new _._("Mailbox", () => this.m_sMailboxName)),
              (0, _.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((_, _) => {
              this.Log.Info("Opening Web Socket...");
              let _ = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (_ += "?secret=" + this.m_sWebSecret),
                this.m_wsWebSocketToServer &&
                  (this.Log.Error(
                    "OpenWebSocketToHost called on existing connection",
                  ),
                  this.CloseWebSocket());
              let _ = !1;
              (this.m_wsWebSocketToServer = new WebSocket(_)),
                this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                  this.OnWebSocketOpen(_), _ || _(), (_ = !0);
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
                ),
                this.m_wsWebSocketToServer.addEventListener("error", (_) => {
                  this.OnWebSocketError(_), _ || _(), (_ = !0);
                });
            });
          }
          CloseWebSocket() {
            this.m_wsWebSocketToServer &&
              (this.m_wsWebSocketToServer.removeEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.removeEventListener(
                "close",
                this.OnWebSocketClose,
              ),
              this.m_wsWebSocketToServer.close(),
              (this.m_wsWebSocketToServer = void 0)),
              (this.connected = !1);
          }
          static EnsureUniqueName(_) {
            if (_.includes("/")) return _;
            let _;
            return (
              (_ = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              _ + "/" + _ + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = _.EnsureUniqueName(_)),
                (this.m_sWebSecret = null != _ ? _ : ""),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          Destroy() {
            this.CloseWebSocket();
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(_) {
            (this.connected = !0),
              this.Log.Info("Web Socket Opened"),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              });
            for (let _ of this.m_oConnectWaits) _();
            this.m_oConnectWaits = [];
          }
          OnWebSocketClose(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host. code:", _.code),
                (this.connected = !1),
                (this.m_wsWebSocketToServer = void 0),
                yield (0, _._)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.ErrorOnceThenWarn(
                "OnWebSocketError",
                "Mailbox error:",
                _.type,
              ),
                (this.connected = !1);
            });
          }
          WebSocketSend(_) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(_), !0)
            );
          }
          OnWebSocketMessage(_) {
            let _ = JSON.parse(_.data),
              _ = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(_.type) &&
                (this.m_oHandlers[_.type](_), (_ = !0)),
              this.m_oWaits.hasOwnProperty(_.type))
            ) {
              let _ = !1;
              for (let _ of this.m_oWaits[_.type])
                _.nMessageId == _.message_id &&
                  (__webpack_require__.callback(_), (_ = !0));
              _
                ? (this.m_oWaits[_.type] = this.m_oWaits[_.type].filter(
                    (_) => _.nMessageId != _.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${_.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (_ = !0);
            }
            _ ||
              this.Log.ErrorOnceThenWarn(
                "OnWebsocket283",
                "Received unhandled message: ",
                _.type,
                _,
              );
          }
          RegisterHandler(_, _) {
            this.m_oHandlers[_] = _;
          }
          SendMessage(_, _) {
            return this.WebSocketSend(
              "mailbox_send " + _ + " " + JSON.stringify(_),
            );
          }
          WaitForMessage(_, _) {
            return new Promise((_, _) => {
              this.m_oWaits[_] || (this.m_oWaits[_] = []),
                this.m_oWaits[_].push({
                  callback: _,
                  nMessageId: _,
                });
            });
          }
          WaitForConnect() {
            return new Promise((_, _) => {
              this.connected ? _() : this.m_oConnectWaits.push(_);
            });
          }
          WaitForMailbox(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              let _ = {
                type: "request_mailbox_registration_notification",
                mailbox_name: _,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                _,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(_, _, _) {
            let _ = Object.assign({}, _);
            null == _.returnAddress && (_.returnAddress = this.m_sMailboxName),
              (_.message_id = this.m_nNextMessageNumber++);
            const _ = this.WaitForMessage(_, _.message_id);
            return this.SendMessage(_, _), _;
          }
          SendResponse(_, _) {
            if (!_.returnAddress)
              throw new Error("Missing return address on message");
            let _ = Object.assign(Object.assign({}, _), {
              message_id: _.message_id,
            });
            (_.message_id = _.message_id), this.SendMessage(_.returnAddress, _);
          }
          SendDebugIllegalMsg() {
            this.WebSocketSend("debug_send_illegal_msg");
          }
          SendDebugCloseMsg() {
            this.WebSocketSend("debug_close");
          }
        }
        (_.s_nNextMailboxNumber = 1),
          (0, _._)([_.observable], _.prototype, "connected", void 0),
          (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
          (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
          (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
          (0, _._)([_._], _.prototype, "OnWebSocketError", null),
          (0, _._)([_._], _.prototype, "WebSocketSend", null),
          (0, _._)([_._], _.prototype, "OnWebSocketMessage", null);
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
        let _ = 0;
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
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
            (_[(_.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (_[(_.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (_[(_.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (_[(_.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (_[(_.ISO_52FPS = 4)] = "ISO_52FPS"),
              (_[(_.ISO_50FPS = 5)] = "ISO_50FPS"),
              (_[(_.ISO_48FPS = 6)] = "ISO_48FPS"),
              (_[(_.ISO_46FPS = 7)] = "ISO_46FPS"),
              (_[(_.ISO_44FPS = 8)] = "ISO_44FPS"),
              (_[(_.ISO_42FPS = 9)] = "ISO_42FPS"),
              (_[(_.ISO_40FPS = 10)] = "ISO_40FPS"),
              (_[(_.ISO_35FPS = 11)] = "ISO_35FPS"),
              (_[(_.ISO_30FPS = 12)] = "ISO_30FPS"),
              (_[(_.ISO_15FPS = 13)] = "ISO_15FPS"),
              (_[(_.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (_[(_.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (_[(_.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
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
        const _ = "system.messageoverlay",
          _ = "/settings/steamvr/showAdvancedSettings";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
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
        _.s_Date = new Date();
        const _ = new _();
        window.LocalizationManager = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _.createElement(
            _._,
            {
              className: "ButtonControl",
              onClick: _.onClick,
            },
            _.label,
          );
        }
        (0, __webpack_require__("chunkid").configure)({
          enforceActions: "never",
        });
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.nMaxButtons = 4),
              (this.m_mailbox = new _._()),
              (this.state = {
                unCallingProcessID: 0,
                sCaptionText: "Default Caption",
                sMessageText: "Default text.",
                sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
              }),
              this.m_mailbox.Init("message_overlay/main").then(() => {
                this.m_mailbox.RegisterHandler(
                  "render_message",
                  this.OnRenderMessageOverlay,
                ),
                  this.m_mailbox.RegisterHandler(
                    "close_requested",
                    this.OnMessageOverlayCloseRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "process_quit",
                    this.OnProcessQuit,
                  );
              }),
              _._.Init(!1);
          }
          ResetState() {
            this.setState({
              unCallingProcessID: 0,
              sCaptionText: "Default Caption",
              sMessageText: "Default text.",
              sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
            });
          }
          OnProcessQuit(_) {
            return this.OnMessageOverlayCloseRequested(_);
          }
          OnMessageOverlayCloseRequested(_) {
            return _.unProcessID == this.state.unCallingProcessID
              ? (console.log(
                  "Close requested from owning process " +
                    this.state.unCallingProcessID,
                ),
                null === _._ ||
                  void 0 === _._ ||
                  _._.VRDashboardManager.OnMessageOverlayResponse(
                    _._.ApplicationQuit,
                  ),
                this.ResetState(),
                !0)
              : (console.log(
                  "Error: Close requested from process " +
                    _.unProcessID +
                    ", but owning process is " +
                    this.state.unCallingProcessID,
                ),
                !1);
          }
          OnRenderMessageOverlay(_) {
            console.log(
              "Message overlay requested from process " + _.unCallingProcessID,
            ),
              this.setState({
                unCallingProcessID: _.unCallingProcessID,
                sCaptionText: _.sCaptionText,
                sMessageText: _.sMessageText,
                sButtonTexts: _.sButtonTexts,
              }),
              null === _._ ||
                void 0 === _._ ||
                _._.VRClient.ShowDashboardOverlay({
                  overlayKey: _._,
                  sReason: "OnRenderMessageOverlay",
                });
          }
          ButtonClicked(_) {
            if (!_._)
              return (
                console.log(
                  "Error: VRHTML isn't present--exiting without sending response.",
                ),
                void this.ResetState()
              );
            console.log(
              "Button " + _ + " clicked, sending OnMessageOverlayResponse.",
            ),
              null === _._ ||
                void 0 === _._ ||
                _._.VRDashboardManager.OnMessageOverlayResponse(_),
              this.ResetState();
          }
          render() {
            return _.createElement(
              "div",
              {
                className: "MessageOverlayContainer",
              },
              _.createElement(
                _._,
                {
                  className: "MessageOverlayPanel",
                },
                _.createElement(
                  "div",
                  {
                    className: "MessageOverlayTextPanel",
                  },
                  _.createElement("h1", null, this.state.sCaptionText),
                  _.createElement("p", null, this.state.sMessageText),
                ),
                _.createElement(
                  "div",
                  {
                    className: "MessageOverlayButtonContainer",
                  },
                  this.state.sButtonTexts[0] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[0],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_0);
                      },
                    }),
                  this.state.sButtonTexts[1] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[1],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_1);
                      },
                    }),
                  this.state.sButtonTexts[2] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[2],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_2);
                      },
                    }),
                  this.state.sButtonTexts[3] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[3],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_3);
                      },
                    }),
                ),
              ),
            );
          }
        };
        (0, _._)([_._], _.prototype, "OnProcessQuit", null),
          (0, _._)([_._], _.prototype, "OnMessageOverlayCloseRequested", null),
          (0, _._)([_._], _.prototype, "OnRenderMessageOverlay", null),
          (0, _._)([_._], _.prototype, "ButtonClicked", null),
          (_ = (0, _._)([_._], _)),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetWidthInMeters(
              _._.VROverlay.ThisOverlayHandle(),
              1.92,
            ),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetFlag(_._.VROverlay.ThisOverlayHandle(), 8, !0),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetInputMethod(
              _._.VROverlay.ThisOverlayHandle(),
              _._.Mouse,
            ),
          (function (_, _) {
            _ ||
              (_ = (function () {
                let _ = new Map([
                  ["en", "english"],
                  ["de", "german"],
                  ["fr", "french"],
                  ["it", "italian"],
                  ["ko", "korean"],
                  ["es-419", "latam"],
                  ["es", "spanish"],
                  ["zh-CN", "schinese"],
                  ["zh-TW", "tchinese"],
                  ["ru", "russian"],
                  ["th", "thai"],
                  ["ja", "japanese"],
                  ["pt", "portuguese"],
                  ["pl", "polish"],
                  ["da", "danish"],
                  ["nl", "dutch"],
                  ["fi", "finnish"],
                  ["no", "norwegian"],
                  ["sv", "swedish"],
                  ["hu", "hungarian"],
                  ["cs", "czech"],
                  ["ro", "romanian"],
                  ["tr", "turkish"],
                  ["pt-BR", "brazilian"],
                  ["bg", "bulgarian"],
                  ["el", "greek"],
                  ["uk", "ukranian"],
                  ["vi", "vietnamese"],
                ]);
                for (let _ of navigator.languages) {
                  let _ = _.split("-");
                  if (_.has(_)) return _.get(_);
                  if (_.has(_[0])) return _.get(_[0]);
                }
                return "english";
              })());
            let _ = [],
              _ = (_, _, _) => {
                let _,
                  _ = Date.now().toString();
                return (
                  (_ =
                    "drivers" == _
                      ? `/input/localization.json?t=${_}`
                      : "webhelper" == _
                        ? `/dashboard/localization/${_}_${_}.json?t=${_}`
                        : `localization/${_}_${_}.json?t=${_}`),
                  _()
                    .get(_)
                    .then((_) => {
                      __webpack_require__(_.data);
                    })
                    .catch(() => {})
                );
              },
              _ = [],
              _ = [],
              _ = [],
              _ = [];
            for (let _ of _)
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            for (let _ of ["webhelper"])
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            return (
              __webpack_require__.push(
                _("drivers", "", (_) => {
                  _.push(_);
                }),
              ),
              Promise.all(_).then(() => {
                _.InitFromObjects(_, _, _, _);
              })
            );
          })(
            [],
            null === _._ || void 0 === _._ ? void 0 : _._.GetSteamLanguage(),
          )
            .then(() => {
              _._(document.getElementById("root")).render(
                _.createElement(_, null),
              );
            })
            .catch((_) =>
              console.error("Failed to initialize message Overlay:", _),
            );
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_](_, _.exports, _), _.exports;
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
    (() => {
      var _ = {
        868: 0,
        527: 0,
        500: 0,
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
  var _ = _._(
    void 0,
    [967, 978, 655, 305, 527, 797, 148, 500, 198, 652, 692],
    () => _(6139),
  );
  _ = _._(_);
})();
