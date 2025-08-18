var CLSTAMP = "9981652";
(() => {
  "use strict";
  var e,
    t = {
      8195: (e, t, r) => {
        var s,
          n = r(1635),
          a = r(6540),
          o = r(5338);
        function i(e, t, r) {
          return {
            get() {
              let e = r.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class l extends a.Component {
          constructor(e) {
            super(e);
          }
          simpleValueToString(e) {
            if ("object" == typeof e) {
              let t = e,
                r = "";
              for (let e of t) "" != r && (r += ", "), (r += e.toString());
              return "[ " + r + " ]";
            }
            return e;
          }
          renderValue(e) {
            switch (e.type) {
              case "k_unStringPropertyTag":
                let t = e.value;
                return a.createElement(
                  "div",
                  { className: "PropertyValueString" },
                  '"',
                  t.slice(0, 80),
                  t.length > 80 && "...",
                  '"',
                );
              case "k_unFloatPropertyTag":
              case "k_unInt32PropertyTag":
              case "k_unUint64PropertyTag":
                return a.createElement(
                  "div",
                  { className: "PropertyValueNumber" },
                  this.simpleValueToString(e.value),
                );
              case "k_unBoolPropertyTag":
                return a.createElement(
                  "div",
                  { className: "PropertyValueNumber" },
                  e.value ? "TRUE" : "FALSE",
                );
              default:
                return a.createElement(
                  "div",
                  { className: "PropertyValueUnsupported" },
                  "...",
                );
            }
          }
          renderPath(e, t) {
            return a.createElement(
              "div",
              { className: "PropertyEntry", key: t + e.path },
              a.createElement("div", { className: "PropertyPathName" }, e.path),
              this.renderValue(e),
            );
          }
          renderEnum(e, t) {
            return a.createElement(
              "div",
              { className: "PropertyEntry", key: t + e.name },
              a.createElement(
                "div",
                { className: "PropertyEnumName" },
                e.name.slice(5),
              ),
              this.renderValue(e),
            );
          }
          renderContainer(e) {
            let t = e.type;
            switch (e.type) {
              case "tracked_device":
                t = "Tracked Device " + e.tracked_device_index;
                break;
              case "tracked_device_override":
                t = "Tracked Device Override " + e.tracked_device_index;
                break;
              case "driver":
                t = "Driver " + e.driver_name;
                break;
              case "resource_map":
                t = "Resource Map " + e.resource_map_key;
                break;
              case "path_alias_info":
                t = "Path Aliases ";
                break;
              case "root_path":
                t = "Root Path ";
                break;
              case "client_connection":
                t = "Client " + e.app_key + " - " + e.exe_name;
                break;
              case "iobuffer":
                t = "IO Buffer ";
            }
            let r = [
              a.createElement(
                "div",
                { className: "SectionHeader", key: "header" },
                t,
                a.createElement(
                  "span",
                  { className: "ContainerHandle" },
                  "(",
                  e.handle,
                  ")",
                ),
              ),
            ];
            if (e.contents && e.contents.entries)
              for (let t of e.contents.entries)
                t.hasOwnProperty("path")
                  ? r.push(this.renderPath(t, e.handle))
                  : r.push(this.renderEnum(t, e.handle));
            return r;
          }
          render() {
            let e = [];
            for (let t of this.props.rProperties)
              e = e.concat(this.renderContainer(t));
            return a.createElement("div", { className: "Section" }, e);
          }
        }
        class c extends a.Component {
          constructor(e) {
            super(e),
              (this.m_domRunSelection = null),
              (this.m_bScrollOnNextUpdate = !1);
            let t = null,
              r = null;
            if (this.props.rLogs && this.props.rLogs.length > 0) {
              let e = this.props.rLogs[0];
              (t = e.sName),
                e.rRuns &&
                  e.rRuns.length > 0 &&
                  (r = e.rRuns[e.rRuns.length - 1].sDate);
            }
            (this.state = { sCurrentLog: t, sCurrentRunDate: r }),
              (this.m_domRunSelection = a.createRef());
          }
          findLog(e) {
            for (let t of this.props.rLogs) if (t.sName == e) return t;
            return null;
          }
          onClickLog(e) {
            let t = this.findLog(e);
            t && t.rRuns && t.rRuns.length > 0
              ? (this.setState({
                  sCurrentLog: e,
                  sCurrentRunDate: t.rRuns[t.rRuns.length - 1].sDate,
                }),
                (this.m_bScrollOnNextUpdate = !0))
              : this.setState({ sCurrentLog: e, sCurrentRunDate: null });
          }
          onClickLogRun(e) {
            this.setState({ sCurrentRunDate: e });
          }
          scrollSelectionToView() {
            this.m_domRunSelection.current &&
              this.m_domRunSelection.current.scrollIntoView();
          }
          componentDidMount() {
            this.scrollSelectionToView();
          }
          componentDidUpdate() {
            this.m_bScrollOnNextUpdate &&
              ((this.m_bScrollOnNextUpdate = !1), this.scrollSelectionToView());
          }
          render() {
            let e = null,
              t = null,
              r = [];
            for (let t of this.props.rLogs) {
              let s = "LogFileName";
              t.sName == this.state.sCurrentLog &&
                ((s += " Selected"), (e = t)),
                r.push(
                  a.createElement(
                    "div",
                    {
                      className: s,
                      onClick: () => {
                        this.onClickLog(t.sName);
                      },
                    },
                    t.sName,
                  ),
                );
            }
            let s = [];
            if (e)
              for (let r of e.rRuns) {
                let e = "LogRunDate",
                  n = null;
                r.sDate == this.state.sCurrentRunDate &&
                  ((e += " Selected"), (t = r), (n = this.m_domRunSelection)),
                  s.push(
                    a.createElement(
                      "div",
                      {
                        className: e,
                        ref: n,
                        onClick: () => {
                          this.onClickLogRun(r.sDate);
                        },
                      },
                      r.sDate,
                    ),
                  );
              }
            return a.createElement(
              "div",
              { className: "FlexColumn" },
              a.createElement(
                "div",
                { className: "FlexRow" },
                a.createElement("div", { className: "LogFileList" }, r),
                a.createElement("div", { className: "LogRunList" }, s),
              ),
              a.createElement(
                "div",
                { className: "LogContent" },
                t ? t.rLines.join("\n") : null,
              ),
            );
          }
        }
        class h extends a.Component {
          constructor(e) {
            super(e), (this.state = { bShowDetails: !1 });
          }
          onToggleDetails() {
            this.setState({ bShowDetails: !this.state.bShowDetails });
          }
          render() {
            let e = [];
            for (let t in this.props.oDetails)
              e.push(
                a.createElement(
                  "div",
                  { className: "SectionRow", key: t },
                  a.createElement("div", { className: "FieldName" }, t),
                  a.createElement(
                    "div",
                    { className: "FieldValue" },
                    this.props.oDetails[t],
                  ),
                ),
              );
            this.state.bShowDetails &&
              e.push(
                a.createElement(
                  "div",
                  { className: "SectionAdditionalDetails" },
                  " ",
                  this.props.rAdditionalDetails.join("\n"),
                ),
              );
            let t = this.state.bShowDetails ? "Hide Details" : "Show Details";
            return a.createElement(
              "div",
              { className: "Section" },
              this.props.sHeader &&
                a.createElement(
                  "div",
                  { className: "SectionHeader" },
                  this.props.sHeader,
                  this.props.rAdditionalDetails &&
                    a.createElement(
                      "span",
                      {
                        className: "ShowHideLink",
                        onClick: this.onToggleDetails,
                      },
                      t,
                    ),
                ),
              e,
            );
          }
        }
        (0, n.Cg)([i], h.prototype, "onToggleDetails", null);
        class p extends a.Component {
          constructor(e) {
            super(e);
          }
          renderObject(e) {
            let t = [];
            for (let r in e) {
              let s = e[r];
              t.push(
                a.createElement(
                  "div",
                  { className: "JsonObjectProperty", key: r },
                  this.renderNode(r),
                  " : ",
                  this.renderNode(s),
                ),
              );
            }
            return a.createElement(
              "div",
              { className: "JsonObject" },
              "{",
              t,
              " ",
              "}",
            );
          }
          renderNode(e) {
            switch (typeof e) {
              case "number":
                return a.createElement("span", { className: "JsonNumber" }, e);
              case "string":
                return a.createElement(
                  "span",
                  { className: "JsonString" },
                  '"',
                  e,
                  '"',
                );
              case "boolean":
                return a.createElement(
                  "span",
                  { className: "JsonNumber" },
                  e ? "true" : "false",
                );
              case "object":
                return this.renderObject(e);
              default:
                return a.createElement(
                  "div",
                  { className: "JsonUnknown" },
                  "Unknown Json Value: ",
                  e,
                );
            }
          }
          render() {
            return a.createElement(
              "div",
              { className: "Section" },
              a.createElement(
                "div",
                { className: "SectionHeader" },
                this.props.sHeader,
              ),
              this.renderNode(this.props.oContent),
            );
          }
        }
        !(function (e) {
          (e[(e.Main = 0)] = "Main"),
            (e[(e.Devices = 1)] = "Devices"),
            (e[(e.USB = 2)] = "USB"),
            (e[(e.Configuration = 3)] = "Configuration"),
            (e[(e.Chaperone = 4)] = "Chaperone"),
            (e[(e.Lighthouse = 5)] = "Lighthouse"),
            (e[(e.Properties = 6)] = "Properties"),
            (e[(e.Logs = 7)] = "Logs");
        })(s || (s = {}));
        class u extends a.Component {
          constructor(e) {
            super(e),
              (this.fileReader = null),
              (this.state = { eViewerTab: s.Main });
          }
          onClickTab(e) {
            this.setState({ eViewerTab: e });
          }
          renderTabButton(e) {
            let t = "TabButton";
            return (
              this.state.eViewerTab == e && (t += " TabSelected"),
              a.createElement(
                "div",
                {
                  className: t,
                  onClick: () => {
                    this.onClickTab(e);
                  },
                },
                s[e],
              )
            );
          }
          renderTabButtons() {
            return a.createElement(
              "div",
              { className: "TabButtonRow" },
              this.renderTabButton(s.Main),
              this.renderTabButton(s.Devices),
              this.renderTabButton(s.USB),
              this.renderTabButton(s.Configuration),
              (this.props.report.oChaperone ||
                this.props.report.oChaperoneFile) &&
                this.renderTabButton(s.Chaperone),
              this.props.report.oLighthouseDB &&
                this.renderTabButton(s.Lighthouse),
              this.props.report.oProperties &&
                this.renderTabButton(s.Properties),
              this.renderTabButton(s.Logs),
            );
          }
          renderMainTab() {
            return [
              a.createElement(
                "div",
                { className: "Label", key: "date" },
                "System report created on ",
                new Date(this.props.report.reportCreateDate).toString(),
              ),
              a.createElement(h, {
                key: "general",
                sHeader: "General",
                oDetails: this.props.report.oReport,
              }),
              a.createElement(h, {
                key: "displays",
                sHeader: "Displays",
                oDetails: this.props.report.oDisplays,
              }),
            ];
          }
          renderDevicesTab() {
            let e = [];
            for (let t of this.props.report.rDevices)
              e.push(
                a.createElement(h, {
                  sHeader: t.sName,
                  oDetails: t.oDetails,
                  rAdditionalDetails: t.rAdditionalLines,
                }),
              );
            return e;
          }
          renderUsbTab() {
            return [
              a.createElement(
                "div",
                { className: "SectionAdditionalDetails", key: "1" },
                this.props.report.rUSB.join("\n"),
              ),
            ];
          }
          renderConfiguration() {
            return [
              a.createElement(h, {
                key: "config",
                sHeader: "Configuration",
                oDetails: this.props.report.oConfiguration,
              }),
              a.createElement(p, {
                key: "configfile",
                sHeader: "steamvr.vrsettings",
                oContent: this.props.report.oConfigFile,
              }),
            ];
          }
          renderChaperone() {
            return [
              a.createElement(h, {
                key: "config",
                sHeader: "Chaperone",
                oDetails: this.props.report.oChaperone,
              }),
              a.createElement(p, {
                key: "configfile",
                sHeader: "chaperone_info.vrchap",
                oContent: this.props.report.oChaperoneFile,
              }),
            ];
          }
          renderLighthouse() {
            return [
              a.createElement(p, {
                key: "lighthouseDB",
                sHeader: "lighthousedb.json",
                oContent: this.props.report.oLighthouseDB,
              }),
            ];
          }
          renderProperties() {
            return [
              a.createElement(l, {
                key: "properties",
                rProperties: this.props.report.oProperties,
              }),
            ];
          }
          renderLogs() {
            return [
              a.createElement(c, {
                key: "logs",
                rLogs: this.props.report.rLogs,
              }),
            ];
          }
          renderViewer() {
            switch (this.state.eViewerTab) {
              default:
              case s.Main:
                return this.renderMainTab();
              case s.Devices:
                return this.renderDevicesTab();
              case s.USB:
                return this.renderUsbTab();
              case s.Configuration:
                return this.renderConfiguration();
              case s.Chaperone:
                return this.renderChaperone();
              case s.Lighthouse:
                return this.renderLighthouse();
              case s.Properties:
                return this.renderProperties();
              case s.Logs:
                return this.renderLogs();
            }
          }
          render() {
            return a.createElement(
              "div",
              { className: "FullPage FlexColumn" },
              this.renderTabButtons(),
              this.state.eViewerTab == s.Logs
                ? this.renderViewer()
                : a.createElement(
                    "div",
                    { className: "ContentArea" },
                    this.renderViewer(),
                  ),
            );
          }
        }
        (0, n.Cg)([i], u.prototype, "onClickTab", null);
        class d {
          constructor() {
            (this.report = {}), (this.sError = null);
          }
          monthFromString(e) {
            switch (e) {
              default:
              case "Jan":
                return 0;
              case "Feb":
                return 1;
              case "Mar":
                return 2;
              case "Apr":
                return 3;
              case "May":
                return 4;
              case "Jun":
                return 5;
              case "Jul":
                return 6;
              case "Aug":
                return 7;
              case "Sep":
                return 8;
              case "Oct":
                return 9;
              case "Nov":
                return 10;
              case "Dec":
                return 11;
            }
          }
          dateFromComponents(e, t, r, s) {
            let n = r.split(":"),
              a = parseInt(n[0], 10),
              o = parseInt(n[1], 10),
              i = parseInt(n[2], 10);
            return Date.UTC(s, this.monthFromString(e), t, a, o, i);
          }
          setError(e) {
            this.sError = e;
          }
          getError() {
            return this.sError;
          }
          getReport() {
            return this.report;
          }
          parseSystemReport(e) {
            let t = "\n";
            -1 != e.indexOf("\r\n") && (t = "\r\n");
            let r = e.split(t);
            return (
              this.parseHeader(r) &&
              this.parseReport(r) &&
              this.parseDisplays(r) &&
              this.parseDevices(r) &&
              this.parseUSB(r) &&
              this.parseLogs(r) &&
              this.parseConfiguration(r) &&
              this.parseConfigFile(r) &&
              this.parseChaperone(r) &&
              this.parseChaperoneFile(r) &&
              this.parseLighthouseDB(r)
            );
          }
          parseHeader(e) {
            if ((this.consumeBlankLines(e), 0 == e.length))
              return this.setError("Missing header line"), !1;
            let t = e.shift().split(" ");
            return 9 != t.length
              ? (this.setError("Malformed header line"), !1)
              : ((this.report.reportCreateDate = this.dateFromComponents(
                  t[5],
                  parseInt(t[6]),
                  t[7],
                  parseInt(t[8]),
                )),
                !0);
          }
          consumeBlankLines(e) {
            for (; e.length > 0 && "" == e[0]; ) e.shift();
          }
          extractSection(e, t, r) {
            this.consumeBlankLines(e);
            let s = "<" + t + ">",
              n = "</" + t + ">";
            if (0 == e.length)
              return this.setError("Not enough lines for " + t), [];
            if (e[0] != s) return this.setError("Missing start of " + t), [];
            e.shift();
            let a = [];
            for (; e.length > 0 && e[0] != n; ) {
              let t = e.shift();
              (t || r) && a.push(t);
            }
            return e.length > 0
              ? (e.shift(), a)
              : (this.setError("Missing end of " + t), []);
          }
          convertColonTabSectionToObject(e) {
            let t = {};
            for (let r of e) {
              let e = r.split(":\t");
              1 == e.length && (e = r.split(": \t")),
                2 == e.length && (t[e[0]] = e[1]);
            }
            return t;
          }
          parseReport(e) {
            let t = this.extractSection(e, "Report", !1);
            return (
              0 != t.length &&
              ((this.report.oReport = this.convertColonTabSectionToObject(t)),
              !0)
            );
          }
          parseDisplays(e) {
            let t = this.extractSection(e, "Displays", !1);
            return (
              0 != t.length &&
              ((this.report.oDisplays = this.convertColonTabSectionToObject(t)),
              !0)
            );
          }
          parseDevices(e) {
            let t = this.extractSection(e, "Devices", !0);
            if (0 == t.length) return !1;
            for (this.report.rDevices = []; t.length > 0; ) {
              let e = t.shift(),
                r = parseInt(e.split(" ")[1]),
                s = "Device" + r + "_Additional",
                n = "<" + s + ">",
                a = "</" + s + ">",
                o = null,
                i = null,
                l = 0;
              for (
                ;
                l < t.length &&
                (t[l] == n ? (o = l) : t[l] == a && (i = l),
                "" != t[l] || (o && !i));
                l++
              );
              if (0 == l) continue;
              if (null != o && null == i)
                return (
                  this.setError("Mismatched additional info on device " + r), !1
                );
              let c = [],
                h = [];
              o
                ? ((c = t.slice(0, o - 1)), (h = t.slice(o + 1, i - 1)))
                : (c = t.slice(0, l - 1)),
                (t = t.slice(l + 1));
              let p = {
                sName: e,
                oDetails: this.convertColonTabSectionToObject(c),
                rAdditionalLines: h,
              };
              this.report.rDevices.push(p);
            }
            return !0;
          }
          parseUSB(e) {
            return (
              (this.report.rUSB = this.extractSection(e, "USB", !0)),
              this.report.rUSB && this.report.rUSB.length > 0
            );
          }
          extractRuns(e, t) {
            let r = [],
              s = -1;
            for (let n = 0; n < e.length; n++)
              if (n > s + 1) {
                let a = t.exec(e[n]);
                a && (r.push({ sDate: a[1], nStartLine: n }), (s = n));
              }
            return r;
          }
          extractLogFile(e) {
            let t = new RegExp("^=== (.*) - (.*)$"),
              r = new RegExp("^--- (.*) - (.*)$"),
              s = new RegExp("(.*) is not available.");
            if ((this.consumeBlankLines(e), 0 == e.length)) return null;
            let n = e.shift();
            if (s.test(n)) return null;
            let a = t.exec(n);
            if (!a || 3 != a.length)
              return (
                this.setError("malformed log start line === <file> - <dir>"),
                null
              );
            let o = { sName: a[1], sDir: a[2], rRuns: [] },
              i = [];
            for (; e.length > 0; ) {
              let t = e.shift(),
                s = r.exec(t);
              if (s && 3 == s.length) break;
              i.push(t);
            }
            if ("properties.json" == o.sName)
              return (this.report.oProperties = JSON.parse(i.join("\n"))), null;
            let l = [
                new RegExp("^(.{10,30}) - (\\/\\/=*)$"),
                new RegExp("^(.{10,30}) - (=+)$"),
              ],
              c = null;
            for (let e of l)
              if (((c = this.extractRuns(i, e)), c && c.length)) break;
            (c && c.length) || (c = [{ sDate: "FULL", nStartLine: 1 }]);
            for (let t = 0; t < c.length; t++) {
              let r = e.length - 1;
              t < c.length - 1 && (r = c[t + 1].nStartLine - 1),
                o.rRuns.push({
                  sDate: c[t].sDate,
                  rLines: i.slice(c[t].nStartLine, r),
                });
            }
            return o;
          }
          parseLogs(e) {
            let t = this.extractSection(e, "Logs", !0);
            if (!t) return !1;
            for (this.report.rLogs = []; t.length > 0; ) {
              let e = this.extractLogFile(t);
              e && this.report.rLogs.push(e);
            }
            return !0;
          }
          parseConfiguration(e) {
            let t = this.extractSection(e, "Configuration", !0);
            return (
              !!t &&
              ((this.report.oConfiguration =
                this.convertColonTabSectionToObject(t)),
              !0)
            );
          }
          parseConfigFile(e) {
            let t = this.extractSection(e, "ConfigFile", !0);
            return (this.report.oConfigFile = JSON.parse(t.join("\n"))), !0;
          }
          parseChaperone(e) {
            let t = this.extractSection(e, "Chaperone", !0);
            return (
              t &&
                (this.report.oChaperone =
                  this.convertColonTabSectionToObject(t)),
              !0
            );
          }
          parseChaperoneFile(e) {
            let t = this.extractSection(e, "ChaperoneFile", !0);
            return (this.report.oChaperoneFile = JSON.parse(t.join("\n"))), !0;
          }
          parseLighthouseDB(e) {
            let t = this.extractSection(e, "LighthouseDB", !0);
            return (
              t && (this.report.oLighthouseDB = JSON.parse(t.join("\n"))), !0
            );
          }
        }
        var g,
          m = r(2505),
          f = r.n(m);
        (0, r(7813).jK)({ enforceActions: "never" }),
          (function (e) {
            (e[(e.WaitingForReport = 0)] = "WaitingForReport"),
              (e[(e.Parsing = 1)] = "Parsing"),
              (e[(e.Error = 2)] = "Error"),
              (e[(e.Viewing = 3)] = "Viewing");
          })(g || (g = {}));
        class v extends a.Component {
          constructor(e) {
            super(e),
              (this.fileReader = null),
              (this.state = { bDragOver: !1, ePageState: g.WaitingForReport });
          }
          handleDragOver() {
            this.setState({ bDragOver: !0 });
          }
          handleDragLeave() {
            this.setState({ bDragOver: !1 });
          }
          handleDrop(e) {
            if (
              (e.preventDefault(),
              e.stopPropagation(),
              -1 != e.dataTransfer.types.indexOf("Files"))
            )
              (this.fileReader = new FileReader()),
                (this.fileReader.onload = (e) => {
                  this.readReportFromString(this.fileReader.result);
                }),
                this.fileReader.readAsText(e.dataTransfer.files[0]);
            else if (e.dataTransfer.types.indexOf("text/uri-list")) {
              let t = e.dataTransfer.getData("text/uri-list");
              console.log("Loading from ", t),
                f()
                  .get(t)
                  .then((e) => {
                    this.readReportFromString(e.data);
                  })
                  .catch((e) => {
                    this.setState({ ePageState: g.Error, sError: e.message });
                  });
            }
          }
          readReportFromString(e) {
            this.setState({
              ePageState: g.Parsing,
              sError: null,
              report: null,
            }),
              setTimeout(() => {
                let t = new d();
                t.parseSystemReport(e)
                  ? this.setState({
                      ePageState: g.Viewing,
                      sError: null,
                      report: t.getReport(),
                    })
                  : this.setState({
                      ePageState: g.Error,
                      sError: t.getError(),
                      report: null,
                    });
              }, 10);
          }
          componentDidMount() {
            window.addEventListener("dragover", (e) => {
              e.preventDefault(), e.stopPropagation();
            }),
              window.addEventListener("drop", (e) => {
                e.preventDefault(), e.stopPropagation();
              });
          }
          renderSystemReport() {
            switch (this.state.ePageState) {
              default:
              case g.WaitingForReport:
                return a.createElement(
                  "div",
                  { className: "BigMessage" },
                  this.state.bDragOver
                    ? "Drop it!"
                    : "Drop a system report file here to view it.",
                );
              case g.Error:
                return a.createElement(
                  "div",
                  { className: "BigMessage" },
                  "Error parsing system report: ",
                  this.state.sError,
                );
              case g.Parsing:
                return a.createElement(
                  "div",
                  { className: "BigMessage" },
                  "Parsing system report.",
                );
              case g.Viewing:
                return a.createElement(u, { report: this.state.report });
            }
          }
          render() {
            return a.createElement(
              "div",
              {
                className: "FullPage",
                onDragOver: this.handleDragOver,
                onDragLeave: this.handleDragLeave,
                onDrop: this.handleDrop,
              },
              this.renderSystemReport(),
            );
          }
        }
        (0, n.Cg)([i], v.prototype, "handleDragOver", null),
          (0, n.Cg)([i], v.prototype, "handleDragLeave", null),
          (0, n.Cg)([i], v.prototype, "handleDrop", null),
          o.H(document.getElementById("root")).render(a.createElement(v, null));
      },
    },
    r = {};
  function s(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var a = (r[e] = { exports: {} });
    return t[e](a, a.exports, s), a.exports;
  }
  (s.m = t),
    (e = []),
    (s.O = (t, r, n, a) => {
      if (!r) {
        var o = 1 / 0;
        for (h = 0; h < e.length; h++) {
          for (var [r, n, a] = e[h], i = !0, l = 0; l < r.length; l++)
            (!1 & a || o >= a) && Object.keys(s.O).every((e) => s.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((i = !1), a < o && (o = a));
          if (i) {
            e.splice(h--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var h = e.length; h > 0 && e[h - 1][2] > a; h--) e[h] = e[h - 1];
      e[h] = [r, n, a];
    }),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) &&
          !s.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 156: 0, 527: 0 };
      s.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var n,
            a,
            [o, i, l] = r,
            c = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (n in i) s.o(i, n) && (s.m[n] = i[n]);
            if (l) var h = l(s);
          }
          for (t && t(r); c < o.length; c++)
            (a = o[c]), s.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return s.O(h);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = s.O(void 0, [967, 526, 527], () => s(8195));
  n = s.O(n);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/systemreportviewer.js.map
