var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
        function _(_, ..._) {
          let _ = _.LocalizeString(_);
          if (!_) return _;
          let _,
            _ = [],
            _ = /(.*?)%(\d+)\$s/g,
            _ = 0;
          for (; (_ = _.exec(_)); ) {
            (_ += _[0].length), _.push(_[1]);
            let _ = parseInt(_[2]);
            _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
          }
          return (
            _.push(__webpack_require__.substr(_)),
            _.createElement(_.Fragment, null, ..._)
          );
        }
        _.s_Date = new Date();
        const _ = new _();
        window.LocalizationManager = _;
        var _,
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return {
            get() {
              let _ = _.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, _) ||
                  Object.defineProperty(this, _, {
                    value: _,
                  }),
                _
              );
            },
          };
        }
        class _ {
          GetObject(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              try {
                const _ = yield this.GetString(_);
                return _ ? JSON.parse(_, _) : null;
              } catch (_) {
                return null;
              }
            });
          }
          StoreObject(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              return this.StoreString(_, JSON.stringify(_));
            });
          }
        }
        class _ extends _ {
          GetString(_) {
            return Promise.resolve(localStorage.getItem(_));
          }
          StoreString(_, _) {
            return localStorage.setItem(_, _), Promise.resolve();
          }
          RemoveObject(_) {
            return localStorage.removeItem(_), Promise.resolve();
          }
        }
        class _ {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(_) {
            this.m_vecCallbacks.push(_);
            return {
              Unregister: () => {
                const _ = this.m_vecCallbacks.indexOf(_);
                _ >= 0 && this.m_vecCallbacks.splice(_, 1);
              },
            };
          }
          Dispatch(..._) {
            for (const _ of Array.from(this.m_vecCallbacks)) _(..._);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        (0, _._)([_], _.prototype, "Dispatch", null),
          (function (_) {
            (_[(_.Debug = 0)] = "Debug"),
              (_[(_.Info = 1)] = "Info"),
              (_[(_.Warning = 2)] = "Warning"),
              (_[(_.Error = 3)] = "Error");
          })(_ || (_ = {}));
        class _ {
          constructor(_, _) {
            (this.m_fnIdGenerator = void 0),
              (this.m_sName = _),
              (this.m_fnIdGenerator = _),
              _.Get().RegisterLogName(_);
          }
          Debug(..._) {
            this.Log(_.Debug, ..._);
          }
          Info(..._) {
            this.Log(_.Info, ..._);
          }
          Warning(..._) {
            this.Log(_.Warning, ..._);
          }
          Error(..._) {
            this.Log(_.Error, ..._);
          }
          Assert(_, ..._) {
            _ || this.Log(_.Error, "Assertion failed:", ..._);
          }
          DebugOnce(_, ..._) {
            this.LogOnce(_, _.Debug, ..._);
          }
          InfoOnce(_, ..._) {
            this.LogOnce(_, _.Info, ..._);
          }
          WarningOnce(_, ..._) {
            this.LogOnce(_, _.Warning, ..._);
          }
          ErrorOnce(_, ..._) {
            this.LogOnce(_, _.Error, ..._);
          }
          ErrorOnceThenWarn(_, ..._) {
            let _ = _.Get().ShouldLogOnce(`${this.m_sName}:${_}`)
              ? _.Error
              : _.Warning;
            this.Log(_, ..._);
          }
          IsDebugEnabled() {
            return _.Get().IsDebugLogEnabled(this.m_sName);
          }
          Log(_, ..._) {
            var _, _;
            const _ = _.Get().IsDebugLogEnabled(this.m_sName);
            if (_ == _.Debug && !_) return;
            let _ = this.m_sName;
            const _ =
              null !==
                (_ =
                  null === (_ = this.m_fnIdGenerator) || void 0 === _
                    ? void 0
                    : __webpack_require__.call(this)) && void 0 !== _
                ? _
                : null;
            null != _ && (_ += " (" + _ + ")");
            _(_, _, _.Get().IncludeBacktraceInLog, _, this.m_sName, ..._);
          }
          LogOnce(_, _, ..._) {
            _.Get().ShouldLogOnce(`${this.m_sName}:${_}`) && this.Log(_, ..._);
          }
        }
        (0, _._)([_], _.prototype, "Debug", null),
          (0, _._)([_], _.prototype, "Info", null),
          (0, _._)([_], _.prototype, "Warning", null),
          (0, _._)([_], _.prototype, "Error", null),
          (0, _._)([_], _.prototype, "Assert", null),
          (0, _._)([_], _.prototype, "DebugOnce", null),
          (0, _._)([_], _.prototype, "InfoOnce", null),
          (0, _._)([_], _.prototype, "WarningOnce", null),
          (0, _._)([_], _.prototype, "ErrorOnce", null),
          (0, _._)([_], _.prototype, "ErrorOnceThenWarn", null);
        class _ {
          constructor() {
            (this.m_Storage = null),
              (this.m_setKnownDebugLogs = new Set()),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new _()),
              (this.m_bLoading = !1),
              (this.m_setOnceKeys = new Set()),
              (this.m_Storage = new _()),
              this.LoadSettings();
          }
          LogAsLogManager(..._) {
            _(
              _.Info,
              !0,
              this.IncludeBacktraceInLog,
              "LogManager",
              "LogManager",
              ..._,
            );
          }
          LoadSettings() {
            return (0, _._)(this, void 0, void 0, function* () {
              var _, _;
              (this.m_bLoading = !0),
                (this.m_bIncludeBacktraceInLog = !!(yield null ===
                  (_ = this.m_Storage) || void 0 === _
                  ? void 0
                  : _.GetObject(_.k_IncludeBacktraceInLog_StorageKey)));
              const _ = yield null === (_ = this.m_Storage) || void 0 === _
                ? void 0
                : _.GetObject(_.k_EnabledLogNames_StorageKey);
              if (Array.isArray(_)) {
                this.m_setEnabledDebugLogs = new Set(_);
                for (const _ of _) this.m_setKnownDebugLogs.add(_);
                this.LogAsLogManager(
                  "Loaded debug enabled log names. Will print log messages for:",
                  Array.from(this.m_setEnabledDebugLogs),
                );
              } else 0;
              (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
            });
          }
          SaveSettings() {
            return (0, _._)(this, void 0, void 0, function* () {
              var _, _;
              yield null === (_ = this.m_Storage) || void 0 === _
                ? void 0
                : _.StoreObject(
                    _.k_EnabledLogNames_StorageKey,
                    Array.from(this.m_setEnabledDebugLogs),
                  ),
                yield null === (_ = this.m_Storage) || void 0 === _
                  ? void 0
                  : _.StoreObject(
                      _.k_IncludeBacktraceInLog_StorageKey,
                      this.m_bIncludeBacktraceInLog,
                    ),
                this.LogAsLogManager(
                  "Saved enabled debug log names. Will print log messages for:",
                  Array.from(this.m_setEnabledDebugLogs),
                );
            });
          }
          PrintEnabledLogs() {
            this.LogAsLogManager(
              "Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          }
          static Get() {
            return (
              null == _.s_Singleton && (_.s_Singleton = new _()), _.s_Singleton
            );
          }
          get Loading() {
            return this.m_bLoading;
          }
          get LogNames() {
            return this.m_setKnownDebugLogs.values();
          }
          RegisterLogName(_) {
            this.m_setKnownDebugLogs.add(_);
          }
          IsLogName(_) {
            return this.m_setKnownDebugLogs.has(_);
          }
          IsDebugLogEnabled(_) {
            return this.m_setEnabledDebugLogs.has(_);
          }
          ToggleDebugLogEnabled(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
            });
          }
          SetDebugLogEnabled(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              _
                ? this.m_setEnabledDebugLogs.add(_)
                : this.m_setEnabledDebugLogs.delete(_),
                this.m_SettingsChangedCallback.Dispatch(),
                yield this.SaveSettings();
            });
          }
          SetAllDebugLogsEnabled(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              (this.m_setEnabledDebugLogs = _
                ? new Set(this.m_setKnownDebugLogs)
                : new Set()),
                this.m_SettingsChangedCallback.Dispatch(),
                yield this.SaveSettings();
            });
          }
          RegisterForSettingsChanges(_) {
            return this.m_SettingsChangedCallback.Register(_);
          }
          get IncludeBacktraceInLog() {
            return this.m_bIncludeBacktraceInLog;
          }
          SetIncludeBacktraceInLog(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              (this.m_bIncludeBacktraceInLog = _),
                this.m_SettingsChangedCallback.Dispatch(),
                yield this.SaveSettings();
            });
          }
          ShouldLogOnce(_) {
            return (
              !this.m_setOnceKeys.has(_) && (this.m_setOnceKeys.add(_), !0)
            );
          }
        }
        function _(_, _, _, _, _, ..._) {
          const _ = (function (_) {
              let _ = 0;
              for (let _ = 0; _ < _.length; _++)
                _ = _.charCodeAt(_) + ((_ << 5) - _);
              return [255 & _, (_ >> 8) & 255, (_ >> 16) & 255];
            })(_).map((_, _) =>
              Math.round(
                Math.max(
                  0,
                  Math.min(255, 255 * (0.8 * (_ / 255 - 0.5) + 0.15)),
                ),
              ),
            ),
            _ = (299 * (_ = _)[0] + 587 * _[1] + 114 * _[2]) / 1e3 >= 128;
          var _;
          let _ = _;
          _ &&
            (_ =
              (function (_) {
                switch (_) {
                  case _.Debug:
                    return String.fromCodePoint(128027);
                  case _.Info:
                    return String.fromCodePoint(8505);
                  case _.Warning:
                    return String.fromCodePoint(9888);
                  case _.Error:
                    return String.fromCodePoint(128165);
                }
              })(_) +
              " " +
              _);
          const _ =
              _.length >= 1 && "string" == typeof _[0] && _[0].includes("%c"),
            _ = _ && _.shift();
          let _;
          if (
            ((_ = _
              ? [
                  `%c${_}%c:${_ ? " %c" + _ : ""}`,
                  `color: ${_ ? "black" : "white"}; background: rgb(${_.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                  "color: transparent; margin-right: -1ch",
                  ...(_ ? [""] : []),
                  ..._,
                ]
              : [`[${_}]`, ..._]),
            _)
          )
            console.groupCollapsed(..._),
              console.trace("Callstack"),
              console.groupEnd();
          else
            switch (_) {
              case _.Debug:
              case _.Info:
                console.log(..._);
                break;
              case _.Warning:
                console.warn(..._);
                break;
              case _.Error:
                console.clogerror
                  ? console.clogerror(3, ..._)
                  : console.error(..._);
            }
        }
        (_.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
          (_.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
          (_.s_Singleton = null);
        const _ = () => [..._.Get().LogNames].sort(),
          _ = (_, _) => {
            _.Get().IsLogName(_)
              ? _.Get().SetDebugLogEnabled(_, _)
              : console.warn(`No log named "${_}", available logs:`, _());
          };
        (window.DebugLogEnable = (..._) => _.forEach((_) => _(_, !0))),
          (window.DebugLogDisable = (..._) => _.forEach((_) => _(_, !1))),
          (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
          (window.DebugLogDisableAll = () =>
            _.Get().SetAllDebugLogsEnabled(!1)),
          (window.DebugLogEnableBacktrace = () =>
            _.Get().SetIncludeBacktraceInLog(!0)),
          (window.DebugLogDisableBacktrace = () =>
            _.Get().SetIncludeBacktraceInLog(!1)),
          (window.DebugLogNames = _),
          (window.DebugLogEnabled = (..._) => {
            _.length > 0 &&
              console.warn(
                `Use DebugLogEnable( '${_.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
              ),
              _.Get().PrintEnabledLogs();
          });
        const _ = "vrcompositor_systemlayer",
          _ = "vrwebui_dashboardstore";
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
              (this.Log = new _("Mailbox", () => this.m_sMailboxName)),
              (0, _._)(this);
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
              var _;
              this.Log.Warning("Lost connection to host. code:", _.code),
                (this.connected = !1),
                (this.m_wsWebSocketToServer = void 0),
                yield ((_ = 1e3), new Promise((_) => setTimeout(_, _))),
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
        function _(_, _) {
          let _ = _.getAttribute(_);
          if (_ && _.length > 0) {
            if ("undefined" == _) return;
            let _ = [];
            for (let _ of __webpack_require__.split(" "))
              0 != _.length && _.push(parseFloat(_));
            if (_.length > 0) return _;
          }
        }
        function _(_, _) {
          let _ = _.getAttribute(_);
          if (_ && _.length > 0) return parseFloat(_);
        }
        function _(_, _) {
          let _ = _.getAttribute(_);
          if (_ && _.length > 0) return parseInt(_);
        }
        function _(_, _) {
          let _ = _.getAttribute(_);
          if (_ && _.length > 0)
            return (
              "true" == _ ||
              (_.length > 0 && 0 != parseInt(_) && !isNaN(parseInt(_)))
            );
        }
        function _(_, _) {
          let _ = _.getAttribute(_);
          if (_ && _.length > 0) return _;
        }
        function _(_, _) {
          return _(_(_, _));
        }
        function _(_, _) {
          var _;
          let _ = {
            type: _,
            properties: {},
          };
          return (
            _._ &&
              (_.properties._ =
                null !== (_ = _(_._)) && void 0 !== _ ? _ : void 0),
            (_.properties.sgid = _(_, "sgid")),
            _
          );
        }
        function _(_, _) {
          let [_, _] = (function (_, _) {
              let _ = _.buildNode;
              if (_) return __webpack_require__(_, _);
              let _ = Object.assign({}, _),
                _ = null;
              switch (_.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (_ = _("transform", _)),
                    (_.properties.translation = _(_, "translation")),
                    (_.properties.rotation = _(_, "rotation")),
                    (_.properties.scale = _(_, "scale")),
                    (_.properties["curvature-pitch"] = _(_, "curvature-pitch")),
                    (_.properties["transform-path"] = _(_, "transform-path")),
                    (_.properties["projection-constraint"] = _(
                      _,
                      "projection-constraint",
                    )),
                    (_.properties["invert-parent-panel-pitch"] = _(
                      _,
                      "invert-parent-panel-pitch",
                    )),
                    (_.properties["ignore-parent-scale"] = _(
                      _,
                      "ignore-parent-scale",
                    )),
                    (_.properties["parent-path"] = _(_, "parent-path")),
                    (_.properties["parent-origin"] = _(_, "parent-origin")),
                    (_.properties["parent-id"] = _(_, "parent-id")),
                    (_.properties["frame-resize-scale-factor"] = _(
                      _,
                      "frame-resize-scale-factor",
                    ));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (_ = _("trackingstatevisibility", _)),
                    (_.properties["visible-0dof"] = _(_, "visible-0dof")),
                    (_.properties["visible-3dof"] = _(_, "visible-3dof")),
                    (_.properties["visible-6dof"] = _(_, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (_ = _("elasticheadtransform", _)),
                    (_.properties["rotation-start-angle-threshold"] = _(
                      _,
                      "rotation-start-angle-threshold",
                    )),
                    (_.properties["rotation-stop-angle-threshold"] = _(
                      _,
                      "rotation-stop-angle-threshold",
                    )),
                    (_.properties["rotation-ease-in-time"] = _(
                      _,
                      "rotation-ease-in-time",
                    )),
                    (_.properties["rotation-ease-in-power"] = _(
                      _,
                      "rotation-ease-in-power",
                    )),
                    (_.properties["rotation-ease-out-angle-threshold"] = _(
                      _,
                      "rotation-ease-out-angle-threshold",
                    )),
                    (_.properties["rotation-ease-out-power"] = _(
                      _,
                      "rotation-ease-out-power",
                    )),
                    (_.properties["rotation-min-angular-velocity"] = _(
                      _,
                      "rotation-min-angular-velocity",
                    )),
                    (_.properties["rotation-max-angular-velocity"] = _(
                      _,
                      "rotation-max-angular-velocity",
                    )),
                    (_.properties["translation-start-distance-threshold"] = _(
                      _,
                      "translation-start-distance-threshold",
                    )),
                    (_.properties["translation-stop-distance-threshold"] = _(
                      _,
                      "translation-stop-distance-threshold",
                    )),
                    (_.properties["translation-ease-in-time"] = _(
                      _,
                      "translation-ease-in-time",
                    )),
                    (_.properties["translation-ease-in-power"] = _(
                      _,
                      "translation-ease-in-power",
                    )),
                    (_.properties["translation-ease-out-distance-threshold"] =
                      _(_, "translation-ease-out-distance-threshold")),
                    (_.properties["translation-ease-out-power"] = _(
                      _,
                      "translation-ease-out-power",
                    )),
                    (_.properties["translation-velocity"] = _(
                      _,
                      "translation-velocity",
                    )),
                    (_.properties.enabled = _(_, "enabled")),
                    (_.properties["lock-to-horizon"] = _(_, "lock-to-horizon")),
                    (_.properties["translation-parent"] = _(
                      _,
                      "translation-parent",
                    )),
                    (_.properties["rotation-translation-change-together"] = _(
                      _,
                      "rotation-translation-change-together",
                    ));
                  break;
                case "VSG-LINE":
                  (_ = _("line", _)),
                    (_.properties["target-id"] = _(_, "target-id")),
                    (_.properties.thickness = _(_, "thickness")),
                    (_.properties["start-buffer"] = _(_, "start-buffer")),
                    (_.properties["end-buffer"] = _(_, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (_ = _("line-constrained-transform", _)),
                    (_.properties["target-id"] = _(_, "target-id")),
                    (_.properties["source-id"] = _(_, "source-id")),
                    (_.properties["source-distance"] = _(_, "source-distance")),
                    (_.properties["target-limit"] = _(_, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (_ = _("callout-transform", _)),
                    (_.properties.offset = _(_, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  _ = _("head-facing-transform", _);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (_ = _("pin-to-view-transform", _)),
                    (_.properties["offscreen-z-depth"] = _(
                      _,
                      "offscreen-z-depth",
                    )),
                    (_.properties["off-axis-limit"] = _(_, "off-axis-limit")),
                    (_.properties["transition-limit"] = _(
                      _,
                      "transition-limit",
                    ));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (_ = _("grab-transform", _)),
                    (_.properties["parent-path"] = _(_, "parent-path")),
                    (_.properties.translation = _(_, "translation")),
                    (_.properties.rotation = _(_, "rotation")),
                    (_.properties.scale = _(_, "scale")),
                    (_.properties["should-head-align"] = _(
                      _,
                      "should-head-align",
                    )),
                    (_.properties["stop-distance"] = _(_, "stop-distance")),
                    (_.properties["start-angle"] = _(_, "start-angle")),
                    (_.properties["start-quat-difference"] = _(
                      _,
                      "start-quat-difference",
                    )),
                    (_.properties["stop-quat-difference"] = _(
                      _,
                      "stop-quat-difference",
                    )),
                    (_.properties["scale-margin"] = _(_, "scale-margin")),
                    (_.properties["lerp-speed"] = _(_, "lerp-speed")),
                    (_.properties["min-distance"] = _(_, "min-distance")),
                    (_.properties["max-distance"] = _(_, "max-distance")),
                    (_.properties["one-to-one-radius"] = _(
                      _,
                      "one-to-one-radius",
                    )),
                    (_.properties["max-x-squared-contribution"] = _(
                      _,
                      "max-x-squared-contribution",
                    )),
                    (_.properties["acceleration-factor-x-coefficient"] = _(
                      _,
                      "acceleration-factor-x-coefficient",
                    )),
                    (_.properties["acceleration-factor-x-squared-coefficient"] =
                      _(_, "acceleration-factor-x-squared-coefficient")),
                    (_.properties["acceleration-factor-scale-term"] = _(
                      _,
                      "acceleration-factor-scale-term",
                    )),
                    (_.properties["stored-transform"] = _(
                      _,
                      "stored-transform",
                    )),
                    (_.properties["reset-on-recenter"] = _(
                      _,
                      "reset-on-recenter",
                    )),
                    (_.properties["event-panel-sgid"] = _(
                      _,
                      "event-panel-sgid",
                    ));
              }
              return [_, _];
            })(_, _),
            _ = [];
          for (let _ = 0; _ < _.children.length; _++) {
            let _ = _.children.item(_);
            if (_.children) {
              let _ = _(_, _);
              _ && (_ = _.concat(_));
            }
          }
          return _.bShouldAbort
            ? null
            : _
              ? (_.length > 0 && (_.children = _), [_])
              : _.length > 0
                ? 1 == _.length
                  ? _
                  : [
                      {
                        children: _,
                      },
                    ]
                : null;
        }
        (_.s_nNextMailboxNumber = 1),
          (0, _._)([_._], _.prototype, "connected", void 0),
          (0, _._)([_], _.prototype, "OpenWebSocketToHost", null),
          (0, _._)([_], _.prototype, "OnWebSocketOpen", null),
          (0, _._)([_], _.prototype, "OnWebSocketClose", null),
          (0, _._)([_], _.prototype, "OnWebSocketError", null),
          (0, _._)([_], _.prototype, "WebSocketSend", null),
          (0, _._)([_], _.prototype, "OnWebSocketMessage", null);
        let _,
          _,
          _,
          _,
          _,
          _,
          _ = [],
          _ = null,
          _ = !0;
        function _(_) {
          return _
            ? (function (_) {
                return _ && _.includes("::");
              })(_)
              ? _
              : _() + "::" + _
            : null;
        }
        function _() {
          var _;
          return null !==
            (_ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== _
            ? _
            : _;
        }
        function _() {
          _ ||
            (_ = window.setTimeout(
              () =>
                (0, _._)(this, void 0, void 0, function* () {
                  let _ = document.body;
                  _ && (_ = _);
                  let _ = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: _,
                      allowDismissOnClick: _,
                      sceneColorCorrection: _,
                    },
                    children: _(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      _,
                    ),
                  };
                  _ ||
                    (console.log("Initializing sg_mailbox"),
                    (_ = new _()),
                    yield _.Init("sg_mailbox", _));
                  let _ = {
                    type: "update_scene_graph",
                    owning_overlay_key: _(),
                    scene_graph: _,
                    retired_sgids: _,
                  };
                  _.SendMessage("vrcompositor_systemlayer", _),
                    (_ = null),
                    (_ = []),
                    (_ = !1);
                }),
              0,
            ));
        }
        const _ = new _("SGQueryService");
        class _ {
          constructor() {
            (this.m_mailbox = new _()),
              (this.m_mapPanelHeightSubscriptions = new Map()),
              (this.m_setPanelSubscriptionsToAdd = new Set()),
              (this.m_setPanelSubscriptionsToRemove = new Set()),
              (this.m_bHasPendingSubscriptionUpdates = !1),
              (this.m_bInitializedPanelSubscriptions = !1),
              this.m_mailbox.Init("sgqueryservice").then(() => {
                this.m_mailbox.RegisterHandler(
                  "panel_height_update",
                  this.OnPanelHeightUpdate,
                );
              });
          }
          static getInstance() {
            return (
              _.instance ||
                ((_.instance = new _()), (window.SGQueryService = _.instance)),
              _.instance
            );
          }
          SubscribeToPanelHeight(_, _) {
            _ = _(_);
            let _ = this.m_mapPanelHeightSubscriptions.get(_);
            _ ||
              ((_ = {
                m_Callbacks: new _(),
                m_lastMeasurement: void 0,
              }),
              this.m_mapPanelHeightSubscriptions.set(_, _)),
              0 == _.m_Callbacks.CountRegistered() &&
                (this.m_setPanelSubscriptionsToAdd.add(_),
                this.m_setPanelSubscriptionsToRemove.delete(_),
                this.QueueSubscriptionUpdates());
            const _ = _.m_Callbacks.Register(_),
              _ = {
                Unregister: () => {
                  _.Unregister(),
                    0 == _.m_Callbacks.CountRegistered() &&
                      (this.m_setPanelSubscriptionsToRemove.add(_),
                      this.m_setPanelSubscriptionsToAdd.delete(_),
                      this.QueueSubscriptionUpdates());
                },
              };
            return (
              _.m_lastMeasurement &&
                setTimeout(
                  () =>
                    _(
                      Object.assign(Object.assign({}, _.m_lastMeasurement), {
                        m_bStale: !0,
                      }),
                    ),
                  0,
                ),
              _
            );
          }
          OnPanelHeightUpdate(_) {
            _.Debug("Received panel height updates:", _.panels);
            for (const _ of _.panels) {
              const _ = this.m_mapPanelHeightSubscriptions.get(_.panel_id);
              _ &&
                ((_.m_lastMeasurement = {
                  m_flRawPanelHeight: _.panel_height,
                  m_flTransformScaleDuringMeasure:
                    _.transform_scale_during_measure,
                }),
                _.m_Callbacks.Dispatch(
                  Object.assign(Object.assign({}, _.m_lastMeasurement), {
                    m_bStale: !1,
                  }),
                ));
            }
          }
          QueueSubscriptionUpdates() {
            return (0, _._)(this, void 0, void 0, function* () {
              if (this.m_bHasPendingSubscriptionUpdates) return;
              (this.m_bHasPendingSubscriptionUpdates = !0),
                yield this.m_mailbox.WaitForConnect();
              const _ = !this.m_bInitializedPanelSubscriptions;
              if (
                this.m_setPanelSubscriptionsToAdd.size > 0 ||
                this.m_setPanelSubscriptionsToRemove.size > 0 ||
                _
              ) {
                const _ = {
                  type: "update_panel_height_subscriptions",
                  subscribe_panel_ids: Array.from(
                    this.m_setPanelSubscriptionsToAdd,
                  ),
                  unsubscribe_panel_ids: Array.from(
                    this.m_setPanelSubscriptionsToRemove,
                  ),
                  unsubscribe_all: _,
                };
                _.Debug(`Sending ${_.type} message:`, _),
                  this.m_mailbox.SendMessage("scene_graph", _);
              }
              this.m_setPanelSubscriptionsToAdd.clear(),
                this.m_setPanelSubscriptionsToRemove.clear(),
                (this.m_bHasPendingSubscriptionUpdates = !1),
                (this.m_bInitializedPanelSubscriptions = !0);
            });
          }
          requestSGTransform(_) {
            return (0, _._)(
              this,
              arguments,
              void 0,
              function* (_, _ = 0, _ = 0) {
                if (!_ || _.toLowerCase().includes("undefined"))
                  return Promise.reject("Invalid transform ID");
                const _ = {
                    type: "transform_request",
                    _: _,
                    flPushDistance: _,
                    timeoutSec: _,
                  },
                  _ = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    _,
                    _,
                    "transform_response",
                  );
                return _._ == _ && _.transform
                  ? _.transform
                  : Promise.reject("requestSGTransform failed");
              },
            );
          }
          requestSGTransformRelative(_, _) {
            return (0, _._)(this, arguments, void 0, function* (_, _, _ = 0) {
              var _;
              if (
                !_ ||
                _.toLowerCase().includes("undefined") ||
                !_ ||
                _.toLowerCase().includes("undefined")
              )
                return Promise.reject("Invalid transform ID");
              const _ = {
                  type: "transform_request",
                  from_id: _,
                  _: _,
                  timeoutSec: _,
                },
                _ = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  _,
                  _,
                  "transform_response",
                );
              return _.from_id == _ && _._ == _ && _.transform
                ? _.transform
                : Promise.reject(
                    null !== (_ = _.error) && void 0 !== _
                      ? _
                      : "requestSGTransform failed",
                  );
            });
          }
        }
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
        (0, _._)([_], _.prototype, "OnPanelHeightUpdate", null),
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
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        function _(
          _,
          _ = {
            _: 0,
            _: 0,
          },
        ) {
          return Object.assign(Object.assign({}, _), _);
        }
        function _(
          _,
          _ = {
            _: 0,
            _: 0,
            _: 0,
          },
        ) {
          return Object.assign(Object.assign({}, _), _);
        }
        function _(_, _) {
          return Object.assign(Object.assign({}, _), _);
        }
        function _(_) {
          if (_) return [_._, _._];
        }
        function _(_) {
          var _;
          return null ===
            (_ = (function (_) {
              if (_) return [_._, _._, _._];
            })(_)) || void 0 === _
            ? void 0
            : _.join(" ");
        }
        function _(_) {
          if (_) return _._ + " " + _._ + " " + _._ + " " + _._;
        }
        function _(_) {
          return _ && void 0 !== _._;
        }
        function _(_) {
          return null == _
            ? void 0
            : "number" == typeof _
              ? _
              : (_ = _) && void 0 !== _._
                ? [_.channel, _.interp, _.from, _._]
                : void 0;
          var _;
        }
        function _(_) {
          return _(_)
            ? [
                _.channel,
                _.interp,
                _.from ? _.from[0] : void 0,
                _.from ? _.from[1] : void 0,
                _.from ? _.from[2] : void 0,
                _._ ? _._[0] : void 0,
                _._ ? _._[1] : void 0,
                _._ ? _._[2] : void 0,
              ]
            : void 0;
        }
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
        class _ extends _.Component {
          constructor(_) {
            var _;
            super(_),
              (this.m_domRef = _.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = 0);
            const _ = _._ && "string" == typeof _._;
            this.props.explicitSGID
              ? (this.m_SGID = this.props.explicitSGID)
              : _ &&
                this.BCanUseStableSGIDs() &&
                _.s_mapStableSGIDsForIDs.has(_._) &&
                ((this.m_SGID = _.s_mapStableSGIDsForIDs.get(_._)),
                _.s_mapCurrentlyMountedSGIDs.has(this.m_SGID) &&
                  (console.error(
                    `Constructing SGBase component (ID="${_._}") at the same time another component with that SGID is mounted. Using a new SGID.`,
                    this.m_SGID,
                  ),
                  (this.m_SGID = 0))),
              0 == this.m_SGID &&
                ((this.m_SGID =
                  null !==
                    (_ =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.NextSGID()) && void 0 !== _
                    ? _
                    : 0),
                _ &&
                  this.BCanUseStableSGIDs() &&
                  _.s_mapStableSGIDsForIDs.set(_._, this.m_SGID));
          }
          setBuildNodeOverride(_) {
            this.m_buildNodeOverride = _;
          }
          getSGID() {
            return this.m_SGID;
          }
          getNodeType() {
            return "base";
          }
          getID() {
            return this.props._;
          }
          createSgNode(_) {
            return _(this.getNodeType(), _);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            _.s_mapCurrentlyMountedSGIDs.set(this.m_SGID, this),
              this.m_buildNodeOverride &&
                (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              _();
          }
          componentDidUpdate() {
            _();
          }
          componentWillUnmount() {
            var _;
            _.s_mapCurrentlyMountedSGIDs.get(this.m_SGID) == this &&
              _.s_mapCurrentlyMountedSGIDs.delete(this.m_SGID),
              (_ = this.m_SGID),
              _.push(_),
              _(),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          PanelContextValue() {}
          BCanUseStableSGIDs() {
            return !1;
          }
          render() {
            return _.createElement(
              _.Provider,
              {
                value: this.PanelContextValue(),
              },
              _.cloneElement(this.internalRender(), {
                _: this.props._,
                "vsg-type": this.getNodeType(),
                sgid: this.m_SGID,
                ref: this.m_domRef,
              }),
            );
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? _.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        (_.s_mapStableSGIDsForIDs = new Map()),
          (_.s_mapCurrentlyMountedSGIDs = new Map());
        const _ = _.createContext(void 0);
        var _, _;
        !(function (_) {
          (_[(_.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (_[(_.Locomotion = 2)] = "Locomotion"),
            (_[(_.QuickRecenter = 4)] = "QuickRecenter");
        })(_ || (_ = {}));
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "constructglobals";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties["scene-color-mult"] = _(
                  this.props["scene-color-mult"],
                )),
                (_.properties["floor-color-mult"] = _(
                  this.props["floor-color-mult"],
                )),
                (_.properties["scene-reflection-mult"] = _(
                  this.props["scene-reflection-mult"],
                )),
                (_.properties["skydome-mult"] = _(this.props["skydome-mult"])),
                (_.properties["aurora-blur"] = _(this.props["aurora-blur"])),
                (_.properties["roomview-mult"] = _(
                  this.props["roomview-mult"],
                )),
                (_.properties["allowed-action-sets"] = this.props[
                  "allowed-action-sets"
                ].reduce((_, _) => _ | _, 0)),
                (_.properties["inhibit-bounds-rendering"] =
                  this.props["inhibit-bounds-rendering"]),
                (_.properties["pause-notifications"] =
                  this.props["pause-notifications"]),
                (_.properties["roomview-enable-override"] =
                  this.props["roomview-enable-override"]),
                (_.properties["systemlayer-msaa-enable-override"] =
                  this.props["systemlayer-msaa-enable-override"]),
                (_.properties["construct-alpha-override"] =
                  this.props["construct-alpha-override"]),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return Array.isArray(this.props.color) &&
                this.props.color.length > 1
                ? "tint-anim"
                : "tint";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                this.props.color
                  ? "string" == typeof this.props.color
                    ? (_.properties.color = this.props.color)
                    : Array.isArray(this.props.color)
                      ? (this.props.color.length > 0 &&
                        "string" == typeof this.props.color[0]
                          ? (_.properties.color =
                              this.props.color.length > 1
                                ? this.props.color
                                : this.props.color[0])
                          : (_.properties.color = this.props.color
                              .map((_) => [_._, _._, _._])
                              .reduce((_, _) => _.concat(_), [])),
                        (_.properties["animation-seconds"] =
                          this.props.animationSeconds))
                      : (_.properties.color = [
                          this.props.color._,
                          this.props.color._,
                          this.props.color._,
                        ])
                  : (_.properties.color = [1, 1, 1]),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "opacity";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (_.properties.opacity = _(this.props.value)), [_, _];
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "mountable";
            }
            buildNode(_, _) {
              return [_, this.createSgNode(_)];
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "mountedscenegraph";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties.mountable_id = _(this.props.mountedId)), [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (_) {
            (_[(_.Seated = 0)] = "Seated"),
              (_[(_.Standing = 1)] = "Standing"),
              (_[(_.Raw = 2)] = "Raw");
          })(_ || (_ = {}));
        class _ extends _ {
          constructor(_) {
            super(_);
            if (
              (void 0 === _.parent_path ? 0 : 1) +
                (void 0 === _.parent_origin ? 0 : 1) +
                (void 0 === _.parent_id ? 0 : 1) >
              1
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            var _, _, _;
            let _, _, _;
            var _, _;
            let _;
            this.props.transform
              ? ((_ = _(this.props.transform.translation)),
                (_ = this.props.transform.rotation),
                (_ = this.props.transform.scale))
              : ((_ = _(this.props.translation)
                  ? null === (_ = _(this.props.translation)) || void 0 === _
                    ? void 0
                    : _.join(" ")
                  : _(
                      _(this.props.translation, {
                        _: 0,
                        _: 0,
                        _: 0,
                      }),
                    )),
                (_ =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (function (_) {
                        if (void 0 === _) return;
                        let _ = 0.5 * _._,
                          _ = 0.5 * _._,
                          _ = 0.5 * _._,
                          _ = Math.cos(_),
                          _ = Math.cos(_),
                          _ = Math.cos(_),
                          _ = Math.sin(_),
                          _ = Math.sin(_),
                          _ = Math.sin(_);
                        return {
                          _: _ * _ * _ + _ * _ * _,
                          _: _ * _ * _ + _ * _ * _,
                          _: _ * _ * _ - _ * _ * _,
                          _: _ * _ * _ - _ * _ * _,
                        };
                      })(
                        ((_ = _(this.props.rotation, {
                          _: 0,
                          _: 0,
                          _: 0,
                        })),
                        (_ = Math._ / 180),
                        {
                          _: _._ * _,
                          _: _._ * _,
                          _: _._ * _,
                        }),
                      )),
                (_ =
                  "number" == typeof this.props.scale
                    ? {
                        _: this.props.scale,
                        _: this.props.scale,
                        _: this.props.scale,
                      }
                    : _(this.props.scale, {
                        _: 1,
                        _: 1,
                        _: 1,
                      }))),
              null !=
                (null === (_ = this.props) || void 0 === _
                  ? void 0
                  : _.parent_origin) &&
                (_ =
                  _[
                    null === (_ = this.props) || void 0 === _
                      ? void 0
                      : _.parent_origin
                  ]);
            let _ = _(_),
              _ = _(_);
            return _.createElement(
              "vsg-transform",
              {
                translation: _,
                rotation: _,
                scale: _,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": _,
                "parent-id": this.props.parent_id,
                "frame-resize-scale-factor":
                  this.props.frame_resize_scale_factor,
              },
              this.props.children,
            );
          }
        }
        _ = (_) => {
          throw new Error(_.errorStr);
        };
        var _;
        class _ extends _.Component {
          constructor(_) {
            super(_), (this.state = {}), (this.state.lastErrorKey = _.errorKey);
          }
          static InstallErrorReportingStore(_) {
            this.sm_ErrorReportingStore = _;
          }
          componentDidCatch(_, _) {
            const _ = _.sm_ErrorReportingStore;
            _
              ? __webpack_require__
                  .ReportError(_, {
                    strComponentStack: _.componentStack || void 0,
                  })
                  .then(
                    (_) =>
                      _ &&
                      this.setState({
                        identifierHash: _.identifierHash,
                      }),
                  )
              : console.warn(
                  "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
                ),
              this.setState({
                error: {
                  error: _,
                  info: _,
                },
                lastErrorKey: this.props.errorKey,
              });
          }
          Reset() {
            this.setState({
              error: void 0,
            });
          }
          render() {
            const { children: _, fallback: _, errorKey: _ } = this.props,
              { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
            return _ && _ == _
              ? void 0 !== _
                ? "function" == typeof _
                  ? _(_.error)
                  : _
                : _.sm_ErrorReportingStore &&
                    _.sm_ErrorReportingStore.reporting_enabled
                  ? _.createElement(_, {
                      error: _,
                      identifierHash: _,
                      store: _.sm_ErrorReportingStore,
                      onRefresh: this.Reset,
                    })
                  : _.createElement(_, {
                      error: _,
                      onDismiss: this.Reset,
                    })
              : _ || null;
          }
        }
        function _(_) {
          const { enabled: _ } = _,
            [_, _] = _.useState(_),
            [_, _] = _.useState(6);
          _.useEffect(() => {
            const _ = setTimeout(() => {
              _ &&
                (_ > 1
                  ? _(_ - 1)
                  : (console.warn(
                      "Auto-reloading due to triggered ErrorBoundary...",
                    ),
                    window.location.reload()));
            }, 1e3);
            return () => clearTimeout(_);
          }, [_, _]);
          const _ = _.useCallback(() => {
            console.log("Auto-reload canceled."), _(!1);
          }, []);
          return (
            _.useEffect(() => {
              const _ = () => {
                _();
              };
              return (
                document.addEventListener("click", _),
                () => document.removeEventListener("click", _)
              );
            }, [_]),
            _
              ? _
                ? _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      _,
                      null,
                      "Reloading UI in ",
                      _,
                      " seconds...",
                    ),
                    "   ",
                    _.createElement(
                      "span",
                      {
                        style: {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                        onClick: _,
                      },
                      "Cancel",
                    ),
                    _.createElement("br", null),
                  )
                : _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(_, null, "Auto-reload canceled."),
                    "   ",
                    _.createElement(
                      "span",
                      {
                        style: {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                        onClick: () => window.location.reload(),
                      },
                      "Reload now",
                    ),
                    _.createElement("br", null),
                  )
              : null
          );
        }
        (0, _._)([_], _.prototype, "Reset", null);
        const _ = ({ error: _, onDismiss: _ }) => {
            let _ = _.error ? _.error.stack : "Stack missing",
              _ = _.info ? _.info.componentStack : "",
              _ = (_.error && _.error.message) || "unknown error";
            const _ = _.useContext(_);
            return _.createElement(
              _,
              null,
              _.createElement(_, null, 'Error: "', _, '"'),
              "   ",
              _.createElement(
                "span",
                {
                  style: {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                  onClick: _,
                },
                "(x) Dismiss",
              ),
              _.createElement("br", null),
              _.createElement(_, {
                enabled: null == _,
              }),
              _.createElement(_, null, _),
              _.createElement(
                _,
                null,
                "The error occurred while rendering:",
                _,
              ),
            );
          },
          _ = (_) => {
            const { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
              _ = (_.error && _.error.message) || "unknown error",
              _ = `${_.product}_${_.version}_${_}`,
              _ = _.useContext(_);
            return _.createElement(
              _,
              null,
              _.createElement(
                _,
                null,
                "Something went wrong while displaying this content. ",
                _.createElement(
                  "span",
                  {
                    style: {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                    onClick: _,
                  },
                  "Refresh",
                ),
              ),
              _.createElement(_, {
                enabled: null == _,
              }),
              _.createElement(_, null, "Error Reference: ", _),
              _.createElement(_, null, _),
            );
          };
        function _(_) {
          return _.useContext(_) || _() != _.Overlay
            ? _.createElement(_, Object.assign({}, _))
            : _.createElement(
                _,
                {
                  parent_path: "/user/head",
                  translation: {
                    _: -0.5,
                    _: -0.9,
                  },
                  rotation: {
                    _: -20,
                  },
                },
                _.createElement(
                  _,
                  {
                    debug_name: "vr_error_container",
                    meters_per_pixel: 75e-5,
                    origin: {
                      _: -0.5,
                      _: -1,
                    },
                    interactive: !0,
                  },
                  _.createElement(_, Object.assign({}, _)),
                ),
              );
        }
        const _ = ({ children: _ }) =>
            _.createElement(
              "div",
              {
                style: {
                  overflow: "auto",
                  marginLeft: "15px",
                  color: "white",
                  fontSize: "16px",
                  userSelect: "auto",
                  backgroundColor: "black",
                },
                className: "ErrorBoundary",
              },
              _,
            ),
          _ = ({ children: _ }) =>
            _.createElement(
              "h1",
              {
                style: {
                  fontSize: "20px",
                  display: "inline-block",
                  marginTop: "15px",
                  userSelect: "auto",
                },
              },
              _,
            ),
          _ = ({ children: _ }) =>
            _.createElement(
              "pre",
              {
                style: {
                  marginTop: "15px",
                  opacity: 0.7,
                  userSelect: "auto",
                },
              },
              _,
            ),
          _ = _.createContext({
            frame: void 0,
            page: void 0,
          });
        function _(_) {
          if (_) return [_._, _._];
        }
        var _, _, _, _, _, _;
        function _(_) {
          switch (_) {
            case _.TopLeft:
              return {
                _: -1,
                _: 1,
              };
            case _.TopCenter:
              return {
                _: 0,
                _: 1,
              };
            case _.TopRight:
              return {
                _: 1,
                _: 1,
              };
            case _.CenterLeft:
              return {
                _: -1,
                _: 0,
              };
            case _.Center:
              return {
                _: 0,
                _: 0,
              };
            case _.CenterRight:
              return {
                _: 1,
                _: 0,
              };
            case _.BottomLeft:
              return {
                _: -1,
                _: -1,
              };
            case _.BottomCenter:
              return {
                _: 0,
                _: -1,
              };
            case _.BottomRight:
              return {
                _: 1,
                _: -1,
              };
          }
        }
        !(function (_) {
          (_[(_.TopLeft = 0)] = "TopLeft"),
            (_[(_.TopCenter = 1)] = "TopCenter"),
            (_[(_.TopRight = 2)] = "TopRight"),
            (_[(_.CenterLeft = 3)] = "CenterLeft"),
            (_[(_.Center = 4)] = "Center"),
            (_[(_.CenterRight = 5)] = "CenterRight"),
            (_[(_.BottomLeft = 6)] = "BottomLeft"),
            (_[(_.BottomCenter = 7)] = "BottomCenter"),
            (_[(_.BottomRight = 8)] = "BottomRight");
        })(_ || (_ = {})),
          (function (_) {
            (_[(_.Auto = 0)] = "Auto"), (_[(_.SingleTap = 1)] = "SingleTap");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Mono = 0)] = "Mono"),
              (_[(_.Parallel = 1)] = "Parallel"),
              (_[(_.Crossed = 2)] = "Crossed"),
              (_[(_.Panorama = 3)] = "Panorama"),
              (_[(_.StackedPanorama = 4)] = "StackedPanorama");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Visible = 0)] = "Visible"),
              (_[(_.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (_[(_.Hidden = 2)] = "Hidden"),
              (_[(_.InvisibleButIntersectable = 3)] =
                "InvisibleButIntersectable");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 0)] = "Default"),
              (_[(_.Disabled = 1)] = "Disabled"),
              (_[(_.Low = 2)] = "Low");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.PixelOffset = 0)] = "PixelOffset"),
              (_[(_.ScaleAndCenter = 1)] = "ScaleAndCenter");
          })(_ || (_ = {}));
        class _ extends _ {
          constructor(_) {
            super(_),
              (this.m_Rect = {
                _: 0,
                _: 0,
                width: 0,
                height: 0,
              }),
              (this.m_nEmbeddedIndex = void 0),
              (this.m_LastDOMContentSize = void 0),
              (this.m_DOMContentSizeChangedCallbacks = new _()),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const _ =
                void 0 !== this.props.width || void 0 !== this.props.height,
              _ = void 0 !== this.props.meters_per_pixel,
              _ = void 0 !== this.props.target_dpi_panel_id,
              _ =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name,
              _ =
                void 0 !== this.props.subview_parent_panel_id ||
                void 0 !== this.props.subview_parent_panel_key;
            if (
              _ &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const _ = [_, _, _, _, _].filter((_) => _).length,
              _ =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
            if (0 == _)
              throw new Error(
                `Panel requires one of the following props: ${_}.`,
              );
            if (_ > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${_}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          get lastDOMContentSize() {
            return this.m_LastDOMContentSize;
          }
          RegisterForDOMContentSizeChangedCallback(_) {
            return this.m_DOMContentSizeChangedCallbacks.Register(_);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getExternalOverlayKey() {
            return this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            _.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = _.Current().addEmbeddedPanelUVs(this)),
              (_.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate(),
              _.s_setAllPanels.add(this);
          }
          onResizeObserved(_, _) {
            _.Current().forceLayoutUpdate(),
              (this.m_LastDOMContentSize = {
                clientWidth: _[0].contentRect.width,
                clientHeight: _[0].contentRect.height,
              }),
              this.m_DOMContentSizeChangedCallbacks.Dispatch(
                this.m_LastDOMContentSize,
              );
          }
          componentWillUnmount() {
            _.s_setAllPanels.delete(this),
              this.m_resizeObserver &&
                (this.m_resizeObserver.disconnect(),
                (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (_.s_bPanelsAreDirty = !0),
              _.Current().removeEmbeddedPanelUVs(this),
              this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
              super.componentWillUnmount();
          }
          onPanelMouseDown() {
            this.startOverDragBlocking();
          }
          startOverDragBlocking() {
            if (this.m_bOverdragBlocking) return;
            const _ = document.body.getBoundingClientRect(),
              _ = this.getCurrentRootElement().getBoundingClientRect();
            this.createOverdragBlockingElement(0, 0, _.width, _._),
              this.createOverdragBlockingElement(
                0,
                _._ + _.height,
                _.width,
                _.height - _.height - _._,
              ),
              this.createOverdragBlockingElement(0, _._, _._, _.height),
              this.createOverdragBlockingElement(
                _._ + _.width,
                _._,
                _.width - _.width - _._,
                _.height,
              ),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              (this.m_bOverdragBlocking = !0);
          }
          stopOverDragBlocking() {
            this.m_bOverdragBlocking &&
              (this.m_overdragBlockingElements.forEach((_) => {
                document.body.removeChild(_);
              }),
              (this.m_overdragBlockingElements = []),
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(_, _, _, _) {
            let _ = document.createElement("div");
            (_.style.position = "absolute"),
              (_.style.top = _ + "px"),
              (_.style.left = _ + "px"),
              (_.style.width = _ + "px"),
              (_.style.height = _ + "px"),
              (_.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(_),
              document.body.appendChild(_);
          }
          onWindowMouseUp(_) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var _;
            return null !== (_ = this.props.visibility) && void 0 !== _
              ? _
              : _.Visible;
          }
          buildNode(_, _) {
            var _, _, _, _, _, _, _, _, _, _, _, _;
            if (
              !(
                this.visibility == _.Visible ||
                this.visibility == _.InvisibleButIntersectable
              )
            )
              return [_, null];
            let _ = Object.assign(Object.assign({}, _), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              _ = this.createSgNode(_),
              _ = {
                _: 0,
                _: 0,
              };
            _ =
              "object" == typeof this.props.origin
                ? _(this.props.origin)
                : _(this.props.origin);
            const _ = this.props.overlay_key,
              _ = _();
            _ && _.length > 0
              ? (_.properties.key = _)
              : _
                ? (_.properties.key = _)
                : (_.properties.overlay_handle =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlay.ThisOverlayHandle()),
              this.m_UVsMin &&
                (_.properties.uv_min =
                  null !== (_ = _(this.m_UVsMin)) && void 0 !== _ ? _ : void 0),
              this.m_UVsMax &&
                (_.properties.uv_max =
                  null !== (_ = _(this.m_UVsMax)) && void 0 !== _ ? _ : void 0);
            const _ = 1 / _.Current().m_fCurrentScale;
            let _ = this.props.frame_resize_scale_factor;
            return (
              this.props.is_frame_page_main_panel && (_ = null != _ ? _ : 1),
              (_.properties.width =
                null !== (_ = this.props.width) && void 0 !== _ ? _ : void 0),
              (_.properties.height =
                null !== (_ = this.props.height) && void 0 !== _ ? _ : void 0),
              (_.properties["scale-index"] =
                null !== (_ = this.props.scale_index) && void 0 !== _ ? _ : 0),
              (_.properties["min-width"] =
                null !== (_ = this.props.min_width) && void 0 !== _
                  ? _
                  : void 0),
              (_.properties["target-width-anchor-id"] = _(
                this.props.target_width_anchor_id,
              )),
              (_.properties["target-dpi-panel-id"] = _(
                this.props.target_dpi_panel_id,
              )),
              (_.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (_.properties["meters-per-pixel"] =
                null != this.props.meters_per_pixel
                  ? this.props.meters_per_pixel * _
                  : void 0),
              (_.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (_.properties["subview-parent-panel-id"] =
                this.props.subview_parent_panel_id),
              (_.properties["subview-sizing"] = this.props.subview_sizing),
              (_.properties.curvature = this.props.curvature),
              (_.properties["curvature-origin-id"] = _(
                this.props.curvature_origin_id,
              )),
              (_.properties.spherical = this.props.spherical),
              (_.properties.interactive = this.props.interactive),
              (_.properties.scrollable = this.props.scrollable),
              (_.properties.undocked = this.props.undocked),
              (_.properties.modal = this.props.modal),
              (_.properties["only-visible-with-laser"] =
                this.props.only_visible_with_laser),
              (_.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (_.properties["lasermouse-filtering"] =
                null === (_ = this.props) || void 0 === _
                  ? void 0
                  : _.lasermouse_filtering),
              (_.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (_.properties["hide-laser-intersection"] =
                null === (_ = this.props) || void 0 === _
                  ? void 0
                  : _.hide_laser_intersection),
              (_.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (_.properties["is-grab-handle"] = this.props.is_grab_handle),
              (_.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (_.properties.origin = _(_)),
              (_.properties.debug_name = this.props.debug_name),
              (_.properties.sampler = this.props.sampler),
              (_.properties.reflect = this.props.reflect),
              (_.properties.stereoscopy = this.props.stereoscopy),
              (_.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (_.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (_.properties["texture-id"] = _(this.props.texture_id)),
              (_.properties["sort-order"] = this.props.sort_order),
              (_.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (_.properties["no-depth-write"] = this.props.no_depth_write),
              (_.properties["no-depth-test"] = this.props.no_depth_test),
              (_.properties.visibility = this.visibility),
              (_.properties["frame-resize-scale-factor"] = _),
              (_.properties["main-panel-for-frame-page"] =
                this.props.is_frame_page_main_panel),
              (_.properties["steam-input-appid"] =
                null === (_ = this.inputFocusParams) || void 0 === _
                  ? void 0
                  : _.unSteamInputAppID),
              (_.properties["vr-input-pid"] =
                null === (_ = this.inputFocusParams) || void 0 === _
                  ? void 0
                  : _.unVRInputPID),
              (_.properties["can-take-keyboard-focus"] =
                null ===
                  (_ =
                    null === (_ = this.inputFocusParams) || void 0 === _
                      ? void 0
                      : _.bCanTakeKeyboardFocus) ||
                void 0 === _ ||
                _),
              [_, _]
            );
          }
          scaleLocalUVToGlobal(_) {
            if (!this.m_UVsMin || !this.m_UVsMax) return;
            const _ = this.m_UVsMax._ - this.m_UVsMin._,
              _ = this.m_UVsMax._ - this.m_UVsMin._;
            return {
              _: this.m_UVsMin._ + _ * _._,
              _: this.m_UVsMin._ + _ * _._,
            };
          }
          updateLayoutValues() {
            if (this.props.overlay_key)
              return (
                (this.m_UVsMin = this.props.uv_min),
                void (this.m_UVsMax = this.props.uv_max)
              );
            this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
            let _ = this.getCurrentRootElement().ownerDocument.defaultView;
            _ &&
              ((this.m_UVsMin = {
                _: this.m_Rect._ / _.innerWidth,
                _: this.m_Rect._ / _.innerHeight,
              }),
              (this.m_UVsMax = {
                _: (this.m_Rect._ + this.m_Rect.width) / _.innerWidth,
                _: (this.m_Rect._ + this.m_Rect.height) / _.innerHeight,
              }));
          }
          PanelContextValue() {
            return this;
          }
          BCanUseStableSGIDs() {
            return !0;
          }
          internalRender() {
            return _.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == _.Hidden ? "none" : null,
                },
              },
              _.createElement(_, null, this.props.children),
              this.props.is_frame_page_main_panel &&
                _.createElement(_, {
                  panel: this,
                  panelID: this.getID(),
                }),
            );
          }
          get inputFocusParams() {
            return Object.assign(
              {
                bCanTakeKeyboardFocus: this.props.interactive,
              },
              this.props.inputFocusParams,
            );
          }
          get isInputFocusable() {
            var _, _, _;
            return (
              (null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unSteamInputAppID) ||
              (null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unVRInputPID) ||
              (null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.bCanTakeKeyboardFocus)
            );
          }
        }
        function _(_) {
          const { panel: _, panelID: _ } = _,
            { page: _ } = _.useContext(_);
          return (
            _.useEffect(() => {
              const { Unset: _ } = null == _ ? void 0 : _.SetMainPanel(_);
              return _;
            }, [_, _, _]),
            null
          );
        }
        (_.s_bPanelsAreDirty = !1),
          (_.s_setAllPanels = new _._()),
          (0, _._)([_], _.prototype, "onResizeObserved", null),
          (0, _._)([_], _.prototype, "onPanelMouseDown", null),
          (0, _._)([_], _.prototype, "onWindowMouseUp", null),
          (0, _._)([_], _.prototype, "buildNode", null),
          (window.s_setAllPanels = _.s_setAllPanels);
        const _ = new _("EmbeddedPixels");
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        !(function (_) {
          (_[(_.Canvas = 0)] = "Canvas"), (_[(_.Image = 1)] = "Image");
        })(_ || (_ = {}));
        class _ extends _.Component {
          static get IsSceneGraphApp() {
            return null !== _.Current();
          }
          static Current() {
            return _.s_Current;
          }
          constructor(_) {
            var _;
            super(_),
              (this.m_DomRef = null),
              (this.m_scalingDomRef = null),
              (this.m_DebugPointerRef = null),
              (this.m_Observer = null),
              (this.m_nEmbeddedDataWidth = 0),
              (this.m_mapPanels = new Map()),
              (this.m_rAvailableEmbeddedIndicesQueue = []),
              (this.m_rEmbeddedIndicesToClear = []),
              (this.m_fCurrentScale = 1),
              (this.m_CanvasRef = null),
              (this.m_CanvasContext = null),
              (this.m_Pixels = null),
              (this.m_nDirtyXMin = -1),
              (this.m_nDirtyXMax = -1),
              (this.m_EmbeddedDataImgRef = null),
              (this.m_EmbeddedDataImgRGBBuffer = null),
              (_.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: (
                  null === (_ = VRHTML.VRUtil) || void 0 === _
                    ? void 0
                    : _.BSupportsCEFCanvas()
                )
                  ? _.Canvas
                  : _.Image,
              }),
              (this.m_DomRef = _.createRef()),
              (this.m_scalingDomRef = _.createRef()),
              (this.m_CanvasRef = _.createRef()),
              (this.m_EmbeddedDataImgRef = _.createRef()),
              (this.m_DebugPointerRef = _.createRef());
          }
          toggleDebugPointer() {
            this.setState({
              bShowDebugPointer: !this.state.bShowDebugPointer,
            });
          }
          onMouseMove(_) {
            this.state.bShowDebugPointer &&
              this.m_DebugPointerRef.current &&
              (this.m_DebugPointerRef.current.style.transform =
                "translateX( " +
                _.clientX +
                "px ) translateY( " +
                _.clientY +
                "px )");
          }
          forceLayoutUpdate() {
            (_.s_bPanelsAreDirty = !0),
              this.setState({
                nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
              });
          }
          componentDidMount() {
            let _ = this.m_DomRef.current.ownerDocument,
              _ = _.defaultView;
            _.body.classList.add("SGApp"),
              document.documentElement.classList.add("VROverlay"),
              (window.SGApp = this),
              (this.m_nEmbeddedDataWidth = _.innerWidth);
            let _ = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let _ = 0; _ < _; _++)
              this.m_rAvailableEmbeddedIndicesQueue.push(_);
            var _, _, _;
            _.addEventListener("mousemove", this.onMouseMove),
              (this.m_Observer = new MutationObserver(this.onMutation)),
              this.m_Observer.observe(this.m_DomRef.current, {
                attributes: !0,
                attributeFilter: ["sg-forced-update-number", "overlay-key"],
                childList: !0,
                subtree: !0,
              }),
              this.createEmbeddedData(),
              _.addEventListener("load", this.forceLayoutUpdate),
              _.fonts.ready.then(() =>
                this.setState({
                  bFontsLoaded: !0,
                }),
              ),
              (_.forceLayoutUpdate = this.forceLayoutUpdate),
              (_.toggleDebugPointer = this.toggleDebugPointer),
              (this.props.owning_overlay_key || this.props.web_secret) &&
                ((_ = this.props.owning_overlay_key),
                (_ = this.m_DomRef.current),
                (_ = this.props.web_secret),
                (_ = _),
                (_ = _),
                (_ = _),
                console.log("Setting owning overlay key to " + _));
          }
          componentWillUnmount() {
            let _ = this.m_DomRef.current.ownerDocument;
            _.body.classList.remove("SGApp"),
              document.documentElement.classList.remove("VROverlay"),
              this.m_Observer && this.m_Observer.disconnect(),
              _.removeEventListener("mousemove", this.onMouseMove);
          }
          render() {
            const _ = this.state.eRenderMode == _.Image,
              _ = this.state.eRenderMode == _.Canvas;
            let _ = [];
            return (
              this.state.bShowDebugPointer &&
                __webpack_require__.push("ShowDebugPointer"),
              _.createElement(
                "vsg-app",
                {
                  class: __webpack_require__.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                _.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                _ &&
                  _.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: _.k_EmbeddedDataRows,
                  }),
                _ &&
                  _.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: _.k_EmbeddedDataRows,
                  }),
                _.createElement(
                  "div",
                  {
                    className: "AppSceneGraph",
                    ref: this.m_scalingDomRef,
                  },
                  this.state.bFontsLoaded && this.props.children,
                ),
              )
            );
          }
          addEmbeddedPanelUVs(_) {
            if (0 !== this.m_rAvailableEmbeddedIndicesQueue.length)
              return (
                this.m_mapPanels.set(_.getSGID(), _),
                this.m_rAvailableEmbeddedIndicesQueue.shift()
              );
          }
          removeEmbeddedPanelUVs(_) {
            if (!this.m_mapPanels.has(_.getSGID())) return;
            this.m_mapPanels.delete(_.getSGID());
            const _ = _.getEmbeddedIndex();
            null != _ &&
              (this.m_rAvailableEmbeddedIndicesQueue.push(_),
              this.m_rEmbeddedIndicesToClear.push(_));
          }
          onMutation(_, _) {
            this.updateAllPanelBounds();
          }
          createEmbeddedData() {
            var _;
            this.state.eRenderMode == _.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    null === (_ = VRHTML.VRUtil) || void 0 === _
                      ? void 0
                      : _.CreateEmbeddedRGBScanline(
                          this.m_nEmbeddedDataWidth,
                          1,
                          4,
                        )))
              : this.state.eRenderMode == _.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                null != this.m_CanvasContext &&
                  ((this.m_CanvasContext.globalCompositeOperation = "copy"),
                  (this.m_CanvasContext.imageSmoothingEnabled = !1),
                  null === this.m_Pixels &&
                    (this.m_Pixels = this.m_CanvasContext.createImageData(
                      this.m_nEmbeddedDataWidth,
                      _.k_EmbeddedDataRows,
                    )))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let _ = this.m_DomRef.current.ownerDocument.defaultView,
              _ = this.m_scalingDomRef.current.getBoundingClientRect(),
              _ = _.width / this.m_fCurrentScale,
              _ = _.height / this.m_fCurrentScale,
              _ = {
                _: _.innerWidth / _,
                _: _.innerHeight / _,
              },
              _ = Math.min(_._, _._, 1);
            _ != this.m_fCurrentScale &&
              (1 != _
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + _ + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = _),
              (_.s_bPanelsAreDirty = !0)),
              _.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((_) => _.updateLayoutValues()),
                _(),
                (_.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            var _;
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((_) => {
                  let _ = 1 + 3 * _;
                  for (let _ = 0; _ < 3; _++) this.setPixel(_ + _, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                _.Debug("UPDATE EMBEDDED DATA ------------------"),
                this.m_mapPanels.forEach((_, _) => {
                  const _ = _.m_Rect._,
                    _ = _.m_Rect._ + _.m_Rect.width,
                    _ = _.m_Rect._,
                    _ = _.m_Rect._ + _.m_Rect.height,
                    _ = _.getEmbeddedIndex();
                  if (null == _) return;
                  const _ = 1 + 3 * _;
                  let _ = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    _ = !1;
                  if (_.isExternal() || _ >= _ || _ >= _)
                    for (let _ = 0; _ < 3; _++)
                      this.setPixel(_ + 1, 0, 0, 0, 0);
                  else
                    (_ = !0),
                      (_[0] = (65280 & _) >> 8),
                      (_[1] = 255 & _),
                      (_[2] = 254),
                      (_[3] = (65280 & _) >> 8),
                      (_[4] = 255 & _),
                      (_[5] = 255 & _),
                      (_[6] = (65280 & _) >> 8),
                      (_[7] = 255 & _),
                      (_[8] = (65280 & _) >> 8),
                      this.setPixel(_, _[0], _[1], _[2]),
                      this.setPixel(_ + 1, _[3], _[4], _[5]),
                      this.setPixel(_ + 2, _[6], _[7], _[8]);
                  _.Debug(
                    "panel",
                    _ ? "" : "XX",
                    _.props.debug_name,
                    "uvs",
                    _,
                    _,
                    _,
                    _,
                    "nPixelOffset",
                    _,
                    "emIdx",
                    _,
                    _,
                    _.getCurrentRootElement(),
                  );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == _.Image)
              ) {
                const _ =
                  null ===
                    (_ =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRUtil) || void 0 === _
                    ? void 0
                    : _.GetEmbeddedScanlineAsURIImage(
                        this.m_nEmbeddedDataWidth,
                        1,
                        4,
                      );
                null != _ && (this.m_EmbeddedDataImgRef.current.src = _);
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == _.Canvas
              ) {
                let _ = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
                this.m_CanvasContext.putImageData(
                  this.m_Pixels,
                  0,
                  0,
                  this.m_nDirtyXMin,
                  0,
                  _,
                  this.m_Pixels.height,
                ),
                  (this.m_nDirtyXMin = -1),
                  (this.m_nDirtyXMax = -1);
              }
          }
          setPixel(_, _, _, _, _ = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == _.Image
            ) {
              const _ = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              _.setUint8(4 * _ + 0, _),
                _.setUint8(4 * _ + 1, _),
                _.setUint8(4 * _ + 2, _),
                _.setUint8(4 * _ + 3, _);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == _.Canvas &&
                ((this.m_Pixels.data[4 * _ + 0] = _),
                (this.m_Pixels.data[4 * _ + 1] = _),
                (this.m_Pixels.data[4 * _ + 2] = _),
                (this.m_Pixels.data[4 * _ + 3] = _),
                (-1 === this.m_nDirtyXMin || _ < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = _),
                (-1 === this.m_nDirtyXMax || _ > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = _));
          }
        }
        (_.s_Current = null),
          (_.k_EmbeddedDataRows = 1),
          (0, _._)([_], _.prototype, "toggleDebugPointer", null),
          (0, _._)([_], _.prototype, "onMouseMove", null),
          (0, _._)([_], _.prototype, "forceLayoutUpdate", null),
          (0, _._)([_], _.prototype, "onMutation", null);
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "texture";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties._ = this.props._),
                (_.properties.source = this.props.source),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "tilefloor";
            }
            buildNode(_, _) {
              var _, _, _, _, _, _, _;
              const _ = this.createSgNode(_);
              if (
                ((_.properties["tile-size"] = this.props["tile-size"]),
                (_.properties["tile-gap"] = this.props["tile-gap"]),
                (_.properties["inner-radius"] = this.props["inner-radius"]),
                (_.properties["outer-radius"] = this.props["outer-radius"]),
                (_.properties["fade-distance"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _["fade-distance"]),
                (_.properties["min-tile-scale-at-periphery"] =
                  this.props["min-tile-scale-at-periphery"]),
                (_.properties.height = _(this.props.height)),
                null != this.props.offset &&
                  (_.properties.offset = [
                    null === (_ = this.props.offset) || void 0 === _
                      ? void 0
                      : _._,
                    null === (_ = this.props.offset) || void 0 === _
                      ? void 0
                      : _._,
                  ]),
                "string" == typeof this.props.color)
              )
                _.properties.color = this.props.color;
              else if (this.props.color) {
                let _ = _(this.props.color, {
                  _: 0,
                  _: 0,
                  _: 0,
                });
                _.properties.color = [_._, _._, _._];
              }
              return (
                (_.properties["center-randomization"] =
                  null == this ? void 0 : this.props["center-randomization"]),
                this.props["luma-randomization"] &&
                  ((_.properties["luma-randomization-min-gain"] =
                    this.props["luma-randomization"]["min-gain"]),
                  (_.properties["luma-randomization-max-gain"] =
                    this.props["luma-randomization"]["max-gain"])),
                this.props["reflection-randomization"] &&
                  ((_.properties["reflection-randomization-min-gain"] =
                    this.props["reflection-randomization"]["min-gain"]),
                  (_.properties["reflection-randomization-max-gain"] =
                    this.props["reflection-randomization"]["max-gain"])),
                (_.properties["normal-randomization-degrees"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _["normal-randomization-degrees"]),
                this.props.chevron &&
                  ((_.properties["chevron-luma-scale"] =
                    this.props.chevron["luma-scale"]),
                  (_.properties["chevron-reflection-scale"] =
                    this.props.chevron["reflection-scale"])),
                (_.properties["auto-subdivide"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _["auto-subdivide"]),
                (_.properties["pedestal-height"] = _(
                  this.props["pedestal-height"],
                )),
                (_.properties["pedestal-radius"] = _(
                  this.props["pedestal-radius"],
                )),
                (_.properties["floor-aa-shader"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _["floor-aa-shader"]),
                (_.properties["stable-fade"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _["stable-fade"]),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (_) {
            (_[(_.None = 0)] = "None"), (_[(_.Backface = 1)] = "Backface");
          })(_ || (_ = {}));
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "rendermodel";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              if (
                ((_.properties.source = this.props.source),
                (_.properties["texture-id"] = _(this.props["texture-id"])),
                (_.properties["input-path"] = this.props["input-path"]),
                this.props.fresnel)
              ) {
                let _ = this.props.fresnel;
                if ("string" == typeof _.color) _.properties.color = _.color;
                else {
                  let _ = _(null == _ ? void 0 : _.color, {
                    _: 0,
                    _: 0,
                    _: 0,
                  });
                  _.properties.color = [_._, _._, _._];
                }
                (_.properties.opacity = _.opacity ? _.opacity : 1),
                  (_.properties.strength = _.strength ? _.strength : 1);
              }
              return (
                (_.properties.wireframe = this.props.wireframe),
                (_.properties.solid = this.props.solid),
                (_.properties.culling = this.props.culling),
                (_.properties.stencil_mask = this.props.stencil_mask),
                (_.properties["no-depth-write"] = this.props.no_depth_write),
                (_.properties["no-depth-test"] = this.props.no_depth_test),
                (_.properties.shader = this.props.eShader),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "rendermodel-component-overrides";
            }
            buildNode(_, _) {
              const {
                  action_name: _,
                  throbbing: _,
                  throbColor: _ = "#1a9fff",
                  throbPeriod: _ = 1.25,
                  throbContrast: _ = 2,
                  throbMinBlend: _ = 0,
                  throbMaxBlend: _ = 1,
                } = this.props,
                _ = this.createSgNode(_);
              return (
                (_.properties["action-name"] = _),
                (_.properties.throbbing = _),
                (_.properties["throb-color"] = _),
                (_.properties["throb-period"] = _),
                (_.properties["throb-contrast"] = _),
                (_.properties["throb-min-blend"] = _),
                (_.properties["throb-max-blend"] = _),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "ltcquad";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              if (
                ((_.properties.width = this.props.width),
                (_.properties.height = this.props.height),
                (_.properties["target-id"] = this.props.target_id),
                (_.properties["near-z"] = this.props["near-z"]),
                (_.properties["far-z"] = this.props["far-z"]),
                (_.properties.debug = this.props.debug),
                this.props.diffuse)
              ) {
                let _ = this.props.diffuse;
                (_.properties["diffuse-resolution"] = _.resolution),
                  (_.properties["diffuse-size"] = _.size);
              }
              if (this.props.specular) {
                let _ = this.props.specular;
                if ("string" == typeof _.color) _.properties.color = _.color;
                else {
                  let _ = _(_.color, {
                    _: 0,
                    _: 0,
                    _: 0,
                  });
                  _.properties.color = [_._, _._, _._];
                }
              }
              return [_, _];
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_),
                (this.m_latchedPosition = null),
                super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "panel-anchor";
            }
            relatch() {
              this.m_latchedPosition = null;
            }
            buildNode(_, _) {
              var _, _;
              if (!_.currentPanel && !_.bInsideReparentedPanel)
                return [
                  Object.assign(Object.assign({}, _), {
                    bShouldAbort: !0,
                  }),
                  null,
                ];
              let _ = null;
              "object" == typeof this.props.location
                ? (_ = _(this.props.location, {
                    _: 0,
                    _: 0,
                  }))
                : "number" == typeof this.props.location &&
                  (_ = _(this.props.location));
              let _ = this.createSgNode(_);
              if (this.props.latched && null !== this.m_latchedPosition)
                (_.properties["anchor-u"] = this.m_latchedPosition._),
                  (_.properties["anchor-v"] = this.m_latchedPosition._);
              else if (_) {
                const _ = {
                    _: 0.5 * _._ + 0.5,
                    _: -0.5 * _._ + 0.5,
                  },
                  _ =
                    !_.currentPanel || _.currentPanel.props.overlay_key
                      ? _
                      : _.currentPanel.scaleLocalUVToGlobal(_);
                _ &&
                  ((_.properties["anchor-u"] = _._),
                  (_.properties["anchor-v"] = _._));
              } else {
                if (!_.currentPanel)
                  return [
                    Object.assign(Object.assign({}, _), {
                      bShouldAbort: !0,
                    }),
                    null,
                  ];
                const _ = _.ownerDocument,
                  _ = _.getBoundingClientRect(),
                  _ = _.left + _.width / 2,
                  _ = _.top + _.height / 2,
                  _ = _.currentPanel.m_Rect;
                if (
                  _ < _._ ||
                  _ > _._ + _.width ||
                  _ < _._ ||
                  _ > _._ + _.height
                )
                  return [
                    Object.assign(Object.assign({}, _), {
                      bShouldAbort: !0,
                    }),
                    null,
                  ];
                const _ =
                    null === (_ = _.defaultView) || void 0 === _
                      ? void 0
                      : _.innerWidth,
                  _ =
                    null === (_ = _.defaultView) || void 0 === _
                      ? void 0
                      : _.innerHeight;
                if (!(_ && _ > 0 && _ && _ > 0))
                  return [
                    Object.assign(Object.assign({}, _), {
                      bShouldAbort: !0,
                    }),
                    null,
                  ];
                (_.properties["anchor-u"] = _ / _),
                  (_.properties["anchor-v"] = _ / _);
              }
              return (
                (this.m_latchedPosition = {
                  _: _.properties["anchor-u"],
                  _: _.properties["anchor-v"],
                }),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "context";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (_.properties.construct = this.props.construct), [_, _];
            }
          }.prototype,
          "buildNode",
          null,
        );
        !(function (_) {
          (_[(_.Parent = 0)] = "Parent"), (_[(_.World = 1)] = "World");
        })(_ || (_ = {}));
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "head-facing-transform";
            }
            buildNode(_, _) {
              var _;
              const _ = this.createSgNode(_);
              return (
                (_.properties._ =
                  null !== (_ = this.props._) && void 0 !== _ ? _ : "world"),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (_[(_.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (_[(_.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (_[(_.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (_[(_.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (_[(_.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (_[(_.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (_[(_.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (_[(_.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (_[(_.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (_[(_.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (_[(_.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (_[(_.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (_[(_.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (_[(_.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (_[(_.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (_[(_.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (_[(_.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (_[(_.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (_[(_.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (_[(_.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (_[(_.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (_[(_.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (_[(_.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (_[(_.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (_[(_.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (_[(_.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (_[(_.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (_[(_.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (_[(_.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (_[(_.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (_[(_.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (_[(_.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (_[(_.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (_[(_.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (_[(_.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (_[(_.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (_[(_.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (_[(_.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (_[(_.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (_[(_.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (_[(_.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (_[(_.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (_[(_.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (_[(_.ActualTrackingSystemName_String = 1054)] =
                "ActualTrackingSystemName_String"),
              (_[(_.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
              (_[(_.AllowLightSourceFrequency_Bool = 1056)] =
                "AllowLightSourceFrequency_Bool"),
              (_[(_.IsDedicatedVRHeadset_Bool = 1058)] =
                "IsDedicatedVRHeadset_Bool"),
              (_[(_.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
              (_[(_.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (_[(_.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (_[(_.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (_[(_.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (_[(_.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (_[(_.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (_[(_.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (_[(_.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (_[(_.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (_[(_.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (_[(_.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (_[(_.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (_[(_.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (_[(_.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (_[(_.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (_[(_.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (_[(_.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (_[(_.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (_[(_.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (_[(_.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (_[(_.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (_[(_.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (_[(_.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (_[(_.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (_[(_.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (_[(_.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (_[(_.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (_[(_.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (_[(_.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (_[(_.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (_[(_.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (_[(_.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (_[(_.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (_[(_.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (_[(_.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (_[(_.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (_[(_.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (_[(_.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (_[(_.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (_[(_.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (_[(_.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (_[(_.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (_[(_.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (_[(_.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (_[(_.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (_[(_.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (_[(_.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (_[(_.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (_[(_.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (_[(_.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (_[(_.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (_[(_.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (_[(_.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (_[(_.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (_[(_.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (_[(_.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (_[(_.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (_[(_.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (_[(_.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (_[(_.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (_[(_.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (_[(_.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (_[(_.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (_[(_.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (_[(_.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (_[(_.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (_[(_.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (_[(_.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (_[(_.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (_[(_.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (_[(_.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (_[(_.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (_[(_.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (_[(_.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (_[(_.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (_[(_.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (_[(_.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (_[(_.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (_[(_.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (_[(_.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (_[(_.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (_[(_.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (_[(_.DashboardLinkSupport_Int32 = 2097)] =
                "DashboardLinkSupport_Int32"),
              (_[(_.DisplayMinUIAnalogGain_Float = 2098)] =
                "DisplayMinUIAnalogGain_Float"),
              (_[(_.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (_[(_.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (_[(_.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (_[(_.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (_[(_.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (_[(_.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (_[(_.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (_[(_.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (_[(_.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (_[(_.DriverProvidedIPDVisibility_Bool = 2108)] =
                "DriverProvidedIPDVisibility_Bool"),
              (_[(_.Prop_SupportsVRGamepadMode_Bool = 2117)] =
                "Prop_SupportsVRGamepadMode_Bool"),
              (_[(_.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (_[(_.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (_[(_.Hmd_ForceRoomViewOutsideChaperone_Bool = 2500)] =
                "Hmd_ForceRoomViewOutsideChaperone_Bool"),
              (_[(_.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (_[(_.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (_[(_.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (_[(_.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (_[(_.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (_[(_.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (_[(_.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (_[(_.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (_[(_.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (_[(_.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (_[(_.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (_[(_.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (_[(_.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (_[(_.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (_[(_.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (_[(_.IconPathName_String = 5e3)] = "IconPathName_String"),
              (_[(_.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (_[(_.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (_[(_.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (_[(_.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (_[(_.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (_[(_.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (_[(_.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (_[(_.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (_[(_.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (_[(_.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (_[(_.ParentContainer = 5151)] = "ParentContainer"),
              (_[(_.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (_[(_.InstallPath_String = 6001)] = "InstallPath_String"),
              (_[(_.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (_[(_.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (_[(_.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (_[(_.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (_[(_.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (_[(_.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (_[(_.ControllerType_String = 7e3)] = "ControllerType_String"),
              (_[(_.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (_[(_.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (_[(_.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (_[(_.SupportsInHMDRoomSetup_Bool = 11003)] =
                "SupportsInHMDRoomSetup_Bool"),
              (_[(_.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
                "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
              (_[(_.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.k_EButton_System = 0)] = "k_EButton_System"),
              (_[(_.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (_[(_.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (_[(_.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (_[(_.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (_[(_.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (_[(_.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (_[(_.k_EButton_A = 7)] = "k_EButton_A"),
              (_[(_.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (_[(_.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (_[(_.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (_[(_.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (_[(_.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (_[(_.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (_[(_.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (_[(_.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (_[(_.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (_[(_.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (_[(_.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (_[(_.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (_[(_.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (_[(_.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (_[(_.k_EButton_Max = 64)] = "k_EButton_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ButtonEnter = 1)] = "ButtonEnter"),
              (_[(_.ButtonLeave = 2)] = "ButtonLeave"),
              (_[(_.Snap = 3)] = "Snap"),
              (_[(_.Sliding = 4)] = "Sliding"),
              (_[(_.SlidingEdge = 5)] = "SlidingEdge");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Minimal = 1)] = "Minimal"),
              (_[(_.Modal = 2)] = "Modal"),
              (_[(_.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (_[(_.HideDoneKey = 8)] = "HideDoneKey");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = -1)] = "Unknown"),
              (_[(_.Idle = 0)] = "Idle"),
              (_[(_.UserInteraction = 1)] = "UserInteraction"),
              (_[(_.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (_[(_.Standby = 3)] = "Standby"),
              (_[(_.Idle_Timeout = 4)] = "Idle_Timeout");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.VRMouseButton_Left = 1)] = "VRMouseButton_Left"),
              (_[(_.VRMouseButton_Right = 2)] = "VRMouseButton_Right"),
              (_[(_.VRMouseButton_Middle = 4)] = "VRMouseButton_Middle");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Notification_Shown = 600)] = "Notification_Shown"),
              (_[(_.Notification_Hidden = 601)] = "Notification_Hidden"),
              (_[(_.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (_[(_.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TheaterFast = 0)] = "TheaterFast"),
              (_[(_.TheaterSlow = 1)] = "TheaterSlow");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Constant = 0)] = "Constant"),
              (_[(_.Nearest = 1)] = "Nearest"),
              (_[(_.Linear = 2)] = "Linear"),
              (_[(_.SmoothStep = 3)] = "SmoothStep"),
              (_[(_.SmootherStep = 4)] = "SmootherStep");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.RecenterCountdown = 1)] = "RecenterCountdown"),
              (_[(_.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
              (_[(_.RoomSetupFloor = 3)] = "RoomSetupFloor"),
              (_[(_.ClearRoomSetup = 4)] = "ClearRoomSetup"),
              (_[(_.RoomSetupFull = 5)] = "RoomSetupFull");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Near = 0)] = "Near"),
              (_[(_.Middle = 1)] = "Middle"),
              (_[(_.Far = 2)] = "Far"),
              (_[(_.VRGamepadUI = 3)] = "VRGamepadUI");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.__LocalSteamVR = 0)] = "__LocalSteamVR"),
              (_[(_.__LocalSteam = 1)] = "__LocalSteam"),
              (_[(_.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
              (_[(_.__RemoteSteam = 3)] = "__RemoteSteam"),
              (_[(_.MutualLocal = 4)] = "MutualLocal"),
              (_[(_.MutualSteamVR = 5)] = "MutualSteamVR"),
              (_[(_.MutualSteam = 6)] = "MutualSteam");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Dashboard = 1)] = "Dashboard"),
              (_[(_.LeftHand = 2)] = "LeftHand"),
              (_[(_.RightHand = 3)] = "RightHand"),
              (_[(_.World = 4)] = "World"),
              (_[(_.Theater = 5)] = "Theater"),
              (_[(_.Boot = 6)] = "Boot");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.SceneApp = 1)] = "SceneApp"),
              (_[(_.Panel = 2)] = "Panel");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.ControllerPairing = 0)] = "ControllerPairing"),
              (_[(_.WelcomeToSteamFrame = 1)] = "WelcomeToSteamFrame"),
              (_[(_.SystemButtonHideDashboard = 2)] =
                "SystemButtonHideDashboard"),
              (_[(_.SystemButtonDashboardHidden = 3)] =
                "SystemButtonDashboardHidden"),
              (_[(_.SystemButtonShowDashboard = 4)] =
                "SystemButtonShowDashboard"),
              (_[(_.PairWifiDongle = 5)] = "PairWifiDongle"),
              (_[(_.TourSendOff = 6)] = "TourSendOff"),
              (_[(_.SteamGuidedTourFinished = 7)] = "SteamGuidedTourFinished");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ThirdPartyClient = 1)] = "ThirdPartyClient"),
              (_[(_.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
              (_[(_.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 0)] = "Default"),
              (_[(_.AuroraFloor = 1)] = "AuroraFloor");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Curved = 0)] = "Curved"), (_[(_.Flat = 1)] = "Flat");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 0)] = "Default"), (_[(_.Aurora = 1)] = "Aurora");
          })(_ || (_ = {}));
        _.Component;
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "dashboardtransform";
            }
            buildNode(_, _) {
              var _, _;
              const _ = this.createSgNode(_);
              return (
                (_.properties.continuous_relatch =
                  null !== (_ = this.props.bContinuousRelatch) &&
                  void 0 !== _ &&
                  _),
                (_.properties.free_dashboard_transform =
                  null !== (_ = this.props.bFreeDashboardTransform) &&
                  void 0 !== _ &&
                  _),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "resize-handle";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties["target-id"] = this.props.target_id),
                (_.properties["is-active"] = this.props.is_active),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "videocapturequad";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties.width = this.props.width),
                (_.properties.height = this.props.height),
                (_.properties["target-id"] = this.props.target_id),
                (_.properties["near-z"] = this.props["near-z"]),
                (_.properties["far-z"] = this.props["far-z"]),
                (_.properties.debug = this.props.debug),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "reparent-to-panel";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_),
                _ = Object.assign(Object.assign({}, _), {
                  bInsideReparentedPanel: !0,
                  currentPanel: void 0,
                });
              return (
                this.props.parent_overlay_key &&
                  (_.properties["parent-overlay-key"] =
                    this.props.parent_overlay_key),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "audiosource";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties.name = this.props.name),
                (_.properties.channel = this.props.channel),
                (_.properties.debug = this.props.debug),
                (_.properties["dock-location"] =
                  this.props.dockLocation || _.Dashboard),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (_) {
            (_[(_.Disabled = 0)] = "Disabled"),
              (_[(_.WorldZeroY = 1)] = "WorldZeroY"),
              (_[(_.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
          })(_ || (_ = {}));
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "constraint";
            }
            buildNode(_, _) {
              const _ = this.createSgNode(_);
              return (
                (_.properties["projection-constraint"] =
                  this.props.projection_constraint),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, _._)(
          [_],
          class extends _ {
            constructor(_) {
              super(_), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "grab-scale";
            }
            buildNode(_, _) {
              var _, _, _, _, _, _;
              const _ = this.createSgNode(_);
              return (
                (_.properties["event-panel-sgid"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.event_panel_sgid),
                (_.properties["is-active"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.is_active),
                (_.properties["base-distance"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.base_distance),
                (_.properties["scroll-speed"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.scroll_speed),
                (_.properties["min-distance"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.min_distance),
                (_.properties["max-distance"] =
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.max_distance),
                [_, _]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        const _ = VRHTML;
        var _, _;
        !(function (_) {
          (_[(_.Uninitialized = 0)] = "Uninitialized"),
            (_[(_.ShowInstructions = 1)] = "ShowInstructions"),
            (_[(_.Searching = 2)] = "Searching"),
            (_[(_.Timeout = 3)] = "Timeout"),
            (_[(_.Success = 4)] = "Success"),
            (_[(_.Success_NoMoreDongles = 5)] = "Success_NoMoreDongles");
        })(_ || (_ = {}));
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                pairingState: _.ShowInstructions,
              });
          }
          get className() {
            return "Uninitialized";
          }
          get aControllerName() {
            return "an Uninitialized";
          }
          get controllerName() {
            return "Uninitialized";
          }
          renderControllerImage(_) {
            return _.createElement("div", {
              className: "PairingImagePlaceholder",
            });
          }
          get pairingInstructions() {
            return _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                _("#pairinginstructions_generic_desc"),
              ),
            );
          }
          renderInstructions() {
            return _.createElement(
              "div",
              {
                className: "PairingDevice " + this.className,
              },
              _.createElement(
                "div",
                {
                  className: "Label Title",
                },
                _("#pair_controller_title", this.aControllerName),
              ),
              _.createElement(
                "div",
                {
                  className: "PairingImage",
                },
                this.renderControllerImage(!0),
              ),
              _.createElement(
                "div",
                {
                  className: "PageContent PairingInstructions HalfWidth",
                },
                _.createElement(
                  "div",
                  {
                    className: "Label",
                  },
                  this.pairingInstructions,
                ),
              ),
              _.createElement(
                _,
                null,
                _.createElement(_, {
                  onClick: () => _.ChooseController(),
                  text: _("#pairing_button_differentcontroller"),
                }),
              ),
            );
          }
          renderSuccess() {
            return _.createElement(
              "div",
              {
                className: "PairingDevice " + this.className,
              },
              _.createElement(
                "div",
                {
                  className: "Label Title",
                },
                _("#pairsuccess_title"),
              ),
              _.createElement(
                "div",
                {
                  className: "PairingImage",
                },
                this.renderControllerImage(!0),
              ),
              _.createElement(
                "div",
                {
                  className: "PageContent",
                },
                _.createElement("img", {
                  className: "StatusIcon",
                  src: "/lighthouse/webinterface/images/pairingui/icon_success.svg",
                }),
                _.createElement(
                  "div",
                  {
                    className: "Label",
                  },
                  _("#pairsuccess_desc"),
                ),
              ),
              _.createElement(
                _,
                null,
                _.createElement(_, {
                  onClick: _.PairWithFreeDongle,
                  text: _("#pairing_success_again"),
                  focus: !0,
                }),
                _.createElement(_, {
                  onClick: _.Close,
                  text: _("#pairing_button_done"),
                }),
              ),
            );
          }
          renderTimedOut() {
            return _.createElement(
              "div",
              {
                className: "PairingDevice " + this.className,
              },
              _.createElement(
                "div",
                {
                  className: "Label Title",
                },
                _("#pairing_error_title"),
              ),
              _.createElement(
                "div",
                {
                  className: "PairingImage",
                },
                this.renderControllerImage(!0),
              ),
              _.createElement(
                "div",
                {
                  className: "PageContent",
                },
                _.createElement("img", {
                  className: "StatusIcon",
                  src: "/lighthouse/webinterface/images/pairingui/icon_not_detected.svg",
                }),
                _.createElement(
                  "div",
                  {
                    className: "Label",
                  },
                  _("#pairing_timed_out_desc"),
                ),
              ),
              _.createElement(
                _,
                null,
                _.createElement(_, {
                  onClick: _.PairWithFreeDongle,
                  text: _("#pairing_try_again"),
                  focus: !0,
                }),
                _.createElement(_, {
                  onClick: _.Close,
                  text: _("#pairing_button_cancel"),
                }),
              ),
            );
          }
          render() {
            switch (_.pairingState) {
              case _.WaitingForDeviceToPair:
                return this.renderInstructions();
              case _.UpdatingDongleListAfterPairing:
              case _.Success:
                return this.renderSuccess();
              case _.TimedOut:
                return this.renderTimedOut();
              default:
                return (
                  console.error(
                    "CPairingDevice.render(): Invalid pairing state: " +
                      _[_.pairingState],
                  ),
                  _.createElement("div", null, " Invalid pairing state. ")
                );
            }
          }
        }
        function _(_) {
          return _.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 158.9 198.9",
              className: "KnucklesPairingSVG",
            },
            _ &&
              _.createElement("ellipse", {
                transform:
                  "matrix(0.2654 -0.9641 0.9641 0.2654 -28.3693 97.6447)",
                className: "st0 BindingControlHighlight",
                _: "49.9",
                _: "67.4",
                _: "2.1",
                _: "2.9",
              }),
            _ &&
              _.createElement("ellipse", {
                transform:
                  "matrix(0.2121 -0.9773 0.9773 0.2121 -39.1422 73.8828)",
                className: "st0 BindingControlHighlight",
                _: "26.2",
                _: "61.2",
                _: "2.5",
                _: "4.5",
              }),
            _ &&
              _.createElement("ellipse", {
                transform:
                  "matrix(0.2121 -0.9773 0.9773 0.2121 -40.9959 75.2781)",
                className: "st0 BindingControlHighlight",
                _: "26.2",
                _: "63.1",
                _: "2.5",
                _: "4.5",
              }),
            _.createElement(
              "g",
              {
                _: "Group_356",
                transform:
                  "matrix(0.985, -0.174, 0.174, 0.985, -1527.873, 93.429)",
              },
              _.createElement(
                "g",
                {
                  _: "LINE",
                  transform: "translate(1607.682 346.316)",
                },
                _.createElement("line", {
                  _: "Line_797",
                  className: "st1",
                  _: "3.2",
                  _: "0",
                  _: "0",
                  _: "0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-2",
                  transform: "translate(1609.449 356.379)",
                },
                _.createElement("line", {
                  _: "Line_798",
                  className: "st1",
                  _: "0",
                  _: "0.6",
                  _: "3.2",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE",
                  transform: "translate(1610.892 346.3)",
                },
                _.createElement("path", {
                  _: "Path_702",
                  className: "st1",
                  _: "M3.6,4.4c-0.1-0.5-0.2-1-0.4-1.4C3.1,2.6,3,2.2,2.8,1.9C2.7,1.6,2.5,1.4,2.4,1.1\n\t\t\t\t\tC2.3,1,2.1,0.8,2,0.7C1.9,0.6,1.8,0.5,1.7,0.4C1.6,0.3,1.5,0.3,1.3,0.2C1.1,0.1,1,0,0.8,0C0.5,0,0.2,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-2",
                  transform: "translate(1612.623 350.644)",
                },
                _.createElement("path", {
                  _: "Path_703",
                  className: "st1",
                  _: "M0,5.7c0.3-0.1,0.5-0.1,0.8-0.3c0.2-0.1,0.3-0.2,0.5-0.4C1.4,5,1.5,4.8,1.5,4.7\n\t\t\t\t\tc0.1-0.1,0.1-0.2,0.2-0.4c0.1-0.2,0.1-0.4,0.2-0.6C2,3.4,2,3.1,2,2.8c0-0.4,0-0.8,0-1.3C2,1.3,2,1.1,2,0.8c0-0.3-0.1-0.6-0.1-0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-3",
                  transform: "translate(1601.514 383.755)",
                },
                _.createElement("path", {
                  _: "Path_704",
                  className: "st1",
                  _: "M0,1.1C0.3,1,0.5,1,0.8,0.9c0.5-0.1,1-0.3,1.5-0.4C2.9,0.4,3.5,0.2,4.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-4",
                  transform: "translate(1609.377 198.038)",
                },
                _.createElement("path", {
                  _: "Path_705",
                  className: "st1",
                  _: "M13.8,17.1c-0.1-0.1-0.2-0.3-0.3-0.4c-0.9-1.4-1.9-2.7-2.9-4c-1-1.3-2-2.6-3-3.9\n\t\t\t\t\tc-1-1.3-2.1-2.6-3.2-3.8S2.3,2.4,1.1,1.2C0.8,0.8,0.4,0.4,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-5",
                  transform: "translate(1639.386 326.082)",
                },
                _.createElement("path", {
                  _: "Path_706",
                  className: "st1",
                  _: "M0,21.2c0-0.1,0-0.1,0.1-0.2c0.6-1.4,1-2.9,1.6-4.4c0.5-1.5,1-2.9,1.4-4.4s0.9-3,1.3-4.5\n\t\t\t\t\tc0.4-1.5,0.8-3,1.1-4.5C5.7,2.2,5.9,1.1,6.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-3",
                  transform: "translate(1597.546 370.158)",
                },
                _.createElement("line", {
                  _: "Line_799",
                  className: "st1",
                  _: "0.2",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-6",
                  transform: "translate(1609.413 352.881)",
                },
                _.createElement("path", {
                  _: "Path_707",
                  className: "st1",
                  _: "M0,29.6c0.6-0.3,1.3-0.5,1.9-0.8c0.6-0.3,1.1-0.5,1.7-0.8c0.5-0.3,1-0.5,1.4-0.8\n\t\t\t\t\tc0.4-0.3,0.8-0.5,1.2-0.7l1-0.6c0.3-0.2,0.5-0.4,0.8-0.6c0.4-0.3,0.9-0.6,1.3-0.9s0.9-0.7,1.3-1l1.3-1.1c0.4-0.4,0.8-0.7,1.2-1.1\n\t\t\t\t\tc0.4-0.4,0.7-0.7,1.1-1l1.2-1.2c0.5-0.5,0.9-1,1.3-1.5s0.9-1,1.3-1.6c0.6-0.7,1.2-1.5,1.7-2.2l1.6-2.3c0.5-0.8,1-1.6,1.6-2.4\n\t\t\t\t\tc0.5-0.8,1-1.7,1.5-2.5c0.5-0.9,1-1.8,1.4-2.7c0.5-0.9,1-1.9,1.4-2.9L27.7,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-7",
                  transform: "translate(1605.914 194.54)",
                },
                _.createElement("path", {
                  _: "Path_708",
                  className: "st1",
                  _: "M3.4,3.4C2.8,2.8,2.3,2.2,1.7,1.7S0.6,0.5,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-8",
                  transform: "translate(1601.658 224.008)",
                },
                _.createElement("path", {
                  _: "Path_709",
                  className: "st1",
                  _: "M0,0c1,1.7,2.1,3.3,3.1,5c1.2,2,2.3,4,3.3,6.2s2.1,4.3,3.1,6.5c1,2.2,1.9,4.5,2.8,6.7\n\t\t\t\t\tc0.9,2.3,1.7,4.6,2.5,7s1.5,4.8,2.2,7.2c0.6,2.4,1.3,4.8,1.8,7.3s1,4.9,1.5,7.4s0.8,4.9,1.1,7.4s0.6,5,0.8,7.4\n\t\t\t\t\tc0.2,2.5,0.3,4.9,0.4,7.4s0.1,4.9,0,7.3c0,2.4-0.1,4.8-0.3,7.1s-0.4,4.7-0.7,7c-0.3,2.3-0.6,4.5-1,6.7c-0.3,1.3-0.6,2.6-0.9,3.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-9",
                  transform: "translate(1584.526 344.044)",
                },
                _.createElement("path", {
                  _: "Path_710",
                  className: "st1",
                  _: "M0,0c0.5,1.2,0.9,2.3,1.4,3.4l2.9,7.1c1,2.5,2,4.9,3,7.4c1,2.6,2.1,5.1,3.1,7.6\n\t\t\t\t\tc0.2,0.5,0.4,0.9,0.6,1.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-10",
                  transform: "translate(1540.666 273.999)",
                },
                _.createElement("path", {
                  _: "Path_711",
                  className: "st1",
                  _: "M0,0l0.8,0.3c0.7,0.3,1.3,0.6,2,0.9c0.3,0.1,0.6,0.3,0.9,0.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-11",
                  transform: "translate(1574.607 249.76)",
                },
                _.createElement("path", {
                  _: "Path_712",
                  className: "st1",
                  _: "M39.2,97.6c-0.3-1.5-0.5-3-0.8-4.4c-0.5-2.5-0.9-4.9-1.4-7.4c-0.5-2.3-0.9-4.6-1.4-6.9\n\t\t\t\t\tc-0.5-2.1-0.9-4.1-1.4-6.2c-0.4-1.9-0.9-3.8-1.4-5.7c-0.4-1.7-0.9-3.5-1.3-5.2c-0.4-1.6-0.8-3.2-1.3-4.8c-0.5-1.8-1-3.5-1.5-5.2\n\t\t\t\t\tc-0.5-1.6-0.9-3.2-1.4-4.8c-0.5-1.5-0.9-3-1.4-4.4c-0.5-1.4-0.9-2.7-1.4-4c-0.5-1.3-0.9-2.5-1.4-3.8c-0.5-1.2-0.9-2.3-1.4-3.5\n\t\t\t\t\tc-0.8-1.9-1.7-3.8-2.6-5.6c-0.9-1.8-1.8-3.5-2.8-5.2c-1-1.7-2-3.3-3.1-4.9c-1-1.6-2.2-3.1-3.3-4.6c-0.5-0.7-1.1-1.4-1.7-2.2\n\t\t\t\t\tc-0.5-0.6-1-1.3-1.6-1.9C5.9,6.4,5.5,5.9,5,5.4C4.7,5,4.3,4.6,4,4.1C3.8,4,3.7,3.9,3.6,3.8C3.5,3.6,3.3,3.4,3.2,3.3\n\t\t\t\t\tC2.9,3.1,2.7,2.8,2.5,2.6C2.1,2.2,1.7,1.7,1.3,1.3C0.9,0.8,0.4,0.4,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-12",
                  transform: "translate(1615.184 354.973)",
                },
                _.createElement("path", {
                  _: "Path_713",
                  className: "st1",
                  _: "M1.6,9C1.3,7.4,1,5.8,0.7,4.1C0.5,2.7,0.3,1.4,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-13",
                  transform: "translate(1544.778 275.982)",
                },
                _.createElement("path", {
                  _: "Path_714",
                  className: "st1",
                  _: "M0,0c0.3,0.1,0.6,0.3,0.9,0.5c0.6,0.3,1.2,0.6,1.8,1c0.5,0.3,1,0.6,1.5,0.9\n\t\t\t\t\tC4.6,2.7,5,3,5.4,3.3C5.9,3.6,6.3,4,6.8,4.4C7.1,4.7,7.5,5,7.9,5.3c0.3,0.3,0.5,0.5,0.8,0.8c0.3,0.3,0.5,0.5,0.8,0.8\n\t\t\t\t\tc0.3,0.3,0.6,0.6,0.8,0.9c0.3,0.4,0.6,0.7,1,1.1c0.4,0.4,0.8,0.9,1.1,1.4c0.6,0.7,1.1,1.5,1.7,2.3c0.6,0.9,1.2,1.8,1.8,2.7\n\t\t\t\t\tc0.5,0.9,1,1.7,1.6,2.6c0.5,0.8,0.9,1.6,1.3,2.4c0.4,0.7,0.8,1.4,1.1,2.1c0.3,0.6,0.6,1.2,0.9,1.8c0.2,0.4,0.4,0.9,0.6,1.3\n\t\t\t\t\tc0.2,0.3,0.3,0.7,0.5,1c0.1,0.3,0.3,0.5,0.4,0.8c0.2,0.4,0.4,0.7,0.5,1.1c0.3,0.5,0.5,1,0.7,1.6c0.3,0.7,0.6,1.3,0.9,2\n\t\t\t\t\tc0.4,0.8,0.8,1.7,1.1,2.5c0.4,0.9,0.8,1.8,1.2,2.6c0.4,1,0.9,2.1,1.3,3.1l1.5,3.6c0.6,1.4,1.2,2.7,1.7,4.1\n\t\t\t\t\tc0.6,1.6,1.3,3.1,1.9,4.6l2.2,5.2c0.8,1.9,1.6,3.9,2.4,5.8l1.8,4.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-4",
                  transform: "translate(1587.664 379.175)",
                },
                _.createElement("line", {
                  _: "Line_800",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.9",
                  _: "1.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-14",
                  transform: "translate(1587.664 370.23)",
                },
                _.createElement("path", {
                  _: "Path_715",
                  className: "st1",
                  _: "M9.9,0C9.3,0.2,8.7,0.4,8.2,0.7C7.7,0.9,7.3,1.1,6.8,1.3c-0.3,0.2-0.7,0.4-1,0.5\n\t\t\t\t\tC5.6,2,5.4,2.1,5.1,2.3L4.6,2.6C4.4,2.7,4.3,2.8,4.1,2.9S3.8,3.1,3.6,3.2C3.4,3.4,3.2,3.5,3.1,3.6C2.9,3.8,2.6,4,2.4,4.1\n\t\t\t\t\tS2,4.5,1.8,4.7C1.5,4.9,1.3,5.2,1,5.4C0.8,5.7,0.6,5.9,0.4,6.1L0.1,6.4C0,6.5,0,6.5,0,6.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-15",
                  transform: "translate(1587.267 376.722)",
                },
                _.createElement("path", {
                  _: "Path_716",
                  className: "st1",
                  _: "M0.5,0C0.4,0.2,0.2,0.4,0.1,0.6C0,0.8,0,1.1,0,1.3C0,1.5,0,1.8,0.1,2c0.1,0.2,0.2,0.3,0.3,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-16",
                  transform: "translate(1589.178 380.978)",
                },
                _.createElement("path", {
                  _: "Path_717",
                  className: "st1",
                  _: "M0,0c0.7,0.5,1.4,1,2.2,1.4c0.7,0.4,1.4,0.9,2.1,1.3L6.2,4c0.3,0.2,0.7,0.4,1,0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-17",
                  transform: "translate(1514.408 220.04)",
                },
                _.createElement("path", {
                  _: "Path_718",
                  className: "st1",
                  _: "M30.4,1.6c-0.7-0.2-1.5-0.4-2.2-0.5c-1-0.2-2.1-0.4-3.1-0.5c-0.9-0.1-1.9-0.3-2.8-0.3\n\t\t\t\t\tc-0.8-0.1-1.6-0.1-2.5-0.2c-0.7,0-1.4,0-2.1,0c-0.6,0-1.2,0-1.8,0l-1.7,0.1c-0.5,0-0.9,0.1-1.4,0.1c-0.4,0.1-0.9,0.1-1.3,0.2\n\t\t\t\t\tc-0.5,0.1-0.9,0.2-1.3,0.3C9.8,0.9,9.3,1,8.9,1.1C8.3,1.3,7.7,1.5,7.2,1.7c-0.5,0.2-1,0.4-1.4,0.6C5.3,2.5,5,2.7,4.6,2.9\n\t\t\t\t\tC4.4,3.1,4.1,3.2,3.8,3.4C3.6,3.6,3.4,3.7,3.1,3.9C2.9,4.1,2.7,4.3,2.4,4.5C2.2,4.8,1.9,5.1,1.7,5.4C1.4,5.8,1.1,6.2,0.9,6.6\n\t\t\t\t\tC0.5,7.2,0.3,7.8,0,8.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-18",
                  transform: "translate(1574.823 240.78)",
                },
                _.createElement("path", {
                  _: "Path_719",
                  className: "st1",
                  _: "M0.5,7.1c0.1-0.4,0.2-0.9,0.3-1.3c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.5,0-0.8V3.5\n\t\t\t\t\tc0-0.1,0-0.3,0-0.4c0-0.2-0.1-0.5-0.1-0.7C0.7,2.2,0.6,1.8,0.5,1.5C0.4,1.2,0.3,0.8,0.2,0.4C0.1,0.3,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-5",
                  transform: "translate(1514.413 236.652)",
                },
                _.createElement("line", {
                  _: "Line_801",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-6",
                  transform: "translate(1574.895 248.678)",
                },
                _.createElement("line", {
                  _: "Line_802",
                  className: "st1",
                  _: "0",
                  _: "0.4",
                  _: "0.2",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-7",
                  transform: "translate(1571.289 252.321)",
                },
                _.createElement("line", {
                  _: "Line_803",
                  className: "st1",
                  _: "0",
                  _: "1.2",
                  _: "1.3",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-19",
                  transform: "translate(1536.085 274.359)",
                },
                _.createElement("path", {
                  _: "Path_720",
                  className: "st1",
                  _: "M0,0c0.3,0,0.6,0.1,1,0.1c0.4,0,0.8,0.1,1.2,0.1l1.3,0c0.5,0,0.9,0,1.4-0.1\n\t\t\t\t\tC5.1,0.1,5.3,0,5.5,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-20",
                  transform: "translate(1514.071 234.369)",
                },
                _.createElement("path", {
                  _: "Path_721",
                  className: "st1",
                  _: "M0,0c0.5,2.1,1,4.1,1.5,6.2c0.4,1.7,0.8,3.5,1.3,5.2c0.3,1.1,0.5,2.2,0.9,3.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-21",
                  transform: "translate(1613.344 345.342)",
                },
                _.createElement("path", {
                  _: "Path_722",
                  className: "st1",
                  _: "M0.1,0.5c0-0.1,0-0.1,0-0.1C0,0.3,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-8",
                  transform: "translate(1615.328 356.451)",
                },
                _.createElement("line", {
                  _: "Line_804",
                  className: "st1",
                  _: "0.1",
                  _: "0.6",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-9",
                  transform: "translate(1613.633 360.852)",
                },
                _.createElement("line", {
                  _: "Line_805",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.1",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-22",
                  transform: "translate(1605.662 382.421)",
                },
                _.createElement("path", {
                  _: "Path_723",
                  className: "st1",
                  _: "M0,1.3C0.4,1.2,0.7,1.1,1,1c0.4-0.1,0.6-0.2,1-0.3C2.6,0.5,3.2,0.2,3.8,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-23",
                  transform: "translate(1596.428 384.909)",
                },
                _.createElement("path", {
                  _: "Path_724",
                  className: "st1",
                  _: "M0,0.6c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4,0c0.4,0,0.8,0,1.2-0.1c0.5-0.1,1-0.1,1.5-0.3\n\t\t\t\t\tS4.5,0.1,5.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-10",
                  transform: "translate(1610.134 341.772)",
                },
                _.createElement("line", {
                  _: "Line_806",
                  className: "st1",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-24",
                  transform: "translate(1547.555 242.294)",
                },
                _.createElement("path", {
                  _: "Path_725",
                  className: "st1",
                  _: "M3.6,4.1L3.6,4.1c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\t\t\t\t\tC3.2,2.2,3.1,2.1,3,1.9C2.9,1.8,2.8,1.6,2.6,1.5C2.5,1.4,2.3,1.2,2.2,1.1C2,1,1.8,0.9,1.7,0.8C1.5,0.7,1.4,0.6,1.2,0.5L0.8,0.3\n\t\t\t\t\tC0.5,0.2,0.3,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-25",
                  transform: "translate(1542.326 241.97)",
                },
                _.createElement("path", {
                  _: "Path_726",
                  className: "st1",
                  _: "M5.2,0.4C4.9,0.3,4.7,0.3,4.4,0.2c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4,0-0.5-0.1C3.4,0,3.2,0,3,0\n\t\t\t\t\tC2.8,0,2.6,0,2.5,0c-0.2,0-0.4,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1C1.2,0.3,1.1,0.4,0.9,0.5C0.8,0.5,0.7,0.6,0.5,0.8\n\t\t\t\t\tC0.4,0.9,0.3,1,0.2,1.2L0,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-11",
                  transform: "translate(1550.657 246.37)",
                },
                _.createElement("line", {
                  _: "Line_807",
                  className: "st1",
                  _: "0",
                  _: "1.6",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-12",
                  transform: "translate(1541.929 243.593)",
                },
                _.createElement("line", {
                  _: "Line_808",
                  className: "st1",
                  _: "0.4",
                  _: "0",
                  _: "0",
                  _: "1.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-13",
                  transform: "translate(1597.438 352.664)",
                },
                _.createElement("line", {
                  _: "Line_809",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.6",
                  _: "2.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-26",
                  transform: "translate(1595.491 351.23)",
                },
                _.createElement("path", {
                  _: "Path_727",
                  className: "st1",
                  _: "M0,0c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.1,0.3,0.2\n\t\t\t\t\tc0.1,0.1,0.2,0.2,0.3,0.3l0.2,0.3c0.1,0.1,0.1,0.3,0.1,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-27",
                  transform: "translate(1597.258 355.55)",
                },
                _.createElement("path", {
                  _: "Path_728",
                  className: "st1",
                  _: "M0.8,0c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.4c0,0.2-0.1,0.4-0.2,0.5C0.5,1.4,0.4,1.5,0.3,1.6\n\t\t\t\t\tC0.2,1.7,0.1,1.7,0,1.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-28",
                  transform: "translate(1536.554 235.946)",
                },
                _.createElement("path", {
                  _: "Path_729",
                  className: "st1",
                  _: "M3.6,4.1L3.6,4.1c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\t\t\t\t\tC3.2,2.2,3.1,2.1,3,1.9C2.9,1.8,2.8,1.6,2.6,1.5C2.5,1.4,2.3,1.2,2.2,1.1C2,1,1.8,0.9,1.7,0.8C1.5,0.7,1.4,0.6,1.2,0.5L0.8,0.3\n\t\t\t\t\tC0.5,0.2,0.3,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-29",
                  transform: "translate(1531.325 235.622)",
                },
                _.createElement("path", {
                  _: "Path_730",
                  className: "st1",
                  _: "M5.2,0.4C4.9,0.3,4.7,0.3,4.4,0.2c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4,0-0.5-0.1C3.4,0,3.2,0,3,0\n\t\t\t\t\tC2.8,0,2.6,0,2.5,0c-0.2,0-0.4,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1C1.2,0.3,1.1,0.4,0.9,0.5C0.8,0.5,0.7,0.6,0.5,0.8\n\t\t\t\t\tC0.4,0.9,0.3,1,0.2,1.2L0,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-14",
                  transform: "translate(1539.656 240.022)",
                },
                _.createElement("line", {
                  _: "Line_810",
                  className: "st1",
                  _: "0",
                  _: "1.4",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-15",
                  transform: "translate(1530.783 237.245)",
                },
                _.createElement("line", {
                  _: "Line_811",
                  className: "st1",
                  _: "0.6",
                  _: "0",
                  _: "0",
                  _: "1.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-30",
                  transform: "translate(1556.609 246.607)",
                },
                _.createElement("path", {
                  _: "Path_731",
                  className: "st1",
                  _: "M4.2,3.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.2,0-0.4c0-0.2-0.1-0.4-0.2-0.6\n\t\t\t\t\tC3.9,1.8,3.7,1.5,3.5,1.2C3.3,1.1,3.2,1,3.1,0.9C2.8,0.8,2.6,0.6,2.4,0.5C2,0.3,1.7,0.2,1.3,0.1C1.1,0,0.9,0,0.7,0\n\t\t\t\t\tC0.5,0,0.2,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-16",
                  transform: "translate(1560.792 249.869)",
                },
                _.createElement("line", {
                  _: "Line_812",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-17",
                  transform: "translate(1555.13 247.488)",
                },
                _.createElement("line", {
                  _: "Line_813",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-31",
                  transform: "translate(1555.13 246.586)",
                },
                _.createElement("path", {
                  _: "Path_732",
                  className: "st1",
                  _: "M1.6,0C1.4,0,1.2,0.1,1,0.1c-0.2,0-0.3,0.1-0.5,0.2C0.4,0.4,0.3,0.5,0.2,0.6\n\t\t\t\t\tC0.1,0.7,0.1,0.8,0,0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-32",
                  transform: "translate(1520.756 254.414)",
                },
                _.createElement("path", {
                  _: "Path_733",
                  className: "st1",
                  _: "M0,0c0.2,0.3,0.4,0.5,0.7,0.8C0.9,1,1.1,1.2,1.4,1.5C1.6,1.8,1.8,2,2.1,2.3L2.7,3\n\t\t\t\t\tc0.2,0.3,0.4,0.5,0.6,0.7C3.5,4,3.7,4.2,3.9,4.4c0.3,0.4,0.6,0.8,0.9,1.1c0.3,0.3,0.5,0.7,0.7,1C5.7,7,6,7.4,6.2,7.8\n\t\t\t\t\tC6.5,8.3,6.8,8.7,7,9.2c0.3,0.5,0.5,1,0.7,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-33",
                  transform: "translate(1526.852 270.933)",
                },
                _.createElement("path", {
                  _: "Path_734",
                  className: "st1",
                  _: "M0,0c0.3,0.1,0.6,0.2,1,0.3c0.6,0.1,1.1,0.2,1.7,0.3c0.6,0.1,1.2,0.1,1.7,0.1h0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-34",
                  transform: "translate(1522.524 256.361)",
                },
                _.createElement("path", {
                  _: "Path_735",
                  className: "st1",
                  _: "M0,0c0.1,0.5,0.3,1,0.4,1.5C0.7,2.3,0.9,3.2,1.1,4c0.1,0.7,0.3,1.3,0.4,2\n\t\t\t\t\tc0.1,0.5,0.2,1,0.3,1.5c0,0.3,0.1,0.5,0.1,0.8C2,8.4,2,8.6,2,8.8c0,0.3,0.1,0.5,0.1,0.7c0,0.3,0.1,0.6,0.1,1\n\t\t\t\t\tc0.1,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.3,0,0.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-35",
                  transform: "translate(1525.049 268.588)",
                },
                _.createElement("path", {
                  _: "Path_736",
                  className: "st1",
                  _: "M0,0c0.1,0.4,0.2,0.7,0.3,1c0.1,0.3,0.3,0.6,0.6,0.8C1,2,1.3,2.2,1.5,2.3\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-36",
                  transform: "translate(1528.475 265.126)",
                },
                _.createElement("path", {
                  _: "Path_737",
                  className: "st1",
                  _: "M0,0c0.4,0.9,0.8,1.8,1.2,2.6C1.5,3.3,1.8,4,2.2,4.7c0.3,0.5,0.6,1,0.9,1.4\n\t\t\t\t\tc0.3,0.3,0.5,0.6,0.8,0.9c0.1,0.1,0.3,0.3,0.4,0.4l0.3,0.3C4.8,7.9,4.9,8,5.1,8.1l0.6,0.4C6,8.7,6.3,8.9,6.6,9\n\t\t\t\t\tC7,9.1,7.3,9.2,7.7,9.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-37",
                  transform: "translate(1517.943 249.616)",
                },
                _.createElement("path", {
                  _: "Path_738",
                  className: "st1",
                  _: "M0,0c0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.7,0.4,1.1L1,2.3C1.2,2.7,1.4,3,1.7,3.4\n\t\t\t\t\tc0.3,0.4,0.5,0.7,0.8,1.1c0.1,0.1,0.2,0.2,0.3,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-38",
                  transform: "translate(1578.827 217.912)",
                },
                _.createElement("path", {
                  _: "Path_739",
                  className: "st1",
                  _: "M0,16.6c1.3-0.8,2.6-1.5,3.9-2.3c1.2-0.7,2.5-1.4,3.7-2.1l3.1-1.7c0.9-0.5,1.7-0.9,2.6-1.4\n\t\t\t\t\tC14,8.7,14.7,8.3,15.4,8c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.1,0.5-0.3,0.8-0.4c0.2-0.1,0.4-0.2,0.6-0.3c0.3-0.1,0.5-0.3,0.7-0.4\n\t\t\t\t\tC18.7,6.2,19,6,19.4,5.8c0.5-0.3,0.9-0.5,1.4-0.8c0.6-0.3,1.2-0.6,1.8-1c0.8-0.4,1.5-0.8,2.2-1.2c0.9-0.5,1.8-0.9,2.7-1.4\n\t\t\t\t\tc1-0.5,1.9-1,3-1.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-39",
                  transform: "translate(1555.599 221.591)",
                },
                _.createElement("path", {
                  _: "Path_740",
                  className: "st1",
                  _: "M0,7.8c0,0,0.1,0,0.1,0c0.2,0,0.5,0.1,0.7,0.1C1.1,8,1.3,8,1.5,8C1.8,8,2,8,2.2,8\n\t\t\t\t\tc0.2,0,0.5,0,0.7,0c0.2,0,0.5,0,0.7-0.1S4,7.8,4.2,7.8c0.2-0.1,0.4-0.1,0.6-0.2C5,7.5,5.2,7.4,5.4,7.3C5.5,7.2,5.7,7,5.8,6.9\n\t\t\t\t\tC6,6.7,6.1,6.6,6.2,6.4c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4,0-0.6c0-0.2-0.1-0.4-0.2-0.6\n\t\t\t\t\tC6.2,3.6,6,3.2,5.7,2.8C5.5,2.6,5.3,2.4,5.2,2.3C5,2.1,4.8,1.9,4.6,1.8C4.4,1.6,4.2,1.5,4,1.3S3.5,1,3.3,0.9\n\t\t\t\t\tC3.1,0.8,2.9,0.7,2.7,0.6C2.5,0.5,2.3,0.5,2.1,0.4C1.8,0.2,1.5,0.1,1.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-18",
                  transform: "translate(1552.244 228.191)",
                },
                _.createElement("line", {
                  _: "Line_814",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.6",
                  _: "0.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-19",
                  transform: "translate(1555.851 229.454)",
                },
                _.createElement("line", {
                  _: "Line_815",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.6",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-20",
                  transform: "translate(1586.437 193.674)",
                },
                _.createElement("line", {
                  _: "Line_816",
                  className: "st1",
                  _: "0.8",
                  _: "0",
                  _: "0",
                  _: "0.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-40",
                  transform: "translate(1583.768 194.179)",
                },
                _.createElement("path", {
                  _: "Path_741",
                  className: "st1",
                  _: "M2.9,0c0,0-0.1,0.1-0.1,0.1C2.4,0.3,2.1,0.6,1.9,0.9C1.6,1.3,1.3,1.7,1,2.1\n\t\t\t\t\tc-0.3,0.5-0.5,1-0.7,1.6C0.1,4.3,0,4.9,0,5.6c0,0.3,0,0.7,0,1c0,0.4,0.1,0.7,0.2,1c0.1,0.4,0.3,0.7,0.4,1c0.2,0.3,0.4,0.7,0.6,1\n\t\t\t\t\tc0.2,0.3,0.5,0.7,0.8,0.9l0.8,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-41",
                  transform: "translate(1589.467 190.428)",
                },
                _.createElement("path", {
                  _: "Path_742",
                  className: "st1",
                  _: "M5,0C4.4,0.2,3.7,0.4,3.1,0.6C2.1,1,1,1.4,0,1.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-21",
                  transform: "translate(1557.438 229.598)",
                },
                _.createElement("line", {
                  _: "Line_817",
                  className: "st1",
                  _: "0",
                  _: "1.8",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-22",
                  transform: "translate(1550.477 227.398)",
                },
                _.createElement("line", {
                  _: "Line_818",
                  className: "st1",
                  _: "0.5",
                  _: "0",
                  _: "0",
                  _: "1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-42",
                  transform: "translate(1574.376 234.504)",
                },
                _.createElement("path", {
                  _: "Path_743",
                  className: "st1",
                  _: "M0.4,6.3C0.3,6,0.2,5.7,0.1,5.4C0,5.1,0,4.8,0,4.5c0-0.3,0.1-0.6,0.3-0.8\n\t\t\t\t\tC0.4,3.5,0.5,3.2,0.7,3C0.9,2.8,1,2.5,1.2,2.3C1.5,2.1,1.7,1.8,2,1.6C2.4,1.3,2.7,1,3.1,0.8C3.5,0.5,4,0.3,4.4,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-43",
                  transform: "translate(1563.462 210.734)",
                },
                _.createElement("path", {
                  _: "Path_744",
                  className: "st1",
                  _: "M28.8,0c-1,0.4-1.9,0.7-2.9,1.1c-1,0.4-2.1,0.8-3.1,1.1c-0.9,0.3-1.7,0.6-2.6,0.9\n\t\t\t\t\tc-0.8,0.3-1.6,0.5-2.3,0.8c-0.8,0.3-1.5,0.5-2.3,0.8c-0.5,0.2-1,0.4-1.6,0.5c-0.5,0.2-1,0.4-1.6,0.5c-0.6,0.2-1.2,0.4-1.8,0.6\n\t\t\t\t\tC9.9,6.6,9.1,6.9,8.4,7.1L5.8,8c-1,0.3-2,0.6-3,1C1.9,9.3,0.9,9.6,0,9.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-44",
                  transform: "translate(1595.274 190.031)",
                },
                _.createElement("path", {
                  _: "Path_745",
                  className: "st1",
                  _: "M10.6,4.5C9.8,3.7,9.1,3.1,8.2,2.4C7.8,2,7.3,1.7,6.9,1.4c-0.5-0.3-1-0.6-1.6-0.8\n\t\t\t\t\tC4.7,0.5,4.1,0.3,3.5,0.2C2.9,0.1,2.3,0,1.8,0c-0.5,0-1,0-1.6,0.1c-0.1,0-0.2,0-0.2,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-45",
                  transform: "translate(1558.051 220.581)",
                },
                _.createElement("path", {
                  _: "Path_746",
                  className: "st1",
                  _: "M5.5,0C4.5,0.3,3.6,0.6,2.6,0.9C1.8,1.1,1,1.3,0.1,1.4H0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-46",
                  transform: "translate(1544.742 221.627)",
                },
                _.createElement("path", {
                  _: "Path_747",
                  className: "st1",
                  _: "M4.7,0.7C4,0.6,3.4,0.6,2.7,0.5C1.8,0.4,0.9,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-23",
                  transform: "translate(1609.088 217.984)",
                },
                _.createElement("line", {
                  _: "Line_819",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "2.6",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-24",
                  transform: "translate(1613.994 216.433)",
                },
                _.createElement("line", {
                  _: "Line_820",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-25",
                  transform: "translate(1592.569 209.039)",
                },
                _.createElement("line", {
                  _: "Line_821",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-26",
                  transform: "translate(1592.208 209.219)",
                },
                _.createElement("line", {
                  _: "Line_822",
                  className: "st1",
                  _: "0.4",
                  _: "0",
                  _: "0",
                  _: "1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-27",
                  transform: "translate(1601.153 384.874)",
                },
                _.createElement("line", {
                  _: "Line_823",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0.4",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-28",
                  transform: "translate(1605.59 383.647)",
                },
                _.createElement("line", {
                  _: "Line_824",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0.4",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-47",
                  transform: "translate(1637.222 347.29)",
                },
                _.createElement("path", {
                  _: "Path_748",
                  className: "st1",
                  _: "M0,5.3L0,5.3C0.8,3.6,1.5,1.8,2.2,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-29",
                  transform: "translate(1608.728 197.425)",
                },
                _.createElement("line", {
                  _: "Line_825",
                  className: "st1",
                  _: "0.6",
                  _: "0.6",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-48",
                  transform: "translate(1609.665 373.007)",
                },
                _.createElement("path", {
                  _: "Path_749",
                  className: "st1",
                  _: "M4.2,0C4.1,0.3,3.9,0.7,3.8,1S3.5,1.7,3.4,1.9S3.1,2.5,3,2.8C2.9,3.1,2.7,3.4,2.6,3.7\n\t\t\t\t\tC2.5,3.9,2.4,4.2,2.3,4.4C2.2,4.7,2,4.9,1.9,5.2C1.8,5.4,1.7,5.6,1.7,5.8C1.5,6,1.5,6.2,1.4,6.4C1.3,6.6,1.2,6.7,1.1,6.9\n\t\t\t\t\tC1,7.1,1,7.2,0.9,7.4L0.6,7.8C0.6,7.9,0.5,8.1,0.5,8.2c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.2-0.1,0.3L0.1,9C0,9,0,9.1,0,9.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-30",
                  transform: "translate(1613.849 372.682)",
                },
                _.createElement("line", {
                  _: "Line_826",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-31",
                  transform: "translate(1612.876 371.384)",
                },
                _.createElement("line", {
                  _: "Line_827",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "1",
                  _: "1.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-49",
                  transform: "translate(1609.521 201.032)",
                },
                _.createElement("path", {
                  _: "Path_750",
                  className: "st1",
                  _: "M3.4,170.4c2.6-1,5.2-2.3,7.5-3.9c2.5-1.7,4.8-3.7,6.8-5.8c2.2-2.4,4.2-4.9,6-7.6\n\t\t\t\t\tc1.9-2.9,3.6-6,5-9.2c1.6-3.4,2.9-7,4-10.6c1.2-3.9,2.1-7.8,2.8-11.8c0.8-4.2,1.3-8.4,1.6-12.7c0.3-4.4,0.4-8.8,0.4-13.3\n\t\t\t\t\ts-0.4-9.1-0.9-13.7c-0.5-4.6-1.2-9.2-2.1-13.7c-0.9-4.6-2-9.1-3.3-13.5c-1.3-4.4-2.8-8.8-4.4-13s-3.5-8.3-5.4-12.2\n\t\t\t\t\ts-4.1-7.6-6.3-11.1c-2.2-3.4-4.6-6.7-7.1-9.8C5.4,5.4,2.8,2.6,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC",
                  transform: "translate(1612.587 370.987)",
                },
                _.createElement("path", {
                  _: "Path_751",
                  className: "st1",
                  _: "M0.3,0.4C0.2,0.2,0.1,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-50",
                  transform: "translate(1586.762 205.793)",
                },
                _.createElement("path", {
                  _: "Path_752",
                  className: "st1",
                  _: "M0,0l0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-51",
                  transform: "translate(1612.479 371.023)",
                },
                _.createElement("path", {
                  _: "Path_753",
                  className: "st1",
                  _: "M0,0c0,0,0.1,0,0.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-52",
                  transform: "translate(1586.87 205.901)",
                },
                _.createElement("path", {
                  _: "Path_754",
                  className: "st1",
                  _: "M0,0c1.3,1.3,2.6,2.5,3.9,3.9C4.3,4.3,4.6,4.7,4.9,5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-32",
                  transform: "translate(1600.648 222.421)",
                },
                _.createElement("line", {
                  _: "Line_828",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "1",
                  _: "1.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-53",
                  transform: "translate(1614.535 331.492)",
                },
                _.createElement("path", {
                  _: "Path_755",
                  className: "st1",
                  _: "M6.7,0C6.6,0.4,6.5,0.9,6.4,1.3C6,3.2,5.4,5.1,4.9,7C4.3,8.8,3.7,10.7,3,12.4\n\t\t\t\t\tc-0.6,1.7-1.3,3.5-2.1,5.1c-0.3,0.6-0.6,1.2-0.9,1.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-54",
                  transform: "translate(1597.727 367.055)",
                },
                _.createElement("path", {
                  _: "Path_756",
                  className: "st1",
                  _: "M17.3,0c-0.3,0.1-0.5,0.3-0.9,0.5c-0.4,0.2-0.7,0.3-1.1,0.4c-0.4,0.1-0.8,0.2-1.2,0.3\n\t\t\t\t\tc-0.5,0.1-0.9,0.1-1.4,0.2l-1.3,0.1c-0.5,0-0.9,0.1-1.4,0.1c-0.5,0-1,0.1-1.5,0.1L7,1.8c-0.6,0-1.2,0.1-1.7,0.1\n\t\t\t\t\tC4.7,2,4.1,2.1,3.6,2.1C3,2.2,2.4,2.3,1.9,2.5c-0.5,0.1-1,0.3-1.5,0.4C0.3,3,0.1,3,0,3.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-55",
                  transform: "translate(1615.004 363.99)",
                },
                _.createElement("path", {
                  _: "Path_757",
                  className: "st1",
                  _: "M1.7,0c0,0.1,0,0.2,0,0.3c0,0.3,0,0.5-0.1,0.8C1.5,1.4,1.4,1.6,1.2,1.9\n\t\t\t\t\tC0.9,2.2,0.7,2.5,0.4,2.7C0.2,2.8,0.1,2.9,0,3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-56",
                  transform: "translate(1595.887 209.436)",
                },
                _.createElement("path", {
                  _: "Path_758",
                  className: "st1",
                  _: "M0,0c2.5,0.9,5.1,1.7,7.7,2.4c2.6,0.7,5.2,1.4,7.9,2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-57",
                  transform: "translate(1592.641 208.723)",
                },
                _.createElement("path", {
                  _: "Path_759",
                  className: "st1",
                  _: "M0,0.3c0-0.1,0-0.1,0-0.1c0-0.1,0.2-0.1,0.3-0.1c0.2,0,0.4,0,0.5,0c0.2,0,0.4,0.1,0.6,0.1\n\t\t\t\t\tc0.3,0.1,0.5,0.1,0.8,0.3S3,0.6,3.2,0.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-58",
                  transform: "translate(1611.469 213.836)",
                },
                _.createElement("path", {
                  _: "Path_760",
                  className: "st1",
                  _: "M0,0c0.4,0.1,0.8,0.2,1.2,0.3c0.3,0.1,0.5,0.2,0.7,0.4C2.1,0.8,2.3,1,2.4,1.2\n\t\t\t\t\tc0.1,0.2,0.2,0.3,0.2,0.5c0.1,0.2,0.1,0.4,0,0.6c0,0.1,0,0.1-0.1,0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-2",
                  transform: "translate(1613.885 372.646)",
                },
                _.createElement("path", {
                  _: "Path_761",
                  className: "st1",
                  _: "M0,0.4C0,0.2,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-33",
                  transform: "translate(1605.842 194.503)",
                },
                _.createElement("line", {
                  _: "Line_829",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.1",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-3",
                  transform: "translate(1586.798 205.829)",
                },
                _.createElement("path", {
                  _: "Path_762",
                  className: "st1",
                  _: "M0,0C0,0,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-59",
                  transform: "translate(1542.888 264.224)",
                },
                _.createElement("path", {
                  _: "Path_763",
                  className: "st1",
                  _: "M21.7,6.1c-0.6-0.5-1.2-1.1-1.8-1.6C19.3,4,18.7,3.5,18,3c-0.7-0.5-1.3-0.9-2-1.3\n\t\t\t\t\tc-0.7-0.4-1.4-0.7-2.2-1c-0.7-0.3-1.5-0.5-2.3-0.6c-0.4-0.1-0.8-0.1-1.2-0.1S9.7,0,9.3,0C8.6,0,7.9,0.1,7.2,0.2\n\t\t\t\t\tC6.5,0.4,5.9,0.6,5.3,0.8C4.2,1.3,3.2,2,2.4,2.8C1.7,3.6,1.1,4.4,0.7,5.4C0.3,6.2,0.1,7,0,7.9c0,0.4,0,0.8,0,1.2\n\t\t\t\t\tc0,0.3,0.1,0.7,0.3,1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-60",
                  transform: "translate(1543.227 274.323)",
                },
                _.createElement("path", {
                  _: "Path_764",
                  className: "st1",
                  _: "M0,0c0,0.1,0.1,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3C0.4,0.8,0.5,0.9,0.6,1\n\t\t\t\t\tC0.7,1.1,0.8,1.3,1,1.3c0.1,0.1,0.3,0.1,0.4,0.2l0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-61",
                  transform: "translate(1538.646 254.414)",
                },
                _.createElement("path", {
                  _: "Path_765",
                  className: "st1",
                  _: "M2.1,19.5c-0.2-0.1-0.3-0.1-0.4-0.2C1.4,19.2,1.2,19,1,18.8c-0.2-0.2-0.4-0.5-0.5-0.8\n\t\t\t\t\tc-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.1-0.7-0.1-1c0-0.4,0-0.8,0.1-1.1c0.1-0.2,0.1-0.4,0.2-0.7c0.1-0.3,0.2-0.5,0.4-0.8\n\t\t\t\t\tc0.2-0.3,0.3-0.6,0.5-0.9c0.3-0.5,0.7-0.9,1.1-1.4c0.4-0.5,0.9-0.9,1.4-1.4c0.3-0.3,0.7-0.5,1-0.8C5.2,8.9,5.6,8.6,6,8.4\n\t\t\t\t\tC6.3,8.2,6.6,8,7,7.8C7.5,7.5,8,7.3,8.5,7C9,6.8,9.5,6.6,10,6.4c0.5-0.2,0.9-0.3,1.4-0.5c0.5-0.1,1-0.3,1.6-0.5s1-0.3,1.6-0.4\n\t\t\t\t\tc0.6-0.1,1.1-0.3,1.7-0.4c0.6-0.1,1.2-0.3,1.8-0.4c0.6-0.1,1.3-0.3,1.9-0.4c0.7-0.1,1.3-0.3,2-0.4c0.7-0.1,1.4-0.3,2.1-0.5\n\t\t\t\t\tc0.7-0.2,1.3-0.4,2-0.6c0.7-0.2,1.4-0.4,2-0.7c0.4-0.1,0.8-0.3,1.1-0.5c0.4-0.2,0.8-0.4,1.1-0.5c0.4-0.2,0.8-0.4,1.1-0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-62",
                  transform: "translate(1584.49 341.627)",
                },
                _.createElement("path", {
                  _: "Path_766",
                  className: "st1",
                  _: "M0.1,2.6C0.1,2.6,0,2.6,0.1,2.6C0,2.5,0,2.5,0,2.5c0,0,0-0.1,0-0.1s0.1-0.1,0.1-0.2\n\t\t\t\t\tC0.2,2,0.3,2,0.3,1.9l0.3-0.3C0.8,1.5,1,1.3,1.2,1.1C1.4,1,1.5,0.9,1.6,0.8c0.2-0.1,0.3-0.2,0.5-0.3C2.3,0.4,2.6,0.2,2.9,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-63",
                  transform: "translate(1587.375 326.334)",
                },
                _.createElement("path", {
                  _: "Path_767",
                  className: "st1",
                  _: "M0,15.3c0.5-0.3,1-0.6,1.5-0.9c0.6-0.3,1.1-0.7,1.7-1.2c0.6-0.5,1.2-0.9,1.7-1.5\n\t\t\t\t\tc0.6-0.6,1.1-1.2,1.5-1.9c0.5-0.7,0.8-1.5,1.1-2.3C7.8,6.7,7.9,5.9,8,5c0-0.4,0-0.9,0-1.3c0-0.4-0.1-0.9-0.1-1.3\n\t\t\t\t\tC7.8,2.1,7.6,1.7,7.5,1.2C7.4,0.8,7.3,0.4,7.2,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-64",
                  transform: "translate(1564.616 270.355)",
                },
                _.createElement("path", {
                  _: "Path_768",
                  className: "st1",
                  _: "M29.9,56c-0.4-1.3-0.8-2.6-1.2-3.8c-0.4-1.3-0.8-2.6-1.2-3.8s-0.8-2.6-1.3-3.8\n\t\t\t\t\tc-0.4-1.3-0.9-2.5-1.4-3.8c-0.9-2.5-1.9-5-3.1-7.4c-1.1-2.5-2.2-4.9-3.5-7.3c-1.2-2.4-2.5-4.7-3.9-7c-1.4-2.3-2.8-4.6-4.3-6.8\n\t\t\t\t\tC8.6,10,7.1,7.9,5.4,5.8C3.7,3.8,1.9,1.8,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-65",
                  transform: "translate(1598.123 352.592)",
                },
                _.createElement("path", {
                  _: "Path_769",
                  className: "st1",
                  _: "M0.6,2.9C0.4,1.9,0.2,1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-66",
                  transform: "translate(1593.182 350.284)",
                },
                _.createElement("path", {
                  _: "Path_770",
                  className: "st1",
                  _: "M4.9,2.3c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1s0-0.1-0.1-0.1\n\t\t\t\t\tc0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1C4.4,1.2,4.3,1,4.2,0.9C4.1,0.8,3.9,0.7,3.8,0.5C3.6,0.4,3.4,0.3,3.1,0.2\n\t\t\t\t\tC3,0.1,2.9,0.1,2.7,0.1C2.5,0,2.3,0,2.1,0C2,0,1.8,0,1.6,0.1c-0.2,0-0.3,0.1-0.5,0.1C1,0.3,0.9,0.4,0.8,0.5\n\t\t\t\t\tC0.7,0.6,0.6,0.6,0.5,0.8C0.4,0.9,0.3,1,0.2,1.2c0,0.1-0.1,0.2-0.1,0.3L0,2l0,0.5c0,0.1,0,0.1,0,0.2s0,0.1,0,0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-67",
                  transform: "translate(1593.326 353.349)",
                },
                _.createElement("path", {
                  _: "Path_771",
                  className: "st1",
                  _: "M0,0c0.2,1,0.5,1.9,0.7,2.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-68",
                  transform: "translate(1594.012 355.586)",
                },
                _.createElement("path", {
                  _: "Path_772",
                  className: "st1",
                  _: "M0,0.6c0,0,0,0.1,0,0.1s0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1s0,0.1,0.1,0.1\n\t\t\t\t\ts0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.2,0.2,0.3,0.4,0.4c0.2,0.1,0.4,0.3,0.6,0.4L2,2.9\n\t\t\t\t\tC2.2,3,2.3,3,2.5,3C2.6,3,2.8,3,3,2.9c0.2,0,0.3-0.1,0.5-0.2c0.2-0.1,0.3-0.2,0.4-0.3C4,2.3,4.1,2.2,4.3,2.1l0.2-0.3\n\t\t\t\t\tc0.1-0.1,0.1-0.3,0.2-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.2,0-0.3V0.3c0-0.1,0-0.2,0-0.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-34",
                  transform: "translate(1609.99 341.808)",
                },
                _.createElement("line", {
                  _: "Line_830",
                  className: "st1",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-69",
                  transform: "translate(1569.99 254.414)",
                },
                _.createElement("path", {
                  _: "Path_773",
                  className: "st1",
                  _: "M0.1,0C0.1,0,0,0,0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-70",
                  transform: "translate(1570.098 253.512)",
                },
                _.createElement("path", {
                  _: "Path_774",
                  className: "st1",
                  _: "M0,0.9c0.2-0.1,0.4-0.3,0.6-0.5C0.8,0.3,1,0.2,1.2,0l0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-71",
                  transform: "translate(1584.332 341.158)",
                },
                _.createElement("path", {
                  _: "Path_775",
                  className: "st1",
                  _: "M0.3,2.7H0.2C0,2.7,0,2.6,0,2.5c0-0.1,0.1-0.3,0.2-0.4c0.2-0.2,0.3-0.4,0.5-0.5\n\t\t\t\t\tc0.3-0.2,0.5-0.5,0.9-0.7C1.9,0.6,2.4,0.3,2.8,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-72",
                  transform: "translate(1543.624 274.576)",
                },
                _.createElement("path", {
                  _: "Path_776",
                  className: "st1",
                  _: "M0,0c0,0.1,0.1,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3S0.5,0.9,0.6,1C0.7,1.1,0.8,1.3,1,1.3\n\t\t\t\t\tc0,0,0.1,0,0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-73",
                  transform: "translate(1543.299 264.75)",
                },
                _.createElement("path", {
                  _: "Path_777",
                  className: "st1",
                  _: "M0.3,9.8c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.2-0.1-0.4\n\t\t\t\t\tc0-0.1,0-0.2,0-0.3c0-0.3,0-0.5,0-0.8c0-0.2,0-0.5,0.1-0.7c0.1-0.5,0.2-1.1,0.4-1.6c0.2-0.5,0.5-1.1,0.8-1.6\n\t\t\t\t\tc0.3-0.5,0.7-0.9,1-1.3C2.7,2.3,3.1,2,3.6,1.6C4,1.3,4.5,1.1,4.9,0.9c0.5-0.2,0.9-0.4,1.4-0.5C6.9,0.2,7.4,0.1,8,0.1\n\t\t\t\t\tC8.5,0,9.1,0,9.7,0c0.6,0,1.1,0.1,1.7,0.2c0.6,0.1,1.2,0.3,1.7,0.5c0.4,0.1,0.7,0.3,1,0.4s0.7,0.3,1,0.5c0.4,0.2,0.7,0.4,1,0.6\n\t\t\t\t\tc0.4,0.2,0.7,0.5,1.1,0.7c0.3,0.2,0.6,0.4,0.9,0.6c0.3,0.3,0.6,0.5,0.9,0.8C19.5,4.6,19.7,4.8,20,5c0.3,0.3,0.6,0.6,1,0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-74",
                  transform: "translate(1564.219 270.716)",
                },
                _.createElement("path", {
                  _: "Path_778",
                  className: "st1",
                  _: "M0,0c0.2,0.1,0.3,0.3,0.5,0.5C0.7,0.6,0.8,0.8,1,1l0.5,0.5c0.2,0.2,0.4,0.4,0.5,0.6\n\t\t\t\t\tc0.2,0.2,0.4,0.4,0.5,0.6C2.8,2.9,3,3.1,3.2,3.3c0.2,0.2,0.4,0.4,0.6,0.6s0.4,0.4,0.6,0.6C4.7,5,5,5.4,5.4,5.8\n\t\t\t\t\tc0.4,0.5,0.8,1,1.2,1.5s0.8,1,1.2,1.5c0.7,1,1.4,1.9,2.1,3c1.2,1.7,2.3,3.4,3.4,5.2c0.7,1.2,1.4,2.3,2.1,3.5\n\t\t\t\t\tc0.8,1.4,1.6,2.7,2.3,4.1c0.9,1.6,1.7,3.2,2.5,4.9c1.6,3.2,3,6.6,4.3,10c0.6,1.7,1.3,3.4,1.8,5c0.4,1,0.7,2.1,1.1,3.2l0.5,1.6\n\t\t\t\t\tl0.4,1.4c0.3,0.9,0.6,1.8,0.9,2.8c0.3,0.8,0.5,1.6,0.8,2.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-75",
                  transform: "translate(1587.195 326.514)",
                },
                _.createElement("path", {
                  _: "Path_779",
                  className: "st1",
                  _: "M6.9,0l0.2,0.6C7.1,0.9,7.2,1,7.2,1.3c0.1,0.4,0.2,0.7,0.3,1c0.1,0.5,0.2,1,0.2,1.6\n\t\t\t\t\tc0,0.4,0,0.8,0,1.2c0,0.4-0.1,0.8-0.2,1.2C7.3,6.9,7.1,7.6,6.8,8.2C6.6,8.6,6.3,9.1,6.1,9.5c-0.3,0.4-0.6,0.8-0.9,1.2\n\t\t\t\t\tc-0.4,0.4-0.8,0.9-1.2,1.2c-0.4,0.4-0.9,0.7-1.3,1c-0.2,0.1-0.4,0.3-0.6,0.5c-0.3,0.2-0.5,0.3-0.8,0.5C1.2,14,1.1,14.1,1,14.1\n\t\t\t\t\tc-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0.1-0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-76",
                  transform: "translate(1612.767 371.384)",
                },
                _.createElement("path", {
                  _: "Path_780",
                  className: "st1",
                  _: "M0.1,0C0.1,0,0,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-4",
                  transform: "translate(1564.219 270.356)",
                },
                _.createElement("path", {
                  _: "Path_781",
                  className: "st1",
                  _: "M0,0.4C0.2,0.3,0.3,0.2,0.4,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-5",
                  transform: "translate(1594.048 326.334)",
                },
                _.createElement("path", {
                  _: "Path_782",
                  className: "st1",
                  _: "M0.5,0C0.3,0,0.2,0.1,0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-77",
                  transform: "translate(1612.479 371.059)",
                },
                _.createElement("path", {
                  _: "Path_783",
                  className: "st1",
                  _: "M0.3,0.4c0-0.1-0.1-0.2-0.1-0.3C0.1,0.1,0.1,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-78",
                  transform: "translate(1613.849 372.682)",
                },
                _.createElement("path", {
                  _: "Path_784",
                  className: "st1",
                  _: "M0,0c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-79",
                  transform: "translate(1613.813 373.007)",
                },
                _.createElement("path", {
                  _: "Path_785",
                  className: "st1",
                  _: "M0.1,0C0,0,0,0,0.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-80",
                  transform: "translate(1541.898 244.999)",
                },
                _.createElement("path", {
                  _: "Path_786",
                  className: "st1",
                  _: "M8.1,3.7C8,3.8,7.8,4,7.6,4C7.4,4.1,7.1,4.2,6.9,4.3c-0.3,0-0.5,0.1-0.8,0.1\n\t\t\t\t\tc-0.3,0-0.6,0-0.8,0C5,4.3,4.7,4.2,4.4,4.2C4.1,4.1,3.9,4,3.5,3.9C3.2,3.8,2.9,3.7,2.7,3.6C2.4,3.4,2.1,3.3,1.9,3.1\n\t\t\t\t\tc-0.4-0.3-0.8-0.6-1.2-1C0.5,2,0.4,1.8,0.3,1.5C0.2,1.4,0.1,1.1,0,0.9c0-0.3,0-0.6,0-0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-81",
                  transform: "translate(1550.044 247.921)",
                },
                _.createElement("path", {
                  _: "Path_787",
                  className: "st1",
                  _: "M0.6,0L0.6,0c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2C0.3,0.5,0.1,0.7,0,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-82",
                  transform: "translate(1555.274 248.787)",
                },
                _.createElement("path", {
                  _: "Path_788",
                  className: "st1",
                  _: "M5.5,1.1L5.5,1.1c0,0.1-0.1,0.2-0.2,0.3C5.3,1.5,5.2,1.6,5,1.7C4.9,1.8,4.8,1.8,4.6,1.9\n\t\t\t\t\tC4.5,1.9,4.3,1.9,4.2,2C4,2,3.8,2,3.6,2C3.4,2,3.3,2,3.1,1.9c-0.2,0-0.4-0.1-0.6-0.2C2.2,1.7,2,1.6,1.8,1.5\n\t\t\t\t\tC1.6,1.4,1.4,1.3,1.3,1.2C1.1,1.1,0.9,0.9,0.7,0.8c0,0,0,0,0,0c0,0,0,0,0,0l0,0c-0.1,0-0.1-0.1-0.2-0.1C0.3,0.4,0.1,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-83",
                  transform: "translate(1555.058 247.416)",
                },
                _.createElement("path", {
                  _: "Path_789",
                  className: "st1",
                  _: "M0.3,1.3C0.1,1.1,0,0.8,0,0.6C0,0.4,0.1,0.2,0.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-84",
                  transform: "translate(1530.652 239.084)",
                },
                _.createElement("path", {
                  _: "Path_790",
                  className: "st1",
                  _: "M8.5,3.2C8.1,3.4,7.7,3.6,7.3,3.7C6.8,3.8,6.2,3.9,5.7,3.9c-0.2,0-0.3,0-0.5,0\n\t\t\t\t\tc-0.2,0-0.3,0-0.5-0.1c-0.3,0-0.6-0.1-0.9-0.2C3.6,3.5,3.3,3.4,3,3.4L2.3,3C2,2.9,1.8,2.8,1.6,2.6S1.1,2.3,1,2.2\n\t\t\t\t\tC0.8,2,0.6,1.8,0.5,1.7C0.4,1.5,0.2,1.3,0.2,1.1C0.1,1,0.1,0.8,0,0.6c0-0.2,0-0.4,0-0.5c0,0,0,0,0-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-85",
                  transform: "translate(1539.115 241.465)",
                },
                _.createElement("path", {
                  _: "Path_791",
                  className: "st1",
                  _: "M0.5,0L0.5,0c0,0.1-0.1,0.2-0.1,0.3C0.3,0.5,0.2,0.6,0,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-86",
                  transform: "translate(1537.42 230.284)",
                },
                _.createElement("path", {
                  _: "Path_792",
                  className: "st1",
                  _: "M0,0.3c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0\n\t\t\t\t\tc0.1,0,0.1,0,0.2,0C1.4,0,1.6,0,1.7,0L3,0c0.4,0,0.7,0,1.1,0.1c0.4,0,0.9,0.1,1.3,0.2c0.5,0.1,0.9,0.2,1.3,0.3\n\t\t\t\t\tC7,0.7,7.3,0.8,7.6,0.9C7.8,0.9,8.1,1,8.4,1.2c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0.1,0.4,0.1c0.1,0.1,0.2,0.1,0.4,0.1\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-87",
                  transform: "translate(1539.187 237.461)",
                },
                _.createElement("path", {
                  _: "Path_793",
                  className: "st1",
                  _: "M10.6,6c-0.4-0.2-0.8-0.5-1.2-0.7C9.1,5.1,8.7,4.8,8.3,4.6C7.9,4.4,7.5,4.1,7.1,3.9\n\t\t\t\t\tS6.3,3.5,6,3.2L4.8,2.6L3.6,1.9L2.4,1.3L1.2,0.6C0.8,0.4,0.4,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-88",
                  transform: "translate(1549.792 243.377)",
                },
                _.createElement("path", {
                  _: "Path_794",
                  className: "st1",
                  _: "M11.5,0.6c0,0,0,0.1-0.1,0.1l-0.1,0.1l-0.1,0.1L11.1,1L11,1.2c0,0-0.1,0.1-0.1,0.1\n\t\t\t\t\tc-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.2S9.6,1.9,9.4,1.9C9.2,2,8.9,2,8.7,2.1c-0.5,0.1-1,0.1-1.4,0.1\n\t\t\t\t\tC6.9,2.1,6.4,2.1,6,2C5.6,2,5.2,1.9,4.7,1.8c-0.5-0.1-1-0.3-1.6-0.4L2.5,1.2C2.3,1.1,2.1,1,1.8,0.9C1.7,0.8,1.6,0.8,1.4,0.7\n\t\t\t\t\tC1.3,0.6,1.1,0.6,1,0.5C0.9,0.5,0.7,0.4,0.6,0.4S0.4,0.3,0.3,0.2C0.2,0.1,0.1,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-89",
                  transform: "translate(1557.835 238.038)",
                },
                _.createElement("path", {
                  _: "Path_795",
                  className: "st1",
                  _: "M0,0c0.1,0,0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1\n\t\t\t\t\tc0.1,0,0.1,0.1,0.2,0.1C1,0.6,1,0.7,1.1,0.7C1.3,0.9,1.5,1,1.7,1.2C1.8,1.3,2,1.5,2.2,1.7c0.1,0.1,0.3,0.3,0.4,0.4l0.3,0.4\n\t\t\t\t\tC3,2.6,3.1,2.8,3.2,3c0.1,0.1,0.2,0.3,0.3,0.5C3.6,3.6,3.6,3.8,3.7,4c0.1,0.2,0.1,0.4,0.1,0.6v0.3c0,0.1,0,0.2,0,0.3\n\t\t\t\t\tc0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2-0.1,0.3S3.5,5.8,3.5,5.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-90",
                  transform: "translate(1547.195 232.087)",
                },
                _.createElement("path", {
                  _: "Path_796",
                  className: "st1",
                  _: "M0,0c0.4,0.2,0.8,0.4,1.2,0.6S2,1,2.4,1.2l1.2,0.6l1.2,0.6L6,3.2c0.4,0.2,0.8,0.4,1.2,0.7\n\t\t\t\t\tc0.4,0.2,0.8,0.5,1.2,0.7S9.1,5,9.5,5.2s0.8,0.5,1.2,0.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-91",
                  transform: "translate(1550.426 228.949)",
                },
                _.createElement("path", {
                  _: "Path_797",
                  className: "st1",
                  _: "M6.6,2.8C6.5,2.9,6.3,3,6.1,3c-0.2,0-0.3,0-0.5,0c-0.4,0-0.9,0-1.3-0.1C3.9,2.8,3.5,2.7,3,2.6\n\t\t\t\t\tC2.6,2.4,2.3,2.2,1.9,2.1c-0.3-0.2-0.7-0.4-1-0.6C0.6,1.3,0.4,1,0.2,0.8C0.2,0.7,0.1,0.5,0.1,0.4C0,0.3,0,0.2,0,0.1\n\t\t\t\t\tc0,0,0-0.1,0-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-92",
                  transform: "translate(1557.041 231.365)",
                },
                _.createElement("path", {
                  _: "Path_798",
                  className: "st1",
                  _: "M0.4,0c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.1C0.2,0.3,0.1,0.4,0,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-35",
                  transform: "translate(1545.139 221.916)",
                },
                _.createElement("line", {
                  _: "Line_831",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-93",
                  transform: "translate(1545.175 221.916)",
                },
                _.createElement("path", {
                  _: "Path_799",
                  className: "st1",
                  _: "M0,0c1,0.3,2.1,0.5,3.1,0.8C3.4,0.9,3.6,1,3.8,1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-94",
                  transform: "translate(1561.514 228.336)",
                },
                _.createElement("path", {
                  _: "Path_800",
                  className: "st1",
                  _: "M0,0c0.6,0.4,1.3,0.8,2,1.2c0.9,0.6,1.7,1.2,2.6,1.8c0.8,0.6,1.6,1.2,2.3,1.8\n\t\t\t\t\tC7.5,5.4,8.2,6,8.8,6.6c0.6,0.6,1.1,1.2,1.6,1.8c0.5,0.6,0.9,1.2,1.2,1.8c0.4,0.6,0.6,1.2,0.9,1.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-95",
                  transform: "translate(1573.958 240.31)",
                },
                _.createElement("path", {
                  _: "Path_801",
                  className: "st1",
                  _: "M0,0c0,0.1,0.1,0.2,0.1,0.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-96",
                  transform: "translate(1571.541 247.777)",
                },
                _.createElement("path", {
                  _: "Path_802",
                  className: "st1",
                  _: "M0,5c0.5-0.3,0.9-0.7,1.4-1c0.4-0.3,0.8-0.7,1.1-1.2C2.8,2.4,3,2,3.3,1.5\n\t\t\t\t\tc0.2-0.4,0.4-0.9,0.5-1.4c0-0.1,0-0.1,0-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-97",
                  transform: "translate(1513.976 228.552)",
                },
                _.createElement("path", {
                  _: "Path_803",
                  className: "st1",
                  _: "M0.5,0C0.4,0.3,0.3,0.5,0.3,0.7C0.1,1.4,0,2,0,2.7c0,0.7,0.1,1.4,0.3,2.1\n\t\t\t\t\tC0.5,5.6,0.8,6.3,1.1,7c0.4,0.8,0.8,1.6,1.3,2.3c0.5,0.8,1.1,1.6,1.8,2.3c0.7,0.8,1.5,1.5,2.3,2.2c0.8,0.8,1.7,1.5,2.7,2.2\n\t\t\t\t\tc0.9,0.7,2,1.4,3,2.1c1.1,0.7,2.2,1.3,3.4,1.9c1.2,0.6,2.4,1.2,3.6,1.8c1.3,0.5,2.5,1.1,3.8,1.6s2.6,0.9,4,1.3s2.7,0.8,4,1.1\n\t\t\t\t\tc1.3,0.3,2.7,0.6,4,0.8c1.3,0.2,2.6,0.4,3.9,0.5s2.6,0.2,3.8,0.3c1.2,0,2.5,0,3.6-0.1c1.1-0.1,2.2-0.2,3.4-0.4\n\t\t\t\t\tc1-0.2,2.1-0.4,3-0.6c0.9-0.2,1.8-0.6,2.6-0.9c0.8-0.4,1.5-0.8,2.2-1.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-36",
                  transform: "translate(1571.505 252.79)",
                },
                _.createElement("line", {
                  _: "Line_832",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-98",
                  transform: "translate(1513.895 228.66)",
                },
                _.createElement("path", {
                  _: "Path_804",
                  className: "st1",
                  _: "M57.6,24.2c-0.7,0.4-1.4,0.8-2.2,1.2c-0.9,0.4-1.7,0.7-2.6,0.9c-0.9,0.3-1.9,0.5-3,0.6\n\t\t\t\t\tc-1.1,0.2-2.2,0.3-3.4,0.4c-1.2,0.1-2.4,0.1-3.6,0.1c-1.2,0-2.5-0.1-3.8-0.3s-2.6-0.3-3.9-0.5c-1.3-0.2-2.7-0.5-4-0.8\n\t\t\t\t\tc-1.3-0.3-2.7-0.7-4-1.1s-2.7-0.9-4-1.3s-2.6-1-3.8-1.6s-2.5-1.2-3.6-1.8s-2.3-1.3-3.4-1.9c-1.1-0.7-2.1-1.4-3-2.1\n\t\t\t\t\tc-0.9-0.7-1.8-1.4-2.7-2.2c-0.8-0.8-1.6-1.5-2.3-2.2C3.6,10.9,3,10.1,2.4,9.3C1.9,8.6,1.5,7.8,1.1,7C0.8,6.3,0.5,5.6,0.3,4.8\n\t\t\t\t\tC0.1,4.1,0,3.4,0,2.7c0-0.7,0-1.3,0.3-2C0.3,0.5,0.4,0.2,0.6,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-99",
                  transform: "translate(1571.541 247.885)",
                },
                _.createElement("path", {
                  _: "Path_805",
                  className: "st1",
                  _: "M3.8,0L3.8,0C3.7,0.7,3.4,1.4,3,1.9C2.7,2.5,2.2,3.1,1.8,3.6C1.2,4.1,0.6,4.6,0,5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-100",
                  transform: "translate(1520.468 253.98)",
                },
                _.createElement("path", {
                  _: "Path_806",
                  className: "st1",
                  _: "M8.8,11.8c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.1-0.1-0.3-0.2-0.4\n\t\t\t\t\tC7.9,9.9,7.8,9.7,7.6,9.4C7.4,9,7.2,8.7,7,8.3C6.7,8,6.5,7.7,6.3,7.4C6.1,7,5.8,6.7,5.6,6.3l-0.8-1c-0.5-0.6-1-1.3-1.6-1.8l-1-1.1\n\t\t\t\t\tC2,2.1,1.7,1.8,1.5,1.6C1.3,1.4,1.1,1.2,1,1.1C0.9,1,0.8,0.8,0.6,0.7C0.5,0.6,0.4,0.5,0.3,0.3C0.2,0.2,0.1,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-38",
                  transform: "translate(1536.085 274.359)",
                },
                _.createElement("line", {
                  _: "Line_834",
                  className: "st1",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-101",
                  transform: "translate(1604.206 341.808)",
                },
                _.createElement("path", {
                  _: "Path_807",
                  className: "st1",
                  _: "M5.9,0c0,0-0.1,0-0.1,0s-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1s-0.1,0-0.1,0.1s-0.1,0-0.1,0.1\n\t\t\t\t\tc0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1S4.7,0.5,4.7,0.6c0,0-0.1,0.1-0.1,0.1S4.5,0.8,4.4,0.8C4.3,0.9,4.3,0.9,4.2,1\n\t\t\t\t\tC4.2,1,4.1,1.1,4.1,1.1C3.9,1.3,3.7,1.4,3.6,1.6C3.4,1.8,3.2,2,3,2.2C2.9,2.4,2.7,2.7,2.5,3S2.1,3.5,2,3.8C1.6,4.4,1.2,5.1,1,5.7\n\t\t\t\t\tC0.7,6.4,0.4,7.1,0.3,7.8C0.1,8.4,0,9,0,9.6c0,0.6,0,1.1,0.1,1.7c0.1,0.5,0.3,1.1,0.5,1.6c0.3,0.6,0.6,1.1,0.9,1.6\n\t\t\t\t\tC2,15,2.5,15.5,3,16c0.5,0.5,1.1,1,1.7,1.4c0.3,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.5,0.3,0.8,0.4c0.2,0.1,0.5,0.2,0.7,0.3\n\t\t\t\t\tc0.2,0.1,0.5,0.2,0.7,0.2c0.1,0,0.3,0.1,0.4,0.1s0.3,0,0.4,0.1c0.1,0,0.2,0,0.4,0h0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-102",
                  transform: "translate(1613.885 357.029)",
                },
                _.createElement("path", {
                  _: "Path_808",
                  className: "st1",
                  _: "M0,3.8c0.2-0.1,0.5-0.2,0.7-0.3C0.8,3.4,0.9,3.3,1,3.2C1.1,3.1,1.1,3,1.2,2.8\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.3V0.7\n\t\t\t\t\tc0-0.2,0-0.4,0-0.6V0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-103",
                  transform: "translate(1610.387 341.808)",
                },
                _.createElement("path", {
                  _: "Path_809",
                  className: "st1",
                  _: "M3,3.6c0-0.1-0.1-0.2-0.1-0.3C2.8,3.1,2.7,2.8,2.6,2.6C2.6,2.3,2.5,2.1,2.4,1.9\n\t\t\t\t\tC2.3,1.7,2.2,1.5,2.1,1.3C2,1.2,1.9,1,1.8,0.9C1.7,0.8,1.6,0.7,1.5,0.5C1.4,0.4,1.3,0.4,1.2,0.3C0.9,0.1,0.7,0,0.4,0\n\t\t\t\t\tC0.3,0,0.1,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-39",
                  transform: "translate(1610.062 341.808)",
                },
                _.createElement("line", {
                  _: "Line_835",
                  className: "st1",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-104",
                  transform: "translate(1613.417 345.883)",
                },
                _.createElement("path", {
                  _: "Path_810",
                  className: "st1",
                  _: "M0,0c0,0.1,0.1,0.3,0.1,0.4c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0.1,0.4,0.1,0.6\n\t\t\t\t\tc0.1,0.3,0.1,0.5,0.2,0.8c0,0.3,0.1,0.5,0.1,0.8c0,0.1,0,0.1,0,0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-105",
                  transform: "translate(1614.679 351.943)",
                },
                _.createElement("path", {
                  _: "Path_811",
                  className: "st1",
                  _: "M0,0c0,0.3,0.1,0.6,0.1,0.9s0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0.1,0.4,0.1,0.6\n\t\t\t\t\tc0,0.2,0,0.4,0.1,0.6s0,0.4,0.1,0.5v0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-40",
                  transform: "translate(1609.99 341.808)",
                },
                _.createElement("line", {
                  _: "Line_836",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.1",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-106",
                  transform: "translate(1606.419 346.532)",
                },
                _.createElement("path", {
                  _: "Path_812",
                  className: "st1",
                  _: "M0.2,6c0-0.2-0.1-0.3-0.1-0.5c0-0.2,0-0.3-0.1-0.5c0-0.2,0-0.4,0-0.5l0-0.5c0-0.2,0-0.3,0-0.5\n\t\t\t\t\tc0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0.1-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.1,0.1-0.2s0-0.1,0.1-0.2\n\t\t\t\t\tc0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3C1,0.6,1.1,0.5,1.2,0.4c0.1-0.1,0.2-0.1,0.3-0.2\n\t\t\t\t\tc0.1,0,0.2-0.1,0.3-0.1C1.8,0.1,1.8,0,1.9,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-107",
                  transform: "translate(1606.636 352.484)",
                },
                _.createElement("path", {
                  _: "Path_813",
                  className: "st1",
                  _: "M3.7,4.5c-0.1,0-0.3,0-0.4,0C3,4.6,2.8,4.5,2.7,4.4C2.5,4.3,2.3,4.2,2.1,4\n\t\t\t\t\tC1.9,3.9,1.7,3.7,1.5,3.5C1.4,3.3,1.2,3,1,2.8C0.9,2.5,0.7,2.2,0.6,1.9C0.5,1.7,0.4,1.3,0.3,1S0.1,0.3,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LWPOLYLINE",
                  transform: "translate(1587.123 341.158)",
                },
                _.createElement("path", {
                  _: "Path_814",
                  className: "st1",
                  _: "M0.3,0.5L0.3,0.5l0.1-0.1V0.2L0.3,0.1L0.2,0L0.1,0L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-108",
                  transform: "translate(1610.423 356.668)",
                },
                _.createElement("path", {
                  _: "Path_815",
                  className: "st1",
                  _: "M0.7,0L0.5,0.1C0.4,0.3,0.2,0.3,0,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-41",
                  transform: "translate(1608.331 346.497)",
                },
                _.createElement("line", {
                  _: "Line_837",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0.1",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-109",
                  transform: "translate(1608.62 346.46)",
                },
                _.createElement("path", {
                  _: "Path_816",
                  className: "st1",
                  _: "M0,0c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0.1,0.4,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-110",
                  transform: "translate(1594.733 352.989)",
                },
                _.createElement("path", {
                  _: "Path_817",
                  className: "st1",
                  _: "M0.7,2.9C0.5,1.9,0.3,1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-111",
                  transform: "translate(1555.31 248.751)",
                },
                _.createElement("path", {
                  _: "Path_818",
                  className: "st1",
                  _: "M0,0c0.3,0.4,0.7,0.8,1.1,1.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-42",
                  transform: "translate(1526.852 270.933)",
                },
                _.createElement("line", {
                  _: "Line_838",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-112",
                  transform: "translate(1545.211 221.879)",
                },
                _.createElement("path", {
                  _: "Path_819",
                  className: "st1",
                  _: "M4,0.6C3.4,0.6,2.8,0.5,2.2,0.4C1.5,0.3,0.7,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LWPOLYLINE-2",
                  transform: "translate(1555.599 229.382)",
                },
                _.createElement("path", {
                  _: "Path_820",
                  className: "st1",
                  _: "M0.9,0.1L0.9,0.1L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-6",
                  transform: "translate(1552.821 228.48)",
                },
                _.createElement("path", {
                  _: "Path_821",
                  className: "st1",
                  _: "M0,0c0.9,0.5,2,0.8,3,0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-113",
                  transform: "translate(1609.413 200.888)",
                },
                _.createElement("path", {
                  _: "Path_822",
                  className: "st1",
                  _: "M0,0l0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-43",
                  transform: "translate(1586.437 194.179)",
                },
                _.createElement("line", {
                  _: "Line_839",
                  className: "st1",
                  _: "0.2",
                  _: "0",
                  _: "0",
                  _: "0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-7",
                  transform: "translate(1586.69 205.721)",
                },
                _.createElement("path", {
                  _: "Path_823",
                  className: "st1",
                  _: "M0,0C0,0,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-114",
                  transform: "translate(1589.034 192.411)",
                },
                _.createElement("path", {
                  _: "Path_824",
                  className: "st1",
                  _: "M0.1,0C0.1,0,0.1,0,0.1,0C0,0,0,0.1,0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-115",
                  transform: "translate(1594.48 190.067)",
                },
                _.createElement("path", {
                  _: "Path_825",
                  className: "st1",
                  _: "M11.5,4.5c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.3-0.3-0.4-0.4s-0.3-0.3-0.5-0.4\n\t\t\t\t\tC10,3.2,9.9,3.1,9.8,3C9.6,2.9,9.5,2.8,9.4,2.7L8.9,2.3C8.6,2.1,8.2,1.8,7.9,1.6C7.7,1.5,7.6,1.4,7.4,1.3C7.3,1.3,7.1,1.2,7,1.1\n\t\t\t\t\tC6.8,1,6.6,0.9,6.4,0.8c-0.1,0-0.2-0.1-0.3-0.1L5.8,0.6c-0.1,0-0.3-0.1-0.4-0.1L5,0.4c-0.1,0-0.3-0.1-0.4-0.1s-0.2,0-0.3-0.1\n\t\t\t\t\tc-0.1,0-0.2,0-0.3,0c-0.2,0-0.4-0.1-0.6-0.1C3.3,0,3.1,0,2.9,0C2.8,0,2.6,0,2.5,0C2,0,1.4,0,0.9,0.1c-0.2,0-0.5,0.1-0.7,0.1\n\t\t\t\t\tC0.2,0.3,0.1,0.3,0,0.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-116",
                  transform: "translate(1595.851 209.58)",
                },
                _.createElement("path", {
                  _: "Path_826",
                  className: "st1",
                  _: "M15.6,4.4c-2.6-0.6-5.3-1.3-7.9-2S2.5,0.9,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-44",
                  transform: "translate(1595.851 209.436)",
                },
                _.createElement("line", {
                  _: "Line_840",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-45",
                  transform: "translate(1611.433 213.836)",
                },
                _.createElement("line", {
                  _: "Line_841",
                  className: "st1",
                  _: "0",
                  _: "0.1",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-117",
                  transform: "translate(1611.325 213.945)",
                },
                _.createElement("path", {
                  _: "Path_827",
                  className: "st1",
                  _: "M0.3,4.1h0.3C0.8,4.1,0.9,4,1,4c0.1,0,0.3-0.1,0.4-0.1c0.1,0,0.3-0.1,0.4-0.2\n\t\t\t\t\tC1.9,3.6,2,3.5,2.1,3.5c0.1-0.1,0.2-0.2,0.3-0.3C2.4,3.1,2.5,3,2.5,2.9c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.3,0-0.4\n\t\t\t\t\tc0-0.1,0-0.3,0-0.4c0-0.1-0.1-0.2-0.1-0.3S2.4,1.2,2.4,1.1C2.3,1,2.2,0.9,2.2,0.9C2.1,0.8,2,0.7,1.9,0.6C1.8,0.6,1.6,0.5,1.5,0.4\n\t\t\t\t\tC1.4,0.4,1.2,0.3,1.1,0.2C0.9,0.2,0.7,0.1,0.5,0.1L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-118",
                  transform: "translate(1592.569 208.895)",
                },
                _.createElement("path", {
                  _: "Path_828",
                  className: "st1",
                  _: "M3.3,0.7C2.8,0.5,2.4,0.4,1.9,0.2C1.7,0.2,1.5,0.1,1.3,0.1C1.2,0,1,0,0.8,0L0.4,0\n\t\t\t\t\tC0.3,0,0.2,0,0.1,0.1C0.1,0.1,0,0.1,0,0.2l0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-119",
                  transform: "translate(1608.367 352.159)",
                },
                _.createElement("path", {
                  _: "Path_829",
                  className: "st1",
                  _: "M4.3,4.2c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.3,0L3.2,4.1C3,4.1,2.9,4,2.7,3.9\n\t\t\t\t\tC2.6,3.8,2.5,3.7,2.3,3.6C2.1,3.5,2,3.4,1.8,3.2C1.6,3.1,1.5,2.9,1.3,2.7C1.2,2.6,1.1,2.4,1,2.3C0.9,2.1,0.8,1.9,0.7,1.8\n\t\t\t\t\tC0.5,1.5,0.4,1.2,0.3,0.9C0.1,0.6,0.1,0.3,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-120",
                  transform: "translate(1608.28 346.352)",
                },
                _.createElement("path", {
                  _: "Path_830",
                  className: "st1",
                  _: "M0.1,5.8C0.1,5.5,0,5.2,0,4.9c0-0.3,0-0.7,0-1c0-0.2,0.1-0.4,0.1-0.6c0-0.2,0.1-0.4,0.1-0.6\n\t\t\t\t\tc0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.3-0.6C0.9,1.4,1,1.2,1.1,1.1c0.1-0.1,0.2-0.3,0.3-0.4C1.6,0.5,1.8,0.4,2,0.3\n\t\t\t\t\tC2.2,0.1,2.3,0.1,2.5,0l0.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LWPOLYLINE-3",
                  transform: "translate(1614.463 350.68)",
                },
                _.createElement("path", {
                  _: "Path_831",
                  className: "st1",
                  _: "M0,0L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-121",
                  transform: "translate(1601.514 383.755)",
                },
                _.createElement("path", {
                  _: "Path_832",
                  className: "st1",
                  _: "M0,1.1C0.3,1,0.5,1,0.8,0.9c0.5-0.1,1-0.3,1.5-0.4s1-0.3,1.4-0.4C3.8,0.1,4,0.1,4.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-122",
                  transform: "translate(1609.665 352.628)",
                },
                _.createElement("path", {
                  _: "Path_833",
                  className: "st1",
                  _: "M0,29.5c1.4-0.6,2.8-1.3,4.1-2c1.4-0.7,2.7-1.6,4-2.5c1.3-0.9,2.6-2,3.8-3\n\t\t\t\t\tc1.3-1.1,2.5-2.3,3.6-3.5c1.2-1.3,2.3-2.6,3.4-4c1.1-1.4,2.1-2.9,3.1-4.4s2-3.2,2.9-4.9s1.7-3.5,2.6-5.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-46",
                  transform: "translate(1605.95 194.576)",
                },
                _.createElement("line", {
                  _: "Line_842",
                  className: "st1",
                  _: "2.8",
                  _: "2.8",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-123",
                  transform: "translate(1597.546 369.066)",
                },
                _.createElement("path", {
                  _: "Path_834",
                  className: "st1",
                  _: "M0,1.2c0.9-0.3,1.8-0.6,2.7-0.8c1-0.2,2-0.3,3-0.4c1,0,2,0,3.1,0.1c1,0.1,2.1,0.3,3.1,0.6\n\t\t\t\t\tc1,0.3,2,0.7,3,1.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-124",
                  transform: "translate(1601.658 223.935)",
                },
                _.createElement("path", {
                  _: "Path_835",
                  className: "st1",
                  _: "M0,0c1.1,1.8,2.2,3.5,3.3,5.4c1,1.8,2.1,3.8,3.1,5.7s1.9,3.9,2.8,6c0.9,2,1.8,4.1,2.6,6.2\n\t\t\t\t\tc0.8,2.1,1.6,4.2,2.3,6.4c0.7,2.2,1.4,4.3,2.1,6.6c0.6,2.2,1.2,4.4,1.8,6.7s1,4.5,1.5,6.8s0.9,4.5,1.2,6.9\n\t\t\t\t\tc0.4,2.3,0.6,4.6,0.9,6.9c0.3,2.3,0.5,4.6,0.6,6.9s0.3,4.5,0.3,6.8s0,4.5,0,6.7c-0.1,2.2-0.2,4.4-0.3,6.6\n\t\t\t\t\tc-0.2,2.2-0.4,4.3-0.6,6.4s-0.6,4.2-0.9,6.2c-0.3,1.6-0.6,3.2-1,4.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-125",
                  transform: "translate(1609.377 382.168)",
                },
                _.createElement("path", {
                  _: "Path_836",
                  className: "st1",
                  _: "M0.3,0c0,0.1-0.1,0.2-0.2,0.2c0,0-0.1,0-0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-126",
                  transform: "translate(1587.664 371.492)",
                },
                _.createElement("path", {
                  _: "Path_837",
                  className: "st1",
                  _: "M0,7.7C0,7.7,0,7.7,0,7.7C0,7.7,0,7.7,0,7.7C0.1,7.8,0.2,7.9,0.3,8c0.2,0.1,0.3,0.3,0.5,0.4\n\t\t\t\t\tC1,8.6,1.3,8.7,1.5,8.7C1.7,8.8,1.8,8.9,2,8.9C2.2,8.9,2.4,9,2.6,9c0.2,0,0.5,0.1,0.7,0.1c0.1,0,0.3,0,0.4,0h0.5\n\t\t\t\t\tc0.2,0,0.4,0,0.6,0c0.3,0,0.5,0,0.7-0.1c0.3,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.9-0.2c0.3-0.1,0.5-0.1,0.8-0.2\n\t\t\t\t\tC8.4,8.4,8.7,8.3,9,8.2C9.2,8.1,9.4,8,9.7,7.9c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.3-0.1,0.5-0.2,0.8-0.4\n\t\t\t\t\tc0.2-0.1,0.5-0.2,0.7-0.4c0.2-0.1,0.5-0.2,0.7-0.4L13.7,6c0.3-0.2,0.6-0.4,0.9-0.5s0.6-0.4,0.9-0.5c0.3-0.2,0.6-0.3,0.8-0.5\n\t\t\t\t\tc0.5-0.3,1-0.6,1.5-0.9c0.5-0.3,0.9-0.5,1.3-0.8C19.6,2.5,20,2.2,20.4,2c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.4-0.2\n\t\t\t\t\tc0.1-0.1,0.2-0.1,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2s0.3-0.1,0.4-0.2c0.2-0.1,0.4-0.1,0.5-0.2c0.2-0.1,0.3-0.1,0.5-0.2\n\t\t\t\t\tc0.1,0,0.2-0.1,0.4-0.1c0.1,0,0.3-0.1,0.4-0.1l0.3-0.1c0.1,0,0.2-0.1,0.3-0.1C24.8,0.1,24.9,0,25,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-127",
                  transform: "translate(1596.464 382.168)",
                },
                _.createElement("path", {
                  _: "Path_838",
                  className: "st1",
                  _: "M0,3.4C0,3.4,0,3.4,0,3.4C0,3.4,0,3.4,0,3.4l0.4,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0\n\t\t\t\t\ts0.2,0,0.3,0c0.2,0,0.4-0.1,0.7-0.1S2.6,3.1,2.9,3l0.5-0.1c0.2,0,0.4-0.1,0.6-0.1c0.2,0,0.4-0.1,0.6-0.1c0.1,0,0.3-0.1,0.4-0.1\n\t\t\t\t\tl0.4-0.1c0.1,0,0.3-0.1,0.5-0.1c0.2,0,0.3-0.1,0.5-0.1c0.1,0,0.3-0.1,0.4-0.1C7,2,7.1,2,7.3,1.9c0.2,0,0.3-0.1,0.5-0.1\n\t\t\t\t\tc0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.5-0.1,0.8-0.2C9,1.4,9.2,1.4,9.4,1.3C9.7,1.2,10,1.1,10.3,1c0.1,0,0.3-0.1,0.5-0.1\n\t\t\t\t\ts0.3-0.1,0.4-0.1c0.2-0.1,0.4-0.1,0.5-0.2L12,0.4c0.2-0.1,0.4-0.1,0.6-0.2s0.4-0.1,0.6-0.2",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-47",
                  transform: "translate(1539.115 237.425)",
                },
                _.createElement("line", {
                  _: "Line_843",
                  className: "st1",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-128",
                  transform: "translate(1535.148 230.608)",
                },
                _.createElement("path", {
                  _: "Path_839",
                  className: "st1",
                  _: "M2.4,5.8L2.4,5.8C2.3,5.7,2.2,5.6,2.1,5.6C2,5.5,1.9,5.4,1.8,5.3C1.7,5.3,1.6,5.2,1.6,5.1\n\t\t\t\t\tC1.5,5,1.4,5,1.3,4.9C1.2,4.8,1.2,4.7,1.1,4.6S0.9,4.4,0.9,4.4C0.8,4.3,0.7,4.2,0.7,4.1C0.6,4,0.6,3.9,0.5,3.9\n\t\t\t\t\tC0.4,3.7,0.3,3.6,0.3,3.4C0.2,3.2,0.1,3.1,0.1,2.9C0,2.7,0,2.5,0,2.3c0-0.3,0-0.5,0.1-0.8c0.1-0.2,0.2-0.5,0.4-0.6\n\t\t\t\t\tC0.8,0.7,1,0.5,1.3,0.4c0.3-0.2,0.6-0.3,1-0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-129",
                  transform: "translate(1544.742 221.663)",
                },
                _.createElement("path", {
                  _: "Path_840",
                  className: "st1",
                  _: "M0.4,0.3C0.3,0.1,0.2,0,0.1,0L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-130",
                  transform: "translate(1574.066 240.563)",
                },
                _.createElement("path", {
                  _: "Path_841",
                  className: "st1",
                  _: "M0,0c0.2,0,0.4,0,0.5,0.1c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-48",
                  transform: "translate(1514.481 236.652)",
                },
                _.createElement("line", {
                  _: "Line_844",
                  className: "st1",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-8",
                  transform: "translate(1517.871 249.328)",
                },
                _.createElement("path", {
                  _: "Path_842",
                  className: "st1",
                  _: "M0,0c0.5,1.7,1.4,3.3,2.7,4.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-131",
                  transform: "translate(1529.233 265.775)",
                },
                _.createElement("path", {
                  _: "Path_843",
                  className: "st1",
                  _: "M6.9,8.6c-0.1,0-0.1,0-0.2,0C6.4,8.5,6.2,8.4,6,8.4C5.8,8.3,5.6,8.2,5.4,8.1\n\t\t\t\t\tC5.3,8,5.1,7.9,4.9,7.7C4.8,7.6,4.7,7.5,4.5,7.4C4.4,7.3,4.2,7.1,4.1,7C4,6.9,3.9,6.7,3.7,6.6C3.6,6.4,3.4,6.2,3.3,6.1\n\t\t\t\t\tC3.2,5.9,3.1,5.7,2.9,5.5S2.7,5.1,2.5,4.9S2.3,4.5,2.1,4.3S1.9,3.8,1.7,3.5C1.6,3.4,1.6,3.3,1.5,3.2S1.4,3,1.3,2.9\n\t\t\t\t\tS1.2,2.7,1.2,2.6C1.1,2.4,1,2.3,1,2.2C0.9,2.1,0.9,1.9,0.8,1.8c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.1-0.3\n\t\t\t\t\tc0-0.1-0.1-0.2-0.1-0.3C0.3,0.6,0.1,0.3,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LWPOLYLINE-4",
                  transform: "translate(1542.325 243.593)",
                },
                _.createElement("path", {
                  _: "Path_844",
                  className: "st1",
                  _: "M8.8,2.8l0,0.1L8.5,3.3L8,3.6L7.4,3.8L6.7,3.9H5.9L5.1,3.8L4.2,3.6L3.3,3.3L2.4,2.9L1.7,2.5\n\t\t\t\t\tL1,2L0.5,1.5L0.2,1L0,0.6l0-0.5L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-132",
                  transform: "translate(1594.661 351.258)",
                },
                _.createElement("path", {
                  _: "Path_845",
                  className: "st1",
                  _: "M0.1,1.7L0.1,1.7L0.1,1.7C0,1.5,0,1.3,0,1.2C0,1,0,0.8,0.1,0.7c0-0.1,0.1-0.2,0.1-0.3\n\t\t\t\t\tc0-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.7,0,0.8,0,0.9,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-9",
                  transform: "translate(1543.191 274.202)",
                },
                _.createElement("path", {
                  _: "Path_846",
                  className: "st1",
                  _: "M0.3,0C0.2,0,0.1,0,0,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-133",
                  transform: "translate(1595.491 355.875)",
                },
                _.createElement("path", {
                  _: "Path_847",
                  className: "st1",
                  _: "M1.8,1.4c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2-0.1C0.9,1.2,0.8,1.2,0.7,1.1\n\t\t\t\t\tC0.6,1,0.5,0.9,0.4,0.8C0.4,0.8,0.3,0.7,0.3,0.6C0.2,0.4,0.1,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LWPOLYLINE-5",
                  transform: "translate(1531.324 237.245)",
                },
                _.createElement("path", {
                  _: "Path_848",
                  className: "st1",
                  _: "M8.8,2.8l0,0.1L8.5,3.3L8,3.6L7.4,3.8L6.7,3.9H5.9L5,3.8L4.1,3.6L3.2,3.3L2.4,2.9L1.7,2.5L1,2\n\t\t\t\t\tL0.5,1.5L0.2,1L0,0.5l0-0.5L0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-134",
                  transform: "translate(1556.681 246.586)",
                },
                _.createElement("path", {
                  _: "Path_849",
                  className: "st1",
                  _: "M0,0L0,0c0.1,0,0.1,0,0.1,0l0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-135",
                  transform: "translate(1556.464 249.869)",
                },
                _.createElement("path", {
                  _: "Path_850",
                  className: "st1",
                  _: "M0,0c0.3,0.2,0.7,0.4,1,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.1,0.9,0.1\n\t\t\t\t\tc0.3,0,0.5-0.1,0.8-0.1c0.2-0.1,0.4-0.2,0.5-0.4C4.2,0.3,4.3,0.1,4.3,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-10",
                  transform: "translate(1520.504 253.944)",
                },
                _.createElement("path", {
                  _: "Path_851",
                  className: "st1",
                  _: "M0,0c0,0.2,0.1,0.3,0.2,0.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-11",
                  transform: "translate(1528.475 265.126)",
                },
                _.createElement("path", {
                  _: "Path_852",
                  className: "st1",
                  _: "M0,0c0.1,0.3,0.4,0.6,0.8,0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-136",
                  transform: "translate(1526.383 261.844)",
                },
                _.createElement("path", {
                  _: "Path_853",
                  className: "st1",
                  _: "M0.5,9.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1-0.1L0.2,8.9C0.2,8.8,0.1,8.7,0.1,8.6\n\t\t\t\t\tc0-0.1,0-0.2-0.1-0.3C0,8.1,0,8,0,7.8l0-1.2c0-0.5,0-1,0.1-1.7c0-0.5,0.1-1,0.1-1.6c0-0.5,0.1-1,0.1-1.6c0-0.4,0.1-0.9,0.1-1.3\n\t\t\t\t\tc0-0.2,0-0.3,0-0.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-137",
                  transform: "translate(1586.654 192.123)",
                },
                _.createElement("path", {
                  _: "Path_854",
                  className: "st1",
                  _: "M22.8,8.8c-0.1-0.1-0.3-0.2-0.4-0.3S22.1,8.2,22,8.1c-0.1-0.1-0.3-0.3-0.5-0.4\n\t\t\t\t\tc-0.2-0.1-0.4-0.3-0.6-0.5c-0.3-0.2-0.5-0.4-0.8-0.6c-0.1-0.1-0.2-0.1-0.3-0.2s-0.2-0.1-0.3-0.2l-0.4-0.3\n\t\t\t\t\tc-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.5-0.4s-0.4-0.3-0.5-0.4c-0.3-0.2-0.5-0.4-0.8-0.6s-0.6-0.4-0.9-0.6S15.3,3.2,15,3\n\t\t\t\t\tc-0.3-0.1-0.5-0.3-0.8-0.5c-0.2-0.1-0.4-0.2-0.6-0.3C13.4,2.1,13.2,2,13,1.9c-0.3-0.1-0.5-0.3-0.8-0.4c-0.2-0.1-0.4-0.1-0.5-0.2\n\t\t\t\t\tl-0.5-0.2c-0.4-0.1-0.7-0.3-1-0.4C9.9,0.6,9.6,0.6,9.4,0.5S8.9,0.4,8.7,0.3L8.3,0.2C8.1,0.2,8,0.1,7.8,0.1L7.1,0\n\t\t\t\t\tC6.8,0,6.5,0,6.3,0L5.6,0C5.3,0,5.1,0,4.9,0c-0.2,0-0.4,0-0.6,0.1L3.8,0.2c-0.1,0-0.3,0.1-0.5,0.1L2.9,0.4c-0.1,0-0.3,0.1-0.4,0.1\n\t\t\t\t\tC2.3,0.6,2.1,0.7,1.8,0.8C1.7,0.9,1.5,1,1.3,1.1C1.2,1.1,1.1,1.2,1,1.3c-0.1,0-0.2,0.1-0.3,0.1C0.6,1.5,0.4,1.6,0.3,1.7\n\t\t\t\t\tC0.2,1.8,0.1,1.9,0,1.9l0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-49",
                  transform: "translate(1607.682 346.316)",
                },
                _.createElement("line", {
                  _: "Line_845",
                  className: "st2",
                  _: "3.2",
                  _: "0",
                  _: "0",
                  _: "0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-50",
                  transform: "translate(1609.413 356.379)",
                },
                _.createElement("line", {
                  _: "Line_846",
                  className: "st2",
                  _: "0",
                  _: "0.6",
                  _: "3.2",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-138",
                  transform: "translate(1610.892 346.3)",
                },
                _.createElement("path", {
                  _: "Path_855",
                  className: "st3",
                  _: "M3.6,4.4c-0.1-0.5-0.2-1-0.4-1.4C3.1,2.6,3,2.2,2.8,1.9C2.7,1.6,2.5,1.4,2.4,1.1\n\t\t\t\t\tC2.3,1,2.1,0.8,2,0.7C1.9,0.6,1.8,0.5,1.7,0.4C1.6,0.3,1.5,0.3,1.3,0.2C1.1,0.1,1,0,0.8,0C0.5,0,0.2,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-139",
                  transform: "translate(1612.623 350.644)",
                },
                _.createElement("path", {
                  _: "Path_856",
                  className: "st2",
                  _: "M0,5.7c0.3-0.1,0.5-0.1,0.8-0.3c0.2-0.1,0.3-0.2,0.5-0.4C1.4,5,1.5,4.8,1.5,4.7\n\t\t\t\t\tc0.1-0.1,0.1-0.2,0.2-0.4c0.1-0.2,0.1-0.4,0.2-0.6C2,3.4,2,3.1,2,2.8c0-0.4,0-0.8,0-1.3C2,1.3,2,1.1,2,0.8c0-0.3-0.1-0.6-0.1-0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-140",
                  transform: "translate(1601.514 383.755)",
                },
                _.createElement("path", {
                  _: "Path_857",
                  className: "st2",
                  _: "M0,1.1C0.3,1,0.5,1,0.8,0.9c0.5-0.1,1-0.3,1.5-0.4C2.9,0.4,3.5,0.2,4.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-141",
                  transform: "translate(1609.377 198.038)",
                },
                _.createElement("path", {
                  _: "Path_858",
                  className: "st3",
                  _: "M0,0c0.4,0.4,0.8,0.8,1.1,1.2c1.1,1.2,2.2,2.5,3.3,3.7s2.1,2.5,3.2,3.8s2.1,2.6,3,3.9\n\t\t\t\t\tc1,1.3,2,2.7,2.9,4c0.1,0.1,0.2,0.3,0.3,0.4c0.6,0.9,1.4,2.3,1.9,3.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-51",
                  transform: "translate(1597.546 370.158)",
                },
                _.createElement("line", {
                  _: "Line_847",
                  className: "st2",
                  _: "0.2",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-142",
                  transform: "translate(1609.413 352.881)",
                },
                _.createElement("path", {
                  _: "Path_859",
                  className: "st3",
                  _: "M0,29.6c0.6-0.3,1.3-0.5,1.9-0.8c0.6-0.3,1.1-0.5,1.7-0.8c0.5-0.3,1-0.5,1.4-0.8\n\t\t\t\t\tc0.4-0.3,0.8-0.5,1.2-0.7l1-0.6c0.3-0.2,0.5-0.4,0.8-0.6c0.4-0.3,0.9-0.6,1.3-0.9s0.9-0.7,1.3-1l1.3-1.1c0.4-0.4,0.8-0.7,1.2-1.1\n\t\t\t\t\tc0.4-0.4,0.7-0.7,1.1-1l1.2-1.2c0.5-0.5,0.9-1,1.3-1.5s0.9-1,1.3-1.6c0.6-0.7,1.2-1.5,1.7-2.2l1.6-2.3c0.5-0.8,1-1.6,1.6-2.4\n\t\t\t\t\tc0.5-0.8,1-1.7,1.5-2.5c0.5-0.9,1-1.8,1.4-2.7c0.5-0.9,1-1.9,1.4-2.9L27.7,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-143",
                  transform: "translate(1605.914 194.54)",
                },
                _.createElement("path", {
                  _: "Path_860",
                  className: "st3",
                  _: "M3.4,3.4C2.8,2.8,2.3,2.2,1.7,1.7S0.6,0.5,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-144",
                  transform: "translate(1584.526 344.044)",
                },
                _.createElement("path", {
                  _: "Path_861",
                  className: "st3",
                  _: "M0,0c0.5,1.2,0.9,2.3,1.4,3.4l2.9,7.1c1,2.5,2,4.9,3,7.4c1,2.6,2.1,5.1,3.1,7.6\n\t\t\t\t\tc0.2,0.5,0.4,0.9,0.6,1.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-145",
                  transform: "translate(1541.532 274.395)",
                },
                _.createElement("path", {
                  _: "Path_862",
                  className: "st3",
                  _: "M0,0c0.7,0.3,1.2,0.6,1.9,0.9C2.2,1,2.8,1.3,3.1,1.5",
                }),
              ),
              _.createElement("path", {
                _: "Path_863",
                className: "st2",
                _: "M1614.7,352.5c0.2,1.2,0.4,2.1,0.4,2.5",
              }),
              _.createElement("path", {
                _: "Path_864",
                className: "st3",
                _: "M1574.6,249.8l1.3,1.3c0.4,0.4,0.9,0.9,1.3,1.3c0.2,0.2,0.4,0.5,0.6,0.7\n\t\t\t\tc0.1,0.2,0.3,0.3,0.5,0.5c0.1,0.1,0.2,0.3,0.3,0.4c0.4,0.4,0.7,0.8,1.1,1.2c0.4,0.5,0.9,1,1.3,1.6c0.5,0.6,1,1.2,1.6,1.9\n\t\t\t\tc0.6,0.7,1.2,1.4,1.7,2.2c1.2,1.5,2.2,3,3.3,4.6c1,1.6,2.1,3.2,3.1,4.9s1.9,3.5,2.8,5.2c0.9,1.8,1.8,3.7,2.6,5.6\n\t\t\t\tc0.5,1.2,1,2.3,1.4,3.5c0.5,1.2,1,2.5,1.4,3.8c0.5,1.3,1,2.7,1.4,4c0.5,1.4,1,2.9,1.4,4.4c0.5,1.6,1,3.2,1.4,4.8\n\t\t\t\tc0.5,1.7,1,3.5,1.5,5.2c0.4,1.6,0.9,3.2,1.3,4.8c0.5,1.7,0.9,3.5,1.3,5.2c0.5,1.9,0.9,3.8,1.4,5.7c0.5,2.1,0.9,4.1,1.4,6.2\n\t\t\t\tc0.5,2.3,1,4.6,1.4,6.9c0.5,2.5,1,4.9,1.4,7.4c0.3,1.5,0.5,3,0.8,4.4c0.1,0.4,0.2,1.2,0.4,1.9",
              }),
              _.createElement(
                "g",
                {
                  _: "SPLINE-146",
                  transform: "translate(1615.184 354.973)",
                },
                _.createElement("path", {
                  _: "Path_865",
                  className: "st2",
                  _: "M1.6,9C1.3,7.4,1,5.8,0.7,4.1C0.5,2.7,0.3,1.4,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-147",
                  transform: "translate(1544.778 275.982)",
                },
                _.createElement("path", {
                  _: "Path_866",
                  className: "st3",
                  _: "M0,0c0.3,0.1,0.6,0.3,0.9,0.5c0.6,0.3,1.2,0.6,1.8,1c0.5,0.3,1,0.6,1.5,0.9\n\t\t\t\t\tC4.6,2.7,5,3,5.4,3.3C5.9,3.6,6.3,4,6.8,4.4C7.1,4.7,7.5,5,7.9,5.3c0.3,0.3,0.5,0.5,0.8,0.8c0.3,0.3,0.5,0.5,0.8,0.8\n\t\t\t\t\tc0.3,0.3,0.6,0.6,0.8,0.9c0.3,0.4,0.6,0.7,1,1.1c0.4,0.4,0.8,0.9,1.1,1.4c0.6,0.7,1.1,1.5,1.7,2.3c0.6,0.9,1.2,1.8,1.8,2.7\n\t\t\t\t\tc0.5,0.9,1,1.7,1.6,2.6c0.5,0.8,0.9,1.6,1.3,2.4c0.4,0.7,0.8,1.4,1.1,2.1c0.3,0.6,0.6,1.2,0.9,1.8c0.2,0.4,0.4,0.9,0.6,1.3\n\t\t\t\t\tc0.2,0.3,0.3,0.7,0.5,1c0.1,0.3,0.3,0.5,0.4,0.8c0.2,0.4,0.4,0.7,0.5,1.1c0.3,0.5,0.5,1,0.7,1.6c0.3,0.7,0.6,1.3,0.9,2\n\t\t\t\t\tc0.4,0.8,0.8,1.7,1.1,2.5c0.4,0.9,0.8,1.8,1.2,2.6c0.4,1,0.9,2.1,1.3,3.1l1.5,3.6c0.6,1.4,1.2,2.7,1.7,4.1\n\t\t\t\t\tc0.6,1.6,1.3,3.1,1.9,4.6l2.2,5.2c0.8,1.9,1.6,3.9,2.4,5.8c0.6,1.5,1.2,3,1.8,4.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-148",
                  transform: "translate(1587.664 370.23)",
                },
                _.createElement("path", {
                  _: "Path_867",
                  className: "st3",
                  _: "M9.9,0C9.3,0.2,8.7,0.4,8.2,0.7C7.7,0.9,7.3,1.1,6.8,1.3c-0.3,0.2-0.7,0.4-1,0.5\n\t\t\t\t\tC5.6,2,5.4,2.1,5.1,2.3L4.6,2.6C4.4,2.7,4.3,2.8,4.1,2.9S3.8,3.1,3.6,3.2C3.4,3.4,3.2,3.5,3.1,3.6C2.9,3.8,2.6,4,2.4,4.1\n\t\t\t\t\tS2,4.5,1.8,4.7C1.5,4.9,1.3,5.2,1,5.4C0.8,5.7,0.6,5.9,0.4,6.1L0.1,6.4C0,6.5,0,6.5,0,6.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-149",
                  transform: "translate(1587.267 376.722)",
                },
                _.createElement("path", {
                  _: "Path_868",
                  className: "st3",
                  _: "M0.5,0C0.4,0.2,0.2,0.4,0.1,0.6C0,0.8,0,1.1,0,1.3C0,1.5,0,1.8,0.1,2c0.1,0.2,0.1,0.3,0.3,0.4\n\t\t\t\t\tc0.4,0.7,0.9,1.3,1.6,1.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-150",
                  transform: "translate(1589.178 380.978)",
                },
                _.createElement("path", {
                  _: "Path_869",
                  className: "st3",
                  _: "M0,0c0.7,0.5,1.4,1,2.2,1.4c0.7,0.4,1.4,0.9,2.1,1.3L6.2,4c0.3,0.2,0.7,0.4,1,0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-151",
                  transform: "translate(1514.408 220.04)",
                },
                _.createElement("path", {
                  _: "Path_870",
                  className: "st3",
                  _: "M30.4,1.6c-0.7-0.2-1.5-0.4-2.2-0.5c-1-0.2-2.1-0.4-3.1-0.5c-0.9-0.1-1.9-0.3-2.8-0.3\n\t\t\t\t\tc-0.8-0.1-1.6-0.1-2.5-0.2c-0.7,0-1.4,0-2.1,0c-0.6,0-1.2,0-1.8,0l-1.7,0.1c-0.5,0-0.9,0.1-1.4,0.1c-0.4,0.1-0.9,0.1-1.3,0.2\n\t\t\t\t\tc-0.5,0.1-0.9,0.2-1.3,0.3C9.8,0.9,9.3,1,8.9,1.1C8.3,1.3,7.7,1.5,7.2,1.7c-0.5,0.2-1,0.4-1.4,0.6C5.3,2.5,5,2.7,4.6,2.9\n\t\t\t\t\tC4.4,3.1,4.1,3.2,3.8,3.4C3.6,3.6,3.4,3.7,3.1,3.9C2.9,4.1,2.7,4.3,2.4,4.5C2.2,4.8,1.9,5.1,1.7,5.4C1.4,5.8,1.1,6.2,0.9,6.6\n\t\t\t\t\tC0.5,7.2,0.3,7.8,0,8.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-152",
                  transform: "translate(1574.571 240.78)",
                },
                _.createElement("path", {
                  _: "Path_871",
                  className: "st3",
                  _: "M0.2,0c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.4,0.3,0.7,0.4,1.1C0.8,1.8,0.9,2.2,1,2.5\n\t\t\t\t\tC1,2.7,1,2.9,1.1,3.1c0,0.1,0,0.3,0,0.4V4c0,0.3,0,0.5,0,0.8C1,5.1,1,5.4,1,5.8C0.9,6.2,0.8,6.6,0.7,7.1C0.6,7.8,0.3,8.4,0,9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-52",
                  transform: "translate(1513.867 228.993)",
                },
                _.createElement("path", {
                  _: "Path_872",
                  className: "st3",
                  _: "M0.5,0L0.5,0C0,1.6-0.1,3.3,0.2,5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-153",
                  transform: "translate(1536.085 274.359)",
                },
                _.createElement("path", {
                  _: "Path_873",
                  className: "st3",
                  _: "M0,0c0.3,0,0.6,0.1,1,0.1c0.4,0,0.8,0.1,1.2,0.1l1.3,0c0.5,0,0.9,0,1.4-0.1\n\t\t\t\t\tC5.1,0.1,5.3,0,5.5,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-154",
                  transform: "translate(1514.071 234.369)",
                },
                _.createElement("path", {
                  _: "Path_874",
                  className: "st3",
                  _: "M0,0c0.5,2.1,1,4.1,1.5,6.2c0.4,1.7,0.8,3.5,1.3,5.2c0.3,1.1,0.5,2.2,0.9,3.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-155",
                  transform: "translate(1605.662 382.421)",
                },
                _.createElement("path", {
                  _: "Path_875",
                  className: "st3",
                  _: "M0,1.3C0.4,1.2,0.7,1.1,1,1c0.4-0.1,0.6-0.2,1-0.3C2.6,0.5,3.2,0.2,3.8,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-156",
                  transform: "translate(1596.428 384.909)",
                },
                _.createElement("path", {
                  _: "Path_876",
                  className: "st3",
                  _: "M0,0.6c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4,0c0.4,0,0.8,0,1.2-0.1c0.5-0.1,1-0.1,1.5-0.3\n\t\t\t\t\tS4.5,0.1,5.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-157",
                  transform: "translate(1547.555 242.294)",
                },
                _.createElement("path", {
                  _: "Path_877",
                  className: "st2",
                  _: "M3.6,4.1L3.6,4.1c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\t\t\t\t\tC3.2,2.2,3.1,2.1,3,1.9C2.9,1.8,2.8,1.6,2.6,1.5C2.5,1.4,2.3,1.2,2.2,1.1C2,1,1.8,0.9,1.7,0.8C1.5,0.7,1.4,0.6,1.2,0.5L0.8,0.3\n\t\t\t\t\tC0.5,0.2,0.3,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-158",
                  transform: "translate(1542.326 241.97)",
                },
                _.createElement("path", {
                  _: "Path_878",
                  className: "st2",
                  _: "M5.2,0.4C4.9,0.3,4.7,0.3,4.4,0.2c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4,0-0.5-0.1C3.4,0,3.2,0,3,0\n\t\t\t\t\tC2.8,0,2.6,0,2.5,0c-0.2,0-0.4,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1C1.2,0.3,1.1,0.4,0.9,0.5C0.8,0.5,0.7,0.6,0.5,0.8\n\t\t\t\t\tC0.4,0.9,0.3,1,0.2,1.2L0,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-53",
                  transform: "translate(1550.657 246.37)",
                },
                _.createElement("line", {
                  _: "Line_848",
                  className: "st2",
                  _: "0",
                  _: "1.6",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-54",
                  transform: "translate(1541.929 243.593)",
                },
                _.createElement("line", {
                  _: "Line_849",
                  className: "st2",
                  _: "0.4",
                  _: "0",
                  _: "0",
                  _: "1.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-159",
                  transform: "translate(1536.554 235.946)",
                },
                _.createElement("path", {
                  _: "Path_879",
                  className: "st2",
                  _: "M3.6,4.1L3.6,4.1c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\t\t\t\t\tC3.2,2.2,3.1,2.1,3,1.9C2.9,1.8,2.8,1.6,2.6,1.5C2.5,1.4,2.3,1.2,2.2,1.1C2,1,1.8,0.9,1.7,0.8C1.5,0.7,1.4,0.6,1.2,0.5L0.8,0.3\n\t\t\t\t\tC0.5,0.2,0.3,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-160",
                  transform: "translate(1531.325 235.622)",
                },
                _.createElement("path", {
                  _: "Path_880",
                  className: "st2",
                  _: "M5.2,0.4C4.9,0.3,4.7,0.3,4.4,0.2c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4,0-0.5-0.1C3.4,0,3.2,0,3,0\n\t\t\t\t\tC2.8,0,2.6,0,2.5,0c-0.2,0-0.4,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1C1.2,0.3,1.1,0.4,0.9,0.5C0.8,0.5,0.7,0.6,0.5,0.8\n\t\t\t\t\tC0.4,0.9,0.3,1,0.2,1.2L0,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-55",
                  transform: "translate(1539.656 240.022)",
                },
                _.createElement("line", {
                  _: "Line_850",
                  className: "st2",
                  _: "0",
                  _: "1.4",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-56",
                  transform: "translate(1530.783 237.245)",
                },
                _.createElement("line", {
                  _: "Line_851",
                  className: "st2",
                  _: "0.6",
                  _: "0",
                  _: "0",
                  _: "1.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-161",
                  transform: "translate(1556.609 246.607)",
                },
                _.createElement("path", {
                  _: "Path_881",
                  className: "st2",
                  _: "M4.2,3.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.2,0-0.4c0-0.2-0.1-0.4-0.2-0.6\n\t\t\t\t\tC3.9,1.8,3.7,1.5,3.5,1.2C3.3,1.1,3.2,1,3.1,0.9C2.8,0.8,2.6,0.6,2.4,0.5C2,0.3,1.7,0.2,1.3,0.1C1.1,0,0.9,0,0.7,0\n\t\t\t\t\tC0.5,0,0.2,0,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-57",
                  transform: "translate(1560.792 249.869)",
                },
                _.createElement("line", {
                  _: "Line_852",
                  className: "st2",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-58",
                  transform: "translate(1555.13 247.488)",
                },
                _.createElement("line", {
                  _: "Line_853",
                  className: "st2",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-162",
                  transform: "translate(1555.13 246.586)",
                },
                _.createElement("path", {
                  _: "Path_882",
                  className: "st2",
                  _: "M1.6,0C1.4,0,1.2,0.1,1,0.1c-0.2,0-0.3,0.1-0.5,0.2C0.4,0.4,0.3,0.5,0.2,0.6\n\t\t\t\t\tC0.1,0.7,0.1,0.8,0,0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-163",
                  transform: "translate(1520.756 254.414)",
                },
                _.createElement("path", {
                  _: "Path_883",
                  className: "st3",
                  _: "M0,0c0.2,0.3,0.4,0.5,0.7,0.8C0.9,1,1.1,1.2,1.4,1.5C1.6,1.8,1.8,2,2.1,2.3L2.7,3\n\t\t\t\t\tc0.2,0.3,0.4,0.5,0.6,0.7C3.5,4,3.7,4.2,3.9,4.4c0.3,0.4,0.6,0.8,0.9,1.1c0.3,0.3,0.5,0.7,0.7,1C5.7,7,6,7.4,6.2,7.8\n\t\t\t\t\tC6.5,8.3,6.8,8.7,7,9.2c0.3,0.5,0.5,1,0.7,1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-164",
                  transform: "translate(1526.852 270.933)",
                },
                _.createElement("path", {
                  _: "Path_884",
                  className: "st3",
                  _: "M0,0c0.3,0.1,0.6,0.2,1,0.3c0.6,0.1,1.1,0.2,1.7,0.3c0.6,0.1,1.2,0.1,1.7,0.1h0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-165",
                  transform: "translate(1522.524 256.361)",
                },
                _.createElement("path", {
                  _: "Path_885",
                  className: "st3",
                  _: "M0,0c0.1,0.5,0.3,1,0.4,1.5C0.7,2.3,0.9,3.2,1.1,4c0.1,0.7,0.3,1.3,0.4,2\n\t\t\t\t\tc0.1,0.5,0.2,1,0.3,1.5c0,0.3,0.1,0.5,0.1,0.8C2,8.4,2,8.6,2,8.8c0,0.3,0.1,0.5,0.1,0.7c0,0.3,0.1,0.6,0.1,1\n\t\t\t\t\tc0.1,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.3,0,0.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-166",
                  transform: "translate(1525.049 268.588)",
                },
                _.createElement("path", {
                  _: "Path_886",
                  className: "st3",
                  _: "M0,0c0.1,0.4,0.2,0.7,0.3,1c0.1,0.3,0.3,0.6,0.6,0.8C1,2,1.3,2.2,1.5,2.3\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-167",
                  transform: "translate(1528.475 265.126)",
                },
                _.createElement("path", {
                  _: "Path_887",
                  className: "st3",
                  _: "M0,0c0.4,0.9,0.8,1.8,1.2,2.6C1.5,3.3,1.8,4,2.2,4.7c0.3,0.5,0.6,1,0.9,1.4\n\t\t\t\t\tc0.3,0.3,0.5,0.6,0.8,0.9c0.1,0.1,0.3,0.3,0.4,0.4l0.3,0.3C4.8,7.9,4.9,8,5.1,8.1l0.6,0.4C6,8.7,6.3,8.9,6.6,9\n\t\t\t\t\tC7,9.1,7.3,9.2,7.7,9.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-168",
                  transform: "translate(1517.871 249.292)",
                },
                _.createElement("path", {
                  _: "Path_888",
                  className: "st3",
                  _: "M0,0c0,0,0.1,0.4,0.1,0.4c0.1,0.4,0.3,0.7,0.4,1.1L1,2.6C1.3,3,1.5,3.3,1.7,3.7\n\t\t\t\t\tC2,4.1,2.3,4.4,2.6,4.8C2.7,4.9,2.8,5,2.9,5.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-169",
                  transform: "translate(1578.827 222.384)",
                },
                _.createElement("path", {
                  _: "Path_889",
                  className: "st3",
                  _: "M0,12.1c1.3-0.8,2.6-1.5,3.9-2.3c1.2-0.7,2.5-1.4,3.7-2.1L10.7,6c0.9-0.5,1.7-0.9,2.6-1.4\n\t\t\t\t\tc0.7-0.4,1.4-0.8,2.1-1.1c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.1,0.5-0.3,0.8-0.4c0.2-0.1,0.4-0.2,0.6-0.3c0.3-0.1,0.5-0.3,0.7-0.4\n\t\t\t\t\tc0.4-0.2,0.7-0.4,1.1-0.6c0.5-0.3,0.9-0.5,1.4-0.8c0.4-0.2,0.7-0.4,1-0.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-170",
                  transform: "translate(1556.717 221.555)",
                },
                _.createElement("path", {
                  _: "Path_890",
                  className: "st3",
                  _: "M1.3,8c0.2,0,0.3,0,0.5,0C2,8,2.2,8,2.5,7.9s0.4-0.1,0.6-0.1c0.2-0.1,0.4-0.1,0.6-0.2\n\t\t\t\t\tc0.2-0.1,0.4-0.2,0.5-0.3C4.4,7.2,4.6,7,4.7,6.9C4.9,6.7,5,6.6,5.1,6.4c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.1-0.4,0.1-0.6\n\t\t\t\t\tc0-0.2,0-0.4,0-0.6c0-0.2-0.1-0.4-0.2-0.6C5.1,3.6,4.9,3.2,4.5,2.8C4.4,2.6,4.2,2.4,4,2.3C3.9,2.1,3.7,1.9,3.5,1.8\n\t\t\t\t\tC3.3,1.6,3.1,1.5,2.9,1.3S2.4,1,2.1,0.9C2,0.8,1.7,0.7,1.6,0.6C1.4,0.5,1.2,0.5,1,0.4C0.7,0.2,0.3,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-171",
                  transform: "translate(1548.818 220.942)",
                },
                _.createElement("path", {
                  _: "Path_891",
                  className: "st3",
                  _: "M7.9,0.6c-0.3-0.1-0.7-0.2-1-0.3c-0.1,0-0.3-0.1-0.4-0.1C6.2,0.2,6,0.1,5.8,0.1\n\t\t\t\t\tC5.5,0.1,5.3,0,5.1,0C4.8,0,4.6,0,4.4,0C4.2,0,3.9,0,3.7,0c-0.2,0-0.5,0-0.7,0.1S2.6,0.2,2.4,0.3C2.2,0.3,2,0.4,1.8,0.5\n\t\t\t\t\tC1.6,0.5,1.4,0.6,1.2,0.8C1,0.9,0.9,1,0.8,1.2C0.6,1.3,0.5,1.5,0.4,1.6C0.3,1.8,0.2,2,0.1,2.2C0.1,2.4,0,2.6,0,2.8\n\t\t\t\t\tC0,3,0,3.2,0,3.4c0,0.2,0.1,0.4,0.2,0.6c0.2,0.4,0.4,0.9,0.7,1.2c0.2,0.2,0.3,0.4,0.5,0.5C1.6,6,2,6.2,2.2,6.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-172",
                  transform: "translate(1583.768 194.179)",
                },
                _.createElement("path", {
                  _: "Path_892",
                  className: "st3",
                  _: "M2.9,0c0,0-0.1,0.1-0.1,0.1C2.4,0.3,2.1,0.6,1.9,0.9C1.6,1.3,1.3,1.7,1,2.1\n\t\t\t\t\tc-0.3,0.5-0.5,1-0.7,1.6C0.1,4.3,0,4.9,0,5.6c0,0.3,0,0.7,0,1c0,0.4,0.1,0.7,0.2,1c0.1,0.4,0.3,0.7,0.4,1c0.2,0.3,0.4,0.7,0.6,1\n\t\t\t\t\tc0.2,0.3,0.5,0.7,0.8,0.9l0.8,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-173",
                  transform: "translate(1589.467 190.428)",
                },
                _.createElement("path", {
                  _: "Path_893",
                  className: "st3",
                  _: "M5,0C4.4,0.2,3.7,0.4,3.1,0.6C2.1,1,1,1.5,0,1.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-59",
                  transform: "translate(1557.438 229.598)",
                },
                _.createElement("line", {
                  _: "Line_854",
                  className: "st2",
                  _: "0",
                  _: "1.8",
                  _: "0.5",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-60",
                  transform: "translate(1550.477 227.398)",
                },
                _.createElement("line", {
                  _: "Line_855",
                  className: "st2",
                  _: "0.5",
                  _: "0",
                  _: "0",
                  _: "1.6",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-174",
                  transform: "translate(1574.376 234.504)",
                },
                _.createElement("path", {
                  _: "Path_894",
                  className: "st3",
                  _: "M0.4,6.3C0.3,6,0.2,5.7,0.1,5.4C0,5.1,0,4.8,0,4.5c0-0.3,0.1-0.6,0.3-0.8\n\t\t\t\t\tC0.4,3.5,0.5,3.2,0.7,3C0.9,2.8,1,2.5,1.2,2.3C1.5,2.1,1.7,1.8,2,1.6C2.4,1.3,2.7,1,3.1,0.8C3.5,0.5,4,0.3,4.4,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-175",
                  transform: "translate(1563.462 210.915)",
                },
                _.createElement("path", {
                  _: "Path_895",
                  className: "st3",
                  _: "M28.3,0c-1,0.4-1.4,0.5-2.4,0.9c-1,0.4-2.1,0.8-3.1,1.1c-0.9,0.3-1.7,0.6-2.6,0.9\n\t\t\t\t\tc-0.8,0.3-1.6,0.5-2.3,0.8c-0.8,0.3-1.5,0.5-2.3,0.8c-0.5,0.2-1,0.4-1.6,0.5c-0.5,0.2-1,0.4-1.6,0.5c-0.6,0.2-1.2,0.4-1.8,0.6\n\t\t\t\t\tC9.9,6.5,9.1,6.7,8.4,6.9L5.8,7.8c-1,0.3-2,0.6-3,1C1.9,9.1,0.9,9.4,0,9.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-176",
                  transform: "translate(1558.051 220.581)",
                },
                _.createElement("path", {
                  _: "Path_896",
                  className: "st3",
                  _: "M5.5,0C4.5,0.3,3.6,0.6,2.6,0.9C1.8,1.1,1,1.3,0.1,1.4H0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-177",
                  transform: "translate(1544.742 221.627)",
                },
                _.createElement("path", {
                  _: "Path_897",
                  className: "st3",
                  _: "M4.7,0.7C4,0.6,3.4,0.6,2.7,0.5C1.8,0.4,0.9,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-61",
                  transform: "translate(1601.153 384.874)",
                },
                _.createElement("line", {
                  _: "Line_856",
                  className: "st2",
                  _: "0",
                  _: "0.1",
                  _: "0.4",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-62",
                  transform: "translate(1605.59 383.647)",
                },
                _.createElement("line", {
                  _: "Line_857",
                  className: "st2",
                  _: "0",
                  _: "0.1",
                  _: "0.4",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-178",
                  transform: "translate(1625.067 218.272)",
                },
                _.createElement("path", {
                  _: "Path_898",
                  className: "st3",
                  _: "M0,0c1.2,1.8,2.3,3.6,3.4,5.6s2.1,3.9,3.1,5.8c1,2,2,4.1,2.9,6.2c0.9,2.1,1.8,4.3,2.7,6.5\n\t\t\t\t\tc0.9,2.2,1.7,4.4,2.4,6.6s1.5,4.5,2.1,6.8c0.6,2.3,1.3,4.6,1.8,6.9s1,4.7,1.5,7c0.4,2.3,0.8,4.6,1.2,6.9s0.6,4.6,0.9,6.9\n\t\t\t\t\tc0.3,2.2,0.4,4.4,0.6,6.7c0.1,2.2,0.2,4.4,0.3,6.6c0,2.2,0,4.4,0,6.5s-0.1,4.3-0.3,6.4c-0.1,2.2-0.4,4.3-0.6,6.5\n\t\t\t\t\tc-1.4,12.7-4.8,25.1-9.9,36.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-179",
                  transform: "translate(1586.762 205.793)",
                },
                _.createElement("path", {
                  _: "Path_899",
                  className: "st2",
                  _: "M0,0l0.1,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-180",
                  transform: "translate(1586.87 205.901)",
                },
                _.createElement("path", {
                  _: "Path_900",
                  className: "st3",
                  _: "M0,0c1.3,1.3,2.6,2.5,3.9,3.9C4.3,4.3,4.6,4.7,4.9,5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-63",
                  transform: "translate(1600.648 222.421)",
                },
                _.createElement("line", {
                  _: "Line_858",
                  className: "st3",
                  _: "0",
                  _: "0",
                  _: "1",
                  _: "1.5",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-181",
                  transform: "translate(1614.535 331.492)",
                },
                _.createElement("path", {
                  _: "Path_901",
                  className: "st3",
                  _: "M6.7,0C6.6,0.4,6.5,0.9,6.4,1.3C6,3.2,5.4,5.1,4.9,7C4.3,8.8,3.7,10.7,3,12.4\n\t\t\t\t\tc-0.6,1.7-1.3,3.5-2.1,5.1c-0.3,0.6-0.6,1.2-0.9,1.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-182",
                  transform: "translate(1597.727 367.055)",
                },
                _.createElement("path", {
                  _: "Path_902",
                  className: "st2",
                  _: "M17.3,0c-0.3,0.1-0.5,0.3-0.9,0.5c-0.4,0.2-0.7,0.3-1.1,0.4c-0.4,0.1-0.8,0.2-1.2,0.3\n\t\t\t\t\tc-0.5,0.1-0.9,0.1-1.4,0.2l-1.3,0.1c-0.5,0-0.9,0.1-1.4,0.1c-0.5,0-1,0.1-1.5,0.1L7,1.8c-0.6,0-1.2,0.1-1.7,0.1\n\t\t\t\t\tC4.7,2,4.1,2.1,3.6,2.1C3,2.2,2.4,2.3,1.9,2.5c-0.5,0.1-1,0.3-1.5,0.4C0.3,3,0.1,3,0,3.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-183",
                  transform: "translate(1615.004 363.99)",
                },
                _.createElement("path", {
                  _: "Path_903",
                  className: "st2",
                  _: "M1.7,0c0,0.1,0,0.2,0,0.3c0,0.3,0,0.5-0.1,0.8C1.5,1.4,1.4,1.6,1.2,1.9\n\t\t\t\t\tC0.9,2.2,0.7,2.5,0.4,2.7C0.2,2.8,0.1,2.9,0,3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-12",
                  transform: "translate(1586.798 205.829)",
                },
                _.createElement("path", {
                  _: "Path_904",
                  className: "st2",
                  _: "M0,0C0,0,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-184",
                  transform: "translate(1584.332 341.158)",
                },
                _.createElement("path", {
                  _: "Path_905",
                  className: "st2",
                  _: "M0.2,2.7C0,2.7,0,2.6,0,2.5c0-0.1,0.1-0.3,0.2-0.4c0.2-0.2,0.3-0.4,0.5-0.5\n\t\t\t\t\tc0.3-0.2,0.5-0.5,0.9-0.7C1.9,0.6,2.4,0.3,2.8,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-185",
                  transform: "translate(1543.624 274.576)",
                },
                _.createElement("path", {
                  _: "Path_906",
                  className: "st2",
                  _: "M0,0c0,0.1,0.1,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3S0.5,0.9,0.6,1c0.1,0.1,0.2,0.2,0.3,0.3\n\t\t\t\t\tc0,0,0.1,0.1,0.2,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-186",
                  transform: "translate(1543.299 264.75)",
                },
                _.createElement("path", {
                  _: "Path_907",
                  className: "st2",
                  _: "M0.3,9.8c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.2-0.1-0.4\n\t\t\t\t\tc0-0.1,0-0.2,0-0.3c0-0.3,0-0.5,0-0.8c0-0.2,0-0.5,0.1-0.7c0.1-0.5,0.2-1.1,0.4-1.6c0.2-0.5,0.5-1.1,0.8-1.6\n\t\t\t\t\tc0.3-0.5,0.7-0.9,1-1.3C2.7,2.3,3.1,2,3.6,1.6C4,1.3,4.5,1.1,4.9,0.9c0.5-0.2,0.9-0.4,1.4-0.5C6.9,0.2,7.4,0.1,8,0.1\n\t\t\t\t\tC8.5,0,9.1,0,9.7,0c0.6,0,1.1,0.1,1.7,0.2c0.6,0.1,1.2,0.3,1.7,0.5c0.4,0.1,0.7,0.3,1,0.4s0.7,0.3,1,0.5c0.4,0.2,0.7,0.4,1,0.6\n\t\t\t\t\tc0.4,0.2,0.7,0.5,1.1,0.7c0.3,0.2,0.6,0.4,0.9,0.6c0.3,0.3,0.6,0.5,0.9,0.8C19.5,4.6,19.7,4.8,20,5c0.3,0.3,0.6,0.6,1,0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-187",
                  transform: "translate(1564.219 270.716)",
                },
                _.createElement("path", {
                  _: "Path_908",
                  className: "st2",
                  _: "M0,0c0.2,0.1,0.3,0.3,0.5,0.5C0.7,0.6,0.8,0.8,1,1l0.5,0.5c0.2,0.2,0.4,0.4,0.5,0.6\n\t\t\t\t\tc0.2,0.2,0.4,0.4,0.5,0.6C2.8,2.9,3,3.1,3.2,3.3c0.2,0.2,0.4,0.4,0.6,0.6s0.4,0.4,0.6,0.6C4.7,5,5,5.4,5.4,5.8\n\t\t\t\t\tc0.4,0.5,0.8,1,1.2,1.5s0.8,1,1.2,1.5c0.7,1,1.4,1.9,2.1,3c1.2,1.7,2.3,3.4,3.4,5.2c0.7,1.2,1.4,2.3,2.1,3.5\n\t\t\t\t\tc0.8,1.4,1.6,2.7,2.3,4.1c0.9,1.6,1.7,3.2,2.5,4.9c1.6,3.2,3,6.6,4.3,10c0.6,1.7,1.3,3.4,1.8,5c0.4,1,0.7,2.1,1.1,3.2l0.5,1.6\n\t\t\t\t\tl0.4,1.4c0.3,0.9,0.6,1.8,0.9,2.8c0.3,0.8,0.5,1.6,0.8,2.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-188",
                  transform: "translate(1587.195 326.514)",
                },
                _.createElement("path", {
                  _: "Path_909",
                  className: "st2",
                  _: "M6.9,0l0.2,0.6C7.1,0.9,7.2,1,7.2,1.3c0.1,0.4,0.2,0.7,0.3,1c0.1,0.5,0.2,1,0.2,1.6\n\t\t\t\t\tc0,0.4,0,0.8,0,1.2c0,0.4-0.1,0.8-0.2,1.2C7.3,6.9,7.1,7.6,6.8,8.2C6.6,8.6,6.3,9.1,6.1,9.5c-0.3,0.4-0.6,0.8-0.9,1.2\n\t\t\t\t\tc-0.4,0.4-0.8,0.9-1.2,1.2c-0.4,0.4-0.9,0.7-1.3,1c-0.2,0.1-0.4,0.3-0.6,0.5c-0.3,0.2-0.5,0.3-0.8,0.5C1.2,14,1.1,14.1,1,14.1\n\t\t\t\t\tc-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0.1-0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-189",
                  transform: "translate(1541.898 244.999)",
                },
                _.createElement("path", {
                  _: "Path_910",
                  className: "st2",
                  _: "M8.1,3.7C8,3.8,7.8,4,7.6,4C7.4,4.1,7.1,4.2,6.9,4.3c-0.3,0-0.5,0.1-0.8,0.1\n\t\t\t\t\tc-0.3,0-0.6,0-0.8,0C5,4.3,4.7,4.2,4.4,4.2C4.1,4.1,3.9,4,3.5,3.9C3.2,3.8,2.9,3.7,2.7,3.6C2.4,3.4,2.1,3.3,1.9,3.1\n\t\t\t\t\tc-0.4-0.3-0.8-0.6-1.2-1C0.5,2,0.4,1.8,0.3,1.5C0.2,1.4,0.1,1.1,0,0.9c0-0.3,0-0.6,0-0.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-190",
                  transform: "translate(1550.044 247.921)",
                },
                _.createElement("path", {
                  _: "Path_911",
                  className: "st2",
                  _: "M0.6,0L0.6,0c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2C0.3,0.5,0.1,0.7,0,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-191",
                  transform: "translate(1555.274 248.787)",
                },
                _.createElement("path", {
                  _: "Path_912",
                  className: "st2",
                  _: "M5.5,1.1L5.5,1.1c0,0.1-0.1,0.2-0.2,0.3C5.3,1.5,5.2,1.6,5,1.7C4.9,1.8,4.8,1.8,4.6,1.9\n\t\t\t\t\tC4.5,1.9,4.3,1.9,4.2,2C4,2,3.8,2,3.6,2C3.4,2,3.3,2,3.1,1.9c-0.2,0-0.4-0.1-0.6-0.2C2.2,1.7,2,1.6,1.8,1.5\n\t\t\t\t\tC1.6,1.4,1.4,1.3,1.3,1.2C1.1,1.1,0.9,0.9,0.7,0.8c0,0,0,0,0,0c0,0,0,0,0,0l0,0c-0.1,0-0.1-0.1-0.2-0.1C0.3,0.4,0.1,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-192",
                  transform: "translate(1555.058 247.416)",
                },
                _.createElement("path", {
                  _: "Path_913",
                  className: "st2",
                  _: "M0.3,1.3C0.1,1.1,0,0.8,0,0.6C0,0.4,0.1,0.2,0.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-193",
                  transform: "translate(1530.652 239.084)",
                },
                _.createElement("path", {
                  _: "Path_914",
                  className: "st2",
                  _: "M8.5,3.2C8.1,3.4,7.7,3.6,7.3,3.7C6.8,3.8,6.2,3.9,5.7,3.9c-0.2,0-0.3,0-0.5,0\n\t\t\t\t\tc-0.2,0-0.3,0-0.5-0.1c-0.3,0-0.6-0.1-0.9-0.2C3.6,3.5,3.3,3.4,3,3.4L2.3,3C2,2.9,1.8,2.8,1.6,2.6S1.1,2.3,1,2.2\n\t\t\t\t\tC0.8,2,0.6,1.8,0.5,1.7C0.4,1.5,0.2,1.3,0.2,1.1C0.1,1,0.1,0.8,0,0.6c0-0.2,0-0.4,0-0.5c0,0,0,0,0-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-194",
                  transform: "translate(1539.115 241.465)",
                },
                _.createElement("path", {
                  _: "Path_915",
                  className: "st2",
                  _: "M0.5,0L0.5,0c0,0.1-0.1,0.2-0.1,0.3C0.3,0.5,0.2,0.6,0,0.8",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-195",
                  transform: "translate(1537.42 230.284)",
                },
                _.createElement("path", {
                  _: "Path_916",
                  className: "st2",
                  _: "M0,0.3c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0\n\t\t\t\t\tc0.1,0,0.1,0,0.2,0C1.4,0,1.6,0,1.7,0L3,0c0.4,0,0.7,0,1.1,0.1c0.4,0,0.9,0.1,1.3,0.2c0.5,0.1,0.9,0.2,1.3,0.3\n\t\t\t\t\tC7,0.7,7.3,0.8,7.6,0.9C7.8,0.9,8.1,1,8.4,1.2c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0.1,0.4,0.1c0.1,0.1,0.2,0.1,0.4,0.1\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-196",
                  transform: "translate(1539.187 237.461)",
                },
                _.createElement("path", {
                  _: "Path_917",
                  className: "st2",
                  _: "M10.6,6c-0.4-0.2-0.8-0.5-1.2-0.7C9.1,5.1,8.7,4.8,8.3,4.6C7.9,4.4,7.5,4.1,7.1,3.9\n\t\t\t\t\tS6.3,3.5,6,3.2L4.8,2.6L3.6,1.9L2.4,1.3L1.2,0.6C0.8,0.4,0.4,0.2,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-197",
                  transform: "translate(1549.792 243.377)",
                },
                _.createElement("path", {
                  _: "Path_918",
                  className: "st2",
                  _: "M11.5,0.6c0,0,0,0.1-0.1,0.1l-0.1,0.1l-0.1,0.1L11.1,1L11,1.2c0,0-0.1,0.1-0.1,0.1\n\t\t\t\t\tc-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.2S9.6,1.9,9.4,1.9C9.2,2,8.9,2,8.7,2.1c-0.5,0.1-1,0.1-1.4,0.1\n\t\t\t\t\tC6.9,2.1,6.4,2.1,6,2C5.6,2,5.2,1.9,4.7,1.8c-0.5-0.1-1-0.3-1.6-0.4L2.5,1.2C2.3,1.1,2.1,1,1.8,0.9C1.7,0.8,1.6,0.8,1.4,0.7\n\t\t\t\t\tC1.3,0.6,1.1,0.6,1,0.5C0.9,0.5,0.7,0.4,0.6,0.4S0.4,0.3,0.3,0.2C0.2,0.1,0.1,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-198",
                  transform: "translate(1557.835 238.038)",
                },
                _.createElement("path", {
                  _: "Path_919",
                  className: "st2",
                  _: "M0,0c0.1,0,0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1\n\t\t\t\t\tc0.1,0,0.1,0.1,0.2,0.1C1,0.6,1,0.7,1.1,0.7C1.3,0.9,1.5,1,1.7,1.2C1.8,1.3,2,1.5,2.2,1.7c0.1,0.1,0.3,0.3,0.4,0.4l0.3,0.4\n\t\t\t\t\tC3,2.6,3.1,2.8,3.2,3c0.1,0.1,0.2,0.3,0.3,0.5C3.6,3.6,3.6,3.8,3.7,4c0.1,0.2,0.1,0.4,0.1,0.6v0.3c0,0.1,0,0.2,0,0.3\n\t\t\t\t\tc0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2-0.1,0.3S3.5,5.8,3.5,5.9",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-199",
                  transform: "translate(1547.195 232.087)",
                },
                _.createElement("path", {
                  _: "Path_920",
                  className: "st2",
                  _: "M0,0c0.4,0.2,0.8,0.4,1.2,0.6S2,1,2.4,1.2l1.2,0.6l1.2,0.6L6,3.2c0.4,0.2,0.8,0.4,1.2,0.7\n\t\t\t\t\tc0.4,0.2,0.8,0.5,1.2,0.7S9.1,5,9.5,5.2s0.8,0.5,1.2,0.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-200",
                  transform: "translate(1550.426 228.949)",
                },
                _.createElement("path", {
                  _: "Path_921",
                  className: "st2",
                  _: "M6.6,2.8C6.5,2.9,6.3,3,6.1,3c-0.2,0-0.3,0-0.5,0c-0.4,0-0.9,0-1.3-0.1C3.9,2.8,3.5,2.7,3,2.6\n\t\t\t\t\tC2.6,2.4,2.3,2.2,1.9,2.1c-0.3-0.2-0.7-0.4-1-0.6C0.6,1.3,0.4,1,0.2,0.8C0.2,0.7,0.1,0.5,0.1,0.4C0,0.3,0,0.2,0,0.1\n\t\t\t\t\tc0,0,0-0.1,0-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-201",
                  transform: "translate(1557.041 231.365)",
                },
                _.createElement("path", {
                  _: "Path_922",
                  className: "st2",
                  _: "M0.4,0c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.1C0.2,0.3,0.1,0.4,0,0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-64",
                  transform: "translate(1536.085 274.359)",
                },
                _.createElement("line", {
                  _: "Line_859",
                  className: "st2",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-202",
                  transform: "translate(1606.419 346.893)",
                },
                _.createElement("path", {
                  _: "Path_923",
                  className: "st2",
                  _: "M0.2,5.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2,0-0.3-0.1-0.5c0-0.2,0-0.4,0-0.5l0-0.5\n\t\t\t\t\tc0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0.1-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.1,0.1-0.2\n\t\t\t\t\ts0-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3C1,0.3,1.1,0.1,1.2,0.1c0,0,0.1,0,0.1-0.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-203",
                  transform: "translate(1606.636 352.52)",
                },
                _.createElement("path", {
                  _: "Path_924",
                  className: "st2",
                  _: "M2.8,4.4c0,0-0.1,0-0.1,0C2.5,4.3,2.3,4.2,2.1,4C1.9,3.9,1.7,3.7,1.6,3.5\n\t\t\t\t\tC1.4,3.3,1.2,3,1.1,2.8C0.9,2.5,0.7,2.2,0.6,1.9C0.5,1.7,0.4,1.3,0.3,1S0.1,0.3,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-204",
                  transform: "translate(1555.31 248.751)",
                },
                _.createElement("path", {
                  _: "Path_925",
                  className: "st2",
                  _: "M0,0c0.3,0.4,0.7,0.8,1.1,1.1",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-65",
                  transform: "translate(1526.852 270.933)",
                },
                _.createElement("line", {
                  _: "Line_860",
                  className: "st2",
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-66",
                  transform: "translate(1586.437 192.339)",
                },
                _.createElement("path", {
                  _: "Path_926",
                  className: "st3",
                  _: "M0,2l0.2-0.2C1.1,1.1,2,0.5,3.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-13",
                  transform: "translate(1586.69 205.721)",
                },
                _.createElement("path", {
                  _: "Path_927",
                  className: "st2",
                  _: "M0,0C0,0,0,0.1,0,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-205",
                  transform: "translate(1594.48 190.067)",
                },
                _.createElement("path", {
                  _: "Path_928",
                  className: "st3",
                  _: "M11.5,4.5c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.3-0.3-0.4-0.4s-0.3-0.3-0.5-0.4\n\t\t\t\t\tC10,3.2,9.9,3.1,9.8,3C9.6,2.9,9.5,2.8,9.4,2.7L8.9,2.3C8.6,2.1,8.2,1.8,7.9,1.6C7.7,1.5,7.6,1.4,7.4,1.3C7.3,1.3,7.1,1.2,7,1.1\n\t\t\t\t\tC6.8,1,6.6,0.9,6.4,0.8c-0.1,0-0.2-0.1-0.3-0.1L5.8,0.6c-0.1,0-0.3-0.1-0.4-0.1L5,0.4c-0.1,0-0.3-0.1-0.4-0.1s-0.2,0-0.3-0.1\n\t\t\t\t\tc-0.1,0-0.2,0-0.3,0c-0.2,0-0.4-0.1-0.6-0.1C3.3,0,3.1,0,2.9,0C2.8,0,2.6,0,2.5,0C2,0,1.4,0,0.9,0.1c-0.2,0-0.5,0.1-0.7,0.1\n\t\t\t\t\tC0.2,0.3,0.1,0.3,0,0.3",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-206",
                  transform: "translate(1601.514 383.755)",
                },
                _.createElement("path", {
                  _: "Path_929",
                  className: "st3",
                  _: "M0,1.1C0.3,1,0.5,1,0.8,0.9c0.5-0.1,1-0.3,1.5-0.4s1-0.3,1.4-0.4C3.8,0.1,4,0.1,4.1,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-207",
                  transform: "translate(1601.658 223.935)",
                },
                _.createElement("path", {
                  _: "Path_930",
                  className: "st3",
                  _: "M0,0c1.1,1.8,2.2,3.5,3.3,5.4c1,1.8,2.1,3.8,3.1,5.7s1.9,3.9,2.8,6c0.9,2,1.8,4.1,2.6,6.2\n\t\t\t\t\tc0.8,2.1,1.6,4.2,2.3,6.4c0.7,2.2,1.4,4.3,2.1,6.6c0.6,2.2,1.2,4.4,1.8,6.7s1,4.5,1.5,6.8s0.9,4.5,1.2,6.9\n\t\t\t\t\tc0.4,2.3,0.6,4.6,0.9,6.9c0.3,2.3,0.5,4.6,0.6,6.9s0.3,4.5,0.3,6.8s0,4.5,0,6.7c-0.1,2.2-0.2,4.4-0.3,6.6\n\t\t\t\t\tc-0.2,2.2-0.4,4.3-0.6,6.4s-0.6,4.2-0.9,6.2c-0.3,1.6-0.6,3.2-1,4.7",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "LINE-67",
                  transform: "translate(1539.115 237.425)",
                },
                _.createElement("line", {
                  _: "Line_861",
                  className: "st2",
                  _: "0.1",
                  _: "0",
                  _: "0",
                  _: "0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-208",
                  transform: "translate(1535.148 230.608)",
                },
                _.createElement("path", {
                  _: "Path_931",
                  className: "st2",
                  _: "M2.4,5.8L2.4,5.8C2.3,5.7,2.2,5.6,2.1,5.6C2,5.5,1.9,5.4,1.8,5.3C1.7,5.3,1.6,5.2,1.6,5.1\n\t\t\t\t\tC1.5,5,1.4,5,1.3,4.9C1.2,4.8,1.2,4.7,1.1,4.6S0.9,4.4,0.9,4.4C0.8,4.3,0.7,4.2,0.7,4.1C0.6,4,0.6,3.9,0.5,3.9\n\t\t\t\t\tC0.4,3.7,0.3,3.6,0.3,3.4C0.2,3.2,0.1,3.1,0.1,2.9C0,2.7,0,2.5,0,2.3c0-0.3,0-0.5,0.1-0.8c0.1-0.2,0.2-0.5,0.4-0.6\n\t\t\t\t\tC0.8,0.7,1,0.5,1.3,0.4c0.3-0.2,0.6-0.3,1-0.4",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "SPLINE-209",
                  transform: "translate(1556.464 249.869)",
                },
                _.createElement("path", {
                  _: "Path_933",
                  className: "st2",
                  _: "M0,0c0.3,0.2,0.7,0.4,1,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.1,0.9,0.1\n\t\t\t\t\tc0.3,0,0.5-0.1,0.8-0.1c0.2-0.1,0.4-0.2,0.5-0.4C4.2,0.3,4.3,0.1,4.3,0",
                }),
              ),
              _.createElement(
                "g",
                {
                  _: "ARC-15",
                  transform: "translate(1528.475 265.126)",
                },
                _.createElement("path", {
                  _: "Path_934",
                  className: "st2",
                  _: "M0,0",
                }),
              ),
            ),
          );
        }
        function _(_) {
          return _.createElement(
            "svg",
            {
              version: "1.1",
              _: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 124.4 96.4",
              className: "ViveTrackerPairingSVG",
            },
            _.createElement("path", {
              _: "Path_690",
              className: "st0",
              _: "M17.7,76.5c5.5,11.5,27.7,20.6,54.5,18c42-4,51-23.6,50.8-37.2c0-1.7-0.5-3.4-1.2-4.9\n\t\t\tc0-0.3-0.1-0.7-0.1-1c1.3-5.2-0.7-9.5-5-11.8c-2.8-1.4-6-2-9.1-1.6c0,0,0,0-0.1-0.1c0,0-3.9-5.1-4.6-8.5c-0.7-3.5-2.7-15-2.7-15\n\t\t\tC99.2,9,96.1,3.4,88.8,2.7L72.9,1.5c-4.7,0-9,2.9-10.7,7.3c0,0-5.4,14.7-6.4,17.7c-1,2.9-2.6,7.2-12.7,11c-4.7,1.7-9.4,3.7-13.9,6\n\t\t\tl-6-7c-4-4.7-9.5-8.2-16.7-4.4l-2,1.6C-5.2,39.7,16.7,75.2,17.7,76.5L17.7,76.5z",
            }),
            _.createElement("path", {
              _: "Path_691",
              className: "st1",
              _: "M5.6,33.1c1.3,0,2.6,0.6,3.5,1.5c4.3,4.2,0.4,6.3,2.1,14.6c0.9,2.6,2.1,5.1,3.6,7.5\n\t\t\tc2.4,3.4,10.4,15.2,10.4,15.2c3.2,4.4,7.9,7.5,13.3,8.8c9.1,2.3,36,6.3,45.4-2.6c5.7-5.5,10.2-12.1,13.3-19.4c0.9-2,1.7-4,2.3-6.2\n\t\t\tc0.7-2.5,1.8-8.5,10-10.6c8.2-2.1,11.7,0.9,12.5,5.3",
            }),
            _.createElement("path", {
              _: "Path_692",
              className: "st2",
              _: "M121.5,51.4c0,0-1.7,13.6,1.1,7.8",
            }),
            _.createElement("path", {
              _: "Path_693_2_",
              className: "st1",
              _: "M29,43.8c0,0,3,3.8,4.4,4.9c1.4,1.1,4.1,0.9,4.1,0.9",
            }),
            _.createElement("path", {
              _: "Path_695",
              className: _ ? "st3" : "st0",
              _: "M78.9,55.1c-0.3,0.2-1.2,0.5-1.9,0.9c-0.8,0.4-1.7,0.6-2.6,0.6C74,56.5,54.9,55,54.9,55\n\t\t\tc-0.5-0.1-0.9-0.1-1.1-0.4c-0.5-0.7-0.8-1.1-0.9-1.4l0-0.7c0.1-0.3,0.3-0.5,0.5-0.7L67,45.4c0.7-0.4,1.4-0.6,2.2-0.6l4.2,0.2\n\t\t\tc0.2,0,0.3,0.1,0.4,0.3l5.5,8.8l-0.1,0.6C79.2,54.7,79.1,55,78.9,55.1z",
            }),
            _.createElement("path", {
              _: "Path_696",
              className: _ ? "st3" : "st0",
              _: "M79.1,54c-0.1,0.1-0.1,0.3-0.3,0.3c-0.3,0.2-1.2,0.5-1.9,0.9c-0.8,0.4-1.7,0.6-2.6,0.6\n\t\t\tc-0.4,0-18.9-1.4-18.9-1.4c-1.4-0.2-1.3,0-2.2-1.6",
            }),
            _.createElement("path", {
              _: "Path_697",
              className: "st4",
              _: "M74.4,52.3c-0.7,1.1-3.3,2-7.8,1.7c-5.2-0.4-7.9-1.3-7.6-2.2c0.8-2,7.5-4.6,10.1-4.4\n\t\t\tC74.1,47.7,74.8,51.5,74.4,52.3z",
            }),
            _.createElement("path", {
              _: "Path_698",
              className: "st4",
              _: "M59.3,52.4c0.8-2,7-4.7,9.6-4.5c4.9,0.4,5.7,4.1,4.8,5.1",
            }),
            _.createElement("path", {
              _: "Path_699",
              className: "st2",
              _: "M80,4.9c-0.3,0.4-0.8,0.6-1.3,0.4c-0.6-0.1-0.8-0.5-0.7-0.8c0.3-0.4,0.8-0.6,1.3-0.5\n\t\t\tC79.8,4.2,80.1,4.6,80,4.9z",
            }),
            _.createElement("path", {
              _: "Path_700",
              className: "st5",
              _: "M73.5,59.9",
            }),
            _.createElement(
              "g",
              null,
              _.createElement("path", {
                _: "Path_701",
                className: "st6",
                _: "M73.3,64.1c0,0,5.8,2,10.1-5.9l3.3-5.1c1.6-3.1,3.8-5.8,6.5-8.1c6.2-4.8,14.5-6.6,14.5-6.6",
              }),
            ),
          );
        }
        function _(_) {
          return _.createElement(
            "svg",
            {
              version: "1.1",
              _: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              _: "0px",
              _: "0px",
              viewBox: "512 241 200 310",
              className: "ViveWandPairingSVG",
            },
            _.createElement("path", {
              className: "st0",
              _: "M690.1,291.8c0,0-19.2-24.5-30.6-33.4c-5.7-5.4-13.1-10-23.6-12.8l0,0c-1.1-0.3-2.2-0.5-3.3-0.8h-0.1\n\t\t\t\tc-1.1-0.2-2.2-0.5-3.4-0.7c-0.1,0-0.1,0-0.2,0c-1.1-0.2-2.3-0.4-3.4-0.5c-0.1,0-0.2,0-0.2,0c-1.1-0.2-2.3-0.3-3.5-0.4\n\t\t\t\tc-0.1,0-0.2,0-0.3,0c-1.2-0.1-2.3-0.2-3.5-0.3c-0.1,0-0.2,0-0.4,0c-1.2-0.1-2.3-0.1-3.5-0.1c-0.1,0-0.3,0-0.4,0c-0.6,0-1.2,0-1.8,0\n\t\t\t\tl0,0l0,0c-0.6,0-1.2,0-1.8,0c-0.1,0-0.3,0-0.4,0c-1.2,0-2.4,0.1-3.5,0.1c-0.1,0-0.2,0-0.4,0c-1.2,0.1-2.3,0.2-3.5,0.3\n\t\t\t\tc-0.1,0-0.2,0-0.3,0c-1.2,0.1-2.3,0.2-3.5,0.4c-0.1,0-0.2,0-0.2,0c-1.2,0.2-2.3,0.3-3.4,0.5c-0.1,0-0.1,0-0.2,0\n\t\t\t\tc-1.1,0.2-2.3,0.4-3.4,0.7h-0.1c-1.1,0.2-2.2,0.5-3.3,0.8l0,0c-10.5,2.8-17.7,7.6-23.6,12.8c-11.4,8.9-30.6,33.4-30.6,33.4\n\t\t\t\tc-3.9,5.2-5.5,9.1-5.3,14.4c0.1,3.3,0.7,7.6,4.1,10.1l6.6,4.2c4.7,2.9,7.3,3.4,11.1-1c4.1-4.6,9.7-9,9.7-9l0.2-0.2\n\t\t\t\tc2.5,1.9,5.6,4.3,7.3,5.7c6,5,8.2,17.7,9.1,25.6c3.5,58.4,6.9,127.4,10.4,183c0.2,2.5,0.6,4.9,1.3,7.2c2.8,9.2,9.9,16.4,22.2,17\n\t\t\t\tc0.5,0,1,0,1.4,0l0,0l0,0c0.5,0,1,0,1.4,0c12.3-0.5,19.4-7.7,22.2-17c0.7-2.3,1.2-4.7,1.3-7.2c3.5-55.6,6.9-124.5,10.4-183\n\t\t\t\tc0.8-7.9,3.1-20.6,9.1-25.6c1.7-1.4,4.8-3.9,7.3-5.7l0.2,0.2c0,0,5.6,4.3,9.7,9c3.8,4.4,6.4,3.9,11.1,1l6.6-4.2\n\t\t\t\tc3.4-2.5,4-6.9,4.1-10.1C695.6,300.9,694,297,690.1,291.8z",
            }),
            _.createElement("path", {
              className: "st0",
              _: "M659.8,258.8c2.2,2.8,3.4,5.7,3.4,8.9c0,13.7-22.8,24.7-51.3,24.7s-51.2-11.1-51.2-24.7c0-2.8,1-5.5,2.8-8.1",
            }),
            _.createElement("path", {
              className: "st0",
              _: "M655.8,266.6c0,7.9-6.7,21.6-43.8,21.6c-35,0-43.8-13.7-43.8-21.6c0-7.6,14.3-20,43.8-20\n\t\t\t\tC642.9,246.6,655.8,259.1,655.8,266.6z",
            }),
            _.createElement("path", {
              className: _ ? "st1" : "st0",
              _: "M619.5,330.7c0,4.1-3.3,7.5-7.5,7.5l0,0c-4.1,0-7.5-3.3-7.5-7.5l0,0c0-4.1,3.3-7.5,7.5-7.5l0,0 C616.1,323.2,619.5,326.5,619.5,330.7L619.5,330.7z",
            }),
            _.createElement("path", {
              className: _ ? "st1" : "st0",
              _: "M619.5,427.1c0,4.1-3.3,7.5-7.5,7.5l0,0c-4.1,0-7.5-3.3-7.5-7.5l0,0c0-4.1,3.3-7.5,7.5-7.5l0,0 C616.1,419.6,619.5,423,619.5,427.1L619.5,427.1z",
            }),
            _.createElement("path", {
              className: "st0",
              _: "M641.7,372c0,16.4-13.3,29.8-29.8,29.8l0,0c-16.4,0-29.8-13.3-29.8-29.8l0,0c0-16.4,13.3-29.8,29.8-29.8l0,0\n\t\t\t\tC628.4,342.2,641.7,355.5,641.7,372L641.7,372z",
            }),
            _.createElement("path", {
              className: "st2",
              _: "M643.2,384.8c0,17.3-14,31.2-31.2,31.2l0,0c-17.3,0-31.2-14-31.2-31.2v-13.4c0-17.3,14-31.2,31.2-31.2l0,0\n\t\t\t\tc17.3,0,31.2,14,31.2,31.2V384.8z",
            }),
            _.createElement("path", {
              className: "st3",
              _: "M613.2,439.1c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2S613.2,438.4,613.2,439.1z",
            }),
            _.createElement("path", {
              className: "st0",
              _: "M534.2,316.1c1,0.1,2.5-0.1,4.5-1.8l8.8-8.2c2.4-2,3.9-2,6.9-0.1l6.7,4.8",
            }),
            _.createElement("path", {
              className: "st0",
              _: "M690,315.9c-1,0.1-2.5-0.1-4.5-1.8l-8.8-8.2c-2.4-2-3.9-2-6.9-0.1l-6.7,4.8",
            }),
            _.createElement("path", {
              className: "st4",
              _: "M584.3,283.5c0-7.2,12.5-13,27.9-13s28,5.8,28,13",
            }),
            _.createElement("path", {
              className: "st3",
              _: "M586.4,284.4c1.6-5.7,12.6-10.1,25.9-10.1c13.4,0,24.5,4.5,25.9,10.2",
            }),
            _.createElement(
              "g",
              null,
              _.createElement("polyline", {
                className: "st5",
                points:
                  "588.9,285.3 588.9,285.2 589.3,284.7 589.7,284.2 590.2,283.6 590.7,283.1 591.2,282.7 591.4,282.6\n\t\t\t\t\t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "632.9,282.6 633.1,282.8 633.7,283.3 634.3,283.9 634.8,284.4 635.2,285 635.4,285.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "670.5,311.7 670.7,311.4 670.9,311.2 671.1,311 671.4,310.7 671.6,310.5 671.9,310.4 672.2,310.2\n\t\t\t\t\t672.4,310 672.7,309.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "551.5,309.9 551.8,310 552.1,310.2 552.4,310.4 552.6,310.5 552.9,310.8 553.1,311 553.3,311.2\n\t\t\t\t\t553.5,311.4 553.7,311.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "549.8,309.3 550.1,309.4 550.4,309.4 550.7,309.5 551,309.6 551.3,309.7 551.5,309.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "546.8,318.9 546.4,318.8 546,318.6 545.5,318.5 545.1,318.3 544.7,318.1 544.4,317.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "631.2,281.5 631.9,281.9 632.5,282.3 632.9,282.6 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "672.7,309.9 673,309.7 673.3,309.6 673.5,309.5 673.8,309.4 674.1,309.4 674.4,309.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "544.4,317.9 543.9,317.5 543.4,317.1 543,316.7 542.7,316.3 542.4,315.8 542.2,315.3 542,314.8\n\t\t\t\t\t541.9,314.3 541.8,313.8 541.9,313.3 542,312.9 542.1,312.4 542.4,311.9 542.6,311.5 543,311.1 543.4,310.7 543.9,310.3 544.3,310\n\t\t\t\t\t544.9,309.8 545.4,309.6 546,309.4 546.6,309.2 547.3,309.2 547.9,309.1 548.5,309.1 549.2,309.2 549.8,309.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "553.7,311.7 553.8,311.8 553.9,311.9 553.9,312 554,312.1 554.1,312.2 554.1,312.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "670.1,312.3 670.2,312.2 670.3,312.1 670.3,312 670.4,311.9 670.5,311.8 670.5,311.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "627,287.2 626.7,287 626.4,286.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "626.4,286.7 626.1,286.3 625.8,285.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "625.8,285.9 625.5,285.5 625.3,285.1 625.1,284.7 625,284.3 624.9,283.8 624.9,283.4 625,283\n\t\t\t\t\t625.1,282.6 625.3,282.3 625.6,282 625.9,281.7 626.2,281.5 626.6,281.2 627.1,281.1 627.6,280.9 628.1,280.9 628.7,280.8\n\t\t\t\t\t629.3,280.9 629.9,281 630.5,281.2 631.2,281.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "593.1,281.5 593.5,281.3 593.9,281.1 594.4,281 594.8,280.9 595.3,280.9 595.7,280.8 596.1,280.9\n\t\t\t\t\t596.5,280.9 596.9,281 597.3,281.1 597.6,281.2 597.9,281.4 598.2,281.6 598.5,281.8 598.7,282 598.9,282.3 599.1,282.5\n\t\t\t\t\t599.2,282.8 599.3,283.2 599.4,283.5 599.4,283.8 599.3,284.2 599.2,284.6 599,285 598.8,285.4 598.6,285.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "598.6,285.7 598.3,286.1 598,286.4 597.7,286.8 597.4,287.1 597.3,287.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "554.1,312.3 554.2,312.5 554.3,312.8 554.3,313 554.3,313.2 554.3,313.4 554.3,313.6 554.3,313.8\n\t\t\t\t\t554.2,314 554.2,314.2 554.1,314.4 554,314.6 553.9,314.8 553.7,314.9 553.6,315.1 553.5,315.3 553.3,315.6 553.1,315.8 552.9,316\n\t\t\t\t\t552.7,316.2 552.4,316.5 552.2,316.7 551.9,316.9 551.6,317.2 551.3,317.4 551,317.7 550.7,317.9 550.3,318.1 550,318.3\n\t\t\t\t\t549.6,318.5 549.2,318.6 548.9,318.8 548.5,318.9 548,319 547.6,319 547.2,318.9 546.8,318.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "679.9,317.9 679.5,318.1 679.1,318.3 678.7,318.5 678.3,318.6 677.9,318.8 677.5,318.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "674.4,309.3 675.1,309.2 675.7,309.1 676.4,309.1 677,309.2 677.6,309.2 678.3,309.4 678.8,309.6\n\t\t\t\t\t679.4,309.8 679.9,310 680.4,310.3 680.9,310.7 681.3,311.1 681.6,311.5 681.9,311.9 682.1,312.4 682.3,312.9 682.4,313.3\n\t\t\t\t\t682.4,313.8 682.4,314.3 682.3,314.8 682.1,315.3 681.9,315.8 681.6,316.3 681.2,316.7 680.8,317.1 680.4,317.5 679.9,317.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "677.5,318.9 677.1,318.9 676.6,319 676.2,319 675.8,318.9 675.4,318.8 675,318.7 674.7,318.5\n\t\t\t\t\t674.3,318.3 673.9,318.1 673.6,317.9 673.3,317.7 673,317.5 672.7,317.2 672.4,317 672.1,316.7 671.8,316.5 671.6,316.2 671.4,316\n\t\t\t\t\t671.2,315.8 671,315.6 670.8,315.3 670.6,315.1 670.5,314.9 670.4,314.7 670.3,314.6 670.2,314.4 670.1,314.2 670,314 670,313.8\n\t\t\t\t\t669.9,313.6 669.9,313.4 669.9,313.2 669.9,313 670,312.8 670.1,312.5 670.1,312.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "591.4,282.6 591.8,282.2 592.4,281.9 593.1,281.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "687.3,298.4 686.9,297.8 686.4,297.1 686,296.5 685.7,296 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "538.6,296 538.2,296.5 537.8,297.1 537.4,297.8 536.9,298.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "665.3,299.9 665.3,299.9 665.3,299.9 665.3,299.9 665.3,299.9 665.4,299.9 665.4,299.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "656.7,302.8 656.6,302.2 656.5,301.5 656.4,300.8 656.5,300.2 656.5,299.6 656.7,299.1 656.9,298.6\n\t\t\t\t\t657.1,298.1 657.3,297.7 657.7,297.3 658,297 658.4,296.7 658.8,296.5 659.2,296.3 659.6,296.2 660.1,296.2 660.6,296.2\n\t\t\t\t\t661.1,296.3 661.6,296.5 662.1,296.7 662.6,297 663.1,297.4 663.6,297.8 664,298.3 664.5,298.8 664.9,299.3 665.3,299.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "655.5,269 655.3,269.4 655,269.8 654.8,270.2 654.6,270.6 654.3,271 654,271.4 653.8,271.7\n\t\t\t\t\t653.5,272.1 653.2,272.4 652.9,272.8 652.7,273.1 652.4,273.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "651.5,265.6 651.8,265.3 652.1,265.1 652.4,264.8 652.7,264.6 653,264.4 653.3,264.3 653.6,264.1\n\t\t\t\t\t653.9,264 654.1,263.9 654.4,263.9 654.6,263.8 654.9,263.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "652.4,273.3 652,273.7 651.7,274 651.4,274.3 651,274.6 650.7,274.8 650.4,275 650.1,275.1\n\t\t\t\t\t649.9,275.2 649.6,275.2 649.4,275.2 649.2,275.2 649,275.1 648.8,274.9 648.6,274.7 648.5,274.5 648.4,274.1 648.3,273.7\n\t\t\t\t\t648.3,273.3 648.3,272.8 648.4,272.3 648.4,271.8 648.5,271.3 648.7,270.7 648.9,270.1 649,269.6 649.3,269 649.5,268.5\n\t\t\t\t\t649.8,267.9 650.1,267.4 650.4,266.9 650.7,266.5 651.1,266 651.5,265.6 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "661.1,275.2 661,274.9 660.9,274.7 660.9,274.4 660.8,274.2 660.8,273.9 660.7,273.7 660.7,273.5\n\t\t\t\t\t660.7,273.2 660.7,273 660.7,272.8 660.8,272.5 660.8,272.3 660.9,272.1 660.9,271.9 661,271.7 661.1,271.5 661.2,271.3\n\t\t\t\t\t661.3,271.2 661.4,271 661.6,270.9 661.7,270.7 661.9,270.6 662,270.5 662.2,270.5 662.3,270.4 662.5,270.4 662.6,270.4\n\t\t\t\t\t662.8,270.4 663,270.4 663.1,270.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "654.9,263.8 655,263.8 655.1,263.9 655.2,263.9 655.3,263.9 655.4,264 655.5,264 655.6,264.1\n\t\t\t\t\t655.7,264.2 655.8,264.3 655.8,264.4 655.9,264.5 656,264.6 656.1,264.7 656.1,264.8 656.2,264.9 656.2,265 656.3,265.2\n\t\t\t\t\t656.3,265.3 656.3,265.4 656.4,265.6 656.4,265.7 656.4,265.9 656.4,266 656.4,266.1 656.4,266.3 656.4,266.4 656.4,266.6\n\t\t\t\t\t656.3,266.7 656.3,266.9 656.3,267 656.2,267.1 656.2,267.3 656.2,267.4 656.1,267.6 656.1,267.7 656,267.8 656,268 655.9,268.1\n\t\t\t\t\t655.9,268.3 655.8,268.4 655.8,268.5 655.7,268.6 655.6,268.8 655.6,268.9 655.5,269 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "688.3,299.5 687.8,299 687.3,298.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "657.7,305.1 657.5,304.8 657.3,304.4 657.1,304 657,303.6 656.8,303.2 656.7,302.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "665.7,305.4 665.5,305.8 665.3,306.1 665,306.4 664.8,306.7 664.5,307 664.2,307.2 663.8,307.4\n\t\t\t\t\t663.5,307.6 663.2,307.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "663.2,307.8 662.8,307.9 662.5,308 662.1,308 661.8,308 661.4,308 661.1,307.9 660.7,307.8\n\t\t\t\t\t660.3,307.6 659.9,307.4 659.5,307.2 659.1,306.9 658.8,306.5 658.4,306.1 658,305.6 657.7,305.1 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "688.4,292.8 688.8,293.4 689.3,294 689.7,294.5 690.1,295.2 690.5,295.8 690.9,296.4 691.2,297\n\t\t\t\t\t691.5,297.6 691.8,298.2 692,298.7 692.2,299.2 692.3,299.7 692.4,300.1 692.5,300.4 692.5,300.7 692.5,301 692.4,301.2\n\t\t\t\t\t692.3,301.4 692.2,301.5 692.1,301.6 692,301.7 691.8,301.7 691.6,301.7 691.4,301.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "691.4,301.7 691.2,301.7 691,301.6 690.8,301.5 690.5,301.4 690.3,301.2 690,301 689.7,300.8\n\t\t\t\t\t689.5,300.6 689.2,300.4 688.9,300.1 688.6,299.8 688.3,299.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "665.4,300.2 665.7,300.8 665.9,301.3 666.1,301.9 666.2,302.5 666.3,303.1 666.3,303.7 666.2,304.3\n\t\t\t\t\t666,304.9 665.7,305.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "665.3,299.9 665.3,300 665.3,300 665.3,300.1 665.4,300.1 665.4,300.2 665.4,300.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "663.7,279.8 663.3,279.3 663,278.8 662.6,278.3 662.3,277.8 662,277.2 661.7,276.7 661.5,276.2\n\t\t\t\t\t661.3,275.7 661.1,275.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "666.5,273.3 666.8,273.7 667,274 667.3,274.4 667.6,274.7 667.9,275.1 668.1,275.5 668.4,275.9\n\t\t\t\t\t668.6,276.2 668.8,276.6 669,277 669.2,277.4 669.4,277.8 669.6,278.2 669.8,278.6 669.9,279 670,279.4 670.1,279.8 670.2,280.2\n\t\t\t\t\t670.3,280.6 670.3,281 670.3,281.3 670.3,281.7 670.2,282 670.1,282.3 669.9,282.5 669.7,282.7 669.4,282.9 669,283 668.7,283\n\t\t\t\t\t668.2,283 667.8,282.9 667.3,282.7 666.8,282.5 666.3,282.1 665.8,281.8 665.2,281.3 664.7,280.9 664.2,280.4 663.7,279.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "535.9,292.8 536.1,292.5 536.4,292.2 536.7,291.9 537,291.6 537.2,291.3 537.5,291 537.8,290.8\n\t\t\t\t\t538,290.5 538.3,290.3 538.5,290.1 538.7,290 539,289.8 539.2,289.7 539.4,289.6 539.6,289.5 539.7,289.5 539.9,289.4 540.1,289.4\n\t\t\t\t\t540.2,289.5 540.3,289.6 540.4,289.7 540.5,289.8 540.6,290 540.6,290.2 540.6,290.4 540.6,290.7 540.6,291.1 540.5,291.4\n\t\t\t\t\t540.4,291.8 540.3,292.3 540.1,292.8 539.9,293.3 539.6,293.9 539.3,294.5 539,295.2 538.6,295.8 538.6,296 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "535.9,299.5 535.6,299.8 535.4,300.1 535.1,300.4 534.8,300.6 534.5,300.8 534.3,301 534,301.2\n\t\t\t\t\t533.7,301.4 533.5,301.5 533.3,301.6 533,301.7 532.8,301.7 532.6,301.7 532.5,301.7 532.3,301.7 532.2,301.6 532,301.5\n\t\t\t\t\t531.9,301.4 531.8,301.2 531.8,301 531.8,300.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "531.8,300.7 531.8,300.4 531.8,300.1 531.9,299.7 532,299.2 532.2,298.7 532.5,298.2 532.7,297.6\n\t\t\t\t\t533,297 533.4,296.4 533.7,295.8 534.1,295.2 534.5,294.5 535,294 535.4,293.4 535.9,292.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "663.1,270.5 663.3,270.6 663.5,270.7 663.8,270.9 664,271 664.2,271.2 664.4,271.3 664.7,271.5\n\t\t\t\t\t664.9,271.7 665.1,271.9 665.3,272.1 665.6,272.3 665.8,272.6 666,272.8 666.3,273.1 666.5,273.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points: "536.9,298.4 536.4,299 535.9,299.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "557.8,273.3 558,273.1 558.2,272.8 558.5,272.6 558.7,272.3 558.9,272.1 559.1,271.9 559.4,271.7\n\t\t\t\t\t559.6,271.5 559.8,271.3 560.1,271.2 560.3,271 560.5,270.9 560.7,270.7 560.9,270.6 561.1,270.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "560.5,279.8 560,280.4 559.5,280.9 559,281.3 558.5,281.8 558,282.1 557.5,282.5 557,282.7\n\t\t\t\t\t556.5,282.9 556,283 555.6,283 555.2,283 554.9,282.9 554.6,282.7 554.4,282.5 554.2,282.3 554.1,282 554,281.7 553.9,281.3\n\t\t\t\t\t553.9,281 554,280.6 554,280.2 554.1,279.8 554.2,279.4 554.3,279 554.5,278.6 554.6,278.2 554.8,277.8 555,277.4 555.2,277\n\t\t\t\t\t555.4,276.6 555.7,276.2 555.9,275.9 556.1,275.5 556.4,275.1 556.7,274.7 556.9,274.4 557.2,274 557.5,273.7 557.8,273.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "563.2,275.2 563,275.7 562.8,276.2 562.5,276.7 562.2,277.2 561.9,277.8 561.6,278.3 561.3,278.8\n\t\t\t\t\t560.9,279.3 560.5,279.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "559,299.9 559.4,299.3 559.8,298.8 560.2,298.3 560.7,297.8 561.2,297.4 561.7,297 562.2,296.7\n\t\t\t\t\t562.7,296.5 563.2,296.3 563.7,296.2 564.2,296.2 564.6,296.2 565.1,296.3 565.5,296.5 565.9,296.7 566.3,297 566.6,297.3\n\t\t\t\t\t566.9,297.7 567.2,298.1 567.4,298.6 567.6,299.1 567.7,299.6 567.8,300.2 567.8,300.8 567.8,301.5 567.7,302.2 567.6,302.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "559,299.9 559,299.9 559,299.9 558.9,299.9 558.9,299.9 558.9,299.9 558.9,299.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "569.4,263.8 569.6,263.8 569.9,263.9 570.1,263.9 570.4,264 570.7,264.1 571,264.3 571.3,264.4\n\t\t\t\t\t571.6,264.6 571.9,264.8 572.2,265.1 572.5,265.3 572.8,265.6 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "685.7,296 685.6,295.8 685.2,295.2 684.9,294.5 684.6,293.9 684.4,293.3 684.2,292.8 684,292.3\n\t\t\t\t\t683.9,291.8 683.8,291.4 683.7,291.1 683.6,290.7 683.6,290.5 683.6,290.2 683.7,290 683.7,289.8 683.8,289.7 683.9,289.6\n\t\t\t\t\t684,289.5 684.2,289.4 684.3,289.4 684.5,289.5 684.7,289.5 684.9,289.6 685.1,289.7 685.3,289.8 685.5,290 685.8,290.1 686,290.3\n\t\t\t\t\t686.3,290.5 686.5,290.8 686.8,291 687,291.3 687.3,291.6 687.6,291.9 687.8,292.2 688.1,292.5 688.4,292.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "571.9,273.3 571.6,273.1 571.3,272.8 571.1,272.4 570.8,272.1 570.5,271.8 570.2,271.4 570,271\n\t\t\t\t\t569.7,270.6 569.5,270.2 569.2,269.8 569,269.4 568.7,269 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "572.8,265.6 573.2,266 573.5,266.5 573.9,266.9 574.2,267.4 574.5,267.9 574.7,268.5 575,269\n\t\t\t\t\t575.2,269.6 575.4,270.1 575.6,270.7 575.7,271.3 575.8,271.8 575.9,272.3 575.9,272.8 575.9,273.3 575.9,273.7 575.8,274.1\n\t\t\t\t\t575.8,274.5 575.6,274.7 575.5,274.9 575.3,275.1 575.1,275.2 574.9,275.2 574.6,275.2 574.4,275.2 574.1,275.1 573.8,275\n\t\t\t\t\t573.5,274.8 573.2,274.6 572.9,274.3 572.6,274 572.2,273.7 571.9,273.3 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "568.7,269 568.7,268.9 568.6,268.7 568.5,268.6 568.5,268.5 568.4,268.3 568.4,268.2 568.3,268\n\t\t\t\t\t568.2,267.9 568.2,267.8 568.1,267.6 568.1,267.5 568.1,267.3 568,267.2 568,267 568,266.9 567.9,266.7 567.9,266.5 567.9,266.4\n\t\t\t\t\t567.9,266.2 567.9,266.1 567.9,265.9 567.9,265.8 567.9,265.6 567.9,265.5 567.9,265.3 568,265.2 568,265.1 568.1,264.9\n\t\t\t\t\t568.1,264.8 568.2,264.7 568.3,264.5 568.4,264.4 568.4,264.3 568.5,264.2 568.6,264.1 568.7,264.1 568.8,264 568.9,263.9\n\t\t\t\t\t569.1,263.9 569.2,263.9 569.3,263.8 569.4,263.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "561.1,270.5 561.3,270.4 561.5,270.4 561.6,270.4 561.8,270.4 561.9,270.4 562.1,270.5 562.3,270.6\n\t\t\t\t\t562.4,270.6 562.6,270.8 562.7,270.9 562.8,271 562.9,271.2 563.1,271.3 563.2,271.5 563.2,271.7 563.3,271.9 563.4,272.1\n\t\t\t\t\t563.5,272.3 563.5,272.5 563.5,272.8 563.5,273 563.5,273.2 563.5,273.5 563.5,273.7 563.5,274 563.4,274.2 563.4,274.4\n\t\t\t\t\t563.3,274.7 563.2,274.9 563.2,275.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "566.6,305.1 566.3,305.6 565.9,306.1 565.5,306.5 565.1,306.9 564.7,307.2 564.3,307.4 564,307.6\n\t\t\t\t\t563.6,307.8 563.2,307.9 562.8,308 562.5,308 562.1,308 561.8,308 561.4,307.9 561.1,307.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "561.1,307.8 560.7,307.6 560.4,307.4 560.1,307.2 559.8,307 559.5,306.7 559.2,306.4 559,306.1\n\t\t\t\t\t558.8,305.8 558.5,305.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "567.6,302.8 567.4,303.2 567.3,303.6 567.1,304 567,304.4 566.8,304.8 566.6,305.1 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "558.8,300.2 558.9,300.2 558.9,300.1 558.9,300.1 558.9,300 559,300 559,299.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "558.5,305.4 558.3,304.9 558.1,304.3 558,303.7 558,303.1 558,302.5 558.1,301.9 558.3,301.3\n\t\t\t\t\t558.6,300.8 558.8,300.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "678.7,315.6 678.5,315.7 678.2,315.8 678,315.8 677.8,315.9 677.6,316 677.3,316 677.1,316\n\t\t\t\t\t676.8,316 676.6,316.1 676.3,316.1 676.1,316 675.8,316 675.6,316 675.4,315.9 675.1,315.9 674.9,315.8 674.7,315.7 674.5,315.6\n\t\t\t\t\t674.3,315.5 674.1,315.4 673.9,315.3 673.7,315.2 673.5,315 673.3,314.9 673.2,314.7 673.1,314.6 672.9,314.4 672.8,314.3\n\t\t\t\t\t672.7,314.1 672.7,313.9 672.6,313.7 672.5,313.6 672.5,313.4 672.5,313.2 672.5,313 672.5,312.8 672.5,312.6 672.5,312.5\n\t\t\t\t\t672.6,312.3 672.7,312.1 672.7,311.9 672.8,311.8 672.9,311.6 673.1,311.4 673.2,311.3 673.4,311.1 673.5,311 673.7,310.9\n\t\t\t\t\t673.9,310.8 674.1,310.6 674.3,310.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "674.3,310.5 674.5,310.4 674.7,310.4 674.9,310.3 675.1,310.2 675.4,310.2 675.6,310.1 675.9,310.1\n\t\t\t\t\t676.1,310.1 676.4,310.1 676.6,310.1 676.8,310.1 677.1,310.1 677.3,310.2 677.6,310.2 677.8,310.3 678,310.3 678.3,310.4\n\t\t\t\t\t678.5,310.5 678.7,310.6 678.9,310.7 679.1,310.8 679.3,311 679.4,311.1 679.6,311.2 679.7,311.4 679.9,311.5 680,311.7\n\t\t\t\t\t680.1,311.9 680.2,312 680.3,312.2 680.4,312.4 680.4,312.6 680.4,312.8 680.5,312.9 680.5,313.1 680.5,313.3 680.4,313.5\n\t\t\t\t\t680.4,313.7 680.3,313.8 680.3,314 680.2,314.2 680.1,314.4 680,314.5 679.9,314.7 679.7,314.8 679.6,315 679.4,315.1 679.2,315.3\n\t\t\t\t\t679.1,315.4 678.9,315.5 678.7,315.6 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "631.4,286.3 631.3,286.2 631.2,286 631,285.8 630.9,285.6 630.8,285.4 630.6,285.2 630.5,285\n\t\t\t\t\t630.4,284.8 630.3,284.6 630.3,284.4 630.2,284.2 630.1,284.1 630.1,283.9 630,283.7 630,283.5 630,283.4 630,283.2 630,283.1\n\t\t\t\t\t630,282.9 630,282.8 630.1,282.7 630.1,282.5 630.2,282.4 630.3,282.3 630.4,282.3 630.5,282.2 630.6,282.1 630.7,282.1 630.8,282\n\t\t\t\t\t630.9,282 631.1,282 631.2,282 631.4,282 631.5,282.1 631.7,282.1 631.9,282.1 632,282.2 632.2,282.3 632.4,282.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "591.9,282.4 591.7,282.5 591.5,282.6 591.3,282.7 591.1,282.8 591.1,282.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "592.8,286.3 592.9,286.2 593.1,286 593.2,285.8 593.4,285.6 593.5,285.4 593.6,285.2 593.7,285\n\t\t\t\t\t593.8,284.8 593.9,284.6 594,284.4 594.1,284.2 594.1,284.1 594.2,283.9 594.2,283.7 594.2,283.5 594.3,283.4 594.3,283.2\n\t\t\t\t\t594.3,283.1 594.2,282.9 594.2,282.8 594.2,282.7 594.1,282.5 594.1,282.4 594,282.3 593.9,282.3 593.8,282.2 593.7,282.1\n\t\t\t\t\t593.6,282.1 593.5,282 593.3,282 593.2,282 593,282 592.9,282 592.7,282 592.6,282.1 592.4,282.1 592.2,282.2 592,282.3\n\t\t\t\t\t591.9,282.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "545.6,315.6 545.8,315.7 546,315.8 546.2,315.8 546.5,315.9 546.7,316 546.9,316 547.2,316\n\t\t\t\t\t547.4,316 547.7,316.1 547.9,316.1 548.2,316 548.4,316 548.6,316 548.9,315.9 549.1,315.9 549.4,315.8 549.6,315.7 549.8,315.6\n\t\t\t\t\t550,315.5 550.2,315.4 550.4,315.3 550.6,315.2 550.7,315 550.9,314.9 551.1,314.7 551.2,314.6 551.3,314.4 551.4,314.3\n\t\t\t\t\t551.5,314.1 551.6,313.9 551.7,313.7 551.7,313.6 551.8,313.4 551.8,313.2 551.8,313 551.8,312.8 551.8,312.6 551.7,312.5\n\t\t\t\t\t551.7,312.3 551.6,312.1 551.5,311.9 551.4,311.8 551.3,311.6 551.2,311.4 551,311.3 550.9,311.1 550.7,311 550.6,310.9\n\t\t\t\t\t550.4,310.8 550.2,310.6 550,310.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "550,310.5 549.8,310.4 549.6,310.4 549.3,310.3 549.1,310.2 548.9,310.2 548.6,310.1 548.4,310.1\n\t\t\t\t\t548.1,310.1 547.9,310.1 547.7,310.1 547.4,310.1 547.2,310.1 546.9,310.2 546.7,310.2 546.4,310.3 546.2,310.3 546,310.4\n\t\t\t\t\t545.8,310.5 545.6,310.6 545.4,310.7 545.2,310.8 545,311 544.8,311.1 544.7,311.2 544.5,311.4 544.4,311.5 544.3,311.7\n\t\t\t\t\t544.1,311.9 544.1,312 544,312.2 543.9,312.4 543.9,312.6 543.8,312.8 543.8,312.9 543.8,313.1 543.8,313.3 543.8,313.5\n\t\t\t\t\t543.9,313.7 543.9,313.8 544,314 544.1,314.2 544.2,314.4 544.3,314.5 544.4,314.7 544.5,314.8 544.7,315 544.8,315.1 545,315.3\n\t\t\t\t\t545.2,315.4 545.4,315.5 545.6,315.6 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "685.5,295.4 685.4,295.2 685.3,294.9 685.2,294.7 685.1,294.5 685,294.3 685,294 685,293.8\n\t\t\t\t\t684.9,293.7 684.9,293.5 684.9,293.3 685,293.2 685,293.1 685,293 685.1,292.9 685.2,292.8 685.3,292.7 685.4,292.7 685.5,292.7\n\t\t\t\t\t685.6,292.7 685.7,292.7 685.9,292.7 686,292.8 686.2,292.8 686.3,292.9 686.5,293 686.7,293.1 686.9,293.3 687.1,293.4\n\t\t\t\t\t687.2,293.6 687.4,293.8 687.6,293.9 687.8,294.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "538.8,295.4 538.9,295.2 539,294.9 539.1,294.7 539.2,294.5 539.2,294.3 539.3,294 539.3,293.8\n\t\t\t\t\t539.3,293.7 539.3,293.5 539.3,293.3 539.3,293.2 539.3,293.1 539.2,293 539.2,292.9 539.1,292.8 539,292.7 538.9,292.7\n\t\t\t\t\t538.8,292.7 538.7,292.7 538.5,292.7 538.4,292.7 538.2,292.8 538.1,292.8 537.9,292.9 537.7,293 537.6,293.1 537.4,293.3\n\t\t\t\t\t537.2,293.4 537,293.6 536.8,293.8 536.6,293.9 536.4,294.2 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "663.3,301.5 663.2,301.3 663,301.1 662.9,301 662.8,300.8 662.6,300.6 662.5,300.5 662.3,300.3\n\t\t\t\t\t662.2,300.2 662,300 661.8,299.9 661.7,299.8 661.5,299.7 661.3,299.6 661.2,299.5 661,299.5 660.8,299.4 660.6,299.4 660.4,299.3\n\t\t\t\t\t660.3,299.3 660.1,299.3 659.9,299.3 659.7,299.3 659.6,299.3 659.4,299.4 659.3,299.4 659.1,299.5 659,299.5 658.8,299.6\n\t\t\t\t\t658.7,299.7 658.5,299.8 658.4,299.9 658.3,300 658.2,300.1 658.1,300.3 658,300.4 657.9,300.6 657.8,300.7 657.8,300.9\n\t\t\t\t\t657.7,301.1 657.7,301.2 657.6,301.4 657.6,301.6 657.6,301.8 657.5,302 657.5,302.2 657.6,302.4 657.6,302.6 657.6,302.8\n\t\t\t\t\t657.6,303 657.7,303.2 657.7,303.5 657.8,303.7 657.9,303.9 658,304.1 658.1,304.3 658.2,304.5 658.3,304.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "658.3,304.7 658.4,304.9 658.5,305 658.6,305.2 658.8,305.4 658.9,305.5 659.1,305.7 659.2,305.8\n\t\t\t\t\t659.4,306 659.5,306.1 659.7,306.2 659.9,306.3 660,306.4 660.2,306.5 660.4,306.6 660.6,306.7 660.7,306.8 660.9,306.8\n\t\t\t\t\t661.1,306.8 661.3,306.9 661.5,306.9 661.6,306.9 661.8,306.9 662,306.8 662.1,306.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "662.1,306.8 662.3,306.8 662.4,306.7 662.6,306.6 662.7,306.6 662.9,306.5 663,306.4 663.1,306.3\n\t\t\t\t\t663.2,306.2 663.4,306 663.5,305.9 663.6,305.8 663.6,305.6 663.7,305.4 663.8,305.3 663.8,305.1 663.9,304.9 663.9,304.7\n\t\t\t\t\t664,304.5 664,304.3 664,304.2 664,303.9 664,303.7 664,303.5 663.9,303.3 663.9,303.1 663.9,302.9 663.8,302.7 663.7,302.5\n\t\t\t\t\t663.7,302.3 663.6,302.1 663.5,301.9 663.4,301.7 663.3,301.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "665.4,274.7 665.6,275 665.8,275.2 666,275.5 666.1,275.7 666.3,276 666.5,276.3 666.6,276.5\n\t\t\t\t\t666.7,276.8 666.9,277.1 667,277.3 667.1,277.6 667.2,277.9 667.2,278.1 667.3,278.4 667.3,278.6 667.4,278.9 667.4,279.1\n\t\t\t\t\t667.4,279.3 667.4,279.5 667.4,279.7 667.3,279.9 667.3,280.1 667.2,280.2 667.1,280.4 667,280.5 666.9,280.6 666.8,280.6\n\t\t\t\t\t666.7,280.7 666.6,280.8 666.4,280.8 666.2,280.8 666.1,280.8 665.9,280.7 665.7,280.7 665.5,280.6 665.4,280.5 665.2,280.4\n\t\t\t\t\t665,280.3 664.8,280.2 664.6,280 664.4,279.8 664.2,279.6 664,279.5 663.8,279.2 663.6,279 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "663.6,279 663.4,278.8 663.2,278.5 663,278.3 662.9,278 662.7,277.8 662.5,277.5 662.4,277.2\n\t\t\t\t\t662.3,277 662.1,276.7 662,276.4 661.9,276.1 661.8,275.9 661.8,275.6 661.7,275.4 661.7,275.1 661.6,274.9 661.6,274.6\n\t\t\t\t\t661.6,274.4 661.6,274.2 661.6,274 661.7,273.8 661.7,273.7 661.8,273.5 661.9,273.4 662,273.3 662.1,273.2 662.2,273.1 662.3,273\n\t\t\t\t\t662.4,273 662.6,273 662.8,273 662.9,273 663.1,273 663.3,273.1 663.5,273.1 663.6,273.2 663.8,273.3 664,273.5 664.2,273.6\n\t\t\t\t\t664.4,273.7 664.6,273.9 664.8,274.1 665,274.3 665.2,274.5 665.4,274.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "687.8,294.2 688,294.4 688.2,294.6 688.4,294.8 688.6,295.1 688.8,295.3 688.9,295.6 689.1,295.8\n\t\t\t\t\t689.3,296.1 689.4,296.3 689.6,296.6 689.7,296.9 689.9,297.1 690,297.4 690.1,297.6 690.2,297.9 690.3,298.1 690.3,298.3\n\t\t\t\t\t690.4,298.6 690.4,298.8 690.5,299 690.5,299.1 690.5,299.3 690.5,299.5 690.5,299.6 690.4,299.7 690.4,299.9 690.3,300 690.3,300\n\t\t\t\t\t690.2,300.1 690.1,300.1 690,300.1 689.8,300.2 689.7,300.1 689.6,300.1 689.4,300.1 689.3,300 689.1,299.9 688.9,299.8\n\t\t\t\t\t688.8,299.7 688.6,299.5 688.4,299.4 688.2,299.2 688,299.1 687.8,298.9 687.6,298.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "653.2,271.9 653,272.1 652.8,272.3 652.6,272.5 652.4,272.6 652.2,272.8 652,272.9 651.8,273\n\t\t\t\t\t651.6,273.1 651.4,273.2 651.3,273.3 651.1,273.4 650.9,273.4 650.8,273.4 650.6,273.4 650.5,273.4 650.4,273.3 650.3,273.3\n\t\t\t\t\t650.2,273.2 650.1,273.1 650,273 650,272.9 649.9,272.7 649.9,272.6 649.9,272.4 649.9,272.2 649.9,272 649.9,271.8 650,271.6\n\t\t\t\t\t650,271.4 650.1,271.1 650.2,270.9 650.3,270.6 650.4,270.4 650.5,270.1 650.6,269.9 650.8,269.6 650.9,269.3 651.1,269.1\n\t\t\t\t\t651.3,268.8 651.4,268.6 651.6,268.3 651.8,268.1 652,267.9 652.2,267.6 652.4,267.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "652.4,267.4 652.6,267.2 652.8,267 653,266.8 653.2,266.7 653.4,266.5 653.6,266.4 653.8,266.3\n\t\t\t\t\t654,266.2 654.2,266.1 654.4,266 654.5,265.9 654.7,265.9 654.8,265.9 655,265.9 655.1,265.9 655.2,266 655.3,266 655.4,266.1\n\t\t\t\t\t655.5,266.2 655.6,266.3 655.7,266.4 655.7,266.6 655.7,266.7 655.7,266.9 655.7,267.1 655.7,267.3 655.7,267.5 655.7,267.7\n\t\t\t\t\t655.6,267.9 655.5,268.2 655.4,268.4 655.4,268.7 655.2,268.9 655.1,269.2 655,269.4 654.9,269.7 654.7,270 654.5,270.2\n\t\t\t\t\t654.4,270.5 654.2,270.7 654,271 653.8,271.2 653.6,271.4 653.4,271.7 653.2,271.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "571,271.9 571.2,272.1 571.4,272.3 571.6,272.5 571.8,272.6 572,272.8 572.2,272.9 572.4,273\n\t\t\t\t\t572.6,273.1 572.8,273.2 573,273.3 573.2,273.4 573.3,273.4 573.5,273.4 573.6,273.4 573.7,273.4 573.9,273.3 574,273.3\n\t\t\t\t\t574.1,273.2 574.1,273.1 574.2,273 574.3,272.9 574.3,272.7 574.3,272.6 574.4,272.4 574.4,272.2 574.3,272 574.3,271.8\n\t\t\t\t\t574.3,271.6 574.2,271.4 574.2,271.1 574.1,270.9 574,270.6 573.9,270.4 573.7,270.1 573.6,269.9 573.5,269.6 573.3,269.3\n\t\t\t\t\t573.2,269.1 573,268.8 572.8,268.6 572.6,268.3 572.4,268.1 572.3,267.9 572.1,267.6 571.9,267.4 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "571.9,267.4 571.6,267.2 571.4,267 571.2,266.8 571,266.7 570.8,266.5 570.6,266.4 570.4,266.3\n\t\t\t\t\t570.3,266.2 570.1,266.1 569.9,266 569.7,265.9 569.6,265.9 569.4,265.9 569.3,265.9 569.1,265.9 569,266 568.9,266 568.8,266.1\n\t\t\t\t\t568.7,266.2 568.7,266.3 568.6,266.4 568.6,266.6 568.5,266.7 568.5,266.9 568.5,267.1 568.5,267.3 568.6,267.5 568.6,267.7\n\t\t\t\t\t568.7,267.9 568.7,268.2 568.8,268.4 568.9,268.7 569,268.9 569.1,269.2 569.3,269.4 569.4,269.7 569.6,270 569.7,270.2\n\t\t\t\t\t569.9,270.5 570.1,270.7 570.2,271 570.4,271.2 570.6,271.4 570.8,271.7 571,271.9 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "561,301.5 561.1,301.3 561.2,301.1 561.3,301 561.5,300.8 561.6,300.6 561.8,300.5 561.9,300.3\n\t\t\t\t\t562.1,300.2 562.2,300 562.4,299.9 562.6,299.8 562.7,299.7 562.9,299.6 563.1,299.5 563.3,299.5 563.5,299.4 563.6,299.4\n\t\t\t\t\t563.8,299.3 564,299.3 564.2,299.3 564.3,299.3 564.5,299.3 564.7,299.3 564.8,299.4 565,299.4 565.2,299.5 565.3,299.5\n\t\t\t\t\t565.4,299.6 565.6,299.7 565.7,299.8 565.8,299.9 566,300 566.1,300.1 566.2,300.3 566.3,300.4 566.3,300.6 566.4,300.7\n\t\t\t\t\t566.5,300.9 566.6,301.1 566.6,301.2 566.6,301.4 566.7,301.6 566.7,301.8 566.7,302 566.7,302.2 566.7,302.4 566.7,302.6\n\t\t\t\t\t566.7,302.8 566.6,303 566.6,303.2 566.5,303.5 566.4,303.7 566.4,303.9 566.3,304.1 566.2,304.3 566.1,304.5 566,304.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "566,304.7 565.9,304.9 565.7,305 565.6,305.2 565.5,305.4 565.3,305.5 565.2,305.7 565,305.8\n\t\t\t\t\t564.9,306 564.7,306.1 564.6,306.2 564.4,306.3 564.2,306.4 564,306.5 563.9,306.6 563.7,306.7 563.5,306.8 563.3,306.8\n\t\t\t\t\t563.1,306.8 563,306.9 562.8,306.9 562.6,306.9 562.5,306.9 562.3,306.8 562.1,306.8 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "562.1,306.8 562,306.8 561.8,306.7 561.7,306.6 561.5,306.6 561.4,306.5 561.2,306.4 561.1,306.3\n\t\t\t\t\t561,306.2 560.9,306 560.8,305.9 560.7,305.8 560.6,305.6 560.5,305.4 560.5,305.3 560.4,305.1 560.4,304.9 560.3,304.7\n\t\t\t\t\t560.3,304.5 560.3,304.3 560.3,304.2 560.3,303.9 560.3,303.7 560.3,303.5 560.3,303.3 560.3,303.1 560.4,302.9 560.4,302.7\n\t\t\t\t\t560.5,302.5 560.6,302.3 560.7,302.1 560.8,301.9 560.9,301.7 561,301.5 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "558.8,274.7 558.6,275 558.5,275.2 558.3,275.5 558.1,275.7 557.9,276 557.8,276.3 557.6,276.5\n\t\t\t\t\t557.5,276.8 557.4,277.1 557.3,277.3 557.2,277.6 557.1,277.9 557,278.1 557,278.4 556.9,278.6 556.9,278.9 556.9,279.1\n\t\t\t\t\t556.9,279.3 556.9,279.5 556.9,279.7 556.9,279.9 557,280.1 557.1,280.2 557.1,280.4 557.2,280.5 557.3,280.6 557.4,280.6\n\t\t\t\t\t557.6,280.7 557.7,280.8 557.8,280.8 558,280.8 558.2,280.8 558.3,280.7 558.5,280.7 558.7,280.6 558.9,280.5 559.1,280.4\n\t\t\t\t\t559.3,280.3 559.5,280.2 559.7,280 559.9,279.8 560.1,279.6 560.3,279.5 560.5,279.2 560.7,279 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "560.7,279 560.9,278.8 561.1,278.5 561.2,278.3 561.4,278 561.6,277.8 561.7,277.5 561.9,277.2\n\t\t\t\t\t562,277 562.1,276.7 562.2,276.4 562.3,276.1 562.4,275.9 562.5,275.6 562.5,275.4 562.6,275.1 562.6,274.9 562.6,274.6\n\t\t\t\t\t562.6,274.4 562.6,274.2 562.6,274 562.6,273.8 562.5,273.7 562.5,273.5 562.4,273.4 562.3,273.3 562.2,273.2 562.1,273.1\n\t\t\t\t\t561.9,273 561.8,273 561.7,273 561.5,273 561.3,273 561.2,273 561,273.1 560.8,273.1 560.6,273.2 560.4,273.3 560.2,273.5\n\t\t\t\t\t560,273.6 559.8,273.7 559.6,273.9 559.4,274.1 559.2,274.3 559,274.5 558.8,274.7 \t",
              }),
              _.createElement("polyline", {
                className: "st5",
                points:
                  "536.4,294.2 536.2,294.4 536,294.6 535.9,294.8 535.7,295.1 535.5,295.3 535.3,295.6 535.1,295.8\n\t\t\t\t\t535,296.1 534.8,296.3 534.7,296.6 534.5,296.9 534.4,297.1 534.3,297.4 534.2,297.6 534.1,297.9 534,298.1 533.9,298.3\n\t\t\t\t\t533.9,298.6 533.8,298.8 533.8,299 533.8,299.1 533.8,299.3 533.8,299.5 533.8,299.6 533.8,299.7 533.9,299.9 533.9,300 534,300\n\t\t\t\t\t534.1,300.1 534.2,300.1 534.3,300.1 534.4,300.2 534.5,300.1 534.7,300.1 534.8,300.1 535,300 535.2,299.9 535.3,299.8\n\t\t\t\t\t535.5,299.7 535.7,299.5 535.9,299.4 536.1,299.2 536.3,299.1 536.4,298.9 536.6,298.7 \t",
              }),
            ),
            _.createElement("path", {
              className: "st6",
              _: "M610,329.7h4.2c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H610c-0.2,0-0.3,0.1-0.3,0.3S609.9,329.7,610,329.7\n\t\t\t\t",
            }),
            _.createElement("path", {
              className: "st6",
              _: "M614.2,330.4H610c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h4.2c0.2,0,0.3-0.1,0.3-0.3\n\t\t\t\tS614.4,330.4,614.2,330.4",
            }),
            _.createElement("path", {
              className: "st6",
              _: "M614.2,331.7H610c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h4.2c0.2,0,0.3-0.1,0.3-0.3\n\t\t\t\tC614.5,331.8,614.4,331.7,614.2,331.7",
            }),
            _.createElement("path", {
              _: "M614.6,427.7l-0.5-0.3l-0.5-0.3l0.5-0.3l0.5-0.3c0.2-0.1,0.2-0.3,0-0.4l-0.5-0.3l-1.9-1.3c0,0-0.1-0.1-0.2-0.1\n\t\t\t\tc-0.1-0.1-0.3-0.1-0.4,0l-0.2,0.1l-1.9,1.3l-0.5,0.3c-0.2,0.1-0.2,0.3,0,0.4l0.5,0.3l0.5,0.3l-0.5,0.3l-0.5,0.3\n\t\t\t\tc-0.2,0.1-0.2,0.3,0,0.4l0.5,0.3l1.9,1.3c0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.3,0.1,0.4,0l0.2-0.1l1.9-1.3l0.5-0.3\n\t\t\t\tC614.8,428,614.8,427.8,614.6,427.7 M611.8,424.9l1.9,1.3l-1.9,1.3l-1.9-1.3L611.8,424.9z M611.8,429.2l-1.9-1.3l0.7-0.5l0.8,0.5\n\t\t\t\tc0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.3,0.1,0.4,0l0.2-0.1l0.8-0.5l0.7,0.5L611.8,429.2z",
            }),
            _.createElement(
              "g",
              {
                _: "Layer_7",
              },
              _.createElement("path", {
                className: "st6",
                _: "M614.1,469.1c-0.7,0.2-1.5,0.3-2.3,0.3s-1.5-0.1-2.3-0.3c-0.8-0.3-1.4-1.1-1.2-2c0.3-1.6,1.1-2.9,2.3-4\n\t\t\t\t\tc0.7-0.6,1.7-0.6,2.3,0c1.1,1,1.9,2.4,2.3,4C615.5,467.9,614.9,468.8,614.1,469.1 M618.1,468.3l-4.8-8.2c-0.1-0.3-0.4-0.4-0.7-0.4\n\t\t\t\t\tH611c-0.3,0-0.6,0.2-0.7,0.4l-4.8,8.2c-0.1,0.3-0.1,0.6,0,0.8l0.8,1.4c0.1,0.3,0.4,0.4,0.7,0.4h9.5c0.3,0,0.6-0.2,0.7-0.4l0.8-1.4\n\t\t\t\t\tC618.3,468.8,618.3,468.5,618.1,468.3",
              }),
              _.createElement("path", {
                className: "st6",
                _: "M618.4,478.7l-2.9,5.6c0,0.1-0.1,0.1-0.2,0.1h-0.9c-0.1,0-0.2-0.1-0.2-0.1l-2.9-5.6c0-0.1,0-0.2,0-0.3l0.3-0.5\n\t\t\t\t\tc0.1-0.1,0.2-0.2,0.3-0.2h0.3c0.1,0,0.1,0,0.2,0.1l2.4,4.8c0.1,0.1,0.2,0.1,0.2,0l2.4-4.8c0-0.1,0.1-0.1,0.2-0.1h0.3\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.2l0.3,0.5C618.5,478.5,618.5,478.6,618.4,478.7",
              }),
              _.createElement("path", {
                className: "st6",
                _: "M604.2,478.7l-2.9,5.6c0,0.1-0.1,0.1-0.2,0.1h-0.9c-0.1,0-0.2-0.1-0.2-0.1l-2.9-5.6c-0.1-0.1,0-0.2,0-0.3\n\t\t\t\t\tl0.3-0.5c0.1-0.1,0.2-0.2,0.3-0.2h0.3c0.1,0,0.1,0,0.2,0.1l2.4,4.8c0,0.1,0.2,0.1,0.2,0l2.4-4.8c0-0.1,0.1-0.1,0.2-0.1h0.3\n\t\t\t\t\tc0.1,0,0.2,0.1,0.3,0.2l0.3,0.5C604.3,478.5,604.3,478.6,604.2,478.7",
              }),
              _.createElement("path", {
                className: "st6",
                _: "M608.3,477.8c0,0-0.1-0.1-0.2-0.1h-0.4c-0.1,0-0.2,0.1-0.3,0.2l-0.3,0.5c0,0,0,0.1,0,0.2v5.7\n\t\t\t\t\tc0,0.2,0.1,0.3,0.3,0.3h0.8c0.1,0,0.3-0.1,0.3-0.3V478C608.4,477.9,608.4,477.9,608.3,477.8",
              }),
              _.createElement("path", {
                className: "st6",
                _: "M621.6,477.9c0.1-0.1,0.2-0.2,0.3-0.2h4.1c0.1,0,0.2,0.1,0.3,0.2l0.3,0.5c0,0.1,0.1,0.2,0.1,0.2v0.1\n\t\t\t\t\tc0,0.1-0.1,0.2-0.2,0.2h-3.7c-0.1,0-0.1,0.1-0.1,0.1v1.3c0,0.1,0.1,0.1,0.1,0.1h2.5c0.1,0,0.2,0.1,0.2,0.2v0.7\n\t\t\t\t\tc0,0.1-0.1,0.2-0.2,0.2h-2.5c-0.1,0-0.1,0.1-0.1,0.1v1.3c0,0.1,0.1,0.1,0.1,0.1h3.7c0.1,0,0.2,0.1,0.2,0.2v0.1c0,0.1,0,0.2-0.1,0.2\n\t\t\t\t\tl-0.3,0.5c-0.1,0.1-0.2,0.2-0.3,0.2h-4.1c-0.1,0-0.2-0.1-0.3-0.2l-0.3-0.5c0-0.1-0.1-0.2-0.1-0.2v-5c0-0.1,0-0.2,0.1-0.2\n\t\t\t\t\tL621.6,477.9z",
              }),
            ),
          );
        }
        class _ extends _ {
          renderControllerImage(_) {
            return _(_);
          }
          get pairingInstructions() {
            return _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                _(
                  "#pairing_knuckles_instructions_press",
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_b"),
                  ),
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_system"),
                  ),
                ),
              ),
            );
          }
          get className() {
            return "Knuckles";
          }
          get controllerName() {
            return _("#pairingdevice_knuckles_controllername");
          }
          get aControllerName() {
            return _("#pairingdevice_a_knuckles_controllername");
          }
        }
        class _ extends _ {
          renderControllerImage(_) {
            return _(_);
          }
          get pairingInstructions() {
            return _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                _(
                  "#pairing_knuckles_instructions_press",
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_menu"),
                  ),
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_system"),
                  ),
                ),
              ),
            );
          }
          get className() {
            return "ViveWand";
          }
          get controllerName() {
            return _("#pairingdevice_vivewand_shortname");
          }
          get aControllerName() {
            return _("#pairingdevice_a_vivewand_shortname");
          }
        }
        class _ extends _ {
          renderControllerImage(_) {
            return _(_);
          }
          get pairingInstructions() {
            return _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                _(
                  "#pairing_tracker_instructions_press",
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_system"),
                  ),
                ),
              ),
            );
          }
          get className() {
            return "ViveTracker";
          }
          get controllerName() {
            return _("#pairingdevice_vivetracker_shortname");
          }
          get aControllerName() {
            return _("#pairingdevice_a_vivetracker_shortname");
          }
        }
        class _ extends _ {
          renderControllerImage(_) {
            return (function (_) {
              return _.createElement(
                "svg",
                {
                  version: "1.1",
                  _: "Layer_1",
                  xmlns: "http://www.w3.org/2000/svg",
                  _: "0px",
                  _: "0px",
                  viewBox: "0 0 607.8 449.3",
                  className: "VRInkPilotEditionPairingSVG",
                },
                _.createElement("path", {
                  className: "st0",
                  _: "M525.4,117.5c0,0,9.7,4,11.1,4.7c1.4,0.8,6.5,2,9.8,2.1c3.3,0.1,26.9-1.7,30.3-2.1s5.3-0.9,6.4-1.5\n\t\t\t\tc1.1-0.6,15.4-8.4,16.1-8.8s2.6-1.7,3.5-5.3c0.8-3.6,3.1-17.4,3.1-17.4s-1.4-53.2-1.4-55.2s-0.6-3.9-1.1-5.3\n\t\t\t\tc-0.5-1.4-7.3-18.5-7.3-18.5s-1.4-3-5.3-3.7s-17.1-3.7-17.1-3.7s-2.1-0.3-4.6,0.7s-18,6.8-18,6.8s-5.4,2.3-7.8,4.2\n\t\t\t\tc-2.4,2-31.6,28.7-31.6,28.7l-53.2-24.5c0,0-7.5-4.4-16.1-2s-26.8,7.8-26.8,7.8l-15.4,8.2c0,0-4.1,2-4.9,5.3\n\t\t\t\tc-0.8,3.2-7.3,39.5-7.3,39.5L368.9,110c0,0-11.1,56.2-68.7,92.2s-162.1,99.7-162.1,99.7s-55.1,32-83.4,60.5\n\t\t\t\tc-1,1.1-4.2,6.1-10.5,13.6c-2.9,3.5-15,17.3-15,17.3s-9,11.7-11.3,15.1c-2.3,3.4-7.5,14-7.5,14.1c-0.1,0.1-0.6,0.7-0.7,0.9\n\t\t\t\tC9.7,423.6,4.7,435.1,4,437c-0.6,2-2,7.8,3,8.4c5,0.6,15.5,1.2,18.4,1.2s25-0.9,52.7-11.6s33.2-13.8,33.2-13.8s28.5-15.3,33.8-18.7\n\t\t\t\ts116.3-75,133.4-85.4c17.1-10.4,109-69.6,109-69.6s28.7-19,41.7-31.4S525.4,117.5,525.4,117.5z",
                }),
                _.createElement("path", {
                  className: "st1",
                  _: "M31.4,433.4c0,0,89.5-42.8,119-64.6c1.8-1.4,2.1-2.8,2.1-2.8l3.3-18.1c0,0,0.7-4,3.3-5.7\n\t\t\t\tc2.6-1.7,54.8-34.8,54.8-34.8s3-1.7,6.2,0.2c3.2,1.9,11.4,7.1,11.4,7.1s1.2,1,3.1-0.3c1.9-1.2,63.3-41.1,63.3-41.1s1.1-0.9,3.4,0.1\n\t\t\t\ts13.7,5.9,13.7,5.9s1.5,0.9,3.4-0.3c1.9-1.2,28.4-18.5,28.4-18.5s1.3-0.6,2.5-3.1s10-21.8,10-21.8s0.6-1.3,1.7-1.9\n\t\t\t\ts27.2-16.6,27.2-16.6s37.7-26.1,65.1-52.2c27.3-26.1,78.1-75.2,78.1-75.2l44-43.3c0,0,7.9-7,12.3-9.4s12-6.1,12-6.1s3-1.3,3.9-0.4",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M511.5,43.2l-40.2,31.4c0,0-3.8,3.3-4.5,3.9c-0.2,0.2-3.4,3.6-8.2,8.1c-6,5.6-14.3,13-19.7,18\n\t\t\t\tc-3.6,3.3-6.3,5.4-6.3,5.4l-9.3,8c0,0-19.3,17.1-26.8,14.5c-6.3-0.2,1.5-13.7,5.9-25.1c4-10.3,9.2-23.5,10.1-26\n\t\t\t\tc0.1-0.3,0.5-0.6,0.5-0.6s18.3-11.2,19.3-11.9c1-0.7,1.5-1.4,1.7-2.1c1.1-5.7,3.6-28.8,3.6-28.8l0.5-1.6c0,0,4.4-5,5.3-5.6\n\t\t\t\ts1.1-0.6,4.2-1.1c3.1-0.5,9.4-3.1,11.2-3.7c0.2-0.1,0.8-0.1,1-0.1c1,0,3.1,0.1,5,0.2c0.1,0,0.4,0,0.8,0.1c3.4,0.5,15.9,3.1,16.1,3.1\n\t\t\t\t",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M525.4,117.5L567.5,80l11.2-8.2c0,0,2.1-0.5,2.3,0.1c0.3,0.6,0.7,47.6,0.7,47.6s-0.6,2.2-2,2.4",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M488.5,61.2l-13.1-5.4c0,0-3.6-1.6-5.3-1.5s-3.3,0.2-4.8,0.5c-1.5,0.4-13.4,3.4-13.4,3.4s-4.4,0.8-6.1,6.1\n\t\t\t\tc-1.7,5.3-15.1,47.4-15.1,47.4",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M447.6,83.7c-0.2,0.1,9.7-3.7,9.7-3.7s1.5-0.7,2.6-0.3c1.1,0.4,3.4,1.7,3.4,1.7",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M563.1,83.9l1.3,22.9c0,0-0.2,1.5-2.1,1.8c-2,0.3-28.8,1.7-28.8,1.7",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M415.3,24.5c0,0-6.4,1.9-7.5,6.8c-2.1,7.2-20.9,60-20.9,60s-19.9,59-62,91.9",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M543.1,14.4L427.4,125.3c0,0-12.9,11.6-14.9,13.3c-2,1.7,61.6-30.4,64.7-34.6c3.1-4.2,27.9-53.1,27.9-53.1\n\t\t\t\ts59.5-32.1,60.6-32.9c1.1-0.8,7.9-3.9,7.9-3.9L588,8c0,0,4.4-1.8,5.5-0.4",
                }),
                _.createElement("path", {
                  className: "st0",
                  _: "M456.8,87.1l-7.4-3.3l-2.5,0.8c0,0-1.3,0.9-2.1,3.4c-0.7,2.5-4.4,14.1-4.4,14.1L456.8,87.1z",
                }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -94.0135 57.5569)",
                  className: "st2",
                  _: "130.3",
                  _: "318.4",
                  _: "20.9",
                  _: "6.1",
                }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -94.0135 57.5569)",
                  className: "st1",
                  _: "130.3",
                  _: "318.4",
                  _: "17.7",
                  _: "5.2",
                }),
                _.createElement("path", {
                  className: "st2",
                  _: "M229.7,262.3c5.2,3-4.6,9.7-9.4,12.7c-4.8,3-34.2,21.2-35.8,22.1s-4.3,2.2-6,2.8c-1.7,0.6-30,11.1-36.3,4.9\n\t\t\t\tc-2.9-3.2,5.8-8.3,7-8.9c1.2-0.7,31.6-19.4,41.7-25.6C204.9,261.9,224.6,259.3,229.7,262.3z",
                }),
                _.createElement("path", {
                  className: "st1",
                  _: "M226.1,263.7c2,1.2,2,3.9-10.8,11.6c-14.3,8.9-29.9,18.4-31.8,19.6c-1.9,1.2-4.2,2.7-6.7,3.8\n\t\t\t\tc-2.5,1.1-24.5,10.2-30.5,4.4c-2.2-2.8,5.6-7.9,5.6-7.9s35.4-21.8,39.2-24C197.2,267.5,218.4,259.2,226.1,263.7z",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "164.9,362.4 162.3,361 163.2,357.6 167.1,355 169.8,355.9 169.7,359.2 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "166,347.7 168.9,349 173.3,345.9 173.8,342.7 171,341.7 166.9,344.3 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "178.3,355.4 174.4,353.2 175.6,347.8 181.5,344 185.7,346.1 184.1,351.4 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "179,360.3 176.4,359.1 172.3,361.7 171,365.5 174.3,366.2 177.8,364 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "186.3,358.4 183.8,357.3 185.2,353.3 190.8,349.7 193.5,351 192.1,354.8 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "197.5,342.8 192.1,346.6 187.9,344.5 189.2,339.2 194.6,335.5 198.9,337.5 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "205,338 201.4,335.7 202.5,330.2 207.9,326.6 212.5,328.6 211,334 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "218.7,327.3 216.2,326.1 217.2,322.5 220.9,320 223.7,321.5 222.6,325 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "187.4,337.2 182,340.6 179.2,339.2 180,336.1 185.3,332.7 187.6,333.6 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "199.8,349.2 197.6,348.1 199,344.8 204.1,341.4 206.7,342.5 205.1,345.9 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "219.1,334.4 216.8,333.3 213,335.6 211.8,339.2 214.2,340.2 217.8,337.9 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "195.2,332.1 192.3,330.7 193.2,327.1 198.4,323.7 202,325 200.9,328.4 ",
                }),
                _.createElement("polygon", {
                  className: "st3",
                  points:
                    "207.4,318.2 206.6,321.5 209.3,323.1 213.2,320.5 214.1,317 211.5,315.6 ",
                }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -67.8877 87.7272)",
                  className: "st2",
                  _: "236.3",
                  _: "253",
                  _: "13.4",
                  _: "3.9",
                }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -67.8877 87.7272)",
                  className: "st1",
                  _: "236.3",
                  _: "253",
                  _: "11.3",
                  _: "3.3",
                }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -54.4079 103.1643)",
                  className: "st2",
                  _: "290.6",
                  _: "219.2",
                  _: "8.8",
                  _: "2.6",
                }),
                _ &&
                  _.createElement("ellipse", {
                    transform:
                      "matrix(0.9487 -0.3162 0.3162 0.9487 -67.8877 87.7272)",
                    className: "st4",
                    _: "236.3",
                    _: "253",
                    _: "13.4",
                    _: "3.9",
                  }),
                _.createElement("ellipse", {
                  transform:
                    "matrix(0.9487 -0.3162 0.3162 0.9487 -54.2568 103.0851)",
                  className: "st2",
                  _: "290.5",
                  _: "218.7",
                  _: "6",
                  _: "1.8",
                }),
                _.createElement("path", {
                  className: "st1",
                  _: "M10.4,422.6c0,0,6.8-5.5,15.2,7.5s0.5,16.6-0.2,16.6",
                }),
                _.createElement("path", {
                  className: "st1",
                  _: "M11.7,419.9c0,0,7.6-6.1,16.9,8.3c9.3,14.4,0.6,18.4-0.2,18.4",
                }),
                _ &&
                  _.createElement("ellipse", {
                    transform:
                      "matrix(0.9487 -0.3162 0.3162 0.9487 -54.4079 103.1643)",
                    className: "st4",
                    _: "290.6",
                    _: "219.2",
                    _: "8.8",
                    _: "2.6",
                  }),
              );
            })(_);
          }
          get pairingInstructions() {
            return _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                _(
                  "#pairing_pen_instructions_press",
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_menu"),
                  ),
                  _.createElement(
                    "span",
                    {
                      className: "Highlight",
                    },
                    _("#pairing_button_system"),
                  ),
                ),
              ),
            );
          }
          get className() {
            return "VRInkPilotEdition";
          }
          get controllerName() {
            return _("#pairingdevice_logitechvrinkpilotedition_shortname");
          }
          get aControllerName() {
            return _("#pairingdevice_a_logitechvrinkpilotedition_shortname");
          }
        }
        !(function (_) {
          (_[(_.Idle = 0)] = "Idle"),
            (_[(_.FetchingInitialDongleList = 1)] =
              "FetchingInitialDongleList"),
            (_[(_.NoDonglesAvailable = 2)] = "NoDonglesAvailable"),
            (_[(_.DongleListReady = 3)] = "DongleListReady"),
            (_[(_.WaitingForDeviceToPair = 4)] = "WaitingForDeviceToPair"),
            (_[(_.UpdatingDongleListAfterPairing = 5)] =
              "UpdatingDongleListAfterPairing"),
            (_[(_.Success = 6)] = "Success"),
            (_[(_.TimedOut = 7)] = "TimedOut"),
            (_[(_.NoDonglesDetected = 8)] = "NoDonglesDetected"),
            (_[(_.PairingFailed = 9)] = "PairingFailed");
        })(_ || (_ = {}));
        class _ {
          constructor() {
            (this.m_mailbox = new _()),
              (this.dongles = new Array()),
              (this.pairingNameExpected = void 0),
              (this.pairingState = _.Idle),
              (this.pairingDevice = void 0),
              (this.windowIsShown = !1),
              (this.waitingForDonglesResponse = !1),
              (this.dongleLastPairedTimestamps = new Map()),
              (0, _._)(this);
          }
          init() {
            this.m_mailbox
              .Init("pairing_ui")
              .then(() => {
                var _;
                this.m_mailbox.RegisterHandler(
                  "discover_dongles_response",
                  this.OnDiscoverDonglesResponse,
                ),
                  this.m_mailbox.RegisterHandler(
                    "pairing_result",
                    this.OnStartPairingResponse,
                  ),
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.RegisterForWindowEvents(this.onWindowEvent),
                  (this.windowIsShown =
                    null !==
                      (_ =
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.IsWindowShown()) &&
                    void 0 !== _ &&
                    _),
                  this.Reset();
              })
              .catch((_) => {
                console.log("Failed to open pairingstore mailbox " + _);
              });
          }
          getPairableDevices() {
            return new Map([
              ["knuckles", new _()],
              ["vive_controller", new _()],
              ["vive_tracker", new _()],
              ["vr_ink_pilot_edition", new _()],
            ]);
          }
          onWindowEvent(_) {
            switch (_) {
              case _.Shown:
                (this.windowIsShown = !0), this.Reset();
                break;
              case _.Hidden:
                (this.windowIsShown = !1), this.Reset();
            }
          }
          get HasFreeDongle() {
            return null != this.FindAvailableDongle();
          }
          selectPairingDevice(_) {
            (this.pairingDevice = _), this.PairWithFreeDongle();
          }
          FindAvailableDongle() {
            if (!this.dongles) return null;
            let _ = this.dongles.filter((_) => "" == _.connectedSerial);
            return (
              _.sort(
                (_, _) =>
                  (this.dongleLastPairedTimestamps.has(_.serial)
                    ? this.dongleLastPairedTimestamps.get(_.serial)
                    : 0) -
                  (this.dongleLastPairedTimestamps.has(_.serial)
                    ? this.dongleLastPairedTimestamps.get(_.serial)
                    : 0),
              ),
              _ ? _[0] : null
            );
          }
          PromptUserToPair() {
            if (!this.HasFreeDongle)
              return (
                console.warn("PromptUserToPair(): No available dongles."),
                void this.SetState(_.NoDonglesAvailable)
              );
            null != this.pairingNameExpected &&
            this.getPairableDevices().has(this.pairingNameExpected)
              ? _.selectPairingDevice(
                  _.getPairableDevices().get(_.pairingNameExpected),
                )
              : this.SetState(_.DongleListReady);
          }
          OnDiscoverDonglesResponse(_) {
            switch (
              ((this.dongles = _.dongles),
              (this.pairingNameExpected = _.expectedControllerType),
              (this.waitingForDonglesResponse = !1),
              this.pairingState)
            ) {
              case _.FetchingInitialDongleList:
              case _.NoDonglesAvailable:
              case _.NoDonglesDetected:
                this.HasFreeDongle
                  ? this.PromptUserToPair()
                  : this.dongles && this.dongles.length > 0
                    ? this.SetState(_.NoDonglesAvailable)
                    : this.SetState(_.NoDonglesDetected);
                break;
              case _.UpdatingDongleListAfterPairing:
                this.SetState(_.Success);
            }
          }
          OnStartPairingResponse(_) {
            switch (
              (this.pairingState != _.WaitingForDeviceToPair &&
                console.log("Pairing response when not waiting for one", _),
              _.result)
            ) {
              case "timeout":
                this.SetState(_.TimedOut);
                break;
              case "failed_to_start":
                this.SetState(_.PairingFailed);
                break;
              case "canceled":
              case "success":
                null != this.pairingTimer &&
                  (window.clearInterval(this.pairingTimer),
                  (this.pairingTimer = null)),
                  this.activeDongle &&
                    this.dongleLastPairedTimestamps.set(
                      this.activeDongle.serial,
                      new Date().getTime(),
                    ),
                  this.SetState(_.UpdatingDongleListAfterPairing);
            }
          }
          SetState(_) {
            switch (((this.pairingState = _), _)) {
              case _.FetchingInitialDongleList:
              case _.UpdatingDongleListAfterPairing:
              case _.NoDonglesAvailable:
              case _.NoDonglesDetected:
                this.DiscoverDongles();
            }
          }
          DiscoverDongles() {
            if (
              this.pairingState != _.FetchingInitialDongleList &&
              this.pairingState != _.UpdatingDongleListAfterPairing &&
              this.pairingState != _.NoDonglesAvailable &&
              this.pairingState != _.NoDonglesDetected
            )
              return;
            if (this.waitingForDonglesResponse) return;
            this.waitingForDonglesResponse = !0;
            let _ = {
              type: "discover_dongles",
              returnAddress: this.m_mailbox.name,
            };
            console.log("Sending DiscoverDongles"),
              this.m_mailbox.SendMessage("lighthouse_pairing", _);
          }
          StartPairing(_) {
            if (
              (this.SetState(_.WaitingForDeviceToPair),
              (this.activeDongle = _),
              !_)
            )
              return;
            let _ = {
              type: "start_pairing",
              returnAddress: this.m_mailbox.name,
              serial: _.serial,
              timeoutSeconds: 10,
            };
            (this.pairingTimer = window.setInterval(() => {
              this.pairingState == _.WaitingForDeviceToPair &&
              this.activeDongle == _
                ? (console.log("Sending StartPairing to " + _.serial),
                  this.m_mailbox.SendMessage("lighthouse_pairing", _))
                : (console.log("Pairing has completed, clearing interval."),
                  window.clearInterval(this.pairingTimer),
                  (this.pairingTimer = null));
            }, 5e3)),
              console.log("Sending StartPairing to " + _.serial),
              this.m_mailbox.SendMessage("lighthouse_pairing", _);
          }
          Close() {
            null === VRHTML || void 0 === VRHTML || VRHTML.CloseWindow(!0);
          }
          StopPairing(_) {
            if (null == _) return;
            let _ = {
              type: "stop_pairing",
              returnAddress: this.m_mailbox.name,
              serial: _.serial,
            };
            console.log("Sending StopPairing to " + _.serial),
              this.m_mailbox.SendMessage("lighthouse_pairing", _);
          }
          PairWithFreeDongle() {
            let _ = this.FindAvailableDongle();
            return null != _
              ? (this.StartPairing(_), !0)
              : (this.SetState(_.NoDonglesAvailable), !1);
          }
          CancelActivePairing() {
            this.StopPairing(this.activeDongle);
          }
          Reset() {
            this.CancelActivePairing(),
              this.SetState(
                this.windowIsShown ? _.FetchingInitialDongleList : _.Idle,
              ),
              (this.pairingDevice = null);
          }
          ChooseController() {
            this.pairingDevice = null;
          }
        }
        (0, _._)([_._], _.prototype, "dongles", void 0),
          (0, _._)([_._], _.prototype, "pairingNameExpected", void 0),
          (0, _._)([_._], _.prototype, "pairingState", void 0),
          (0, _._)([_._], _.prototype, "pairingDevice", void 0),
          (0, _._)([_._], _.prototype, "init", null),
          (0, _._)([_], _.prototype, "onWindowEvent", null),
          (0, _._)([_._], _.prototype, "HasFreeDongle", null),
          (0, _._)([_], _.prototype, "OnDiscoverDonglesResponse", null),
          (0, _._)([_], _.prototype, "OnStartPairingResponse", null),
          (0, _._)([_], _.prototype, "DiscoverDongles", null),
          (0, _._)([_], _.prototype, "Close", null),
          (0, _._)([_], _.prototype, "PairWithFreeDongle", null),
          (0, _._)([_], _.prototype, "CancelActivePairing", null),
          (0, _._)([_._], _.prototype, "Reset", null),
          (0, _._)([_._], _.prototype, "ChooseController", null);
        const _ = new _();
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          render() {
            const _ = Array.from(_.getPairableDevices().values());
            return _.createElement(
              "div",
              null,
              _.createElement(
                "div",
                {
                  className: "Title Label",
                },
                _("#pairing_selectdevice_title"),
              ),
              _.createElement(
                "div",
                {
                  className: "PageContent PairingOptions",
                },
                _.map((_, _) =>
                  _.createElement(
                    "div",
                    {
                      key: _,
                      className: "PairingOption " + _.className,
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Button",
                        onClick: () => _.selectPairingDevice(_),
                      },
                      _.renderControllerImage(!1),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: "PairingOptionText Label",
                      },
                      _.controllerName,
                    ),
                  ),
                ),
              ),
            );
          }
        };
        _ = (0, _._)([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = _.BinaryReader.prototype,
          _ = _.BinaryWriter.prototype;
        function _(_) {
          const _ = {},
            { fields: _ } = _;
          for (const _ in _) {
            const _ = _[_];
            _[_._] = _;
          }
          return _;
        }
        function _(_, _) {
          const { proto: _, fields: _ } = _,
            _ = new _();
          if (null == _) return _;
          for (const _ in _) {
            const { _, _: _, _: _, _: _, _: _ } = _[_];
            if (!Object.prototype.hasOwnProperty.call(_, _)) continue;
            const _ = _[_];
            _
              ? _
                ? _.Message.setRepeatedWrapperField(
                    _,
                    _,
                    Array.isArray(_) ? _.map((_) => _.fromObject(_)) : [],
                  )
                : _.Message.setWrapperField(_, _, _.fromObject(_))
              : _.Message.setField(_, _, _);
          }
          return _;
        }
        function _(_, _, _) {
          const { proto: _, fields: _ } = _,
            _ = {};
          for (const _ in _) {
            const { _: _, _: _, _: _, _: _, _: _ } = _[_];
            if (_)
              if (_)
                _[_] = _.Message.toObjectList(
                  _.Message.getRepeatedWrapperField(_, _, _),
                  _.toObject,
                  _,
                );
              else {
                const _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
                _ && (_[_] = _.toObject(_, _));
              }
            else {
              const _ = _.Message.getFieldWithDefault(
                _,
                _,
                void 0 !== _ ? _ : null,
              );
              (null !== _ || _) && (_[_] = _);
            }
          }
          return _ && (_.$jspbMessageInstance = _), _;
        }
        function _(_, _, _) {
          for (
            ;
            __webpack_require__.nextField() &&
            !__webpack_require__.isEndGroup();
          ) {
            const _ = _[__webpack_require__.getFieldNumber()];
            if (_) {
              const { _: _, _: _, _: _, _: _, _: _, _: _ } = _;
              if (_) {
                const _ = new _();
                __webpack_require__.readMessage(
                  _,
                  _.deserializeBinaryFromReader,
                ),
                  _
                    ? _.Message.addToRepeatedWrapperField(_, _, _, _)
                    : _.Message.setWrapperField(_, _, _);
              } else if (_) {
                const _ = _.call(_);
                _
                  ? _.Message.addToRepeatedField(_, _, _)
                  : _.Message.setField(_, _, _);
              } else
                console.assert(
                  !!_,
                  `Reader func not set for field number ${_} in class ${_}`,
                ),
                  __webpack_require__.skipField();
            } else __webpack_require__.skipField();
          }
          return _;
        }
        function _(_, _, _) {
          const { fields: _ } = _;
          for (const _ in _) {
            const { _: _, _: _, _: _, _: _, _: _, _: _ } = _[_];
            if (_)
              if (_) {
                const _ = _.Message.getRepeatedWrapperField(_, _, _);
                ((_ && _.length) || _) &&
                  __webpack_require__.writeRepeatedMessage(
                    _,
                    _,
                    _.serializeBinaryToWriter,
                  );
              } else {
                const _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
                _ &&
                  __webpack_require__.writeMessage(
                    _,
                    _,
                    _.serializeBinaryToWriter,
                  );
              }
            else if (_) {
              const _ = _.Message.getField(_, _);
              null != _ && _.call(_, _, _);
            } else
              console.assert(
                !!_,
                `Writer func not set for field number ${_} in class ${_}`,
              );
          }
        }
        function _(_) {
          const _ = _.proto;
          for (const _ in _.fields) {
            const _ = _.fields[_],
              { _: _, _: _, _: _, _: _, _: _ } = _;
            Object.prototype.hasOwnProperty.call(_, "d")
              ? (_.prototype[_] = _(_.Message.getFieldWithDefault, _, _))
              : (_.prototype[_] = _
                  ? _
                    ? _(_.Message.getRepeatedWrapperField, _, _)
                    : _(_, _)
                  : _(_.Message.getField, _)),
              (_.prototype[`set_${_}`] = _(
                _
                  ? _
                    ? _.Message.setRepeatedWrapperField
                    : _.Message.setWrapperField
                  : _.Message.setField,
                _,
              )),
              _ && (_.prototype[`add_${_}`] = _(_, _));
          }
        }
        function _(_, ..._) {
          return function () {
            return _(this, ..._);
          };
        }
        function _(_, _) {
          return function (_ = !0) {
            return _.Message.getWrapperField(this, _, _, _ ? 1 : 0);
          };
        }
        function _(_, _) {
          return function (_) {
            return _(this, _, _);
          };
        }
        function _(_, _) {
          return _
            ? function (_, _) {
                return _.Message.addToRepeatedWrapperField(this, _, _, _, _);
              }
            : function (_, _) {
                _.Message.addToRepeatedField(this, _, _, _);
              };
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.product || _(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    product: {
                      _: 1,
                      _: _.readString,
                      _: _.writeString,
                    },
                    version: {
                      _: 2,
                      _: _.readString,
                      _: _.writeString,
                    },
                    errors: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    tags: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _.readString,
                      _: _.writeRepeatedString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _(_._(), _, _);
          }
          static fromObject(_) {
            return _(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportClientError_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.identifier || _(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    identifier: {
                      _: 1,
                      _: _.readString,
                      _: _.writeString,
                    },
                    message: {
                      _: 2,
                      _: _.readString,
                      _: _.writeString,
                    },
                    count: {
                      _: 3,
                      _: _.readUint32,
                      _: _.writeUint32,
                    },
                    context: {
                      _: 4,
                      _: _.readString,
                      _: _.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _(_._(), _, _);
          }
          static fromObject(_) {
            return _(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportClientError_Notification_Error";
          }
        }
        function _(_) {
          return (0, _._)(
            this,
            arguments,
            void 0,
            function* (_, _ = "SHA-256") {
              let _;
              var _;
              "string" == typeof _
                ? ((_ = _), (_ = new TextEncoder().encode(_).buffer))
                : (_ = _);
              const _ = yield window.crypto.subtle.digest(_, _);
              return (
                (_ = _),
                Array.prototype.map
                  .call(new Uint8Array(_), (_) =>
                    ("00" + _.toString(16)).slice(-2),
                  )
                  .join("")
              );
              var _;
            },
          );
        }
        const _ = "/settings/steamvr/showAdvancedSettings",
          _ = "change_route";
        class _ {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.m_mailbox = new _()),
              (this.connected = !1),
              (this.settingsSchema = void 0),
              (this.settings = _._.map()),
              (this.systemInfo = void 0),
              (this.audioDevices = void 0),
              (this.apps = []),
              (this.probablyOwnedAppkeys = new Set()),
              (this.showInternalSettings = !1),
              (this.workshopStateChangedCanary = 1),
              (this.onRestartRequired = null),
              (this.onAppRestartRequired = null),
              (this.pendingChanges = new Map()),
              (this.route = []),
              (this.m_mapSettingsLastWriteInfo = new Map()),
              (this.m_bIsSettingApp = !1),
              (this.m_bInitStarted = !1),
              (this.m_appFrameLimits = []),
              (this.m_mapRefreshRatesForFrameLimit = new Map()),
              (this.GetAppList = function () {
                return new Promise(function (_, _) {
                  _()
                    .get("/app/list.json")
                    .then((_) => {
                      _(_.data.apps);
                    })
                    .catch((_) => {
                      _(_);
                    });
                });
              }),
              (this.GetSettingsUGC = function () {
                return new Promise(function (_, _) {
                  _()
                    .get("/settings_getugc")
                    .then((_) => {
                      _(_.data);
                    })
                    .catch((_) => {
                      _(_);
                    });
                });
              }),
              (this.ReloadSettingsSchema = function () {
                return new Promise(function (_, _) {
                  _()
                    .get("/settings_reloadschema")
                    .then((_) => {
                      _(_.data);
                    })
                    .catch((_) => {
                      _(_);
                    });
                });
              }),
              (this.GetSettingsInfo = function () {
                return new Promise(function (_, _) {
                  _()
                    .get("/settings_getinfo")
                    .then((_) => {
                      _(_.data);
                    })
                    .catch((_) => {
                      _(_);
                    });
                });
              }),
              (0, _._)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((_, _) => {
              console.log("Connecting vrsettings..."),
                (this.m_wsWebSocketToServer = new WebSocket(
                  "ws://" + window.location.host,
                )),
                this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                  this.OnWebSocketOpen(_), _();
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
                );
            });
          }
          Init(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              if (this.m_bInitStarted) return;
              (this.m_bInitStarted = !0),
                (this.m_bIsSettingApp = _),
                this.m_bIsSettingApp &&
                  (window.addEventListener("hashchange", this.onHashChanged),
                  this.onHashChanged()),
                (0, _._)(
                  () => {
                    let _ = [];
                    if (0 != this.pendingChanges.size) {
                      for (const [_, _] of this.pendingChanges.entries())
                        _.push({
                          name: _,
                          value: _,
                        });
                      this.pendingChanges.clear(),
                        _()
                          .post("/settings_set.action", _)
                          .then((_) => {})
                          .catch((_) => {
                            console.log(
                              "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                              _,
                            );
                          });
                    }
                  },
                  {
                    delay: 300,
                  },
                ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDisplayModeNotSupportedEvents(
                    this.SetRestartRequired,
                  );
              let _ = [];
              this.m_mailbox.connected || _.push(this.ConnectMailbox()),
                _.push(this.OpenWebSocketToHost()),
                _.push(this.AwaitInitialSettingsSchema()),
                yield Promise.all(_);
            });
          }
          get MailboxName() {
            if (!this.m_bIsSettingApp) return "settings";
            switch (_()) {
              case _.Overlay:
                return "settings/overlay";
              case _.Desktop:
                return "settings/desktop";
              default:
                return "settings/unknown";
            }
          }
          ConnectMailbox() {
            return (0, _._)(this, void 0, void 0, function* () {
              try {
                yield this.m_mailbox.Init(this.MailboxName),
                  this.m_mailbox.RegisterHandler(
                    "workshop_state_changed",
                    this.OnWorkshopStateChangedMessage,
                  ),
                  this.m_mailbox.RegisterHandler(_, this.OnChangeRouteMessage),
                  this.m_mailbox.RegisterHandler(
                    "app_config_changed",
                    this.OnAppConfigChangedMessage,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "refresh_rate_change",
                    this.OnRefreshRateChangeMessage,
                  );
              } catch (_) {
                console.log("Failed to open settings mailbox:" + _);
              }
            });
          }
          OnWorkshopStateChangedMessage(_) {
            this.workshopStateChangedCanary++;
          }
          OnChangeRouteMessage(_) {
            this.m_bIsSettingApp &&
              this.setRoute(_.page, _.section, _.sectionParams);
          }
          OnAppConfigChangedMessage(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              if (_.deleted_appkeys.length)
                for (let _ = this.apps.length - 1; _ >= 0; _--)
                  _.deleted_appkeys.indexOf(this.apps[_].key) >= 0 &&
                    this.apps.splice(_, 1);
              for (let _ of _.updated_apps) {
                for (let _ = 0; _ < this.apps.length; _++)
                  if (this.apps[_].key == _.key) {
                    !this.apps[_].is_autolaunch &&
                      _.is_autolaunch &&
                      this.SetRestartRequired(),
                      (this.apps[_] = Object.assign(
                        Object.assign(Object.assign({}, this.apps[_]), {
                          current_scene_process: !1,
                        }),
                        _,
                      )),
                      (_ = null);
                    break;
                  }
                _ && (this.apps.push(_), this.probablyOwnedAppkeys.add(_.key));
              }
            });
          }
          OnRefreshRateChangeMessage(_) {
            this.onAppRestartRequired &&
              this.onAppRestartRequired(_.app_supports);
          }
          onHashChanged() {
            if (!this.m_bIsSettingApp) return;
            const _ = window.location.hash;
            0 === _.indexOf("#")
              ? (this.route = _.substring(1).split("/"))
              : (this.route = []);
          }
          get routePage() {
            return this.route.length >= 1 ? this.route[0] : null;
          }
          get routePageSection() {
            return this.route.length >= 2 ? this.route[1] : null;
          }
          get routePageSectionParams() {
            return this.route.slice(2);
          }
          setRoutePage(_) {
            this.setRoute(_);
          }
          setRoutePageSection(_) {
            this.setRoute(this.routePage, _);
          }
          setRoutePageSectionParams(_) {
            this.setRoute(this.routePage, this.routePageSection, _);
          }
          setRoute(_, _, _) {
            if (this.m_bIsSettingApp) {
              (_ = null != _ ? _ : ""), (_ = null != _ ? _ : []);
              const _ = _ ? [_, _, ..._] : [_],
                _ = _.join("/");
              window.location.hash.substring(1) != _ &&
                ((window.location.hash = _), (this.route = _));
            } else
              this.m_mailbox.connected &&
                this.m_mailbox.SendMessage(this.MailboxName, {
                  type: _,
                  page: _,
                  section: _,
                  sectionParams: _,
                });
          }
          SetDashboardFadeSupression(_, _) {
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(_, {
                type: "set_dashboard_fade_suppression",
                suppress_dashboard_fade: _,
                for_id: _,
              });
          }
          SetDashboardForceBoundsVisible(_, _, _) {
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(_, {
                type: "set_dashboard_force_bounds_visible",
                force_bounds_visible: _,
                for_overlay_key: _,
                for_id: _,
              });
          }
          SetRestartRequired() {
            this.onRestartRequired && this.onRestartRequired();
          }
          OnWebSocketOpen(_) {
            (this.connected = !0),
              this.WebSocketSend("settings_open"),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("settings_close");
              }),
              _.GetSettingsInfo().then((_) => {
                this.OnVRSystemInfo(_);
              }),
              _.GetAppList().then((_) => {
                this.OnVRAppList({
                  jsonid: "vr_app_list",
                  apps: _,
                });
              });
          }
          OnWebSocketClose(_) {
            console.log("Lost connection to host..."),
              (this.connected = !1),
              this.OpenWebSocketToHost();
          }
          WebSocketSend(_) {
            null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              this.m_wsWebSocketToServer.send(_);
          }
          OnWebSocketMessage(_) {
            let _ = JSON.parse(_.data);
            switch (_.jsonid) {
              case "vr_settings":
                this.OnVRSettings(_);
                break;
              case "vr_settings_schema":
                this.OnVRSettingsSchema(_);
                break;
              case "vr_audio_devices":
                this.OnVRAudioDevices(_);
                break;
              case "vr_app_list":
                this.OnVRAppList(_);
                break;
              default:
                _.jsonid
                  ? console.log("Received unhandled event: " + _.jsonid)
                  : console.log("Received unknown message: ", _);
            }
          }
          OnVRSettings(_) {
            for (let _ in _.values) {
              const _ = _.values[_];
              if (
                this.settings.get(_) != _ ||
                this.m_mapSettingsLastWriteInfo.has(_)
              ) {
                if (this.settingsSchema) {
                  const _ = this.GetSettingSchema(_);
                  _ && _.requires_restart && this.SetRestartRequired();
                }
                this.SetSettingValueFromServer(_, _);
              }
            }
          }
          SetSettingValueFromServer(_, _) {
            const _ = 1e3 * _.SERVER_SETTING_MERGE_DEFER_DURATION;
            if (this.m_mapSettingsLastWriteInfo.has(_)) {
              let _ = this.m_mapSettingsLastWriteInfo.get(_);
              if (new Date().getTime() - _.nLastUserUpdateTime < _)
                return (
                  window.clearTimeout(_.nPendingServerValueUpdateTimeout),
                  void (_.nPendingServerValueUpdateTimeout = window.setTimeout(
                    () => {
                      this.SetSettingValueFromServer(_, _);
                    },
                    _,
                  ))
                );
              window.clearTimeout(_.nPendingServerValueUpdateTimeout),
                this.m_mapSettingsLastWriteInfo.delete(_);
            }
            this.settings.set(_, _);
          }
          UpdateLastUserWriteTimeForSetting(_) {
            const _ = new Date().getTime();
            this.m_mapSettingsLastWriteInfo.has(_)
              ? (this.m_mapSettingsLastWriteInfo.get(_).nLastUserUpdateTime = _)
              : this.m_mapSettingsLastWriteInfo.set(_, {
                  nLastUserUpdateTime: _,
                  nPendingServerValueUpdateTimeout: 0,
                });
          }
          OnVRSettingsSchema(_) {
            null == this.settingsSchema &&
              (console.log("Got vr settings schema"),
              (this.settingsSchema = _.schema),
              (this.showInternalSettings = _.is_steamvr_main));
          }
          AwaitInitialSettingsSchema() {
            return (0, _._)(this, void 0, void 0, function* () {
              return (0, _._)(() => !!this.settingsSchema);
            });
          }
          OnVRAudioDevices(_) {
            console.log("Got audio devices"), (this.audioDevices = _);
          }
          OnVRSystemInfo(_) {
            this.systemInfo = _;
            const _ = _.refresh_rates.supported_rates.map((_) => Math.round(_));
            if (_.length > 1) {
              this.m_mapRefreshRatesForFrameLimit.clear(),
                (this.m_appFrameLimits = _.slice());
              for (const _ of _)
                for (let _ = 1; _ <= 4; _++) {
                  const _ = Math.round(_ / _);
                  if (_ < 30) break;
                  const _ = this.m_mapRefreshRatesForFrameLimit.get(_);
                  _
                    ? _.push(_)
                    : this.m_mapRefreshRatesForFrameLimit.set(_, [_]);
                  for (let _ = 0; _ < this.m_appFrameLimits.length; _++) {
                    if (this.m_appFrameLimits[_] > _) {
                      this.m_appFrameLimits.splice(_, 0, _);
                      break;
                    }
                    if (this.m_appFrameLimits[_] === _) break;
                  }
                }
            }
          }
          OnVRAppList(_) {
            (this.apps = _.apps),
              _.apps.map((_) => this.probablyOwnedAppkeys.add(_.key));
          }
          SettingNameMatches(_, _) {
            if (_ && _.endsWith("*")) {
              let _ = _.length - 1;
              return _.substr(0, _) == _.substr(0, _);
            }
            return _ == _;
          }
          GetSettingSchema(_) {
            for (let _ of this.settingsSchema)
              if (_.values)
                for (let _ of _.values)
                  if (_ && this.SettingNameMatches(_, _.name)) return _;
            return null;
          }
          get appFrameLimits() {
            return this.m_appFrameLimits;
          }
          GetRefreshRatesForFrameLimit(_) {
            var _;
            return null !== (_ = this.m_mapRefreshRatesForFrameLimit.get(_)) &&
              void 0 !== _
              ? _
              : [_];
          }
          ResetSettingsValue(_) {
            this.SetSettingsValue(_, null);
          }
          ResetSettingsValues(..._) {
            _.forEach(this.ResetSettingsValue);
          }
          SetSettingsValue(_, _) {
            let _ = this.GetSettingSchema(_);
            null != _
              ? (null != _ &&
                  ("int" == _.type
                    ? (_ = parseInt(_))
                    : "float" == _.type
                      ? (_ = parseFloat(_))
                      : "string" == _.type
                        ? (_ = "" + _)
                        : "bool" == _.type && (_ = !!_)),
                _.requires_restart && this.SetRestartRequired(),
                this.SetSettingsStringValueWithoutSchema(_, _))
              : console.log(
                  "Tried to set setting " +
                    _ +
                    " but it's not in the schema! Aborting",
                );
          }
          SetSettingsStringValueWithoutSchema(_, _) {
            if (VRHTML) {
              const _ = _.split("/");
              if (4 != _.length || "" != _[0] || "settings" != _[1])
                throw new Error("bad settings path " + _);
              VRHTML.VRSettings.Set(_[2], _[3], _),
                this.settings.set(_, VRHTML.VRSettings.Get(_[2], _[3]));
            } else
              null != _ && this.settings.set(_, _),
                this.pendingChanges.set(_, _);
            this.UpdateLastUserWriteTimeForSetting(_);
          }
          GetSettingsValue(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_get", {
                    params: {
                      name: _,
                    },
                  })
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    __webpack_require__(null);
                  });
              });
            });
          }
          ResetAppSettings(_) {
            return _()
              .post("/app/resetsettings", {
                app: _,
              })
              .then((_) => this.GetAppSettings(_))
              .catch((_) => {});
          }
          ResetAllAppResolutionScales() {
            return _()
              .post("/app/resetallresolutionscales")
              .then((_) => !0)
              .catch((_) => {});
          }
          SetAppSettings(_, _) {
            let _ = Object.assign(Object.assign({}, _), {
              app: _,
            });
            _().post("/app/setsettings", _);
            for (let _ = 0; _ < this.apps.length; _++)
              if (this.apps[_].key == _.app) {
                !this.apps[_].is_autolaunch &&
                  _.is_autolaunch &&
                  this.SetRestartRequired(),
                  (this.apps[_] = Object.assign(
                    Object.assign({}, this.apps[_]),
                    _,
                  ));
                break;
              }
          }
          GetAppSettings(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              return new Promise(function (_, _) {
                _()
                  .get("/app/getsettings", {
                    params: {
                      app: _,
                    },
                  })
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    __webpack_require__(null);
                  });
              });
            });
          }
          GetAppInfo(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              return new Promise(function (_, _) {
                _()
                  .get("/app/getinfo", {
                    params: {
                      app: _,
                    },
                  })
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    __webpack_require__(null);
                  });
              });
            });
          }
          GetAppName(_) {
            var _;
            return null === (_ = this.apps.find((_) => _.key == _)) ||
              void 0 === _
              ? void 0
              : _.name;
          }
          get showAdvancedSettings() {
            return this.settings.get(_);
          }
          set showAdvancedSettings(_) {
            this.SetSettingsValue(_, _);
          }
          showBindingCallouts(_) {
            let _ = {
              type: "request_binding_callouts",
              app_key: _,
            };
            this.m_mailbox.SendMessage("binding_callouts/main", _);
          }
        }
        (_.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
          (0, _._)([_._], _.prototype, "connected", void 0),
          (0, _._)([_._], _.prototype, "settingsSchema", void 0),
          (0, _._)([_._], _.prototype, "settings", void 0),
          (0, _._)([_._], _.prototype, "systemInfo", void 0),
          (0, _._)([_._], _.prototype, "audioDevices", void 0),
          (0, _._)([_._], _.prototype, "apps", void 0),
          (0, _._)([_._], _.prototype, "probablyOwnedAppkeys", void 0),
          (0, _._)([_._], _.prototype, "showInternalSettings", void 0),
          (0, _._)([_._], _.prototype, "workshopStateChangedCanary", void 0),
          (0, _._)([_._], _.prototype, "pendingChanges", void 0),
          (0, _._)([_._], _.prototype, "route", void 0),
          (0, _._)([_], _.prototype, "OpenWebSocketToHost", null),
          (0, _._)([_], _.prototype, "OnWorkshopStateChangedMessage", null),
          (0, _._)([_], _.prototype, "OnChangeRouteMessage", null),
          (0, _._)([_], _.prototype, "OnAppConfigChangedMessage", null),
          (0, _._)([_], _.prototype, "OnRefreshRateChangeMessage", null),
          (0, _._)([_._.bound], _.prototype, "onHashChanged", null),
          (0, _._)([_._], _.prototype, "routePage", null),
          (0, _._)([_._], _.prototype, "routePageSection", null),
          (0, _._)([_._], _.prototype, "routePageSectionParams", null),
          (0, _._)([_._], _.prototype, "setRoutePage", null),
          (0, _._)([_._], _.prototype, "setRoutePageSection", null),
          (0, _._)([_._], _.prototype, "setRoutePageSectionParams", null),
          (0, _._)([_._], _.prototype, "setRoute", null),
          (0, _._)([_], _.prototype, "SetDashboardFadeSupression", null),
          (0, _._)([_], _.prototype, "SetDashboardForceBoundsVisible", null),
          (0, _._)([_], _.prototype, "SetRestartRequired", null),
          (0, _._)([_], _.prototype, "OnWebSocketOpen", null),
          (0, _._)([_], _.prototype, "OnWebSocketClose", null),
          (0, _._)([_], _.prototype, "WebSocketSend", null),
          (0, _._)([_], _.prototype, "OnWebSocketMessage", null),
          (0, _._)([_._], _.prototype, "OnVRSettings", null),
          (0, _._)([_._], _.prototype, "SetSettingValueFromServer", null),
          (0, _._)([_._], _.prototype, "OnVRSettingsSchema", null),
          (0, _._)([_._.bound], _.prototype, "ResetSettingsValue", null),
          (0, _._)([_._], _.prototype, "ResetSettingsValues", null),
          (0, _._)([_._], _.prototype, "SetSettingsValue", null),
          (0, _._)(
            [_._],
            _.prototype,
            "SetSettingsStringValueWithoutSchema",
            null,
          );
        const _ = new _();
        window.VRSettingsState = _;
        class _ {
          constructor() {
            (this.m_InputState = void 0),
              (this.m_KnownControllerTypes = _._.map()),
              (this.m_mailbox = new _()),
              (this.m_bUpdateInputStateOnControllerTypChange = !1),
              (0, _._)(this);
          }
          Init(_) {
            return (
              this.m_mailbox.Init("input_state"),
              this.m_mailbox.RegisterHandler(
                "controller_type_changed",
                this.OnControllerTypeChanged,
              ),
              this.m_mailbox.RegisterHandler(
                "action_bindings_reloaded",
                this.OnActionBindingsReloaded,
              ),
              null != _ && (this.m_bUpdateInputStateOnControllerTypChange = _),
              this.GetInputState()
            );
          }
          OnActionBindingsReloaded() {
            this.GetInputState();
          }
          OnControllerTypeChanged(_) {
            this.UpdateControllerTypes(_.controller_types),
              this.m_InputState &&
                (this.m_InputState.controller_types = _.controller_types),
              this.m_bUpdateInputStateOnControllerTypChange &&
                this.GetInputState();
          }
          get ConnectedDevices() {
            return null == this.m_InputState
              ? []
              : this.m_InputState.devices.filter(
                  (_) =>
                    "TrackedDeviceClass_Controller" == _.class ||
                    "TrackedDeviceClass_HMD" == _.class ||
                    "TrackedDeviceClass_GenericTracker" == _.class,
                );
          }
          get ControllerTypes() {
            return this.m_InputState.controller_types;
          }
          get ShouldSendSystemButtonToAllApps() {
            return this.m_InputState.send_system_button_to_all_apps;
          }
          get ShowHiddenInputs() {
            return this.m_InputState.show_hidden_inputs;
          }
          get IsSteamAvailable() {
            return !this.m_InputState || this.m_InputState.is_steam_available;
          }
          get BDevMode() {
            return this.m_InputState.dev_mode;
          }
          get IsValid() {
            return null != this.m_InputState;
          }
          get CurrentUserPersonaName() {
            return this.m_InputState.current_user_persona_name
              ? this.m_InputState.current_user_persona_name
              : null;
          }
          GetControllerTypeInfo(_) {
            return this.m_InputState.controller_types.find(
              (_) => _.controller_type == _,
            );
          }
          GetDeviceInfo(_) {
            for (let _ of this.m_InputState.devices)
              if (_.root_path == _ || _.device_path == _) return _;
            return null;
          }
          LocalizeControllerString(_, _) {
            let _ = _("#" + _);
            return _ != "#" + _
              ? _
              : _ &&
                  this.m_InputState &&
                  this.m_InputState.localization.hasOwnProperty(
                    _.resource_root,
                  ) &&
                  this.m_InputState.localization[
                    _.resource_root
                  ].hasOwnProperty(_.toLowerCase())
                ? this.m_InputState.localization[_.resource_root][
                    _.toLowerCase()
                  ]
                : _;
          }
          LocalizeDriverString(_, _) {
            if (
              this.m_InputState &&
              this.m_InputState.localization.hasOwnProperty(_) &&
              this.m_InputState.localization[_].hasOwnProperty(_.toLowerCase())
            )
              return this.m_InputState.localization[_][_.toLowerCase()];
            let _ = _("#" + _);
            return _ != "#" + _ ? _ : _;
          }
          UpdateControllerTypes(_) {
            this.m_KnownControllerTypes.clear();
            for (let _ of _)
              this.m_KnownControllerTypes.set(_.controller_type, _);
          }
          GetInputState() {
            return (0, _._)(this, void 0, void 0, function* () {
              yield new Promise(function (_, _) {
                _()
                  .get("/input/getstate.json")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              }).then((_) => {
                (0, _._)(() => {
                  for (let _ of _.controller_types)
                    _.controller_type = _.controller_type.toLowerCase();
                  for (let _ of _.devices)
                    _.controller_type = _.controller_type.toLowerCase();
                  this.UpdateControllerTypes(_.controller_types),
                    (this.m_InputState = _);
                });
              });
            });
          }
          get KnownControllerTypes() {
            return this.m_KnownControllerTypes;
          }
          FindDeviceClassForControllerType(_) {
            let _ = this.GetControllerTypeInfo(_);
            return null == _ ? void 0 : _.device_class;
          }
          FindRootPathForControllerType(_) {
            for (let _ of this.m_InputState.devices)
              if (_.controller_type == _) return _.root_path;
            return null;
          }
        }
        (0, _._)([_._], _.prototype, "m_InputState", void 0),
          (0, _._)([_._], _.prototype, "m_KnownControllerTypes", void 0),
          (0, _._)([_], _.prototype, "OnActionBindingsReloaded", null),
          (0, _._)([_], _.prototype, "OnControllerTypeChanged", null),
          (0, _._)([_._], _.prototype, "ConnectedDevices", null),
          (0, _._)([_._], _.prototype, "ControllerTypes", null),
          (0, _._)([_._], _.prototype, "ShouldSendSystemButtonToAllApps", null),
          (0, _._)([_._], _.prototype, "ShowHiddenInputs", null),
          (0, _._)([_._], _.prototype, "IsSteamAvailable", null),
          (0, _._)([_._], _.prototype, "BDevMode", null),
          (0, _._)([_._], _.prototype, "IsValid", null),
          (0, _._)([_._], _.prototype, "CurrentUserPersonaName", null),
          (0, _._)([_], _.prototype, "GetControllerTypeInfo", null),
          (0, _._)([_], _.prototype, "LocalizeControllerString", null),
          (0, _._)([_], _.prototype, "LocalizeDriverString", null),
          (0, _._)([_._], _.prototype, "UpdateControllerTypes", null),
          (0, _._)([_._], _.prototype, "GetInputState", null),
          (0, _._)([_._], _.prototype, "KnownControllerTypes", null),
          (0, _._)([_], _.prototype, "FindDeviceClassForControllerType", null);
        const _ = new _();
        window.inputState = _;
        const _ =
          window.addEventListener ||
          (_._ && _._.addEventListener) ||
          (() => {});
        let _,
          _ = [],
          _ = (_, _, _) =>
            _.push({
              error: _,
              cCallsitesToIgnore: _,
              strComponentStack: _,
            });
        const _ = !0;
        class _ extends Error {
          constructor(..._) {
            super(..._), (this.name = "Assertion Failed");
          }
        }
        {
          const _ = console.assert;
          console.assert = (_, _, ..._) => {
            if (!_) {
              const _ = _();
              _(new _(_(_, ..._)), 2, _);
            }
            _.apply(console, [_, _, ..._]);
          };
          const _ = console.error;
          (console.error = (_, ..._) => {
            const _ = _();
            _(new Error(_(_, ..._)), 1, _), _.apply(console, [_, ..._]);
          }),
            (console.clogerror = (_, _, ..._) => {
              const _ = _();
              _(new Error(_(_, ..._)), _ + 1, _), _.apply(console, [_, ..._]);
            }),
            _("error", (_) => {
              _(_.error, 0);
            }),
            _("unhandledrejection", (_) => {
              _(_.reason, 0);
            }),
            (_ = window.setTimeout(() => {
              (_ = []), (_ = () => {});
            }, 3e4));
        }
        const _ = {
            cCallsitesToIgnore: 0,
            bIncludeMessageInIdentifier: !1,
          },
          _ = [
            "chrome-extension://",
            "HTMLDivElement.onreset \\(/market",
            "/.millennium/Dist",
            "Refused unauthorized RPC command",
          ];
        function _() {
          try {
            const _ = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              _ =
                _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            if (
              _ &&
              "object" == typeof _ &&
              "object" == typeof _.ReactDebugCurrentFrame &&
              "function" == typeof _.ReactDebugCurrentFrame.getCurrentStack
            ) {
              const _ = _.ReactDebugCurrentFrame.getCurrentStack();
              if ("string" == typeof _) return _;
            } else if (
              _ &&
              "object" == typeof _ &&
              "function" == typeof _.getCurrentStack
            ) {
              const _ = _.getCurrentStack();
              if ("string" == typeof _) return _;
            }
          } catch (_) {}
        }
        class _ {
          constructor(_ = !0) {
            (this.m_transport = null),
              (this.m_rgErrorQueue = []),
              (this.m_sendTimer = null),
              (this.m_bReportingPaused = !1),
              (this.m_pauseTimer = void 0),
              (this.m_fnGetReportingInterval = _),
              (this.m_bEnabled = !0),
              (this.m_bInitialized = !1),
              _
                ? (_.forEach(
                    ({
                      error: _,
                      cCallsitesToIgnore: _,
                      strComponentStack: _,
                    }) =>
                      this.ReportError(_, {
                        cCallsitesToIgnore: _,
                        strComponentStack: _,
                      }),
                  ),
                  (_ = (_, _, _) =>
                    this.ReportError(_, {
                      cCallsitesToIgnore: _,
                      strComponentStack: _,
                    })))
                : (_ = () => {}),
              (_ = []),
              clearTimeout(_),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 3e4);
          }
          Init(_, _, _, _ = {}) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = _),
              (this.m_strVersion = _),
              (this.m_transport = _),
              _.fnGetReportingInterval &&
                (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
              this.m_bEnabled ||
                (console.error(
                  "Error reporting was initialized after being disabled, possibly dropping errors.",
                ),
                (this.m_bEnabled = !0)),
              this.m_rgErrorQueue.length &&
                (this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = [])),
              (Error.stackTraceLimit = 12);
          }
          ReportError(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              if (!_)
                return (
                  console.warn(
                    "Failed to report error: ReportError() was called without an error to report.",
                  ),
                  null
                );
              try {
                const _ = Object.assign(Object.assign({}, _), _);
                if (!this.m_bEnabled) return null;
                0;
                const _ = yield (function (_, _) {
                  try {
                    return _.stack && _.stack.match(_)
                      ? (function (_, _) {
                          return (0, _._)(this, void 0, void 0, function* () {
                            var _, _;
                            const {
                                cCallsitesToIgnore: _,
                                bIncludeMessageInIdentifier: _,
                              } = _,
                              _ =
                                null !==
                                  (_ =
                                    null === (_ = _.stack) || void 0 === _
                                      ? void 0
                                      : __webpack_require__.split("\n")) &&
                                void 0 !== _
                                  ? _
                                  : [];
                            let _ = _(_.filter((_) => !!_.match(_))[_]);
                            _ && (_ = `${_} ${_.message}`);
                            const _ = _.map((_) => {
                              const _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
                              if (!_) return _;
                              if (5 === _.length) {
                                const [_, _, _, _, _] = _,
                                  _ = parseInt(_),
                                  _ = parseInt(_);
                                if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                              }
                              return _;
                            }).filter((_) => !!_);
                            return {
                              identifier: _,
                              identifierHash: yield _(_),
                              message: _,
                            };
                          });
                        })(_, _)
                      : _.stack && _.stack.match(_)
                        ? (function (_, _) {
                            return (0, _._)(this, void 0, void 0, function* () {
                              var _, _;
                              const {
                                  cCallsitesToIgnore: _,
                                  bIncludeMessageInIdentifier: _,
                                } = _,
                                _ =
                                  null !==
                                    (_ =
                                      null === (_ = _.stack) || void 0 === _
                                        ? void 0
                                        : __webpack_require__.split("\n")) &&
                                  void 0 !== _
                                    ? _
                                    : [];
                              let _ = _(_.filter((_) => !!_.match(_))[_]);
                              _ && (_ = `${_} ${_.message}`);
                              const _ = _.map((_) => {
                                const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!_) return _;
                                if (5 === _.length) {
                                  const [_, _, _, _, _] = _,
                                    _ = parseInt(_),
                                    _ = parseInt(_);
                                  if (!isNaN(_) && !isNaN(_))
                                    return [_, _, _, _];
                                }
                                return _;
                              }).filter((_) => !!_);
                              return {
                                identifier: _,
                                identifierHash: yield _(_),
                                message: [_.message, ..._],
                              };
                            });
                          })(_, _)
                        : _.stack && _.stack.match(_)
                          ? (function (_, _) {
                              return (0, _._)(
                                this,
                                void 0,
                                void 0,
                                function* () {
                                  var _, _;
                                  const {
                                      bIncludeMessageInIdentifier: _,
                                      cCallsitesToIgnore: _,
                                    } = _,
                                    _ =
                                      null !==
                                        (_ =
                                          null === (_ = _.stack) || void 0 === _
                                            ? void 0
                                            : __webpack_require__.split(
                                                "\n",
                                              )) && void 0 !== _
                                        ? _
                                        : [],
                                    _ = _[_],
                                    _ = _.split("/");
                                  let _ = _[_.length - 1];
                                  _.indexOf("@") > -1 &&
                                    (_ = _.split("@")[0] + "@" + _),
                                    _ && (_ = `${_} ${_.message}`);
                                  const _ = _.map((_) => {
                                    const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                                    if (!_) return _;
                                    if (5 === _.length) {
                                      const [_, _, _, _, _] = _,
                                        _ = parseInt(_),
                                        _ = parseInt(_);
                                      if (!isNaN(_) && !isNaN(_))
                                        return [_, _, _, _];
                                    }
                                    return _;
                                  }).filter((_) => !!_);
                                  return {
                                    identifier: _,
                                    identifierHash: yield _(_),
                                    message: [_.message, ..._],
                                  };
                                },
                              );
                            })(_, _)
                          : (_ ||
                              (console.warn(
                                "Error reporter does not know how to parse generated stack:",
                              ),
                              console.warn(_.stack),
                              (_ = !0)),
                            null);
                  } catch (_) {
                    return (
                      console.warn(`Failed to normalize error stack: ${_}`),
                      null
                    );
                  }
                })(_, _);
                return _
                  ? (_.cCallsitesToIgnore &&
                      _.message.splice(1, _.cCallsitesToIgnore),
                    _.strComponentStack &&
                      (_.strComponentStack = _.strComponentStack),
                    this.SendErrorReport(_),
                    _)
                  : null;
              } catch (_) {
                return console.log(`Failed to report error: ${_}`), null;
              }
            });
          }
          PauseReportingForDuration(_) {
            this.PauseReporting(),
              (this.m_pauseTimer = window.setTimeout(
                () => this.ResumeReporting(),
                _,
              ));
          }
          PauseReporting() {
            (this.m_bReportingPaused = !0),
              window.clearTimeout(this.m_pauseTimer);
          }
          ResumeReporting() {
            (this.m_bReportingPaused = !1),
              window.clearTimeout(this.m_pauseTimer),
              this.ScheduleSend();
          }
          BIsBlacklisted(_) {
            for (let _ of _.message) {
              let _ = JSON.stringify(_);
              for (let _ of _) {
                const _ = new RegExp(_);
                if (__webpack_require__.match(_))
                  return console.warn("Report", _, "matched regex", _), !0;
              }
            }
            return !1;
          }
          SendErrorReport(_) {
            this.BIsBlacklisted(_) ||
              (this.m_transport
                ? this.QueueReport(_)
                : this.m_rgErrorQueue.push(_));
          }
          QueueReport(_) {
            this.m_rgErrorQueue.push(_),
              this.m_bReportingPaused || this.ScheduleSend();
          }
          ScheduleSend() {
            this.m_sendTimer ||
              (this.m_sendTimer = window.setTimeout(() => {
                this.SendErrorReports(this.m_rgErrorQueue),
                  (this.m_rgErrorQueue = []),
                  (this.m_sendTimer = null);
              }, this.m_fnGetReportingInterval()));
          }
          SendErrorReports(_) {
            if (!_ || !_.length) return;
            const _ = _.reduce(
                (_, _) => (
                  _[_.identifier]
                    ? _[_.identifier].count++
                    : (_[_.identifier] = {
                        report: _,
                        count: 1,
                      }),
                  _
                ),
                {},
              ),
              _ = Object.keys(_).map((_) => {
                const { report: _, count: _ } = _[_],
                  _ = new _();
                return (
                  _.set_count(_),
                  _.set_identifier(_.identifier + " " + _.identifierHash),
                  _.set_message(JSON.stringify(_.message)),
                  _.strComponentStack &&
                    _.set_context(
                      JSON.stringify({
                        componentStack: _.strComponentStack,
                      }),
                    ),
                  _
                );
              }),
              _ = new _();
            _.set_product(this.m_strProduct),
              _.set_version(this.m_strVersion),
              _.set_errors(_);
            for (const _ of (function () {
              const _ = [];
              if (
                ((null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.HasHMD()) || _.push("no_hmd"),
                null == _ ? void 0 : _.systemInfo)
              ) {
                const _ = -103;
                _.systemInfo.os_type > 0
                  ? _.push("windows")
                  : _.systemInfo.os_type <= _ && _.push("linux");
              }
              (null == _ ? void 0 : _.IsSteamAvailable) || _.push("no_steam");
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetStringProperty(
                      "/user/head",
                      _.ActualTrackingSystemName_String,
                    );
              return _ && _.push(_), _;
            })())
              _.add_tags(_);
            this.m_transport.SendNoResponse(
              "ClientMetrics.ReportClientError#1",
              _.serializeBase64String(),
            );
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return _;
          }
        }
        function _(_, ..._) {
          if ("string" == typeof _ && 0 === _.length) return _;
          return [_, ..._]
            .map((_) => {
              try {
                let _ = String(_);
                return "[object Object]" == _ && (_ = JSON.stringify(_)), _;
              } catch (_) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
        }
        const _ = /^\s*at .*(\S+:\d+|\(native\))/m,
          _ = /(^|@)\S+:\d+/,
          _ = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
        let _,
          _ = !1;
        function _(_) {
          return (function (_) {
            const _ = "https://",
              _ = _.indexOf(_);
            if (-1 === _) return _;
            const _ = _.indexOf("/", _ + _.length);
            return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
          })(
            (function (_) {
              const _ = _.lastIndexOf("?");
              if (-1 === _) return _;
              const _ = _.indexOf(":", _);
              return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
            })(_),
          );
        }
        const _ = (_) => {
          (_ = _), _.InstallErrorReportingStore(_);
        };
        function _(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            try {
              return (yield _(_)).slice(0, 16);
            } catch (_) {
              return "";
            }
          });
        }
        function _() {
          return (
            1e3 *
            ((_ = 1),
            (_ = 5),
            (_ = Math.ceil(_)),
            (_ = Math.floor(_)),
            Math.floor(Math.random() * (_ - _ + 1)) + _)
          );
          var _, _;
        }
        class _ {
          constructor(_) {
            this.m_strWebAPIBaseURL = _;
          }
          CreateWebAPIURL(_) {
            let _ = _.match(/([^\.]+)\.(.+)#(\d+)/);
            return _ && 4 == _.length
              ? `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`
              : null;
          }
          SendNoResponse(_, _) {
            let _ = this.CreateWebAPIURL(_);
            if (!_) return void console.warn("Couldn't find service name " + _);
            const _ = new FormData();
            _.append("input_protobuf_encoded", _),
              fetch(_, {
                method: "POST",
                body: _,
                mode: "no-cors",
              })
                .then((_) => {})
                .catch((_) => {});
          }
        }
        let _;
        function _(_) {
          return _.createElement(
            "div",
            {
              className: "FlexColumn BottomRight HalfWidth",
            },
            _.children,
          );
        }
        function _(_) {
          let _ = "ButtonControl";
          return (
            _.focus && (_ += " Focus"),
            _.createElement(
              "div",
              {
                className: _,
                onClick: _.onClick,
              },
              _.createElement("span", null, _.text),
            )
          );
        }
        function _() {
          return _.createElement(
            "div",
            {
              className: "ControllerBackground",
            },
            _.createElement(
              "div",
              {
                className: "ViveTracker",
              },
              _(!1),
            ),
            _.createElement(
              "div",
              {
                className: "Knuckles",
              },
              _(!1),
            ),
            _.createElement(
              "div",
              {
                className: "ViveWand",
              },
              _(!1),
            ),
            _.createElement(
              "div",
              {
                className: "VRInkPilotEdition",
              },
              _(!1),
            ),
          );
        }
        (0, _._)({
          enforceActions: "never",
        });
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _.init(),
              (this.state = {
                pairingDeviceInfo: null,
              });
          }
          render() {
            let _;
            switch (_.pairingState) {
              case _.Idle:
                _ = null;
                break;
              case _.FetchingInitialDongleList:
                _ = _.createElement(
                  "div",
                  {
                    className: "InitializingPage",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "Title Label",
                    },
                    _("#pairing_initializing_title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "PageContent",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Label",
                      },
                      _("#pairing_initializing_desc"),
                      _.createElement("br", null),
                      _.createElement("br", null),
                      _.createElement(
                        "span",
                        {
                          className: "Highlight",
                        },
                        _("#pairing_initializing_instr"),
                      ),
                    ),
                  ),
                  _.createElement(
                    _,
                    null,
                    _.createElement(_, {
                      onClick: _.Close,
                      text: _("#pairing_button_cancel"),
                    }),
                  ),
                );
                break;
              case _.NoDonglesAvailable:
                _ = _.createElement(
                  "div",
                  null,
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      className: "Title Label",
                    },
                    _("#pairing_nofreedongles_title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "PageContent",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Label",
                      },
                      _("#pairing_nofreedongles_desc"),
                      _.createElement("br", null),
                      _.createElement("br", null),
                      _.createElement("span", {
                        dangerouslySetInnerHTML: {
                          __html: _("#pairing_nofreedongles_instr"),
                        },
                      }),
                    ),
                  ),
                  _.createElement(
                    _,
                    null,
                    _.createElement(_, {
                      onClick: _.Close,
                      text: _("#pairing_button_cancel"),
                    }),
                  ),
                );
                break;
              case _.NoDonglesDetected:
                _ = _.createElement(
                  "div",
                  null,
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      className: "Title Label",
                    },
                    _("#pairing_nodongles_title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "PageContent",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Label",
                      },
                      _("#pairing_nodongles_desc"),
                      _.createElement("br", null),
                      _.createElement("br", null),
                      _.createElement(
                        "span",
                        {
                          className: "Highlight",
                        },
                        _("#pairing_nodongles_instr"),
                      ),
                    ),
                  ),
                  _.createElement("div", {
                    className: "FlexColumn BottomRight HalfWidth",
                  }),
                  _.createElement(
                    _,
                    null,
                    _.createElement(_, {
                      onClick: _.Close,
                      text: _("#pairing_button_cancel"),
                    }),
                  ),
                );
                break;
              case _.PairingFailed:
                _ = _.createElement(
                  "div",
                  null,
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      className: "Title Label",
                    },
                    _("#pairing_start_failed_title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "PageContent",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Label",
                      },
                      _("#pairing_start_failed_desc"),
                    ),
                  ),
                  _.createElement(
                    _,
                    null,
                    _.createElement(_, {
                      onClick: _.Close,
                      text: _("#pairing_button_cancel"),
                    }),
                  ),
                );
                break;
              case _.UpdatingDongleListAfterPairing:
              case _.Success:
              case _.WaitingForDeviceToPair:
              case _.TimedOut:
                _ =
                  null != _.pairingDevice
                    ? _.pairingDevice.render()
                    : _.createElement(_, null);
                break;
              case _.DongleListReady:
                _ = _.createElement(_, null);
                break;
              default:
                _ = _.createElement(
                  "div",
                  null,
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      className: "Title Label",
                    },
                    "Uh oh",
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "PageContent",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "Label",
                      },
                      "Invalid pairing UI state.",
                    ),
                  ),
                  _.createElement(
                    _,
                    null,
                    _.createElement(_, {
                      onClick: _.Close,
                      text: _("#pairing_button_cancel"),
                    }),
                  ),
                );
            }
            return _.createElement(
              "div",
              {
                className: "FullPage",
              },
              _.createElement(
                "div",
                {
                  className: "PairingWindow",
                },
                _,
              ),
            );
          }
        };
        (_ = (0, _._)([_._], _)),
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
            ["lighthouse_web"],
            null == _ ? void 0 : _.GetSteamLanguage(),
          ).then(() => {
            (_ || _(new _()), _).Init(
              "SteamVR",
              CLSTAMP,
              (_ || (_ = new _("https://api.steampowered.com/")), _),
            ),
              (document.title = _("#pairing_window_title")),
              _._(document.getElementById("root")).render(
                _.createElement(_, null),
              );
          });
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
    (() => {
      var _ = {
        677: 0,
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
  var _ = _._(void 0, [851], () => _(437));
  _ = _._(_);
})();
