(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_958ec7._.js", {

"[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Custom checkbox
__turbopack_esm__({
    "UCheckbox": (()=>UCheckbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UCheckbox(props) {
    let className = "form-check-input ";
    if (props.className) {
        className += props.className;
    }
    let bgColor = null;
    let bColor = null;
    if (props.checkBgColor && props.checked) {
        bgColor = props.checkBgColor;
    }
    if (props.checkBorderColor && props.checked) {
        bColor = props.checkBorderColor;
    }
    const ms = props.children ? "ms-1" : "ms-0";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: props.id,
                title: props.title,
                style: {
                    cursor: 'pointer',
                    borderColor: bColor,
                    backgroundColor: bgColor
                },
                className: className,
                type: "checkbox",
                disabled: props.disabled,
                checked: props.checked,
                onChange: props.onChange
            }, void 0, false, {
                fileName: "[project]/src/viewComponents/checkbox/UCheckbox.js",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-check-label " + ms,
                children: props.children
            }, void 0, false, {
                fileName: "[project]/src/viewComponents/checkbox/UCheckbox.js",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/viewComponents/checkbox/UCheckbox.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = UCheckbox;
var _c;
__turbopack_refresh__.register(_c, "UCheckbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/viewComponents/dropdown/BaseDropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BaseDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript)");
;
;
;
function getItems(dict) {
    const result = [];
    for(const name in dict){
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: name,
            children: dict[name]
        }, name, false, {
            fileName: "[project]/src/viewComponents/dropdown/BaseDropdown.js",
            lineNumber: 8,
            columnNumber: 21
        }, this));
    }
    return result;
}
function BaseDropdown(props) {
    let onSelect = props.onSelect;
    if (!onSelect) {
        onSelect = (e)=>{
            props.setValue(e);
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: props.variant,
        size: props.size,
        onSelect: onSelect,
        title: props.title,
        children: getItems(props.dict)
    }, void 0, false, {
        fileName: "[project]/src/viewComponents/dropdown/BaseDropdown.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_c = BaseDropdown;
var _c;
__turbopack_refresh__.register(_c, "BaseDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StaticPopoverRenderer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Overlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
;
;
;
;
class StaticPopoverRenderer {
    // Workaround as propagation is suppressed (onHide will no be invoked)
    // This measure is intended to prevent of opening of several popovers if a propagation is suppressed and on
    // hide can't be invoked
    static lastOpened = null;
    constructor(header, body, placeId, placement = 'top'){
        this.header = header;
        this.body = body;
        this.placeId = placeId;
        this.show = false;
        this.root = null;
        this.placement = placement;
    }
    renderToggle(target) {
        this.show = !this.show;
        if (StaticPopoverRenderer.lastOpened && StaticPopoverRenderer.lastOpened !== this) {
            StaticPopoverRenderer.lastOpened.onHide();
        }
        if (this.show) {
            StaticPopoverRenderer.lastOpened = this;
        }
        if (!this.root) {
            this.root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRoot(document.getElementById(this.placeId));
        }
        this.root.render(this.buildLayout(this.header, this.body, this.show, target, this.placement));
    }
    renderToggleNewContent(target, header, body) {
        this.header = header;
        this.body = body;
        this.renderToggle(target);
    }
    onHide(e) {
        if (StaticPopoverRenderer.lastOpened === this) {
            StaticPopoverRenderer.lastOpened = null;
        }
        this.show = false;
        if (this.root) {
            this.root.render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false));
        }
    }
    buildLayout(header, body, show, target, placement) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            show: show,
            target: target,
            rootClose: "true",
            onHide: (e)=>this.onHide(e),
            placement: placement,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "popover-adjustable",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                        children: header
                    }, void 0, false, {
                        fileName: "[project]/src/viewComponents/popover/StaticPopoverRenderer.js",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                        children: body
                    }, void 0, false, {
                        fileName: "[project]/src/viewComponents/popover/StaticPopoverRenderer.js",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/viewComponents/popover/StaticPopoverRenderer.js",
                lineNumber: 60,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/viewComponents/popover/StaticPopoverRenderer.js",
            lineNumber: 54,
            columnNumber: 13
        }, this);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/viewComponents/tag/UTag.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UTag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d'
};
const blue = {
    backgroundColor: '#f7fbff',
    borderColor: '#0072a3',
    color: '#1d6db8'
};
const indigo = {
    backgroundColor: '#fdfaff',
    borderColor: '#5a008a',
    color: '#430067'
};
const red = {
    backgroundColor: '#fff4f4',
    borderColor: '#890000',
    color: '#c90000'
};
const orange = {
    backgroundColor: '#fffaf0',
    borderColor: '#ffa800',
    color: '#b56b1d'
};
const magenta = {
    backgroundColor: '#fff1fa',
    borderColor: '#ca007c',
    color: '#ab1672'
};
const grey = {
    backgroundColor: '#f4f4f4',
    borderColor: '#9f9f9f',
    color: '#3f3f3f'
};
const colors = {
    blue: blue,
    darkBlue: darkBlue,
    orange: orange,
    magenta: magenta,
    grey: grey,
    indigo: indigo,
    red: red
};
function UTag(props) {
    const colorScheme = colors[props.color];
    const borderRadius = props.bRadius ? props.bRadius : "2px";
    const bWidth = props.bWidth ? props.bWidth : "1px";
    let bgColor = grey.backgroundColor;
    let borderColor = grey.borderColor;
    let color = grey.color;
    if (colorScheme) {
        bgColor = colorScheme.backgroundColor;
        color = colorScheme.color;
        borderColor = colorScheme.borderColor;
    }
    if (!props.border) {
        borderColor = bgColor;
    }
    const style = {
        width: "auto",
        fontSize: "0.7rem",
        fontWeight: "bold",
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        borderStyle: "solid",
        borderWidth: bWidth,
        borderColor: borderColor,
        color: color,
        whiteSpace: "nowrap"
    };
    let result;
    if (props.onClick) {
        result = getButton(props, style);
    } else {
        result = getTag(props, style);
    }
    return result;
}
_c = UTag;
function getButton(props, style) {
    const className = props.className ? "button-3 " + props.className : "button-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: className,
        title: props.title,
        style: style,
        onClick: props.onClick,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/viewComponents/tag/UTag.js",
        lineNumber: 91,
        columnNumber: 13
    }, this);
}
function getTag(props, style) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        title: props.title,
        className: props.className,
        style: style,
        onClick: props.onClick,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/viewComponents/tag/UTag.js",
        lineNumber: 95,
        columnNumber: 13
    }, this);
}
var _c;
__turbopack_refresh__.register(_c, "UTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/viewComponents/popover/InfoPopover.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>InfoPopover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Overlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function buildOverlay(show, setShow, target, props) {
    function onHide(e) {
        setShow(false);
    }
    ;
    const body = show ? props.bodyBuilder(props.id) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    const header = show ? props.headerBuilder(props.title) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        show: show,
        target: target,
        rootClose: "true",
        onHide: onHide,
        placement: props.placement,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "info-popover",
            className: "popover-adjustable2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: header
                }, void 0, false, {
                    fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
                    lineNumber: 21,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-2",
                    style: props.popoverBodyStyle,
                    children: body
                }, void 0, false, {
                    fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
function InfoPopover(props) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let sign = "!";
    if (props.sign) {
        sign = props.sign;
    }
    function handleClick(e) {
        setShow(!show);
        setTarget(e.target);
    }
    ;
    const overlay = show ? buildOverlay(show, setShow, target, props) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: props.className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bg: "danger",
                pill: true,
                onClick: handleClick,
                style: {
                    cursor: "pointer"
                },
                children: sign
            }, void 0, false, {
                fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            overlay
        ]
    }, void 0, true, {
        fileName: "[project]/src/viewComponents/popover/InfoPopover.js",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s(InfoPopover, "SoVI8FSjdUSJK1Ztu+g1uPsnGz4=");
_c = InfoPopover;
var _c;
__turbopack_refresh__.register(_c, "InfoPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/additionalDamage/ADRow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>");
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
function buildPopover(text) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                as: "h3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Why?"
                }, void 0, false, {
                    fileName: "[project]/src/additionalDamage/ADRow.js",
                    lineNumber: 16,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/ADRow.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/ADRow.js",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/additionalDamage/ADRow.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function qa(text) {
    if (text === '' || text === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rootClose: "true",
        trigger: "click",
        placement: "top",
        overlay: buildPopover(text),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "danger",
            children: "?"
        }, void 0, false, {
            fileName: "[project]/src/additionalDamage/ADRow.js",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/additionalDamage/ADRow.js",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
function addIconName(name) {
    switch(name){
        case "Ballistic BDB":
            return "💥 BDB";
        case "Energy BDB":
            return "⚡ BDB";
        case "Fire BDB":
            return "🔥 BDB";
        case "Poison BDB":
            return "☣️ BDB";
        case "Cold BDB":
            return "❄️ BDB";
        case "Rad BDB":
            return "☢️ BDB";
        case "Damage To Creature":
            return "🐵 Damage";
        case "Sneak":
            return "🐍 Sneak";
        case "Crit":
            return "☠️ Crit";
        case "Strength":
            return "💪 Strength";
        case "Swift":
            return "💨 Swift";
        case "Health":
            return "❤️ Health";
        default:
            return name;
    }
}
function ADRow({ additionalDamage, updateAdditionalDamages, marks, text = '' }) {
    _s();
    const [redraw, setRedraw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const width = text === '' || text === null ? '8.9rem' : '7rem';
    function slideChanged(e) {
        setRedraw(!redraw);
        additionalDamage.value = e;
    }
    function onAfterChange(e) {
        updateAdditionalDamages();
    }
    function onChange(e) {
        additionalDamage.is_used = e.target.checked;
        updateAdditionalDamages();
    }
    let isUsed = false;
    let disabled = false;
    if (typeof additionalDamage.is_used === "undefined") {
        isUsed = true;
        disabled = true;
    } else {
        isUsed = additionalDamage.is_used;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-2 pt-2 pb-2 ps-3 pe-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '2.5rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                                    onChange: onChange,
                                    checked: isUsed,
                                    disabled: disabled,
                                    checkBgColor: '#00b6ff'
                                }, void 0, false, {
                                    fileName: "[project]/src/additionalDamage/ADRow.js",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/additionalDamage/ADRow.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: width
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: addIconName(additionalDamage.name)
                                }, void 0, false, {
                                    fileName: "[project]/src/additionalDamage/ADRow.js",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/additionalDamage/ADRow.js",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            qa(text),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '4.6rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge bg-info",
                                    style: {
                                        width: '3rem'
                                    },
                                    children: additionalDamage.value
                                }, void 0, false, {
                                    fileName: "[project]/src/additionalDamage/ADRow.js",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/additionalDamage/ADRow.js",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/additionalDamage/ADRow.js",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                        onChange: slideChanged,
                        onChangeComplete: onAfterChange,
                        tooltip: {
                            open: false
                        },
                        marks: marks.marks,
                        min: marks.min,
                        max: marks.max,
                        step: marks.step,
                        value: additionalDamage.value
                    }, void 0, false, {
                        fileName: "[project]/src/additionalDamage/ADRow.js",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/additionalDamage/ADRow.js",
                lineNumber: 94,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/additionalDamage/ADRow.js",
            lineNumber: 93,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/additionalDamage/ADRow.js",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
_s(ADRow, "mUedn90/dq1lhk6VGXlNPRmjIqs=");
_c = ADRow;
const __TURBOPACK__default__export__ = ADRow;
var _c;
__turbopack_refresh__.register(_c, "ADRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/additionalDamage/AdditionalTable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/additionalDamage/ADRow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const marks100P = {
    marks: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        100: '100%'
    },
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0
};
const marks200 = {
    marks: {
        0: '0%',
        40: '40%',
        80: '80%',
        120: '120%',
        160: '160%',
        200: '200%'
    },
    min: 0,
    max: 200,
    step: 1,
    defaultValue: 0
};
const qTDB = "Effect that increases your total damage like (Executioner, Tenderizer, TOFT, Follow Through, Legendary Explosion). For example: a weapon with 43 base damage " + " and 200 its total damage will be boosted by +50% BDB up to 221.5 whereas +50% TDB gives 300.";
const AdditionalTable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function AdditionalTable({ additionalDamages, setAdditionalDamages }) {
    console.log("AdditionalTable");
    function updateAdditionalDamages() {
        setAdditionalDamages({
            ...additionalDamages
        });
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.tdb,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks100P,
                text: qTDB
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.ballisticBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.energyBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.fireBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.poisonBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.coldBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.radBDB,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                additionalDamage: additionalDamages.damageToCreature,
                updateAdditionalDamages: updateAdditionalDamages,
                marks: marks200
            }, void 0, false, {
                fileName: "[project]/src/additionalDamage/AdditionalTable.js",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/additionalDamage/AdditionalTable.js",
        lineNumber: 47,
        columnNumber: 9
    }, this);
});
_c1 = AdditionalTable;
const __TURBOPACK__default__export__ = AdditionalTable;
var _c, _c1;
__turbopack_refresh__.register(_c, "AdditionalTable$memo");
__turbopack_refresh__.register(_c1, "AdditionalTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/additionalDamage/AdditionalDamage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$AdditionalTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/additionalDamage/AdditionalTable.js [app-client] (ecmascript)");
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
const AdditionalDamage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function AdditionalDamage({ additionalDamages, setAdditionalDamages, showStatRef, setShowStat }) {
    console.log("AdditionalDamage");
    const openStat = (e)=>{
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "3",
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
                                    children: "Additional Damage"
                                }, void 0, false, {
                                    fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
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
                                fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$AdditionalTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        additionalDamages: additionalDamages,
                        setAdditionalDamages: setAdditionalDamages
                    }, void 0, false, {
                        fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/additionalDamage/AdditionalDamage.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
});
_c1 = AdditionalDamage;
const __TURBOPACK__default__export__ = AdditionalDamage;
var _c, _c1;
__turbopack_refresh__.register(_c, "AdditionalDamage$memo");
__turbopack_refresh__.register(_c1, "AdditionalDamage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/BoostFunctions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "functions": (()=>functions)
});
function getStrangeMult(player) {
    return player.team ? 1 + player.strange / 100.0 : 1.0;
}
function getFreakReduction(player) {
    return 1 - player.freak / 100.0;
}
const functions = {
    nukeTheMan: (player)=>{
        return player.team ? 5 : 0;
    },
    partyGirlBoy: (player, defValue)=>{
        return parseInt(player.alcoholEffects * defValue);
    },
    adrenalineReaction: (player)=>{
        const health = player.health.value;
        const mult = getStrangeMult(player);
        let ar = 0.0;
        // The data is hardcoded into a perk
        if (mult > 1) {
            if (health <= 20) {
                ar = 63.0;
            } else if (health <= 30) {
                ar = 55.0;
            } else if (health <= 40) {
                ar = 48.0;
            } else if (health <= 50) {
                ar = 39.0;
            } else if (health <= 60) {
                ar = 31.0;
            } else if (health <= 70) {
                ar = 24.0;
            } else if (health <= 80) {
                ar = 16.0;
            } else if (health <= 90) {
                ar = 8.0;
            }
        } else {
            if (health <= 20) {
                ar = 50.0;
            } else if (health <= 30) {
                ar = 44.0;
            } else if (health <= 40) {
                ar = 38.0;
            } else if (health <= 50) {
                ar = 31.0;
            } else if (health <= 60) {
                ar = 25.0;
            } else if (health <= 70) {
                ar = 19.0;
            } else if (health <= 80) {
                ar = 13.0;
            } else if (health <= 90) {
                ar = 6.0;
            }
        }
        return ar;
    },
    eagleEyes: (player, defValue)=>{
        const mult = getStrangeMult(player);
        // Hardcoded in 003c4037
        if (mult > 1) {
            return 62.5;
        }
        return defValue;
    },
    eagleEyesNegative: (player, defValue)=>{
        const mult = getFreakReduction(player);
        return defValue * mult;
    },
    empathSerum: (player, defValue)=>{
        const mult = getStrangeMult(player);
        if (mult > 1) {
            return 2;
        }
        return defValue;
    },
    carnivoreSerum: (player, defValue)=>{
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    herbivoreSerum: (player, defValue)=>{
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    foodCalc: (player, defValue, foodPref, foodType)=>{
        if (foodType === "Meet" && foodPref.herbivore || foodType === "Plant" && foodPref.carnivore) {
            return 0;
        }
        let mult = 1;
        let strange = getStrangeMult(player);
        if (foodType === "Meet" && foodPref.carnivore && !foodPref.herbivore) {
            mult = 2 * strange;
        } else if (foodType === "Plant" && foodPref.herbivore && !foodPref.carnivore) {
            mult = 2 * strange;
        }
        return mult * defValue;
    },
    herdMentality: (player, defValue)=>{
        const mult = getStrangeMult(player);
        const red = getFreakReduction(player);
        // Positives is hardcoded inside 004e1f1e
        let posValue = defValue;
        if (mult > 1) {
            posValue = 3;
        }
        return player.team ? posValue : -defValue * red;
    },
    speedDemonMove: (player, defValue)=>{
        const mult = getStrangeMult(player);
        // Hardcoded in 004df1e0
        if (mult > 1) {
            return 25;
        }
        return defValue;
    },
    speedDemonReload: (player, defValue)=>{
        const mult = getStrangeMult(player);
        // Hardcoded in 004df1e0
        if (mult > 1) {
            return 40;
        }
        return defValue;
    },
    talons1: (player, defValue)=>{
        const mult = getStrangeMult(player);
        // Hardcoded in 0028d3bc
        if (mult > 1) {
            return 35;
        }
        return defValue;
    },
    talons2: (player, defValue)=>{
        return defValue;
    },
    twistedMuscles: (player, defValue)=>{
        const mult = getStrangeMult(player);
        // Hardcoded in 00386acd
        if (mult > 1) {
            return 35;
        }
        return defValue;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/StuffBoostsCollector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StuffBoostsCollector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Array.js [app-client] (ecmascript)");
;
class StuffBoostsCollector {
    static collectAllItems(stuffBoosts, property, collector) {
        stuffBoosts.forEach((value, key)=>{
            const maxItem = StuffBoostsCollector.getMaxItem(value);
            if (maxItem.property === property) {
                collector(maxItem);
            }
        });
    }
    static weaponNameOrTypeSatisfied(weaponName, weaponType, maxItem) {
        if (maxItem.name) {
            return maxItem.name.split(",").includes(weaponName);
        } else if (maxItem.type) {
            let types = maxItem.type.split(",");
            if (types.length === 0) {
                return true;
            }
            const lastType = types[0];
            let satisfyNameOrType;
            if (lastType === "!") {
                types = types.slice(1);
                satisfyNameOrType = true;
            } else {
                satisfyNameOrType = false;
            }
            if (types.includes(weaponType)) {
                satisfyNameOrType = !satisfyNameOrType;
            }
            return satisfyNameOrType;
        }
        return true;
    }
    static collect(weaponName, weaponType, weaponTags, stuffBoosts, property, customStacker = null) {
        let result = 0.0;
        stuffBoosts.forEach((value, key)=>{
            const maxItem = StuffBoostsCollector.getMaxItem(value);
            const satisfyNameOrType = StuffBoostsCollector.weaponNameOrTypeSatisfied(weaponName, weaponType, maxItem);
            let additional = [];
            if (maxItem.tag) {
                additional = maxItem.tag.split(",");
            }
            let satisfyTags = additional.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersects"])(additional, weaponTags) : true;
            if (maxItem.property === property && satisfyTags && satisfyNameOrType) {
                if (customStacker) {
                    customStacker(maxItem.value);
                } else {
                    result += maxItem.value;
                }
            }
        });
        return result;
    }
    static getMaxItem(items) {
        if (items.length === 1) {
            return items[0];
        }
        let max = null;
        let maxItem = null;
        for(let i = 0; i < items.length; i++){
            const item = items[i];
            if (max === null || item.value > max) {
                maxItem = item;
                max = item.value;
            }
        }
        return maxItem;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/EffectItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/StackEffectView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EStuffBoost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$InfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/InfoPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/StringHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
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
// Find dynamically used items to recalculate them
function recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player) {
    if (item.used && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBoost"])(foodPref, item, stuffBoost, player, false)) {
        setStuffBoost({
            ...stuffBoost
        });
    }
}
function getPopoverInfoBody(popoverId) {
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(popoverId);
    if (item) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            item: item
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/EffectItem.js",
            lineNumber: 23,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getPopoverInfoHeader(title) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
        children: title
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/EffectItem.js",
        lineNumber: 30,
        columnNumber: 13
    }, this);
}
const EffectItem = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function EffectItem({ categoryName, foodPref, setFoodPref, player, item, height, picHeight, imPadding, items, setItems, colorName, colorValue, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched }) {
    _s();
    const [, setUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EffectItem.EffectItem.useEffect": ()=>{
            recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player);
        }
    }["EffectItem.EffectItem.useEffect"], [
        player,
        foodPref
    ]);
    function cardClick(e) {
        item.used = !item.used;
        setUpdate([]);
        if (item.id === "carnivore_serum") {
            foodPref.carnivore = item.used;
            setFoodPref({
                ...foodPref
            });
        } else if (item.id === "herbivore_serum") {
            foodPref.herbivore = item.used;
            setFoodPref({
                ...foodPref
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStuff"])(foodPref, item, stuffBoost, player);
        // Say to parent to recalculate
        setConsumableTouched([]);
        // Do not say to react to update view for every boost item
        setItems(items);
        setStuffBoost(stuffBoost);
    }
    const boosts = item.boosts.map((boost)=>{
        let tail = "";
        if (boost.valueType === "percent") {
            tail = "%";
        } else if (boost.valueType === "multiplier") {
            tail = "x";
        }
        let sign = "";
        if (boost.value > 0 && boost.valueType !== "multiplier") {
            sign = "+";
        }
        const value = item.used ? sign + boost.value + tail : "-";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(boost.description, value, colorName, colorValue, 0);
    });
    const emptyRows = maxRows - boosts.length;
    //if (!item.emojiStrings) {
    const result = [];
    for(let i = 0; i < emptyRows; i++){
        result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRandomEmojiString"])(3, 3));
    }
    item.emojiStrings = result;
    //}
    const secondEmoji = item.used ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomEmoji"])() : "-";
    for(let i = 0; i < item.emojiStrings.length; i++){
        boosts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(item.emojiStrings[i], secondEmoji, colorName, colorValue, 0));
    }
    const filter = item.used ? "grayscale(0%)" : "grayscale(90%)";
    const outline = item.used ? "shadow-outline-gold" : "shadow-outline-unselected";
    const head = useHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
        className: "d-flex justify-content-center p-0 m-0 pt-1 pb-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textWrap: 'nowrap',
                overflow: 'hidden',
                textAlign: 'center',
                width: '100%',
                fontSize: '0.75rem',
                backgroundColor: '#f2efe1',
                fontWeight: 'bold'
            },
            children: item.name
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/EffectItem.js",
            lineNumber: 85,
            columnNumber: 106
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/EffectItem.js",
        lineNumber: 85,
        columnNumber: 33
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    const maxPopoverHeight = document.documentElement.style.getPropertyValue('--screen-modal-body-height-60');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: outline,
        style: {
            width: '10.5rem',
            height: height,
            filter: filter
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    width: 'auto',
                    cursor: "pointer",
                    height: picHeight,
                    padding: imPadding
                },
                src: getPicture(item.imName),
                alt: item.imName,
                priority: true,
                onClick: cardClick
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/EffectItem.js",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            head,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                onClick: cardClick,
                style: {
                    cursor: "pointer"
                },
                className: "ps-1 pe-1 p-0 mb-1",
                children: boosts
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/EffectItem.js",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Footer, {
                className: "p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$InfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: item.gameId,
                    title: item.name,
                    sign: "?",
                    className: "d-flex justify-content-end",
                    popoverBodyStyle: {
                        maxHeight: maxPopoverHeight,
                        overflow: 'auto'
                    },
                    headerBuilder: getPopoverInfoHeader,
                    bodyBuilder: getPopoverInfoBody,
                    placement: "top"
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/EffectItem.js",
                    lineNumber: 99,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/EffectItem.js",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/src/boostStuff/EffectItem.js",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}, "qAm2XdbEHEH1dqpZbyT58ULXwiU=")), "qAm2XdbEHEH1dqpZbyT58ULXwiU=");
_c1 = EffectItem;
const __TURBOPACK__default__export__ = EffectItem;
var _c, _c1;
__turbopack_refresh__.register(_c, "EffectItem$memo");
__turbopack_refresh__.register(_c1, "EffectItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/EffectItems.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/EffectItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function couple(key, categoryName, foodPref, setFoodPref, player, first, second, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched) {
    if (first === null && second === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else if (second === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "p-0 ms-1 me-1 m-0 d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pb-2 m-auto",
                direction: "horizontal",
                gap: 2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    categoryName: categoryName,
                    foodPref: foodPref,
                    setFoodPref: setFoodPref,
                    player: player,
                    item: first,
                    height: cardHeight,
                    picHeight: picHeight,
                    imPadding: imPadding,
                    items: items,
                    setItems: setItems,
                    colorName: colorName,
                    colorValue: colorValue,
                    getPicture: getPicture,
                    useHeader: useHeader,
                    stuffBoost: stuffBoost,
                    setStuffBoost: setStuffBoost,
                    maxRows: maxRows,
                    setConsumableTouched: setConsumableTouched
                }, first.id, false, {
                    fileName: "[project]/src/boostStuff/EffectItems.js",
                    lineNumber: 16,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/EffectItems.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, key, false, {
            fileName: "[project]/src/boostStuff/EffectItems.js",
            lineNumber: 14,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-0 ms-1 me-1 m-0 d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "pb-2 m-auto",
            direction: "horizontal",
            gap: 2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    categoryName: categoryName,
                    foodPref: foodPref,
                    setFoodPref: setFoodPref,
                    player: player,
                    item: first,
                    height: cardHeight,
                    picHeight: picHeight,
                    imPadding: imPadding,
                    items: items,
                    setItems: setItems,
                    colorName: colorName,
                    colorValue: colorValue,
                    getPicture: getPicture,
                    useHeader: useHeader,
                    stuffBoost: stuffBoost,
                    setStuffBoost: setStuffBoost,
                    maxRows: maxRows,
                    setConsumableTouched: setConsumableTouched
                }, first.id, false, {
                    fileName: "[project]/src/boostStuff/EffectItems.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    categoryName: categoryName,
                    foodPref: foodPref,
                    setFoodPref: setFoodPref,
                    player: player,
                    item: second,
                    height: cardHeight,
                    picHeight: picHeight,
                    imPadding: imPadding,
                    items: items,
                    setItems: setItems,
                    colorName: colorName,
                    colorValue: colorValue,
                    getPicture: getPicture,
                    useHeader: useHeader,
                    stuffBoost: stuffBoost,
                    setStuffBoost: setStuffBoost,
                    maxRows: maxRows,
                    setConsumableTouched: setConsumableTouched
                }, second.id, false, {
                    fileName: "[project]/src/boostStuff/EffectItems.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/boostStuff/EffectItems.js",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, key, false, {
        fileName: "[project]/src/boostStuff/EffectItems.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
const EffectItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function EffectItems({ categoryName, foodPref, setFoodPref, player, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched }) {
    console.log("EffectItems " + categoryName);
    const size = items.length;
    let k = 0;
    let rItems = [];
    let key = 0;
    while(size > 0 && true){
        const item1 = items[k++];
        let item2 = null;
        if (k < size) {
            item2 = items[k++];
        }
        rItems.push(couple(key++, categoryName, foodPref, setFoodPref, player, item1, item2, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched));
        if (k >= size) {
            break;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fluid: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "pb-0 mb-0",
            children: rItems
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/EffectItems.js",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/EffectItems.js",
        lineNumber: 49,
        columnNumber: 9
    }, this);
});
_c1 = EffectItems;
const __TURBOPACK__default__export__ = EffectItems;
var _c, _c1;
__turbopack_refresh__.register(_c, "EffectItems$memo");
__turbopack_refresh__.register(_c1, "EffectItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/EffectView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EffectView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/EffectItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
;
function EffectView({ foodPref, setFoodPref, player, showStat, setShowStat, eventKey, categoryName, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched }) {
    const openStat = (e)=>{
        setShowStat(!showStat);
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: eventKey,
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
                                    children: categoryName
                                }, void 0, false, {
                                    fileName: "[project]/src/boostStuff/EffectView.js",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/boostStuff/EffectView.js",
                                lineNumber: 17,
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
                                fileName: "[project]/src/boostStuff/EffectView.js",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/boostStuff/EffectView.js",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/EffectView.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1 pb-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        categoryName: categoryName,
                        foodPref: foodPref,
                        setFoodPref: setFoodPref,
                        player: player,
                        items: items,
                        setItems: setItems,
                        colorName: colorName,
                        colorValue: colorValue,
                        cardHeight: cardHeight,
                        picHeight: picHeight,
                        imPadding: imPadding,
                        getPicture: getPicture,
                        useHeader: useHeader,
                        stuffBoost: stuffBoost,
                        setStuffBoost: setStuffBoost,
                        maxRows: maxRows,
                        setConsumableTouched: setConsumableTouched
                    }, void 0, false, {
                        fileName: "[project]/src/boostStuff/EffectView.js",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/EffectView.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/boostStuff/EffectView.js",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/EffectView.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = EffectView;
var _c;
__turbopack_refresh__.register(_c, "EffectView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/ANRow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function buildPopover() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                as: "h3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Team"
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/ANRow.js",
                    lineNumber: 14,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/ANRow.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "When 'Strange in numbers' is activated the calculator considers that you have at least one teammate and your teammates have mutations you have."
                    }, void 0, false, {
                        fileName: "[project]/src/boostStuff/ANRow.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Not all effects are presented in consumables section, usually only those whose values are important for damage. More comprehensive list of consumables with details can be seen under 'Main' section."
                    }, void 0, false, {
                        fileName: "[project]/src/boostStuff/ANRow.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/boostStuff/ANRow.js",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/boostStuff/ANRow.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
function qa() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rootClose: "true",
        trigger: "click",
        placement: "top",
        overlay: buildPopover(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "danger",
            children: "?"
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/ANRow.js",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/ANRow.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function ANRow({ player, setPlayer, boostDamage, setBoostDamage }) {
    function changeTeam(e) {
        player.team = !player.team;
        boostDamage.toft.displayed_value = player.team ? boostDamage.toft.value : 0.0;
        setPlayer({
            ...player
        });
        setBoostDamage({
            ...boostDamage
        });
    }
    const value = player.team && boostDamage.strange_in_numbers.is_used ? 25.0 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-2 pt-2 pb-2 ps-3 pe-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '2.5rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                                    onChange: changeTeam,
                                    checked: player.team
                                }, void 0, false, {
                                    fileName: "[project]/src/boostStuff/ANRow.js",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/boostStuff/ANRow.js",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '6.9rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "👨‍👩‍👧‍👦 Team"
                                }, void 0, false, {
                                    fileName: "[project]/src/boostStuff/ANRow.js",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/boostStuff/ANRow.js",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            qa(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '4.6rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge bg-info",
                                    style: {
                                        width: '3rem'
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/src/boostStuff/ANRow.js",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/boostStuff/ANRow.js",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/boostStuff/ANRow.js",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/ANRow.js",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/ANRow.js",
                lineNumber: 42,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/ANRow.js",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/ANRow.js",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = ANRow;
const __TURBOPACK__default__export__ = ANRow;
var _c;
__turbopack_refresh__.register(_c, "ANRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/General.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$ANRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/ANRow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/additionalDamage/ADRow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/*
const marks100 = {
    marks: {
        5: '5',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100'
    },
    min: 5,
    max: 100,
    step: 0.25,
    defaultValue: 5,
};
*/ const marks50 = {
    marks: {
        5: '5',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
    },
    min: 5,
    max: 50,
    step: 0.25,
    defaultValue: 5
};
const marksH = {
    marks: {
        5: '5%',
        20: {
            style: {
                color: '#f50'
            },
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "20%"
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/General.js",
                lineNumber: 48,
                columnNumber: 20
            }, this)
        },
        40: '40%',
        60: '60%',
        80: '80%',
        100: '100%'
    },
    min: 5,
    max: 100,
    step: 1,
    defaultValue: 100
};
const General = function General({ eventKey, categoryName, showStat, setShowStat, player, setPlayer, boostDamage, setBoostDamage, playerStats, setPlayerStats }) {
    const openStat = (e)=>{
        setShowStat(!showStat);
        e.stopPropagation();
    };
    function updateAdditionalDamages() {
        setPlayerStats({
            ...playerStats
        });
    }
    ;
    function changeHealth() {
        boostDamage.nerd_rage.displayed_value = boostDamage.nerd_rage.is_used && player.health.value <= 20.0 ? boostDamage.nerd_rage.value : 0.0;
        setPlayer({
            ...player
        });
        setBoostDamage({
            ...boostDamage
        });
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: eventKey,
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
                                    children: categoryName
                                }, void 0, false, {
                                    fileName: "[project]/src/boostStuff/General.js",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/boostStuff/General.js",
                                lineNumber: 83,
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
                                fileName: "[project]/src/boostStuff/General.js",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/boostStuff/General.js",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/General.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1 pb-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fluid: true,
                        className: "ps-0 pe-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-center mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                className: "pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$ANRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        player: player,
                                        setPlayer: setPlayer,
                                        boostDamage: boostDamage,
                                        setBoostDamage: setBoostDamage
                                    }, void 0, false, {
                                        fileName: "[project]/src/boostStuff/General.js",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        additionalDamage: player.health,
                                        updateAdditionalDamages: changeHealth,
                                        marks: marksH
                                    }, void 0, false, {
                                        fileName: "[project]/src/boostStuff/General.js",
                                        lineNumber: 94,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$additionalDamage$2f$ADRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        additionalDamage: playerStats.strength,
                                        updateAdditionalDamages: updateAdditionalDamages,
                                        marks: marks50
                                    }, void 0, false, {
                                        fileName: "[project]/src/boostStuff/General.js",
                                        lineNumber: 95,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/boostStuff/General.js",
                                lineNumber: 92,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/boostStuff/General.js",
                            lineNumber: 91,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/boostStuff/General.js",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/General.js",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/boostStuff/General.js",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/General.js",
        lineNumber: 79,
        columnNumber: 9
    }, this);
};
_c = General;
const __TURBOPACK__default__export__ = General;
var _c;
__turbopack_refresh__.register(_c, "General");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/boostStuff/BoostStuff.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/EffectView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$General$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/General.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/BoostStuffProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$LoadingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/LoadingModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript)");
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
function buildLicense() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                as: "h3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Licensing"
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/BoostStuff.js",
                    lineNumber: 19,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                children: "Image files from 'Magazines' / 'Bobble Heads' / 'Chemicals' / 'Food' / 'Drink' / 'Serums' / 'Others' sections were taken from the video game Fallout 76 or from websites created and owned by Bethesda Softworks, the copyright of which is held by Bethesda Softworks, or were released to the press for promotional purposes by the same. The use of images to illustrate items of the game concerning the subject of the images in question is believed to qualify as fair use under United States copyright law, as such display does not significantly impede the right of the copyright holder to sell the copyrighted material and is not being used to generate profit."
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/boostStuff/BoostStuff.js",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
function getInfo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "center-text",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            rootClose: "true",
            trigger: "click",
            placement: "top",
            overlay: buildLicense(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "black",
                pill: true,
                children: "!"
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/boostStuff/BoostStuff.js",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/boostStuff/BoostStuff.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
const BoostStuff = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function BoostStuff({ foodPref, setFoodPref, magazines, setMagazines, bobbleHeads, setBobbleHeads, food, setFood, drink, setDrink, psycho, setPsycho, serum, setSerum, others, setOthers, player, setPlayer, stuffBoost, setStuffBoost, showStat, setShowStat, boostDamage, setBoostDamage, playerStats, setPlayerStats, setConsumableTouched }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function onClick(e) {
        setLoading(true);
        setTimeout(()=>{
            player.health.value = 100;
            player.team = false;
            setPlayer({
                ...player
            });
            playerStats.luck.value = 1;
            playerStats.strength.value = 5;
            setPlayerStats({
                ...playerStats
            });
            const [foodPref, allStuffBoosts, consumables] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].buildFromList([], player);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers);
            setFoodPref({
                ...foodPref
            });
            setStuffBoost({
                ...allStuffBoosts
            });
            setLoading(false);
        }, 100);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$LoadingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: loading
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ps-3 pe-3 mb-2",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leftRight2"])(getInfo(), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "sm",
                    variant: "warning",
                    onClick: onClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        className: "best-button-shadow",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/boostStuff/BoostStuff.js",
                        lineNumber: 63,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/boostStuff/BoostStuff.js",
                    lineNumber: 63,
                    columnNumber: 40
                }, this))
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$General$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "0",
                categoryName: "General",
                showStat: showStat,
                setShowStat: setShowStat,
                player: player,
                setPlayer: setPlayer,
                boostDamage: boostDamage,
                setBoostDamage: setBoostDamage,
                playerStats: playerStats,
                setPlayerStats: setPlayerStats
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "1",
                player: player,
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Magazines",
                items: magazines,
                setItems: setMagazines,
                colorName: "orange",
                colorValue: "orange",
                cardHeight: '17.2rem',
                picHeight: '12rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMagazine"],
                useHeader: false,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 2,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "2",
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Bobble Heads",
                items: bobbleHeads,
                setItems: setBobbleHeads,
                colorName: "blue",
                colorValue: "blue",
                cardHeight: '13.4rem',
                picHeight: '8rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBobbleHead"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 1,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "3",
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Chemicals",
                items: psycho,
                setItems: setPsycho,
                colorName: "magenta",
                colorValue: "magenta",
                cardHeight: '16.9rem',
                picHeight: '8.5rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPsycho"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 3,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "4",
                foodPref: foodPref,
                player: player,
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Food",
                items: food,
                setItems: setFood,
                colorName: "volcano",
                colorValue: "volcano",
                cardHeight: '14.3rem',
                picHeight: '9rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFood"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 1,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "5",
                player: player,
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Drink",
                items: drink,
                setItems: setDrink,
                colorName: "volcano",
                colorValue: "volcano",
                cardHeight: '15.9rem',
                picHeight: '9rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDrink"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 2,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "6",
                foodPref: foodPref,
                setFoodPref: setFoodPref,
                player: player,
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Serums",
                items: serum,
                setItems: setSerum,
                colorName: "green",
                colorValue: "green",
                cardHeight: '14.7rem',
                picHeight: '8rem',
                imPadding: "1rem 2.5rem",
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSerum"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 2,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$EffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: "7",
                showStat: showStat,
                setShowStat: setShowStat,
                categoryName: "Others",
                items: others,
                setItems: setOthers,
                colorName: "default",
                colorValue: "indigo",
                cardHeight: '13.3rem',
                picHeight: '8rem',
                getPicture: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOther"],
                useHeader: true,
                stuffBoost: stuffBoost,
                setStuffBoost: setStuffBoost,
                maxRows: 1,
                setConsumableTouched: setConsumableTouched
            }, void 0, false, {
                fileName: "[project]/src/boostStuff/BoostStuff.js",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/boostStuff/BoostStuff.js",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=")), "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");
_c1 = BoostStuff;
const __TURBOPACK__default__export__ = BoostStuff;
var _c, _c1;
__turbopack_refresh__.register(_c, "BoostStuff$memo");
__turbopack_refresh__.register(_c1, "BoostStuff");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EStuffBoost.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "applyBoost": (()=>applyBoost),
    "applyStuff": (()=>applyStuff),
    "convertStuffBoost": (()=>convertStuffBoost),
    "loadBoosts": (()=>loadBoosts),
    "prepareItems": (()=>prepareItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/BoostFunctions.js [app-client] (ecmascript)");
;
function convertStuffBoost(stuffBoost) {
    const result = new Set();
    collectBoosts(result, stuffBoost.creature);
    collectBoosts(result, stuffBoost.weapon);
    return Array.from(result);
}
function collectBoosts(result, boosts) {
    boosts.forEach((value, key)=>{
        for(let i = 0; i < value.length; i++){
            result.add(value[i].parentId);
        }
    });
}
function prepareItems(items, loadedStuff = null) {
    for(let i = 0; i < items.length; i++){
        const item = items[i];
        item.index = i;
        if (loadedStuff && loadedStuff.has(item.id)) {
            item.used = true;
        } else {
            item.used = false;
        }
    }
}
function applyBoost(foodPref, item, stuffBoost, player, anyway) {
    let result = false;
    for(let i = 0; i < item.boosts.length; i++){
        let boost = item.boosts[i];
        const funcUsed = boost.func && boost.func.length > 0;
        if (anyway || funcUsed) {
            let id = item.id + "_" + i;
            if (boost.id) {
                id = boost.id;
            }
            result = true;
            if (funcUsed) {
                if (item.type === "Meet" || item.type === "Plant") {
                    boost.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functions"][boost.func](player, boost.defValue, foodPref, item.type);
                } else if (boost.defValue) {
                    boost.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functions"][boost.func](player, boost.defValue);
                } else {
                    boost.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$BoostFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functions"][boost.func](player);
                }
            }
            boost.parentId = item.id;
            const stuff = stuffBoost[boost.category];
            const things = stuff.get(id);
            // Add things from the same category to apply the best (between Whiskey and Vodka the first will be applied)
            if (things) {
                things.push(boost);
                stuff.set(id, things);
            } else {
                stuff.set(id, [
                    boost
                ]);
            }
        }
    }
    return result;
}
function loadBoosts(magazines, bobbles, food, drink, psycho, serums, others, foodPref, player) {
    const stuffBoost = {
        creature: new Map(),
        weapon: new Map()
    };
    applyAllStuff(foodPref, magazines, stuffBoost, player);
    applyAllStuff(foodPref, bobbles, stuffBoost, player);
    applyAllStuff(foodPref, food, stuffBoost, player);
    applyAllStuff(foodPref, drink, stuffBoost, player);
    applyAllStuff(foodPref, psycho, stuffBoost, player);
    applyAllStuff(foodPref, serums, stuffBoost, player);
    applyAllStuff(foodPref, others, stuffBoost, player);
    return stuffBoost;
}
function applyAllStuff(foodPref, items, stuffBoost, player) {
    for(let i = 0; i < items.length; i++){
        applyStuff(foodPref, items[i], stuffBoost, player);
    }
}
function deleteBoost(item, stuffBoost) {
    for(let i = 0; i < item.boosts.length; i++){
        let boost = item.boosts[i];
        let id = item.id + "_" + i;
        if (boost.id) {
            id = boost.id;
        }
        let stuff = stuffBoost[boost.category].get(id);
        if (!stuff) {
            return;
        }
        const remainStuff = stuff.filter((b)=>b.parentId !== item.id);
        if (!remainStuff || remainStuff.length === 0) {
            stuffBoost[boost.category].delete(id);
        } else {
            stuffBoost[boost.category].set(id, remainStuff);
        }
    }
}
function applyStuff(foodPref, item, stuffBoost, player) {
    if (item.used) {
        applyBoost(foodPref, item, stuffBoost, player, true);
    } else {
        deleteBoost(item, stuffBoost);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/ECreatures.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildCreature": (()=>buildCreature),
    "buildCreatureNames": (()=>buildCreatureNames),
    "defaultCreatures": (()=>defaultCreatures),
    "defaultCreaturesAlt": (()=>defaultCreaturesAlt),
    "getAverageTime": (()=>getAverageTime),
    "getAverageTimeMillis": (()=>getAverageTimeMillis),
    "getCreatureByName": (()=>getCreatureByName),
    "getCreatureTime": (()=>getCreatureTime),
    "getDummy": (()=>getDummy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
;
;
function getAverageTimeMillis(creatures) {
    if (!creatures) {
        return 0;
    }
    const sum = parseInt(creatures.creature1.lifeTime) + parseInt(creatures.creature2.lifeTime) + parseInt(creatures.creature3.lifeTime) + parseInt(creatures.creature4.lifeTime);
    if (sum === 0) {
        return 0;
    }
    const result = parseInt(sum / 4.0);
    return result ? result : Infinity;
}
function getAverageTime(creatures) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(getAverageTimeMillis(creatures));
}
function getCreatureTime(creature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(creature.lifeTime);
}
function getDummy(creature) {
    const dummy = buildCreature(creature.name, creature.level, creature.fieldName);
    dummy.h = 1000000000000;
    dummy.curBody = creature.curBody;
    dummy.headShot = creature.headShot;
    dummy.bodyShot = creature.bodyShot;
    dummy.averageShot = creature.averageShot;
    dummy.damageReduction = creature.damageReduction;
    dummy.damageReductionOnlyNotBleeding = creature.damageReductionOnlyNotBleeding;
    return dummy;
}
function buildDefCreature(name, fieldName) {
    return {
        name: name,
        fieldName: fieldName,
        capName: "",
        b: 1.0,
        e: 1.0,
        f: 1.0,
        p: 1.0,
        c: 1.0,
        r: 1.0,
        h: 100,
        damageReduction: 0.0,
        damageReductionOnlyNotBleeding: false,
        headShot: 1,
        bodyShot: 1,
        averageShot: 1,
        curBody: "",
        defBody: "",
        bodyParts: {},
        tags: [],
        level: 1,
        immuneToPoison: false,
        immuneToRadiation: false,
        damageToCreature: 0,
        totalDamage: 0.0,
        normalDamage: 0.0,
        headShotDamage: 0.0,
        headExpShotDamage: 0.0,
        critNormalDamage: 0.0,
        critHeadNormalDamage: 0.0,
        explosiveDamage: 0.0,
        critExplosiveDamage: 0.0,
        critExplosiveHeadDamage: 0.0,
        averageHit: 0.0,
        maxHit: 0.0,
        sneak: 0,
        crit: 0,
        dps: 0.0,
        ammo: Infinity,
        reloads: 0.0,
        reloadsTime: 0.0,
        lifeTime: Infinity
    };
}
function getCreatureByName(creatures, name) {
    for(const fieldName in creatures){
        const creature = creatures[fieldName];
        if (creature.name === name) {
            return creature;
        }
    }
    return null;
}
function defaultCreatures() {
    return {
        creature1: buildCreature("scorchbeastqueen", "Max", "creature1"),
        creature2: buildCreature("wendigocolossus", "Max", "creature2"),
        creature3: buildCreature("ultraciteabomination", "Max", "creature3"),
        creature4: buildCreature("stormboss", "Max", "creature4")
    };
}
function defaultCreaturesAlt() {
    return {
        creature1: buildCreature("scorchbeastqueen(alt)", "Max", "creature1"),
        creature2: buildCreature("wendigocolossus(alt)", "Max", "creature2"),
        creature3: buildCreature("ultraciteabomination(alt)", "Max", "creature3"),
        creature4: buildCreature("stormboss", "Max", "creature4")
    };
}
function buildCreatureNames(creatures) {
    return {
        creature1: [
            creatures.creature1.name,
            creatures.creature1.level,
            creatures.creature1.tags,
            creatures.creature1.curBody
        ],
        creature2: [
            creatures.creature2.name,
            creatures.creature2.level,
            creatures.creature2.tags,
            creatures.creature2.curBody
        ],
        creature3: [
            creatures.creature3.name,
            creatures.creature3.level,
            creatures.creature3.tags,
            creatures.creature3.curBody
        ],
        creature4: [
            creatures.creature4.name,
            creatures.creature4.level,
            creatures.creature4.tags,
            creatures.creature4.curBody
        ]
    };
}
function buildCreature(name, level, fieldName) {
    const creature = buildDefCreature(name, fieldName);
    if (level === 'Max') {
        level = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getMaxLevel(name);
    } else {
        level = parseInt(level);
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureParametersByName(name, level);
    creature.name = name;
    creature.capName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(name);
    if (creature.name.includes("scorch")) {
        creature.defBody = "scorched";
    } else if (creature.name.includes("glow")) {
        creature.defBody = "glowing";
    } else {
        creature.defBody = "normal";
    }
    creature.curBody = creature.defBody;
    creature.level = level;
    creature.tags = result.tags;
    creature.headShot = result.headMult;
    creature.bodyShot = result.normalMult;
    creature.averageShot = parseFloat(result.averageMult.toFixed(2));
    creature.damageReduction = result.reduction;
    creature.immuneToPoison = result.immuneToPoison;
    creature.immuneToRadiation = result.immuneToRad;
    creature.damageReductions = result.reductions;
    creature.damageReductionOnlyNotBleeding = result.reductionOnlyNotBleeding;
    creature.bodyParts = result.body;
    creature.bodyParts.average = {
        name: 'Average',
        damage_mult: creature.averageShot
    };
    if (result.physical) {
        creature.b = result.physical;
        creature.e = result.energy;
        creature.f = result.fire;
        creature.p = result.poison;
        creature.c = result.cold;
        creature.r = result.radiation;
        creature.h = result.health;
    }
    return creature;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/ExtraDamageOptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultExtraDamage": (()=>defaultExtraDamage)
});
function defaultExtraDamage() {
    return {
        useCrit: false,
        useSneak: false,
        useHead: false,
        critFreq: 4.0,
        headFreq: 80
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EBoosts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultBoosts": (()=>defaultBoosts)
});
function defaultBoosts() {
    return {
        bloody_mess: {
            id: [
                "00073680"
            ],
            name: "Bloody Mess",
            value: 5.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                5.0,
                10.0,
                15.0
            ],
            x: 1,
            max_x: 1,
            category: "Luck",
            info: "{1}% bonus damage means enemies may explode into a gory red paste.",
            cost: [
                1,
                2,
                3
            ],
            im_name: "bloody_mess"
        },
        adrenaline: {
            id: [
                "00397cc5"
            ],
            name: "Adrenaline",
            value: 6.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                6.0,
                7.0,
                8.0,
                9.0,
                10.0
            ],
            x: 1,
            max_x: 6,
            category: "Agility",
            info: "Gain {1}% damage for 30s per kill. Duration refreshes with kills.",
            cost: [
                1,
                2,
                3,
                4,
                5
            ],
            im_name: "adrenaline"
        },
        toft: {
            id: [
                "005a59c6"
            ],
            name: "TOFT",
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10.0,
                20.0,
                30.0,
                40.0
            ],
            x: 1,
            max_x: 1,
            category: "Legendary",
            info: "Enemies take {1}% more damage when they attack you, if you're on a team.",
            cost: [
                1,
                2,
                3,
                4
            ],
            im_name: "toft"
        },
        tenderizer: {
            name: "Tenderizer",
            id: [
                "003e2202"
            ],
            value: 5.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                5.0,
                7.0,
                10.0
            ],
            x: 1,
            max_x: 4,
            category: "Charisma",
            info: "Make your target receive {1}% more damage for {1} seconds after you attack.",
            cost: [
                1,
                2,
                3
            ],
            im_name: "tenderizer"
        },
        glow_sight: {
            name: "Glow Sight",
            id: [
                "00393f65"
            ],
            value: 20.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                20.0,
                40.0,
                60.0
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                3
            ],
            info: "Deal +{1}% damage to glowing enemies.",
            im_name: "glow_sight"
        },
        gun_fu: {
            name: "Gun Fu",
            id: [
                "003701bf"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10.0,
                30.0,
                60.0
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2,
                3
            ],
            info: "V.A.T.S. swaps targets on kill with +{1}% damage to your next target.",
            im_name: "gun_fu"
        },
        incisor: {
            name: "Incisor",
            id: [
                "003de58e"
            ],
            value: 25.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                25.0,
                50.0,
                75.0
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                3
            ],
            info: "Your melee weapons ignore {1}% of your target's armor.",
            im_name: "incisor"
        },
        bow_before_me: {
            name: "Bow Before Me",
            id: [
                "00563b9b"
            ],
            value: 12.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                12.0,
                24.0,
                36.0
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                3
            ],
            info: "Your bows and crossbows ignore {1}% armor and have a {2}% chance to stagger.",
            im_name: "bow_before_me"
        },
        exterminator: {
            name: "Exterminator",
            id: [
                "0032da6e"
            ],
            value: 25.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                25.0,
                50.0,
                75.0
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                3
            ],
            info: "Your attacks ignore {1}% armor of any insect.",
            im_name: "exterminator"
        },
        tank_killer: {
            name: "Tank Killer",
            id: [
                "001d6251"
            ],
            value: 12.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                12.0,
                24.0,
                36.0
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                3
            ],
            info: "Your rifles and pistols ignore {1}% armor and have a {2}% chance to stagger.",
            im_name: "tank_killer"
        },
        stabilized: {
            name: "Stabilized",
            id: [
                "00320167"
            ],
            value: 15.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                15.0,
                30.0,
                45.0
            ],
            x: 1,
            max_x: 1,
            category: "Intelligence",
            cost: [
                1,
                2,
                3
            ],
            info: "In Power Armor, heavy guns gain more accuracy and ignore {1}% armor.",
            im_name: "stabilized"
        },
        covert_operative: {
            name: "Covert Operative",
            id: [
                "002ebd26"
            ],
            value: 2.15,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                2.15,
                2.3,
                2.5
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2,
                3
            ],
            info: "Your ranged sneak attacks do {1}x normal damage.",
            im_name: "covert_operative"
        },
        mister_sandman: {
            name: "Mister Sandman",
            id: [
                "0032992f"
            ],
            value: 50.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                50.0,
                100.0
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2
            ],
            info: "At night your silenced weapons do an additional {1}% sneak attack damage.",
            im_name: "mister_sandman"
        },
        ninja: {
            name: "Ninja",
            id: [
                "0025a7f9"
            ],
            value: 30.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                30.0,
                60.0,
                90.0
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2,
                3
            ],
            info: "Sneak attacks with melee weapons do an additional {1}% sneak attack damage.",
            im_name: "ninja"
        },
        follow_through: {
            name: "Follow Through",
            id: [
                "005a5d68"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10.0,
                20.0,
                30.0,
                40.0
            ],
            x: 1,
            max_x: 1,
            category: "Legendary",
            cost: [
                1,
                2,
                3,
                4
            ],
            info: "Ranged sneak damage increases damage to target by {1}% for 10 seconds.",
            im_name: "follow_through"
        },
        demolition_expert: {
            name: "Demolition Expert",
            id: [
                "003440b9"
            ],
            value: 20.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                20.0,
                30.0,
                40.0,
                50.0,
                60.0
            ],
            x: 1,
            max_x: 1,
            category: "Intelligence",
            cost: [
                1,
                2,
                3,
                4,
                5
            ],
            info: "Your explosives do +{1}% damage",
            im_name: "demolition_expert"
        },
        science: {
            name: "Science",
            id: [
                "003440c4",
                "003440c5",
                "003440c6"
            ],
            value: 5.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                5.0,
                10.0,
                15.0,
                20.0,
                25.0,
                30.0
            ],
            x: 1,
            max_x: 1,
            category: "Intelligence",
            cost: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            info: "Energy damage gains +{1}% bonus.",
            im_name: "science"
        },
        better_criticals: {
            name: "Better Criticals",
            id: [
                "00287cd5"
            ],
            value: 50.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                50.0,
                75.0,
                100.0
            ],
            x: 1,
            max_x: 1,
            category: "Luck",
            cost: [
                1,
                2,
                3
            ],
            info: "V.A.T.S. criticals now do +{1}% damage.",
            im_name: "better_criticals"
        },
        nerd_rage: {
            name: "Nerd Rage",
            id: [
                "0025a22f"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10.0,
                15.0,
                20.0
            ],
            x: 1,
            max_x: 1,
            category: "Intelligence",
            cost: [
                1,
                2,
                3
            ],
            info: "While below 20% Health, gain {3} Damage Resist, {1}% damage and 15% AP regen.",
            im_name: "nerd_rage"
        },
        lock_and_load: {
            name: "Lock And Load",
            id: [
                "0032016b"
            ],
            value: 20.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                20,
                40,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                3
            ],
            info: "Heavy guns reload +{1}% faster.",
            im_name: "lock_and_load"
        },
        martial_artist: {
            name: "Martial Artist",
            id: [
                "003e996d"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                20,
                30
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                3
            ],
            info: "Your melee weapons weight {3}% less, and you can swing them {1}% faster.",
            im_name: "martial_artist"
        },
        scattershot: {
            name: "Scattershot",
            id: [
                "0032235e"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                20,
                30
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                3
            ],
            info: "Shotguns now weight {4}% less and you reload them {1}% faster.",
            im_name: "scattershot"
        },
        ground_pounder: {
            name: "Ground Pounder",
            id: [
                "000907e5"
            ],
            value: 10.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                20,
                30
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                3
            ],
            info: "Automatic rifles now reload {1}% faster and have better hip fire accuracy.",
            im_name: "ground_pounder"
        },
        party_girl_boy: {
            name: "Party Girl / Boy",
            id: [
                "000525df"
            ],
            value: 2.0,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                2,
                3
            ],
            x: 1,
            max_x: 1,
            category: "Charisma",
            cost: [
                2,
                3
            ],
            info: "The effects of alcohol are {1}x.",
            im_name: "party_girl_boy"
        },
        power_user: {
            name: "Power User",
            id: [
                "0027a876"
            ],
            value: 130,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                130,
                160,
                200
            ],
            x: 1,
            max_x: 1,
            category: "Intelligence",
            cost: [
                1,
                2,
                3
            ],
            info: "Fusion Cores now last {1}% longer.",
            im_name: "power_user"
        },
        strange_in_numbers: {
            name: "Strange In Nums",
            id: [
                "003860b7"
            ],
            value: 25,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                25
            ],
            x: 1,
            max_x: 1,
            category: "Charisma",
            cost: [
                1
            ],
            info: "Positive mutation effects are {1}% stronger if teammates are mutated too.",
            im_name: "strange_in_numbers"
        },
        class_freak: {
            name: "Class Freak",
            id: [
                "00391f13"
            ],
            value: 25,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                25,
                50,
                75
            ],
            x: 1,
            max_x: 1,
            category: "Luck",
            cost: [
                1,
                2,
                3
            ],
            info: "The negative effects of your mutations are reduced by {1}%.",
            im_name: "class_freak"
        },
        gladiator: {
            name: "Gladiator",
            id: [
                "003440ad"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your one-handed melee weapons now do +{1}% damage.",
            im_name: "gladiator"
        },
        heavy_gunner: {
            name: "Heavy Gunner",
            id: [
                "0031af17",
                "0031af18",
                "001c9d2e"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your non-explosive heavy guns now do +{1}% damage.",
            im_name: "heavy_gunner"
        },
        shotgunner: {
            name: "Shotgunner",
            id: [
                "00202049",
                "00223bab",
                "00202047"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your shotguns now do +{1}% damage.",
            im_name: "shotgunner"
        },
        slugger: {
            name: "Slugger",
            id: [
                "0025a233",
                "00520bd8",
                "00520bd9"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your two-handed melee weapons now do +{1}% damage.",
            im_name: "slugger"
        },
        iron_fist: {
            name: "Iron Fist",
            id: [
                "0035206d"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20
            ],
            x: 1,
            max_x: 1,
            category: "Strength",
            cost: [
                1,
                2,
                3
            ],
            info: "Your punching attacks now do +{1}% damage.",
            im_name: "iron_fist"
        },
        archer: {
            name: "Archer",
            id: [
                "00563b8f",
                "00563b93",
                "00563b97"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your bows and crossbows now do +{1}% damage.",
            im_name: "archer"
        },
        commando: {
            name: "Commando",
            id: [
                "0031aef6",
                "0031aef7",
                "00005272"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Basic combat training means automatic rifles do +{1}% damage.",
            im_name: "commando"
        },
        rifleman: {
            name: "Rifleman",
            id: [
                "000907c9",
                "002ebd2b",
                "002ebd31"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Perception",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your non-automatic rifles now do +{1}% damage.",
            im_name: "rifleman"
        },
        guerrilla: {
            name: "Guerrilla",
            id: [
                "0031af0d",
                "0031af0e",
                "0031af0f"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your automatic pistols now do +{1}% damage",
            im_name: "guerrilla"
        },
        gunslinger: {
            name: "Gunslinger",
            id: [
                "0031aef8",
                "0031aef9",
                "0025a792"
            ],
            value: 10,
            is_used: false,
            displayed_value: 0.0,
            rank: 1,
            rank_values: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60
            ],
            x: 1,
            max_x: 1,
            category: "Agility",
            cost: [
                1,
                2,
                2,
                3,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            info: "Your non-automatic pistols now do +{1}% damage.",
            im_name: "gunslinger"
        },
        special: {
            strength: 0,
            perception: 0,
            endurance: 0,
            charisma: 0,
            intelligence: 0,
            agility: 0,
            luck: 0
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EPlayerStats.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultPlayerStats": (()=>defaultPlayerStats)
});
function defaultPlayerStats() {
    return {
        strength: {
            name: "Strength",
            value: 5.0
        },
        luck: {
            name: "Luck",
            value: 1.0
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EPlayer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultPlayer": (()=>defaultPlayer)
});
function defaultPlayer() {
    return {
        team: false,
        strange: 0.0,
        freak: 0.0,
        alcoholEffects: 1.0,
        health: {
            name: "Health",
            value: 100.0
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EAddDamages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultAdds": (()=>defaultAdds)
});
function defaultAdds() {
    return {
        tdb: {
            name: "TDB",
            value: 0.0,
            is_used: false
        },
        ballisticBDB: {
            name: "Ballistic BDB",
            value: 0.0,
            is_used: false
        },
        energyBDB: {
            name: "Energy BDB",
            value: 0.0,
            is_used: false
        },
        fireBDB: {
            name: "Fire BDB",
            value: 0.0,
            is_used: false
        },
        poisonBDB: {
            name: "Poison BDB",
            value: 0.0,
            is_used: false
        },
        coldBDB: {
            name: "Cold BDB",
            value: 0.0,
            is_used: false
        },
        radBDB: {
            name: "Rad BDB",
            value: 0.0,
            is_used: false
        },
        damageToCreature: {
            name: "Damage To Creature",
            value: 0.0,
            is_used: false
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/entities/EWeaponSpecs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertTemplateToSpecs": (()=>convertTemplateToSpecs),
    "defaultWeaponSpecs": (()=>defaultWeaponSpecs),
    "getDefaultLegs": (()=>getDefaultLegs),
    "isWeaponRanged": (()=>isWeaponRanged)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$CritView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/CritView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Strings.js [app-client] (ecmascript)");
;
;
;
;
;
;
const modParser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModParser"]();
function getDefaultLegs(legIds = null) {
    if (legIds) {
        return [
            [
                legIds[0],
                0,
                ""
            ],
            [
                legIds[1],
                0,
                ""
            ],
            [
                legIds[2],
                0,
                ""
            ],
            [
                legIds[3],
                0,
                ""
            ],
            [
                legIds[4],
                0,
                ""
            ]
        ];
    }
    return [
        [
            "",
            0,
            ""
        ],
        [
            "",
            0,
            ""
        ],
        [
            "",
            0,
            ""
        ],
        [
            "",
            0,
            ""
        ],
        [
            "",
            0,
            ""
        ]
    ];
}
function convertTemplateToSpecs(template, assignCurrentlyActiveUserLegendary = true) {
    let fireRate = template.isAuto[1] ? template.defRate : 10 / template.manualRate[1] / template.speed[1];
    fireRate = parseFloat(fireRate.toFixed(3));
    const defReloadTime = template.reloadTime[1] * template.reloadSpeed[1];
    let mods = [];
    for(const modCategoryName in template.allMods){
        if (modCategoryName.includes("Legendary")) {
            continue;
        }
        const categoryMods = template.allMods[modCategoryName];
        for(let j = 0; j < categoryMods.length; j++){
            if (categoryMods[j][1]) {
                let mod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().get(categoryMods[j][0]);
                mods.push({
                    group: modCategoryName,
                    id: mod.id,
                    name: mod.name
                });
                break;
            }
        }
    }
    const leg1 = template.legendary1.id ? template.legendary1.id : "";
    const leg2 = template.legendary2.id ? template.legendary2.id : "";
    const leg3 = template.legendary3.id ? template.legendary3.id : "";
    const leg4 = template.legendary4.id ? template.legendary4.id : "";
    const leg5 = template.legendary5.id ? template.legendary5.id : "";
    const legs = getDefaultLegs([
        leg1,
        leg2,
        leg3,
        leg4,
        leg5
    ]);
    let bonusMult = template.bonusMult[1] * 100;
    // As damage bonus multiplier can be adjusted by legendary it will be calculated separately, so we need to remove
    // this value from bonus multiplier
    bonusMult = replaceAdjustableLegs(legs, bonusMult);
    let creatures = [];
    for(let i = 0; i < template.creature.length; i++){
        const creature = template.creature[i];
        creatures.push({
            "name": creature.name,
            "value": creature.value
        });
    }
    const damages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectAllDamages"])(template);
    // Remove ignored (it can be useful later though (for now they are useless)
    const sortedDamages = [];
    let k = 0;
    for(let i = 0; i < damages.length; i++){
        const d = damages[i];
        if (!d.ignore) {
            d.index = k++;
            sortedDamages.push(d);
        }
    }
    const critDamagesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$CritView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCritDamages"])(template.crSpellId[1], template.id);
    let critDamages = [];
    for(let i = 0; i < critDamagesData.length; i++){
        const critDamageData = critDamagesData[i];
        for(let j = 0; j < critDamageData.length; j++){
            const critItem = critDamageData[j];
            critDamages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertDamageDataToDamageItem"])(critItem));
        }
    }
    let wSpec = {
        weaponId: template.id,
        shot_size: template.shotSize[1],
        defReloadTime: defReloadTime,
        reloadSpeed: template.reloadSpeed[1],
        fireRate: fireRate,
        is_auto: template.isAuto[1],
        hand: template.hand[1],
        ammoCapacity: template.capacity[1],
        speed: template.speed[1],
        totalD: template.totalD[1],
        aa: template.antiArmor[1],
        strengthBoost: template.strengthBoost[1],
        crit: template.crit[1],
        sneak: template.sneak[1],
        cripple: template.cripple[1],
        exp: template.exp[1],
        bonus: bonusMult,
        crippleChance: 50,
        creature: creatures,
        strPoints: template.strPoints[1],
        powerAttack: template.powerAttack[1],
        bash: template.bash[1],
        type: template.type[1],
        ammoType: {
            name: template.ammoType.name,
            type: template.ammoType.type,
            codeName: template.ammoType.codeName
        },
        level: template.level,
        defaultName: template.name,
        weaponName: template.name,
        chargeTime: template.chargeTime[1],
        maxChargeTime: template.chargeTime[1],
        iconName: template.iconName[template.type[1]],
        tags: template.tags,
        mods: mods,
        legendary: legs,
        damages: sortedDamages,
        critDamages: critDamages,
        legendaryHealthUpdated: false
    };
    if (assignCurrentlyActiveUserLegendary) {
        // Assign previous legs to not reset them if a weapon does not have legendary
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentLegendaryIds"].length; i++){
            if (legs[i][0] === "") {
                const current = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentLegendaryIds"][i];
                if (current[0] !== "") {
                    modParser.applyLegendaryModToWSpec(current[0], wSpec, i, 100, false, true);
                    legs[i] = [
                        current[0],
                        current[1],
                        current[2]
                    ];
                }
            }
        }
    }
    return wSpec;
}
function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        defReloadTime: 0,
        reloadSpeed: 1,
        fireRate: 20,
        is_auto: 1,
        hand: 1,
        ammoCapacity: 1,
        aa: 0,
        strengthBoost: 0,
        bonus: 0,
        crit: 0,
        speed: 1,
        sneak: 0,
        totalD: 0,
        chargeTime: 0,
        maxChargeTime: 0,
        cripple: 0,
        crippleChance: 50,
        bash: 0,
        strPoints: 0,
        powerAttack: 0,
        exp: 0,
        creature: [],
        level: 1,
        ammoType: {
            name: "",
            type: "",
            codeName: ""
        },
        defaultName: "Weapon",
        weaponName: "Weapon",
        iconName: "",
        weaponId: "",
        type: "All",
        tags: [],
        mods: [],
        legendary: getDefaultLegs(),
        damages: [],
        critDamages: [],
        legendaryHealthUpdated: true
    };
}
// TODO: get rid of hardcore values
// This workaround is acceptable only for 'Damage Bonus' as it has
// the special cell to be placed (only for legendary) because it can be adjusted by a user
function replaceAdjustableLegs(legs, bonusMult) {
    for(let i = 0; i < legs.length; i++){
        const leg = legs[i];
        switch(leg[0]){
            case '004f6aab':
            case '00606b71':
            case '004f6aae':
            case '004f6aa7':
                bonusMult -= 50;
                leg[1] = 50;
                leg[2] = "BDB";
                break;
            case '004f6aa0':
                bonusMult -= 95;
                leg[1] = 95;
                leg[2] = "BDB";
                break;
            case '0072a8c1':
            case '006069f2':
                bonusMult -= 24;
                leg[1] = 24;
                leg[2] = "BDB";
                break;
            case '00606b73':
            case '005299f5':
            case '004f6d76':
            case '00606c8d':
            case '0052414e':
                bonusMult -= 25;
                leg[1] = 25;
                leg[2] = "BDB";
                break;
            default:
                break;
        }
    }
    return bonusMult;
}
function isWeaponRanged(wSpec) {
    return !(wSpec.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Melee || wSpec.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Unarmed);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/RaceDataProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RaceDataProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/race.json (json)");
;
const raceMap = new Map();
for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__["default"].length; i++){
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__["default"][i];
    raceMap.set(item.id, item);
}
class RaceDataProvider {
    static getRaceById(id) {
        return raceMap.get(id);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/view/ChartView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>ChartView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const { Chart } = await __turbopack_require__("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
function getData(values, label, color) {
    return {
        datasets: [
            {
                label: label,
                data: values,
                borderColor: color,
                pointRadius: 1.5,
                borderWidth: 2,
                fill: false
            }
        ]
    };
}
function getConfig(data) {
    return {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Level',
                        color: 'black'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Resistance',
                        color: 'black'
                    }
                }
            }
        }
    };
}
function drawChart(config, chartId) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    new Chart(document.getElementById(chartId), config);
}
function getCanvas(id) {
    if (!id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: id
    }, void 0, false, {
        fileName: "[project]/src/race/view/ChartView.js",
        lineNumber: 68,
        columnNumber: 13
    }, this);
}
function ChartView(props) {
    _s();
    const config = getConfig(getData(props.values, props.title + " Resistance", props.color));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChartView.useEffect": ()=>{
            drawChart(config, props.chartId);
        }
    }["ChartView.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: props.className,
        style: {
            minWidth: '18rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: props.headerClassName,
                children: props.title
            }, void 0, false, {
                fileName: "[project]/src/race/view/ChartView.js",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "d-flex justify-content-center p-0",
                children: getCanvas(props.chartId)
            }, void 0, false, {
                fileName: "[project]/src/race/view/ChartView.js",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/race/view/ChartView.js",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_s(ChartView, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ChartView;
var _c;
__turbopack_refresh__.register(_c, "ChartView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/race/view/ResistanceView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>ResistanceView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/ChartView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
function buildResCols(res) {
    const result = [];
    for(const name in res){
        const cRes = res[name];
        const typeData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getStyle(name);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-center m-1",
                color: typeData[2],
                headerClassName: typeData[1],
                title: typeData[0],
                chartId: name,
                values: cRes.curve
            }, void 0, false, {
                fileName: "[project]/src/race/view/ResistanceView.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, name, false, {
            fileName: "[project]/src/race/view/ResistanceView.js",
            lineNumber: 14,
            columnNumber: 13
        }, this));
    }
    return result;
}
function ResistanceView(props) {
    if (!props.race || Object.keys(props.race.resistance).length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-3 mb-2",
                children: "Resistance"
            }, void 0, false, {
                fileName: "[project]/src/race/view/ResistanceView.js",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-center",
                children: buildResCols(props.race.resistance)
            }, void 0, false, {
                fileName: "[project]/src/race/view/ResistanceView.js",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = ResistanceView;
var _c;
__turbopack_refresh__.register(_c, "ResistanceView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/race/view/RaceTagView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RaceTagView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
;
;
;
;
function getTagView(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "m-0 ps-0 pe-0 d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "m-1 shadow-outline",
            bordered: true,
            color: "default",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceTagView.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceTagView.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, tag, false, {
        fileName: "[project]/src/race/view/RaceTagView.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
function RaceTagView({ tags }) {
    if (tags && tags.length > 0) {
        const result = [];
        for(let i = 0; i < tags.length; i++){
            result.push(getTagView(tags[i]));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-3 mb-1",
                    children: "Tags"
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceTagView.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceTagView.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = RaceTagView;
var _c;
__turbopack_refresh__.register(_c, "RaceTagView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/view/RaceBodyView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RaceBodyView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/StringHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
;
;
;
;
;
// const colors = ["volcano", "red", "magenta", "blue", "purple"];
function getColTagView(tag, index, position = "center") {
    // colors[getRandomNumber(colors.length)]
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "m-1 ps-0 pe-0 d-flex justify-content-" + position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "m-0 shadow-outline",
            bordered: true,
            color: "purple",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceBodyView.js",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceBodyView.js",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, tag + index, false, {
        fileName: "[project]/src/race/view/RaceBodyView.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
function getTagView(tag, index, position, color) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-0 ps-0 pe-0 d-flex justify-content-" + position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "shadow-outline m-1",
            bordered: true,
            color: color,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceBodyView.js",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceBodyView.js",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/race/view/RaceBodyView.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
function RaceBodyView({ bodyData }) {
    const body = bodyData.body;
    if (body) {
        const result = [];
        let index = 0;
        for(const partName in body){
            index += 1;
            const part = body[partName];
            const partText = part.name + " ‣ " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToString"])(part.damage_mult, 2) + "x";
            result.push(getColTagView(partText, index, "center"));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-4 mb-1",
                    children: "Body Damage Multipliers"
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceBodyView.js",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                getTagView("Id: " + bodyData.id, 0, "end", "red"),
                getTagView("Id: " + bodyData.name, 0, "end", "blue"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-3"
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceBodyView.js",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1 pb-2",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceBodyView.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = RaceBodyView;
var _c;
__turbopack_refresh__.register(_c, "RaceBodyView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/RaceTools.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RaceTools)
});
class RaceTools {
    static prepareRaceName(name) {
        if (name.endsWith("_Race")) {
            name = name.substring(0, name.length - 5);
        } else if (name.endsWith("Race")) {
            name = name.substring(0, name.length - 4);
        }
        if (name.startsWith("ZZZ_") || name.startsWith("zzz_") || name.startsWith("ATX_") || name.startsWith("XPD_")) {
            name = name.substring(4, name.length);
        }
        return name;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/view/RaceDropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$RaceTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/RaceTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getItems(pairs) {
    const result = [];
    for(let i = 0; i < pairs.length; i++){
        const pair = pairs[i];
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$RaceTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareRaceName(pair.value);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: pair.key,
            children: value
        }, pair.key, false, {
            fileName: "[project]/src/race/view/RaceDropdown.js",
            lineNumber: 14,
            columnNumber: 21
        }, this));
    }
    return result;
}
const RaceDropdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function RaceDropdown(props) {
    let raceName = "Choose a race";
    if (props.raceName) {
        raceName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$RaceTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prepareRaceName(props.raceName);
    }
    function onSelect(e) {
        props.setRaceName(e);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-1 mb-2 mt-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "warning",
                size: "sm",
                onSelect: onSelect,
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: raceName
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceDropdown.js",
                    lineNumber: 30,
                    columnNumber: 88
                }, void 0),
                children: getItems(props.pairs)
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceDropdown.js",
                lineNumber: 30,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceDropdown.js",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/race/view/RaceDropdown.js",
        lineNumber: 28,
        columnNumber: 9
    }, this);
});
_c1 = RaceDropdown;
const __TURBOPACK__default__export__ = RaceDropdown;
var _c, _c1;
__turbopack_refresh__.register(_c, "RaceDropdown$memo");
__turbopack_refresh__.register(_c1, "RaceDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/view/GeneralRaceView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>GeneralRaceView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
;
;
;
;
function GeneralRaceView(props) {
    if (!props.race) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const codeName = props.race.name;
    const id = props.race.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "d-flex justify-content-end p-0 me-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                        bordered: true,
                        color: "red",
                        className: "shadow-outline m-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "Id: ",
                                id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/race/view/GeneralRaceView.js",
                            lineNumber: 16,
                            columnNumber: 85
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/race/view/GeneralRaceView.js",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/race/view/GeneralRaceView.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/race/view/GeneralRaceView.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "d-flex justify-content-end p-0 me-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                        bordered: true,
                        color: "blue",
                        className: "shadow-outline m-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "Code: ",
                                codeName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/race/view/GeneralRaceView.js",
                            lineNumber: 21,
                            columnNumber: 86
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/race/view/GeneralRaceView.js",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/race/view/GeneralRaceView.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/race/view/GeneralRaceView.js",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = GeneralRaceView;
var _c;
__turbopack_refresh__.register(_c, "GeneralRaceView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/race/view/RaceView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ResistanceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/ResistanceView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceTagView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/RaceTagView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceBodyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/RaceBodyView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/race.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/RaceDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$GeneralRaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/view/GeneralRaceView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ResistanceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ResistanceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const questionPopoverHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
    children: "Races"
}, void 0, false, {
    fileName: "[project]/src/race/view/RaceView.js",
    lineNumber: 16,
    columnNumber: 32
}, this);
const questionPopoverBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Parsed from:"
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceView.js",
                lineNumber: 20,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceView.js",
            lineNumber: 20,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].raceParseVersion
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceView.js",
                lineNumber: 21,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceView.js",
            lineNumber: 21,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].raceParseVersionName
            }, void 0, false, {
                fileName: "[project]/src/race/view/RaceView.js",
                lineNumber: 22,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/race/view/RaceView.js",
            lineNumber: 22,
            columnNumber: 9
        }, this)
    ]
}, void 0, true);
const questionPopover = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](questionPopoverHeader, questionPopoverBody, 'RaceViewQuestionPopoverPlace');
const raceMap = new Map();
const racePairs = [];
function raceComparator(race1, race2) {
    const name1 = race1.key;
    const name2 = race2.key;
    return name1.localeCompare(name2);
}
for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__["default"].length; i++){
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$race$2e$json__$28$json$29$__["default"][i];
    const it = raceMap.get(item.full);
    if (it) {
        console.log("Same name: " + it.id + " " + item.id);
    }
    raceMap.set(item.full, item);
    racePairs.push({
        key: item.full,
        value: item.full
    });
}
racePairs.sort(raceComparator);
function getRaceTagView(race) {
    if (!race) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceTagView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tags: race.tags
    }, void 0, false, {
        fileName: "[project]/src/race/view/RaceView.js",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
function getRaceBodyView(race) {
    if (!race) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceBodyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        bodyData: race.bodyData
    }, void 0, false, {
        fileName: "[project]/src/race/view/RaceView.js",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
const RaceView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function RaceView() {
    _s();
    console.log("RaceView");
    const [raceName, setRaceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let race = null;
    if (raceName) {
        race = raceMap.get(raceName);
    }
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "RaceViewQuestionPopoverPlace"
                        }, void 0, false, {
                            fileName: "[project]/src/race/view/RaceView.js",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    style: {
                                        width: '12rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ac-text",
                                        children: "Races"
                                    }, void 0, false, {
                                        fileName: "[project]/src/race/view/RaceView.js",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/race/view/RaceView.js",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "stats-text",
                                    style: {
                                        width: '2rem'
                                    },
                                    onClick: onQClick,
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/src/race/view/RaceView.js",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/race/view/RaceView.js",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/race/view/RaceView.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$RaceDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                pairs: racePairs,
                                raceName: raceName,
                                setRaceName: setRaceName
                            }, void 0, false, {
                                fileName: "[project]/src/race/view/RaceView.js",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$GeneralRaceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                race: race
                            }, void 0, false, {
                                fileName: "[project]/src/race/view/RaceView.js",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            getRaceTagView(race),
                            getRaceBodyView(race),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$view$2f$ResistanceView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                race: race
                            }, void 0, false, {
                                fileName: "[project]/src/race/view/RaceView.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/race/view/RaceView.js",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/race/view/RaceView.js",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/race/view/RaceView.js",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/race/view/RaceView.js",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}, "aK+KZ8gAUJ3coRhEz2WUVXWnpfs=")), "aK+KZ8gAUJ3coRhEz2WUVXWnpfs=");
_c1 = RaceView;
const __TURBOPACK__default__export__ = RaceView;
var _c, _c1;
__turbopack_refresh__.register(_c, "RaceView$memo");
__turbopack_refresh__.register(_c1, "RaceView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/consumables/ConsumableTools.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumableTools)
});
const objT = "ObjectType";
const chT = "ChemType";
const dT = "DrinkType";
const ingT = "IngredientType";
const meT = "MealType";
const boT = "BobbleheadType";
const plT = "PlantType";
const mT = "MagazineType";
const fT = "FoodType";
const itT = "ItemType";
const alT = "AlcoholType";
const dupl = "DUPLICATE000";
const cTypes = {
    "Chemical": [
        chT,
        true
    ],
    "Drink": [
        dT,
        true
    ],
    "Bobblehead": [
        boT,
        true
    ],
    "Magazine": [
        mT,
        true
    ],
    "Food": [
        fT,
        true
    ],
    "Item": [
        itT,
        true
    ],
    "Alcohol": [
        alT,
        false
    ]
};
const tagPrefixes = [
    objT,
    ingT,
    meT,
    chT,
    dT,
    boT,
    plT,
    mT,
    fT,
    itT
];
const tagEndings = [
    dupl,
    alT
];
class ConsumableTools {
    static getTagName(tag) {
        if (typeof tag === typeof '') {
            return tag;
        }
        if (tag.full && tag.full.length > 0) {
            return tag.full;
        }
        return tag.name;
    }
    static getItemType(item) {
        for(let i = 0; i < item.tags.length; i++){
            const tag = ConsumableTools.getTagName(item.tags[i]);
            if (tag.startsWith(objT)) {
                return tag.slice(objT.length, tag.length);
            }
        }
        for(let i = 0; i < item.tags.length; i++){
            const tag = ConsumableTools.getTagName(item.tags[i]);
            for(const name in cTypes){
                const data = cTypes[name];
                const prefix = data[0];
                const isPrefix = data[1];
                if (isPrefix) {
                    if (tag.startsWith(prefix)) {
                        return name;
                    }
                } else {
                    if (tag.endsWith(prefix)) {
                        return name;
                    }
                }
            }
        }
        return "";
    }
    static removeTagPrefix(tagName) {
        for(let i = 0; i < tagPrefixes.length; i++){
            const tagPrefix = tagPrefixes[i];
            if (tagName.startsWith(tagPrefix)) {
                return tagName.slice(tagPrefix.length, tagName.length);
            }
        }
        return tagName;
    }
    static removeTagEndings(tagName) {
        for(let i = 0; i < tagEndings.length; i++){
            const tagEnding = tagEndings[i];
            if (tagName.endsWith(tagEnding)) {
                return tagName.slice(0, tagName.length - tagEnding.length);
            }
        }
        return tagName;
    }
    static removePrefixSuffix(tagName) {
        return ConsumableTools.removeTagEndings(ConsumableTools.removeTagPrefix(tagName));
    }
    static getItemColor(type) {
        switch(type){
            case 'Bobblehead':
                return '#b6d9ff';
            case 'Chem':
                return '#f5cfff';
            case 'Magazine':
                return '#ffdb95';
            case 'Serum':
                return '#b4ffbf';
            case 'BloodPack':
                return '#ff3779';
            case 'Drink':
                return '#daf2ff';
            case 'Food':
                return '#ffebce';
            default:
                return '#f4f4f4';
        }
    }
    static getItemColorDark(type) {
        switch(type){
            case 'Bobblehead':
                return '#7cbbff';
            case 'Chem':
                return '#be9ac8';
            case 'Magazine':
                return '#c4ab5f';
            case 'Serum':
                return '#6ab576';
            case 'BloodPack':
                return '#b58192';
            case 'Drink':
                return '#85a9bd';
            case 'Food':
                return '#c4ad8b';
            default:
                return '#9d9d9d';
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumableButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumableButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumableTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
function getEffectValues(tagData) {
    const magnitudes = [];
    const durations = [];
    for(let i = 0; i < tagData.length; i++){
        magnitudes.push(tagData[i].magnitude);
        durations.push(tagData[i].duration);
    }
    if (magnitudes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const name = tagData[0].name;
    const max = Math.max(...magnitudes);
    const min = Math.min(...magnitudes);
    const maxText = (+max.toFixed(3)).toString();
    const minText = (+min.toFixed(3)).toString();
    const duration = Math.max(...durations);
    const valueColor = '#fc5972';
    let durationText;
    if (duration > 60) {
        durationText = "(" + duration / 60 + "min)";
    } else {
        durationText = duration === 0 ? "" : "(" + duration + "sec)";
    }
    if (min === 0 && max === 0) {
        return getEffectFilterInfo(name, durationText, "", valueColor);
    } else if (min === max) {
        return getEffectFilterInfo(name, durationText, maxText, valueColor);
    }
    return getEffectFilterInfo(name, durationText, minText + " ‣‣‣ " + maxText, valueColor);
}
function getEffectFilterInfo(resultName, durationText, max, valueColor) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leftRight"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-0",
        style: {
            wordBreak: "break-all"
        },
        children: [
            resultName,
            " ",
            durationText
        ]
    }, void 0, true, {
        fileName: "[project]/src/consumables/view/ConsumableButton.js",
        lineNumber: 39,
        columnNumber: 22
    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            color: valueColor
        },
        children: max
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/ConsumableButton.js",
        lineNumber: 39,
        columnNumber: 111
    }, this), 9, 3, "m-0 p-1");
}
function ConsumableButton(props) {
    const typeColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getItemColor(props.type);
    let effectValues = null;
    if (props.effectTag && props.effectTag !== "None") {
        effectValues = getEffectValues(props.item.effectTagsData[props.effectTag]);
    }
    const textBgColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getItemColorDark(props.type);
    const textStyle = effectValues ? {
        borderRadius: '1px',
        backgroundColor: textBgColor
    } : {};
    let itemType = props.type;
    if (!itemType || itemType === "Chemical") {
        itemType = "Other";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: props.item['id'],
            className: "lite-shadow",
            variant: "blue-white-border",
            style: {
                width: '100%',
                margin: '0.1rem',
                paddingTop: '0.2rem',
                paddingBottom: '0.1rem',
                padding: "0.3rem"
            },
            onClick: props.onClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-start p-1",
                    style: {
                        fontSize: '0.9rem',
                        backgroundColor: '#f4f4f4',
                        borderRadius: '0.1rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: props.item['full']
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableButton.js",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableButton.js",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-0",
                    style: textStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        className: "p-0 bg-text-shadow",
                        children: effectValues
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableButton.js",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableButton.js",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex pt-2 justify-content-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge bg-lite-shadow2",
                        style: {
                            backgroundColor: typeColor
                        },
                        children: itemType
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableButton.js",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableButton.js",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumableButton.js",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/ConsumableButton.js",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_c = ConsumableButton;
var _c;
__turbopack_refresh__.register(_c, "ConsumableButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumableItems.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getItem": (()=>getItem),
    "sortItems": (()=>sortItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$consumables$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/consumables.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumableTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/pagination/index.js [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/float-button/index.js [app-client] (ecmascript) <export default as FloatButton>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function nameComparator(item1, item2) {
    const name1 = item1['full'];
    const name2 = item2['full'];
    return name1.localeCompare(name2);
}
const sortItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$consumables$2e$json__$28$json$29$__["default"].sort(nameComparator);
function getItem(id) {
    for(let i = 0; i < sortItems.length; i++){
        const item = sortItems[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
const types = [
    "Chem",
    "Food",
    "Magazine",
    "Serum",
    "Drink",
    "Bobblehead",
    "Stimpak",
    "BloodPack"
];
const ConsumableItems = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ConsumableItems(props) {
    _s();
    console.log("Consumable Items");
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    function onItemClick(e) {
        const id = e.currentTarget.id;
        if (!props.currentItem) {
            props.setShowToast(true);
        } else {
            props.setShowToast(!(props.currentItem.id === id && props.showToast));
        }
        props.setCurrentItem(getItem(id));
    }
    const items = [];
    const needTypeFilter = props.filterType !== 'All';
    for(let i = 0; i < sortItems.length; i++){
        const item = sortItems[i];
        const type = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getItemType(item);
        if (needTypeFilter) {
            if (props.filterType === "Other" && types.includes(type)) {
                continue;
            } else if (props.filterType !== "Other" && props.filterType !== type) {
                continue;
            }
        }
        if (props.filterName && props.filterName.length > 0) {
            if (!item.full.toLowerCase().includes(props.filterName.toLowerCase())) {
                continue;
            }
        }
        if (props.filterEffect && props.filterEffect !== 'None') {
            if (!item.effectTags.includes(props.filterEffect)) {
                continue;
            }
        }
        items.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            index: i,
            item: item,
            type: type,
            effectTag: props.filterEffect,
            onClick: onItemClick
        }, item.id, false, {
            fileName: "[project]/src/consumables/view/ConsumableItems.js",
            lineNumber: 64,
            columnNumber: 13
        }, this));
    }
    function onPageChanged(page, pageSize) {
        props.setCurrentPage(page);
        setPageSize(pageSize);
    }
    const paginated = [];
    const start = (props.currentPage - 1) * pageSize;
    const end = start + pageSize;
    for(let i = start; i < end; i++){
        paginated.push(items[i]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                className: "pt-1 pb-3",
                align: "center",
                current: props.currentPage,
                defaultPageSize: pageSize,
                onChange: onPageChanged,
                total: items.length,
                showSizeChanger: false
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumableItems.js",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            paginated,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                className: "pt-3",
                align: "center",
                current: props.currentPage,
                defaultPageSize: pageSize,
                onChange: onPageChanged,
                total: items.length,
                showSizeChanger: false
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumableItems.js",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__["FloatButton"].BackTop, {
                style: {
                    right: 60
                },
                duration: 100,
                visibilityHeight: 2000
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumableItems.js",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/consumables/view/ConsumableItems.js",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}, "zbA9tgrECZ6shRFh+hu29rQ13A8=")), "zbA9tgrECZ6shRFh+hu29rQ13A8=");
_c1 = ConsumableItems;
const __TURBOPACK__default__export__ = ConsumableItems;
var _c, _c1;
__turbopack_refresh__.register(_c, "ConsumableItems$memo");
__turbopack_refresh__.register(_c1, "ConsumableItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumableTagsView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumableTagsView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumableTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
;
;
;
function getTagView(tag, color) {
    const tagName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getTagName(tag);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
        className: "mt-1 m-auto d-flex",
        bordered: true,
        color: color,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumableTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removePrefixSuffix(tagName)
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
                lineNumber: 9,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, tagName, false, {
        fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
function ConsumableTagsView(props) {
    if (props.tags && props.tags.length > 0) {
        const result = [];
        for(let i = 0; i < props.tags.length; i++){
            result.push(getTagView(props.tags[i], props.color));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: props.className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 m-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: props.title
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
                        lineNumber: 22,
                        columnNumber: 47
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
                    lineNumber: 22,
                    columnNumber: 18
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flexWrap: "wrap"
                    },
                    className: "d-flex justify-content-center",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
                    lineNumber: 23,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumableTagsView.js",
            lineNumber: 21,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = ConsumableTagsView;
var _c;
__turbopack_refresh__.register(_c, "ConsumableTagsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/AlchemyCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AlchemyCompactView),
    "mainView": (()=>mainView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableTagsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableTagsView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/StringHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spell$2f$view$2f$SpellCompactView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/spell/view/SpellCompactView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
;
;
;
;
;
;
// import { useState } from 'react';
function getItemDescription(desc) {
    if (!desc || desc === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const mt = 2;
    const mb = 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            backgroundColor: '#fffaf0'
        },
        className: "mt-" + mt + " mb-" + mb + " d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                padding: '0.3rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    style: {
                        color: '#bf6400'
                    },
                    children: desc
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                    lineNumber: 18,
                    columnNumber: 24
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 18,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
function getTag3(value, style, mt, mb) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        className: "mt-" + mt + " mb-" + mb + " d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tag",
            style: style,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textWrap: 'nowrap',
                    overflow: "hidden",
                    textOverflow: 'ellipsis'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
function getWeight(item) {
    const weight = "Weight: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToString"])(item.weight, 3);
    return getTag3(weight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indigo"], 2, 0);
}
function getAddictionView(item, onEffectClick) {
    let addictionChance = "";
    if (item.addiction_chance > 0) {
        addictionChance = "Addiction chance: " + (item.addiction_chance * 100).toFixed(1) + "%";
    }
    if (addictionChance === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "mt-2 mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Addiction"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                    lineNumber: 51,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            getTag3(addictionChance, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redRounded"], 1, 1),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(item.addiction_spell, onEffectClick)
        ]
    }, void 0, true);
}
function mainView(item, onEffectClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idNameRow"])(item.id, item.name),
            getItemDescription(item.dnam_desc),
            getItemDescription(item.desc),
            getWeight(item),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableTagsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-2",
                tags: item.tags,
                color: "blue",
                title: "Tags"
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableTagsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-2",
                color: "magenta",
                tags: item.effectTags,
                title: "Effect Tags"
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            getAddictionView(item, onEffectClick),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "mt-2 mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Effects"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                    lineNumber: 80,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 80,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function detailsView(alchemy, onEffectClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spell$2f$view$2f$SpellCompactView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffects"])(alchemy.effects, onEffectClick)
    }, void 0, false);
}
function AlchemyCompactView(props) {
    // const [isMain, setIsMain] = useState(true);
    const alchemy = props.alchemy;
    // const view = (isMain) ? mainView(alchemy, props.onEffectClick, isMain, setIsMain) : detailsView(alchemy, props.onEffectClick, isMain, setIsMain);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    bordered: false,
                    color: "volcano",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: alchemy.full
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                        lineNumber: 100,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                    lineNumber: 100,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/AlchemyCompactView.js",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            mainView(alchemy, props.onEffectClick),
            detailsView(alchemy, props.onEffectClick)
        ]
    }, void 0, true);
}
_c = AlchemyCompactView;
var _c;
__turbopack_refresh__.register(_c, "AlchemyCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/ConsumablesBuilder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumablesBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$magazines$2f$magazines$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/magazines/magazines.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$bobbleHeads$2f$bobbleHeads$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/bobbleHeads/bobbleHeads.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$food$2f$food$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/food/food.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$drink$2f$drink$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/drink/drink.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$psycho$2f$psycho$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/psycho/psycho.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$serums$2f$serum$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/serums/serum.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$others$2f$others$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/boostStuff/others/others.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EStuffBoost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/BoostStuffProvider.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class ConsumablesBuilder {
    static getImagePathById(cId) {
        const type = cId.substring(cId.lastIndexOf("_") + 1);
        let jsonItems = null;
        let getter = null;
        switch(type){
            case 'magazine':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$magazines$2f$magazines$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMagazine"];
                break;
            case 'bobble':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$bobbleHeads$2f$bobbleHeads$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBobbleHead"];
                break;
            case 'food':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$food$2f$food$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFood"];
                break;
            case 'drink':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$drink$2f$drink$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDrink"];
                break;
            case 'psycho':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$psycho$2f$psycho$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPsycho"];
                break;
            case 'serum':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$serums$2f$serum$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSerum"];
                break;
            case 'other':
                jsonItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$others$2f$others$2e$json__$28$json$29$__["default"];
                getter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$BoostStuffProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOther"];
                break;
            default:
                return "";
        }
        for(let i = 0; i < jsonItems.length; i++){
            const item = jsonItems[i];
            if (item.id === cId) {
                return getter(item.imName);
            }
        }
        return "";
    }
    static getMagazineItems(wType, wName, tags, crit, team, scoped, creatureTags, accessibleMagazines) {
        const result = [];
        const combination = [];
        // Creatures
        if (creatureTags.includes("mirelurk")) {
            ConsumablesBuilder.addIfAccessible("attack_of_the_fishmen_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("ghoul")) {
            ConsumablesBuilder.addIfAccessible("curse_of_the_burned_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("supermutant")) {
            ConsumablesBuilder.addIfAccessible("rise_of_the_mutants_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("animal")) {
            ConsumablesBuilder.addIfAccessible("home_in_the_hills_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("scorched")) {
            ConsumablesBuilder.addIfAccessible("demon_slaves_demon_sands_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("robot")) {
            ConsumablesBuilder.addIfAccessible("the_future_of_hunting_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("yaoguai")) {
            ConsumablesBuilder.addIfAccessible("bear_proofing_your_campsite_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("liberator")) {
            ConsumablesBuilder.addIfAccessible("guide_to_hunting_commies_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("wendigo")) {
            ConsumablesBuilder.addIfAccessible("wendigo_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("mothman")) {
            ConsumablesBuilder.addIfAccessible("mothman_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("graftonmonster")) {
            ConsumablesBuilder.addIfAccessible("grafton_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("snallygaster")) {
            ConsumablesBuilder.addIfAccessible("snallygaster_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("flatwoodsmonster")) {
            ConsumablesBuilder.addIfAccessible("flatwoods_alien_magazine", accessibleMagazines, combination);
        }
        if (wName === "Alien Blaster") {
            ConsumablesBuilder.addIfAccessible("invasion_of_the_zetans_magazine", accessibleMagazines, combination);
        } else if (wName === "Cryolator") {
            ConsumablesBuilder.addIfAccessible("when_apes_go_bananas_magazine", accessibleMagazines, combination);
        }
        // TODO: Does unarmed really work here?
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("blood_on_the_harp_magazine", accessibleMagazines, combination);
            if (crit) {
                ConsumablesBuilder.addIfAccessible("corsair_queen_magazine", accessibleMagazines, combination);
            }
        } else {
            if (scoped) {
                ConsumablesBuilder.addIfAccessible("the_starlet_sniper_magazine", accessibleMagazines, combination);
            } else {
                ConsumablesBuilder.addIfAccessible("take_aim_army_style_magazine", accessibleMagazines, combination);
            }
        }
        if (tags.includes("Knives") || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("camouflage_special_magazine", accessibleMagazines, combination);
        }
        if (team) {
            ConsumablesBuilder.addIfAccessible("nuke_the_man_magazine", accessibleMagazines, combination);
        }
        if (tags.includes("Plasma")) {
            ConsumablesBuilder.addIfAccessible("tomorrow_technology_magazine", accessibleMagazines, combination);
        }
        if (wType === "Heavy") {
            ConsumablesBuilder.addIfAccessible("giant_super_weapons_magazine", accessibleMagazines, combination);
        }
        if (crit) {
            if (tags.includes("Laser")) {
                ConsumablesBuilder.addIfAccessible("acceptable_overkill_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
                ConsumablesBuilder.addIfAccessible("little_guns_for_little_ladies_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Plasma")) {
                ConsumablesBuilder.addIfAccessible("plasma_the_weapon_of_tomorrow_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Energy")) {
                ConsumablesBuilder.addIfAccessible("us_army_goes_to_space_magazine", accessibleMagazines, combination);
            }
            if (wType === "Heavy") {
                ConsumablesBuilder.addIfAccessible("future_of_warfare_magazine", accessibleMagazines, combination);
            }
            ConsumablesBuilder.addIfAccessible("rockobot_takes_the_nation_by_storm_magazine", accessibleMagazines, combination);
        }
        result.push(combination);
        return result;
    }
    static getOtherItems(hasPhysicalDamage) {
        const result = [];
        const combination = [];
        if (hasPhysicalDamage) {
            combination.push("syringer_other");
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }
    static getBobbleHeadItems(wType, tags, accessibleBobbleHeads) {
        const result = [];
        const combination = [];
        if (wType === "Heavy") {
            ConsumablesBuilder.addIfAccessible("big_guns_bobble", accessibleBobbleHeads, combination);
        } else if (wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("unarmed_bobble", accessibleBobbleHeads, combination);
            ConsumablesBuilder.addIfAccessible("strength_bobble", accessibleBobbleHeads, combination);
        } else if (wType === "Melee") {
            ConsumablesBuilder.addIfAccessible("melee_bobble", accessibleBobbleHeads, combination);
            ConsumablesBuilder.addIfAccessible("strength_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Energy")) {
            ConsumablesBuilder.addIfAccessible("energy_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Explosive")) {
            ConsumablesBuilder.addIfAccessible("explosive_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("FusionCore")) {
            ConsumablesBuilder.addIfAccessible("repair_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
            ConsumablesBuilder.addIfAccessible("small_guns_bobble", accessibleBobbleHeads, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }
    static getDrinkItems(wType, tags, crit, creatureTags, accessibleDrink) {
        const result = [];
        const combination = [];
        if (creatureTags.includes("animal")) {
            ConsumablesBuilder.addIfAccessible("hoppy_hunter_ipa_drink", accessibleDrink, combination);
        }
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("whiskey_drink", accessibleDrink, combination);
            if (wType === "Melee") {
                ConsumablesBuilder.addIfAccessible("gulpershine_vintage_drink", accessibleDrink, combination);
            } else {
                ConsumablesBuilder.addIfAccessible("sugar_free_nukashine_drink", accessibleDrink, combination);
            }
        }
        if (crit) {
            ConsumablesBuilder.addIfAccessible("sweetmutfruit_drink", accessibleDrink, combination);
        }
        if (tags.includes("Ballistic")) {
            ConsumablesBuilder.addIfAccessible("ballistic_bock_drink", accessibleDrink, combination);
        }
        if (tags.includes("Energy")) {
            ConsumablesBuilder.addIfAccessible("high_voltage_hefe_drink", accessibleDrink, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }
    static getFoodItems(wType, crit, accessibleFood) {
        const result = [];
        const combination = [];
        ConsumablesBuilder.addIfAccessible("spiked_venison_tato_stew_food", accessibleFood, combination);
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("tasty_mutant_hound_stew_food", accessibleFood, combination);
            ConsumablesBuilder.addIfAccessible("deathclaw_wellington_food", accessibleFood, combination);
        } else if (crit) {
            ConsumablesBuilder.addIfAccessible("blight_soup_food", accessibleFood, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }
    static getSerumItems(wType, crit, lowHP, team, food, accessibleSerums) {
        const result = [];
        const combination1 = [];
        const combination2 = [];
        result.push(combination1);
        ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination1, accessibleSerums);
        if ((wType === "Melee" || wType === "Unarmed") && food) {
            result.push(combination2);
            ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination2, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(true, combination1, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination2, accessibleSerums);
        }
        if (crit && food) {
            const combination3 = [];
            const combination4 = [];
            const combination5 = [];
            result.push(combination3);
            ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination3, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination3, accessibleSerums);
            if (wType === "Melee" || wType === "Unarmed") {
                result.push(combination4);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination4, accessibleSerums);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination4, accessibleSerums);
                // no eagle
                result.push(combination5);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination5, accessibleSerums, true);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination5, accessibleSerums);
            }
        }
        return result;
    }
    static getSerumItemsBase(wType, crit, lowHP, team, combination, accessibleSerums, noEagle = false) {
        if (lowHP) {
            ConsumablesBuilder.addIfAccessible("adrenal_reaction_serum", accessibleSerums, combination);
        }
        if (wType === "Melee") {
            ConsumablesBuilder.addIfAccessible("twisted_muscles_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("empath_serum", accessibleSerums, combination);
        }
        if (wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("twisted_muscles_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("talons_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("empath_serum", accessibleSerums, combination);
        }
        if (wType !== "Melee" && wType !== "Unarmed") {
            ConsumablesBuilder.addIfAccessible("speed_demon_serum", accessibleSerums, combination);
        }
        // For the calculator it does not matter to have this mutation for crit, but technically it's important for (Luck)
        if (team && (wType === "Melee" || wType === "Unarmed" || crit)) {
            ConsumablesBuilder.addIfAccessible("herd_mentality_serum", accessibleSerums, combination);
        }
        if (crit && !noEagle) {
            ConsumablesBuilder.addIfAccessible("eagle_eyes_serum", accessibleSerums, combination);
        }
    }
    static getSerumItemsAdditional(isCarnivore, combination, accessibleSerums) {
        if (isCarnivore) {
            ConsumablesBuilder.addIfAccessible("carnivore_serum", accessibleSerums, combination);
        } else {
            ConsumablesBuilder.addIfAccessible("herbivore_serum", accessibleSerums, combination);
        }
    }
    static addIfAccessible(itemName, accessibleItems, collection) {
        const array = accessibleItems[itemName];
        if (array && array[0]) {
            collection.push(itemName);
        }
    }
    static isAccessible(itemName, accessibleItems) {
        const array = accessibleItems[itemName];
        return array && array[0];
    }
    // Nuclear Don's blend is not included (As it is very rare and surpasses any others anyway).
    // Super Chem MK1 in not included (Fury is used instead as it gives the same effect with Psychobuff)
    static getChemicalItems(wType, crit, sneak, accessibleChemo) {
        const result = [];
        const combination = [];
        result.push(combination);
        if (ConsumablesBuilder.isAccessible("nuclear_don_blend_psycho", accessibleChemo)) {
            ConsumablesBuilder.addIfAccessible("nuclear_don_blend_psycho", accessibleChemo, combination);
        } else {
            ConsumablesBuilder.addIfAccessible("psychobuff_psycho", accessibleChemo, combination);
        }
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("fury_psycho", accessibleChemo, combination);
        }
        if (crit || !ConsumablesBuilder.isAccessible("psychobuff_psycho", accessibleChemo)) {
            ConsumablesBuilder.addIfAccessible("overdrive_psycho", accessibleChemo, combination);
        }
        if (sneak) {
            ConsumablesBuilder.addIfAccessible("calmex_psycho", accessibleChemo, combination);
        }
        return result;
    }
    static prepare(consumableObjs, consumableNames = null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Magazines"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["BobbleHeads"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Food"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Drink"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Psycho"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Serum"], consumableNames);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareItems"])(consumableObjs["Others"], consumableNames);
    }
    static getEmptyConsumableBoosts() {
        return {
            creature: new Map(),
            weapon: new Map()
        };
    }
    static getFood() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$food$2f$food$2e$json__$28$json$29$__["default"]));
    }
    static getDrink() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$drink$2f$drink$2e$json__$28$json$29$__["default"]));
    }
    static getPsycho() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$psycho$2f$psycho$2e$json__$28$json$29$__["default"]));
    }
    static getSerum() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$serums$2f$serum$2e$json__$28$json$29$__["default"]));
    }
    static getOthers() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$others$2f$others$2e$json__$28$json$29$__["default"]));
    }
    static getMagazines() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$magazines$2f$magazines$2e$json__$28$json$29$__["default"]));
    }
    static getBobbleHeads() {
        return JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$boostStuff$2f$bobbleHeads$2f$bobbleHeads$2e$json__$28$json$29$__["default"]));
    }
    static buildFromList(consumablesList, player) {
        const consumablesSet = new Set(consumablesList);
        const foodPref = {
            carnivore: consumablesSet.has("carnivore_serum"),
            herbivore: consumablesSet.has("herbivore_serum")
        };
        const consumables = {};
        consumables["Magazines"] = ConsumablesBuilder.getMagazines();
        consumables["BobbleHeads"] = ConsumablesBuilder.getBobbleHeads();
        consumables["Food"] = ConsumablesBuilder.getFood();
        consumables["Drink"] = ConsumablesBuilder.getDrink();
        consumables["Psycho"] = ConsumablesBuilder.getPsycho();
        consumables["Serum"] = ConsumablesBuilder.getSerum();
        consumables["Others"] = ConsumablesBuilder.getOthers();
        ConsumablesBuilder.prepare(consumables, consumablesSet);
        const consumableBoosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBoosts"])(consumables["Magazines"], consumables["BobbleHeads"], consumables["Food"], consumables["Drink"], consumables["Psycho"], consumables["Serum"], consumables["Others"], foodPref, player);
        return [
            foodPref,
            consumableBoosts,
            consumables
        ];
    }
    static setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers) {
        setMagazines(consumables["Magazines"]);
        setBobbleHeads(consumables["BobbleHeads"]);
        setFood(consumables["Food"]);
        setDrink(consumables["Drink"]);
        setPsycho(consumables["Psycho"]);
        setSerum(consumables["Serum"]);
        setOthers(consumables["Others"]);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/FilterDisplay.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FilterDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
;
;
function FilterDisplay(props) {
    const effect = !props.filterEffect || props.filterEffect === "None" ? "-" : props.filterEffect;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-2 pe-2 pb-2",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(props.filterType, effect)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/FilterDisplay.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = FilterDisplay;
var _c;
__turbopack_refresh__.register(_c, "FilterDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumableToast.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumableToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/StackEffectView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/ToastContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Toast.js [app-client] (ecmascript)");
;
;
;
;
function ConsumableToast(props) {
    if (!props.showToast || !props.item) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-3 position-fixed p-3",
        position: "top-center",
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: {
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            bg: "light",
            onClose: (e)=>props.setShowToast(false),
            show: props.showToast,
            animation: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "pe-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "ms-2 mt-auto mb-auto p-auto me-auto",
                        children: props.item['full']
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableToast.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableToast.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "pt-1 pb-2 modal-scroll-60 p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: props.item
                    }, void 0, false, {
                        fileName: "[project]/src/consumables/view/ConsumableToast.js",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableToast.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumableToast.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/ConsumableToast.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = ConsumableToast;
var _c;
__turbopack_refresh__.register(_c, "ConsumableToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumableFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsumableFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/dropdown/BaseDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$consumable_tags$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/consumable_tags.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
;
;
;
;
;
const typeDict = {
    All: 'All',
    Chem: 'Chem',
    Food: 'Food',
    Magazine: 'Magazine',
    Serum: 'Serum',
    Drink: 'Drink',
    Bobblehead: 'Bobblehead',
    Stimpak: 'Stimpak',
    BloodPack: 'BloodPack',
    Other: 'Other'
};
const effectDict = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$consumable_tags$2e$json__$28$json$29$__["default"][0];
function ConsumableFilter(props) {
    function nameChanged(e) {
        props.setFilterName(e.target.value);
        props.setCurrentPage(1);
    }
    function onSelectType(e) {
        props.setFilterType(e);
        props.setCurrentPage(1);
    }
    function onSelectEffect(e) {
        props.setFilterEffect(e);
        props.setCurrentPage(1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "ps-1 pe-1 pb-2 flex-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Type",
                    dict: typeDict,
                    onSelect: onSelectType
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableFilter.js",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    style: {
                        width: '10rem'
                    },
                    maxLength: "70",
                    onChange: nameChanged
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableFilter.js",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Effect",
                    dict: effectDict,
                    onSelect: onSelectEffect
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumableFilter.js",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumableFilter.js",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/ConsumableFilter.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_c = ConsumableFilter;
var _c;
__turbopack_refresh__.register(_c, "ConsumableFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/consumables/view/ConsumablesView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableToast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$FilterDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/FilterDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
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
const questionPopoverHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
    children: "Consumables"
}, void 0, false, {
    fileName: "[project]/src/consumables/view/ConsumablesView.js",
    lineNumber: 13,
    columnNumber: 32
}, this);
const questionPopoverBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Items with next properties are not included:"
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumablesView.js",
                lineNumber: 17,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 17,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " No name"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 18,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 18,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " Templates"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 19,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 19,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " Events"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 20,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 20,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " CUT"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 21,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 21,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " DEPRECATED"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 22,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 22,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " test"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 23,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 23,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " Babylon"
                }, void 0, false, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 24,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 24,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Parsed from:"
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumablesView.js",
                lineNumber: 25,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 25,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].consumablesParseVersion
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumablesView.js",
                lineNumber: 26,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 26,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].consumablesParseVersionName
            }, void 0, false, {
                fileName: "[project]/src/consumables/view/ConsumablesView.js",
                lineNumber: 27,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    ]
}, void 0, true);
const questionPopover = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](questionPopoverHeader, questionPopoverBody, 'ConsumablesViewQuestionPopoverPlace');
const ConsumablesView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ConsumablesView() {
    _s();
    console.log("ConsumablesView");
    const [currentItem, setCurrentItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterName, setFilterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterEffect, setFilterEffect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "ConsumablesViewQuestionPopoverPlace"
                        }, void 0, false, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    style: {
                                        width: '12rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ac-text",
                                        children: "Consumables"
                                    }, void 0, false, {
                                        fileName: "[project]/src/consumables/view/ConsumablesView.js",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "stats-text",
                                    style: {
                                        width: '2rem'
                                    },
                                    onClick: onQClick,
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: currentItem,
                            showToast: showToast,
                            setShowToast: setShowToast
                        }, void 0, false, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            setFilterType: setFilterType,
                            setFilterName: setFilterName,
                            setFilterEffect: setFilterEffect,
                            setCurrentPage: setCurrentPage
                        }, void 0, false, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$FilterDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            filterType: filterType,
                            filterEffect: filterEffect
                        }, void 0, false, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            filterName: filterName,
                            filterType: filterType,
                            filterEffect: filterEffect,
                            currentPage: currentPage,
                            setCurrentPage: setCurrentPage,
                            currentItem: currentItem,
                            setCurrentItem: setCurrentItem,
                            showToast: showToast,
                            setShowToast: setShowToast
                        }, void 0, false, {
                            fileName: "[project]/src/consumables/view/ConsumablesView.js",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/consumables/view/ConsumablesView.js",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/consumables/view/ConsumablesView.js",
            lineNumber: 47,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/consumables/view/ConsumablesView.js",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}, "YFzl2LX6DrwD2YNY1eoSelXqLmU=")), "YFzl2LX6DrwD2YNY1eoSelXqLmU=");
_c1 = ConsumablesView;
const __TURBOPACK__default__export__ = ConsumablesView;
var _c, _c1;
__turbopack_refresh__.register(_c, "ConsumablesView$memo");
__turbopack_refresh__.register(_c1, "ConsumablesView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/PerkCardProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getPerkCard": (()=>getPerkCard),
    "getSortedPerkCards": (()=>getSortedPerkCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perkCards$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/perkCards.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectProvider.js [app-client] (ecmascript)");
;
;
function prepareName(name, card) {
    if (!card.legendary && name.startsWith("Expert")) {
        name = name.slice(7, name.length) + " (Expert)";
    } else if (!card.legendary && name.startsWith("Master")) {
        name = name.slice(7, name.length) + " (Master)";
    }
    return name;
}
for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perkCards$2e$json__$28$json$29$__["default"].length; i++){
    const card = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perkCards$2e$json__$28$json$29$__["default"][i];
    let name;
    if (!card.mPerk1) {
        name = card.mName;
    } else {
        const mPerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffect"])(card.mPerk1);
        name = mPerk.full;
    }
    name = prepareName(name, card);
    if (card.fPerk1 && card.fPerk1 !== "") {
        const fPerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffect"])(card.fPerk1);
        const name2 = prepareName(fPerk.full, card);
        name = name + " / " + name2;
    }
    card["fullName"] = name;
}
function nameComparator(item1, item2) {
    return item1.fullName.localeCompare(item2.fullName);
}
const sortedItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perkCards$2e$json__$28$json$29$__["default"].sort(nameComparator);
function getSortedPerkCards() {
    return sortedItems;
}
function getPerkCard(id) {
    for(let i = 0; i < sortedItems.length; i++){
        const item = sortedItems[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/PerkCardTools.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardTools)
});
class PerkCardTools {
    static getColor(type) {
        return getComputedStyle(document.documentElement).getPropertyValue("--bg-" + type.toLowerCase() + "-card-color");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardCompactView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/PerkCardProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/PerkCardTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function perkButtons(perk, onPerkClick) {
    const result = [];
    const perkData = [];
    const costs = [];
    for(const fieldName in perk){
        if (fieldName.startsWith("rankCost")) {
            costs.push(fieldName);
        }
    }
    for(let i = 0; i < costs.length; i++){
        const fieldName = costs[i];
        const number = fieldName.slice(8, 9);
        const cost = perk[fieldName];
        const mPerkId = perk['mPerk' + number];
        const fPerkId = perk['fPerk' + number];
        const mPerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffect"])(mPerkId);
        const fPerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffect"])(fPerkId);
        if (mPerk) {
            perkData.push({
                name: mPerk.name,
                id: mPerk.id,
                cost: cost
            });
        }
        if (fPerk) {
            perkData.push({
                name: fPerk.name,
                id: fPerk.id,
                cost: cost
            });
        }
    }
    function getCostView(cost, legendary) {
        if (legendary) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ps-1 pe-1 pt-0 pb-0",
            style: {
                color: '#fff',
                backgroundColor: '#ffb000',
                borderColor: '#ffb000',
                borderWidth: '1px',
                borderRadius: '2px',
                borderStyle: 'solid'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: cost
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
            lineNumber: 38,
            columnNumber: 13
        }, this);
    }
    for(let i = 0; i < perkData.length; i++){
        const data = perkData[i];
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center m-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-100",
                name: data.id,
                variant: "blue-white-border",
                onClick: onPerkClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: data.name
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                            lineNumber: 48,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0 mb-0",
                        style: {
                            display: 'flex',
                            flexDirection: 'row'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-100 d-flex justify-content-start mb-1",
                                children: getCostView(data.cost, perk.legendary)
                            }, void 0, false, {
                                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-100 d-flex justify-content-end mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        style: {
                                            color: '#520021'
                                        },
                                        children: data.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                                        lineNumber: 54,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                lineNumber: 47,
                columnNumber: 17
            }, this)
        }, data.id, false, {
            fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
            lineNumber: 46,
            columnNumber: 13
        }, this));
    }
    return result;
}
function PerkCardCompactView(props) {
    let perkCard = props.perkCard;
    if (!perkCard) {
        perkCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPerkCard"])(props.perkCardId);
    }
    const desc = perkCard.desc && perkCard.desc !== "" ? perkCard.desc : "-";
    const bgColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getColor(perkCard.type);
    const legBadge = perkCard.legendary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "badge p-1 ps-2 pe-2 bg-lite-shadow2",
        style: {
            backgroundColor: '#ffc700',
            color: '#513f00'
        },
        children: "Legendary"
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
        lineNumber: 71,
        columnNumber: 45
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idNameRow"])(perkCard.id, perkCard.name),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTextBlock"])(desc, null, null, "mt-2 p-1"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 mb-3 ms-1 me-1",
                style: {
                    display: 'flex',
                    flexDirection: 'row'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 d-flex justify-content-start",
                        children: legBadge
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 d-flex justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge p-1 ps-2 pe-2 bg-lite-shadow2",
                            style: {
                                backgroundColor: bgColor,
                                color: '#fff'
                            },
                            children: perkCard.type
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 d-flex justify-content-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge p-1 ps-2 pe-2 bg-lite-shadow2",
                            children: [
                                "Lvl ",
                                perkCard.level
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                children: "Perks"
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            perkButtons(perkCard, props.onEffectClick)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCard/view/PerkCardCompactView.js",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
_c = PerkCardCompactView;
var _c;
__turbopack_refresh__.register(_c, "PerkCardCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/PerkCardTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
function PerkCardButton(props) {
    const bgColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getColor(props.item.type);
    const desc = props.item.desc && props.item.desc !== "" ? props.item.desc : "-";
    const legBadge = props.item.legendary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "badge bg-lite-shadow2",
        style: {
            backgroundColor: '#ffc700',
            color: '#513f00'
        },
        children: "Legendary"
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardButton.js",
        lineNumber: 8,
        columnNumber: 47
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: props.item['id'],
            className: "lite-shadow",
            variant: "blue-white-border",
            style: {
                width: '100%',
                margin: '0.1rem',
                paddingTop: '0.2rem',
                paddingBottom: '0.1rem',
                padding: "0.3rem"
            },
            onClick: props.onClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: props.item.fullName
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1 perk-description",
                    children: desc
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'row'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-100 d-flex pt-2 justify-content-start",
                            children: legBadge
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-100 d-flex pt-2 justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge bg-lite-shadow2",
                                style: {
                                    backgroundColor: bgColor,
                                    color: '#fff'
                                },
                                children: props.item.type
                            }, void 0, false, {
                                fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/perkCard/view/PerkCardButton.js",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardButton.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardButton.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = PerkCardButton;
var _c;
__turbopack_refresh__.register(_c, "PerkCardButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardItems.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/PerkCardProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/pagination/index.js [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/float-button/index.js [app-client] (ecmascript) <export default as FloatButton>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const PerkCardItems = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function PerkCardItems(props) {
    _s();
    console.log("Perk Card Items");
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    function onItemClick(e) {
        const id = e.currentTarget.id;
        if (!props.currentItem) {
            props.setShowToast(true);
        } else {
            props.setShowToast(!(props.currentItem.id === id && props.showToast));
        }
        props.setCurrentItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPerkCard"])(id));
    }
    const items = [];
    const sortedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedPerkCards"])();
    const needTypeFilter = props.filterType !== 'All';
    for(let i = 0; i < sortedItems.length; i++){
        const item = sortedItems[i];
        if (needTypeFilter && item.type !== props.filterType) {
            continue;
        }
        if (props.filterStatus === "Legendary" && !item.legendary) {
            continue;
        } else if (props.filterStatus === "Ordinary" && item.legendary) {
            continue;
        }
        if (props.filterName && props.filterName !== "" && !item.fullName.toLowerCase().includes(props.filterName.toLowerCase())) {
            continue;
        }
        items.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            index: i,
            item: item,
            onClick: onItemClick
        }, item.id, false, {
            fileName: "[project]/src/perkCard/view/PerkCardItems.js",
            lineNumber: 38,
            columnNumber: 13
        }, this));
    }
    function onPageChanged(page, pageSize) {
        props.setCurrentPage(page);
        setPageSize(pageSize);
    }
    const paginated = [];
    const start = (props.currentPage - 1) * pageSize;
    const end = start + pageSize;
    for(let i = start; i < end; i++){
        paginated.push(items[i]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                className: "pt-1 pb-3",
                align: "center",
                current: props.currentPage,
                defaultPageSize: pageSize,
                onChange: onPageChanged,
                total: items.length,
                showSizeChanger: false
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardItems.js",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            paginated,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                className: "pt-3",
                align: "center",
                current: props.currentPage,
                defaultPageSize: pageSize,
                onChange: onPageChanged,
                total: items.length,
                showSizeChanger: false
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardItems.js",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__["FloatButton"].BackTop, {
                style: {
                    right: 60
                },
                duration: 100,
                visibilityHeight: 2000
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardItems.js",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCard/view/PerkCardItems.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}, "zbA9tgrECZ6shRFh+hu29rQ13A8=")), "zbA9tgrECZ6shRFh+hu29rQ13A8=");
_c1 = PerkCardItems;
const __TURBOPACK__default__export__ = PerkCardItems;
var _c, _c1;
__turbopack_refresh__.register(_c, "PerkCardItems$memo");
__turbopack_refresh__.register(_c1, "PerkCardItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/dropdown/BaseDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
;
;
;
;
const typeDict = {
    All: 'All',
    Strength: 'Strength',
    Perception: 'Perception',
    Endurance: 'Endurance',
    Charisma: 'Charisma',
    Intelligence: 'Intelligence',
    Agility: 'Agility',
    Luck: 'Luck'
};
const statusDict = {
    All: 'All',
    Legendary: 'Legendary',
    Ordinary: 'Ordinary'
};
function PerkCardFilter(props) {
    function nameChanged(e) {
        props.setFilterName(e.target.value);
        props.setCurrentPage(1);
    }
    function onSelectType(e) {
        props.setFilterType(e);
        props.setCurrentPage(1);
    }
    function onSelectStatus(e) {
        props.setFilterStatus(e);
        props.setCurrentPage(1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "ps-1 pe-1 pb-2 flex-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: 'Type',
                    dict: typeDict,
                    onSelect: onSelectType
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardFilter.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    style: {
                        width: '10rem'
                    },
                    maxLength: "70",
                    onChange: nameChanged
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardFilter.js",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$dropdown$2f$BaseDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: 'Status',
                    dict: statusDict,
                    onSelect: onSelectStatus
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardFilter.js",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardFilter.js",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardFilter.js",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c = PerkCardFilter;
var _c;
__turbopack_refresh__.register(_c, "PerkCardFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardToast.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/StackEffectView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/ToastContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Toast.js [app-client] (ecmascript)");
;
;
;
;
function PerkCardToast(props) {
    if (!props.showToast || !props.item) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ToastContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-3 position-fixed p-3",
        position: "top-center",
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: {
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            bg: "light",
            onClose: (e)=>props.setShowToast(false),
            show: props.showToast,
            animation: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "pe-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "ms-2 mt-auto mb-auto p-auto me-auto",
                        children: props.item['fullName']
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardToast.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardToast.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "pt-1 pb-2 modal-scroll-60 p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: props.item
                    }, void 0, false, {
                        fileName: "[project]/src/perkCard/view/PerkCardToast.js",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardToast.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardToast.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardToast.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = PerkCardToast;
var _c;
__turbopack_refresh__.register(_c, "PerkCardToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perkCard/view/PerkCardView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardToast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$FilterDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/FilterDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
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
const questionPopoverHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
    children: "Perk Cards"
}, void 0, false, {
    fileName: "[project]/src/perkCard/view/PerkCardView.js",
    lineNumber: 13,
    columnNumber: 32
}, this);
const questionPopoverBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Items with next properties are not included:"
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardView.js",
                lineNumber: 17,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 17,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " Vault"
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 18,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 18,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " CUT"
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 19,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 19,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " zzz_Babylon"
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 20,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 20,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: [
                "⁃",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: " zzz_deleted"
                }, void 0, false, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 21,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 21,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Parsed from:"
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardView.js",
                lineNumber: 22,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 22,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].perkCardParseVersion
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardView.js",
                lineNumber: 23,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 23,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].perkCardParseVersionName
            }, void 0, false, {
                fileName: "[project]/src/perkCard/view/PerkCardView.js",
                lineNumber: 24,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    ]
}, void 0, true);
const questionPopover = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](questionPopoverHeader, questionPopoverBody, 'PerkCardQuestionPopoverPlace');
const PerkCardView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function PerkCardView() {
    _s();
    console.log("PerkCardView");
    const [currentItem, setCurrentItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [filterName, setFilterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All"); // Legendary / Non Legendary
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "PerkCardQuestionPopoverPlace"
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    style: {
                                        width: '12rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ac-text",
                                        children: "Perk Cards"
                                    }, void 0, false, {
                                        fileName: "[project]/src/perkCard/view/PerkCardView.js",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "stats-text",
                                    style: {
                                        width: '2rem'
                                    },
                                    onClick: onQClick,
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: currentItem,
                            showToast: showToast,
                            setShowToast: setShowToast
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            setFilterType: setFilterType,
                            setFilterName: setFilterName,
                            filterType: filterType,
                            setCurrentPage: setCurrentPage,
                            filterStatus: filterStatus,
                            setFilterStatus: setFilterStatus
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$FilterDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            filterType: filterType,
                            filterEffect: filterStatus
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            filterType: filterType,
                            filterName: filterName,
                            filterStatus: filterStatus,
                            currentPage: currentPage,
                            setCurrentPage: setCurrentPage,
                            currentItem: currentItem,
                            setCurrentItem: setCurrentItem,
                            showToast: showToast,
                            setShowToast: setShowToast
                        }, void 0, false, {
                            fileName: "[project]/src/perkCard/view/PerkCardView.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/perkCard/view/PerkCardView.js",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCard/view/PerkCardView.js",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCard/view/PerkCardView.js",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}, "2IwL/OYkXzRi7pcgBQxS2ARZXOQ=")), "2IwL/OYkXzRi7pcgBQxS2ARZXOQ=");
_c1 = PerkCardView;
const __TURBOPACK__default__export__ = PerkCardView;
var _c, _c1;
__turbopack_refresh__.register(_c, "PerkCardView$memo");
__turbopack_refresh__.register(_c1, "PerkCardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/perk/view/PerkCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCompactView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
;
;
;
;
function buildPerkEffect(effect, key, onEffectClick) {
    const rows = getRows(effect, onEffectClick);
    const conditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConditionStrings"])(effect.conditions, "mt-1 p-1");
    const indent = conditions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-1"
    }, void 0, false, {
        fileName: "[project]/src/perk/view/PerkCompactView.js",
        lineNumber: 9,
        columnNumber: 47
    }, this) : null;
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            conditions,
            indent,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Type:", effect.e_type, 'blue'),
            rows
        ]
    }, void 0, true);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEffect"])(key, body);
}
function getRows(effect, onEffectClick) {
    const vType = effect.v_type;
    if (vType === 0 && effect.e_type === "Ability") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(effect.spell, onEffectClick)
        }, void 0, false);
    } else if (vType === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", effect.entry, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Operation:", effect.op, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Value:", effect.value, 'blue')
            ]
        }, void 0, true);
    } else if (vType === 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", effect.entry, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Operation:", effect.op, 'blue')
            ]
        }, void 0, true);
    } else if (vType === 5) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", effect.entry, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Operation:", effect.op, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(effect.value, onEffectClick)
            ]
        }, void 0, true);
    } else if (vType === 8) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", effect.entry, 'blue'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Operation:", effect.op, 'blue'),
                buildActors(effect.value)
            ]
        }, void 0, true);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: [
                        "Does not have a view for type: ",
                        vType
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/perk/view/PerkCompactView.js",
                    lineNumber: 63,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/perk/view/PerkCompactView.js",
                lineNumber: 63,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perk/view/PerkCompactView.js",
            lineNumber: 62,
            columnNumber: 13
        }, this);
    }
}
function buildActors(value) {
    const actor1 = value.actor1;
    const actor2 = value.actor2;
    const val = value.value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "mt-1 mb-1 p-1 m-0",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(actor1),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(actor2),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Value:", val, 'blue')
        ]
    }, void 0, true, {
        fileName: "[project]/src/perk/view/PerkCompactView.js",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
function getEffects(effects, onEffectClick) {
    const result = [];
    for(let i = 0; i < effects.length; i++){
        const effect = effects[i];
        result.push(buildPerkEffect(effect, i, onEffectClick));
    }
    return result;
}
function PerkCompactView(props) {
    const perk = props.perk;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idNameRow"])(perk.id, perk.name),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTextBlock"])(perk.desc, null, null, "mt-2 p-1"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConditionStrings"])(perk.conditions, "mt-2 p-1"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vmadView"])(perk.id, perk.vmad, props.onEffectClick),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "pt-0 mt-2 mb-2",
                children: "Effects"
            }, void 0, false, {
                fileName: "[project]/src/perk/view/PerkCompactView.js",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            getEffects(perk.effects, props.onEffectClick)
        ]
    }, void 0, true);
}
_c = PerkCompactView;
var _c;
__turbopack_refresh__.register(_c, "PerkCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/spell/view/SpellCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SpellCompactView),
    "getEffects": (()=>getEffects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
;
;
;
function getEffects(effects, onEffectClick) {
    const result = [];
    for(let i = 0; i < effects.length; i++){
        const effect = effects[i];
        const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(effect.m_effect, onEffectClick),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-1"
                }, void 0, false, {
                    fileName: "[project]/src/spell/view/SpellCompactView.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConditionStrings"])(effect.conditions, "mt-1 p-1"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCurve"])(effect.d_curv, effect.curve_max_value),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Magnitude:", effect.magnitude, 'magenta', true, true),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobMagnitude"])(effect),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Duration:", effect.duration, 'purple', true, true),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobDuration"])(effect),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Area:", effect.area, 'blue', true, true),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(effect.actor)
            ]
        }, void 0, true);
        result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEffect"])(i, body));
    }
    return result;
}
function getPerk(perkId, onEffectClick) {
    if (!perkId || perkId === "" || perkId === "00000000") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(perkId, onEffectClick);
}
function SpellCompactView(props) {
    const spell = props.spell;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idNameRow"])(spell.id, spell.name),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "pt-0 mt-2 mb-2",
                children: "Properties"
            }, void 0, false, {
                fileName: "[project]/src/spell/view/SpellCompactView.js",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", spell.full, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Type:", spell.type, 'blue', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Target:", spell.target, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Charge Time:", spell.time, 'blue', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Range:", spell.range, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Duration:", spell.duration, 'blue', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Duration type:", spell.e_type, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vmadView"])(spell.id, spell.vmad, props.onEffectClick),
            getPerk(spell.perk, props.onEffectClick),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "pt-0 mt-2 mb-2",
                children: "Effects"
            }, void 0, false, {
                fileName: "[project]/src/spell/view/SpellCompactView.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            getEffects(spell.mag_effects, props.onEffectClick)
        ]
    }, void 0, true);
}
_c = SpellCompactView;
var _c;
__turbopack_refresh__.register(_c, "SpellCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/effect/view/EffectCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EffectCompactView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ProjView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
;
;
;
;
function checkEmpty(obj) {
    return !obj || obj === "" || obj === "00000000";
}
function getPerk(perkId, onEffectClick) {
    if (checkEmpty(perkId)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(perkId, onEffectClick);
}
function getAbility(spellId, onEffectClick) {
    if (checkEmpty(spellId)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(spellId, onEffectClick);
}
function getDamageType(damageType) {
    if (checkEmpty(damageType)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (typeof damageType === typeof "") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Value:", damageType, 'purple', false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(damageType, "Damage type");
}
function getExplosion(explosion) {
    if (checkEmpty(explosion)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpView"])(explosion);
}
function getProjectile(projectile) {
    if (checkEmpty(projectile)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "View for projectile is not implemented"
    }, void 0, false);
}
function getResistance(resistance) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(resistance, "Resistance");
}
function EffectCompactView(props) {
    const effect = props.effect;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idNameRow"])(effect.id, effect.name),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vmadView"])(effect.id, effect.vmad, props.onEffectClick),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "pt-0 mt-2 mb-2",
                children: "Properties"
            }, void 0, false, {
                fileName: "[project]/src/effect/view/EffectCompactView.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTextBlock"])(effect.desc, null, null, "mt-1 p-1"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConditionStrings"])(effect.conditions, "mt-1 p-1"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Name:", effect.full, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Type:", effect.a_type, 'blue', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Duration type:", effect.e_type, 'purple', false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRow"])("Target:", effect.target, "blue", false),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(effect.actor_value1),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(effect.actor_value2),
            getAbility(effect.ability, props.onEffectClick),
            getPerk(effect.perk, props.onEffectClick),
            getDamageType(effect.d_type),
            getExplosion(effect.explosion),
            getProjectile(effect.projectile),
            getResistance(effect.resist)
        ]
    }, void 0, true);
}
_c = EffectCompactView;
var _c;
__turbopack_refresh__.register(_c, "EffectCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/vmad/view/VMADCompactView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>VMADCompactView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectViewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
;
;
;
// float, bool, int, string, object, array_obj, array_int, struct, struct_array
function buildBody(vmad, id, onEffectClick) {
    const result = [];
    for(let i = 0; i < vmad.length; i++){
        const obj = vmad[i];
        const type = obj.type;
        const vmadId = obj.name + i + id;
        if (type === "float" || type === "bool" || type === "int" || type === "string") {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: textBlock(obj.name, obj.value, obj.script_name)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 12,
                columnNumber: 25
            }, this));
        } else if (type === "obj") {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: objView(obj.value, obj.name, obj.script_name, onEffectClick)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 14,
                columnNumber: 25
            }, this));
        } else if (type === "array_obj") {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: objArrayView(obj, onEffectClick)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 16,
                columnNumber: 25
            }, this));
        } else if (type === "struct") {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: [
                        obj.name,
                        " ",
                        obj.type
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/vmad/view/VMADCompactView.js",
                    lineNumber: 18,
                    columnNumber: 38
                }, this)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 18,
                columnNumber: 25
            }, this));
        } else if (type === "struct_array") {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: structArrayView(obj, vmadId, onEffectClick)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 20,
                columnNumber: 25
            }, this));
        } else {
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: [
                        obj.name,
                        " ",
                        obj.type
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/vmad/view/VMADCompactView.js",
                    lineNumber: 22,
                    columnNumber: 38
                }, this)
            }, i, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 22,
                columnNumber: 25
            }, this));
        }
    }
    return result;
}
function textBlock(header, text, footer) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTextBlock"])(text, header, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex justify-content-end pe-1",
        children: footer
    }, void 0, false, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 29,
        columnNumber: 41
    }, this), "mt-1 mb-1", "#003112", "#c8ffdc");
}
/* TODO: Integrate Struct View
function vmadStruct(obj, vmad, id, onEffectClick) {
    return (
        <div key={id} className="mt-1 mb-1 p-1" style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffd560', backgroundColor: '#fff4d7'}}>
            <div className="d-flex justify-content-center"><small><b style={{color: '#5e4500'}}>{obj.name}</b></small></div>
            {getVMADButton(id, vmad, onEffectClick)}
        </div>
    )
}*/ function objArrayView(objArray, onEffectClick) {
    const result = [];
    const objs = objArray.value;
    for(let i = 0; i < objs.length; i++){
        const obj = objs[i];
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: objView(obj, objArray.name, objArray.script_name, onEffectClick)
        }, i, false, {
            fileName: "[project]/src/vmad/view/VMADCompactView.js",
            lineNumber: 47,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 mb-1 p-1 pb-0",
        style: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#61faff',
            backgroundColor: '#eafdff'
        },
        children: result
    }, void 0, false, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
function structArrayView(obj, id, onEffectClick) {
    const result = [];
    const vmads = obj.value;
    for(let i = 0; i < vmads.length; i++){
        const vmad = vmads[i];
        const key = id + i;
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVMADButton"])(key, vmad, onEffectClick, "VMAD " + (i + 1))
        }, key, false, {
            fileName: "[project]/src/vmad/view/VMADCompactView.js",
            lineNumber: 62,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 mb-1 p-1 pb-0",
        style: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#61faff',
            backgroundColor: '#eafdff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: '#003e3e'
                        },
                        children: obj.name
                    }, void 0, false, {
                        fileName: "[project]/src/vmad/view/VMADCompactView.js",
                        lineNumber: 66,
                        columnNumber: 67
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/vmad/view/VMADCompactView.js",
                    lineNumber: 66,
                    columnNumber: 60
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            result,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.7rem'
                },
                className: "d-flex justify-content-end pt-1",
                children: obj.script_name
            }, void 0, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
function effectButtonView(obj, name, scriptName, onEffectClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 mb-1 p-1 pb-0",
        style: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#ffd560',
            backgroundColor: '#fff4d7'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: '#5e4500'
                        },
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/vmad/view/VMADCompactView.js",
                        lineNumber: 76,
                        columnNumber: 67
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/vmad/view/VMADCompactView.js",
                    lineNumber: 76,
                    columnNumber: 60
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectButton"])(obj.id, onEffectClick),
            getScriptNameView(scriptName)
        ]
    }, void 0, true, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
function getScriptNameView(scriptName) {
    if (!scriptName) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '0.7rem'
        },
        className: "d-flex justify-content-end pt-1",
        children: scriptName
    }, void 0, false, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 87,
        columnNumber: 13
    }, this);
}
function objView(obj, name, scriptName, onEffectClick) {
    if (obj.label === 'SPEL' || obj.label === 'MGEF' || obj.label === 'PERK' || obj.label === 'ALCH') {
        return effectButtonView(obj, name, scriptName, onEffectClick);
    } else if (obj.label === 'AVIF') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActor"])(obj, name, getScriptNameView(scriptName));
    } else if (obj.label === 'GLOB') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobValue"])(obj, name, getScriptNameView(scriptName));
    }
    return textBlock(name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectViewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNameByLabel"])(obj.label) + " - (" + name + " / " + obj.id + ")", scriptName);
}
function buildView(vmad, id, onEffectClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "mt-1 mb-1 m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "pt-0 pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "VMAD"
                    }, void 0, false, {
                        fileName: "[project]/src/vmad/view/VMADCompactView.js",
                        lineNumber: 105,
                        columnNumber: 20
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/vmad/view/VMADCompactView.js",
                    lineNumber: 105,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-1",
                children: buildBody(vmad, id, onEffectClick)
            }, void 0, false, {
                fileName: "[project]/src/vmad/view/VMADCompactView.js",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/vmad/view/VMADCompactView.js",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
function VMADCompactView(props) {
    const vmad = props.vmad.vmad;
    const id = props.vmad.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: buildView(vmad, id, props.onEffectClick)
    }, void 0, false);
}
_c = VMADCompactView;
var _c;
__turbopack_refresh__.register(_c, "VMADCompactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/comparator/view/ComparatorChartView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>ComparatorChartView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const { Chart } = await __turbopack_require__("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
function getData(values, label, color) {
    return {
        labels: values.xValues,
        datasets: [
            {
                type: 'line',
                label: label,
                data: values.yValuesRed,
                borderColor: "#db0076",
                pointRadius: 1,
                borderWidth: 1,
                fill: false
            },
            {
                type: 'line',
                label: label,
                data: values.yValuesBlue,
                borderColor: "#0072db",
                pointRadius: 1,
                borderWidth: 1,
                fill: false
            },
            {
                type: 'scatter',
                label: values.resPoints.b.label,
                data: values.resPoints.b.values,
                borderColor: values.resPoints.b.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            },
            {
                type: 'scatter',
                label: values.resPoints.e.label,
                data: values.resPoints.e.values,
                borderColor: values.resPoints.e.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            },
            {
                type: 'scatter',
                label: values.resPoints.f.label,
                data: values.resPoints.f.values,
                borderColor: values.resPoints.f.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            },
            {
                type: 'scatter',
                label: values.resPoints.c.label,
                data: values.resPoints.c.values,
                borderColor: values.resPoints.c.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            },
            {
                type: 'scatter',
                label: values.resPoints.p.label,
                data: values.resPoints.p.values,
                borderColor: values.resPoints.p.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            },
            {
                type: 'scatter',
                label: values.resPoints.r.label,
                data: values.resPoints.r.values,
                borderColor: values.resPoints.r.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true
            }
        ]
    };
}
function getConfig(data) {
    return {
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Resistance',
                        color: 'black'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'DPS',
                        color: 'black'
                    }
                }
            },
            animation: false
        }
    };
}
function drawChart(config, chartId) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    new Chart(document.getElementById(chartId), config);
}
function getCanvas(id) {
    if (!id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            className: "p-0 pe-2",
            style: {
                maxWidth: '60rem',
                maxHeight: '30rem'
            },
            id: id
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorChartView.js",
            lineNumber: 136,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorChartView.js",
        lineNumber: 135,
        columnNumber: 9
    }, this);
}
function ComparatorChartView(props) {
    _s();
    let values = props.values;
    if (!values) {
        values = {
            xValues: [],
            yValuesRed: [],
            yValuesBlue: [],
            resPoints: []
        };
    }
    const config = getConfig(getData(values, "", props.color));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparatorChartView.useEffect": ()=>{
            drawChart(config, props.chartId);
        }
    }["ComparatorChartView.useEffect"]);
    return getCanvas(props.chartId);
}
_s(ComparatorChartView, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ComparatorChartView;
var _c;
__turbopack_refresh__.register(_c, "ComparatorChartView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/comparator/view/ComparatorWeaponDataView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ComparatorWeaponDataView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponImages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$BoostRowView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/snapshot/BoostRowView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$ModView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/snapshot/ModView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$SVGIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/svg/SVGIcons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EStuffBoost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/ParametersApplier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$WeaponBadgeView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/WeaponBadgeView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals> <export default as ConfigProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
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
const marks100 = {
    5: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "5%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 23,
        columnNumber: 8
    }, this),
    20: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "20%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 24,
        columnNumber: 9
    }, this),
    40: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "40%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 25,
        columnNumber: 9
    }, this),
    60: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "60%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 26,
        columnNumber: 9
    }, this),
    80: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "80%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 27,
        columnNumber: 9
    }, this),
    100: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "100%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 28,
        columnNumber: 10
    }, this)
};
function getLabel(defTitle, color, weaponData) {
    const left = weaponData ? weaponData.wSpec.defaultName : defTitle;
    const right = weaponData && weaponData.wSpec.iconName !== "" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageElement"])(weaponData.wSpec.iconName, '2rem') : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: '2rem'
        }
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 33,
        columnNumber: 124
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            'flexDirection': 'row'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comparator-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    style: {
                        color: color
                    },
                    children: left
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-100 d-flex justify-content-end",
                children: right
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
function getApplyButton(props, data) {
    function onClick(e) {
        props.setLoading(true);
        setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].applyCalculatedParameters(data, props);
            props.setLoading(false);
        }, 100);
    }
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        size: "sm",
        variant: "warning",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Apply"
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 57,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
            lineNumber: 57,
            columnNumber: 67
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 57,
        columnNumber: 13
    }, this);
}
function getContent(props) {
    const data = props.data;
    function onClick(e) {
        const dataRef = props.weaponDataRef.current;
        const setData = props.setData;
        const newData = {
            player: dataRef.playerRef.current,
            playerStats: dataRef.playerStatsRef.current,
            boostDamage: dataRef.boostDamageRef.current,
            wSpec: dataRef.wSpecRef.current,
            extraDamage: dataRef.extraDamageRef.current,
            additionalDamages: dataRef.additionalDamagesRef.current,
            consumableList: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertStuffBoost"])(dataRef.stuffBoostRef.current),
            accuracy: 100
        };
        const copyData = JSON.parse(JSON.stringify(newData));
        setData(copyData);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            weaponItemView(data, props.setData),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-3"
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leftRight2"])(getApplyButton(props, data), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "sm",
                variant: "warning",
                onClick: onClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "Set"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 82,
                        columnNumber: 111
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                    lineNumber: 82,
                    columnNumber: 108
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 82,
                columnNumber: 54
            }, this))
        ]
    }, void 0, true);
}
function weaponView(weapon, player, playerStats) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$WeaponBadgeView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            weapon: weapon,
            player: player,
            playerStats: playerStats
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
            lineNumber: 90,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
function weaponItemView(data, setData) {
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const [, allStuffBoosts] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].buildFromList(data.consumableList, data.player);
    const weapon = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.wSpec, data.boostDamage, data.extraDamage, data.additionalDamages, allStuffBoosts, data.playerStats).build();
    const wSpec = data.wSpec;
    const boostDamage = data.boostDamage;
    const stuff = data.consumableList;
    const modTitle = !wSpec.mods || wSpec.mods.length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        className: "p-0 mt-3 mb-1",
        children: "Mods"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 104,
        columnNumber: 73
    }, this);
    const usedPerks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$BoostRowView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUsedPerks"])(boostDamage);
    const boostTitle = stuff.length === 0 && usedPerks.length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        className: "p-0 mt-3 mb-1",
        children: "Boosts"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 106,
        columnNumber: 81
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-2",
                style: {
                    backgroundColor: '#fafafa',
                    borderRadius: '5px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#cfcfcf'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        className: "mt-1 mb-1",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    extraDamageView(data, setData)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            weaponView(weapon, data.player, data.playerStats),
            getLegendary(wSpec),
            modTitle,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$ModView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mods: wSpec.mods,
                fontSize: "0.75rem"
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            boostTitle,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snapshot$2f$BoostRowView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                boostDamage: boostDamage,
                stuff: stuff
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function extraDamageView(data, setData) {
    function useCritChanged(e) {
        data.extraDamage.useCrit = e.target.checked;
        setData({
            ...data
        });
    }
    function useSneakChanged(e) {
        data.extraDamage.useSneak = e.target.checked;
        const card = data.boostDamage.follow_through;
        card.displayed_value = card.is_used && data.extraDamage.useSneak ? card.value : 0.0;
        setData({
            ...data
        });
    }
    function useHeadChanged(e) {
        data.extraDamage.useHead = e.target.checked;
        setData({
            ...data
        });
    }
    function crf(e) {
        data.extraDamage.critFreq -= 1;
        if (data.extraDamage.critFreq === 0) {
            data.extraDamage.critFreq = 7;
        }
        setData({
            ...data
        });
    }
    function hef(e) {
        data.extraDamage.headFreq += 10;
        if (data.extraDamage.headFreq > 100) {
            data.extraDamage.headFreq = 20;
        }
        setData({
            ...data
        });
    }
    function accuracyChanged(e) {
        data.accuracy = e;
        setData({
            ...data
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "p-0 m-0 justify-content-evenly",
                direction: "horizontal",
                gap: 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                        onChange: useCritChanged,
                        checked: data.extraDamage.useCrit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "ps-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "☠️ CRIT"
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                                lineNumber: 163,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                            lineNumber: 163,
                            columnNumber: 89
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                        onChange: useSneakChanged,
                        checked: data.extraDamage.useSneak,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "ps-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "🐍 SNEAK"
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                                lineNumber: 164,
                                columnNumber: 116
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                            lineNumber: 164,
                            columnNumber: 91
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                        onChange: useHeadChanged,
                        checked: data.extraDamage.useHead,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "ps-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "🤕 HEAD"
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                                lineNumber: 165,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                            lineNumber: 165,
                            columnNumber: 89
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 162,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-muted d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "blue-white-border",
                        style: {
                            width: '6.5rem',
                            height: '1.5rem'
                        },
                        className: "ms-2 me-2",
                        onClick: crf,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "☠️ Fr: 1 / ",
                                data.extraDamage.critFreq
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                            lineNumber: 168,
                            columnNumber: 134
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "blue-white-border",
                        style: {
                            width: '6.5rem',
                            height: '1.5rem'
                        },
                        className: "ms-2 me-2",
                        onClick: hef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "🤕 Fr: ",
                                data.extraDamage.headFreq,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                            lineNumber: 169,
                            columnNumber: 134
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-0 pt-1 ps-3 pe-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            fontSize: '0.65rem'
                        },
                        children: "Accuracy"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                        open: true,
                        onChange: accuracyChanged,
                        marks: marks100,
                        min: 5,
                        max: 100,
                        step: 1,
                        value: data.accuracy
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 171,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getLegendary(wSpec) {
    const leg1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 1);
    const leg2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 2);
    const leg3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 3);
    const leg4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 4);
    const leg5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 5);
    const title = (!leg1 || leg1 === "") && (!leg2 || leg2 === "") && (!leg3 || leg3 === "") && (!leg4 || leg4 === "") && (!leg5 || leg5 === "") ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        className: "p-0 mt-0 mb-1",
        children: "Legendary"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 185,
        columnNumber: 158
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            title,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "m-1 d-flex justify-content-center",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryBoxView"])(leg1, 1),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryBoxView"])(leg2, 2),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryBoxView"])(leg3, 3),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryBoxView"])(leg4, 4),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryBoxView"])(leg5, 5)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 189,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getExpandIcon(isActive) {
    const rotate = isActive ? "rotate(180deg)" : "rotate(90deg)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            transform: "translate(0, 5px) " + rotate
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$SVGIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {}, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
            lineNumber: 204,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 203,
        columnNumber: 9
    }, this);
}
function ComparatorWeaponDataView(props) {
    const items = [
        {
            key: '1',
            label: getLabel(props.defTitle, props.color, props.data),
            children: getContent(props)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__["ConfigProvider"], {
            theme: {
                components: {
                    Collapse: {
                        headerPadding: "2px 8px",
                        contentPadding: '8px'
                    }
                },
                token: {
                    fontSizeIcon: "36px"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                accordion: true,
                expandIcon: ({ isActive })=>getExpandIcon(isActive),
                items: items
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
                lineNumber: 234,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
            lineNumber: 220,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorWeaponDataView.js",
        lineNumber: 219,
        columnNumber: 9
    }, this);
}
_c = ComparatorWeaponDataView;
var _c;
__turbopack_refresh__.register(_c, "ComparatorWeaponDataView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/comparator/view/ComparatorView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/comparator/view/ComparatorChartView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureInfoButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorWeaponDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/comparator/view/ComparatorWeaponDataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Calc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$LoadingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/LoadingModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const explanation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "‣ Adjust parameters for a weapon in ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Weapon Specs"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 22,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 22,
                    columnNumber: 48
                }, this),
                " or choose a weapon under ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Weapons"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 22,
                        columnNumber: 103
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 22,
                    columnNumber: 100
                }, this),
                " tab and click ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Set"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 22,
                        columnNumber: 139
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 22,
                    columnNumber: 136
                }, this),
                " button under ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: 'red'
                        },
                        children: "Red"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 22,
                        columnNumber: 170
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 22,
                    columnNumber: 167
                }, this),
                " section."
            ]
        }, void 0, true, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 22,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "‣ Choose another weapon or adjust previously chosen and click ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Set"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 23,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 23,
                    columnNumber: 74
                }, this),
                " button under ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: 'blue'
                        },
                        children: "Blue"
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 23,
                        columnNumber: 108
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 23,
                    columnNumber: 105
                }, this),
                " section."
            ]
        }, void 0, true, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 23,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "‣ See in which case one better than other in ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: "damage per second"
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 24,
                    columnNumber: 57
                }, this),
                " term. (For example: Anti-Armor vs. Bloodied)."
            ]
        }, void 0, true, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 24,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "‣ Choose weapon's accuracy from subjective feeling / experience. Accuracy and chance of every particular damage item are also counting."
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 25,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "‣ Time damage is counting without stacking."
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 26,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "‣ Creature is used to apply appropriate bonuses, default reduction and resistance."
        }, void 0, false, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 27,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "‣ ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: "First Blood"
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 28,
                    columnNumber: 14
                }, this),
                ", ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: "Last Shot"
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 28,
                    columnNumber: 34
                }, this),
                ", ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: "Executioner"
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 28,
                    columnNumber: 52
                }, this),
                " are not counting, to see these effects in action, adjust BDB and TDB bonuses under ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    children: "Additional Damage"
                }, void 0, false, {
                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                    lineNumber: 28,
                    columnNumber: 154
                }, this),
                " section."
            ]
        }, void 0, true, {
            fileName: "[project]/src/comparator/view/ComparatorView.js",
            lineNumber: 28,
            columnNumber: 9
        }, this)
    ]
}, void 0, true);
const creatureNames = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureNames();
const marks90 = {
    0: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "0%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 34,
        columnNumber: 8
    }, this),
    10: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "10%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 35,
        columnNumber: 9
    }, this),
    20: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "20%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 36,
        columnNumber: 9
    }, this),
    30: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "30%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 37,
        columnNumber: 9
    }, this),
    40: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "40%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 38,
        columnNumber: 9
    }, this),
    50: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "50%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 39,
        columnNumber: 9
    }, this),
    60: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "60%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 40,
        columnNumber: 9
    }, this),
    70: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "70%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 41,
        columnNumber: 9
    }, this),
    80: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "80%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 42,
        columnNumber: 9
    }, this),
    90: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "90%"
    }, void 0, false, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 43,
        columnNumber: 9
    }, this)
};
function buildDamages(creature, data) {
    if (!data) {
        return {
            xValues: [],
            yValues: []
        };
    }
    const [, consumables] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].buildFromList(data.consumableList, data.player);
    const weaponFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.wSpec, data.boostDamage, data.extraDamage, data.additionalDamages, consumables, data.playerStats);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Calc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphDamage"])(creature, weaponFactory, false, true, data.accuracy, 100);
}
function getYPoint(xValue, xValues, yValues) {
    let point = null;
    for(let i = 0; i < xValues.length; i++){
        const x = xValues[i];
        if (x === xValue) {
            point = yValues[i];
            break;
        }
    }
    return point;
}
function buildYPoints(xValue, xValues, yValues1, yValues2) {
    const result = [];
    const point1 = getYPoint(xValue, xValues, yValues1);
    const point2 = getYPoint(xValue, xValues, yValues2);
    if (point1) {
        result.push({
            x: xValue,
            y: point1
        });
    }
    if (point2) {
        result.push({
            x: xValue,
            y: point2
        });
    }
    return result;
}
function getResData(creature = null, xValues, redY, blueY) {
    let b = 0;
    let e = 0;
    let f = 0;
    let c = 0;
    let p = 0;
    let r = 0;
    if (creature) {
        b = creature.b;
        e = creature.e;
        f = creature.f;
        c = creature.c;
        p = creature.p;
        r = creature.r;
    }
    return {
        b: {
            values: buildYPoints(b, xValues, redY, blueY),
            label: 'Physical',
            color: 'grey'
        },
        e: {
            values: buildYPoints(e, xValues, redY, blueY),
            label: 'Energy',
            color: 'purple'
        },
        f: {
            values: buildYPoints(f, xValues, redY, blueY),
            label: 'Fire',
            color: 'red'
        },
        c: {
            values: buildYPoints(c, xValues, redY, blueY),
            label: 'Cold',
            color: 'blue'
        },
        p: {
            values: buildYPoints(p, xValues, redY, blueY),
            label: 'Poison',
            color: 'green'
        },
        r: {
            values: buildYPoints(r, xValues, redY, blueY),
            label: 'Radiation',
            color: 'orange'
        }
    };
}
const ComparatorView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ComparatorView(props) {
    _s();
    console.log("ComparatorView");
    const [creature, setCreature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreature"])(creatureNames[0], "Max", ""));
    const [reduction, setReduction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [blueData, setBlueData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [redData, setRedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let title = creature.capName;
    const openStat = (e)=>{
        props.setShowStat(!props.showStatRef.current);
        e.stopPropagation();
    };
    const values = {
        xValues: [],
        yValuesRed: [],
        yValuesBlue: [],
        resPoints: null
    };
    const blueValues = buildDamages(creature, blueData);
    const redValues = buildDamages(creature, redData);
    values.xValues = blueValues.xValues > redValues.xValues ? blueValues.xValues : redValues.xValues;
    values.yValuesBlue = blueValues.yValues;
    values.yValuesRed = redValues.yValues;
    values.resPoints = getResData(creature, values.xValues, redValues.yValues, blueValues.yValues);
    function onCreatureNameSelect(e) {
        const creature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreature"])(e, "Max", "");
        setReduction(creature.damageReduction * 100.0);
        setCreature(creature);
    }
    function reductionChanged(e) {
        creature.damageReduction = e / 100;
        setReduction(e);
    }
    function reductionChangeFinished(e) {}
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$LoadingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: loading
            }, void 0, false, {
                fileName: "[project]/src/comparator/view/ComparatorView.js",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "4",
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
                                        children: "DPS Comparator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 174,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                                    lineNumber: 173,
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
                                    fileName: "[project]/src/comparator/view/ComparatorView.js",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/comparator/view/ComparatorView.js",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 171,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                        className: "mt-1 p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'row'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningPopoverBadge"], {
                                            sign: "!",
                                            message: explanation,
                                            header: "Explanation",
                                            placement: 'right'
                                        }, void 0, false, {
                                            fileName: "[project]/src/comparator/view/ComparatorView.js",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatureDropdownButton"], {
                                            title: title,
                                            names: creatureNames,
                                            onSelect: onCreatureNameSelect
                                        }, void 0, false, {
                                            fileName: "[project]/src/comparator/view/ComparatorView.js",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'end'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatureShortInfoButton"], {
                                            creature: creature
                                        }, void 0, false, {
                                            fileName: "[project]/src/comparator/view/ComparatorView.js",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 187,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/comparator/view/ComparatorView.js",
                                lineNumber: 180,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                chartId: "ComparatorChart",
                                values: values
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorView.js",
                                lineNumber: 191,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 pt-1 ps-3 pe-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        style: {
                                            fontSize: '0.65rem'
                                        },
                                        children: "Damage Reduction"
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                                        open: true,
                                        onChangeComplete: reductionChangeFinished,
                                        onChange: reductionChanged,
                                        marks: marks90,
                                        min: 0,
                                        max: 90,
                                        step: 1,
                                        value: reduction
                                    }, void 0, false, {
                                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/comparator/view/ComparatorView.js",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorWeaponDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                defTitle: "Red",
                                itemId: "red",
                                color: "#db0076",
                                weaponDataRef: props.weaponDataRef,
                                setLoading: setLoading,
                                data: redData,
                                setData: setRedData,
                                setWSpec: props.setWSpec,
                                setBoostDamage: props.setBoostDamage,
                                setPlayer: props.setPlayer,
                                setPlayerStats: props.setPlayerStats,
                                setAdditionalDamages: props.setAdditionalDamages,
                                setExtraDamage: props.setExtraDamage,
                                setFoodPref: props.setFoodPref,
                                setStuffBoost: props.setStuffBoost,
                                setMagazines: props.setMagazines,
                                setBobbleHeads: props.setBobbleHeads,
                                setFood: props.setFood,
                                setDrink: props.setDrink,
                                setPsycho: props.setPsycho,
                                setSerum: props.setSerum,
                                setOthers: props.setOthers
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorView.js",
                                lineNumber: 196,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$comparator$2f$view$2f$ComparatorWeaponDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                defTitle: "Blue",
                                itemId: "blue",
                                color: "#0072db",
                                weaponDataRef: props.weaponDataRef,
                                setLoading: setLoading,
                                data: blueData,
                                setData: setBlueData,
                                setWSpec: props.setWSpec,
                                setBoostDamage: props.setBoostDamage,
                                setPlayer: props.setPlayer,
                                setPlayerStats: props.setPlayerStats,
                                setAdditionalDamages: props.setAdditionalDamages,
                                setExtraDamage: props.setExtraDamage,
                                setFoodPref: props.setFoodPref,
                                setStuffBoost: props.setStuffBoost,
                                setMagazines: props.setMagazines,
                                setBobbleHeads: props.setBobbleHeads,
                                setFood: props.setFood,
                                setDrink: props.setDrink,
                                setPsycho: props.setPsycho,
                                setSerum: props.setSerum,
                                setOthers: props.setOthers
                            }, void 0, false, {
                                fileName: "[project]/src/comparator/view/ComparatorView.js",
                                lineNumber: 197,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/comparator/view/ComparatorView.js",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/comparator/view/ComparatorView.js",
                lineNumber: 170,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/comparator/view/ComparatorView.js",
        lineNumber: 168,
        columnNumber: 9
    }, this);
}, "i6exF2N8UNGvifyn/iqiTf0sppk=")), "i6exF2N8UNGvifyn/iqiTf0sppk=");
_c1 = ComparatorView;
const __TURBOPACK__default__export__ = ComparatorView;
var _c, _c1;
__turbopack_refresh__.register(_c, "ComparatorView$memo");
__turbopack_refresh__.register(_c1, "ComparatorView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
}]);

//# sourceMappingURL=src_958ec7._.js.map