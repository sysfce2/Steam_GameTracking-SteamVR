var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [838],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new (__webpack_require__("chunkid")._)("EmbeddedPixels");
      var _;
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
          (_._.s_bPanelsAreDirty = !0),
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
          let _ = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
          for (let _ = 0; _ < _; _++)
            this.m_rAvailableEmbeddedIndicesQueue.push(_);
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
              (0, _._)(
                this.props.owning_overlay_key,
                this.m_DomRef.current,
                this.props.web_secret,
              );
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
            (_._.s_bPanelsAreDirty = !0)),
            _._.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((_) => _.updateLayoutValues()),
              (0, _._)(),
              (_._.s_bPanelsAreDirty = !1),
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
                  for (let _ = 0; _ < 3; _++) this.setPixel(_ + 1, 0, 0, 0, 0);
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == _.Canvas) {
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
        (0, _._)([_._], _.prototype, "toggleDebugPointer", null),
        (0, _._)([_._], _.prototype, "onMouseMove", null),
        (0, _._)([_._], _.prototype, "forceLayoutUpdate", null),
        (0, _._)([_._], _.prototype, "onMutation", null);
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
      __webpack_require__._(module_exports, {
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
            (_[(_.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
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
      __webpack_require__._(module_exports, {
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
        (0, _._)([_.computed], _.prototype, "isExternalDashboardOverlay", null),
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
  },
]);
