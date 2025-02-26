(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_creature_f030f0._.js", {

"[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureDataProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$creature_health_res$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/creature_health_res.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$RaceDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/race/RaceDataProvider.js [app-client] (ecmascript)");
;
;
const creatureNames = [];
for(const creatureName in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$creature_health_res$2e$json__$28$json$29$__["default"][0]){
    creatureNames.push(creatureName);
}
const creatureLevels = [];
const creatureLevelsWithMax = [
    "Max"
];
for(let i = 1; i <= 150; i++){
    creatureLevels.push(i);
    creatureLevelsWithMax.push(i);
}
creatureNames.sort();
class CreatureDataProvider {
    static getCreatureData(creatureName) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$creature_health_res$2e$json__$28$json$29$__["default"][0][creatureName];
    }
    static getCreatureParametersByName(creatureName, level) {
        const creatureData = CreatureDataProvider.getCreatureData(creatureName);
        return CreatureDataProvider.getCreatureParametersByData(creatureData, level);
    }
    static getCreatureParametersByData(creatureData, level) {
        const result = {};
        const creatureDataCurve = creatureData['curve'];
        for(const name in creatureDataCurve){
            const values = creatureDataCurve[name];
            const lastItem = values.length - 1;
            for(let i = 0; i <= lastItem; i++){
                const sample = values[i];
                const sampleLevel = sample.x;
                const sampleValue = sample.y;
                if (i === 0 && level <= sampleLevel) {
                    result[name] = sampleValue;
                    break;
                } else if (level === sampleLevel) {
                    result[name] = sampleValue;
                    break;
                } else if (i !== 0) {
                    const prevSampleLevel = values[i - 1].x;
                    if (level > prevSampleLevel && level < sampleLevel) {
                        const prevSampleValue = values[i - 1].y;
                        result[name] = CreatureDataProvider.calculateExactValue(prevSampleLevel, sampleLevel, level, prevSampleValue, sampleValue);
                        break;
                    }
                }
                if (i === lastItem) {
                    result[name] = sampleValue;
                    break;
                }
            }
        }
        result["immuneToRad"] = creatureData.immune_to_rad;
        result["immuneToPoison"] = creatureData.immune_to_poison;
        result["reduction"] = creatureData.reduction;
        result["reductions"] = [
            ...creatureData.reductions
        ];
        result["tags"] = [
            ...creatureData.tags
        ];
        result["reductionOnlyNotBleeding"] = creatureData.reduction_only_not_bleeding;
        const race = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$race$2f$RaceDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getRaceById(creatureData.race_id);
        result['body'] = {
            ...race.bodyData.body
        };
        result['headMult'] = CreatureDataProvider.getMaxBodyMultiplier(result['body']);
        result['normalMult'] = 1;
        result['averageMult'] = CreatureDataProvider.getAverageBodyMultiplier(result['body']);
        return result;
    }
    static getMaxBodyMultiplier(body) {
        let maxMult = 0;
        for(const name in body){
            const part = body[name];
            const mult = part.damage_mult;
            if (maxMult < mult) {
                maxMult = mult;
            }
        }
        return maxMult;
    }
    static getAverageBodyMultiplier(body) {
        let multSum = 0;
        let count = 0;
        for(const name in body){
            const part = body[name];
            multSum += part.damage_mult;
            count += 1;
        }
        return count === 0 ? 0 : multSum / count;
    }
    static calculateExactValue(prevLevel, nextLevel, curLevel, prevValue, nextValue) {
        const valueGap = nextValue - prevValue;
        const levelsAmount = nextLevel - prevLevel;
        const valuePerLevel = valueGap / levelsAmount;
        const shift = curLevel - prevLevel;
        return prevValue + valuePerLevel * shift;
    }
    static getCreatureNames() {
        return creatureNames;
    }
    static getCreatureLevels(withMax = false) {
        return withMax ? creatureLevelsWithMax : creatureLevels;
    }
    static getMaxLevel(name) {
        let creatureData = CreatureDataProvider.getCreatureData(name);
        if (!creatureData) {
            return 1;
        }
        creatureData = creatureData['curve'];
        const result = [];
        for(const name in creatureData){
            const values = creatureData[name];
            result.push(values[values.length - 1].x);
        }
        let max = Math.max(...result);
        if (max < 1) {
            max = 1;
        }
        return max;
    }
    static getLevelsList(name) {
        const maxLevel = CreatureDataProvider.getMaxLevel(name);
        const result = [];
        for(let i = 1; i <= maxLevel; i++){
            result.push(i);
        }
        return result;
    }
    static capitalizeCreatureName(creatureName) {
        let name = creatureName.charAt(0).toUpperCase() + creatureName.slice(1);
        return name.replaceAll("_", " ");
    }
    static getStyle(rType) {
        switch(rType){
            case "physical":
                return [
                    "💥 Physical",
                    "small p-1 bg-ballistic",
                    "grey"
                ];
            case "energy":
                return [
                    "⚡ Energy",
                    "small p-1 bg-energy",
                    "purple"
                ];
            case "fire":
                return [
                    "🔥 Fire",
                    "small p-1 bg-fire",
                    "red"
                ];
            case "cold":
                return [
                    "❄️ Cold",
                    "small p-1 bg-cold",
                    "#40aac2"
                ];
            case "poison":
                return [
                    "☣️ Poison",
                    "small p-1 bg-poison",
                    "green"
                ];
            case "radiation":
                return [
                    "☢️ Radiation",
                    "small p-1 bg-rad",
                    "#ccc976"
                ];
            case "health":
                return [
                    "❤️ Health",
                    "small p-1 bg-health",
                    "#cc7681"
                ];
            default:
                return [
                    "",
                    ""
                ];
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureNamesDropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureNamesDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/SimpleNameDropdown.js [app-client] (ecmascript)");
;
;
;
;
const names = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureNames();
function CreatureNamesDropdown(props) {
    function onSelect(e) {
        props.creatures[props.creature.fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreature"])(e, props.creature.level, props.creature.fieldName);
        props.creatureNamesRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreatureNames"])(props.creatures);
        props.setCreatures({
            ...props.creatures
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "blue-label",
        size: "sm",
        onSelect: onSelect,
        names: names,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: props.creature.capName
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureNamesDropdown.js",
            lineNumber: 17,
            columnNumber: 101
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureNamesDropdown.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = CreatureNamesDropdown;
var _c;
__turbopack_refresh__.register(_c, "CreatureNamesDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureLevelsDropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureLevelsDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/SimpleNameDropdown.js [app-client] (ecmascript)");
;
;
;
;
const levels = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureLevels(true);
function CreatureLevelsDropdown(props) {
    function onSelect(e) {
        props.creatures[props.creature.fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreature"])(props.creature.name, e, props.creature.fieldName);
        props.creatureNamesRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreatureNames"])(props.creatures);
        props.setCreatures({
            ...props.creatures
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "blue-label",
        size: "sm",
        onSelect: onSelect,
        names: levels,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: props.creature.level
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureLevelsDropdown.js",
            lineNumber: 17,
            columnNumber: 102
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureLevelsDropdown.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = CreatureLevelsDropdown;
var _c;
__turbopack_refresh__.register(_c, "CreatureLevelsDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureChooser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureChooser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureNamesDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureNamesDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureLevelsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureLevelsDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
;
;
;
;
;
function CreatureChooser(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "justify-content-center",
        direction: "horizontal",
        gap: 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                xs: 10,
                className: "d-flex justify-content-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureNamesDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    creatureNamesRef: props.creatureNamesRef,
                    creature: props.creature,
                    creatures: props.creatures,
                    setCreatures: props.setCreatures
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureChooser.js",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureChooser.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                xs: 2,
                className: "d-flex justify-content-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureLevelsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    creatureNamesRef: props.creatureNamesRef,
                    creature: props.creature,
                    creatures: props.creatures,
                    setCreatures: props.setCreatures
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureChooser.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureChooser.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureChooser.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = CreatureChooser;
var _c;
__turbopack_refresh__.register(_c, "CreatureChooser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureInfoPopover.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildCreatureInfo": (()=>buildCreatureInfo),
    "buildCreatureInfo2": (()=>buildCreatureInfo2),
    "buildCreatureSnortInfo": (()=>buildCreatureSnortInfo),
    "creatureInfoPopover": (()=>creatureInfoPopover),
    "creatureShortInfoPopover": (()=>creatureShortInfoPopover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
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
function getResBadge(className, value, immune) {
    const result = immune ? "Infinity" : value.toFixed(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            width: '2.7rem'
        },
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: result
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureInfoPopover.js",
            lineNumber: 15,
            columnNumber: 65
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function prepareTags(creature) {
    const tags3 = [];
    let tags;
    for(let i = 0; i < creature.tags.length; i++){
        if (i % 3 === 0) {
            tags = [];
            tags3.push(tags);
        }
        tags.push(creature.tags[i]);
    }
    const result = [];
    for(let i = 0; i < tags3.length; i++){
        const curTags = tags3[i];
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 mb-1 p-0 d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                className: "m-0",
                color: "purple",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: curTags.join(" ∙ ")
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 32,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 32,
                columnNumber: 107
            }, this)
        }, curTags.toString(), false, {
            fileName: "[project]/src/creature/CreatureInfoPopover.js",
            lineNumber: 32,
            columnNumber: 21
        }, this));
    }
    return result;
}
function showDamageIf(what, damageLine, notShow = false) {
    if (notShow || !damageLine || damageLine === "" || damageLine === 0 || damageLine.includes("0.0 - ↑0.0")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return what;
}
function buildCreatureInfo2(creature, resultDamage) {
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [
            creature.b,
            creature.e,
            creature.f,
            creature.p,
            creature.c,
            creature.r
        ];
    }
    const showHeadExp = creature.explosiveDamage === creature.headExpShotDamage;
    const showCritHeadExp = creature.critExplosiveDamage === creature.critExplosiveHeadDamage;
    let capitalized = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(creature.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex pb-2 justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: [
                        capitalized,
                        " (Lvl: ",
                        creature.level,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 57,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-0 pb-2 justify-content-center",
                direction: "horizontal",
                gap: 1,
                children: [
                    getResBadge("badge bg-ballistic-shadow", armor[0], false),
                    getResBadge("badge bg-energy-shadow", armor[1], false),
                    getResBadge("badge bg-fire-shadow", armor[2], false),
                    getResBadge("badge bg-poison-shadow", armor[3], creature.immuneToPoison),
                    getResBadge("badge bg-cold-shadow", armor[4], false),
                    getResBadge("badge bg-rad-shadow", armor[5], creature.immuneToRadiation)
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pb-0",
                direction: "vertical",
                gap: 0,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("❤️ Health:", creature.h.toFixed(2), "default", "red"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange"),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🐍 Sneak:", creature.sneak, "default", "green"), creature.sneak),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit:", creature.crit, "default", "magenta"), creature.crit),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💥 Total Damage:", creature.totalDamage, "default", "blue"),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🤕 HShot (" + creature.headShot.toFixed(2) + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage, showHeadExp),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage, showCritHeadExp),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tAmmo"], '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Reloads:", creature.reloads, "default", "green"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Reloads Time:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(creature.reloadsTime * 1000), "default", "green"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Life Time:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(creature.lifeTime), "default", "brown")
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
function buildCreatureInfo(creature, resultDamage, showDefaultResistance, weaponName = null) {
    let weaponSection;
    let wNameTrunc = "";
    if (!weaponName) {
        weaponSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        wNameTrunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(weaponName, 55);
        weaponSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 m-1 mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "badge bg-warning mb-0 text-dark p-2 shadow-outline-unselected",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: wNameTrunc
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureInfoPopover.js",
                        lineNumber: 98,
                        columnNumber: 97
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 98,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [
            creature.b,
            creature.e,
            creature.f,
            creature.p,
            creature.c,
            creature.r
        ];
    }
    const showHeadExp = creature.explosiveDamage === creature.headExpShotDamage;
    const showCritHeadExp = creature.critExplosiveDamage === creature.critExplosiveHeadDamage;
    let defaultResistance = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    if (showDefaultResistance) {
        defaultResistance = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "pt-0 pb-0 d-flex justify-content-center",
                    direction: "horizontal",
                    gap: 1,
                    children: [
                        getResBadge("badge bg-ballistic-shadow", creature.b, false),
                        getResBadge("badge bg-energy-shadow", creature.e, false),
                        getResBadge("badge bg-fire-shadow", creature.f, false),
                        getResBadge("badge bg-poison-shadow", creature.p, creature.immuneToPoison),
                        getResBadge("badge bg-cold-shadow", creature.c, false),
                        getResBadge("badge bg-rad-shadow", creature.r, creature.immuneToRadiation)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 115,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 m-0",
                    children: "v"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 123,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            defaultResistance,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-0 pb-2 d-flex justify-content-center",
                direction: "horizontal",
                gap: 1,
                children: [
                    getResBadge("badge bg-ballistic-shadow", armor[0], false),
                    getResBadge("badge bg-energy-shadow", armor[1], false),
                    getResBadge("badge bg-fire-shadow", armor[2], false),
                    getResBadge("badge bg-poison-shadow", armor[3], creature.immuneToPoison),
                    getResBadge("badge bg-cold-shadow", armor[4], false),
                    getResBadge("badge bg-rad-shadow", armor[5], creature.immuneToRadiation)
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            prepareTags(creature),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pb-0",
                direction: "vertical",
                gap: 0,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(" Body:", creature.curBody, "default", "default"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("❤️ Health:", creature.h.toFixed(2), "default", "red"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange"),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🐍 Sneak:", creature.sneak, "default", "green"), creature.sneak),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit:", creature.crit, "default", "magenta"), creature.crit),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💥 Total Damage:", creature.totalDamage, "default", "blue"),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🤕 HShot (" + creature.headShot.toFixed(2) + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage, showHeadExp),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage),
                    showDamageIf((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage, showCritHeadExp),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tAmmo"], '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Reloads:", creature.reloads, "default", "green"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Reloads Time:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(creature.reloadsTime * 1000), "default", "green"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("Life Time:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(creature.lifeTime), "default", "brown"),
                    weaponSection
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
const creatureInfoPopover = (creature, resultDamage, weaponName)=>{
    let capitalized = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(creature.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "CreatureInfoPopover",
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: {
                        fontSize: '0.9rem'
                    },
                    children: [
                        capitalized,
                        " (Level: ",
                        creature.level,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 168,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "popover-body3",
                children: buildCreatureInfo(creature, resultDamage, true, weaponName)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 169,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 167,
        columnNumber: 9
    }, this);
};
function buildCreatureSnortInfo(creature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-0 pb-2 justify-content-center",
                direction: "horizontal",
                gap: 1,
                children: [
                    getResBadge("badge bg-ballistic-shadow", creature.b, false),
                    getResBadge("badge bg-energy-shadow", creature.e, false),
                    getResBadge("badge bg-fire-shadow", creature.f, false),
                    getResBadge("badge bg-poison-shadow", creature.p, creature.immuneToPoison),
                    getResBadge("badge bg-cold-shadow", creature.c, false),
                    getResBadge("badge bg-rad-shadow", creature.r, creature.immuneToRadiation)
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 179,
                columnNumber: 13
            }, this),
            prepareTags(creature),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pb-0",
                direction: "vertical",
                gap: 0,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("❤️ Health:", creature.h.toFixed(2), "default", "red"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange")
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 188,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 178,
        columnNumber: 9
    }, this);
}
const creatureShortInfoPopover = (creature, resultDamage, weaponName)=>{
    let capitalized = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(creature.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "CreatureInfoPopover",
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: {
                        fontSize: '0.9rem'
                    },
                    children: [
                        capitalized,
                        " (Level: ",
                        creature.level,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreatureInfoPopover.js",
                    lineNumber: 200,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 200,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "popover-body3 ms-1",
                children: buildCreatureSnortInfo(creature)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoPopover.js",
                lineNumber: 201,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureInfoPopover.js",
        lineNumber: 199,
        columnNumber: 9
    }, this);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureInfoButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CreatureShortInfoButton": (()=>CreatureShortInfoButton),
    "default": (()=>CreatureInfoButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureInfoPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
function CreatureInfoButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rootClose: "true",
        trigger: "click",
        placement: "left",
        overlay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creatureInfoPopover"])(props.creature, props.resultDamage, props.resultDamage.weaponName),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "blue-white-border m-0",
            style: {
                cursor: 'pointer'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                style: {
                    fontSize: 'auto'
                },
                children: "?"
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoButton.js",
                lineNumber: 9,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureInfoButton.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureInfoButton.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = CreatureInfoButton;
function CreatureShortInfoButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rootClose: "true",
        trigger: "click",
        placement: "left",
        overlay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creatureShortInfoPopover"])(props.creature),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "blue-white-border m-0",
            style: {
                cursor: 'pointer'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                style: {
                    fontSize: 'auto'
                },
                children: "?"
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureInfoButton.js",
                lineNumber: 17,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureInfoButton.js",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureInfoButton.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c1 = CreatureShortInfoButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "CreatureInfoButton");
__turbopack_refresh__.register(_c1, "CreatureShortInfoButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureParamsLineView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureParamsLineView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureInfoButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/StringHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function CreatureParamsLineView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-0 pe-1",
        direction: "horizontal",
        gap: 1,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueBadge"])("mt-1 mb-1 badge p-1 ms-1 me-0 bg-health-outline", '5.5rem', '❤️', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToString"])(props.creature.h, 2)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueBadge"])("mt-1 mb-1 p-1 badge bg-ammo-outline ms-auto me-auto", '7rem', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tAmmo"])("0.5rem"), props.creature.ammo),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueBadge"])("mt-1 mb-1 p-1 badge bg-lifetime-outline ms-auto me-auto", '7rem', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "⌛"
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureParamsLineView.js",
                lineNumber: 14,
                columnNumber: 96
            }, this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisToTime"])(props.creature.lifeTime)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creature: props.creature,
                resultDamage: props.resultDamage
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureParamsLineView.js",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureParamsLineView.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = CreatureParamsLineView;
var _c;
__turbopack_refresh__.register(_c, "CreatureParamsLineView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreaturesCardView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreaturesCardView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChooser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureChooser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureParamsLineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureParamsLineView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
;
;
;
;
function enemy(creatureNamesRef, creature, creatures, setCreatures, resultDamage) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "pt-0 mt-0 mb-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "pt-0 pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChooser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    creatureNamesRef: creatureNamesRef,
                    creature: creature,
                    creatures: creatures,
                    setCreatures: setCreatures
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreaturesCardView.js",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesCardView.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureParamsLineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creature: creature,
                resultDamage: resultDamage
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesCardView.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreaturesCardView.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
function CreaturesCardView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: props.className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
            className: "pt-2 pb-1 ps-1 pe-1",
            children: [
                enemy(props.creatureNamesRef, props.creatures.creature1, props.creatures, props.setCreatures, props.resultDamage),
                enemy(props.creatureNamesRef, props.creatures.creature2, props.creatures, props.setCreatures, props.resultDamage),
                enemy(props.creatureNamesRef, props.creatures.creature3, props.creatures, props.setCreatures, props.resultDamage),
                enemy(props.creatureNamesRef, props.creatures.creature4, props.creatures, props.setCreatures, props.resultDamage)
            ]
        }, void 0, true, {
            fileName: "[project]/src/creature/CreaturesCardView.js",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreaturesCardView.js",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = CreaturesCardView;
var _c;
__turbopack_refresh__.register(_c, "CreaturesCardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureBodyView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureBodyView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/tag/UTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/StringHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
;
;
;
;
;
;
function getColTagView(tag, index, position, mult, onBodyPartClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "m-1 ps-0 pe-0 d-flex justify-content-" + position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: mult,
            style: {
                cursor: 'pointer'
            },
            className: "m-1 ps-2 pe-2 p-2",
            bRadius: "5px",
            border: true,
            color: "grey",
            onClick: onBodyPartClick,
            children: tag
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureBodyView.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, tag + index, false, {
        fileName: "[project]/src/creature/CreatureBodyView.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
function CreatureBodyView(props) {
    function onBodyPartClick(e) {
        props.creature.bodyShot = e.currentTarget.title;
        props.setCreatures({
            ...props.creatures
        });
    }
    const body = props.creature.bodyParts;
    if (body) {
        const result = [];
        let index = 0;
        for(const partName in body){
            index += 1;
            const part = body[partName];
            const partText = part.name + " ‣ " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$StringHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToString"])(part.damage_mult, 2) + "x";
            result.push(getColTagView(partText, index, "center", part.damage_mult, onBodyPartClick));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-2 mb-1",
                    children: "Body Damage Multipliers"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureBodyView.js",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-3"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureBodyView.js",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1 pb-2",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureBodyView.js",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = CreatureBodyView;
var _c;
__turbopack_refresh__.register(_c, "CreatureBodyView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureTagsView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureBodyView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/tag/UTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
;
;
;
;
;
function getColTagView(tag, index, position) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "m-1 ps-0 pe-0 d-flex justify-content-" + position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "m-1 ps-2 pe-2 p-1",
            bRadius: "5px",
            border: true,
            color: "indigo",
            children: tag
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureTagsView.js",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, tag + index, false, {
        fileName: "[project]/src/creature/CreatureTagsView.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
function CreatureBodyView(props) {
    const tags = props.creature.tags;
    if (tags) {
        const result = [];
        for(let i = 0; i < tags.length; i++){
            result.push(getColTagView(tags[i], i, "center"));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-4 mb-1",
                    children: "Tags"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureTagsView.js",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-3"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureTagsView.js",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1 pb-2",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureTagsView.js",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = CreatureBodyView;
var _c;
__turbopack_refresh__.register(_c, "CreatureBodyView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureReductionView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreatureReductionView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/tag/UTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
;
;
;
;
;
function getColTagView(red, index, position, onClick) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "m-1 ps-0 pe-0 d-flex justify-content-" + position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$tag$2f$UTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: red,
            className: "m-1 ps-2 pe-2 p-1",
            bRadius: "5px",
            border: true,
            color: "orange",
            onClick: onClick,
            children: red
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureReductionView.js",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, red + index, false, {
        fileName: "[project]/src/creature/CreatureReductionView.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
function CreatureReductionView(props) {
    const reductions = props.creature.damageReductions;
    function onClick(e) {
        props.creature.damageReduction = e.currentTarget.title;
        props.setCreatures({
            ...props.creatures
        });
    }
    if (reductions) {
        const result = [];
        for(let i = 0; i < reductions.length; i++){
            result.push(getColTagView(reductions[i], i, "center", onClick));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-2 mb-1",
                    children: "Damage Reduction"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureReductionView.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-2"
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureReductionView.js",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1 pb-2",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureReductionView.js",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = CreatureReductionView;
var _c;
__turbopack_refresh__.register(_c, "CreatureReductionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureStats.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/BSRadio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureBodyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureBodyView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureTagsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureTagsView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureReductionView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureReductionView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChooser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureChooser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureInfoButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
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
function col(name, creatures, setCreatures, creature, res_field, color, canDisable, min = 0, max = 9999) {
    function onChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        if (e.target.value < min) {
            e.target.value = min;
        }
        creature[res_field] = parseFloat(e.target.value);
        setCreatures({
            ...creatures
        });
    }
    function getCheckbox(canDisable) {
        const chColor = res_field === "p" ? "#237504" : "#a4aa04";
        function onChange(e) {
            const enabled = res_field === "p" ? creature.immuneToPoison : creature.immuneToRadiation;
            const result = !enabled;
            if (res_field === "p") {
                creature.immuneToPoison = result;
            } else {
                creature.immuneToRadiation = result;
            }
            setCreatures({
                ...creatures
            });
        }
        if (canDisable) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                style: {
                    width: '2.6rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                    checked: !(res_field === "p" ? creature.immuneToPoison : creature.immuneToRadiation),
                    checkBorderColor: chColor,
                    checkBgColor: chColor,
                    onChange: onChange
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureStats.js",
                    lineNumber: 44,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureStats.js",
                lineNumber: 43,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let disabled = false;
    if (res_field === "p" || res_field === "r") {
        disabled = res_field === "p" ? creature.immuneToPoison : creature.immuneToRadiation;
    }
    const width = canDisable ? '7.45rem' : '10rem';
    const value = creature[res_field];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1 flex-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    className: color,
                    style: {
                        width: width
                    },
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureStats.js",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                getCheckbox(canDisable),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    className: "w-auto",
                    disabled: disabled,
                    type: "number",
                    min: min,
                    value: value,
                    max: max,
                    maxLength: "7",
                    onChange: onChange
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureStats.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/creature/CreatureStats.js",
            lineNumber: 58,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureStats.js",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
const energy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "⚡ Energy"
}, void 0, false);
const ballistic = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "💥 Physical"
}, void 0, false);
const fire = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "🔥 Fire"
}, void 0, false);
const poison = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "☣️ Poison"
}, void 0, false);
const cold = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "❄️ Cryo"
}, void 0, false);
const rad = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "☢️ Radiation"
}, void 0, false);
const health = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "❤️ Health"
}, void 0, false);
const reduction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "🧽 Reduction"
}, void 0, false);
const headShot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "🤕 Head Shot"
}, void 0, false);
const bodyShot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: "🧍 Body Shot"
}, void 0, false);
const creatureTypes = {
    Normal: 'normal',
    Scorched: 'scorched',
    Glowing: 'glowing'
};
function CreatureStats({ creatureNamesRef, creatures, setCreatures, creature, resultDamage }) {
    console.log("CreatureStats");
    function onRadioTypeClick(e) {
        creature.curBody = e.target.value;
        setCreatures({
            ...creatures
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-end mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureInfoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    creature: creature,
                    resultDamage: resultDamage
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureStats.js",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureStats.js",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChooser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        creatureNamesRef: creatureNamesRef,
                        creature: creature,
                        creatures: creatures,
                        setCreatures: setCreatures
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "m-2"
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            col(ballistic, creatures, setCreatures, creature, "b", "bg-ballistic", false),
                            col(energy, creatures, setCreatures, creature, "e", "bg-energy", false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            col(fire, creatures, setCreatures, creature, "f", "bg-fire", false),
                            col(poison, creatures, setCreatures, creature, "p", "bg-poison", true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            col(cold, creatures, setCreatures, creature, "c", "bg-cold", false),
                            col(rad, creatures, setCreatures, creature, "r", "bg-rad", true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            col(health, creatures, setCreatures, creature, "h", "bg-health", false, 1, 999999),
                            col(reduction, creatures, setCreatures, creature, "damageReduction", "bg-reduction", false, 0, 0.9)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            col(headShot, creatures, setCreatures, creature, "headShot", "bg-head-shot", false, 1, 2),
                            col(bodyShot, creatures, setCreatures, creature, "bodyShot", "bg-body-shot", false, 0.1, 2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureTagsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        creature: creature
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureBodyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        creature: creature,
                        creatures: creatures,
                        setCreatures: setCreatures
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureReductionView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        creature: creature,
                        creatures: creatures,
                        setCreatures: setCreatures
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        className: "p-0 mt-1 mb-3",
                        children: "Body"
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-1 pb-1 d-flex justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            pairs: creatureTypes,
                            selectedValue: creature.curBody,
                            onClick: onRadioTypeClick
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreatureStats.js",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreatureStats.js",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreatureStats.js",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = CreatureStats;
const __TURBOPACK__default__export__ = CreatureStats;
var _c;
__turbopack_refresh__.register(_c, "CreatureStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreaturesStats.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreaturesStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureStats.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-client] (ecmascript) <export default as Collapse>");
;
;
;
function getLabel(creature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    float: "left",
                    width: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "creature-label-text",
                    children: creature.capName
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreaturesStats.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesStats.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    float: "right",
                    width: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: '#091503'
                        },
                        children: "Lvl:"
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreaturesStats.js",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            fontSize: '0.9rem',
                            color: '#bb0000'
                        },
                        children: creature.level
                    }, void 0, false, {
                        fileName: "[project]/src/creature/CreaturesStats.js",
                        lineNumber: 12,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/creature/CreaturesStats.js",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getItems(creatureNamesRef, creatures, setCreatures, resultDamage) {
    const items = [];
    let i = 0;
    for(const name in creatures){
        const creature = creatures[name];
        const item = {
            key: i,
            label: getLabel(creature),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creatureNamesRef: creatureNamesRef,
                creatures: creatures,
                setCreatures: setCreatures,
                creature: creature,
                resultDamage: resultDamage
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesStats.js",
                lineNumber: 25,
                columnNumber: 23
            }, this)
        };
        i++;
        items.push(item);
    }
    return items;
}
function CreaturesStats(props) {
    const items = getItems(props.creatureNamesRef, props.creatures, props.setCreatures, props.resultDamage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 mb-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
            accordion: true,
            items: items
        }, "Creatures", false, {
            fileName: "[project]/src/creature/CreaturesStats.js",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreaturesStats.js",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_c = CreaturesStats;
var _c;
__turbopack_refresh__.register(_c, "CreaturesStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureDropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CreatureDropdownButton": (()=>CreatureDropdownButton),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DropdownHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/DropdownHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
;
;
;
;
;
;
function CreatureDropdownButton(props) {
    let title = "Choose a creature";
    if (props.title) {
        title = props.title;
    }
    const onSelect = getOnSelect(props.onSelect, props.setCreatureName); // One of them must be specified.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "warning",
        size: "sm",
        onSelect: onSelect,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureDropdown.js",
            lineNumber: 15,
            columnNumber: 80
        }, void 0),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DropdownHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueDropdownItemsByNames"])(props.names)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureDropdown.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = CreatureDropdownButton;
function getOnSelect(onSelect, setCreatureName) {
    let result = onSelect;
    if (!result) {
        result = (e)=>{
            setCreatureName(e);
        };
    }
    return result;
}
const CreatureDropdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c1 = function CreatureDropdown(props) {
    let title = "Choose a creature";
    if (props.title) {
        title = props.title;
    }
    const onSelect = getOnSelect(props.onSelect, props.setCreatureName); // One of them must be specified.
    let className = "p-1 mb-2 mt-0";
    if (props.className) {
        className = props.className;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "warning",
                size: "sm",
                onSelect: onSelect,
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/creature/CreatureDropdown.js",
                    lineNumber: 43,
                    columnNumber: 88
                }, void 0),
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DropdownHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueDropdownItemsByNames"])(props.names)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureDropdown.js",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureDropdown.js",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureDropdown.js",
        lineNumber: 41,
        columnNumber: 9
    }, this);
});
_c2 = CreatureDropdown;
const __TURBOPACK__default__export__ = CreatureDropdown;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "CreatureDropdownButton");
__turbopack_refresh__.register(_c1, "CreatureDropdown$memo");
__turbopack_refresh__.register(_c2, "CreatureDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreatureChartView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
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
function getConfig(data, titleText) {
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
                        text: titleText,
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
        fileName: "[project]/src/creature/CreatureChartView.js",
        lineNumber: 68,
        columnNumber: 13
    }, this);
}
const CreatureChartView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function CreatureChartView(props) {
    _s();
    const titleText = props.title === "❤️ Health" ? "Health" : "Resistance";
    const config = getConfig(getData(props.values, props.title, props.color), titleText);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreatureChartView.CreatureChartView.useEffect": ()=>{
            drawChart(config, props.chartId);
        }
    }["CreatureChartView.CreatureChartView.useEffect"]);
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
                fileName: "[project]/src/creature/CreatureChartView.js",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "d-flex justify-content-center p-0",
                children: getCanvas(props.chartId)
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureChartView.js",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/creature/CreatureChartView.js",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}, "OD7bBpZva5O2jO+Puf00hKivP7c=")), "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = CreatureChartView;
const __TURBOPACK__default__export__ = CreatureChartView;
var _c, _c1;
__turbopack_refresh__.register(_c, "CreatureChartView$memo");
__turbopack_refresh__.register(_c1, "CreatureChartView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/creature/CreatureResHealthChartsView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>CreatureResHealthChartsView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureChartView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
function buildResCols(creatureName) {
    const result = [];
    let data = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureData(creatureName);
    if (data) {
        data = data['curve'];
    }
    for(const name in data){
        const cRes = data[name];
        const typeData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getStyle(name);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureChartView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-center m-1",
                color: typeData[2],
                headerClassName: typeData[1],
                title: typeData[0],
                chartId: name + "Creature",
                values: cRes
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureResHealthChartsView.js",
                lineNumber: 18,
                columnNumber: 17
            }, this)
        }, name, false, {
            fileName: "[project]/src/creature/CreatureResHealthChartsView.js",
            lineNumber: 17,
            columnNumber: 13
        }, this));
    }
    return result;
}
function CreatureResHealthChartsView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center",
        children: buildResCols(props.creatureName)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreatureResHealthChartsView.js",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_c = CreatureResHealthChartsView;
var _c;
__turbopack_refresh__.register(_c, "CreatureResHealthChartsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/creature/CreatureDataView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>CreatureDataView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureResHealthChartsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureResHealthChartsView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-client] (ecmascript) <export default as Collapse>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureResHealthChartsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureResHealthChartsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const creatureNames = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCreatureNames();
function getView(creatureName, setCreatureName) {
    let title = null;
    if (creatureName) {
        title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(creatureName);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title,
                names: creatureNames,
                setCreatureName: setCreatureName
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureDataView.js",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureResHealthChartsView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creatureName: creatureName
            }, void 0, false, {
                fileName: "[project]/src/creature/CreatureDataView.js",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function CreatureDataView(props) {
    _s();
    const [creatureName, setCreatureName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // let title = creatureName;
    // if (!title) {
    let title = 'Creature Curves';
    // } else {
    title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(title);
    // }
    const item = {
        key: 1,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            className: "creature-label-text",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/creature/CreatureDataView.js",
            lineNumber: 34,
            columnNumber: 16
        }, this),
        children: getView(creatureName, setCreatureName)
    };
    const items = [];
    items.push(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
        accordion: true,
        items: items
    }, "Creature", false, {
        fileName: "[project]/src/creature/CreatureDataView.js",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(CreatureDataView, "G1QxvuNAt7T9SyOGBZNrFJRuugs=");
_c = CreatureDataView;
var _c;
__turbopack_refresh__.register(_c, "CreatureDataView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/creature/CreaturesView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreaturesStats.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/popover/StaticPopoverRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/main/SummaryView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const questionPopoverHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
    children: "Creatures"
}, void 0, false, {
    fileName: "[project]/src/creature/CreaturesView.js",
    lineNumber: 15,
    columnNumber: 32
}, this);
const questionPopoverBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Parsed from:"
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesView.js",
                lineNumber: 19,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreaturesView.js",
            lineNumber: 19,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].creatureParseVersion
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesView.js",
                lineNumber: 20,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreaturesView.js",
            lineNumber: 20,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].creatureParseVersionName
            }, void 0, false, {
                fileName: "[project]/src/creature/CreaturesView.js",
                lineNumber: 21,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/creature/CreaturesView.js",
            lineNumber: 21,
            columnNumber: 9
        }, this)
    ]
}, void 0, true);
const questionPopover = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$popover$2f$StaticPopoverRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](questionPopoverHeader, questionPopoverBody, 'CreatureViewQuestionPopoverPlace');
const CreaturesView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function CreaturesView({ creatureNamesRef, creatures, setCreatures, resultDamage, extraDamage, setExtraDamage, boostDamageRef, setBoostDamage }) {
    _s();
    console.log("CreaturesView");
    const [alt, setAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function resetCreatures(e) {
        if (alt) {
            setCreatures((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCreaturesAlt"])());
        } else {
            setCreatures((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCreatures"])());
        }
    }
    function checkAlt(e) {
        setAlt(!alt);
    }
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "CreatureViewQuestionPopoverPlace"
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 48,
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
                                        children: "Creatures"
                                    }, void 0, false, {
                                        fileName: "[project]/src/creature/CreaturesView.js",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/creature/CreaturesView.js",
                                    lineNumber: 50,
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
                                    fileName: "[project]/src/creature/CreaturesView.js",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreaturesView.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "d-flex justify-content-center mt-1 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                                            onChange: checkAlt,
                                            checked: alt,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "ps-1",
                                                    children: "Alt"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/creature/CreaturesView.js",
                                                    lineNumber: 60,
                                                    columnNumber: 85
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/creature/CreaturesView.js",
                                                lineNumber: 60,
                                                columnNumber: 78
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/creature/CreaturesView.js",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/creature/CreaturesView.js",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: "sm",
                                        variant: "warning",
                                        onClick: resetCreatures,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Reset to Bosses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/creature/CreaturesView.js",
                                            lineNumber: 62,
                                            columnNumber: 90
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/creature/CreaturesView.js",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/creature/CreaturesView.js",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            className: "mb-2",
                            children: "Extra Damage"
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildExtraDamageView"])(extraDamage, setExtraDamage, boostDamageRef, setBoostDamage, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-2"
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$main$2f$SummaryView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildExtraDamageButtons"])(extraDamage, setExtraDamage),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            className: "mt-3 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesStats$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            creatureNamesRef: creatureNamesRef,
                            creatures: creatures,
                            setCreatures: setCreatures,
                            resultDamage: resultDamage
                        }, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/creature/CreaturesView.js",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/creature/CreaturesView.js",
                    lineNumber: 56,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/creature/CreaturesView.js",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/creature/CreaturesView.js",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}, "E6YzTUQlE+QugRc1tTIyijiTeg8=")), "E6YzTUQlE+QugRc1tTIyijiTeg8=");
_c1 = CreaturesView;
const __TURBOPACK__default__export__ = CreaturesView;
var _c, _c1;
__turbopack_refresh__.register(_c, "CreaturesView$memo");
__turbopack_refresh__.register(_c1, "CreaturesView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/creature/Creature.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Creature)
});
class Creature {
    constructor(creatureInfo){
        this.creatureInfo = creatureInfo;
        this.physical = creatureInfo.b;
        this.energy = creatureInfo.e;
        this.fire = creatureInfo.f;
        this.poison = creatureInfo.p;
        this.cryo = creatureInfo.c;
        this.name = creatureInfo.name;
        this.tags = creatureInfo.tags;
        this.tags = [];
        for(let i = 0; i < creatureInfo.tags.length; i++){
            this.tags.push(creatureInfo.tags[i].toLowerCase());
        }
        this.body = creatureInfo.curBody;
        this.radiation = creatureInfo.r;
        this.health = creatureInfo.h;
        this.damageReduction = creatureInfo.damageReduction;
        this.damageReductionOnlyNotBleeding = creatureInfo.damageReductionOnlyNotBleeding;
        this.headMult = creatureInfo.headShot;
        this.bodyMult = creatureInfo.bodyShot;
        this.immuneToRadiation = creatureInfo.immuneToRadiation;
        this.immuneToPoison = creatureInfo.immuneToPoison;
        this.expResistance = true;
        this.reported = false;
        this.maxHit = 0;
        this.hits = 0;
        this.sumDamages = 0;
        this.lifeTime = 0;
        this.lastShotTime = 0;
        this.timeDamages = new Map();
        this.lastTotalDamage = 0;
        this.lastTotalDamageWithAccuracy = 0; // For trial max shot
        this.lastTotalDamageNoTime = 0;
        this.lastTotalDamageTime = 0;
        this.lastDamageNoTime = 0;
        this.lastExpDamageNoTime = 0;
        this.minNormalShot = 0;
        this.maxNormalShot = 0;
        this.minHeadShot = 0;
        this.maxHeadShot = 0;
        this.minHeadExpShot = 0;
        this.maxHeadExpShot = 0;
        this.minNormalCritShot = 0;
        this.maxNormalCritShot = 0;
        this.minNormalHeadCritShot = 0;
        this.maxNormalHeadCritShot = 0;
        this.minExpShot = 0;
        this.maxExpShot = 0;
        this.minExpCritShot = 0;
        this.maxExpCritShot = 0;
        this.minExpCritHeadShot = 0;
        this.maxExpCritHeadShot = 0;
        this.bulletCount = 1;
        this.minTotalDamage = 0;
        this.maxTotalDamage = 0;
        this.maxTimeEffects = 0;
        this.tdCounter = 0;
        this.sneakPercent = 0;
        this.critPercent = 0;
        this.bleed = false;
    }
    getName() {
        return this.name;
    }
    getArmor() {
        return [
            this.physical,
            this.energy,
            this.fire,
            this.poison,
            this.cryo,
            this.radiation
        ];
    }
    // To speed up the process we reduce armors in advance as they are basically static (except for some cases like TOFT
    // where we ignore it anyway)
    reduceArmor(antiArmor) {
        let b = 1 - antiArmor.b / 100.0;
        let e = 1 - antiArmor.e / 100.0;
        let f = 1 - antiArmor.f / 100.0;
        let p = 1 - antiArmor.p / 100.0;
        let c = 1 - antiArmor.c / 100.0;
        let r = 1 - antiArmor.r / 100.0;
        if (this.tags.includes("bug") || this.tags.includes("mirelurk")) {
            let i = 1 - antiArmor.insect / 100.0;
            b *= i;
            e *= i;
            f *= i;
            p *= i;
            c *= i;
            r *= i;
        }
        this.physical *= b;
        this.physical = this.physical < 0 ? 0 : this.physical;
        this.energy *= e;
        this.energy = this.energy < 0 ? 0 : this.energy;
        this.fire *= f;
        this.fire = this.fire < 0 ? 0 : this.fire;
        this.poison *= p;
        this.poison = this.poison < 0 ? 0 : this.poison;
        this.cryo *= c;
        this.cryo = this.cryo < 0 ? 0 : this.cryo;
        this.radiation *= r;
        this.radiation = this.radiation < 0 ? 0 : this.radiation;
        return this;
    }
    takeDamage(hit) {
        // Dead
        if (this.health <= 0) {
            return true;
        }
        this.bulletCount = hit.bulletCount;
        this.lastTotalDamage = 0;
        this.lastTotalDamageWithAccuracy = 0;
        this.lastTotalDamageNoTime = 0;
        this.lastTotalDamageTime = 0;
        this.lastDamageNoTime = 0;
        this.lastExpDamageNoTime = 0;
        this.hits += 1;
        this.lifeTime += hit.deltaTime;
        this.lastShotTime = hit.deltaTime;
        // Run through damages to cause damage
        this.applyDamages(hit, hit.damages);
        if (hit.critShot) {
            this.applyCritDamages(hit, hit.critDamages);
        }
        return this.isDead();
    }
    // TODO: Should we apply boosts to crit damages? How does this work?
    applyCritDamages(hit, damages) {
        this.applyDamages(hit, damages);
    }
    // WARNING: Considers every shot is hit (time is not important)
    setupBleed(damages) {
        for(let i = 0; i < damages.length; i++){
            const damageInfo = damages[i];
            if (damageInfo.kind === 'bleed') {
                this.bleed = true;
                return;
            }
        }
        this.bleed = false;
    }
    applyDamages(hit, damages) {
        this.setupBleed(damages);
        for(let i = 0; i < damages.length; i++){
            const damageInfo = damages[i];
            if (damageInfo.time === 0) {
                this.causeNonTimeDamages(hit, damageInfo);
            } else {
                this.gatherTimeDamages(hit, damageInfo);
                this.causeTimeDamages(damageInfo.type);
            }
            if (this.health <= 0) {
                break;
            }
        }
        this.recordDamage(hit);
    }
    recordDamage(hit) {
        if (this.minTotalDamage === 0 || this.lastTotalDamage < this.minTotalDamage) {
            this.minTotalDamage = this.lastTotalDamage;
        }
        if (this.maxTotalDamage < this.lastTotalDamage) {
            this.maxTotalDamage = this.lastTotalDamage;
        }
        if (!hit.critShot && !hit.headShot) {
            if (this.minNormalShot === 0 || this.lastDamageNoTime < this.minNormalShot) {
                this.minNormalShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalShot) {
                this.maxNormalShot = this.lastDamageNoTime;
            }
            if (this.minExpShot === 0 || this.lastExpDamageNoTime < this.minExpShot) {
                this.minExpShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpShot) {
                this.maxExpShot = this.lastExpDamageNoTime;
            }
        } else if (!hit.critShot && hit.headShot) {
            if (this.minHeadShot === 0 || this.lastDamageNoTime < this.minHeadShot) {
                this.minHeadShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxHeadShot) {
                this.maxHeadShot = this.lastDamageNoTime;
            }
            if (this.minHeadExpShot === 0 || this.lastExpDamageNoTime < this.minHeadExpShot) {
                this.minHeadExpShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxHeadExpShot) {
                this.maxHeadExpShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && !hit.headShot) {
            if (this.minNormalCritShot === 0 || this.lastDamageNoTime < this.minNormalCritShot) {
                this.minNormalCritShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalCritShot) {
                this.maxNormalCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritShot === 0 || this.lastExpDamageNoTime < this.minExpCritShot) {
                this.minExpCritShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritShot) {
                this.maxExpCritShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && hit.headShot) {
            if (this.minNormalHeadCritShot === 0 || this.lastDamageNoTime < this.minNormalHeadCritShot) {
                this.minNormalHeadCritShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalHeadCritShot) {
                this.maxNormalHeadCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritHeadShot === 0 || this.lastExpDamageNoTime < this.minExpCritHeadShot) {
                this.minExpCritHeadShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritHeadShot) {
                this.maxExpCritHeadShot = this.lastExpDamageNoTime;
            }
        }
    }
    // TODO: What the bonuses will work here? cripple, bash, power, total, crit, sneak?
    gatherTimeDamages(hit, damageInfo) {
        const baseDamage = damageInfo.damage;
        let bonus = hit.bonusMult[damageInfo.type];
        bonus += this.getCreatureBonusMultiplier(hit.creatureDamageBonuses);
        const totalBonus = this.getTotalBonus(hit);
        let value = baseDamage * bonus * totalBonus;
        // TODO: The way of stacking is unknown (may be there is no stacking at all)
        if (damageInfo.stack) {
            const existedDamages = this.timeDamages.get(damageInfo.index);
            if (existedDamages) {
                if (existedDamages.length < 10) {
                    existedDamages.push(this.buildTimeDamageItem(damageInfo, value));
                }
            } else {
                this.timeDamages.set(damageInfo.index, [
                    this.buildTimeDamageItem(damageInfo, value)
                ]);
            }
        } else {
            this.timeDamages.set(damageInfo.index, [
                this.buildTimeDamageItem(damageInfo, value)
            ]);
        }
    }
    buildTimeDamageItem(damageInfo, value) {
        return {
            chance: damageInfo.chance,
            accuracy: damageInfo.finalAccuracy,
            damageType: damageInfo.type,
            time: damageInfo.time,
            value: value,
            index: damageInfo.index
        };
    }
    timeDamagesHandler(items, key, map) {
        let dTime = this.lastShotTime;
        for(let i = 0; i < items.length; i++){
            const item = items[i];
            // Protect
            if (dTime === 0) {
                item.time = 0;
            } else if (item.time < dTime) {
                dTime = item.time;
                item.time = 0;
            } else {
                item.time -= dTime;
            }
            const damage = item.value * dTime;
            this.tdCounter += 1;
            let finalDamage = this.causeFinalDamage(damage, item.damageType, false, false);
            this.memoDamage(finalDamage, true, false, item.chance, item.accuracy);
        }
    }
    deleteTimeDamages(items, key, map) {
        map.set(key, items.filter((item)=>item.time > 0));
    }
    getMaxTimeEffects() {
        return this.maxTimeEffects;
    }
    causeTimeDamages(damageType) {
        this.tdCounter = 0;
        this.timeDamages.forEach(this.timeDamagesHandler, this);
        this.timeDamages.forEach(this.deleteTimeDamages);
        if (this.maxTimeEffects < this.tdCounter) {
            this.maxTimeEffects = this.tdCounter;
        }
    }
    causeNonTimeDamages(hit, damageInfo) {
        const baseDamage = damageInfo.damage;
        let bonus = hit.bonusMult[damageInfo.type];
        bonus += this.getCreatureBonusMultiplier(hit.creatureDamageBonuses);
        bonus += hit.cripple;
        bonus += hit.powerAttack;
        bonus += hit.lastShotBonus;
        if (damageInfo.kind === "explosive") {
            bonus += hit.expDTypeBonus;
        }
        let crit = 0;
        if (hit.critShot) {
            this.critPercent = hit.critBoost;
            crit = baseDamage * hit.critBoost;
        }
        if (damageInfo.type === "dtPhysical" && damageInfo.kind === "physical") {
            bonus += hit.bash;
        }
        if (this.health === this.creatureInfo.h) {
            bonus += hit.firstBloodBonus;
        }
        const totalBonus = this.getTotalBonus(hit);
        let sneak = 0;
        if (hit.sneakShot) {
            this.sneakPercent = hit.sneak;
            sneak = baseDamage * hit.sneak * totalBonus;
        }
        let value = baseDamage * bonus * totalBonus;
        let expValue = this.getExplosiveDamage(value, hit.weaponType, damageInfo.type, damageInfo.kind, hit.expBonus);
        let critExp = 0;
        if (expValue > 0) {
            critExp = crit * hit.expBonus;
        }
        value += sneak;
        value += crit;
        expValue *= hit.tenderizer;
        expValue += critExp;
        let finalDamage = this.causeFinalDamage(value, damageInfo.type, hit.headShot, false);
        this.memoDamage(finalDamage, false, false, damageInfo.chance, damageInfo.finalAccuracy);
        // Explosives add for each bullet (no headshot)
        const nonCritExp = expValue - critExp;
        if (expValue > 0) {
            for(let i = 0; i < this.bulletCount; i++){
                if (i === 0) {
                    finalDamage = this.causeFinalDamage(expValue, damageInfo.type, false, true);
                } else {
                    finalDamage = this.causeFinalDamage(nonCritExp, damageInfo.type, false, true);
                }
                this.memoDamage(finalDamage, false, true, damageInfo.chance, damageInfo.finalAccuracy);
            }
        }
    }
    memoDamage(finalDamage, timeDamage, expDamage, chance, accuracy) {
        chance = chance / 100.0;
        accuracy = accuracy / 100.0;
        this.lastTotalDamage += finalDamage;
        this.lastTotalDamageWithAccuracy += finalDamage * chance * accuracy;
        if (!timeDamage) {
            this.lastTotalDamageNoTime += finalDamage;
        } else {
            this.lastTotalDamageTime += finalDamage;
        }
        if (!timeDamage && !expDamage) {
            this.lastDamageNoTime += finalDamage;
        } else if (!timeDamage && expDamage) {
            this.lastExpDamageNoTime += finalDamage;
        }
    }
    getArmorValue(type) {
        switch(type){
            case "dtPhysical":
                return this.physical;
            case "dtEnergy":
                return this.energy;
            case "dtFire":
                return this.fire;
            case "dtPoison":
                return this.poison;
            case "dtCryo":
                return this.cryo;
            case "dtRadiationExposure":
                return this.radiation;
            default:
                return 0;
        }
    }
    getExplosiveDamage(value, weaponType, damageType, damageKind, expBonus) {
        if (damageKind === 'bleed') {
            return 0;
        }
        if (weaponType !== "Melee" && weaponType !== "Unarmed" && weaponType !== "Thrown") {
            if (damageType === 'dtPhysical' && damageKind === "physical" || damageType === 'dtEnergy') {
                return value * expBonus;
            }
        }
        return 0;
    }
    getTotalBonus(hit) {
        let totalBonus = hit.totalDamageBonus * hit.tenderizer;
        totalBonus *= this.health / this.creatureInfo.h < 0.4 ? hit.executionerBonus : 1.0;
        return totalBonus;
    }
    getCreatureBonusMultiplier(creatureDamageBonuses) {
        let result = 0;
        if (this.name === "Dummy") {
            return 0;
        }
        for (let [, damageBonus] of creatureDamageBonuses){
            const bonusName = damageBonus.name;
            const bonusMult = damageBonus.value;
            if (this.tags.includes(bonusName) || this.body === bonusName || this.name === bonusName) {
                result += bonusMult / 100.0;
            }
        }
        return result;
    }
    getLastTotalDamage() {
        return this.lastTotalDamage;
    }
    getLastTotalDamageWithAccuracy() {
        return this.lastTotalDamageWithAccuracy;
    }
    getGetLastTotalDamageNoTime() {
        return this.lastTotalDamageNoTime;
    }
    getLastTotalDamageTime() {
        return this.lastTotalDamageTime;
    }
    causeFinalDamage(value, damageType, isHead, explosive) {
        let finalDamage;
        let damageReduction = 1 - this.damageReduction;
        // No reduction if bleeding (storm boss)
        if (this.bleed && this.damageReductionOnlyNotBleeding) {
            damageReduction = 1;
        }
        if (explosive && !this.expResistance) {
            finalDamage = value * damageReduction;
        } else {
            finalDamage = this.finalDamage(value, damageType) * damageReduction;
        }
        if (isHead) {
            finalDamage *= this.headMult;
        } else {
            finalDamage *= this.bodyMult;
        }
        this.health -= finalDamage;
        // It is useful if you need to check average hit to determine the best weapon especially if a creature live time is 0
        this.sumDamages += finalDamage;
        if (finalDamage > this.maxHit) {
            this.maxHit = finalDamage;
        }
        return finalDamage;
    }
    getAverageHit() {
        if (this.hits === 0) {
            return 0;
        }
        return this.sumDamages / this.hits;
    }
    finalDamage(value, type) {
        if (type === "dtRadiationExposure" && this.immuneToRadiation) {
            return 0;
        } else if (type === "dtPoison" && this.immuneToPoison) {
            return 0;
        }
        const armor = this.getArmorValue(type);
        if (armor === Infinity) {
            return 0;
        } else if (armor === 0) {
            return value;
        }
        let k = (0.15 * value / armor) ** 0.365;
        if (k > 0.99) {
            k = 0.99;
        } else if (k < 0.01) {
            k = 0.01;
        }
        return k * value;
    }
    isDead() {
        return this.health <= 0;
    }
    totalTime() {
        return parseInt((this.lifeTime - this.lastShotTime) * 1000);
    }
    formDeadReport(reloads, reloadsTime) {
        if (!this.reported) {
            this.reported = true;
            this.creatureInfo.averageHit = this.getAverageHit();
            this.creatureInfo.maxHit = this.maxHit;
            this.creatureInfo.sneak = this.sneakPercent > 0 ? (this.sneakPercent * 100.0).toFixed(1) + "%" : "";
            this.creatureInfo.crit = this.critPercent > 0 ? (this.critPercent * 100.0).toFixed(1) + "%" : "";
            this.creatureInfo.totalDamage = "↓" + this.minTotalDamage.toFixed(1) + " - ↑" + this.maxTotalDamage.toFixed(1);
            this.creatureInfo.normalDamage = "(↓" + (this.minNormalShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.headShotDamage = "(↓" + (this.minHeadShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxHeadShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.headExpShotDamage = "(↓" + (this.minHeadExpShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxHeadExpShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critNormalDamage = "(↓" + (this.minNormalCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critHeadNormalDamage = "(↓" + (this.minNormalHeadCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalHeadCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.explosiveDamage = "(↓" + (this.minExpShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critExplosiveDamage = "(↓" + (this.minExpCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critExplosiveHeadDamage = "(↓" + (this.minExpCritHeadShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpCritHeadShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            if (this.isDead()) {
                this.creatureInfo.ammo = this.hits;
                this.creatureInfo.reloads = reloads;
                this.creatureInfo.reloadsTime = reloadsTime;
                this.creatureInfo.lifeTime = this.totalTime();
            } else {
                const damagedHealth = this.creatureInfo.h - this.health;
                if (damagedHealth === 0) {
                    this.creatureInfo.ammo = Infinity;
                    this.creatureInfo.reloads = Infinity;
                    this.creatureInfo.reloadsTime = Infinity;
                    this.creatureInfo.lifeTime = Infinity;
                } else {
                    const ratio = this.health / damagedHealth;
                    this.creatureInfo.reloads = reloads + parseInt(reloads * ratio);
                    this.creatureInfo.reloadsTime = reloadsTime + parseInt(reloadsTime * ratio);
                    this.creatureInfo.ammo = this.hits + parseInt(this.hits * ratio);
                    this.creatureInfo.lifeTime = parseInt((this.lifeTime + this.lifeTime * ratio - this.lastShotTime) * 1000);
                }
            }
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/creature/CreaturesProduction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CreaturesProduction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$Creature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/Creature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-client] (ecmascript)");
;
;
class CreaturesProduction {
    static produce(materials, antiArmor) {
        const creatures = [];
        for(const property in materials){
            const creatureInfo = materials[property];
            const creature = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$Creature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](creatureInfo);
            creature.reduceArmor(antiArmor);
            creatures.push(creature);
        }
        return creatures;
    }
    static produceByArmor(creatureInfo, armor) {
        const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDummy"])(creatureInfo);
        dummy.b = armor[0];
        dummy.e = armor[1];
        dummy.f = armor[2];
        dummy.p = armor[3];
        dummy.c = armor[4];
        dummy.r = armor[5];
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$Creature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dummy);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_creature_f030f0._.js.map