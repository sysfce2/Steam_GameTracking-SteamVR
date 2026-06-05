var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [692],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
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
            ? (_ = (0, _._)(this.props.location, {
                _: 0,
                _: 0,
              }))
            : "number" == typeof this.props.location &&
              (_ = (0, _._)(this.props.location));
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
            if (_ < _._ || _ > _._ + _.width || _ < _._ || _ > _._ + _.height)
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
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _) {
        return {
          _: _._ * _,
          _: _._ * _,
          _: _._ * _,
        };
      }
      function _(_) {
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
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = Object.values(_._).filter((_) => "number" == typeof _);
      function _(_, _) {
        return new Set([..._, ..._]);
      }
      class _ {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return _.s_Instance || (_.s_Instance = new _()), _.s_Instance;
        }
        suppressHaptics(_, _) {
          const _ = new Set(_);
          this.m_mapSuppressedHaptics.has(_)
            ? this.m_mapSuppressedHaptics.set(
                _,
                _(this.m_mapSuppressedHaptics.get(_), _),
              )
            : this.m_mapSuppressedHaptics.set(_, _);
        }
        suppressHapticsExcept(_, _) {
          const _ = new Set(_),
            _ = new Set(_.filter((_) => !__webpack_require__.has(_)));
          this.m_mapSuppressedHaptics.has(_)
            ? this.m_mapSuppressedHaptics.set(
                _,
                _(this.m_mapSuppressedHaptics.get(_), _),
              )
            : this.m_mapSuppressedHaptics.set(_, _);
        }
        unsuppressHaptics(_, _) {
          const _ = new Set(_);
          var _, _;
          void 0 === _
            ? this.m_mapSuppressedHaptics.delete(_)
            : this.m_mapSuppressedHaptics.has(_) ||
              this.m_mapSuppressedHaptics.set(
                _,
                ((_ = this.m_mapSuppressedHaptics.get(_)),
                (_ = _),
                new Set([..._].filter((_) => !_.has(_)))),
              );
        }
        isHapticSuppressed(_) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((_) =>
            _.has(_),
          );
        }
        triggerHaptic(_) {
          (0, _._)() != _._.Overlay ||
            this.isHapticSuppressed(_) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              _,
            );
        }
      }
      _.s_Instance = null;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.DashboardOpen = 0)] = "DashboardOpen"),
          (_[(_.DashboardClose = 1)] = "DashboardClose"),
          (_[(_.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
          (_[(_.ButtonClick = 3)] = "ButtonClick"),
          (_[(_.SurfaceClick = 4)] = "SurfaceClick"),
          (_[(_.VolumePreview = 5)] = "VolumePreview"),
          (_[(_.Grab = 6)] = "Grab"),
          (_[(_.GrabRelease = 7)] = "GrabRelease"),
          (_[(_.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
      })(_ || (_ = {}));
      class _ {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return _.s_Instance || (_.s_Instance = new _()), _.s_Instance;
        }
        preloadSounds() {
          if (!((0, _._)() != _._.Overlay || this.m_mapSoundElems.size > 0))
            for (let _ in _) isNaN(Number(_)) || this.loadSounds(Number(_));
        }
        playSound(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            if ((0, _._)() != _._.Overlay) return;
            if (null == _) return;
            const _ = this.getAudioElems(_);
            if (!_ || 0 == _.length) return;
            const _ = _[Math.floor(Math.random() * _.length)];
            __webpack_require__.pause(), (_.currentTime = 0);
            try {
              yield __webpack_require__.play();
            } catch (_) {
              console.error(
                `Failed to play sound effect "${_[_]}" (${_.src}, networkState=${_.networkState}, readyState=${_.readyState})`,
              );
            }
          });
        }
        loadSounds(_) {
          const _ = _.Sources[_],
            _ = _.source;
          if (!_) return void this.m_mapSoundElems.set(_, []);
          const _ = ("string" == typeof _ ? [_] : _).map((_) => {
            var _, _;
            let _ = document.createElement("audio");
            return (
              (_.src = `${_}?t=${new Date().getTime()}`),
              (_.preload = "auto"),
              (_.volume = null !== (_ = _.volume) && void 0 !== _ ? _ : 1),
              (null === (_ = _.bRespectsGlobalVolume) || void 0 === _ || _) &&
                (_.volume *= 1),
              _
            );
          });
          this.m_mapSoundElems.set(_, _);
        }
        getAudioElems(_) {
          return (
            this.m_mapSoundElems.has(_) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
              ),
              this.loadSounds(_)),
            this.m_mapSoundElems.get(_)
          );
        }
      }
      (_.Sources = {
        [_.DashboardOpen]: {
          source: "",
        },
        [_.DashboardClose]: {
          source: "",
        },
        [_.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [_.ButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [_.SurfaceClick]: {
          source: "",
        },
        [_.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [_.Grab]: {
          source: "",
        },
        [_.GrabRelease]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [_.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (_.s_Instance = null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return "string" == typeof _ || (Array.isArray(_) && _[1]);
      }
      function _(..._) {
        return _.filter(_)
          .map((_) => ("string" == typeof _ ? _ : _[0]))
          .join(" ");
      }
      class _ {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = void 0),
            (0, _.makeObservable)(this);
        }
        ref(_) {
          this.m_elem && this.cleanup(),
            (this.m_elem = _),
            this.updateScrollableParents();
        }
        get isScrolling() {
          return this.m_bScrolling;
        }
        updateScrollableParents() {
          for (let _ of this.m_rScrollableParents)
            _.removeEventListener("scroll", this.onParentScroll);
          this.m_elem
            ? (this.m_rScrollableParents = (function (_) {
                let _ = [];
                if (!_) return _;
                let _ = _.parentElement;
                for (; _; ) {
                  const _ = _.scrollWidth > _.clientWidth,
                    _ = _.scrollHeight > _.clientHeight;
                  (_ || _) && _.push(_), (_ = _.parentElement);
                }
                return _;
              })(this.m_elem))
            : (this.m_rScrollableParents = []);
          for (let _ of this.m_rScrollableParents)
            _.addEventListener("scroll", this.onParentScroll);
        }
        cleanup() {
          for (let _ of this.m_rScrollableParents)
            _.removeEventListener("scroll", this.onParentScroll);
          (this.m_rScrollableParents = []),
            (this.m_elem = null),
            this.clearScrollStopTimeout();
        }
        onParentScroll() {
          var _;
          this.clearScrollStopTimeout(),
            (this.m_bScrolling = !0),
            (this.m_scrollStopTimeoutHandle = window.setTimeout(
              this.onScrollStopTimeout,
              50,
            )),
            null === (_ = this.onScroll) || void 0 === _ || _.call(this);
        }
        clearScrollStopTimeout() {
          window.clearTimeout(this.m_scrollStopTimeoutHandle),
            (this.m_scrollStopTimeoutHandle = void 0);
        }
        onScrollStopTimeout() {
          var _;
          this.m_bScrolling &&
            (null === (_ = this.onScrollStop) || void 0 === _ || _.call(this)),
            (this.m_bScrolling = !1);
        }
      }
      (0, _._)([_.observable], _.prototype, "m_bScrolling", void 0),
        (0, _._)([_._], _.prototype, "ref", null),
        (0, _._)([_.computed], _.prototype, "isScrolling", null),
        (0, _._)([_._], _.prototype, "onParentScroll", null),
        (0, _._)([_._], _.prototype, "onScrollStopTimeout", null);
    },
  },
]);
