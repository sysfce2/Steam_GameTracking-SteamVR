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
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        !(function (_) {
          (_[(_.Parent = 0)] = "Parent"), (_[(_.World = 1)] = "World");
        })(_ || (_ = {}));
        class _ extends _._ {
          constructor(_) {
            super(_);
          }
          internalRender() {
            var _;
            const _ = null === (_ = this.props.enabled) || void 0 === _ || _,
              _ = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math._) / 180
                : null,
              _ = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math._) / 180
                : null;
            return _.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": _,
                "rotation-stop-angle-threshold": _,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": _,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": _,
                "rotation-max-angular-velocity": _,
                "translation-start-distance-threshold":
                  this.props.translation_start_distance_threshold,
                "translation-stop-distance-threshold":
                  this.props.translation_stop_distance_threshold,
                "translation-ease-in-time": this.props.translation_ease_in_time,
                "translation-ease-in-power":
                  this.props.translation_ease_in_power,
                "translation-ease-out-distance-threshold":
                  this.props.translation_ease_out_distance_threshold,
                "translation-ease-out-power":
                  this.props.translation_ease_out_power,
                "translation-velocity": this.props.translation_velocity,
                enabled: _,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-parent": this.props.translation_parent,
                "rotation-translation-change-together":
                  this.props.rotation_translation_change_together,
              },
              this.props.children,
            );
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        (0, _.configure)({
          enforceActions: "never",
        });
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_KeyboardVisibilityCallbackHandle = null),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bDockedInDashboard: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: _._.Normal,
                activeKey: {
                  nCol: -1,
                  nRow: -1,
                },
                presentation: "overlay",
                shiftPlaneName: "normal",
                layout: null,
                langLayout: null,
                text: "",
                textPos: 0,
                suggestions: [],
              }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
              _._.Init(!1);
          }
          componentDidMount() {
            var _;
            this.m_KeyboardVisibilityCallbackHandle =
              null ===
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
              void 0 === _
                ? void 0
                : _.call(VRHTML, this.onKeyboardInfoChanged);
          }
          componentWillUnmount() {
            var _;
            null === (_ = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === _ ||
              _.unregister();
          }
          onKeyboardInfoChanged(_) {
            if (_.visible) {
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardBuffer();
              this.setState({
                bVisible: !0,
                bDockedInDashboard: _.dockedInDashboard,
                inputMode: _.inputMode,
                bMinimalMode: !!(_._.Minimal & _.keyboardFlags),
                bMultilinePreview: _.lineMode == _._.MultipleLines,
                text: _,
                textPos: _.length,
              }),
                this.updateSuggestions(_),
                this.getLayout("base"),
                this.getLayout(this.language());
            } else
              this.setState({
                bVisible: !1,
              });
          }
          startClose() {
            this.setState({
              bVisible: !1,
            }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var _;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (_ =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== _
                        ? _
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == _._.Password;
          }
          getLayoutFile(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              let _ = `/dashboard/keyboards/layout_${_}_${this.state.presentation}.json`;
              return _()
                .get(_)
                .then((_) => (200 != _.status ? null : _.data))
                .catch((_) =>
                  "english" != _ ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(_) {
            this.m_languageToLayout.has(_)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(_).then((_) => {
                  _ &&
                    (this.m_languageToLayout.set(_, _), this.onLayoutLoaded());
                });
          }
          onLayoutLoaded() {
            this.m_languageToLayout.has("base") &&
              this.m_languageToLayout.has(this.language()) &&
              ((this.m_keyElements = null),
              this.setState({
                layout: this.m_languageToLayout.get("base"),
                langLayout: this.m_languageToLayout.get(this.language()),
                shiftPlaneName: "normal",
              }),
              this.toggleShiftPlaneWith("normal"));
          }
          initializeKeyHandlers() {
            (this.m_keyTypeToHandler = new Map()),
              this.m_keyTypeToHandler.set("key", this.handleKey),
              this.m_keyTypeToHandler.set("del", this.handleDel),
              this.m_keyTypeToHandler.set("shift", this.handleShift),
              this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
              this.m_keyTypeToHandler.set("done", this.handleDone),
              this.m_keyTypeToHandler.set("cancel", this.handleCancel),
              this.m_keyTypeToHandler.set("clear", this.handleClear),
              this.m_keyTypeToHandler.set("return", this.handleReturn);
          }
          findShiftPlane(_) {
            if (!this.state.langLayout) return null;
            for (let _ of this.state.langLayout.shiftPlanes)
              if (_.name == _) return _;
            return null;
          }
          toggleShiftPlaneWith(_) {
            (this.m_curShiftPlane && this.m_curShiftPlane.name != _) ||
              (_ = "normal");
            let _ = this.findShiftPlane(_);
            _ &&
              ((this.m_curShiftPlane = _),
              this.setState({
                shiftPlaneName: _,
              }));
          }
          onKey(_, _) {
            if (
              _ < this.state.layout.geometry.length &&
              _ < this.state.layout.geometry[_].keys.length
            ) {
              let _ = this.state.layout.geometry[_].keys[_];
              if ("string" == typeof _);
              else if ("key" != _.type)
                return void this.m_keyTypeToHandler.get(_.type)(_);
            }
            if (
              this.m_curShiftPlane &&
              _ < this.m_curShiftPlane.rows.length &&
              _ < this.m_curShiftPlane.rows[_].length
            ) {
              let _ = this.m_curShiftPlane.rows[_][_];
              "string" == typeof _
                ? this.m_keyTypeToHandler.get("key")(_)
                : this.m_keyTypeToHandler.has(_.type) &&
                  this.m_keyTypeToHandler.get(_.type)(_);
            }
          }
          handleKey(_) {
            let _;
            if (
              ((_ = "string" == typeof _ ? _ : _.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(_, 1);
            else {
              let _ =
                  this.state.text.substr(0, this.state.textPos) +
                  _ +
                  this.state.text.substr(this.state.textPos),
                _ = this.state.textPos + _.length;
              this.UpdateText(_, _);
            }
          }
          handleReturn() {
            this.handleKey("\n");
          }
          handleDel() {
            if (this.state.bMinimalMode) this.handleKey("\b");
            else {
              let _ = this.state.text.substr(0, this.state.textPos),
                _ = this.state.text.substr(this.state.textPos);
              if (_.length > 0) {
                let _ = _.substr(0, _.length - 1) + _,
                  _ = this.state.textPos - 1;
                this.UpdateText(_, _);
              }
            }
          }
          handleShift() {
            this.toggleShiftPlaneWith("shift");
          }
          handleSymbols() {
            this.toggleShiftPlaneWith("symbols");
          }
          UpdateText(_, _) {
            this.setState({
              text: _,
              textPos: _,
            }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(_),
              this.updateSuggestions(this.getSuggestionBase(_, _));
          }
          handleDone(_) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
              this.startClose();
          }
          handleCancel(_) {
            this.startClose();
          }
          handleClear(_) {
            this.setState({
              text: "",
              textPos: 0,
            }),
              this.updateSuggestions("");
          }
          isWhite(_) {
            return " " == _;
          }
          findWordLimits(_, _) {
            if (
              _ < _.length &&
              this.isWhite(_[_]) &&
              (0 == _ || (_ > 1 && this.isWhite(_[_ - 1])))
            )
              return null;
            let _ = _;
            for (; _ > 0 && !this.isWhite(_[_]); ) _ -= 1;
            _ < _.length && this.isWhite(_[_]) && (_ += 1);
            let _ = _;
            for (; _ < _.length && !this.isWhite(_[_]); ) _ += 1;
            return [_, _];
          }
          getSuggestionBase(_, _) {
            let _ = this.findWordLimits(_, _);
            return _ ? _.substr(_[0], _[1] - _[0]) : null;
          }
          updateSuggestions(_) {
            var _;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({
                  suggestions: [],
                });
              else if (
                (null == _ &&
                  (_ = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != _ && _.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let _ =
                  null !==
                    (_ =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            _,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== _
                    ? _
                    : [];
                this.setState({
                  suggestions: _,
                });
              } else
                this.setState({
                  suggestions: [],
                });
          }
          handleSuggestionClick(_) {
            if (_ >= this.state.suggestions.length) return;
            let _ = this.state.suggestions[_],
              _ = this.findWordLimits(this.state.text, this.state.textPos);
            if (_) {
              let _ = this.state.text.substr(0, _[0]);
              _ += " ";
              let _ = _ + _ + this.state.text.substr(_[1]),
                _ = _.length + _.length;
              this.UpdateText(_, _);
            }
          }
          makeKeyFaceElement(_, _) {
            let _ = "VRKBKeyFace";
            if ((_ && (_ += ` VRKBShift_${_.name}`), "string" == typeof _))
              return _.createElement(
                "span",
                {
                  key: this.genid(),
                  className: _,
                },
                _,
              );
            {
              let _ = _.text;
              _.value ? _.value : _.text;
              switch (
                (_.img &&
                  (_ = _.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${_.img}.png`,
                  })),
                "string" == typeof _ && _.startsWith("#") && (_ = (0, _._)(_)),
                _.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: _,
                    },
                    _,
                  );
                case "done":
                  return _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: _ + " VRKBDone",
                    },
                    _,
                  );
                case "hole":
                  return _.createElement("span", {
                    key: this.genid(),
                    className: _,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      _.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(_, _) {
            let _ = [];
            if (
              _ < this.state.layout.geometry.length &&
              _ < this.state.layout.geometry[_].keys.length
            ) {
              "key" != this.state.layout.geometry[_].keys[_].type &&
                __webpack_require__.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[_].keys[_],
                    null,
                  ),
                );
            }
            if (0 == _.length)
              for (let _ of this.state.langLayout.shiftPlanes)
                _ < _.rows.length &&
                  _ < _.rows[_].length &&
                  __webpack_require__.push(
                    this.makeKeyFaceElement(_.rows[_][_], _),
                  );
            return _;
          }
          getKeyElements() {
            let _ = [];
            for (let _ = 0; _ < this.state.layout.geometry.length; ++_) {
              let _ = this.state.layout.geometry[_],
                _ = [];
              for (let _ = 0; _ < _.keys.length; ++_) {
                let _ = _.keys[_],
                  _ = {};
                _.flexGrow && (_.flexGrow = _.flexGrow),
                  _.flexShrink && (_.flexShrink = _.flexShrink),
                  this.state.shiftPlaneName == _.type &&
                    (_.background = "#000"),
                  this.state.activeKey.nCol == _ &&
                    this.state.activeKey.nRow == _ &&
                    (_.background = "#000");
                let _ = this.getKeyFaces(_, _),
                  _ = () => {
                    "done" == _.type && this.onKey(_, _);
                  },
                  _ = () => {
                    "done" != _.type &&
                      (this.setState({
                        activeKey: {
                          nRow: _,
                          nCol: _,
                        },
                      }),
                      this.onKey(_, _));
                  },
                  _ = () => {
                    "done" != _.type &&
                      this.setState({
                        activeKey: {
                          nRow: -1,
                          nCol: -1,
                        },
                      });
                  };
                _.push(
                  _.createElement(
                    _._,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: _,
                      onMouseDown: _,
                      onMouseUp: _,
                      style: _,
                    },
                    _,
                  ),
                );
              }
              let _ = {};
              _.height && (_.height = _.height),
                _.push(
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBRow",
                      style: _,
                    },
                    _,
                  ),
                );
            }
            return _.createElement(
              "div",
              {
                className: "VRKBRows",
              },
              _,
            );
          }
          makeCursor() {
            return _.createElement(
              "span",
              {
                key: this.genid(),
                className: "VRKBPreviewTextCursor",
              },
              "|",
            );
          }
          makePreviewText() {
            let _ = this.state.text.substr(0, this.state.textPos),
              _ = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((_ = _.kPasswordChar.repeat(_.length)),
                (_ = _.kPasswordChar.repeat(_.length)),
                [
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _.kPasswordChar.repeat(_.length),
                  ),
                  this.makeCursor(),
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _.kPasswordChar.repeat(_.length),
                  ),
                ])
              : [
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _,
                  ),
                  this.makeCursor(),
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _,
                  ),
                ];
          }
          makeSuggestionElements() {
            let _ = [];
            if (this.state.suggestions)
              for (let _ = 0; _ < this.state.suggestions.length; ++_)
                _.push(
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(_),
                    },
                    this.state.suggestions[_],
                  ),
                );
            for (
              let _ = _.length;
              _ < this.state.layout.previewSuggestionCount;
              ++_
            )
              _.push(
                _.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return _;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : _.createElement(
                  "div",
                  {
                    className: "VRKBPreviewWrapper",
                  },
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewText",
                    },
                    this.makePreviewText(),
                  ),
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestionWrapper",
                    },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return _.createElement(
              _._,
              {
                parent_path: "/user/head",
              },
              _.createElement(
                _._,
                null,
                _.createElement(
                  _._,
                  {
                    translation: this.state.layout.translation,
                  },
                  _.createElement(
                    _._,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      make_overlays_interactive_if_visible: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    _.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "VRKBBackground",
                        },
                        this.renderFlatPreview(),
                        this.m_keyElements,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          render_overlay() {
            return _.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              _.createElement(
                "div",
                {
                  className: "VRKBBackground",
                },
                this.renderFlatPreview(),
                this.m_keyElements,
              ),
            );
          }
          render() {
            if (!this.state.layout)
              return console.log("xxx render layout==null, bailing"), null;
            if (!this.state.bVisible)
              return console.log("xxx render !visible, so bailing"), null;
            switch (
              ((this.m_keyElements = this.getKeyElements()),
              this.state.presentation)
            ) {
              case "flat":
                return this.render_flat();
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation,
                  ),
                  null
                );
            }
          }
        }
        (_.kPasswordChar = "●"),
          (0, _._)([_._], _.prototype, "onKeyboardInfoChanged", null),
          (0, _._)([_._], _.prototype, "handleKey", null),
          (0, _._)([_._], _.prototype, "handleReturn", null),
          (0, _._)([_._], _.prototype, "handleDel", null),
          (0, _._)([_._], _.prototype, "handleShift", null),
          (0, _._)([_._], _.prototype, "handleSymbols", null),
          (0, _._)([_._], _.prototype, "handleDone", null),
          (0, _._)([_._], _.prototype, "handleCancel", null),
          (0, _._)([_._], _.prototype, "handleClear", null),
          (0, _._)([_._], _.prototype, "handleSuggestionClick", null);
        const _ =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            _._.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, _._)(["systemui"], _)
            .then(() => _._.Init())
            .then(() => _._.Init())
            .then(() => {
              (0, _._)().Init("SteamVR", CLSTAMP, (0, _._)()),
                _._(document.getElementById("root")).render(
                  _.createElement(_, {
                    language: _,
                  }),
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
        884: 0,
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
    [967, 991, 264, 305, 527, 170, 452, 797, 500, 554, 458, 204],
    () => _(7558),
  );
  _ = _._(_);
})();
