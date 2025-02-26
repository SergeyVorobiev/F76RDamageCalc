(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_main_7f1459._.js", {

"[project]/src/main/HotMeter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>HotMeter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/progress/index.js [app-client] (ecmascript) <export default as Progress>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function HotMeter({ creatures, steps, colors }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let copyColors = [
        ...colors
    ];
    let shiftIndex = index + 20;
    shiftIndex = shiftIndex > 49 ? 49 : shiftIndex;
    copyColors[index] = copyColors[shiftIndex];
    const percent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHotPercentage"])(creatures);
    const limit = percent / 2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HotMeter.useEffect": ()=>{
            setTimeout({
                "HotMeter.useEffect": ()=>{
                    let newIndex = index + 1;
                    if (newIndex > limit) {
                        newIndex = 0;
                    }
                    setIndex(newIndex);
                }
            }["HotMeter.useEffect"], 200);
        }
    }["HotMeter.useEffect"]); // Depends on index automatically
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "input-group d-flex justify-content-center p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                children: "🔥"
            }, void 0, false, {
                fileName: "[project]/src/main/HotMeter.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                    showInfo: false,
                    percent: percent,
                    steps: steps,
                    type: "line",
                    size: "small",
                    strokeColor: copyColors
                }, void 0, false, {
                    fileName: "[project]/src/main/HotMeter.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/HotMeter.js",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/HotMeter.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(HotMeter, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = HotMeter;
var _c;
__turbopack_refresh__.register(_c, "HotMeter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/main/ResistanceChart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>ResistanceChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/dropdown/BaseDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const { Chart } = await __turbopack_require__("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
function getConfig(graphValues) {
    return {
        type: "line",
        data: {
            labels: graphValues.xValues,
            datasets: [
                {
                    data: graphValues.yValues,
                    borderColor: "red",
                    borderWidth: "2",
                    pointRadius: "1",
                    fill: true
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Resistance',
                        color: 'black'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Damage / sec',
                        color: 'black'
                    }
                }
            },
            animation: false
        }
    };
}
function drawChart(graphValues, chartId) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    new Chart(document.getElementById(chartId), getConfig(graphValues));
}
function getDPS(need, yValues) {
    if (need) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'row'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-auto p-0 ps-2 pt-2 w-100 d-flex justify-content-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "bg-orange-outline",
                        bg: "warning",
                        text: "dark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "DPS: ",
                                yValues[0].toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/main/ResistanceChart.js",
                            lineNumber: 61,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/ResistanceChart.js",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/ResistanceChart.js",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-auto p-0 pt-2 pe-2 w-100 d-flex justify-content-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bg: "warning",
                        className: "bg-orange-outline",
                        text: "dark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "DPS: ",
                                yValues[yValues.length - 1].toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/main/ResistanceChart.js",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/ResistanceChart.js",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/ResistanceChart.js",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/main/ResistanceChart.js",
            lineNumber: 58,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function ResistanceChart(props) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResistanceChart.useEffect": ()=>{
            drawChart(props.graphValues, props.chartId);
        }
    }["ResistanceChart.useEffect"]);
    const dict = {};
    let number = 1;
    for(const creatureField in props.creatures){
        const creature = props.creatures[creatureField];
        dict[number++] = creature.capName;
    }
    const creature = props.creatures["creature" + props.creatureNumber];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            getDPS(props.dps, props.graphValues.yValues),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center p-0 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "blue-label",
                    size: "sm",
                    setValue: props.setCreatureNumber,
                    dict: dict,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: creature.capName
                    }, void 0, false, {
                        fileName: "[project]/src/main/ResistanceChart.js",
                        lineNumber: 89,
                        columnNumber: 116
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/main/ResistanceChart.js",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/ResistanceChart.js",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ps-1 pe-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    id: props.chartId
                }, void 0, false, {
                    fileName: "[project]/src/main/ResistanceChart.js",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/ResistanceChart.js",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(ResistanceChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ResistanceChart;
var _c;
__turbopack_refresh__.register(_c, "ResistanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/main/GraphInfoView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>GraphInfoView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/ResistanceChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/progress/index.js [app-client] (ecmascript) <export default as Progress>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
function GraphInfoView(props) {
    const creature = props.creatures["creature" + props.creatureChartNumber];
    const cPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeToPercent"])(creature.lifeTime);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: props.className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "d-flex m-0 p-0 w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-auto p-0 w-100 d-flex justify-content-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "bg-orange-outline",
                                bg: "warning",
                                text: "dark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        "DPS: ",
                                        props.graphValues.yValues[0].toFixed(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/main/GraphInfoView.js",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/GraphInfoView.js",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/GraphInfoView.js",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-0 p-0 w-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                                type: "dashboard",
                                steps: 50,
                                percent: cPercent,
                                format: (percent)=>percent,
                                size: 28,
                                strokeColor: props.colors,
                                trailColor: "rgba(0, 0, 0, 0.06)",
                                strokeWidth: 20
                            }, void 0, false, {
                                fileName: "[project]/src/main/GraphInfoView.js",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/GraphInfoView.js",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-auto p-0 w-100 d-flex justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bg: "warning",
                                className: "bg-orange-outline",
                                text: "dark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        "DPS: ",
                                        props.graphValues.yValues[props.graphValues.yValues.length - 1].toFixed(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/main/GraphInfoView.js",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/GraphInfoView.js",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/GraphInfoView.js",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/GraphInfoView.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/GraphInfoView.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "d-flex flex-column justify-content-center p-1 pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    graphValues: props.graphValues,
                    chartId: "mainResChart",
                    creatures: props.creatures,
                    creatureNumber: props.creatureChartNumber,
                    setCreatureNumber: props.setCreatureChartNumber
                }, void 0, false, {
                    fileName: "[project]/src/main/GraphInfoView.js",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/GraphInfoView.js",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/GraphInfoView.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = GraphInfoView;
var _c;
__turbopack_refresh__.register(_c, "GraphInfoView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/main/MainInfoPopover.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mainInfoPopover": (()=>mainInfoPopover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
;
;
const mainInfoPopover = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    className: "popover-adjustable",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
            as: "h3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Note"
            }, void 0, false, {
                fileName: "[project]/src/main/MainInfoPopover.js",
                lineNumber: 6,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/main/MainInfoPopover.js",
            lineNumber: 5,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
            className: "popover-body3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "All data"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 9,
                            columnNumber: 32
                        }, this),
                        " presented in this calculator is parsed directly from .esm files. Be sure that the version of game you are playing corresponds to the version of data presented in this calculator that can be seen via '?' button for every particular data section."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 9,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "CRIT"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 10,
                            columnNumber: 32
                        }, this),
                        " calculates critical damage, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "☠️ Fr:"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 10,
                            columnNumber: 82
                        }, this),
                        " means crit frequency (1 / 2 - every second shot is crit)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 10,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "SNEAK"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 11,
                            columnNumber: 32
                        }, this),
                        " calculates sneak damage (100% hits are sneak)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 11,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "HEAD"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 12,
                            columnNumber: 32
                        }, this),
                        " calculates head shot damage, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "🤕 Fr"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 12,
                            columnNumber: 83
                        }, this),
                        " means head shot frequency (80% - 4 of 5 shots are head shots, kill time for each time can be slightly different due to randomness)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 12,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "DPS"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 13,
                            columnNumber: 32
                        }, this),
                        " (damage per second) is counting reload time also. If you have only 1 slot in a magazine, 1 shot per second, 10 damage per shot and 1 second to reload, then dps = 5 provided that resistances of creature = 0. Charts show ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "DPS"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 13,
                            columnNumber: 272
                        }, this),
                        " provided that ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Sneak"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 13,
                            columnNumber: 297
                        }, this),
                        " triggers every hit and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Crit"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 13,
                            columnNumber: 333
                        }, this),
                        " / ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "HeadShot"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 13,
                            columnNumber: 347
                        }, this),
                        " trigger as specified, accuracy and chance counting for every damage separately. Time damage is counting without stacking."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 13,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Creatures."
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 14,
                            columnNumber: 32
                        }, this),
                        " Real NPC's can have equipment or perks which can affect resistance / damage which not presented in the calculator."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 14,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "This calculator"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 15,
                            columnNumber: 32
                        }, this),
                        " does not represent your real game experience, it has some limitations and it calculates creature's life time provided that a creature is standing still under the fire until death. "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 15,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: "However when all else being equal you can rely on this numbers to compare efficiency of weapons with a pretty good accuracy. Go to GitHub page via burger menu for details."
                }, void 0, false, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 17,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Usage."
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 19,
                            columnNumber: 32
                        }, this),
                        " At the beginning, go to '",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Weapons"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 19,
                            columnNumber: 71
                        }, this),
                        "' tab, unfold a weapon's section you like, tap - '",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Calculate"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 19,
                            columnNumber: 135
                        }, this),
                        "' - '",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Start"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 19,
                            columnNumber: 156
                        }, this),
                        "' - '",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Apply"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 19,
                            columnNumber: 173
                        }, this),
                        "', enjoy."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 19,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "m-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "To choose"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 20,
                            columnNumber: 32
                        }, this),
                        " creature and its level, tap on ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            className: "creature-label-text",
                            children: "Creature"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 20,
                            columnNumber: 80
                        }, this),
                        " label and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            className: "creature-label-text",
                            children: "Level"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 20,
                            columnNumber: 138
                        }, this),
                        " in the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Creature Details View"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainInfoPopover.js",
                            lineNumber: 20,
                            columnNumber: 190
                        }, this),
                        ". "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainInfoPopover.js",
                    lineNumber: 20,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/main/MainInfoPopover.js",
            lineNumber: 8,
            columnNumber: 9
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/main/MainInfoPopover.js",
    lineNumber: 4,
    columnNumber: 5
}, this);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/main/MainInfoButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MainInfoButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/MainInfoPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
function MainInfoButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rootClose: "true",
        trigger: "click",
        placement: "left",
        overlay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainInfoPopover"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "white-blue-border",
            style: {
                cursor: 'help'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "?"
                }, void 0, false, {
                    fileName: "[project]/src/main/MainInfoButton.js",
                    lineNumber: 9,
                    columnNumber: 81
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/MainInfoButton.js",
                lineNumber: 9,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/main/MainInfoButton.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/main/MainInfoButton.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = MainInfoButton;
var _c;
__turbopack_refresh__.register(_c, "MainInfoButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/main/SummaryView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildExtraDamageButtons": (()=>buildExtraDamageButtons),
    "buildExtraDamageView": (()=>buildExtraDamageView),
    "default": (()=>SummaryView),
    "getFireRateLabel": (()=>getFireRateLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/MainInfoButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function buildExtraDamageView(extraDamage, setExtraDamage, boostDamageRef, setBoostDamage, info = false) {
    function useCrit(e) {
        extraDamage.useCrit = e.target.checked;
        setExtraDamage({
            ...extraDamage
        });
    }
    function useSneak(e) {
        extraDamage.useSneak = e.target.checked;
        const card = boostDamageRef.current.follow_through;
        card.displayed_value = card.is_used && extraDamage.useSneak ? card.value : 0.0;
        setExtraDamage({
            ...extraDamage
        });
        setBoostDamage({
            ...boostDamageRef.current
        });
    }
    function useHead(e) {
        extraDamage.useHead = e.target.checked;
        setExtraDamage({
            ...extraDamage
        });
    }
    const infoButton = info ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/main/SummaryView.js",
        lineNumber: 30,
        columnNumber: 34
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-0 m-0 justify-content-evenly",
        direction: "horizontal",
        gap: 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                onChange: useCrit,
                checked: extraDamage.useCrit,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "☠️ CRIT"
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 33,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/SummaryView.js",
                    lineNumber: 33,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                onChange: useSneak,
                checked: extraDamage.useSneak,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "🐍 SNEAK"
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 34,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/SummaryView.js",
                    lineNumber: 34,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                onChange: useHead,
                checked: extraDamage.useHead,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "🤕 HEAD"
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 35,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/SummaryView.js",
                    lineNumber: 35,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            infoButton
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/SummaryView.js",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
function getFireRateLabel(weaponType) {
    const isRanged = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isWeaponRangedByType(weaponType);
    const fireRateLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getFireRate(weaponType) + ":";
    return isRanged ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fireRate"], '0.7rem', '0.27rem', fireRateLabel) : '👊🏼 ' + fireRateLabel;
}
function buildExtraDamageButtons(extraDamage, setExtraDamage) {
    function crf(e) {
        extraDamage.critFreq -= 1;
        if (extraDamage.critFreq === 0) {
            extraDamage.critFreq = 7;
        }
        setExtraDamage({
            ...extraDamage
        });
    }
    function hef(e) {
        extraDamage.headFreq += 10;
        if (extraDamage.headFreq > 100) {
            extraDamage.headFreq = 20;
        }
        setExtraDamage({
            ...extraDamage
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-muted d-flex justify-content-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "blue-white-border",
                style: {
                    width: '6.5rem',
                    height: '2rem'
                },
                className: "ms-2 me-2",
                onClick: crf,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: [
                        "☠️ Fr: 1 / ",
                        extraDamage.critFreq
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/SummaryView.js",
                    lineNumber: 64,
                    columnNumber: 128
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "blue-white-border",
                style: {
                    width: '6.5rem',
                    height: '2rem'
                },
                className: "ms-2 me-2",
                onClick: hef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: [
                        "🤕 Fr: ",
                        extraDamage.headFreq,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/SummaryView.js",
                    lineNumber: 65,
                    columnNumber: 128
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/SummaryView.js",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
function SummaryView(props) {
    let damageText = "";
    let fireRateText = "";
    let displayedCrit = 0;
    let displayedSneak = 0;
    let reloadTime = 0;
    let ammoCapacity = 0;
    let tDamage = 0;
    let shotSize = 1;
    let fRate = 10;
    if (props.resultDamage && Object.keys(props.resultDamage).length > 0) {
        reloadTime = props.resultDamage.reloadTime;
        displayedCrit = props.resultDamage.displayedCrit;
        displayedSneak = props.resultDamage.displayedSneak;
        tDamage = props.resultDamage.tDamage;
        shotSize = props.resultDamage.shotSize;
        damageText = tDamage.toFixed(1) + " x " + shotSize;
        fRate = props.resultDamage.fireRate;
        fireRateText = fRate.toFixed(0) + " - " + (fRate / 10.0).toFixed(2) + " shots / sec";
        ammoCapacity = props.resultDamage.ammoCapacity;
    }
    const fireRateLabel = getFireRateLabel(props.resultDamage.weaponType);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: props.className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "pe-0 ps-0",
                children: buildExtraDamageView(props.extraDamage, props.setExtraDamage, props.boostDamageRef, props.setBoostDamage, true)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "pt-0 pb-0",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pt-0 pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "💥 Damage:"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 98,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 98,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pt-0 pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: damageText
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 98,
                            columnNumber: 125
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 98,
                        columnNumber: 97
                    }, this), "default", "red"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0 mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "☠️ Crit:"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 99,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 99,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "+" + displayedCrit + "%"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 99,
                            columnNumber: 123
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 99,
                        columnNumber: 95
                    }, this), "default", "magenta"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0 mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "🐍 Sneak:"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 100,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 100,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "+" + displayedSneak + "%"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 100,
                            columnNumber: 124
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 100,
                        columnNumber: 96
                    }, this), "default", "green"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0 mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: fireRateLabel
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 101,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 101,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: fireRateText
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 101,
                            columnNumber: 130
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 101,
                        columnNumber: 102
                    }, this), "default", "purple"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0 mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ammo"], '0.7rem', '0.27rem', "Ammo:")
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 102,
                            columnNumber: 58
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 102,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: ammoCapacity
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 102,
                            columnNumber: 158
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 102,
                        columnNumber: 130
                    }, this), "default", "default"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0 mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "⌛ Reload:"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 103,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 103,
                        columnNumber: 31
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: reloadTime.toFixed(1) + " s"
                        }, void 0, false, {
                            fileName: "[project]/src/main/SummaryView.js",
                            lineNumber: 103,
                            columnNumber: 124
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/SummaryView.js",
                        lineNumber: 103,
                        columnNumber: 96
                    }, this), "default", "blue")
                ]
            }, void 0, true, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Footer, {
                className: "ps-0 pe-0",
                children: buildExtraDamageButtons(props.extraDamage, props.setExtraDamage)
            }, void 0, false, {
                fileName: "[project]/src/main/SummaryView.js",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/SummaryView.js",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_c = SummaryView;
var _c;
__turbopack_refresh__.register(_c, "SummaryView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/main/MainCardsDisplay.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$HotMeter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/HotMeter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponImages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesCardView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreaturesCardView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$GraphInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/GraphInfoView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/SummaryView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$GraphInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$GraphInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorsForHotMeter"])();
const imagePopover = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false), "mainWeaponImage", "right");
const MainCardsDisplay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function MainCardsDisplay(props) {
    console.log("MainCardsDisplay");
    const wSpec = props.wSpecRef.current;
    if (!wSpec) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let weaponIcon = wSpec.iconName;
    if (!weaponIcon) {
        weaponIcon = "default";
    }
    const mWidth = "19rem";
    const percentC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHotPercentage"])(props.creatures);
    const weaponTitleName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncateLongWords"])(wSpec.weaponName, 25);
    function onImageClick(e) {
        imagePopover.renderToggleNewContent(e.target, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: wSpec.defaultName
        }, void 0, false, {
            fileName: "[project]/src/main/MainCardsDisplay.js",
            lineNumber: 37,
            columnNumber: 55
        }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageElement"])(weaponIcon, "12rem")
        }, void 0, false, {
            fileName: "[project]/src/main/MainCardsDisplay.js",
            lineNumber: 37,
            columnNumber: 83
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        style: {
            minWidth: mWidth
        },
        className: "d-flex justify-content-center text-center mb-0 ms-1 me-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mainWeaponImage"
            }, void 0, false, {
                fileName: "[project]/src/main/MainCardsDisplay.js",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "p-0 m-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "p-0 m-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "col-2 d-flex justify-content-start p-0 m-0 ps-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    cursor: 'pointer'
                                },
                                onClick: onImageClick,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageElement"])(weaponIcon, "4rem", "main-weapon-image")
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainCardsDisplay.js",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "col-8 d-flex justify-content-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "m-auto p-0 weapon-label-text",
                                children: [
                                    " ",
                                    weaponTitleName,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 50,
                                columnNumber: 24
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainCardsDisplay.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "col-2 d-flex justify-content-end p-0 m-0 pe-2"
                        }, void 0, false, {
                            fileName: "[project]/src/main/MainCardsDisplay.js",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/MainCardsDisplay.js",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/MainCardsDisplay.js",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "pt-2 bg-lite ps-1 pe-1 pb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "p-1 pb-0 mb-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col d-flex justify-content-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "main-display-adjustable",
                                    resultDamage: props.resultDamage,
                                    extraDamage: props.extraDamage,
                                    boostDamageRef: props.boostDamageRef,
                                    setBoostDamage: props.setBoostDamage,
                                    setExtraDamage: props.setExtraDamage
                                }, void 0, false, {
                                    fileName: "[project]/src/main/MainCardsDisplay.js",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col d-flex justify-content-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$GraphInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "main-display-adjustable",
                                    graphValues: props.graphValues,
                                    percent: percentC,
                                    creatures: props.creatures,
                                    creatureChartNumber: props.creatureChartNumber,
                                    setCreatureChartNumber: props.setCreatureChartNumber,
                                    colors: colors
                                }, void 0, false, {
                                    fileName: "[project]/src/main/MainCardsDisplay.js",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col d-flex justify-content-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesCardView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "main-display-adjustable",
                                    creatureNamesRef: props.creatureNamesRef,
                                    creatures: props.creatures,
                                    setCreatures: props.setCreatures,
                                    resultDamage: props.resultDamage,
                                    weaponName: wSpec.weaponName
                                }, void 0, false, {
                                    fileName: "[project]/src/main/MainCardsDisplay.js",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/main/MainCardsDisplay.js",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/MainCardsDisplay.js",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/MainCardsDisplay.js",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Footer, {
                className: "text-muted p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "accordion p-0 m-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                                className: "m-0 p-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$HotMeter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    creatures: props.creatures,
                                    steps: 50,
                                    colors: colors
                                }, void 0, false, {
                                    fileName: "[project]/src/main/MainCardsDisplay.js",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    resultDamage: props.resultDamage
                                }, void 0, false, {
                                    fileName: "[project]/src/main/MainCardsDisplay.js",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/MainCardsDisplay.js",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/main/MainCardsDisplay.js",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/MainCardsDisplay.js",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/main/MainCardsDisplay.js",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/MainCardsDisplay.js",
        lineNumber: 40,
        columnNumber: 9
    }, this);
});
_c1 = MainCardsDisplay;
const __TURBOPACK__default__export__ = MainCardsDisplay;
var _c, _c1;
__turbopack_refresh__.register(_c, "MainCardsDisplay$memo");
__turbopack_refresh__.register(_c1, "MainCardsDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/main/ToastSpecs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponImages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AAView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/AAView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageDetailsCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/SimpleNameDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureInfoPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/ResistanceChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/SummaryView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$ModView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/snapshot/ModView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/ToastContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/progress/index.js [app-client] (ecmascript) <export default as Progress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getLegendaryRow(legendaryId, star) {
    if (!legendaryId || legendaryId === "" || star > 5) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        let stars = "⭐";
        stars = stars.repeat(star);
        const legData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendary"])(legendaryId);
        if (!legData) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(stars, legData.name, "default", "gold")
        }, void 0, false);
    }
}
const ToastSpecs = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ToastSpecs({ mods, creatures, legendary, iconName, weaponName, graphValues, resultDamage, showStat, setShowStat, creatureChartNumber, setCreatureChartNumber, extraDamage, setExtraDamage, boostDamageRef, setBoostDamage }) {
    _s();
    console.log("ToastSpecs");
    const [showView, setShowView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Main");
    const [detailIndex, setDetailIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [creatureNumber, setCreatureNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const dropdownNames = [
        "Main",
        "Damage Stats",
        "Creature",
        "Chart"
    ];
    if (resultDamage.damageDetails && resultDamage.damageDetails.length - 1 < detailIndex) {
        setDetailIndex(-1);
    }
    if (!resultDamage || Object.keys(resultDamage).length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let strengthTail = resultDamage.strengthBonus > 0 ? " (+" + resultDamage.strengthBonus + "%)" : "";
    const strength = resultDamage.strength + strengthTail;
    let bonuses = [];
    for(let property in resultDamage.bonusMult){
        bonuses.push((resultDamage.bonusMult[property] - 1) * 100);
    }
    const minBonus = Math.min(...bonuses).toFixed(0);
    const maxBonus = Math.max(...bonuses).toFixed(0);
    const bonusText = minBonus + "% - " + maxBonus + "%";
    const totalBonusTextMin = ((resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer - 1) * 100).toFixed(0) + "%";
    const totalBonusTextMax = ((resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner - 1) * 100).toFixed(0) + "%";
    const totalBonusText = totalBonusTextMin + " - " + totalBonusTextMax;
    let toastBody = null;
    if (showView === "Main") {
        toastBody = getMainToast(mods, creatures, resultDamage, legendary, bonusText, totalBonusText, strength);
    } else if (showView === "Damage Stats") {
        toastBody = getDetails(resultDamage, detailIndex, setDetailIndex);
    } else if (showView === "Creature") {
        toastBody = getCreatures(resultDamage, creatures, creatureNumber);
    } else {
        toastBody = getChart(graphValues, creatures, creatureChartNumber, setCreatureChartNumber);
    }
    function onDropdownSelect(e) {
        setShowView(e);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "position-fixed p-1",
        position: "top-center",
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: {
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            bg: "light",
            onClose: (e)=>setShowStat(false),
            show: showStat,
            animation: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "pe-3",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageElement"])(iconName, "1.5rem"),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "ms-2 mt-auto mb-auto p-auto me-auto",
                            children: weaponName
                        }, void 0, false, {
                            fileName: "[project]/src/main/ToastSpecs.js",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "me-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                                type: "dashboard",
                                steps: 50,
                                percent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHotPercentage"])(creatures),
                                format: (percent)=>percent,
                                size: 28,
                                strokeColor: "rgb(64, 255, 255)",
                                trailColor: "rgba(0, 0, 0, 0.06)",
                                strokeWidth: 20
                            }, void 0, false, {
                                fileName: "[project]/src/main/ToastSpecs.js",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/ToastSpecs.js",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/ToastSpecs.js",
                    lineNumber: 80,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-1"
                }, void 0, false, {
                    fileName: "[project]/src/main/ToastSpecs.js",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildExtraDamageView"])(extraDamage, setExtraDamage, boostDamageRef, setBoostDamage),
                toastBody,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col d-flex justify-content-start",
                            children: [
                                getPrevButtonDetails(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex),
                                getPrevButtonCreature(showView, creatureNumber, setCreatureNumber)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/main/ToastSpecs.js",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col d-flex justify-content-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "blue-label",
                                size: "sm",
                                onSelect: onDropdownSelect,
                                names: dropdownNames,
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: showView
                                }, void 0, false, {
                                    fileName: "[project]/src/main/ToastSpecs.js",
                                    lineNumber: 104,
                                    columnNumber: 133
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/main/ToastSpecs.js",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/main/ToastSpecs.js",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col d-flex justify-content-end",
                            children: [
                                getNextButtonDetails(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex),
                                getNextButtonCreature(showView, creatureNumber, setCreatureNumber)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/main/ToastSpecs.js",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/main/ToastSpecs.js",
                    lineNumber: 98,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/main/ToastSpecs.js",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}, "1/XMHdoxiWqQ1zqf9asCJ+OWOzw=")), "1/XMHdoxiWqQ1zqf9asCJ+OWOzw=");
_c1 = ToastSpecs;
function getChart(graphValues, creatures, creatureNumber, setCreatureNumber) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ResistanceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        graphValues: graphValues,
        chartId: "toastResChart",
        dps: "true",
        creatures: creatures,
        creatureNumber: creatureNumber,
        setCreatureNumber: setCreatureNumber
    }, void 0, false, {
        fileName: "[project]/src/main/ToastSpecs.js",
        lineNumber: 117,
        columnNumber: 13
    }, this);
}
function getPrevButtonDetails(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex - 1;
        if (index < -1) {
            index = detailsLength - 1;
        }
        setDetailIndex(index);
    }
    const symbol = "<<";
    if (showView !== "Damage Stats" || detailsLength === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            variant: "blue-white-border",
            className: "ms-2",
            onClick: onClick,
            children: symbol
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 132,
            columnNumber: 17
        }, this);
    }
}
function getNextButtonDetails(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex + 1;
        if (index > detailsLength - 1) {
            index = -1;
        }
        setDetailIndex(index);
    }
    const arr = '>>';
    if (showView !== "Damage Stats" || detailsLength === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            variant: "blue-white-border",
            className: "me-2",
            onClick: onClick,
            children: arr
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 148,
            columnNumber: 17
        }, this);
    }
}
function getNextButtonCreature(showView, creatureNumber, setCreatureNumber) {
    function onClick(e) {
        let number = creatureNumber + 1;
        if (number > 4) {
            number = 1;
        }
        setCreatureNumber(number);
    }
    const arr = '>>';
    if (showView !== "Creature") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            variant: "blue-white-border",
            className: "me-2",
            onClick: onClick,
            children: arr
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 164,
            columnNumber: 17
        }, this);
    }
}
function getPrevButtonCreature(showView, creatureNumber, setCreatureNumber) {
    function onClick(e) {
        let number = creatureNumber - 1;
        if (number < 1) {
            number = 4;
        }
        setCreatureNumber(number);
    }
    if (showView !== "Creature") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            variant: "blue-white-border",
            className: "ms-2",
            onClick: onClick,
            children: "<<"
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 179,
            columnNumber: 17
        }, this);
    }
}
function getCreatures(resultDamage, creatures, creatureNumber) {
    const creature = creatures["creature" + creatureNumber];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
        className: "p-2",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreatureInfo2"])(creature, resultDamage)
    }, void 0, false, {
        fileName: "[project]/src/main/ToastSpecs.js",
        lineNumber: 186,
        columnNumber: 9
    }, this);
}
function getDetails(resultDamage, detailIndex, setDetailIndex) {
    let view = null;
    if (detailIndex === -1) {
        view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AAView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            resultDamage: resultDamage
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 195,
            columnNumber: 17
        }, this);
    } else {
        view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            resultDamage: resultDamage,
            damageData: resultDamage.damageDetails[detailIndex]
        }, void 0, false, {
            fileName: "[project]/src/main/ToastSpecs.js",
            lineNumber: 197,
            columnNumber: 17
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
        className: "p-2",
        children: view
    }, void 0, false, {
        fileName: "[project]/src/main/ToastSpecs.js",
        lineNumber: 200,
        columnNumber: 9
    }, this);
}
/*
            {keyValueRow('💣 Explosive:', "+" + resultDamage.explosive.toFixed(0) + "%", "default", "pink")}
            {keyValueRow('🚀️ Bonus:', bonusText, "default", "blue")}
            {keyValueRow('⏫ Total Bonus:', totalBonusText, "default", "blue")}
            {keyValueRow('🐍 Sneak:', "+" + resultDamage.displayedSneak + "%", "default", "darkGreen")}
            {keyValueRow('☠️ Crit:', "+" + resultDamage.displayedCrit + "%", "default", "black")}
            {keyValueRow('💪 Strength:', strength, "default", "brown")}
*/ function getMainToast(mods, creatures, resultDamage, legendary, bonusText, totalBonusText, strength) {
    const fireRateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFireRateLabel"])(resultDamage.weaponType);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
        className: "p-2",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])('💥 Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize, "default", "indigo"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(fireRateLabel, resultDamage.fireRate.toFixed(2) + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec", "default", "purple"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ammo"], '0.7rem', '0.27rem', "Ammo / Hit:"), resultDamage.ammoCapacity, "default", "purple"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])('⌛ Reload:', resultDamage.reloadTime.toFixed(1) + ' s', "default", "purple"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])('💪 Strength:', strength, "default", "brown"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])('💀 Average Time:', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAverageTime"])(creatures), "default", "red"),
            getLegendaryRow(legendary[0][0], 1),
            getLegendaryRow(legendary[1][0], 2),
            getLegendaryRow(legendary[2][0], 3),
            getLegendaryRow(legendary[3][0], 4),
            getLegendaryRow(legendary[4][0], 5),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$ModView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mods: mods,
                fontSize: "0.6rem"
            }, void 0, false, {
                fileName: "[project]/src/main/ToastSpecs.js",
                lineNumber: 229,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/ToastSpecs.js",
        lineNumber: 217,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = ToastSpecs;
var _c, _c1;
__turbopack_refresh__.register(_c, "ToastSpecs$memo");
__turbopack_refresh__.register(_c1, "ToastSpecs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/main/WeaponSpecs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
const WeaponSpecs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function WeaponSpecs({ wSpec, setWSpec, showStatRef, setShowStat, health }) {
    console.log("WeaponSpecs");
    const openStat = (e)=>{
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '10rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ac-text",
                                    children: "Weapon Specs"
                                }, void 0, false, {
                                    fileName: "[project]/src/main/WeaponSpecs.js",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/main/WeaponSpecs.js",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "stats-text",
                                style: {
                                    width: '4rem'
                                },
                                onClick: openStat,
                                children: "Stats"
                            }, void 0, false, {
                                fileName: "[project]/src/main/WeaponSpecs.js",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/main/WeaponSpecs.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/WeaponSpecs.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setWSpec: setWSpec,
                        wSpec: wSpec,
                        health: health
                    }, void 0, false, {
                        fileName: "[project]/src/main/WeaponSpecs.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/main/WeaponSpecs.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/main/WeaponSpecs.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/main/WeaponSpecs.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
});
_c1 = WeaponSpecs;
const __TURBOPACK__default__export__ = WeaponSpecs;
var _c, _c1;
__turbopack_refresh__.register(_c, "WeaponSpecs$memo");
__turbopack_refresh__.register(_c1, "WeaponSpecs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/main/Main.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>Main)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$AdditionalDamage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/additionalDamage/AdditionalDamage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainCardsDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/MainCardsDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ToastSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/ToastSpecs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreaturesView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Calc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ExtraDamageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ExtraDamageOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EBoosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EBoosts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayerStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EPlayerStats.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EPlayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EAddDamages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EAddDamages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EWeaponSpecs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$WeaponSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/WeaponSpecs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBoosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkCardBoosts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$Snapshots$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/snapshot/Snapshots.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostStuff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/BoostStuff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponTemplates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/WeaponTemplates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/RaceView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumablesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumablesView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/comparator/view/ComparatorView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$loading$2f$LoadingLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/loading/LoadingLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainCardsDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ToastSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainCardsDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ToastSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defPlayerStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayerStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPlayerStats"])();
const defPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPlayer"])();
function getDefaultGraphData() {
    let xValues = [];
    let yValues = [];
    const maxRes = 1000;
    const coef = maxRes / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].points;
    for(let i = 0; i <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].points; i++){
        xValues.push(coef * i);
        yValues.push(0);
    }
    return {
        xValues: xValues,
        yValues: yValues
    };
}
function Main() {
    _s();
    console.log("Main");
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Main');
    const [creatureChartNumber, setCreatureChartNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loadedScreen, setLoadedScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wSpec, setWSpec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultWeaponSpecs"])());
    const [showStat, setShowStat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [graphValues, setGraphValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDefaultGraphData());
    const [creatures, setCreatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCreatures"])());
    const [boostDamage, setBoostDamage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EBoosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBoosts"])());
    const [resultDamage, setResultDamage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [extraDamage, setExtraDamage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ExtraDamageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultExtraDamage"])());
    const [additionalDamages, setAdditionalDamages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EAddDamages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultAdds"])());
    const [stuffBoost, setStuffBoost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getEmptyConsumableBoosts());
    const [player, setPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defPlayer);
    const [playerStats, setPlayerStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defPlayerStats);
    const [magazines, setMagazines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getMagazines());
    const [bobbleHeads, setBobbleHeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getBobbleHeads());
    const [food, setFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getFood());
    const [drink, setDrink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getDrink());
    const [psycho, setPsycho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getPsycho());
    const [serum, setSerum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getSerum());
    const [others, setOthers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getOthers());
    const [foodPref, setFoodPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        carnivore: false,
        herbivore: false
    });
    const [consumableTouched, setConsumableTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs
    const creatureNamesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreatureNames"])(creatures));
    const applySnapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wSpecRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resultDamageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerStatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stuffBoostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boostDamageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extraDamageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const additionalDamagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const creaturesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showStatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const weaponDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Main.useEffect": ()=>{
            const weaponFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](wSpec, boostDamage, extraDamage, additionalDamages, stuffBoost, playerStats);
            setGraphValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphDamage"])(creatures["creature" + creatureChartNumber], weaponFactory));
            setResultDamage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDamage"])(weaponFactory, creatures));
            wSpecRef.current = wSpec;
            resultDamageRef.current = resultDamage;
            playerRef.current = player;
            playerStatsRef.current = playerStats;
            stuffBoostRef.current = stuffBoost;
            boostDamageRef.current = boostDamage;
            extraDamageRef.current = extraDamage;
            additionalDamagesRef.current = additionalDamages;
            creaturesRef.current = creatures;
            creatureNamesRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreatureNames"])(creatures);
            weaponDataRef.current = {
                playerRef: playerRef,
                playerStatsRef: playerStatsRef,
                boostDamageRef: boostDamageRef,
                wSpecRef: wSpecRef,
                extraDamageRef: extraDamageRef,
                additionalDamagesRef: additionalDamagesRef,
                stuffBoostRef: stuffBoostRef
            };
        // setLoadedScreen(true);
        }
    }["Main.useEffect"], [
        boostDamage,
        wSpec,
        extraDamage,
        creatures,
        additionalDamages,
        stuffBoost,
        consumableTouched,
        player,
        playerStats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Main.useEffect": ()=>{
            const weaponFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](wSpec, boostDamage, extraDamage, additionalDamages, stuffBoost, playerStats);
            setGraphValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphDamage"])(creatures["creature" + creatureChartNumber], weaponFactory));
            setLoadedScreen(true);
        }
    }["Main.useEffect"], [
        creatureChartNumber
    ]);
    const applySnapshot = (cBoostDamage, cWSpec, cExtraDamage, cAdditionalDamages, cCreatures, cPlayer, cPlayerStats, cStuff)=>{
        setPlayer(cPlayer);
        setPlayerStats(cPlayerStats);
        setBoostDamage(cBoostDamage);
        setWSpec(cWSpec);
        setExtraDamage(cExtraDamage);
        setAdditionalDamages(cAdditionalDamages);
        const [foodPref, allStuffBoosts, consumables] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].buildFromList(cStuff, cPlayer);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers);
        setFoodPref(foodPref);
        setStuffBoost(allStuffBoosts);
        setCreatures({
            ...cCreatures
        });
    };
    applySnapshotRef.current = applySnapshot;
    showStatRef.current = showStat;
    if (!loadedScreen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$loading$2f$LoadingLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "Please Wait..."
        }, void 0, false, {
            fileName: "[project]/src/main/Main.js",
            lineNumber: 181,
            columnNumber: 17
        }, this);
    }
    const b = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$MainCardsDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creatureNamesRef: creatureNamesRef,
                wSpecRef: wSpecRef,
                graphValues: graphValues,
                resultDamage: resultDamage,
                creatures: creatures,
                boostDamageRef: boostDamageRef,
                setBoostDamage: setBoostDamage,
                setCreatures: setCreatures,
                creatureChartNumber: creatureChartNumber,
                setCreatureChartNumber: setCreatureChartNumber,
                extraDamage: extraDamage,
                setExtraDamage: setExtraDamage
            }, void 0, false, {
                fileName: "[project]/src/main/Main.js",
                lineNumber: 185,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$ToastSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creatures: creatures,
                legendary: wSpec.legendary,
                mods: wSpec.mods,
                iconName: wSpec.iconName,
                weaponName: wSpec.defaultName,
                graphValues: graphValues,
                resultDamage: resultDamage,
                showStat: showStat,
                setShowStat: setShowStat,
                creatureChartNumber: creatureChartNumber,
                setCreatureChartNumber: setCreatureChartNumber,
                extraDamage: extraDamage,
                setExtraDamage: setExtraDamage,
                boostDamageRef: boostDamageRef,
                setBoostDamage: setBoostDamage
            }, void 0, false, {
                fileName: "[project]/src/main/Main.js",
                lineNumber: 186,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "tab",
                activeKey: key,
                onSelect: (k)=>setKey(k),
                className: "mt-1 pb-0 mb-2 ms-1 me-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eventKey: "Main",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tab-text",
                            children: "Main"
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 192,
                            columnNumber: 45
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "accordion",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ps-2 pe-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                        className: "mb-3",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/main/Main.js",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$WeaponSpecs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    wSpec: wSpec,
                                    setWSpec: setWSpec,
                                    showStatRef: showStatRef,
                                    setShowStat: setShowStat,
                                    health: player.health.value
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBoosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    player: player,
                                    setPlayer: setPlayer,
                                    extraDamage: extraDamage,
                                    boostDamage: boostDamage,
                                    setBoostDamage: setBoostDamage,
                                    showStatRef: showStatRef,
                                    setShowStat: setShowStat
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 198,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$AdditionalDamage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    additionalDamages: additionalDamages,
                                    setAdditionalDamages: setAdditionalDamages,
                                    showStatRef: showStatRef,
                                    setShowStat: setShowStat
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    showStatRef: showStatRef,
                                    setShowStat: setShowStat,
                                    weaponDataRef: weaponDataRef,
                                    setWSpec: setWSpec,
                                    setBoostDamage: setBoostDamage,
                                    setPlayer: setPlayer,
                                    setPlayerStats: setPlayerStats,
                                    setAdditionalDamages: setAdditionalDamages,
                                    setExtraDamage: setExtraDamage,
                                    setFoodPref: setFoodPref,
                                    setStuffBoost: setStuffBoost,
                                    setMagazines: setMagazines,
                                    setBobbleHeads: setBobbleHeads,
                                    setFood: setFood,
                                    setDrink: setDrink,
                                    setPsycho: setPsycho,
                                    setSerum: setSerum,
                                    setOthers: setOthers
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 200,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ps-2 pe-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                        className: "mt-2 mb-3",
                                        children: "Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/main/Main.js",
                                        lineNumber: 202,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    creatureNamesRef: creatureNamesRef,
                                    creatures: creatures,
                                    setCreatures: setCreatures,
                                    resultDamage: resultDamage,
                                    extraDamage: extraDamage,
                                    setExtraDamage: setExtraDamage,
                                    boostDamageRef: boostDamageRef,
                                    setBoostDamage: setBoostDamage
                                }, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumablesView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 206,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/main/Main.js",
                                    lineNumber: 207,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/Main.js",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eventKey: "Templates",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tab-text",
                            children: "Weapons"
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 210,
                            columnNumber: 50
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponTemplates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            creatureNamesRef: creatureNamesRef,
                            setWSpec: setWSpec,
                            setBoostDamage: setBoostDamage,
                            setPlayer: setPlayer,
                            setExtraDamage: setExtraDamage,
                            setFoodPref: setFoodPref,
                            setStuffBoost: setStuffBoost,
                            setAdditionalDamages: setAdditionalDamages,
                            setPlayerStats: setPlayerStats,
                            setMagazines: setMagazines,
                            setBobbleHeads: setBobbleHeads,
                            setFood: setFood,
                            setDrink: setDrink,
                            setPsycho: setPsycho,
                            setSerum: setSerum,
                            setOthers: setOthers
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 211,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/Main.js",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eventKey: "Boosts",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tab-text",
                            children: "Boosts"
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 213,
                            columnNumber: 47
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostStuff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            foodPref: foodPref,
                            setFoodPref: setFoodPref,
                            magazines: magazines,
                            setMagazines: setMagazines,
                            bobbleHeads: bobbleHeads,
                            setBobbleHeads: setBobbleHeads,
                            food: food,
                            setFood: setFood,
                            drink: drink,
                            setDrink: setDrink,
                            psycho: psycho,
                            setPsycho: setPsycho,
                            serum: serum,
                            setSerum: setSerum,
                            others: others,
                            setOthers: setOthers,
                            player: player,
                            setPlayer: setPlayer,
                            stuffBoost: stuffBoost,
                            setStuffBoost: setStuffBoost,
                            showStat: showStat,
                            setShowStat: setShowStat,
                            boostDamage: boostDamage,
                            setBoostDamage: setBoostDamage,
                            playerStats: playerStats,
                            setPlayerStats: setPlayerStats,
                            setConsumableTouched: setConsumableTouched
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 214,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/Main.js",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eventKey: "Snapshots",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tab-text",
                            children: "Snapshots"
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 216,
                            columnNumber: 50
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$Snapshots$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            playerRef: playerRef,
                            playerStatsRef: playerStatsRef,
                            stuffBoostRef: stuffBoostRef,
                            boostDamageRef: boostDamageRef,
                            wSpecRef: wSpecRef,
                            extraDamageRef: extraDamageRef,
                            additionalDamagesRef: additionalDamagesRef,
                            creaturesRef: creaturesRef,
                            resultDamageRef: resultDamageRef,
                            applySnapshotRef: applySnapshotRef
                        }, void 0, false, {
                            fileName: "[project]/src/main/Main.js",
                            lineNumber: 217,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/main/Main.js",
                        lineNumber: 216,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/main/Main.js",
                lineNumber: 187,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/main/Main.js",
        lineNumber: 184,
        columnNumber: 9
    }, this);
    return b;
}
_s(Main, "2i7C4qbsYhNLHw6f3k4EzvpAMTw=");
_c = Main;
var _c;
__turbopack_refresh__.register(_c, "Main");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
}]);

//# sourceMappingURL=src_main_7f1459._.js.map