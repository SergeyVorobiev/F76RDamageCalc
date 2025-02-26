module.exports = {

"[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TemplateTools)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Strings.js [app-ssr] (ecmascript)");
;
;
class TemplateTools {
    // ATTENTION! Do not exclude activated by default
    static excludedModIds = {
        "00693d37": [
            "00496566",
            "001ac24e",
            "00147b02",
            "00496564",
            "00496565"
        ],
        "000e5881": [
            "00496566",
            "001ac24e",
            "00147b02",
            "00496564",
            "00496565",
            "006e06a3"
        ]
    };
    static excludeMod(wId, mId) {
        const eIds = TemplateTools.excludedModIds[wId];
        if (eIds) {
            for(let i = 0; i < eIds.length; i++){
                const eId = eIds[i];
                if (eId === mId) {
                    return true;
                }
            }
        }
        return false;
    }
    // Get rid of mods which do not influence on damage or hidden
    static getDamagedModIndexes(template, includeGroups, accuracyMods, silencerDamage) {
        const result = {};
        for(const categoryName in template.allMods){
            const mods = template.allMods[categoryName];
            const exclude = includeGroups && !includeGroups.includes(categoryName);
            let defaultIndex = -1;
            let accuracyBestIndex = -1;
            let indexes = [];
            for(let i = 0; i < mods.length; i++){
                const mod = mods[i];
                const modId = mod[0];
                if (exclude) {
                    if (mod[1]) {
                        defaultIndex = i;
                        break;
                    }
                } else if (!TemplateTools.excludeMod(template.id, modId) && !mod[3]) {
                    // 4-useful (means directly affecting on damage)
                    if (mod[4]) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModTools"].hasSilencerById(modId)) {
                            if (silencerDamage) {
                                indexes.push(i);
                            }
                        } else {
                            indexes.push(i);
                        }
                    } else if (accuracyBestIndex === -1) {
                        const bestMod = accuracyMods[categoryName];
                        if (bestMod && bestMod === modId) {
                            accuracyBestIndex = i;
                        }
                    }
                }
            }
            if (exclude) {
                indexes = [
                    defaultIndex
                ];
            } else if (indexes.length === 0) {
                if (accuracyBestIndex === -1) {
                    indexes = [
                        defaultIndex
                    ];
                } else {
                    indexes = [
                        accuracyBestIndex
                    ];
                }
            }
            result[categoryName] = indexes;
        }
        return result;
    }
    static resetMods(template) {
        const modCategories = template.allMods;
        for(const modCategory in modCategories){
            const mods = modCategories[modCategory];
            for(let i = 0; i < mods.length; i++){
                const mod = mods[i];
                mod[1] = false;
            }
        }
    }
    static getImage(template) {
        return template.iconName[template.type[1]];
    }
    static hasDefaultLegendary(template) {
        const leg1 = template.legendary1;
        const leg2 = template.legendary2;
        const leg3 = template.legendary3;
        const leg4 = template.legendary4;
        const leg5 = template.legendary5;
        return leg1.id || leg2.id || leg3.id || leg4.id || leg5.id;
    }
    static getDefaultLegendary(template, legendarySetter) {
        const result = [];
        const obj = legendarySetter.extractDefaultLegendary(template);
        const leg1 = obj.legendary1;
        const leg2 = obj.legendary2;
        const leg3 = obj.legendary3;
        const leg4 = obj.legendary4;
        const leg5 = obj.legendary5;
        if (leg1) {
            result.push([
                leg1.id,
                0
            ]);
        }
        if (leg2) {
            result.push([
                leg2.id,
                1
            ]);
        }
        if (leg3) {
            result.push([
                leg3.id,
                2
            ]);
        }
        if (leg4) {
            result.push([
                leg4.id,
                3
            ]);
        }
        if (leg5) {
            result.push([
                leg5.id,
                4
            ]);
        }
        return result;
    }
    static isWeaponRanged(template) {
        return TemplateTools.isWeaponRangedByType(template.type[1]);
    }
    static isWeaponRangedByType(type) {
        return !(type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Melee || type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Unarmed);
    }
    static isWeaponExplosive(template) {
        return template['exp'][1] > 0;
    }
    static hasPhysicalDamage(template) {
        return template['bbDamage'][1] > 0;
    }
    static getGroups(templates, set) {
        for(let i = 0; i < templates.length; i++){
            for(const name in templates[i].allMods){
                set.add(name);
            }
        }
    }
}
}}),
"[project]/src/templates/EffectPopover.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getActor": (()=>getActor),
    "getActorData": (()=>getActorData),
    "getEffectContent": (()=>getEffectContent),
    "getPerkButton": (()=>getPerkButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/PerkPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponPopoverOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ProjView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
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
function getField(lValue, rValue, color) {
    if (rValue && typeof rValue === typeof '') {
        rValue = rValue.toString();
        rValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncate"])(rValue, 30);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center ps-1 pe-1",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(lValue, rValue, color)
    }, void 0, false, {
        fileName: "[project]/src/templates/EffectPopover.js",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
function getActorData(actor) {
    if (actor === "" || actor === '00000000' || actor === '00000392') {
        return '';
    }
    return actor.id + " / " + actor.name;
}
function getActor(name, actor, color, width, under_row = true) {
    const actorData = getActorData(actor);
    if (actorData === '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (under_row) {
        return getField(name, actorData, color);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameValueField"])(name, actorData, color);
}
function getPerkButton(perkId) {
    if (!perkId || perkId === '00000000') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onClick(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderWeaponPopover"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPerkContent"])(perkId));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center ps-1 pe-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            onClick: onClick,
            style: {
                width: '15rem'
            },
            children: [
                "Perk: ",
                perkId
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/EffectPopover.js",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/EffectPopover.js",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
function getGlobDuration(effect) {
    const dur = effect.glob_duration;
    if (dur !== '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "bg-spell-header p-0 ps-2",
                    children: "Glob Duration"
                }, void 0, false, {
                    fileName: "[project]/src/templates/EffectPopover.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    children: [
                        getField("Id:", dur.id, "purple"),
                        getField("Name:", dur.name, "purple"),
                        getField("Value:", dur.value, "purple")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/EffectPopover.js",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/EffectPopover.js",
            lineNumber: 60,
            columnNumber: 13
        }, this);
    }
    return getField("GlobDuration:", "0", "purple");
}
function getGlobMagnitude(effect) {
    const mag = effect.glob_magnitude;
    if (mag !== '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "bg-spell-header p-0 ps-2",
                    children: "Glob Magnitude"
                }, void 0, false, {
                    fileName: "[project]/src/templates/EffectPopover.js",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    children: [
                        getField("Id:", mag.id, "purple"),
                        getField("Name:", mag.name, "purple"),
                        getField("Value:", mag.value, "purple")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/EffectPopover.js",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/EffectPopover.js",
            lineNumber: 77,
            columnNumber: 13
        }, this);
    }
    return getField("GlobMagnitude:", "0", "purple");
}
function getEffectContent(effect) {
    const mEffect = effect['m_effect'];
    const id = mEffect.id;
    if (mEffect.projectile !== '00000000') throw new Error('Projectile Found in spell: ' + id);
    if (mEffect.ability !== '00000000') throw new Error('Ability Found in spell: ' + id);
    const resist = mEffect.resist === '00000000' ? mEffect.resist : mEffect.resist.full;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            getField("Id:", mEffect.id, 'indigo'),
            getField("Name:", mEffect.full, "purple"),
            getField("CodeName:", mEffect.name, "purple"),
            getActor("SpellActor:", effect.actor, "purple"),
            getField("Type:", mEffect.a_type, "purple"),
            getField("Ability:", mEffect.ability, "purple"),
            getField("Resistance:", resist, "purple"),
            getField("Target:", mEffect.target, "purple"),
            getField("Activity:", mEffect.e_type, "purple"),
            getField("Magnitude:", effect.magnitude, "purple"),
            getField("Area:", effect.area, "purple"),
            getField("OnlyForPlayer:", effect.only_player, "purple"),
            getField("Duration:", effect.duration, "purple"),
            getField("DCurv:", effect.d_curv, "purple"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExplosiveForPopover"])(mEffect.explosion),
            getField("Projectile:", mEffect.projectile, "purple"),
            getActor("Actor1:", mEffect.actor_value1, "purple"),
            getActor("Actor2:", mEffect.actor_value2, "purple"),
            getGlobDuration(effect),
            getGlobMagnitude(effect),
            getPerkButton(mEffect.perk)
        ]
    }, void 0, true);
}
}}),
"[project]/src/templates/ModPropsPopover.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "popoverContent": (()=>popoverContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/SpellView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Spell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
;
;
;
;
;
;
;
function buildModCard(key, mod_e, color) {
    if (mod_e.prop === "Enchantments") {
        const spell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(mod_e.val1);
        const effects = spell.mag_effects;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(mod_e.op, mod_e.prop, color),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpellHeader"])(spell, '20rem'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectsForPopover"])(effects)
            ]
        }, key, true, {
            fileName: "[project]/src/templates/ModPropsPopover.js",
            lineNumber: 14,
            columnNumber: 13
        }, this);
    } else {
        const val1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncate"])(mod_e.val1, 30);
        const val2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncate"])(mod_e.val2, 30);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(mod_e.op, mod_e.prop, color),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])('Val1:', val1, color),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])('Val2:', val2, color),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])('Curv:', mod_e.curv, color)
            ]
        }, key, true, {
            fileName: "[project]/src/templates/ModPropsPopover.js",
            lineNumber: 24,
            columnNumber: 13
        }, this);
    }
}
function getMods(mods) {
    let result = [];
    let color = 'purple';
    for(let i = 0; i < mods.length; i++){
        const mod_e = mods[i];
        result.push(buildModCard(i, mod_e, color));
        if (color === 'purple') {
            color = 'magenta';
        } else {
            color = 'purple';
        }
    }
    return result;
}
function popoverContent(modData) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                className: "m-1",
                color: 'indigo',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: modData.id
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModPropsPopover.js",
                    lineNumber: 52,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModPropsPopover.js",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                className: "m-1",
                color: 'red',
                children: modData.codeName
            }, void 0, false, {
                fileName: "[project]/src/templates/ModPropsPopover.js",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "mt-1 mb-2"
            }, void 0, false, {
                fileName: "[project]/src/templates/ModPropsPopover.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            getMods(modData.modifiers)
        ]
    }, void 0, true);
}
}}),
"[project]/src/templates/calc/view/EmblemCalcRowView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EmblemCalcRowView),
    "getMark": (()=>getMark)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
;
;
;
;
function getMark(key, imagePath, className, iconSize, imageSize, borderRadius) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "m-1 d-flex justify-content-center " + className,
        style: {
            height: iconSize,
            width: iconSize
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                priority: "true",
                alt: "Weapon emblem",
                style: {
                    borderRadius: borderRadius,
                    height: imageSize,
                    width: imageSize
                },
                src: imagePath
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/EmblemCalcRowView.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/EmblemCalcRowView.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, key, false, {
        fileName: "[project]/src/templates/calc/view/EmblemCalcRowView.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
function EmblemCalcRowView(props) {
    let className = "shadow-outline-gold2";
    if (props.className) {
        className = props.className;
    }
    const views = [];
    for(let i = 0; i < props.imNames.length; i++){
        const imName = props.imNames[i];
        if (imName) {
            const imagePath = props.imageProvider(imName);
            views.push(getMark(imName, imagePath, className, props.iconSize, props.imageSize, props.borderRadius));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center",
        style: props.style,
        children: views
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/EmblemCalcRowView.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/ModalApplyTemplate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalApplyTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EWeaponSpecs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function modalView(loading, name, applyTemplate, onHide) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalApplyTemplate.js",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/ModalApplyTemplate.js",
            lineNumber: 12,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                closeButton: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Title, {
                    id: "contained-modal-title-vcenter",
                    children: "Apply Template"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalApplyTemplate.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalApplyTemplate.js",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                children: [
                    "Do you want to apply '",
                    name,
                    "' template? Current weapon properties will be replaced."
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/ModalApplyTemplate.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Footer, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-1 mt-1 flex-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-100 me-1",
                            onClick: applyTemplate,
                            children: "Yes"
                        }, void 0, false, {
                            fileName: "[project]/src/templates/ModalApplyTemplate.js",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-100 ms-1",
                            onClick: onHide,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/templates/ModalApplyTemplate.js",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/ModalApplyTemplate.js",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalApplyTemplate.js",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function ModalApplyTemplate(props) {
    console.log("ModalApplyTemplate");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!props.modalTemplate.show) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let name = "";
    if (props.modalTemplate.template) {
        name = props.modalTemplate.template.name;
    }
    name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncateLongWords"])(name, 25);
    function onHide(e) {
        setLoading(false);
        props.setModalTemplate({
            template: null,
            show: false
        });
    }
    function applyTemplate(e) {
        setLoading(true);
        setTimeout(()=>{
            const template = props.modalTemplate.template;
            const specItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTemplateToSpecs"])(template, false);
            props.setWSpec(specItem);
            onHide(e);
        }, 100);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        show: props.modalTemplate.show,
        onHide: onHide,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: modalView(loading, name, applyTemplate, onHide)
    }, void 0, false, {
        fileName: "[project]/src/templates/ModalApplyTemplate.js",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/ModRow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModPropsPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModPropsPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponPopoverOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>");
;
;
;
;
;
;
;
;
function getModRow(modData, def, isUsed) {
    let color = modData['useful'] ? 'purple' : 'grey';
    if (def) {
        color = 'blue';
    }
    if (isUsed) {
        color = 'brown';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"].CheckableTag, {
        style: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            style: {
                color: color
            },
            children: modData.name
        }, void 0, false, {
            fileName: "[project]/src/templates/ModRow.js",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/ModRow.js",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
function ModRow({ index, weaponId, modsSameType, checkMod, defMods }) {
    const modSameType = modsSameType[index];
    const modData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modSameType[0]);
    let def = defMods.includes(modSameType[0]);
    const isUsed = modSameType[1];
    const modRow = getModRow(modData, def, isUsed);
    const disabled = !modSameType[2];
    if (modData['hide']) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "p-1",
        title: modData.codeName,
        id: modData.id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeaponPopoverOverlay"], {
                    popoverHeader: modData.name,
                    popoverContent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModPropsPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popoverContent"])(modData),
                    itemToOverly: modRow
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModRow.js",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModRow.js",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "col-auto d-flex justify-content-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                    onChange: (e)=>checkMod(e, weaponId, modData, modSameType, modsSameType),
                    disabled: disabled,
                    checked: isUsed
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModRow.js",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModRow.js",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, modData.id, true, {
        fileName: "[project]/src/templates/ModRow.js",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/TestedWeapons.js (require.context ../resources/forReadme/Tests/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./01_0003a0d4_Details_weapon.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/01_0003a0d4_Details_weapon.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/01_0003a0d4_Details_weapon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/01_0003a0d4_Details_weapon.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/01_0003a0d4_Details_weapon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./02_0003a0d4_Stats.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/02_0003a0d4_Stats.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/02_0003a0d4_Stats.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/02_0003a0d4_Stats.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/02_0003a0d4_Stats.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./03_0003a0d4_Perks.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/03_0003a0d4_Perks.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/03_0003a0d4_Perks.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/03_0003a0d4_Perks.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/03_0003a0d4_Perks.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./04_0003a0d4_Specifications.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/04_0003a0d4_Specifications.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/04_0003a0d4_Specifications.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/04_0003a0d4_Specifications.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/04_0003a0d4_Specifications.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./05_0003a0d4_Crit-Scorched_test.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/05_0003a0d4_Crit-Scorched_test.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/05_0003a0d4_Crit-Scorched_test.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/05_0003a0d4_Crit-Scorched_test.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/05_0003a0d4_Crit-Scorched_test.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./06_0003a0d4_Sneak-Scorched_test.webp": {
        id: ()=>'[project]/src/resources/forReadme/Tests/0003a0d4/06_0003a0d4_Sneak-Scorched_test.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/06_0003a0d4_Sneak-Scorched_test.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/forReadme/Tests/0003a0d4/06_0003a0d4_Sneak-Scorched_test.webp.mjs { IMAGE => "[project]/src/resources/forReadme/Tests/0003a0d4/06_0003a0d4_Sneak-Scorched_test.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./version_0003a0d4.json": {
        id: ()=>"[project]/src/resources/forReadme/Tests/0003a0d4/version_0003a0d4.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/forReadme/Tests/0003a0d4/version_0003a0d4.json (json)")
    }
});
}}),
"[project]/src/templates/TestedWeapons.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTestedWeapon": (()=>getTestedWeapon),
    "isTested": (()=>isTested)
});
const versions = {};
const images = {};
function importAll(r) {
    function resolver(key) {
        if (key.endsWith('.json')) {
            let startIndex = key.indexOf("_") + 1;
            let endIndex = key.lastIndexOf(".");
            if (startIndex > 0 && endIndex > -1 && startIndex < endIndex) {
                const id = key.substring(startIndex, endIndex);
                const jsonObj = r(key);
                versions[id] = {
                    alt: jsonObj.alt,
                    version: jsonObj.version
                };
            }
        } else if (key.endsWith('.webp')) {
            let firstIndex = key.indexOf("_");
            const number = parseInt(key.substring(2, firstIndex));
            let secondIndex = key.indexOf("_", firstIndex + 1);
            const id = key.substring(firstIndex + 1, secondIndex);
            const name = key.substring(secondIndex + 1, key.length - 5);
            const image = r(key);
            const array = images[id];
            if (array) {
                array.push({
                    name: name,
                    image: image,
                    number: number
                });
            } else {
                images[id] = [
                    {
                        name: name,
                        image: image,
                        number: number
                    }
                ];
            }
        }
    }
    r.keys().forEach((key)=>resolver(key));
}
function importAllImages(r) {
    function resolver(key) {
        images[key] = r(key);
    }
    r.keys().forEach((key)=>resolver(key));
}
// Now you can't use require.context several times for different types (ok), you can't see folder's names which forces you to add it in file names,
// and you can't use files with the same names in different folders. Never had this problems in the past (Горите в аду пидарасы)
importAll(__turbopack_module_context__(__turbopack_require__("[project]/src/templates/TestedWeapons.js (require.context ../resources/forReadme/Tests/**)")));
function isTested(wId) {
    return versions[wId] && images[wId];
}
function getTestedWeapon(wId) {
    if (isTested(wId)) {
        return {
            version: versions[wId],
            images: images[wId]
        };
    }
    return null;
}
}}),
"[project]/src/templates/WeaponTemplate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponImages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AmmoView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AmmoView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ProjView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$GeneralView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/GeneralView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AdditionalDView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$CritView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/CritView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DamageOverview$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/DamageOverview.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModRow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModRow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TestedWeapons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponRestrictions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponRestrictions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-ssr] (ecmascript)");
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
function getApplyButton(template, setModalTemplate, setModalCalculate, onTestClick) {
    function testedMedal(wId) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTested"])(wId)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: wId,
                variant: "white",
                className: "p-0 ps-2 pe-2 m-0",
                onClick: onTestClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '1.5rem'
                    },
                    children: "🎖️"
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 33,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplate.js",
                lineNumber: 32,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function restrictions(wId) {
        const version = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponRestrictions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weaponRestrictions"][wId];
        if (version) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopover"], {
                element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: "white",
                    className: "p-0 ps-2 pe-2 m-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.5rem'
                        },
                        children: "📛"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplate.js",
                        lineNumber: 45,
                        columnNumber: 25
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 44,
                    columnNumber: 21
                }, void 0),
                message: version,
                header: 'Restrictions'
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplate.js",
                lineNumber: 43,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (template.apply) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "col-2 d-flex justify-content-center",
                    children: restrictions(template.id)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "col-4 d-flex justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            minWidth: '6rem'
                        },
                        onClick: (e)=>setModalTemplate({
                                template: template,
                                show: true
                            }),
                        children: "Choose"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplate.js",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "col-4 d-flex justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            minWidth: '6rem'
                        },
                        onClick: (e)=>setModalCalculate({
                                template: template,
                                show: true
                            }),
                        children: "Calculate"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplate.js",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "col-2 justify-content-center center-text",
                    children: testedMedal(template.id)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 54,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getResetButton(template, itemsLength, resetButtonActive, setResetButtonActive) {
    if (itemsLength === 0 || !resetButtonActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onClick(e) {
        const cleanTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTemplateCopyById"])(template.id);
        for(const property in cleanTemplate){
            template[property] = cleanTemplate[property];
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modsSetter"].setTemplatesMods([
            template
        ]);
        setResetButtonActive(!resetButtonActive);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            size: "sm",
            variant: "warning",
            className: "ms-0 mt-0 mb-3",
            onClick: onClick,
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 87,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/WeaponTemplate.js",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
function buildInfoRows(info, badgeStyle, badgesRow) {
    const filteredInfo = [];
    const filteredMarks = [];
    for(let i = 1; i < info.length; i += 2){
        if (info[i] !== "") {
            filteredMarks.push(info[i - 1]);
            filteredInfo.push(info[i]);
        }
    }
    let size = filteredInfo.length;
    let k = badgesRow.length;
    for(let i = 0; i < size; i += 3){
        if (i + 1 === size) {
            badgesRow.push(resultBadges(k++, badgeStyle, "-", "-", filteredMarks[i], filteredInfo[i], "-", "-"));
        } else if (i + 2 === size) {
            badgesRow.push(resultBadges(k++, badgeStyle, filteredMarks[i], filteredInfo[i], "-", "-", filteredMarks[i + 1], filteredInfo[i + 1]));
        } else {
            badgesRow.push(resultBadges(k++, badgeStyle, filteredMarks[i], filteredInfo[i], filteredMarks[i + 1], filteredInfo[i + 1], filteredMarks[i + 2], filteredInfo[i + 2]));
        }
    }
    const badgesCols = [];
    size = badgesRow.length;
    for(let i = 0; i < size; i += 3){
        if (i + 1 === size) {
            badgesCols.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: badgesRow[i]
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 118,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/src/templates/WeaponTemplate.js",
                lineNumber: 117,
                columnNumber: 17
            }, this));
        } else if (i + 2 === size) {
            badgesCols.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        badgesRow[i],
                        badgesRow[i + 1]
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 126,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/src/templates/WeaponTemplate.js",
                lineNumber: 125,
                columnNumber: 17
            }, this));
        } else {
            badgesCols.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        badgesRow[i],
                        badgesRow[i + 1],
                        badgesRow[i + 2]
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 135,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/src/templates/WeaponTemplate.js",
                lineNumber: 134,
                columnNumber: 17
            }, this));
        }
    }
    return badgesCols;
}
function resultBadges(key, style, left1, right1, left2, right2, left3, right3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "pb-1",
            direction: "horizontal",
            gap: 1,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '6.5rem', left1, right1),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '6.5rem', left2, right2),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '6.5rem', left3, right3)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 150,
            columnNumber: 13
        }, this)
    }, key, false, {
        fileName: "[project]/src/templates/WeaponTemplate.js",
        lineNumber: 149,
        columnNumber: 9
    }, this);
}
;
const WeaponTemplate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WeaponTemplate({ modsSetter, template, setModalTemplate, setModalCalculate, onTestClick }) {
    console.log("WeaponTemplate: " + template.index);
    const [changed, setChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetButtonActive, setResetButtonActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function modRow(index, modsSameType, checkMod) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModRow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            weaponId: template.id,
            index: index,
            modsSameType: modsSameType,
            checkMod: checkMod,
            defMods: template.defMods
        }, index, false, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 165,
            columnNumber: 12
        }, this);
    }
    ;
    function checkMod(e, weaponId, modData, modSameType, modsSameType) {
        const check = !modSameType[1];
        // Disable mods because only one mod of the same type can be selected at the same time.
        for(let i = 0; i < modsSameType.length; i++){
            modsSameType[i][1] = false;
        }
        modSameType[1] = check;
        modsSetter.cleanTemplateAndApplyCurrentMods(template);
        setChanged(!changed);
        setResetButtonActive(true);
    }
    ;
    let result = [];
    let items = [];
    // All mods
    if (!template.unverified) {
        const mods = template.allMods;
        let i = 0;
        for(const property in mods){
            const modsSameType = mods[property];
            let children = [];
            // Modes of one type
            for(let j = 0; j < modsSameType.length; j++){
                children.push(modRow(j, modsSameType, checkMod));
            }
            const item = {
                key: i,
                label: property,
                children: children
            };
            items.push(item);
            i += 1;
        }
    }
    let divider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        className: "m-1 p-1",
        children: "Modifications"
    }, void 0, false, {
        fileName: "[project]/src/templates/WeaponTemplate.js",
        lineNumber: 206,
        columnNumber: 20
    }, this);
    if (items.length === 0) {
        divider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    } else {
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
            accordion: true,
            items: items
        }, template.index, false, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 210,
            columnNumber: 21
        }, this));
    }
    const fireRateText = template.isAuto[1] ? template.autoRate[1].toFixed(2) : (10 / template.manualRate[1]).toFixed(2);
    const iSize = '0.75rem';
    const badgeStyle = "badge bg-lite-outline m-1";
    const critText = template.crit[1] === 0 ? "" : "+" + template.crit[1].toFixed(1) + "%";
    const expText = template.exp[1] === 0 ? "" : "+" + template.exp[1].toFixed(1) + "%";
    const strText = template.strengthBoost[1] === 0 ? "" : "+" + template.strengthBoost[1].toFixed(1) + "%";
    const sneakText = template.sneak[1] === 0 ? "" : "+" + template.sneak[1].toFixed(1) + "%";
    const bashText = template.bash[1] === 0 ? "" : "+" + template.bash[1].toFixed(1) + "%";
    const aaText = template.antiArmor[1] === 0 ? "" : "+" + template.antiArmor[1].toFixed(1) + "%";
    const bonusText = template.bonusMult[1] === 0 ? "" : (template.bonusMult[1] < 0 ? "" : "+") + (template.bonusMult[1] * 100).toFixed(1) + "%";
    const crippleText = template.cripple[1] === 0 ? "" : "+" + template.cripple[1].toFixed(1) + "%";
    const batteryText = template.chargeTime[1] === 0 ? "" : template.chargeTime[1].toFixed(2) + " s";
    const powerText = template.powerAttack[1] === 0 ? "" : "+" + template.powerAttack[1].toFixed(1) + "%";
    const info = [
        "☠️",
        critText,
        "💣",
        expText,
        "💪",
        strText,
        "🐍",
        sneakText,
        "🌪️",
        bashText,
        "🛡️",
        aaText,
        "🚀",
        bonusText,
        "🦵",
        crippleText,
        "🔋",
        batteryText,
        "🪓",
        powerText
    ];
    let badgesRow = [];
    badgesRow.push(resultBadges(0, badgeStyle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bullet"])(iSize), template.shotSize[1].toFixed(0), "⌛", template.reloadTime[1].toFixed(2) + " s", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fireRate"])(iSize), fireRateText));
    badgesRow.push(resultBadges(1, badgeStyle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ammo"])(iSize), template.capacity[1].toFixed(0), "🏃", template.ap[1].toFixed(2), "🏋", template.weight[1].toFixed(2)));
    const infoRows = buildInfoRows(info, badgeStyle, badgesRow);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-1",
        id: template.id,
        title: template.name,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: template.id,
            className: "p-1 m-0 out-accordion",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Button, {
                    className: "p-0 ps-2 pe-3 m-0 out-accordion",
                    style: {
                        height: '3rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        fluid: true,
                        className: "p-0 m-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-0 m-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "p-0 ps-0 m-0 center-text",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageElement"])(template.iconName[template.type[1]], '2.9rem'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "ps-4",
                                        children: template.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/WeaponTemplate.js",
                                        lineNumber: 238,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/templates/WeaponTemplate.js",
                                lineNumber: 236,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 235,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplate.js",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 233,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col d-flex justify-content-start mb-2 pt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        bordered: true,
                                        color: "default",
                                        className: "shadow-outline2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "m-0 p-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "Level: ",
                                                    template.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/templates/WeaponTemplate.js",
                                                lineNumber: 246,
                                                columnNumber: 118
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/templates/WeaponTemplate.js",
                                            lineNumber: 246,
                                            columnNumber: 94
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/WeaponTemplate.js",
                                        lineNumber: 246,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/WeaponTemplate.js",
                                    lineNumber: 245,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col d-flex justify-content-end mb-2 pt-1 pe-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        bordered: true,
                                        color: "volcano",
                                        className: "shadow-outline3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "m-0 p-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])(template.type[1])
                                            }, void 0, false, {
                                                fileName: "[project]/src/templates/WeaponTemplate.js",
                                                lineNumber: 249,
                                                columnNumber: 118
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/templates/WeaponTemplate.js",
                                            lineNumber: 249,
                                            columnNumber: 94
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/WeaponTemplate.js",
                                        lineNumber: 249,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/WeaponTemplate.js",
                                    lineNumber: 248,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 244,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            className: "mt-1 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 252,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: infoRows
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 253,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            template: template
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 256,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$CritView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            crits: template.crSpellId[1],
                            weapId: template.id
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 257,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            template: template
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 258,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            className: "mt-2 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$GeneralView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            template: template
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 260,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AmmoView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "pt-2",
                            ammoId: template.ammoId[1]
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 261,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "pt-2",
                            projId: template.projId[1]
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 262,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2"
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 263,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DamageOverview$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            damageData: template.damageData
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplate.js",
                            lineNumber: 264,
                            columnNumber: 21
                        }, this),
                        divider,
                        getResetButton(template, items.length, resetButtonActive, setResetButtonActive),
                        result,
                        getApplyButton(template, setModalTemplate, setModalCalculate, onTestClick)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/WeaponTemplate.js",
                    lineNumber: 243,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/WeaponTemplate.js",
            lineNumber: 232,
            columnNumber: 13
        }, this)
    }, template.id, false, {
        fileName: "[project]/src/templates/WeaponTemplate.js",
        lineNumber: 231,
        columnNumber: 9
    }, this);
});
const __TURBOPACK__default__export__ = WeaponTemplate;
}}),
"[project]/src/templates/TemplateItems.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "modGroups": (()=>modGroups),
    "modsSetter": (()=>modsSetter),
    "weaponIds": (()=>weaponIds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/WeaponTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageExtractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageSetter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$LegendarySetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/LegendarySetter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModsSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModsSetter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/skeleton/index.js [app-ssr] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/pagination/index.js [app-ssr] (ecmascript) <export default as Pagination>");
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
const modGroups = new Set();
const weaponIds = {
    All: []
};
const modsSetter = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModsSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$LegendarySetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](), new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModParser"](), new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](), new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
function buildTemplates() {
    console.log("BuildTemplates");
    const templates = JSON.parse(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()));
    if (modGroups.size === 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getGroups(templates, modGroups);
    }
    const weaponIdsExists = weaponIds.All.length > 0;
    for(let i = 0; i < templates.length; i++){
        const template = templates[i];
        template.index = i;
        if (!weaponIdsExists) {
            const type = template.type[0];
            let weaponIdsByType = weaponIds[type];
            if (!weaponIdsByType) {
                weaponIdsByType = [];
                weaponIds[type] = weaponIdsByType;
            }
            const obj = {
                id: template.id,
                apply: template.apply
            };
            weaponIdsByType.push(obj);
            weaponIds.All.push(obj);
        }
    }
    modsSetter.setTemplatesMods(templates);
    return templates;
}
function getSkeletons(size) {
    let result = [];
    for(let i = 0; i < size; i++){
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                className: "p-1 m-0 out-accordion",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1",
                    style: {
                        height: '3rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                        avatar: true,
                        paragraph: {
                            rows: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/templates/TemplateItems.js",
                        lineNumber: 55,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/TemplateItems.js",
                    lineNumber: 54,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/TemplateItems.js",
                lineNumber: 53,
                columnNumber: 17
            }, this)
        }, i, false, {
            fileName: "[project]/src/templates/TemplateItems.js",
            lineNumber: 52,
            columnNumber: 13
        }, this));
    }
    return result;
}
const templates = buildTemplates();
const TemplateItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function TemplateItems(props) {
    console.log("TemplateItems");
    const [wData, setWData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        paginated: [],
        total: 0,
        loaded: false
    });
    const filterByName = (item)=>{
        if (props.filterName === "" || props.filterName === null) {
            return true;
        }
        return item.name.includes(props.filterName);
    };
    const filterByType = (item)=>{
        if (props.weaponType === "All") {
            return true;
        }
        return item.type.includes(props.weaponType);
    };
    // TODO: Not correct as it re-renders trice instead of twice.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setWData({
            paginated: [],
            current: wData.paginated.length,
            total: wData.total,
            loaded: false
        });
        // Pray with might for those who called this 'setTimeout', 'setInterval' to be burning in hell as long as possible.
        setTimeout(()=>{
            const [paginated, total] = prepareTemplates(props, filterByName, filterByType);
            setWData({
                paginated: paginated,
                current: paginated.length,
                total: total,
                loaded: true
            });
        });
    }, [
        props.page,
        props.weaponType,
        props.filterName,
        props.pageSize,
        templates
    ]);
    function showData() {
        if (!wData.loaded) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    getSkeletons(wData.total),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/TemplateItems.js",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                        align: "center",
                        disabled: true,
                        current: props.page,
                        onChange: null,
                        defaultPageSize: props.pageSize,
                        total: wData.total
                    }, void 0, false, {
                        fileName: "[project]/src/templates/TemplateItems.js",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    wData.paginated,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/TemplateItems.js",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                        className: "mb-2",
                        align: "center",
                        current: props.page,
                        defaultPageSize: props.pageSize,
                        onChange: props.onPageChanged,
                        total: wData.total
                    }, void 0, false, {
                        fileName: "[project]/src/templates/TemplateItems.js",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: showData()
    }, void 0, false);
});
const __TURBOPACK__default__export__ = TemplateItems;
function prepareTemplates(props, filterByName, filterByType) {
    const items = templates.filter(filterByType).filter(filterByName).map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onTestClick: props.onTestClick,
            modsSetter: modsSetter,
            template: template,
            setModalTemplate: props.setModalTemplate,
            setModalCalculate: props.setModalCalculate
        }, template.index, false, {
            fileName: "[project]/src/templates/TemplateItems.js",
            lineNumber: 122,
            columnNumber: 89
        }, this));
    const lastIndex = items.length - 1;
    let paginated = [];
    for(let i = props.startIndex; i < props.startIndex + props.pageSize; i++){
        if (i > lastIndex) {
            break;
        }
        paginated.push(items[i]);
    }
    return [
        paginated,
        items.length
    ];
}
}}),
"[project]/src/templates/calc/ParameterCalculator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ParameterCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ExtraDamageOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ExtraDamageOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EAddDamages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EAddDamages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EWeaponSpecs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayerStats$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EPlayerStats.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EPlayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageEmulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageEmulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Combinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Combinator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AccuracyHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkCardBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryCalcBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryCalcBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$LegendarySetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/LegendarySetter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryProvider.js [app-ssr] (ecmascript)");
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
class ParameterCalculator {
    static info = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "ATTENTION!"
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ Not all weapons are tested in real game, therefore some of damage values can be incorrect or mods (which are presented in the calculator) can be not accessible for usage in the game. The calculator will run through mods, legendary mods, perks, consumables to find the best configuration provided that a weapon has 100% accuracy."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ The calculator will try to pick mods with best recoil / spread, but they will not impact accuracy during calculations whereas in real game accuracy can greatly affect damage performance."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ Possible AP benefits are ignored."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ Weapons with default legendary mods will not be iterated through other legendary."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ Gun-Foo, Bash, all legendary perks (except TOFT, Follow Through), and some others affecting accuracy are ignored."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⁍ Power attack, Furious are ignored (as being not tested for now)."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/ParameterCalculator.js",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    constructor(creatureNames, id, modGroups, cards, frCrit, frHead, main, stuff, legendaryOpts, accessibleLeg, accessibleStuff, accessiblePerks, accuracyPreference){
        this.creatureNames = creatureNames;
        this.id = id;
        this.modGroups = modGroups;
        this.modCombinator = null;
        this.boostCombinator = null;
        this.bestParameters = null;
        this.lastParameters = null;
        this.bestTime = Infinity;
        this.lastTime = Infinity;
        this.creatureName = null;
        this.template = null;
        this.count = 0;
        this.maxCount = 0;
        this.cards = cards;
        this.frHead = frHead;
        this.frCrit = frCrit;
        this.main = main;
        this.stuff = stuff;
        this.modParser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModParser"]();
        this.legendary = null;
        this.legendaryOpts = legendaryOpts;
        this.accessibleLeg = accessibleLeg;
        this.accessibleStuff = accessibleStuff;
        this.accessiblePerks = accessiblePerks;
        this.defaultLegendary = null;
        this.hasGotLastCombination = false;
        this.currentConfig = {};
        this.bestConfig = null;
        this.bestAverageHit = 0;
        this.accuracyHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        this.accuracyPreference = accuracyPreference;
        this.defaultExplosive = false;
        this.perkImageNames = [];
        this.creatureTags = [];
        this.bodyTags = [];
        // Currently accuracy mods do not influence on damage but, best
        // values still can be calculated (without paying attention to distance)
        // specify such mods in advance to reduce the number of computations
        this.bestAccuracyMods = null;
    }
    getBestParameters() {
        // We are finished, but for Non-Automatic option best parameters can still be null
        // use the last one
        return this.bestParameters ? this.bestParameters : this.lastParameters;
    }
    getTemplate() {
        return this.template;
    }
    getCount() {
        return this.count;
    }
    getMaxCount() {
        return this.maxCount;
    }
    getBestTime(clockFormat = true) {
        const time = this.bestParameters ? this.bestTime : this.lastTime;
        if (clockFormat) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisToTime"])(time);
        }
        return time;
    }
    prepareAndCalcFirst(creatureName = "average") {
        // The order of invoking of functions is important!
        this.creatureName = creatureName;
        this.creatureTags = this.getCreatureTags();
        this.bodyTags = this.getBodyTags();
        this.template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTemplateCopyById"])(this.id);
        this.bestAccuracyMods = this.accuracyHelper.getBestMods(this.template, this.modGroups, this.accuracyPreference);
        this.defaultLegendary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getDefaultLegendary(this.template, new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$LegendarySetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
        this.defaultExplosive = this.isDefaultExplosive();
        this.legendary = this.buildLegendary();
        const silencerDamage = this.main.Night && this.cards.Sneak;
        const modCombinations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getDamagedModIndexes(this.template, this.modGroups, this.bestAccuracyMods, silencerDamage);
        this.modCombinator = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Combinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](modCombinations);
        this.maxCount = this.modCombinator.getCombinationsCount();
        this.applyMods();
        this.boostCombinator = this.buildBoostCombinator();
        let consList = null;
        let legsList = null;
        if (this.boostCombinator) {
            const current = this.boostCombinator.current();
            consList = this.buildConsumableList(current);
            legsList = this.buildLegendaryList(current);
        }
        this.calculateAndCount(consList, legsList);
    }
    buildLegendary() {
        const legendary = {};
        const range = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isWeaponRanged(this.template);
        const lowHP = this.cards["Low HP"];
        const scoped = this.main["Scoped"];
        let leg1 = [];
        let leg2 = [];
        let leg3 = [];
        if (this.defaultLegendary.length === 0) {
            if (this.legendaryOpts.Legendary1) {
                leg1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryCalcBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLegendary1(range, lowHP, this.accessibleLeg.leg1);
            }
            if (this.legendaryOpts.Legendary2) {
                leg2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryCalcBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLegendary2(range, this.defaultExplosive, scoped, this.accessibleLeg.leg2);
            }
            if (this.legendaryOpts.Legendary3) {
                leg3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryCalcBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLegendary3(range, this.accessibleLeg.leg3);
            }
        }
        legendary['Legendary1_l'] = leg1;
        legendary['Legendary2_l'] = leg2;
        legendary['Legendary3_l'] = leg3;
        return legendary;
    }
    getBodyTags() {
        let bodyTags = [];
        const uniqueTags = new Set();
        if (this.creatureName === 'average') {
            for(const fieldName in this.creatureNames){
                const creatureData = this.creatureNames[fieldName];
                uniqueTags.add(creatureData[3].toLowerCase());
            }
            bodyTags = [
                ...uniqueTags
            ];
        } else {
            for(const fieldName in this.creatureNames){
                const creatureData = this.creatureNames[fieldName];
                if (creatureData[0] === this.creatureName) {
                    bodyTags = [
                        creatureData[3].toLowerCase()
                    ];
                    break;
                }
            }
        }
        return bodyTags;
    }
    getCreatureTags() {
        let creatureTags = [];
        const uniqueTags = new Set();
        if (this.creatureName === 'average') {
            for(const fieldName in this.creatureNames){
                const creatureData = this.creatureNames[fieldName];
                for(let i = 0; i < creatureData[2].length; i++){
                    const tag = creatureData[2][i];
                    uniqueTags.add(tag.toLowerCase());
                }
            }
            creatureTags = [
                ...uniqueTags
            ];
        } else {
            for(const fieldName in this.creatureNames){
                const creatureData = this.creatureNames[fieldName];
                if (creatureData[0] === this.creatureName) {
                    for(let i = 0; i < creatureData[2].length; i++){
                        const tag = creatureData[2][i];
                        creatureTags.push(tag.toLowerCase());
                    }
                    break;
                }
            }
        }
        return creatureTags;
    }
    getConsumables() {
        const result = {};
        const wType = this.template.type[1];
        const wName = this.template.name;
        const tags = this.template.tags;
        const ammo = this.template.ammoType ? this.template.ammoType.codeName : "";
        const crit = this.cards.Crit;
        const sneak = this.cards.Sneak;
        const team = this.cards.Team;
        const lowHP = this.cards["Low HP"];
        const scoped = this.main["Scoped"];
        if (this.stuff["Magazines"]) {
            result["Magazines_c"] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMagazineItems(wType, wName, tags, crit, team, scoped, this.creatureTags, this.accessibleStuff.magazines);
        }
        if (this.stuff["Endangerol Syringer"]) {
            const others = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getOtherItems(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasPhysicalDamage(this.template));
            if (others.length > 0) {
                result["Syringer_c"] = others;
            }
        }
        if (this.stuff["Bobble Heads"]) {
            const bobble = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getBobbleHeadItems(wType, tags, ammo, this.accessibleStuff.bobbleHeads);
            if (bobble.length > 0) {
                result["Bobble_c"] = bobble;
            }
        }
        if (this.stuff["Drink"]) {
            const drink = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getDrinkItems(wType, tags, crit, this.creatureTags, this.accessibleStuff.drink);
            if (drink.length > 0) {
                result["Drink_c"] = drink;
            }
        }
        if (this.stuff["Chemicals"]) {
            result["Chemicals_c"] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getChemicalItems(wType, crit, sneak, this.accessibleStuff.chemo);
        }
        if (this.stuff["Food"]) {
            const food = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFoodItems(wType, crit, this.accessibleStuff.food);
            if (food.length > 0) {
                result["Food_c"] = food;
            }
        }
        if (this.stuff["Serums"]) {
            result["Serums_c"] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getSerumItems(wType, crit, lowHP, team, this.stuff["Food"], this.accessibleStuff.serums);
        }
        return Object.keys(result).length === 0 ? null : result;
    }
    calculateAndCount(consumableBoostsList, legendary) {
        this.lastParameters = this.calculateCombination(consumableBoostsList, legendary);
        this.lastTime = this.lastParameters[this.creatureName].lifeTime;
        this.averageHit = this.lastParameters[this.creatureName].averageHit;
        if (!this.lastParameters["Rejected"]) {
            if (this.lastTime < this.bestTime) {
                this.bestParameters = this.lastParameters;
                this.bestAverageHit = this.averageHit;
                this.bestTime = this.lastTime;
                this.updateBestConfig();
            } else if (this.lastTime === this.bestTime) {
                if (this.averageHit >= this.bestAverageHit) {
                    this.bestAverageHit = this.averageHit;
                    this.bestParameters = this.lastParameters;
                    this.bestTime = this.lastTime;
                    this.updateBestConfig();
                }
            }
        }
        this.count += 1;
    }
    buildBoostCombinator() {
        let consCombinations = this.getConsumables();
        if (!consCombinations) {
            consCombinations = {};
        }
        for(const name in this.legendary){
            consCombinations[name] = this.legendary[name];
        }
        if (Object.keys(consCombinations).length > 0) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Combinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](consCombinations);
        }
        return null;
    }
    buildConsumableList(boostCombinations) {
        const result = [];
        if (!boostCombinations) {
            return result;
        }
        for(const name in boostCombinations){
            if (name.endsWith("_c")) {
                const array = boostCombinations[name];
                for(let i = 0; i < array.length; i++){
                    result.push(array[i]);
                }
            }
        }
        return result;
    }
    buildLegendaryList(boostCombinations) {
        const result = [];
        if (!boostCombinations) {
            return result;
        }
        for(const name in boostCombinations){
            if (name.endsWith("1_l")) {
                result.push([
                    boostCombinations[name],
                    0
                ]);
            } else if (name.endsWith("2_l")) {
                result.push([
                    boostCombinations[name],
                    1
                ]);
            } else if (name.endsWith("3_l")) {
                result.push([
                    boostCombinations[name],
                    2
                ]);
            }
        }
        return result;
    }
    nextBoostExists() {
        return this.boostCombinator && this.boostCombinator.next();
    }
    calculateCombinations(maxCount = 1) {
        let count = 0;
        while(count < maxCount){
            let modCombinationExists = false;
            let currentBoosts = null;
            if (!this.nextBoostExists()) {
                modCombinationExists = this.modCombinator.next();
                if (modCombinationExists) {
                    this.applyMods();
                    this.boostCombinator = this.buildBoostCombinator();
                    if (this.boostCombinator) {
                        currentBoosts = this.boostCombinator.current();
                    }
                } else {
                    break;
                }
            } else {
                currentBoosts = this.boostCombinator.current();
            }
            const consList = this.buildConsumableList(currentBoosts);
            const legsList = this.buildLegendaryList(currentBoosts);
            this.calculateAndCount(consList, legsList);
            count += 1;
        }
        this.hasGotLastCombination = count === 0;
        return !this.hasGotLastCombination;
    }
    isFinished() {
        return this.hasGotLastCombination;
    }
    getCompletionPercent() {
        if (!this.modCombinator) {
            return 0;
        }
        const onePart = 100 / this.modCombinator.getCombinationsCount();
        return parseInt(onePart * this.modCombinator.getCurrentNumber());
    }
    applyMods() {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].resetMods(this.template);
        const combinations = this.modCombinator.current();
        for(const name in combinations){
            const modGroup = this.template.allMods[name];
            if (modGroup) {
                const modIndex = combinations[name];
                if (modIndex > -1) {
                    modGroup[modIndex][1] = true;
                }
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modsSetter"].cleanTemplateAndApplyCurrentMods(this.template);
    }
    // Considers that if explosive exists by default then it will exist for any other configuration
    // must be applied before resetting template
    isDefaultExplosive() {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modsSetter"].cleanTemplateAndApplyCurrentMods(this.template);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isWeaponExplosive(this.template);
    }
    nonAutomatic() {
        return this.main["Non-Automatic"] && this.template.isAuto[1] === 1;
    }
    applyLegendaryToWSpec(wSpec, legendary, update) {
        if (!legendary) {
            return;
        }
        const lowHP = this.cards["Low HP"];
        for(let i = 0; i < legendary.length; i++){
            const leg = legendary[i];
            const legId = leg[0];
            const legIndex = leg[1];
            this.modParser.applyLegendaryModToWSpec(legId, wSpec, legIndex, lowHP ? 20 : 100, update, true);
            wSpec.legendary[legIndex][0] = legId;
        }
    }
    memoConfig(wSpec, consumableBoostsList) {
        const mods = [];
        const leg1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 1);
        const leg2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 2);
        const leg3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegendaryNameFromSpec"])(wSpec, 3);
        for(let i = 0; i < wSpec.mods.length; i++){
            const mod = wSpec.mods[i];
            mods.push({
                group: mod.group,
                name: mod.name
            });
        }
        this.currentConfig["mods"] = mods;
        this.currentConfig["consumables"] = consumableBoostsList;
        this.currentConfig["legendary"] = [
            leg1,
            leg2,
            leg3
        ];
        this.currentConfig["perks"] = this.perkImageNames;
        return this.currentConfig;
    }
    updateBestConfig() {
        this.bestConfig = {};
        const mods = [];
        const legs = [];
        const consumables = [];
        const perks = [];
        this.bestConfig['mods'] = mods;
        this.bestConfig['legendary'] = legs;
        this.bestConfig['consumables'] = consumables;
        this.bestConfig['perks'] = perks;
        for(let i = 0; i < this.currentConfig.mods.length; i++){
            const mod = this.currentConfig.mods[i];
            mods.push({
                group: mod.group,
                name: mod.name
            });
        }
        for(let i = 0; i < this.currentConfig.legendary.length; i++){
            const leg = this.currentConfig.legendary[i];
            legs.push(leg);
        }
        for(let i = 0; i < this.currentConfig.consumables.length; i++){
            const cons = this.currentConfig.consumables[i];
            consumables.push(cons);
        }
        for(let i = 0; i < this.currentConfig.perks.length; i++){
            const perk = this.currentConfig.perks[i];
            perks.push(perk);
        }
    }
    getBestConfig() {
        return this.bestConfig ? this.bestConfig : this.currentConfig;
    }
    getCurrentConfig() {
        return this.currentConfig;
    }
    buildNewCreatures() {
        return {
            creature1: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCreature"])(this.creatureNames.creature1[0], this.creatureNames.creature1[1], "creature1"),
            creature2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCreature"])(this.creatureNames.creature2[0], this.creatureNames.creature2[1], "creature2"),
            creature3: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCreature"])(this.creatureNames.creature3[0], this.creatureNames.creature3[1], "creature3"),
            creature4: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCreature"])(this.creatureNames.creature4[0], this.creatureNames.creature4[1], "creature4")
        };
    }
    calculateCombination(consumableBoostsList, legendary) {
        const wSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EWeaponSpecs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTemplateToSpecs"])(this.template, false);
        // Update default legs or apply new in wSpec
        const updateLeg = this.defaultLegendary.length > 0;
        const legToApply = this.defaultLegendary.length > 0 ? this.defaultLegendary : legendary;
        this.applyLegendaryToWSpec(wSpec, legToApply, updateLeg);
        const extraDamage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ExtraDamageOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultExtraDamage"])();
        extraDamage.useCrit = this.cards["Crit"];
        extraDamage.critFreq = this.frCrit;
        extraDamage.useSneak = this.cards["Sneak"];
        extraDamage.headFreq = this.frHead;
        extraDamage.useHead = this.main["Head Shot"];
        const additionalDamages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EAddDamages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAdds"])();
        const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPlayer"])();
        const playerStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EPlayerStats$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPlayerStats"])();
        playerStats.strength.value = this.main["Strength"];
        const boostDamage = this.buildPerks(wSpec, player);
        this.memoConfig(wSpec, consumableBoostsList);
        const creatures = this.buildNewCreatures();
        const [, consumableBoosts] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].buildFromList(consumableBoostsList, player);
        const weaponFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](wSpec, boostDamage, extraDamage, additionalDamages, consumableBoosts, playerStats);
        const timeLimit = this.bestTime === Infinity ? null : [
            this.creatureName,
            this.bestTime
        ];
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageEmulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](weaponFactory.build(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DEFAULT), creatures).emulate(35000, timeLimit);
        const report = {
            "Rejected": this.nonAutomatic(),
            "Parameters": {
                wSpec: wSpec,
                creatures: creatures,
                extraDamage: extraDamage,
                additionalDamages: additionalDamages,
                player: player,
                playerStats: playerStats,
                boostDamage: boostDamage,
                result: result,
                consumableList: consumableBoostsList
            },
            "average": {
                lifeTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAverageTimeMillis"])(creatures),
                averageHit: (creatures.creature1.averageHit + creatures.creature2.averageHit + creatures.creature3.averageHit + creatures.creature4.averageHit) / 4
            }
        };
        report[creatures.creature1.name] = {
            lifeTime: creatures.creature1.lifeTime,
            averageHit: creatures.creature1.averageHit
        };
        report[creatures.creature2.name] = {
            lifeTime: creatures.creature2.lifeTime,
            averageHit: creatures.creature2.averageHit
        };
        report[creatures.creature3.name] = {
            lifeTime: creatures.creature3.lifeTime,
            averageHit: creatures.creature3.averageHit
        };
        report[creatures.creature4.name] = {
            lifeTime: creatures.creature4.lifeTime,
            averageHit: creatures.creature4.averageHit
        };
        return report;
    }
    buildPerks(wSpec, player) {
        const wType = wSpec.type;
        const automatic = wSpec.is_auto === 1;
        const energyTag = wSpec.tags.includes("Energy");
        const explosiveTag = wSpec.tags.includes("Explosive");
        const fusionTag = wSpec.tags.includes("FusionCore");
        const oneHandedTag = wSpec.tags.includes("Melee1H");
        const twoHandedTag = wSpec.tags.includes("Melee2H");
        const silencerTag = wSpec.tags.includes("HasSilencer");
        const shotgunTag = wSpec.tags.includes("Shotgun");
        const main = this.cards["Main Boosts"];
        const temp = this.cards["Temp Boosts"];
        const leg = this.cards["Leg Boosts"];
        const team = this.cards["Team"];
        const lowHp = this.cards["Low HP"];
        const pa = this.cards["Power Armor"];
        const explosive = wSpec.exp > 0;
        const crit = this.cards["Crit"];
        const sneak = this.cards["Sneak"];
        const night = this.main["Night"];
        const useSerums = this.stuff["Serums"];
        const drink = this.stuff["Drink"];
        const boosts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag, shotgunTag, main, temp, leg, drink, team, lowHp, pa, explosive, crit, sneak, night, useSerums, player, this.bodyTags, this.creatureTags, this.accessiblePerks);
        this.perkImageNames = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImageNamesForPickedCards(boosts);
        return boosts;
    }
}
}}),
"[project]/src/templates/calc/view/PickedGroups.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PickedGroups)
});
class PickedGroups {
    static excludeGroups = [
        "Replacement",
        "Feedthroat",
        "Handle",
        "Mod1",
        "Mod2",
        "Mod3",
        "Mod4",
        "Modelswap",
        "Meleelogo",
        "Shaft",
        "Legendary1",
        "Legendary2",
        "Legendary3",
        "Legendary4",
        "Legendary5",
        "Customname",
        "Frontsight"
    ];
    static groups = [];
    static init(template) {
        PickedGroups.groups.length = 0;
        for(const name in template.allMods){
            PickedGroups.push(name);
        }
    }
    static excluded(name) {
        return PickedGroups.excludeGroups.includes(name);
    }
    static push(name) {
        if (!PickedGroups.excluded(name)) {
            PickedGroups.groups.push(name);
        }
    }
    static clear() {
        PickedGroups.groups.length = 0;
    }
    static get() {
        return PickedGroups.groups;
    }
}
}}),
"[project]/src/templates/calc/view/CalcModGroups.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcModGroups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/GroupView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/PickedGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function getDefaultModGroups(template) {
    let result = {};
    if (template) {
        for(const name in template.allMods){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].excluded(name)) {
                result[name] = true;
            }
        }
    }
    return result;
}
function buildGroupsView(groups, onGroupChange) {
    let result = [];
    for(const name in groups){
        result.push(getModItem(name, groups, onGroupChange));
    }
    return result;
}
function getModItem(name, groups, onGroupChange) {
    const checked = groups[name];
    const outline = checked ? "shadow-blue" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: outline,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-1 mt-1 p-0 m-0 flex-nowrap justify-content-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: '2.8rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                            title: name,
                            onChange: onGroupChange,
                            checked: checked
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: '15rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                            lineNumber: 42,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                lineNumber: 38,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, name, false, {
        fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
function CalcModGroups(props) {
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultModGroups(props.template));
    function onGroupChange(e) {
        groups[e.target.title] = e.target.checked;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].clear();
        for(const name in groups){
            if (groups[name]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].push(name);
            }
        }
        setGroups({
            ...groups
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-3 mb-1",
                children: "Mod Groups"
            }, 'ModGroups', false, {
                fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: buildGroupsView(groups, onGroupChange)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcModGroups.js",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/templates/calc/view/CalcModOptionsView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcModOptionsView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/GroupView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-ssr] (ecmascript)");
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
function getInfo(name, infos) {
    const info = infos[name];
    if (info) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopover"], {
            element: infoButton(),
            message: info,
            header: "Description"
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
            lineNumber: 18,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function infoButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        style: {
            width: '2rem'
        },
        variant: "warning",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "?"
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
            lineNumber: 26,
            columnNumber: 61
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
function headButton(name, frHead, setFrHead) {
    if (name !== "Head Shot") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onClick(e) {
        frHead += 20;
        if (frHead > 100) {
            frHead = 20;
        }
        setFrHead(frHead);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-0 pe-0 ",
        style: {
            width: '3rem'
        },
        variant: "secondary",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: [
                    frHead,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                lineNumber: 42,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
            lineNumber: 42,
            columnNumber: 106
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
function buildView(items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos) {
    const result = [];
    function onChange(e) {
        items[e.target.title] = e.target.checked;
        setItems({
            ...items
        });
    }
    for(const opt in items){
        result.push(getItem(opt, onChange, items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos));
    }
    return result;
}
function critButton(name, frCrit, setFrCrit) {
    if (name !== "Crit") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onClick(e) {
        frCrit -= 1;
        if (frCrit < 1) {
            frCrit = 7;
        }
        setFrCrit(frCrit);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-0 pe-0",
        style: {
            width: '3rem'
        },
        variant: "secondary",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: [
                    "1 / ",
                    frCrit
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                lineNumber: 70,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
            lineNumber: 70,
            columnNumber: 103
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
function getItem(name, onChange, items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos) {
    let width = infos[name] ? '13rem' : '15rem';
    width = name === "Head Shot" || name === "Crit" ? "12rem" : width;
    width = name === "Strength" ? "11rem" : width;
    const dis = name === "Strength";
    const checked = dis ? true : items[name];
    const outline = checked ? "shadow-blue" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: outline,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-1 mt-1 flex-nowrap justify-content-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: '2.8rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                            disabled: dis,
                            title: name,
                            onChange: onChange,
                            checked: checked
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                            lineNumber: 86,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: width
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                            lineNumber: 88,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this),
                    getInfo(name, infos),
                    headButton(name, frHead, setFrHead),
                    strengthField(name, items, setItems),
                    critButton(name, frCrit, setFrCrit)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                lineNumber: 84,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
            lineNumber: 83,
            columnNumber: 13
        }, this)
    }, name, false, {
        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
function strengthField(name, items, setItems) {
    if (name !== "Strength") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkLength"])(e);
        let value = parseInt(e.target.value);
        let min = parseInt(e.target.min);
        if (value < min) {
            value = min;
        }
        items.Strength = value;
        setItems({
            ...items
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
        className: "pe-1",
        style: {
            minWidth: '4rem',
            maxWidth: '4rem'
        },
        type: "number",
        min: "5",
        value: items.Strength,
        max: "100",
        maxLength: "3",
        onChange: onChange
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
function CalcModOptionsView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-3 mb-1",
                children: props.header
            }, props.header, false, {
                fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: buildView(props.items, props.setItems, props.frHead, props.setFrHead, props.frCrit, props.setFrCrit, props.infos)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                    lineNumber: 125,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcModOptionsView.js",
                lineNumber: 124,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/templates/calc/view/CalcCards.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModOptionsView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
;
;
;
function buildNameFromItemId(fName) {
    if (fName === 'toft') {
        return 'TOFT';
    }
    let name = fName.replaceAll("_", " ");
    name = name.charAt(0).toUpperCase() + name.substring(1);
    return name;
}
function getCheckbox(cards, setCards, header = null) {
    const result = [];
    function onChange(e) {
        cards[e.target.id] = !cards[e.target.id];
        setCards({
            ...cards
        });
    }
    for(const fName in cards){
        const used = cards[fName];
        const name = buildNameFromItemId(fName);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                id: fName,
                onChange: onChange,
                checked: used,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcCards.js",
                        lineNumber: 23,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcCards.js",
                    lineNumber: 23,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcCards.js",
                lineNumber: 23,
                columnNumber: 55
            }, this)
        }, fName, false, {
            fileName: "[project]/src/templates/calc/view/CalcCards.js",
            lineNumber: 23,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            header,
            result,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-1"
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcCards.js",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function CalcCards(props) {
    const infos = {
        "Temp Boosts": getCheckbox(props.tempPerks, props.setTempPerks, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontWeight: 'bold',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                color: '#fff',
                backgroundColor: '#8a0044'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Gun Fu is not included."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcCards.js",
                lineNumber: 36,
                columnNumber: 195
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcCards.js",
            lineNumber: 36,
            columnNumber: 73
        }, this)),
        "Main Boosts": getCheckbox(props.mainPerks, props.setMainPerks),
        "Leg Boosts": getCheckbox(props.legPerks, props.setLegPerks),
        "Low HP": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontWeight: 'bold',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                color: '#fff',
                backgroundColor: '#155a89'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "20% / 100%"
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcCards.js",
                lineNumber: 39,
                columnNumber: 140
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcCards.js",
            lineNumber: 39,
            columnNumber: 19
        }, this),
        "Power Armor": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontWeight: 'bold',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                color: '#fff',
                backgroundColor: '#5b3115'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Used only for 'Heavy', ignored for other groups."
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcCards.js",
                lineNumber: 40,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcCards.js",
            lineNumber: 40,
            columnNumber: 24
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        header: "Cards",
        items: props.cards,
        setItems: props.setCards,
        frCrit: props.frCrit,
        setFrCrit: props.setFrCrit,
        infos: infos
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcCards.js",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/CalcMain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcMain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModOptionsView.js [app-ssr] (ecmascript)");
;
;
const infos = {
    "Non-Automatic": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            fontWeight: 'bold',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            color: '#fff',
            backgroundColor: '#006031'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "Calculate among non-automatic mods only. If only automatic mods are presented then default config will be used."
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcMain.js",
            lineNumber: 5,
            columnNumber: 143
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcMain.js",
        lineNumber: 5,
        columnNumber: 22
    }, this),
    "Night": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            fontWeight: 'bold',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            color: '#fff',
            backgroundColor: '#303b36'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "Only for weapons with suppressor in sneak mode."
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcMain.js",
            lineNumber: 6,
            columnNumber: 135
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcMain.js",
        lineNumber: 6,
        columnNumber: 14
    }, this)
};
function CalcMain(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        header: "Main",
        items: props.main,
        setItems: props.setMain,
        frHead: props.frHead,
        setFrHead: props.setFrHead,
        infos: infos
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcMain.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/CalcConsumables.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcConsumables)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModOptionsView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
;
;
;
function buildNameFromItemId(fName, cutTail) {
    let name = fName.slice(0, fName.length - cutTail);
    name = name.replaceAll("_", " ");
    name = name.charAt(0).toUpperCase() + name.substring(1);
    return name;
}
function getCheckbox(type, cons, setCons, header = null) {
    const result = [];
    function onChange(e) {
        cons[e.target.id][0] = !cons[e.target.id][0];
        setCons({
            ...cons
        });
    }
    for(const fName in cons){
        const array = cons[fName];
        const used = array[0];
        let name = array[1];
        if (type === "Magazines") {
            name = buildNameFromItemId(fName, 9);
        } else if (type === "Bobble Heads") {
            name = buildNameFromItemId(fName, 7);
        } else if (type === "Serums") {
            name = buildNameFromItemId(fName, 6);
        }
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                id: fName,
                onChange: onChange,
                checked: used,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
                        lineNumber: 29,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
                    lineNumber: 29,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
                lineNumber: 29,
                columnNumber: 55
            }, this)
        }, fName, false, {
            fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
            lineNumber: 29,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            header,
            result,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-1"
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
const header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
    style: {
        fontWeight: 'bold',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        color: '#fff',
        backgroundColor: '#81007a'
    },
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        children: "Only items below are used to reduce the number of useless combinations:"
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
        lineNumber: 40,
        columnNumber: 139
    }, this)
}, void 0, false, {
    fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
    lineNumber: 40,
    columnNumber: 17
}, this);
function CalcConsumables(props) {
    const infos = {
        "Magazines": getCheckbox("Magazines", props.magazines, props.setMagazines),
        "Bobble Heads": getCheckbox("Bobble Heads", props.bobbleHeads, props.setBobbleHeads),
        "Drink": getCheckbox("Drink", props.drink, props.setDrink, header),
        "Food": getCheckbox("Food", props.food, props.setFood, header),
        "Chemicals": getCheckbox("Chemicals", props.chemo, props.setChemo, header),
        "Serums": getCheckbox("Serums", props.serums, props.setSerums)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        header: "Consumables",
        items: props.stuff,
        setItems: props.setStuff,
        infos: infos
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcConsumables.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/CalcLegendary.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcLegendary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModOptionsView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegsId.js [app-ssr] (ecmascript)");
;
;
;
;
function getCheckbox(leg, setLeg) {
    const result = [];
    function onChange(e) {
        leg[e.target.id] = !leg[e.target.id];
        setLeg({
            ...leg
        });
    }
    for(const fName in leg){
        const used = leg[fName];
        const name = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getName(fName);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                id: fName,
                onChange: onChange,
                checked: used,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ps-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                        lineNumber: 15,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                    lineNumber: 15,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                lineNumber: 15,
                columnNumber: 55
            }, this)
        }, fName, false, {
            fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
            lineNumber: 15,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontWeight: 'bold',
                    paddingLeft: '0.5rem',
                    color: '#fff',
                    backgroundColor: '#cd9d00'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Only legendary below are used to reduce the number of useless combinations:"
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                    lineNumber: 19,
                    columnNumber: 110
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            result,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-1"
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function CalcLegendary(props) {
    const infos = {
        "Legendary1": getCheckbox(props.leg1, props.setLeg1),
        "Legendary2": getCheckbox(props.leg2, props.setLeg2),
        "Legendary3": getCheckbox(props.leg3, props.setLeg3)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModOptionsView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        header: "Legendary",
        items: props.leg,
        setItems: props.setLeg,
        infos: infos
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcLegendary.js",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/WeaponEmblem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WeaponEmblem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponImages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
;
;
;
;
function WeaponEmblem(props) {
    let iconName = props.iconName;
    let className = "shadow-outline-gold";
    if (props.className) {
        className = props.className;
    }
    if (props.template) {
        iconName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImage(props.template);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "p-0 m-0 " + className,
        style: {
            maxHeight: props.emblemSize,
            width: props.emblemSize
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
            className: "p-1 m-0",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageElement"])(iconName, props.imageSize)
        }, void 0, false, {
            fileName: "[project]/src/templates/WeaponEmblem.js",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/WeaponEmblem.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/LegendaryCalcRowView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegendaryCalcRowView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LegendaryCalcRowView(props) {
    function getLeg(stars, index) {
        return getRow(stars, props.legendary[index], props.width, false, props.fontSize, props.starSize);
    }
    const leg1 = getLeg("⭐", 0);
    const leg2 = getLeg("⭐⭐", 1);
    const leg3 = getLeg("⭐⭐⭐", 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-0 d-flex justify-content-center",
        children: [
            leg1,
            leg2,
            leg3
        ]
    }, void 0, true, {
        fileName: "[project]/src/templates/calc/view/LegendaryCalcRowView.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
function getRow(stars, text, width, wrap, fontSize, starSize) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-yellow m-1 shadow-gold ps-1 pe-1",
        style: {
            width: width
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center",
                style: {
                    fontSize: starSize
                },
                children: stars
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/LegendaryCalcRowView.js",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textWrap: wrap,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: fontSize,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/LegendaryCalcRowView.js",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/templates/calc/view/LegendaryCalcRowView.js",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/ModsCalcRowView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModsCalcRowView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function getWidths(size, columns) {
    let rest = size - columns;
    const rows = [
        columns
    ];
    while(rest > 0){
        if (rest < columns) {
            rows.push(rest);
        } else {
            rows.push(columns);
        }
        rest -= columns;
    }
    const widths = [];
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        for(let j = 0; j < row; j++){
            widths.push((100 / row).toFixed(2) + "%");
        }
    }
    return widths;
}
function ModsCalcRowView(props) {
    const modViews = [];
    let columns = 0;
    let modView = [];
    const wrap = props.wrapText ? 'wrap' : 'nowrap';
    if (props.mods.length < 2) {
        columns = 1;
    } else if (props.mods.length < 5) {
        columns = 2;
    } else if (props.mods.length < 7) {
        columns = 3;
    } else {
        columns = 4;
    }
    const widths = getWidths(props.mods.length, columns);
    for(let i = 0; i < props.mods.length; i++){
        const mod = props.mods[i];
        const width = widths[i];
        modView.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mod-item-shadow m-1 ps-1 pe-1",
            style: {
                width: width,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textWrap: wrap,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#555555',
                    fontSize: props.fontSize,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                },
                children: mod.name
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/ModsCalcRowView.js",
                lineNumber: 42,
                columnNumber: 163
            }, this)
        }, mod.name, false, {
            fileName: "[project]/src/templates/calc/view/ModsCalcRowView.js",
            lineNumber: 42,
            columnNumber: 13
        }, this));
        if ((i + 1) % columns === 0) {
            modViews.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-0 d-flex justify-content-center",
                children: modView
            }, i, false, {
                fileName: "[project]/src/templates/calc/view/ModsCalcRowView.js",
                lineNumber: 45,
                columnNumber: 27
            }, this));
            modView = [];
        }
    }
    if (modView.length > 0) {
        modViews.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-0 d-flex justify-content-center",
            children: modView
        }, props.mods.length, false, {
            fileName: "[project]/src/templates/calc/view/ModsCalcRowView.js",
            lineNumber: 50,
            columnNumber: 23
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-0 p-0",
        style: {
            minHeight: props.minHeight
        },
        children: modViews
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/ModsCalcRowView.js",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/ParametersApplier.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ParametersApplier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-ssr] (ecmascript)");
;
class ParametersApplier {
    static applyCalculatedParameters(parameters, props) {
        props.setWSpec(parameters.wSpec);
        props.setBoostDamage(parameters.boostDamage);
        props.setPlayer(parameters.player);
        props.setPlayerStats(parameters.playerStats);
        props.setAdditionalDamages(parameters.additionalDamages);
        props.setExtraDamage(parameters.extraDamage);
        // Have to recalculate it for best result to set appropriate selection to items.
        const [foodPref, stuffBoost, consumables] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].buildFromList(parameters.consumableList, parameters.player);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setConsumableItems(consumables, props.setMagazines, props.setBobbleHeads, props.setFood, props.setDrink, props.setPsycho, props.setSerum, props.setOthers);
        props.setFoodPref(foodPref);
        props.setStuffBoost(stuffBoost);
    }
}
}}),
"[project]/src/templates/calc/CalcEntities.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDefaultCards": (()=>getDefaultCards),
    "getDefaultLegendary": (()=>getDefaultLegendary),
    "getDefaultMain": (()=>getDefaultMain),
    "getDefaultStuff": (()=>getDefaultStuff),
    "getLegPerks": (()=>getLegPerks),
    "getMainPerks": (()=>getMainPerks),
    "getTempPerks": (()=>getTempPerks),
    "getUsableBobbleHeads": (()=>getUsableBobbleHeads),
    "getUsableChemo": (()=>getUsableChemo),
    "getUsableDrink": (()=>getUsableDrink),
    "getUsableFood": (()=>getUsableFood),
    "getUsableMagazines": (()=>getUsableMagazines),
    "getUsableSerums": (()=>getUsableSerums)
});
function getDefaultCards() {
    return {
        "Main Boosts": true,
        "Temp Boosts": false,
        "Leg Boosts": false,
        "Team": true,
        "Low HP": true,
        "Power Armor": true,
        "Sneak": false,
        "Crit": false
    };
}
function getDefaultMain() {
    return {
        "Strength": 25,
        "Head Shot": true,
        "Non-Automatic": false,
        "Scoped": false,
        "Night": false
    };
}
function getDefaultStuff() {
    return {
        "Magazines": false,
        "Bobble Heads": false,
        "Chemicals": true,
        "Food": false,
        "Drink": false,
        "Serums": true,
        "Endangerol Syringer": false
    };
}
function getDefaultLegendary() {
    return {
        "Legendary1": true,
        "Legendary2": true,
        "Legendary3": true
    };
}
function getUsableFood() {
    return {
        "tasty_mutant_hound_stew_food": [
            true,
            "Tasty mutant hound stew"
        ],
        "deathclaw_wellington_food": [
            true,
            "Deathclaw wellington"
        ],
        "spiked_venison_tato_stew_food": [
            true,
            "Spiked venison & Tato stew"
        ],
        "blight_soup_food": [
            true,
            "Blight soup"
        ]
    };
}
function getUsableMagazines() {
    return {
        "attack_of_the_fishmen_magazine": [
            true,
            ""
        ],
        "curse_of_the_burned_magazine": [
            true,
            ""
        ],
        "rise_of_the_mutants_magazine": [
            true,
            ""
        ],
        "home_in_the_hills_magazine": [
            true,
            ""
        ],
        "demon_slaves_demon_sands_magazine": [
            true,
            ""
        ],
        "the_future_of_hunting_magazine": [
            true,
            ""
        ],
        "bear_proofing_your_campsite_magazine": [
            true,
            ""
        ],
        "guide_to_hunting_commies_magazine": [
            true,
            ""
        ],
        "wendigo_magazine": [
            true,
            ""
        ],
        "mothman_magazine": [
            true,
            ""
        ],
        "grafton_magazine": [
            true,
            ""
        ],
        "snallygaster_magazine": [
            true,
            ""
        ],
        "flatwoods_alien_magazine": [
            true,
            ""
        ],
        "invasion_of_the_zetans_magazine": [
            true,
            ""
        ],
        "when_apes_go_bananas_magazine": [
            true,
            ""
        ],
        "blood_on_the_harp_magazine": [
            true,
            ""
        ],
        "corsair_queen_magazine": [
            true,
            ""
        ],
        "the_starlet_sniper_magazine": [
            true,
            ""
        ],
        "take_aim_army_style_magazine": [
            true,
            ""
        ],
        "camouflage_special_magazine": [
            true,
            ""
        ],
        "nuke_the_man_magazine": [
            true,
            ""
        ],
        "tomorrow_technology_magazine": [
            true,
            ""
        ],
        "giant_super_weapons_magazine": [
            true,
            ""
        ],
        "acceptable_overkill_magazine": [
            true,
            ""
        ],
        "little_guns_for_little_ladies_magazine": [
            true,
            ""
        ],
        "plasma_the_weapon_of_tomorrow_magazine": [
            true,
            ""
        ],
        "us_army_goes_to_space_magazine": [
            true,
            ""
        ],
        "future_of_warfare_magazine": [
            true,
            ""
        ],
        "rockobot_takes_the_nation_by_storm_magazine": [
            true,
            ""
        ]
    };
}
function getUsableBobbleHeads() {
    return {
        "big_guns_bobble": [
            true,
            ""
        ],
        "unarmed_bobble": [
            true,
            ""
        ],
        "strength_bobble": [
            true,
            ""
        ],
        "melee_bobble": [
            true,
            ""
        ],
        "energy_bobble": [
            true,
            ""
        ],
        "explosive_bobble": [
            true,
            ""
        ],
        "repair_bobble": [
            true,
            ""
        ],
        "small_guns_bobble": [
            true,
            ""
        ]
    };
}
function getUsableSerums() {
    return {
        "adrenal_reaction_serum": [
            true,
            ""
        ],
        "twisted_muscles_serum": [
            true,
            ""
        ],
        "empath_serum": [
            true,
            ""
        ],
        "talons_serum": [
            true,
            ""
        ],
        "speed_demon_serum": [
            true,
            ""
        ],
        "herd_mentality_serum": [
            true,
            ""
        ],
        "eagle_eyes_serum": [
            true,
            ""
        ],
        "carnivore_serum": [
            true,
            ""
        ],
        "herbivore_serum": [
            true,
            ""
        ]
    };
}
function getUsableDrink() {
    return {
        "hoppy_hunter_ipa_drink": [
            false,
            "Hoppy hunter IPA"
        ],
        "whiskey_drink": [
            true,
            "Whiskey"
        ],
        "gulpershine_vintage_drink": [
            true,
            "Gulpershine vintage"
        ],
        "sugar_free_nukashine_drink": [
            true,
            "Sugar-Free nukashine"
        ],
        "sweetmutfruit_drink": [
            true,
            "Sweet mut fruit tea"
        ],
        "ballistic_bock_drink": [
            false,
            "Ballistic bock"
        ],
        "high_voltage_hefe_drink": [
            false,
            "High voltage hefe"
        ]
    };
}
function getUsableChemo() {
    return {
        "psychobuff_psycho": [
            true,
            "Psychobuff"
        ],
        "nuclear_don_blend_psycho": [
            false,
            "Nuclear Don's blend"
        ],
        "fury_psycho": [
            true,
            "Fury"
        ],
        "overdrive_psycho": [
            true,
            "Overdrive"
        ],
        "calmex_psycho": [
            true,
            "Calmex"
        ]
    };
}
function getMainPerks() {
    return {
        "bloody_mess": true,
        "glow_sight": true,
        "mister_sandman": true,
        "class_freak": true,
        "strange_in_numbers": true,
        "better_criticals": true,
        "nerd_rage": true,
        "science": true,
        "power_user": true,
        "ninja": true,
        "covert_operative": true,
        "demolition_expert": true,
        "stabilized": true,
        "heavy_gunner": true,
        "lock_and_load": true,
        "shotgunner": true,
        "scattershot": true,
        "tank_killer": true,
        "commando": true,
        "ground_pounder": true,
        "rifleman": true,
        "guerrilla": true,
        "gunslinger": true,
        "archer": true,
        "bow_before_me": true,
        "martial_artist": true,
        "party_girl_boy": true,
        "gladiator": true,
        "slugger": true,
        "incisor": true,
        "iron_fist": true,
        "exterminator": true
    };
}
function getTempPerks() {
    return {
        "adrenaline": true,
        "tenderizer": true
    };
}
function getLegPerks() {
    return {
        "follow_through": true,
        "toft": true
    };
}
}}),
"[project]/src/templates/ModalCalculateWeapon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalCalculateWeapon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/ParameterCalculator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcCards.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/PickedGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcMain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcMain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcConsumables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcConsumables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcLegendary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcLegendary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegsId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/BSRadio.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/WeaponEmblem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/SimpleNameDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/LegendaryCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/ModsCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/ParametersApplier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/EmblemCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AccuracyHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkImageProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/CalcEntities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
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
;
;
let parameterCalculator = null;
let firstShown = false;
const calcIterations = 4;
function ModalCalculateWeapon(props) {
    // console.log("ModalCalculateWeapon");
    const minHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        config: {},
        current: 0,
        percent: 0,
        bestTime: Infinity
    });
    const [calculating, setCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 0 - start, 1 - calculating, 2 - finished
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultCards"])());
    const [main, setMain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultMain"])());
    const [stuff, setStuff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultStuff"])());
    const [leg, setLeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLegendary"])());
    const [leg1, setLeg1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg1());
    const [leg2, setLeg2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg2());
    const [leg3, setLeg3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg3());
    const [chemo, setChemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableChemo"])());
    const [food, setFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableFood"])());
    const [drink, setDrink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableDrink"])());
    const [magazines, setMagazines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableMagazines"])());
    const [bobbleHeads, setBobbleHeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableBobbleHeads"])());
    const [serums, setSerums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableSerums"])());
    const [mainPerks, setMainPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMainPerks"])());
    const [tempPerks, setTempPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTempPerks"])());
    const [legPerks, setLegPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegPerks"])());
    const [frCrit, setFrCrit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [frHead, setFrHead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [selectedCreature, setSelectedCreature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('average');
    const [accuracyPref, setAccuracyPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BALANCE);
    if (!props.modalCalculate.show) {
        firstShown = false;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (!firstShown) {
        firstShown = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init(props.modalCalculate.template);
    }
    let name = "";
    if (props.modalCalculate.template) {
        name = props.modalCalculate.template.name;
    }
    name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncateLongWords"])(name, 25);
    function onHide(e) {
        setCount({
            config: {},
            current: 0,
            percent: 0,
            bestTime: Infinity
        });
        setCalculating(0);
        props.setModalCalculate({
            template: null,
            show: false
        });
        parameterCalculator = null;
        firstShown = false;
    }
    function applyTemplate(e) {
        if (parameterCalculator) {
            setCalculating(3);
            setTimeout(()=>{
                const parameters = parameterCalculator.getBestParameters().Parameters;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].applyCalculatedParameters(parameters, props);
                onHide(e);
            }, 100);
        }
    }
    function startCalculation(e) {
        parameterCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](props.creatureNamesRef.current, props.modalCalculate.template.id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(), cards, frCrit, frHead, main, stuff, leg, {
            leg1: leg1,
            leg2: leg2,
            leg3: leg3
        }, {
            chemo: chemo,
            food: food,
            drink: drink,
            magazines: magazines,
            serums: serums,
            bobbleHeads: bobbleHeads
        }, {
            main: mainPerks,
            temp: tempPerks,
            leg: legPerks
        }, accuracyPref);
        parameterCalculator.prepareAndCalcFirst(selectedCreature);
        setCount({
            config: parameterCalculator.getCurrentConfig(),
            current: parameterCalculator.getCount(),
            percent: parameterCalculator.getCompletionPercent(),
            bestTime: parameterCalculator.getBestTime()
        });
        setCalculating(1);
    }
    if (calculating === 1) {
        setTimeout(()=>{
            if (parameterCalculator) {
                const calculated = parameterCalculator.calculateCombinations(calcIterations);
                if (!calculated) {
                    setCalculating(2);
                    setCount({
                        config: parameterCalculator.getBestConfig(),
                        current: parameterCalculator.getCount(),
                        percent: parameterCalculator.getCompletionPercent(),
                        bestTime: parameterCalculator.getBestTime()
                    });
                } else {
                    setCount({
                        config: parameterCalculator.getCurrentConfig(),
                        current: parameterCalculator.getCount(),
                        percent: parameterCalculator.getCompletionPercent(),
                        bestTime: parameterCalculator.getBestTime()
                    });
                }
            }
        });
    }
    function getButtons(calculating) {
        if (calculating === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 me-1",
                        onClick: startCalculation,
                        children: "Start"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 ms-1",
                        onClick: onHide,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        } else if (calculating === 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "w-100 me-1",
                onClick: onHide,
                children: "Stop And Close"
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                lineNumber: 143,
                columnNumber: 17
            }, this);
        } else if (calculating === 2) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 me-1",
                        onClick: applyTemplate,
                        children: "Apply"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 ms-1",
                        onClick: onHide,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
    }
    function getCounter(calculating) {
        if (calculating === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
        const leftValue = count.current + " - " + count.percent + "%";
        const rightValue = count.bestTime;
        const wrapText = calculating === 2;
        const currentElement = document.getElementById("modal-calc-item");
        if (currentElement) {
            const curHeight = currentElement.offsetHeight;
            if (!minHeight.current || minHeight.current < curHeight) {
                minHeight.current = curHeight;
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: minHeight.current
            },
            id: "modal-calc-item",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 d-flex justify-content-center",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(leftValue, rightValue, 'volcano', {
                        width: '100%',
                        height: '1.34rem',
                        fontSize: '1rem'
                    }, false)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 173,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    legendary: count.config.legendary,
                    width: "50%",
                    fontSize: "65%",
                    starSize: "50%"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 176,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    minHeight: "2.9rem",
                    mods: count.config.mods,
                    fontSize: "65%",
                    wrapText: wrapText
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 177,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    imNames: count.config.perks,
                    imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    iconSize: "2.0rem",
                    imageSize: "1.864rem",
                    borderRadius: "5px"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 178,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    imNames: count.config.consumables,
                    imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImagePathById,
                    iconSize: "2.0rem",
                    imageSize: "1.864rem"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 179,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/templates/ModalCalculateWeapon.js",
            lineNumber: 172,
            columnNumber: 13
        }, this);
    }
    function getCreatureNames() {
        const result = [
            "average"
        ];
        for(const fieldName in props.creatureNamesRef.current){
            const data = props.creatureNamesRef.current[fieldName];
            result.push(data[0]);
        }
        return result;
    }
    function onSelectCreatureName(e) {
        setSelectedCreature(e);
    }
    const creatureNames = getCreatureNames();
    let selectedCreatureName;
    if (creatureNames.includes(selectedCreature)) {
        selectedCreatureName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(selectedCreature);
    } else {
        selectedCreatureName = "Average";
        setSelectedCreature("average");
    }
    function getSettings(calculating) {
        if (calculating === 0) {
            let show = !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasDefaultLegendary(props.modalCalculate.template);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "blue-label",
                            size: "sm",
                            onSelect: onSelectCreatureName,
                            names: creatureNames,
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: selectedCreatureName
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                lineNumber: 212,
                                columnNumber: 137
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                            lineNumber: 212,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 211,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        className: "mt-3 mb-2",
                        children: [
                            "Accuracy",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopoverBadge"], {
                                className: "ms-3",
                                sign: "?",
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ACCURACY_INFO,
                                header: "Accuracy",
                                placement: 'bottom'
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                lineNumber: 216,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 214,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "d-flex justify-content-center m-1",
                        pairs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ACC_PREFERENCE,
                        selectedValue: accuracyPref,
                        setSelectedValue: setAccuracyPref,
                        parseValueInt: true
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcMain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        main: main,
                        setMain: setMain,
                        frHead: frHead,
                        setFrHead: setFrHead
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 219,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        template: props.modalCalculate.template
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 220,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        mainPerks: mainPerks,
                        setMainPerks: setMainPerks,
                        tempPerks: tempPerks,
                        setTempPerks: setTempPerks,
                        legPerks: legPerks,
                        setLegPerks: setLegPerks,
                        cards: cards,
                        setCards: setCards,
                        frCrit: frCrit,
                        setFrCrit: setFrCrit
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 221,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcLegendary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        leg: leg,
                        setLeg: setLeg,
                        leg1: leg1,
                        setLeg1: setLeg1,
                        leg2: leg2,
                        setLeg2: setLeg2,
                        leg3: leg3,
                        setLeg3: setLeg3,
                        show: show
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 222,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcConsumables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        stuff: stuff,
                        setStuff: setStuff,
                        food: food,
                        drink: drink,
                        chemo: chemo,
                        setFood: setFood,
                        setDrink: setDrink,
                        setChemo: setChemo,
                        magazines: magazines,
                        setMagazines: setMagazines,
                        bobbleHeads: bobbleHeads,
                        setBobbleHeads: setBobbleHeads,
                        serums: serums,
                        setSerums: setSerums
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 223,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function nameView() {
        if (calculating !== 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center mb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Calculate Best Options"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 236,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                lineNumber: 236,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/ModalCalculateWeapon.js",
            lineNumber: 235,
            columnNumber: 13
        }, this);
    }
    function getModalView() {
        if (calculating === 3) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "modal-scroll-80-60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 245,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                lineNumber: 244,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "d-flex justify-content-center p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "p-1",
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "d-flex justify-content-start p-0",
                                xs: 2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    template: props.modalCalculate.template,
                                    emblemSize: "2.5rem",
                                    imageSize: "2rem"
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                lineNumber: 253,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 8,
                                className: "d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-auto m-auto",
                                    style: {
                                        fontSize: '1rem',
                                        fontWeight: 'bold'
                                    },
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                    lineNumber: 257,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                lineNumber: 256,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 2,
                                className: "d-flex justify-content-end m-auto pe-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopoverBadge"], {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].info,
                                    sign: "?",
                                    header: "Description",
                                    placement: 'left'
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 251,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "modal-scroll-80-60",
                    children: [
                        nameView(),
                        getCounter(calculating),
                        getSettings(calculating)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 264,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Footer, {
                    className: "p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-0 mt-0 flex-nowrap",
                        children: getButtons(calculating)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                        lineNumber: 270,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapon.js",
                    lineNumber: 269,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        show: props.modalCalculate.show,
        onHide: onHide,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: getModalView()
    }, void 0, false, {
        fileName: "[project]/src/templates/ModalCalculateWeapon.js",
        lineNumber: 278,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/CalcModGroupsAll.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcModGroupsAll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/GroupView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function buildGroupsView(groups, onGroupChange) {
    let result = [];
    for(const name in groups){
        result.push(getModItem(name, groups, onGroupChange));
    }
    return result;
}
function getModItem(name, groups, onGroupChange) {
    const checked = groups[name];
    const outline = checked ? "shadow-blue" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: outline,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-1 mt-1 flex-nowrap justify-content-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: '2.8rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                            title: name,
                            onChange: onGroupChange,
                            checked: checked
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        style: {
                            width: '15rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                            lineNumber: 28,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, name, false, {
        fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
function CalcModGroupsAll(props) {
    function onGroupChange(e) {
        props.groups[e.target.title] = e.target.checked;
        props.setGroups({
            ...props.groups
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-3 mb-1",
                children: "Mod Groups"
            }, 'ModGroups', false, {
                fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: buildGroupsView(props.groups, onGroupChange)
                }, void 0, false, {
                    fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/calc/view/CalcModGroupsAll.js",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/templates/calc/view/CalcWGroupsDropdown.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcWGroupsDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function CalcWGroupsDropdown({ type, setType }) {
    function onSelect(e) {
        setType(e);
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "p-2 mb-2 mt-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "sm",
                variant: "info",
                onSelect: onSelect,
                id: "dropdown-basic-button",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])(type),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "All",
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Heavy",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Heavy")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Shotgun",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Shotgun")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Rifle",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Rifle")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Pistol",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Pistol")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Bow",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Bow")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Melee",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Melee")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                        eventKey: "Unarmed",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Unarmed")
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/templates/calc/view/CalcWGroupsDropdown.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/calc/view/CalcCurrentItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CalcCurrentItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/WeaponEmblem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/LegendaryCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/ModsCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/EmblemCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkImageProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
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
function CalcCurrentItem(props) {
    const minHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const weaponName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftValue = props.count.current + " - " + props.count.percent + "%";
    const rightValue = props.count.bestTime;
    const perksHeight = null; // (props.perksUsed) ? '4rem' : '0rem';
    const consHeight = null; // (props.consUsed) ? '6rem' : '0rem';
    const currentElement = document.getElementById("current-calc-item");
    // Adjust card height according to weapon name, we want to avoid height bouncing but be adjusted to
    // every weapon
    if (weaponName.current !== props.wName) {
        weaponName.current = props.wName;
        minHeight.current = null;
    } else {
        if (currentElement) {
            const curHeight = currentElement.offsetHeight;
            if (!minHeight.current || minHeight.current < curHeight) {
                minHeight.current = curHeight;
            }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "shadow-card-gold",
            id: "current-calc-item",
            style: {
                minHeight: minHeight.current
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-1 ps-2 m-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "m-auto",
                                xs: 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "shadow-card-grey",
                                    iconName: props.iconName,
                                    emblemSize: "2.8rem",
                                    imageSize: "2.3rem"
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 9,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-end pe-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-shadow-blue2",
                                            children: props.wName
                                        }, void 0, false, {
                                            fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                            lineNumber: 45,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-end",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(leftValue, rightValue, 'red', {
                                            width: '100%',
                                            height: '1.34rem',
                                            fontSize: '1rem'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        legendary: props.count.config.legendary,
                        width: "50%",
                        fontSize: "65%",
                        starSize: "50%"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        minHeight: "2.9rem",
                        mods: props.count.config.mods,
                        fontSize: "65%",
                        wrapText: false
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            minHeight: perksHeight
                        },
                        imNames: props.count.config.perks,
                        imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        iconSize: "1.5rem",
                        imageSize: "1.364rem",
                        borderRadius: "5px"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            minHeight: consHeight
                        },
                        imNames: props.count.config.consumables,
                        imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImagePathById,
                        iconSize: "1.5rem",
                        imageSize: "1.364rem"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcCurrentItem.js",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/templates/calc/view/CalcResultItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/WeaponEmblem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/LegendaryCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/ModsCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/EmblemCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/ConsumablesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkImageProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
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
const CalcResultItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function CalcResultItem(props) {
    // console.log("CalcResultItem");
    const leftValue = "";
    const rightValue = props.bestTime;
    function onClick(e) {
        if (props.finishedRef.current) {
            props.setWNameToApply(props.wName);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "shadow-outline-result-item mb-3",
            onClick: onClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-1 ps-2 m-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "m-auto",
                                xs: 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$WeaponEmblem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "shadow-card-grey",
                                    iconName: props.iconName,
                                    emblemSize: "2.8rem",
                                    imageSize: "2.3rem"
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 9,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-end pe-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-shadow-grey-blue",
                                            children: props.wName
                                        }, void 0, false, {
                                            fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                            lineNumber: 32,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-end",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(leftValue, rightValue, 'volcano', {
                                            width: '100%',
                                            height: '1.34rem',
                                            fontSize: '1rem'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$LegendaryCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        legendary: props.config.legendary,
                        width: "50%",
                        fontSize: "65%",
                        starSize: "50%"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$ModsCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        minHeight: "1rem",
                        mods: props.config.mods,
                        fontSize: "65%",
                        wrapText: true
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        imNames: props.config.perks,
                        imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        iconSize: "1.5rem",
                        imageSize: "1.364rem",
                        borderRadius: "5px"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        imNames: props.config.consumables,
                        imageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$ConsumablesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImagePathById,
                        iconSize: "1.5rem",
                        imageSize: "1.364rem",
                        borderRadius: "4px"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
                lineNumber: 26,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/calc/view/CalcResultItem.js",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false);
});
const __TURBOPACK__default__export__ = CalcResultItem;
}}),
"[project]/src/templates/calc/view/CalcResultItems.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcResultItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcResultItem.js [app-ssr] (ecmascript)");
;
;
;
function compareItems(item1, item2) {
    if (item1 === null && item2 === null) {
        return 0;
    } else if (item1 === null) {
        return 1;
    } else if (item2 === null) {
        return -1;
    }
    const time1 = item1.bestTimeCount;
    const time2 = item2.bestTimeCount;
    if (time1 < time2) {
        return -1;
    } else if (time2 < time1) {
        return 1;
    }
    return 0;
}
const CalcResultItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function CalcResultItems(props) {
    console.log("CalcResultItems");
    let result = [];
    const resultView = [];
    for(let i = 0; i < props.calcItems.length; i++){
        const item = props.calcItems[i];
        result.push(item);
    }
    result = result.sort(compareItems);
    for(let i = 0; i < result.length; i++){
        const item = result[i];
        resultView.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcResultItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            title: item.wName,
            finishedRef: props.finishedRef,
            setWNameToApply: props.setWNameToApply,
            config: item.config,
            wName: item.wName,
            bestTime: item.bestTime,
            iconName: item.iconName
        }, item.wName, false, {
            fileName: "[project]/src/templates/calc/view/CalcResultItems.js",
            lineNumber: 34,
            columnNumber: 25
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: resultView
    }, void 0, false);
});
const __TURBOPACK__default__export__ = CalcResultItems;
}}),
"[project]/src/templates/ModalCalculateWeapons.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalCalculateWeapons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/ParameterCalculator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModGroupsAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcModGroupsAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcCards.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/PickedGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcMain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcMain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcConsumables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcConsumables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcLegendary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcLegendary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/BSRadio.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcWGroupsDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcWGroupsDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCurrentItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcCurrentItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcResultItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/CalcResultItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/ParametersApplier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AccuracyHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/CalcEntities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/SimpleNameDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreatureDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegsId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/progress/index.js [app-ssr] (ecmascript) <export default as Progress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
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
let parameterCalculator = null;
let firstShown = false;
let currentWIndex = 0;
let parameters = null;
const calcIterations = 4;
function getDefaultModGroups() {
    let result = {};
    for (const name of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modGroups"]){
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$PickedGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].excluded(name)) {
            result[name] = true;
        }
    }
    return result;
}
function ModalCalculateWeapons(props) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        config: {},
        current: 0,
        percent: 0,
        bestTime: Infinity
    });
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultModGroups());
    const [calculating, setCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 0 - start, 1 - calculating, 2 - finished
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultCards"])());
    const [main, setMain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultMain"])());
    const [stuff, setStuff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultStuff"])());
    const [leg, setLeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLegendary"])());
    const [leg1, setLeg1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg1());
    const [leg2, setLeg2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg2());
    const [leg3, setLeg3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getLeg3());
    const [chemo, setChemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableChemo"])());
    const [food, setFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableFood"])());
    const [drink, setDrink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableDrink"])());
    const [magazines, setMagazines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableMagazines"])());
    const [bobbleHeads, setBobbleHeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableBobbleHeads"])());
    const [serums, setSerums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsableSerums"])());
    const [mainPerks, setMainPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMainPerks"])());
    const [tempPerks, setTempPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTempPerks"])());
    const [legPerks, setLegPerks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$CalcEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegPerks"])());
    const [frCrit, setFrCrit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [frHead, setFrHead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [completion, setCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        size: 0
    });
    const [selectedCreature, setSelectedCreature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('average');
    const [accuracyPref, setAccuracyPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BALANCE);
    const [weaponResult, setWeaponResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [wNameToApply, setWNameToApply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renderSwitch, setRenderSwitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canCalculateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const finishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    /*
    // Changes on every render, to allow a user smooth interaction and updates
    useEffect(() => {
        if (canCalculateRef.current) {
            calculateParameters();
            setRenderSwitch(!renderSwitch);
        }
    }, [renderSwitch]);
    */ // We are finished and child asked to be applied.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (finishedRef.current) {
            finishedRef.current = false;
            const result = parameters.get(wNameToApply);
            if (result) {
                setCalculating(3);
                setTimeout(()=>{
                    const parameters = result.Parameters;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParametersApplier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].applyCalculatedParameters(parameters, props);
                    onHide(null);
                }, 100);
            }
        }
    }, [
        wNameToApply
    ]);
    if (!props.modalCalculates.show) {
        firstShown = false;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (!firstShown) {
        currentWIndex = 0;
        firstShown = true;
    // The modal just popped up
    }
    function onHide(e) {
        setCount({
            config: {},
            current: 0,
            percent: 0,
            bestTime: Infinity
        });
        setWeaponResult([]);
        setCompletion({
            current: 0,
            size: 0
        });
        setCalculating(0);
        setWNameToApply(null);
        finishedRef.current = false;
        currentWIndex = 0;
        props.setModalCalculates({
            show: false
        });
        canCalculateRef.current = false;
        parameterCalculator = null;
        firstShown = false;
        parameters = null;
    }
    function setupParameterCalculator() {
        let wId = null;
        if (props.modalCalculates.show) {
            const wIds = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weaponIds"][type];
            let idObj = wIds[currentWIndex];
            while(idObj){
                currentWIndex++;
                if (idObj.apply) {
                    wId = idObj.id;
                    break;
                }
                idObj = wIds[currentWIndex];
            }
            if (wId) {
                const gNames = [];
                for(const name in groups){
                    if (groups[name]) {
                        gNames.push(name);
                    }
                }
                parameterCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](props.creatureNamesRef.current, wId, gNames, cards, frCrit, frHead, main, stuff, leg, {
                    leg1: leg1,
                    leg2: leg2,
                    leg3: leg3
                }, {
                    chemo: chemo,
                    food: food,
                    drink: drink,
                    magazines: magazines,
                    serums: serums,
                    bobbleHeads: bobbleHeads
                }, {
                    main: mainPerks,
                    temp: tempPerks,
                    leg: legPerks
                }, accuracyPref);
                parameterCalculator.prepareAndCalcFirst(selectedCreature);
            }
        }
        if (!wId) {
            parameterCalculator = null;
            currentWIndex = 0;
        }
        return wId !== null;
    }
    function startCalculation(e) {
        const wIds = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weaponIds"][type];
        let size = 0;
        for(let i = 0; i < wIds.length; i++){
            if (wIds[i].apply) {
                size += 1;
            }
        }
        parameters = new Map();
        setCompletion({
            current: 0,
            size: size
        });
        setupParameterCalculator();
        setCalculating(1);
        finishedRef.current = false;
        setCount({
            config: parameterCalculator.getCurrentConfig(),
            current: parameterCalculator.getCount(),
            percent: parameterCalculator.getCompletionPercent(),
            bestTime: parameterCalculator.getBestTime()
        });
        setRenderSwitch(!renderSwitch);
        canCalculateRef.current = true;
    }
    if (calculating === 1 && canCalculateRef.current && parameterCalculator) {
        canCalculateRef.current = false;
        setTimeout(()=>{
            calculateParameters();
        });
    }
    function calculateParameters() {
        if (calculating === 1 && parameterCalculator) {
            if (!parameterCalculator.calculateCombinations(calcIterations)) {
                const template = parameterCalculator.getTemplate();
                const wName = template.name;
                const iconName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImage(template);
                parameters.set(wName, parameterCalculator.getBestParameters());
                weaponResult.push({
                    config: parameterCalculator.getBestConfig(),
                    wName: wName,
                    iconName: iconName,
                    bestTime: parameterCalculator.getBestTime(),
                    bestTimeCount: parameterCalculator.getBestTime(false)
                });
                setWeaponResult([
                    ...weaponResult
                ]);
                setCompletion({
                    current: completion.current + 1,
                    size: completion.size
                });
                if (!setupParameterCalculator()) {
                    finishedRef.current = true;
                    setCalculating(2);
                    return;
                }
            }
            canCalculateRef.current = true;
            setCount({
                config: parameterCalculator.getCurrentConfig(),
                current: parameterCalculator.getCount(),
                percent: parameterCalculator.getCompletionPercent(),
                bestTime: parameterCalculator.getBestTime()
            });
        }
    }
    function getButtons(calculating) {
        if (calculating === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 me-1",
                        onClick: startCalculation,
                        children: "Start"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 225,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-100 ms-1",
                        onClick: onHide,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        } else if (calculating === 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "w-100 me-1",
                onClick: onHide,
                children: "Stop And Close"
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                lineNumber: 231,
                columnNumber: 17
            }, this);
        } else if (calculating === 2) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-100 ms-1",
                    onClick: onHide,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 236,
                    columnNumber: 21
                }, this)
            }, void 0, false);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
    }
    function getProgressNumber(percent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "text-shadow-blue",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: [
                    percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                lineNumber: 246,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/ModalCalculateWeapons.js",
            lineNumber: 246,
            columnNumber: 13
        }, this);
    }
    function getCurrentItem() {
        if (parameterCalculator) {
            const template = parameterCalculator.getTemplate();
            const iconName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getImage(template);
            const wName = template.name;
            const perksUsed = cards["Main Boosts"] || cards["Temp Boosts"];
            let consUsed = false;
            for(const name in stuff){
                const item = stuff[name];
                if (item) {
                    consUsed = true;
                    break;
                }
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCurrentItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                perksUsed: perksUsed,
                consUsed: consUsed,
                iconName: iconName,
                count: count,
                wName: wName
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                lineNumber: 264,
                columnNumber: 21
            }, this);
        }
    }
    function getProgress(calculating) {
        if (calculating === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
        const percent = parseInt(100 * completion.current / completion.size);
        const header = calculating === 2 ? "Tap To Apply" : "";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center mb-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                        size: 40,
                        type: "dashboard",
                        steps: 50,
                        percent: percent,
                        format: (percent)=>getProgressNumber(percent),
                        strokeColor: "rgb(0, 255, 136)",
                        trailColor: "rgba(0, 0, 0, 0.1)",
                        strokeWidth: 17
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 277,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 276,
                    columnNumber: 17
                }, this),
                getCurrentItem(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "mt-3 mb-3 text-shadow-blue2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: header
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 288,
                        columnNumber: 66
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 288,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcResultItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    calcItems: weaponResult,
                    finishedRef: finishedRef,
                    setWNameToApply: setWNameToApply
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 289,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    function getCreatureNames() {
        const result = [
            "average"
        ];
        for(const fieldName in props.creatureNamesRef.current){
            const data = props.creatureNamesRef.current[fieldName];
            result.push(data[0]);
        }
        return result;
    }
    function getSettings(calculating) {
        function onSelectCreatureName(e) {
            setSelectedCreature(e);
        }
        const creatureNames = getCreatureNames();
        let selectedCreatureName;
        if (creatureNames.includes(selectedCreature)) {
            selectedCreatureName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreatureDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].capitalizeCreatureName(selectedCreature);
        } else {
            selectedCreatureName = "Average";
            setSelectedCreature("average");
        }
        if (calculating === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcWGroupsDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: type,
                        setType: setType
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 319,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$SimpleNameDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "blue-label",
                            size: "sm",
                            onSelect: onSelectCreatureName,
                            names: creatureNames,
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: selectedCreatureName
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                lineNumber: 321,
                                columnNumber: 137
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                            lineNumber: 321,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 320,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        className: "mt-3 mb-2",
                        children: [
                            "Accuracy",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopoverBadge"], {
                                className: "ms-3",
                                sign: "?",
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ACCURACY_INFO,
                                header: "Accuracy",
                                placement: 'bottom'
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                lineNumber: 325,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 323,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "d-flex justify-content-center m-1",
                        pairs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ACC_PREFERENCE,
                        selectedValue: accuracyPref,
                        setSelectedValue: setAccuracyPref,
                        parseValueInt: true
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 327,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcMain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        main: main,
                        setMain: setMain,
                        frHead: frHead,
                        setFrHead: setFrHead
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 328,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcModGroupsAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        groups: groups,
                        setGroups: setGroups
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 329,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcCards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        mainPerks: mainPerks,
                        setMainPerks: setMainPerks,
                        tempPerks: tempPerks,
                        setTempPerks: setTempPerks,
                        legPerks: legPerks,
                        setLegPerks: setLegPerks,
                        cards: cards,
                        setCards: setCards,
                        frCrit: frCrit,
                        setFrCrit: setFrCrit
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 330,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcLegendary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        leg: leg,
                        setLeg: setLeg,
                        show: true,
                        leg1: leg1,
                        setLeg1: setLeg1,
                        leg2: leg2,
                        setLeg2: setLeg2,
                        leg3: leg3,
                        setLeg3: setLeg3
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 331,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$CalcConsumables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        stuff: stuff,
                        setStuff: setStuff,
                        food: food,
                        drink: drink,
                        chemo: chemo,
                        setFood: setFood,
                        setDrink: setDrink,
                        setChemo: setChemo,
                        magazines: magazines,
                        setMagazines: setMagazines,
                        bobbleHeads: bobbleHeads,
                        setBobbleHeads: setBobbleHeads,
                        serums: serums,
                        setSerums: setSerums
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 332,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const header = calculating === 0 ? "Best Of The Best" : type;
    const wIcon = calculating === 0 ? "" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImage"])(type);
    function getModalView() {
        if (calculating === 3) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "modal-scroll-80-60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 344,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                lineNumber: 343,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "d-flex justify-content-center p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "p-1",
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "d-flex justify-content-start ps-2 p-0",
                                xs: 2,
                                children: wIcon
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                lineNumber: 352,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 8,
                                className: "d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-auto m-auto text-shadow-indigo",
                                    style: {
                                        fontSize: '1.1rem',
                                        letterSpacing: '1px',
                                        fontWeight: 'bold'
                                    },
                                    children: header
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                    lineNumber: 356,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                lineNumber: 355,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                xs: 2,
                                className: "d-flex justify-content-end m-auto pe-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopoverBadge"], {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$ParameterCalculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].info,
                                    sign: "?",
                                    header: "Description",
                                    placement: 'left'
                                }, void 0, false, {
                                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                                lineNumber: 358,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 351,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 350,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "modal-scroll-80-60 pt-2 p-3",
                    children: [
                        getProgress(calculating),
                        getSettings(calculating)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 363,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Footer, {
                    className: "p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-0 mt-0 flex-nowrap",
                        children: getButtons(calculating)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                        lineNumber: 368,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalCalculateWeapons.js",
                    lineNumber: 367,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        show: props.modalCalculates.show,
        onHide: onHide,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: getModalView()
    }, void 0, false, {
        fileName: "[project]/src/templates/ModalCalculateWeapons.js",
        lineNumber: 376,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/TestedCarousel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Carousel.js [app-ssr] (ecmascript)");
;
;
;
;
function TestedCarousel({ data }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleSelect = (selectedIndex)=>{
        setIndex(selectedIndex);
    };
    const titles = getTitles(data.images);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "d-flex justify-content-center",
                children: titles[index]
            }, void 0, false, {
                fileName: "[project]/src/templates/TestedCarousel.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeIndex: index,
                onSelect: handleSelect,
                interval: null,
                "data-bs-theme": "dark",
                children: getImages(data.images)
            }, void 0, false, {
                fileName: "[project]/src/templates/TestedCarousel.js",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pt-2 pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: data.version.version
                }, void 0, false, {
                    fileName: "[project]/src/templates/TestedCarousel.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/TestedCarousel.js",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getImages(images) {
    let result = [];
    for(let i = 0; i < images.length; i++){
        const imageData = images[i];
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
            style: {
                padding: '0% 15% 10% 15%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "d-block w-100",
                style: {
                    height: 'auto'
                },
                src: imageData.image,
                alt: imageData.name
            }, void 0, false, {
                fileName: "[project]/src/templates/TestedCarousel.js",
                lineNumber: 35,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/templates/TestedCarousel.js",
            lineNumber: 34,
            columnNumber: 13
        }, this));
    }
    return result;
}
function getTitles(images) {
    let result = [];
    for(let i = 0; i < images.length; i++){
        result.push(images[i].name);
    }
    return result;
}
const __TURBOPACK__default__export__ = TestedCarousel;
}}),
"[project]/src/templates/ModalTestedWeapon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalTestedWeapon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedCarousel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TestedCarousel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TestedWeapons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-ssr] (ecmascript)");
;
;
;
;
function ModalTestedWeapon(props) {
    console.log("ModalTestedWeapon");
    if (!props.modalTested.show) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onHide(e) {
        props.setModalTested({
            data: null,
            show: false
        });
    }
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTestedWeapon"])(props.modalTested.wId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        show: props.modalTested.show,
        onHide: onHide,
        size: "xl",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                closeButton: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Title, {
                    id: "contained-modal-title-vcenter",
                    children: "Tests"
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalTestedWeapon.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalTestedWeapon.js",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "pb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TestedCarousel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    data: data
                }, void 0, false, {
                    fileName: "[project]/src/templates/ModalTestedWeapon.js",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/ModalTestedWeapon.js",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/templates/ModalTestedWeapon.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/templates/WeaponTemplates.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalApplyTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModalApplyTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalCalculateWeapon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModalCalculateWeapon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalCalculateWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModalCalculateWeapons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalTestedWeapon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModalTestedWeapon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/float-button/index.js [app-ssr] (ecmascript) <export default as FloatButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-ssr] (ecmascript)");
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
function buildLicense() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "popover-adjustable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                as: "h3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Licensing"
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplates.js",
                    lineNumber: 23,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                children: "Weapon images below were taken from the video game Fallout 76 or from websites created and owned by Bethesda Softworks, the copyright of which is held by Bethesda Softworks, or were released to the press for promotional purposes by the same. The use of images to illustrate items of the game concerning the subject of the images in question is believed to qualify as fair use under United States copyright law, as such display does not significantly impede the right of the copyright holder to sell the copyrighted material and is not being used to generate profit."
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/templates/WeaponTemplates.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
const WeaponTemplates = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WeaponTemplates(props) {
    console.log("WeaponTemplates");
    const [modalTemplate, setModalTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        template: null,
        show: false
    });
    const [modalCalculate, setModalCalculate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        template: null,
        show: false
    });
    const [modalCalculates, setModalCalculates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false
    });
    const [modalTested, setModalTested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        wId: '',
        show: false
    });
    const [filterName, setFilterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [weaponType, setWeaponType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    function resetPage() {
        setPage(1);
        setStartIndex(0);
    }
    function filterNameChanged(e) {
        setPage(1);
        setStartIndex(0);
        setFilterName(e.target.value);
    }
    function onPageChanged(page, pageSize) {
        setStartIndex(pageSize * (page - 1));
        setPage(page);
        setPageSize(pageSize);
    }
    function onTestClick(e) {
        setModalTested({
            wId: e.currentTarget.id,
            show: true
        });
    }
    function findBestClick(e) {
        setModalCalculates({
            show: true
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-1 ms-1 mb-2 me-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "m-auto d-flex justify-content-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            rootClose: "true",
                            trigger: "click",
                            placement: "top",
                            overlay: buildLicense(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "black",
                                pill: true,
                                children: "!"
                            }, void 0, false, {
                                fileName: "[project]/src/templates/WeaponTemplates.js",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplates.js",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplates.js",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "m-auto pe-2 d-flex justify-content-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            size: "sm",
                            variant: "danger",
                            onClick: findBestClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "best-button-shadow",
                                children: "Find The Best"
                            }, void 0, false, {
                                fileName: "[project]/src/templates/WeaponTemplates.js",
                                lineNumber: 72,
                                columnNumber: 80
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/templates/WeaponTemplates.js",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplates.js",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalTestedWeapon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                modalTested: modalTested,
                setModalTested: setModalTested
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalApplyTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                modalTemplate: modalTemplate,
                setModalTemplate: setModalTemplate,
                setWSpec: props.setWSpec
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalCalculateWeapon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                creatureNamesRef: props.creatureNamesRef,
                modalCalculate: modalCalculate,
                setModalCalculate: setModalCalculate,
                setWSpec: props.setWSpec,
                setBoostDamage: props.setBoostDamage,
                setPlayer: props.setPlayer,
                setExtraDamage: props.setExtraDamage,
                setFoodPref: props.setFoodPref,
                setStuffBoost: props.setStuffBoost,
                setAdditionalDamages: props.setAdditionalDamages,
                setPlayerStats: props.setPlayerStats,
                setMagazines: props.setMagazines,
                setBobbleHeads: props.setBobbleHeads,
                setFood: props.setFood,
                setDrink: props.setDrink,
                setPsycho: props.setPsycho,
                setSerum: props.setSerum,
                setOthers: props.setOthers
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModalCalculateWeapons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                creatureNamesRef: props.creatureNamesRef,
                modalCalculates: modalCalculates,
                setModalCalculates: setModalCalculates,
                setWSpec: props.setWSpec,
                setBoostDamage: props.setBoostDamage,
                setPlayer: props.setPlayer,
                setExtraDamage: props.setExtraDamage,
                setFoodPref: props.setFoodPref,
                setStuffBoost: props.setStuffBoost,
                setAdditionalDamages: props.setAdditionalDamages,
                setPlayerStats: props.setPlayerStats,
                setMagazines: props.setMagazines,
                setBobbleHeads: props.setBobbleHeads,
                setFood: props.setFood,
                setDrink: props.setDrink,
                setPsycho: props.setPsycho,
                setSerum: props.setSerum,
                setOthers: props.setOthers
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "ps-1 pe-1 pb-2 flex-nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        weaponType: weaponType,
                        setWeaponType: setWeaponType,
                        resetPage: resetPage
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplates.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                        style: {
                            width: '10rem'
                        },
                        maxLength: "70",
                        onChange: filterNameChanged
                    }, void 0, false, {
                        fileName: "[project]/src/templates/WeaponTemplates.js",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "accordion",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onTestClick: onTestClick,
                    onPageChanged: onPageChanged,
                    startIndex: startIndex,
                    pageSize: pageSize,
                    page: page,
                    weaponType: weaponType,
                    filterName: filterName,
                    setModalTemplate: setModalTemplate,
                    setModalCalculate: setModalCalculate
                }, void 0, false, {
                    fileName: "[project]/src/templates/WeaponTemplates.js",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$float$2d$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FloatButton$3e$__["FloatButton"].BackTop, {
                style: {
                    right: 60
                },
                duration: 100,
                visibilityHeight: 2000
            }, void 0, false, {
                fileName: "[project]/src/templates/WeaponTemplates.js",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
});
const __TURBOPACK__default__export__ = WeaponTemplates;
}}),

};

//# sourceMappingURL=src_templates_754997._.js.map