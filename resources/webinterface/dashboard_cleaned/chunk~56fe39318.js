var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.product || _._(_._()),
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
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  version: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  errors: {
                    _: 3,
                    _,
                    _: !0,
                    _: !0,
                  },
                  tags: {
                    _: 4,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.identifier || _._(_._()),
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
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  message: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  count: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  context: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (0, _._)(this, arguments, void 0, function* (_, _ = "SHA-256") {
          let _;
          var _;
          "string" == typeof _
            ? ((_ = _), (_ = new TextEncoder().encode(_).buffer))
            : (_ = _);
          const _ = yield window.crypto.subtle.digest(_, _);
          return (
            (_ = _),
            Array.prototype.map
              .call(new Uint8Array(_), (_) => ("00" + _.toString(16)).slice(-2))
              .join("")
          );
          var _;
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        window.addEventListener ||
        (__webpack_require__._ && __webpack_require__._.addEventListener) ||
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
                  ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
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
                                if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
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
                            return (0, _._)(this, void 0, void 0, function* () {
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
                                        : __webpack_require__.split("\n")) &&
                                  void 0 !== _
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
                            });
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
                    console.warn(`Failed to normalize error stack: ${_}`), null
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
              null === _._ || void 0 === _._ ? void 0 : _._.systemInfo)
            ) {
              const _ = -103;
              _._.systemInfo.os_type > 0
                ? _.push("windows")
                : _._.systemInfo.os_type <= _ && _.push("linux");
            }
            (null === _._ || void 0 === _._ ? void 0 : _._.IsSteamAvailable) ||
              _.push("no_steam");
            const _ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    "/user/head",
                    _._.ActualTrackingSystemName_String,
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
      const _ = () => (_ || _(new _()), _),
        _ = (_) => {
          (_ = _), _._.InstallErrorReportingStore(_);
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
        return 1e3 * (0, _._)(1, _._ - 1);
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
      const _ = () => (_ || (_ = new _("https://api.steampowered.com/")), _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = _.observable.map()),
            (this.m_mailbox = new _._()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, _.makeObservable)(this);
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
          let _ = (0, _._)("#" + _);
          return _ != "#" + _
            ? _
            : _ &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  _.resource_root,
                ) &&
                this.m_InputState.localization[_.resource_root].hasOwnProperty(
                  _.toLowerCase(),
                )
              ? this.m_InputState.localization[_.resource_root][_.toLowerCase()]
              : _;
        }
        LocalizeDriverString(_, _) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(_) &&
            this.m_InputState.localization[_].hasOwnProperty(_.toLowerCase())
          )
            return this.m_InputState.localization[_][_.toLowerCase()];
          let _ = (0, _._)("#" + _);
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
              (0, _.runInAction)(() => {
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
      (0, _._)([_.observable], _.prototype, "m_InputState", void 0),
        (0, _._)([_.observable], _.prototype, "m_KnownControllerTypes", void 0),
        (0, _._)([_._], _.prototype, "OnActionBindingsReloaded", null),
        (0, _._)([_._], _.prototype, "OnControllerTypeChanged", null),
        (0, _._)([_.computed], _.prototype, "ConnectedDevices", null),
        (0, _._)([_.computed], _.prototype, "ControllerTypes", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "ShowHiddenInputs", null),
        (0, _._)([_.computed], _.prototype, "IsSteamAvailable", null),
        (0, _._)([_.computed], _.prototype, "BDevMode", null),
        (0, _._)([_.computed], _.prototype, "IsValid", null),
        (0, _._)([_.computed], _.prototype, "CurrentUserPersonaName", null),
        (0, _._)([_._], _.prototype, "GetControllerTypeInfo", null),
        (0, _._)([_._], _.prototype, "LocalizeControllerString", null),
        (0, _._)([_._], _.prototype, "LocalizeDriverString", null),
        (0, _._)([_.action], _.prototype, "UpdateControllerTypes", null),
        (0, _._)([_.action], _.prototype, "GetInputState", null),
        (0, _._)([_.computed], _.prototype, "KnownControllerTypes", null),
        (0, _._)([_._], _.prototype, "FindDeviceClassForControllerType", null);
      const _ = new _();
      window.inputState = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
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
          const { _: _, _: _, _: _, _: _, _: _ } = _[_];
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
          __webpack_require__.nextField() && !__webpack_require__.isEndGroup();
        ) {
          const _ = _[__webpack_require__.getFieldNumber()];
          if (_) {
            const { _: _, _: _, _: _, _: _, _: _, _: _ } = _;
            if (_) {
              const _ = new _();
              __webpack_require__.readMessage(_, _.deserializeBinaryFromReader),
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
    },
  },
]);
