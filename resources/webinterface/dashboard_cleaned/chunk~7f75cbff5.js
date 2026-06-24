var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [797],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
      _.Component;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
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
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_);
        }
        internalRender() {
          return _.createElement("vsg-line", {
            "target-id": this.props.target_id,
            thickness: this.props.thickness,
            "start-buffer": this.props.start_buffer,
            "end-buffer": this.props.end_buffer,
          });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
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
  },
]);
