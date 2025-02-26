(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_damage_273c4b._.js", {

"[project]/src/damage/DamageBlackList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageBlackList)
});
class DamageBlackList {
    static ignoreMap = {
        "0055c152": [
            "005894a9",
            "005894a7"
        ],
        "0060e0ef": [
            "000fd3aa"
        ],
        "0055c166": [
            "000fd3aa"
        ],
        "0042b0cc": [
            "001b5edc"
        ],
        "0001ec47": [
            "000fd3aa"
        ],
        "00646880": [
            "001b5edc"
        ],
        "0001f669": [
            "001b5edc"
        ],
        "00011bf6": [
            "001b5edc"
        ],
        "001109cf": [
            "00215e08"
        ],
        "0042b0d0": [
            "00215e08"
        ],
        "000fe268": [
            "00215e08"
        ],
        "002fd97a": [
            "000fd3aa"
        ],
        "00100ae9": [
            "000fd3aa"
        ],
        "005a366e": [
            "000fd3aa"
        ],
        "005ea441": [
            "000fd3aa"
        ]
    };
    static check(weaponId, damageId) {
        const list = DamageBlackList.ignoreMap[weaponId];
        if (list) {
            return list.includes(damageId);
        }
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageDetailsCard.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AdditionalDView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
function getRow(leftValue, rightValue, leftColor, rightColor, show = true) {
    return show ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueRow"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pt-0 pb-0",
        children: leftValue
    }, void 0, false, {
        fileName: "[project]/src/damage/DamageDetailsCard.js",
        lineNumber: 11,
        columnNumber: 34
    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pt-0 pb-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: rightValue
        }, void 0, false, {
            fileName: "[project]/src/damage/DamageDetailsCard.js",
            lineNumber: 11,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/DamageDetailsCard.js",
        lineNumber: 11,
        columnNumber: 84
    }, this), leftColor, rightColor) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function showExplosive(damageData, resultDamage) {
    return damageData.type === "dtPhysical" && damageData.kind === "physical" && damageData.time === 0 && resultDamage.explosive > 0;
}
function getAnyCreatureBonus(resultDamage) {
    for (let [, bonus] of resultDamage.creatureBonus){
        if (bonus.name === "any") {
            return bonus.value / 100.0;
        }
    }
    return 0;
}
function getCreatureNames(resultDamage) {
    let result = [
        "general"
    ];
    for (let [key] of resultDamage.creatureBonus){
        result.push(key);
    }
    return result;
}
function getResult(resultDamage, damageData, additionalBonus = 0) {
    const damageValue = damageData.damage * (damageData.time > 0 ? damageData.time : 1);
    let bonusMult = resultDamage.bonusMult[damageData.type] - 1 + getAnyCreatureBonus(resultDamage) + additionalBonus;
    if (damageData.kind === "explosive") {
        bonusMult += resultDamage.expDTypeBonus;
    }
    const bonusDamage = damageValue * bonusMult;
    const bonusText = "+" + (bonusMult * 100).toFixed(1) + "% (+" + bonusDamage.toFixed(1) + ")";
    const crit = resultDamage.displayedCrit / 100.0;
    const critValue = damageValue * crit;
    const critText = "+" + resultDamage.displayedCrit.toFixed(1) + "%  (+" + critValue.toFixed(1) + ")";
    const sneak = resultDamage.isSneak ? resultDamage.displayedSneak / 100.0 : 0;
    const totalSneakValue = sneak * damageValue;
    const totalDamageBonusMin = resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer;
    const totalDamageBonusMinValue = (damageValue + bonusDamage + totalSneakValue) * (totalDamageBonusMin - 1);
    const totalDamageBonusMinPercent = (totalDamageBonusMin - 1) * 100;
    const totalDamageBonusMax = resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner;
    const totalDamageBonusMaxValue = (damageValue + bonusDamage + totalSneakValue) * (totalDamageBonusMax - 1);
    const totalDamageBonusMaxPercent = (resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner - 1) * 100;
    let totalDamageBonusText = "";
    if (totalDamageBonusMin === totalDamageBonusMax) {
        totalDamageBonusText = "+" + totalDamageBonusMinPercent.toFixed(1) + "% (+" + totalDamageBonusMinValue.toFixed(1) + ")";
    } else {
        totalDamageBonusText = "+" + totalDamageBonusMinPercent.toFixed(1) + "% / +" + totalDamageBonusMaxPercent.toFixed(1) + "%" + " (+" + totalDamageBonusMinValue.toFixed(1) + " / +" + totalDamageBonusMaxValue.toFixed(1) + ")";
    }
    const sneakText = "+" + resultDamage.displayedSneak.toFixed(1) + "% (+" + totalSneakValue.toFixed(1) + ")";
    const resultSneakValue = resultDamage.isSneak ? totalSneakValue : 0;
    const resultCritValue = resultDamage.isCrit ? critValue : 0;
    const totalDamageMin = (damageValue + bonusDamage + resultSneakValue) * totalDamageBonusMin + resultCritValue;
    const totalDamageMax = (damageValue + bonusDamage + resultSneakValue) * totalDamageBonusMax + resultCritValue;
    const explosiveValueMin = (damageValue + bonusDamage) * totalDamageBonusMin * resultDamage.explosive / 100.0;
    const explosiveValueMax = (damageValue + bonusDamage) * totalDamageBonusMax * resultDamage.explosive / 100.0;
    let explosiveText = explosiveValueMin.toFixed(1);
    const explosiveCritValueMin = critValue * resultDamage.explosive / 100.0 + explosiveValueMin;
    const explosiveCritValueMax = critValue * resultDamage.explosive / 100.0 + explosiveValueMax;
    let explosiveCritText = explosiveCritValueMin.toFixed(1);
    let totalDamageText = totalDamageMin.toFixed(1);
    if (totalDamageMin < totalDamageMax) {
        totalDamageText += " (" + totalDamageMax.toFixed(1) + ")";
        explosiveText += " (" + explosiveValueMax.toFixed(1) + ")";
        explosiveCritText += " (" + explosiveCritValueMax.toFixed(1) + ")";
    }
    if (damageData.time > 0) {
        const tail = " / " + damageData.time.toFixed(0) + " sec.";
        totalDamageText += tail;
        explosiveText += tail;
        explosiveCritText += tail;
    }
    return {
        base: damageData.damage.toFixed(1),
        bonus: bonusText,
        totalBonus: totalDamageBonusText,
        explosive: resultDamage.explosive.toFixed(1),
        sneak: sneakText,
        crit: critText,
        total: totalDamageText,
        totalExp: explosiveText,
        totalExpCrit: explosiveCritText
    };
}
const DamageDetailsCard = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function DamageDetailsCard({ resultDamage, damageData }) {
    _s();
    const [creature, setCreature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    if (creature !== "general" && !resultDamage.creatureBonus.get(creature)) {
        setCreature("general");
    }
    const numberEmoji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberEmoji"])(damageData.index + 1);
    const onDropdownSelect = (e)=>{
        setCreature(e);
    };
    const currentCreature = resultDamage.creatureBonus.get(creature);
    let additionalBonus = 0;
    if (currentCreature) {
        additionalBonus = currentCreature.value / 100.0;
    }
    const result = getResult(resultDamage, damageData, additionalBonus);
    const creatureNames = getCreatureNames(resultDamage);
    let dropdownItems = [];
    for(let i = 0; i < creatureNames.length; i++){
        const creatureName = creatureNames[i];
        dropdownItems.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: creatureName,
            children: creatureName
        }, i, false, {
            fileName: "[project]/src/damage/DamageDetailsCard.js",
            lineNumber: 116,
            columnNumber: 28
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col d-flex justify-content-center mb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "main-display-adjustable shadow-outline-unselected",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "ps-3 p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '33%'
                                },
                                className: "d-flex justify-content-start center-text",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolStyle"])(damageData.type, damageData.kind)[0]
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageDetailsCard.js",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '34%'
                                },
                                className: "d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "default",
                                    size: "sm",
                                    onSelect: onDropdownSelect,
                                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: creature
                                        }, void 0, false, {
                                            fileName: "[project]/src/damage/DamageDetailsCard.js",
                                            lineNumber: 127,
                                            columnNumber: 116
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/damage/DamageDetailsCard.js",
                                        lineNumber: 127,
                                        columnNumber: 108
                                    }, void 0),
                                    children: dropdownItems
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/DamageDetailsCard.js",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageDetailsCard.js",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '33%'
                                },
                                className: "d-flex justify-content-end me-2 center-text",
                                children: numberEmoji
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageDetailsCard.js",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/damage/DamageDetailsCard.js",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/damage/DamageDetailsCard.js",
                    lineNumber: 121,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "pt-0 pb-0 ps-2 pe-2",
                    children: [
                        getRow("Base Damage:", result.base, "default", "purple"),
                        getRow("Bonus:", result.bonus, "default", "purple"),
                        getRow("Sneak:", result.sneak, "default", "purple", resultDamage.isSneak),
                        getRow("Total Bonus:", result.totalBonus, "default", "purple"),
                        getRow("Explosive:", result.explosive + "%", "default", "purple", showExplosive(damageData, resultDamage)),
                        getRow("Crit:", result.crit, "default", "purple", resultDamage.isCrit)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageDetailsCard.js",
                    lineNumber: 137,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Footer, {
                    className: "ps-2 pe-2 text-muted",
                    children: [
                        getRow("Total Damage:", result.total, "default", "red"),
                        getRow("Explosive:", result.totalExp, "default", "red", showExplosive(damageData, resultDamage)),
                        getRow("Explosive Crit:", result.totalExpCrit, "default", "red", showExplosive(damageData, resultDamage) && resultDamage.isCrit)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageDetailsCard.js",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/damage/DamageDetailsCard.js",
            lineNumber: 120,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/DamageDetailsCard.js",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}, "NVytoiTCbjGskJHrQU6lrTpIIOs=")), "NVytoiTCbjGskJHrQU6lrTpIIOs=");
_c1 = DamageDetailsCard;
const __TURBOPACK__default__export__ = DamageDetailsCard;
var _c, _c1;
__turbopack_refresh__.register(_c, "DamageDetailsCard$memo");
__turbopack_refresh__.register(_c1, "DamageDetailsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/AAView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
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
function resultBadges(style, left1, right1, left2, right2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "pb-2",
            direction: "horizontal",
            gap: 1,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '9rem', left1, right1),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '9rem', left2, right2)
            ]
        }, void 0, true, {
            fileName: "[project]/src/damage/AAView.js",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/AAView.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
;
const AAView = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function AAView({ resultDamage }) {
    if (!resultDamage.antiArmor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const antiArmor = resultDamage.antiArmor;
    let aab = antiArmor.b.toFixed(1) + "%";
    let aae = antiArmor.e.toFixed(1) + "%";
    let aaf = antiArmor.f.toFixed(1) + "%";
    let aac = antiArmor.c.toFixed(1) + "%";
    let aap = antiArmor.p.toFixed(1) + "%";
    let aar = antiArmor.r.toFixed(1) + "%";
    function getAATail(aa, aai) {
        let aav = (1 - (1 - aa / 100.0) * aai) * 100.0;
        return " (" + aav.toFixed(1) + "%)";
    }
    if (antiArmor.insect > 0) {
        let aai = 1 - antiArmor.insect / 100.0;
        aab += getAATail(antiArmor.b, aai);
        aae += getAATail(antiArmor.e, aai);
        aaf += getAATail(antiArmor.f, aai);
        aac += getAATail(antiArmor.c, aai);
        aap += getAATail(antiArmor.p, aai);
        aar += getAATail(antiArmor.r, aai);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "mt-1 mb-2",
                children: "🛡️ Anti Armor"
            }, void 0, false, {
                fileName: "[project]/src/damage/AAView.js",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            resultBadges("badge bg-light-cream-outline ms-1 me-1 mb-1", "💥", aab, "⚡", aae),
                            resultBadges("badge bg-light-cream-outline ms-1 me-1 mb-1", "🔥", aaf, "❄️", aac),
                            resultBadges("badge bg-light-cream-outline ms-1 me-1", "☢️", aar, "☣️", aap)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/damage/AAView.js",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/damage/AAView.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/AAView.js",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
});
_c1 = AAView;
const __TURBOPACK__default__export__ = AAView;
var _c, _c1;
__turbopack_refresh__.register(_c, "AAView$memo");
__turbopack_refresh__.register(_c1, "AAView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageDetailsCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AAView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/AAView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
;
;
;
;
;
;
function getDamageViews(resultDamage) {
    let damageViews = [];
    if (!resultDamage.damageDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    for(let i = 0; i < resultDamage.damageDetails.length; i++){
        damageViews.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            resultDamage: resultDamage,
            damageData: resultDamage.damageDetails[i]
        }, i, false, {
            fileName: "[project]/src/damage/DamageDetails.js",
            lineNumber: 16,
            columnNumber: 26
        }, this));
    }
    if (damageViews.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "mt-3 mb-2",
                children: "💢 Damage"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageDetails.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: damageViews
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageDetails.js",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
const DamageDetails = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function DamageDetails({ resultDamage }) {
    console.log("DamageDetails");
    if (!resultDamage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AAView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                resultDamage: resultDamage
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageDetails.js",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            getDamageViews(resultDamage)
        ]
    }, void 0, true);
});
_c1 = DamageDetails;
const __TURBOPACK__default__export__ = DamageDetails;
var _c, _c1;
__turbopack_refresh__.register(_c, "DamageDetails$memo");
__turbopack_refresh__.register(_c1, "DamageDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/weapon/Weapon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Weapon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Strings.js [app-client] (ecmascript)");
;
class Weapon {
    constructor(weaponSpecsAssembler){
        this.damages = weaponSpecsAssembler.getDamages();
        this.name = weaponSpecsAssembler.getWeaponName();
        this.defaultName = weaponSpecsAssembler.getDefaultWeaponName();
        this.critDamages = weaponSpecsAssembler.getCritDamages();
        this.shotSize = weaponSpecsAssembler.getShotSize();
        this.reloadTime = weaponSpecsAssembler.getReloadTime();
        this.fireRate = weaponSpecsAssembler.getFireRate();
        this.ammoCapacity = weaponSpecsAssembler.getAmmoCapacity();
        this.antiArmor = weaponSpecsAssembler.getAntiArmor();
        this.strengthBoost = weaponSpecsAssembler.getStrengthBoost();
        this.strength = weaponSpecsAssembler.getStrength();
        this.bonusMult = weaponSpecsAssembler.getBaseDamageMult();
        this.critBoost = weaponSpecsAssembler.getCritBoost();
        this.explosiveBonus = weaponSpecsAssembler.getExplosiveBonus();
        this.explosiveDamageTypeBonus = weaponSpecsAssembler.getExplosivePhysicalBonus();
        this.weaponType = weaponSpecsAssembler.getWeaponType();
        this.headShotFrequency = weaponSpecsAssembler.getHeadShotFrequency();
        this.critShotFrequency = weaponSpecsAssembler.getCritShotFrequency();
        this.sneakShotFrequency = weaponSpecsAssembler.getSneakShotFrequency();
        this.creatureDamageBonuses = weaponSpecsAssembler.getCreatureDamageBonuses();
        this.firstBloodBonus = weaponSpecsAssembler.getFirstBloodBonus();
        this.lastShotBonus = weaponSpecsAssembler.getLastShotBonus();
        this.cripple = weaponSpecsAssembler.getCripple();
        this.bash = weaponSpecsAssembler.getBash();
        this.powerAttack = weaponSpecsAssembler.getPowerAttack();
        this.chargeTime = weaponSpecsAssembler.getChargeTime();
        this.chargePenalty = weaponSpecsAssembler.getChargePenalty();
        this.sneak = weaponSpecsAssembler.getSneak();
        this.totalDamageBonus = weaponSpecsAssembler.getTotalDamageBonus();
        this.magazine = this.ammoCapacity;
        this.enableCrit = true;
        this.enableHeadShot = true;
        this.resultDamage = {
            bulletCount: this.shotSize,
            expDTypeBonus: this.explosiveDamageTypeBonus,
            lastShotBonus: 0,
            firstBloodBonus: this.firstBloodBonus,
            creatureDamageBonuses: this.creatureDamageBonuses,
            headShot: false,
            critShot: false,
            sneakShot: false,
            weaponType: this.weaponType,
            deltaTime: 0,
            powerAttack: this.powerAttack,
            bash: this.bash,
            cripple: 0,
            bonusMult: this.bonusMult,
            expBonus: this.explosiveBonus,
            sneak: this.sneak,
            totalDamageBonus: this.totalDamageBonus.value,
            critBoost: this.critBoost,
            tenderizer: this.totalDamageBonus.tenderizer,
            executionerBonus: this.totalDamageBonus.executioner,
            damages: [],
            critDamages: this.critDamages
        };
        this.reloadsCount = 0;
        this.reloadTimeCounting = true;
        this.alwaysMaxHit = false;
        this.reloadsTotalTime = 0;
        this.hitCount = 0;
        this.hit();
    }
    setEnableCrit(flag) {
        this.enableCrit = flag;
    }
    setEnableHeadShot(flag) {
        this.enableHeadShot = flag;
    }
    getName() {
        return this.name;
    }
    getDefaultName() {
        return this.defaultName;
    }
    getType() {
        return this.weaponType;
    }
    setLastShotBonus(value) {
        this.lastShotBonus = value;
    }
    getHeadShotFrequency() {
        return this.headShotFrequency;
    }
    setFirstBloodBonus(value) {
        this.firstBloodBonus = value;
        this.resultDamage.firstBloodBonus = value;
    }
    getChargeTime() {
        return this.chargeTime;
    }
    setChargeTime(value) {
        this.chargeTime = value;
    }
    getDamages() {
        return this.damages;
    }
    getCreatureBonus() {
        return this.creatureDamageBonuses;
    }
    getExplosiveDamageTypeBonus() {
        return this.explosiveDamageTypeBonus;
    }
    getBonusMult() {
        return this.bonusMult;
    }
    getTotalBonus() {
        return this.totalDamageBonus;
    }
    setFireRate(fireRate) {
        this.fireRate = fireRate;
    }
    setAlwaysMaxHit(flag) {
        this.alwaysMaxHit = flag;
    }
    disableReloadTimeCounting() {
        this.reloadTimeCounting = false;
    }
    getMaxHit() {
        return this.hit();
    }
    getShotSize() {
        return this.shotSize;
    }
    getStrength() {
        return this.strength;
    }
    getStrengthBonus() {
        return this.strengthBoost;
    }
    getCritBonus() {
        return parseInt(this.critBoost * 100.0);
    }
    getSneakBonus() {
        return parseInt(this.sneak * 100.0);
    }
    getExplosiveBonus() {
        return this.explosiveBonus * 100.0;
    }
    getFireRate() {
        return this.fireRate;
    }
    getAmmoCapacity() {
        return this.ammoCapacity;
    }
    getReloadTime() {
        return this.reloadTime;
    }
    getAntiArmor() {
        return this.antiArmor;
    }
    // Just to display total value as in pip boy (no time)
    getDisplayedDamage() {
        let result = 0;
        let hitCount = this.shotSize === 0 ? 1 : this.shotSize;
        for(let i = 0; i < this.damages.length; i++){
            const damage = this.damages[i];
            if (!damage.isUsed || damage.time > 0) {
                continue;
            }
            let curDamage = damage.damage * this.bonusMult[damage.type];
            let expDamage = 0;
            if (damage.type === 'dtPhysical' && damage.kind === 'physical') {
                expDamage = curDamage * this.explosiveBonus;
            }
            curDamage /= hitCount;
            curDamage += expDamage;
            result += curDamage;
        }
        return result;
    }
    isRanged() {
        return !(this.weaponType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Melee || this.weaponType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Unarmed);
    }
    getReloadsCount() {
        return this.reloadsCount;
    }
    getReloadsTime() {
        return this.reloadsTotalTime;
    }
    isSneak() {
        return this.sneakShotFrequency !== 0;
    }
    getCritShotFrequency() {
        return this.critShotFrequency;
    }
    isCrit() {
        return this.critShotFrequency !== 0 && this.enableCrit;
    }
    // Result array is reused every hit, editing is prohibited as it contains ref data
    hit() {
        this.resultDamage.damages.length = 0;
        let dTime = 10 / this.fireRate;
        // Charge
        dTime += this.chargeTime;
        // Reload
        if (this.magazine === 0) {
            this.magazine = this.ammoCapacity;
            this.reloadsCount += 1;
            this.reloadsTotalTime += this.reloadTime;
            if (this.reloadTimeCounting) {
                dTime += this.reloadTime;
            }
        }
        // Last shot
        if (this.magazine === 1 && this.chanceTriggered(25)) {
            this.resultDamage.lastShotBonus = this.lastShotBonus;
        } else {
            this.resultDamage.lastShotBonus = 0;
        }
        this.magazine -= 1;
        this.hitCount += 1;
        this.resultDamage.deltaTime = dTime;
        // Head shot
        if (this.headShotFrequency === 0 || !this.enableHeadShot) {
            this.resultDamage.headShot = false;
        } else {
            this.resultDamage.headShot = this.chanceTriggered(this.headShotFrequency);
        }
        // Crit shot
        if (this.critShotFrequency === 0 || !this.enableCrit) {
            this.resultDamage.critShot = false;
        } else {
            this.resultDamage.critShot = this.hitIfFrequency(this.critShotFrequency);
        }
        // Sneak
        if (this.sneakShotFrequency === 0) {
            this.resultDamage.sneakShot = false;
        } else {
            this.resultDamage.sneakShot = this.hitIfFrequency(this.sneakShotFrequency);
        }
        // Cripple
        if (this.chanceTriggered(this.cripple.chance) || this.resultDamage.headShot) {
            this.resultDamage.cripple = this.cripple.value;
        } else {
            this.resultDamage.cripple = 0;
        }
        // Damages
        for(let i = 0; i < this.damages.length; i++){
            const damage = this.damages[i];
            if (damage.damage > 0 && damage.isUsed && this.chanceTriggered(damage.finalAccuracy) && this.chanceTriggered(damage.chance)) {
                damage.damage = damage.defDamage * this.chargePenalty;
                this.resultDamage.damages.push(damage);
            }
        }
        return this.resultDamage;
    }
    hitIfFrequency(frequency) {
        if (this.alwaysMaxHit) {
            return true;
        }
        return this.hitCount % frequency === 0;
    }
    // between 0 - 100
    chanceTriggered(chance) {
        if (this.alwaysMaxHit) {
            return true;
        }
        return Math.random() < chance / 100.0;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/weapon/WeaponSpecsAssembler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WeaponSpecsAssembler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/boostStuff/StuffBoostsCollector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyAdjuster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AccuracyAdjuster.js [app-client] (ecmascript)");
;
;
;
class WeaponSpecsAssembler {
    constructor(wSpec, perks, extraDamageSettings, additionalDamages, stuffBoost, playerStats){
        this.wSpec = wSpec;
        this.perks = perks;
        this.extraDamageSettings = extraDamageSettings;
        this.additionalDamages = additionalDamages;
        this.stuffBoost = stuffBoost;
        this.playerStats = playerStats;
    }
    getDamages() {
        let result = [];
        for(let i = 0; i < this.wSpec.damages.length; i++){
            const damage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDamageItemCopy"])(this.wSpec.damages[i]);
            damage.defDamage = damage.damage;
            result.push(damage);
        }
        result = result.concat(this.getDamageFromStuff());
        this.setFinalAccuracy(result);
        return result;
    }
    getCritBoost() {
        let crit = this.perks.better_criticals.displayed_value + 100 + this.wSpec.crit + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Crit");
        return crit / 100.0;
    }
    getCritDamages() {
        let result = [];
        for(let i = 0; i < this.wSpec.critDamages.length; i++){
            result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDamageItemCopy"])(this.wSpec.critDamages[i]));
        }
        return result;
    }
    collectTags() {
        let tags = [
            ...this.wSpec.tags
        ];
        if (this.wSpec.ammoType.codeName !== "") {
            tags.push(this.wSpec.ammoType.codeName);
        }
        return tags;
    }
    getStrengthBoost() {
        return this.wSpec.strengthBoost * this.getStrength();
    }
    getStrength() {
        let strength = this.wSpec.strPoints + this.playerStats.strength.value;
        strength += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Strength");
        if (strength < 0) {
            strength = 0;
        }
        return strength;
    }
    collectFromLegendary(property) {
        let result = 0;
        for(let i = 0; i < this.wSpec.legendary.length; i++){
            const leg = this.wSpec.legendary[i];
            if (leg[2] === property) {
                result += leg[1];
            }
        }
        return result;
    }
    getExplosiveBonus() {
        return (this.wSpec.exp + this.wSpec.exp * this.perks.demolition_expert.displayed_value / 100.0) / 100.0;
    }
    getCreatureDamageBonuses() {
        let result = new Map();
        // User
        if (this.additionalDamages.damageToCreature.is_used) {
            result.set("any", {
                name: "any",
                value: this.additionalDamages.damageToCreature.value
            });
        }
        // Perks
        if (this.perks.glow_sight.displayed_value > 0) {
            result.set("glowing", {
                name: "glowing",
                value: this.perks.glow_sight.displayed_value
            });
        }
        // Weapon Effects
        for(let i = 0; i < this.wSpec.creature.length; i++){
            const creature = this.wSpec.creature[i];
            const name = creature.name.toLowerCase();
            const item = result.get(name);
            if (item) {
                item.value += creature.value;
            } else {
                result.set(name, {
                    name: name,
                    value: creature.value
                });
            }
        }
        // Consumables
        function collector(item) {
            let types = [];
            if (item.name) {
                types = item.name.split(",");
            } else {
                types = item.type.split(",");
            }
            for(let i = 0; i < types.length; i++){
                const type = types[i];
                const exist = result.get(type);
                if (exist) {
                    exist.value += item.value;
                } else {
                    result.set(type, {
                        name: type,
                        value: item.value
                    });
                }
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collectAllItems(this.stuffBoost.creature, "BDB", collector);
        return result;
    }
    getWeaponType() {
        return this.wSpec.type;
    }
    getHeadShotFrequency() {
        if (this.extraDamageSettings.useHead) {
            return this.extraDamageSettings.headFreq;
        }
        return 0;
    }
    getCritShotFrequency() {
        if (this.extraDamageSettings.useCrit) {
            return this.extraDamageSettings.critFreq;
        }
        return 0;
    }
    getSneakShotFrequency() {
        if (this.extraDamageSettings.useSneak) {
            return 1;
        }
        return 0;
    }
    getFirstBloodBonus() {
        if (this.wSpec.legendary[0][0] === '004f6aa5') {
            return 1;
        }
        return 0;
    }
    getLastShotBonus() {
        if (this.wSpec.legendary[1][0] === '006069ec') {
            return 1;
        }
        return 0;
    }
    getTotalDamageBonus() {
        let tenderizer = this.perks.tenderizer.displayed_value > 0 ? 1 + this.perks.tenderizer.displayed_value / 100.0 : 1;
        let result = 1.0;
        result *= this.perks.toft.displayed_value > 0 ? 1 + this.perks.toft.displayed_value / 100.0 : 1.0;
        // Seems that follow through works as TOFT only in sneak mode
        if (this.wSpec.type === "Heavy" || this.wSpec.type === "Thrown") {
            result *= this.perks.follow_through.displayed_value > 0 ? 1 + this.perks.follow_through.displayed_value / 100.0 : 1.0;
        }
        result *= this.additionalDamages.tdb.is_used ? 1 + this.additionalDamages.tdb.value / 100.0 : 1.0;
        let exec = 1 + this.wSpec.totalD / 100.0;
        return {
            value: result,
            tenderizer: tenderizer,
            executioner: exec
        };
    }
    getChargeTime() {
        return this.wSpec.chargeTime;
    }
    getChargePenalty() {
        if (this.wSpec.maxChargeTime === 0) {
            return 1;
        }
        let part = this.wSpec.chargeTime / this.wSpec.maxChargeTime;
        part = part > 1 ? 1 : part;
        part = part * 0.5;
        return 0.5 + part;
    }
    getCripple() {
        return {
            value: this.wSpec.cripple / 100.0,
            chance: this.wSpec.crippleChance
        };
    }
    getBash() {
        return this.wSpec.bash / 100.0;
    }
    getPowerAttack() {
        return this.wSpec.powerAttack / 100.0;
    }
    getWeaponName() {
        return this.wSpec.weaponName;
    }
    getDefaultWeaponName() {
        return this.wSpec.defaultName;
    }
    getSneak() {
        const oper = this.wSpec.type === "Melee" || this.wSpec.type === "Unarmed" ? 0 : this.perks.covert_operative.displayed_value;
        let sneak = oper > 0 ? oper - 1.0 : 1.0;
        let sandman = this.perks.mister_sandman.displayed_value / 100.0;
        sandman = this.wSpec.tags.includes("HasSilencer") ? sandman : 0;
        const ninja = this.wSpec.type === "Melee" || this.wSpec.type === "Unarmed" ? this.perks.ninja.displayed_value / 100.0 : 0.0;
        const weaponSneak = this.wSpec.sneak / 100.0;
        const stuffSneak = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Sneak") / 100.0;
        return sneak + sandman + ninja + weaponSneak + stuffSneak;
    }
    // This bonus increase physical explosive damage (bobble head explosive), not an explosive part from total damage (Legendary explosive)
    getExplosivePhysicalBonus() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "EXP") / 100.0;
    }
    getBaseDamageMult() {
        let result = 100 + this.getBonusMultFromPerks() + this.getStrengthBoost() + this.wSpec.bonus + this.collectFromLegendary("BDB");
        result += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BDB");
        let bResult = result + (this.additionalDamages.ballisticBDB.is_used ? this.additionalDamages.ballisticBDB.value : 0.0);
        let eResult = result + (this.additionalDamages.energyBDB.is_used ? this.additionalDamages.energyBDB.value : 0.0);
        let fResult = result + (this.additionalDamages.fireBDB.is_used ? this.additionalDamages.fireBDB.value : 0.0);
        let pResult = result + (this.additionalDamages.poisonBDB.is_used ? this.additionalDamages.poisonBDB.value : 0.0);
        let cResult = result + (this.additionalDamages.coldBDB.is_used ? this.additionalDamages.coldBDB.value : 0.0);
        let rResult = result + (this.additionalDamages.radBDB.is_used ? this.additionalDamages.radBDB.value : 0.0);
        bResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BBDB");
        eResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "EBDB");
        fResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "FBDB");
        pResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "PBDB");
        cResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "CBDB");
        rResult += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "RBDB");
        return {
            dtPhysical: bResult / 100.0,
            dtEnergy: eResult / 100.0,
            dtFire: fResult / 100.0,
            dtPoison: pResult / 100.0,
            dtCryo: cResult / 100.0,
            dtRadiationExposure: rResult / 100.0
        };
    }
    getDamageFromStuff() {
        const damages = [];
        function stacker(value) {
            const values = value.split(" - ");
            const damageValue = parseFloat(values[0]);
            const time = parseFloat(values[1].slice(0, values[1].length - 1));
            const damage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBleedDamage"])(damageValue, time);
            damage.defDamage = damageValue;
            damages.push(damage);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Bleed", stacker);
        return damages;
    }
    getBonusMultFromPerks() {
        let result = 0.0;
        result += this.perks.nerd_rage.displayed_value;
        result += this.perks.bloody_mess.displayed_value;
        result += this.perks.adrenaline.displayed_value;
        result += this.perks.gun_fu.displayed_value;
        if (this.perks.gladiator.displayed_value > 0 && this.wSpec.type === "Melee" && this.wSpec.hand === 1) {
            result += this.perks.gladiator.displayed_value;
        }
        if (this.perks.heavy_gunner.displayed_value > 0 && this.wSpec.type === "Heavy" && !this.wSpec.tags.includes("Explosive")) {
            result += this.perks.heavy_gunner.displayed_value;
        }
        if (this.perks.shotgunner.displayed_value > 0 && (this.wSpec.type === "Shotgun" || this.wSpec.tags.includes("Shotgun"))) {
            result += this.perks.shotgunner.displayed_value;
        }
        if (this.perks.slugger.displayed_value > 0 && this.wSpec.type === "Melee" && this.wSpec.hand === 2) {
            result += this.perks.slugger.displayed_value;
        }
        if (this.perks.iron_fist.displayed_value > 0 && this.wSpec.type === "Unarmed") {
            result += this.perks.iron_fist.displayed_value;
        }
        if (this.perks.archer.displayed_value > 0 && this.wSpec.type === "Bow") {
            result += this.perks.archer.displayed_value;
        }
        if (this.perks.commando.displayed_value > 0 && this.wSpec.type === "Rifle" && this.wSpec.is_auto === 1) {
            result += this.perks.commando.displayed_value;
        }
        if (this.perks.rifleman.displayed_value > 0 && this.wSpec.type === "Rifle" && this.wSpec.is_auto === 0) {
            result += this.perks.rifleman.displayed_value;
        }
        if (this.perks.guerrilla.displayed_value > 0 && this.wSpec.type === "Pistol" && this.wSpec.is_auto === 1) {
            result += this.perks.guerrilla.displayed_value;
        }
        if (this.perks.gunslinger.displayed_value > 0 && this.wSpec.type === "Pistol" && this.wSpec.is_auto === 0) {
            result += this.perks.gunslinger.displayed_value;
        }
        if (this.perks.science.displayed_value > 0 && this.wSpec.type !== "Heavy" && this.wSpec.tags.includes("Energy")) {
            result += this.perks.science.displayed_value;
        }
        return result;
    }
    getAntiArmor() {
        let aa = 1 - this.wSpec.aa / 100.0;
        let incisor = 1.0;
        let weaponType = this.wSpec.type;
        if (weaponType === "All" || weaponType === "Melee" || weaponType === "Unarmed") {
            incisor = 1 - this.perks.incisor.displayed_value / 100.0;
        }
        let bow_before_me = 1.0;
        if (weaponType === "All" || weaponType === "Bow") {
            bow_before_me = 1 - this.perks.bow_before_me.displayed_value / 100.0;
        }
        let tank_killer = 1.0;
        if (weaponType === "All" || weaponType === "Pistol" || weaponType === "Rifle") {
            tank_killer = 1 - this.perks.tank_killer.displayed_value / 100.0;
        }
        let stabilized = 1.0;
        if (weaponType === "All" || weaponType === "Heavy") {
            stabilized = 1 - this.perks.stabilized.displayed_value / 100.0;
        }
        let bMult = 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BAA", (value)=>bMult *= 1 - value / 100.0);
        const result1 = 100 * (1 - bMult * incisor * bow_before_me * tank_killer * stabilized * aa);
        const result2 = 100 * (1 - incisor * bow_before_me * tank_killer * stabilized * aa);
        const resultAll = {
            b: result1,
            e: result2,
            f: result2,
            p: result2,
            c: result2,
            r: result2,
            insect: this.perks.exterminator.displayed_value
        };
        return resultAll;
    }
    getAmmoCapacity() {
        let ammoCapacity = this.wSpec.ammoCapacity;
        let tags = this.collectTags(this.wSpec);
        ammoCapacity += ammoCapacity * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, tags, this.stuffBoost.weapon, "Ammo") / 100.0);
        if (this.perks.power_user.is_used) {
            const mult = this.perks.power_user.displayed_value / 100.0 - 1;
            if (this.wSpec.ammoType.codeName === "FusionCore" || tags.includes("FusionCore")) {
                ammoCapacity += this.wSpec.ammoCapacity * mult;
            }
        }
        return parseInt(ammoCapacity);
    }
    getShotSize() {
        return this.wSpec.shot_size;
    }
    getFireRate() {
        let fireRate = this.wSpec.fireRate;
        let weaponSpeed = this.wSpec.speed;
        if ((this.wSpec.type === "Melee" || this.wSpec.type === "Unarmed") && this.wSpec.is_auto === 0) {
            weaponSpeed += this.perks.martial_artist.displayed_value / 100.0;
        }
        fireRate = fireRate * weaponSpeed;
        if (fireRate < 0.1) {
            fireRate = 0.1;
        }
        return fireRate;
    }
    getReloadTime() {
        let reloadSpeed = this.wSpec.reloadSpeed;
        if (this.wSpec.type === "Heavy") {
            reloadSpeed += this.perks.lock_and_load.displayed_value / 100.0;
        } else if (this.wSpec.type === "Melee" && this.wSpec.is_auto === 0) {
            reloadSpeed += this.perks.martial_artist.displayed_value / 100.0;
        } else if (this.wSpec.type === "Shotgun") {
            reloadSpeed += this.perks.scattershot.displayed_value / 100.0;
        } else if (this.wSpec.type === "Rifle" && this.wSpec.is_auto) {
            reloadSpeed += this.perks.ground_pounder.displayed_value / 100.0;
        }
        reloadSpeed += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boostStuff$2f$StuffBoostsCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Reload") / 100.0;
        return this.wSpec.defReloadTime / reloadSpeed;
    }
    // TODO: Intended to adjust accuracy by consumables and perks (accuracy from legendary and mods is adjusted in wSPec or by user)
    setFinalAccuracy(damages) {
        const consumables = null; // StuffBoostCollector.collect()
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyAdjuster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adjustByLegendary(damages, this.wSpec.legendary);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyAdjuster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adjustByPerks(damages, this.perks);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AccuracyAdjuster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adjustByConsumables(damages, consumables);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/weapon/WeaponFactory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WeaponFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$Weapon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/Weapon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponSpecsAssembler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponSpecsAssembler.js [app-client] (ecmascript)");
;
;
class WeaponFactory {
    DEFAULT = 0;
    NO_CRIT = 1;
    constructor(wSpec, perks, extraDamage, additionalDamages, stuffBoost, playerStats){
        this.wSpec = wSpec;
        this.perks = perks;
        this.extraDamage = extraDamage;
        this.additionalDamages = additionalDamages;
        this.stuffBoost = stuffBoost;
        this.playerStats = playerStats;
    }
    build(type) {
        switch(type){
            case 0:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$Weapon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponSpecsAssembler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.wSpec, this.perks, this.extraDamage, this.additionalDamages, this.stuffBoost, this.playerStats));
            case 1:
                const extraDamage = {
                    ...this.extraDamage
                };
                extraDamage.useCrit = false;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$Weapon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponSpecsAssembler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.wSpec, this.perks, extraDamage, this.additionalDamages, this.stuffBoost, this.playerStats));
            default:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$Weapon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponSpecsAssembler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.wSpec, this.perks, this.extraDamage, this.additionalDamages, this.stuffBoost, this.playerStats));
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageEmulator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageEmulator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesProduction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreaturesProduction.js [app-client] (ecmascript)");
;
class DamageEmulator {
    constructor(weapon, creatureInfos){
        this.weapon = weapon;
        this.creatureInfos = creatureInfos;
    }
    needToStopByTime(timeLimit, creatures) {
        if (!timeLimit) {
            return false;
        }
        const name = timeLimit[0];
        const time = timeLimit[1];
        if (name === "average") {
            let totalTime = 0;
            for(let i = 0; i < creatures.length; i++){
                const creature = creatures[i];
                totalTime += creature.totalTime();
            }
            totalTime = Math.floor(totalTime / 4);
            return totalTime > time;
        }
        for(let i = 0; i < creatures.length; i++){
            const creature = creatures[i];
            if (creature.name === name) {
                return creature.totalTime() > time;
            }
        }
        return false;
    }
    // timeLimit = ["Average", time], ["creaturename", time]
    emulate(steps = 10000, timeLimit = null) {
        const creatures = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesProduction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].produce(this.creatureInfos, this.weapon.getAntiArmor());
        let step = 0;
        for(; step < steps; step++){
            let deadCount = 0;
            const hit = this.weapon.hit();
            for(let i = 0; i < creatures.length; i++){
                const creature = creatures[i];
                if (creature.takeDamage(hit)) {
                    creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
                    deadCount += 1;
                }
            }
            if (deadCount === creatures.length || this.needToStopByTime(timeLimit, creatures)) {
                break;
            }
        }
        // Check death and form a report
        const resultArmor = new Map();
        for(let i = 0; i < creatures.length; i++){
            const creature = creatures[i];
            if (!creature.isDead()) {
                creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
            }
            resultArmor.set(creature.getName(), creature.getArmor());
        }
        return {
            weaponName: this.weapon.getName(),
            weaponType: this.weapon.getType(),
            defaultWeaponName: this.weapon.getDefaultName(),
            damageDetails: this.weapon.getDamages(),
            expDTypeBonus: this.weapon.getExplosiveDamageTypeBonus(),
            bonusMult: this.weapon.getBonusMult(),
            totalBonus: this.weapon.getTotalBonus(),
            tDamage: this.weapon.getDisplayedDamage(),
            antiArmor: this.weapon.getAntiArmor(),
            displayedCrit: this.weapon.getCritBonus(),
            displayedSneak: this.weapon.getSneakBonus(),
            isCrit: this.weapon.isCrit(),
            isSneak: this.weapon.isSneak(),
            creatureBonus: this.weapon.getCreatureBonus(),
            strengthBonus: this.weapon.getStrengthBonus(),
            explosive: this.weapon.getExplosiveBonus(),
            shotSize: this.weapon.getShotSize(),
            reloadTime: this.weapon.getReloadTime(),
            fireRate: this.weapon.getFireRate(),
            ammoCapacity: this.weapon.getAmmoCapacity(),
            strength: this.weapon.getStrength(),
            resultArmor: resultArmor
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/WRow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
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
function column2(wSpec, onChange1, onChange2, icon, name, id1, id2, max1, max2, message) {
    const value1 = wSpec[id1];
    const value2 = wSpec[id2];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1 flex-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningPopover"], {
                    message: message,
                    header: name,
                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                        color: "red",
                        style: {
                            width: '2.58rem',
                            backgroundColor: '#ff5795',
                            cursor: 'pointer'
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/damage/WRow.js",
                        lineNumber: 19,
                        columnNumber: 74
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    style: {
                        width: '6rem'
                    },
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    style: {
                        minWidth: '4rem'
                    },
                    type: "number",
                    min: "0",
                    value: value1,
                    max: max1,
                    maxLength: "5",
                    onChange: onChange1,
                    id: id1
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 21,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    style: {
                        width: '2rem'
                    },
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    style: {
                        minWidth: '4rem'
                    },
                    type: "number",
                    min: "0",
                    value: value2,
                    max: max2,
                    maxLength: "5",
                    onChange: onChange2,
                    id: id2
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/damage/WRow.js",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/WRow.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
function column(wSpec, onChange, icon, name, id, max) {
    let value = 0;
    if (id.includes("creature")) {
        const index = parseInt(id.split("_")[1]);
        value = wSpec["creature"][index].value;
    } else {
        value = wSpec[id];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1 flex-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    style: {
                        width: '2.58rem'
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    style: {
                        width: '10rem'
                    },
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                    style: {
                        minWidth: '4rem'
                    },
                    type: "number",
                    min: "0",
                    value: value,
                    max: max,
                    maxLength: "5",
                    onChange: onChange,
                    id: id
                }, void 0, false, {
                    fileName: "[project]/src/damage/WRow.js",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/damage/WRow.js",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, id, false, {
        fileName: "[project]/src/damage/WRow.js",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
const WRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function WRow({ wSpec, setWSpec }) {
    function onChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        let creatureIndex = -1;
        if (e.target.id.includes("creature")) {
            creatureIndex = parseInt(e.target.id.split("_")[1]);
        } else if ((e.target.id === 'shot_size' || e.target.id === 'fireRate' || e.target.id === 'ammoCapacity') && e.target.value < 1) {
            e.target.value = 1;
        } else if (e.target.id === 'accuracy' && e.target.value < 10) {
            e.target.value = 10;
        } else if ((e.target.id === 'speed' || e.target.id === 'reloadSpeed') && e.target.value < 0.1) {
            e.target.value = 0.1;
        }
        const val = parseFloat(e.target.value);
        if (creatureIndex > -1) {
            wSpec["creature"][creatureIndex].value = val;
        } else {
            wSpec[e.target.id] = val;
        }
        setWSpec({
            ...wSpec
        });
    }
    // const shotSize = (<>{bullet("1.1rem")} <div style={{marginLeft: '0.35rem'}}>Shot Size</div></>);
    // const fRate = (<>{fireRate("1.1rem")} <div style={{marginLeft: '0.45rem'}}>Fire Rate</div></>);
    // const iAmmo = (<>{ammo("1.1rem")} <div style={{marginLeft: '0.42rem'}}>Ammo Capacity</div></>);
    let creatureViews = [];
    for(let i = 0; i < wSpec.creature.length; i++){
        const creature = wSpec.creature[i];
        creatureViews.push(column(wSpec, onChange, "🐵", creature.name, "creature_" + i, 500));
    }
    const isRanged = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isWeaponRangedByType(wSpec.type);
    const fireRateIcon = isRanged ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fireRate"])("1.1rem") : '👊🏼';
    const defFireRateLabel = "Def " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getFireRate(wSpec.type);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            column(wSpec, onChange, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bullet"])("1.1rem"), "Shot Size", "shot_size", 16),
            column(wSpec, onChange, '⌛', "Def Reload Time", "defReloadTime", 60),
            column(wSpec, onChange, fireRateIcon, defFireRateLabel, "fireRate", 199),
            column(wSpec, onChange, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ammo"])("1.1rem"), "Ammo Capacity", "ammoCapacity", 9999),
            column(wSpec, onChange, "🛡️", "Anti Armor", "aa", 40),
            column(wSpec, onChange, "💪", "Strength Boost", "strengthBoost", 25),
            column(wSpec, onChange, "☠️", "Crit", "crit", 200),
            column(wSpec, onChange, "🐍", "Sneak", "sneak", 100),
            column(wSpec, onChange, "🌪️", "Bash", "bash", 200),
            column(wSpec, onChange, "💣", "Explosive", "exp", 100),
            creatureViews,
            column(wSpec, onChange, "🚀", "Damage Bonus", "bonus", 500),
            column(wSpec, onChange, "☄️", "Weapon Speed", "speed", 5),
            column(wSpec, onChange, "💨", "Reload Speed", "reloadSpeed", 5),
            column(wSpec, onChange, "🪓", "Power Attack", "powerAttack", 200),
            column2(wSpec, onChange, onChange, "🦵", "Cripple", "cripple", "crippleChance", 100, 100, "% Damage Boost / Chance (100% if headshot)"),
            column2(wSpec, onChange, onChange, "🔋", "Charge", "chargeTime", "maxChargeTime", 5, 5, "Charge Time / Max Charge Time")
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/WRow.js",
        lineNumber: 84,
        columnNumber: 9
    }, this);
});
_c1 = WRow;
const __TURBOPACK__default__export__ = WRow;
var _c, _c1;
__turbopack_refresh__.register(_c, "WRow$memo");
__turbopack_refresh__.register(_c1, "WRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/LegSlider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const allMarks = {
    marks3: {
        0: '0',
        1: '1',
        2: '2',
        3: '3'
    },
    marks25: {
        0: '0%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%'
    },
    marks40: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%'
    },
    marks50: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%'
    },
    marks95: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        95: '95%'
    },
    marks100: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        100: '100%'
    },
    marks20: {
        0: '0%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%'
    },
    marks24: {
        0: '0%',
        6: '6%',
        12: '12%',
        18: '18%',
        24: '24%'
    },
    marks300: {
        0: '0%',
        50: '50%',
        100: '100%',
        150: '150%',
        200: '200%',
        250: '250%',
        300: '300%'
    },
    marks15: {
        0: '0%',
        3: '3%',
        6: '6%',
        9: '9%',
        12: '12%',
        15: '15%'
    }
};
function LegSlider({ legendaryInfo, marksName, wSpec, setWSpec, disabled = false }) {
    _s();
    const marks = allMarks[marksName];
    const wSpecLeg = wSpec.legendary[legendaryInfo.star - 1];
    const [redraw, setRedraw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let value = legendaryInfo.max;
    // Use adjustable value instead of default max
    if (wSpecLeg[2] && wSpecLeg[2] !== "") {
        value = wSpecLeg[1];
    }
    function slideChanged(e) {
        wSpecLeg[1] = e;
        setRedraw(!redraw);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentLegendaryIds"])(wSpec);
    }
    function slideFinished(e) {
        setWSpec({
            ...wSpec
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-3 mb-2 pt-2 pb-2 ps-3 pe-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                    disabled: !legendaryInfo.adjustable,
                    open: true,
                    onAfterChange: slideFinished,
                    onChange: slideChanged,
                    marks: marks,
                    min: legendaryInfo.min,
                    max: legendaryInfo.max,
                    step: legendaryInfo.step,
                    value: value
                }, void 0, false, {
                    fileName: "[project]/src/damage/LegSlider.js",
                    lineNumber: 124,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/LegSlider.js",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/damage/LegSlider.js",
            lineNumber: 122,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/LegSlider.js",
        lineNumber: 121,
        columnNumber: 9
    }, this);
}
_s(LegSlider, "mUedn90/dq1lhk6VGXlNPRmjIqs=");
_c = LegSlider;
const __TURBOPACK__default__export__ = LegSlider;
var _c;
__turbopack_refresh__.register(_c, "LegSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/LegendarySelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegendarySelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/LegSlider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegendaryProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModPropsPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/ModPropsPopover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponPopoverOverlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-client] (ecmascript) <export default as Collapse>");
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
const legendaryItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendaryByStar"])();
const modParser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModParser"]();
function getQuestionMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-2 pe-2 mb-auto mt-auto",
        bg: "danger",
        style: {
            cursor: 'pointer'
        },
        pill: true,
        children: "?"
    }, void 0, false, {
        fileName: "[project]/src/damage/LegendarySelector.js",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function updateLegendary(wSpec, setWSpec, health) {
    for(let i = 0; i < wSpec.legendary.length; i++){
        const legendary = wSpec.legendary[i];
        modParser.applyLegendaryModToWSpec(legendary[0], wSpec, i, health, true, true);
    }
    setWSpec({
        ...wSpec
    });
}
// health, important if a value of a legendary effect depends on health
function getLegendaryDropdown(legendaryInfo, wSpec, setWSpec, health, index) {
    function onSelectCustom(e) {
        modParser.applyLegendaryModToWSpec(wSpec.legendary[index][0], wSpec, index, health, false, false);
        modParser.applyLegendaryModToWSpec(e, wSpec, index, health, false, true);
        wSpec.legendary[index][0] = e;
        setWSpec({
            ...wSpec
        });
    }
    let result = [];
    const legs = legendaryItems[index];
    for(let i = 0; i < legs.length; i++){
        const legName = legs[i].name;
        const legId = legs[i].id;
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: legId,
            children: legName
        }, i, false, {
            fileName: "[project]/src/damage/LegendarySelector.js",
            lineNumber: 49,
            columnNumber: 21
        }, this));
    }
    const title = legendaryInfo ? legendaryInfo.name : "Legendary";
    const mod = legendaryInfo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().get(legendaryInfo.id) : null;
    function getQM(mod) {
        if (mod) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeaponPopoverOverlay"], {
                    popoverHeader: mod.name,
                    popoverContent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$ModPropsPopover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popoverContent"])(mod),
                    itemToOverly: getQuestionMark()
                }, void 0, false, {
                    fileName: "[project]/src/damage/LegendarySelector.js",
                    lineNumber: 57,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/LegendarySelector.js",
                lineNumber: 56,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "warning",
                    size: "sm",
                    onSelect: onSelectCustom,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/damage/LegendarySelector.js",
                        lineNumber: 66,
                        columnNumber: 94
                    }, void 0),
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/damage/LegendarySelector.js",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/LegendarySelector.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            getQM(mod)
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/LegendarySelector.js",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
function getEffectTag(effect) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 d-flex justify-content-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                bordered: false,
                color: "indigo",
                children: effect
            }, void 0, false, {
                fileName: "[project]/src/damage/LegendarySelector.js",
                lineNumber: 79,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/damage/LegendarySelector.js",
            lineNumber: 78,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/LegendarySelector.js",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
function getLegendaryAdjust(legendaryInfo, wSpec, setWSpec) {
    if (legendaryInfo && legendaryInfo.type !== "Not affect" && legendaryInfo.type !== "Not affect (not tested)") {
        const marksName = "marks" + legendaryInfo.max;
        const effect = legendaryInfo.type;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    legendaryInfo: legendaryInfo,
                    marksName: marksName,
                    wSpec: wSpec,
                    setWSpec: setWSpec
                }, void 0, false, {
                    fileName: "[project]/src/damage/LegendarySelector.js",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                getEffectTag(effect)
            ]
        }, void 0, true);
    } else if (legendaryInfo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: getEffectTag(legendaryInfo.type)
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getLegendaryDetails(legendaryInfo) {
    if (legendaryInfo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 m-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: legendaryInfo.description
            }, void 0, false, {
                fileName: "[project]/src/damage/LegendarySelector.js",
                lineNumber: 104,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/damage/LegendarySelector.js",
            lineNumber: 104,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function legBody(legendaryInfo, wSpec, setWSpec, health, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            getLegendaryDropdown(legendaryInfo, wSpec, setWSpec, health, index),
            getLegendaryDetails(legendaryInfo),
            getLegendaryAdjust(legendaryInfo, wSpec, setWSpec)
        ]
    }, void 0, true);
}
function getCollapse(header, legendaryInfo, wSpec, setWSpec, health, index) {
    const legName = legendaryInfo ? legendaryInfo.name : "";
    const headerName = header + " " + legName;
    const items = [
        {
            key: '1',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: headerName
            }, void 0, false, {
                fileName: "[project]/src/damage/LegendarySelector.js",
                lineNumber: 126,
                columnNumber: 20
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: legBody(legendaryInfo, wSpec, setWSpec, health, index)
            }, void 0, false)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 mb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
            items: items
        }, void 0, false, {
            fileName: "[project]/src/damage/LegendarySelector.js",
            lineNumber: 133,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/damage/LegendarySelector.js",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
function LegendarySelector({ header, wSpec, setWSpec, health, index }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegendarySelector.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentLegendaryIds"])(wSpec);
            if (!wSpec.legendaryHealthUpdated) {
                wSpec.legendaryHealthUpdated = true;
                updateLegendary(wSpec, setWSpec, health);
            }
        }
    }["LegendarySelector.useEffect"], [
        wSpec,
        health
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegendarySelector.useEffect": ()=>{
            updateLegendary(wSpec, setWSpec, health);
        }
    }["LegendarySelector.useEffect"], [
        health
    ]);
    let legendaryInfo = null;
    if (wSpec.legendary[index]) {
        legendaryInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegendaryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendary"])(wSpec.legendary[index][0]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: getCollapse(header, legendaryInfo, wSpec, setWSpec, health, index)
    }, void 0, false);
}
_s(LegendarySelector, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = LegendarySelector;
var _c;
__turbopack_refresh__.register(_c, "LegendarySelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/AutoHandSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/BSRadio.js [app-client] (ecmascript)");
;
;
;
function empty() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
const autoW = {
    "Non Automatic": 0,
    "Automatic": 1
};
const handW = {
    "One Handed": 0,
    "TwoHanded": 1
};
function auto(wSpec, setWSpec) {
    const onClick = (e)=>{
        wSpec.is_auto = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "pt-2 pb-2 d-flex justify-content-center",
        pairs: autoW,
        selectedValue: wSpec.is_auto,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/src/damage/AutoHandSelector.js",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function hand(wSpec, setWSpec) {
    const onClick = (e)=>{
        wSpec.hand = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "pt-2 pb-2 d-flex justify-content-center",
        pairs: handW,
        selectedValue: wSpec.hand,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/src/damage/AutoHandSelector.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
function content(wSpec, setWSpec) {
    if (wSpec.type === "Melee") {
        return hand(wSpec, setWSpec);
    } else if (wSpec.type === "Heavy" || wSpec.type === "Rifle" || wSpec.type === "Shotgun" || wSpec.type === "Pistol") {
        return auto(wSpec, setWSpec);
    }
    return empty();
}
const AutoHandSelector = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function AutoHandSelector({ wSpec, setWSpec }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: content(wSpec, setWSpec)
    }, void 0, false);
});
_c1 = AutoHandSelector;
const __TURBOPACK__default__export__ = AutoHandSelector;
var _c, _c1;
__turbopack_refresh__.register(_c, "AutoHandSelector$memo");
__turbopack_refresh__.register(_c1, "AutoHandSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getSymbolStyle": (()=>getSymbolStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$SVGIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/svg/SVGIcons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
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
function getSymbolStyle(dType) {
    switch(dType){
        case "physical":
            return [
                "💥",
                "small p-1 bg-ballistic"
            ];
        case "bleed":
            return [
                "🩸",
                "small p-1 bg-bleed"
            ];
        case "explosive":
            return [
                "🧨",
                "small p-1 bg-exp"
            ];
        case "energy":
            return [
                "⚡",
                "small p-1 bg-energy"
            ];
        case "fire":
            return [
                "🔥",
                "small p-1 bg-fire"
            ];
        case "cryo":
            return [
                "❄️",
                "small p-1 bg-cold"
            ];
        case "poison":
            return [
                "☣️",
                "small p-1 bg-poison"
            ];
        case "radiation":
            return [
                "☢️",
                "small p-1 bg-rad"
            ];
        default:
            return [
                "",
                ""
            ];
    }
}
function getInputItem(dItem, wSpec, setWSpec, style) {
    function onCheck(e) {
        dItem.isUsed = e.target.checked;
        setWSpec({
            ...wSpec
        });
    }
    function onDamageChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        dItem.damage = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    }
    function onAccuracyChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        dItem.accuracy = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    }
    function onChanceChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        dItem.chance = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    }
    function onStackCheck(e) {
        dItem.stack = e.target.checked;
        setWSpec({
            ...wSpec
        });
    }
    function onTimeChange(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLength"])(e);
        dItem.time = parseInt(e.target.value);
        setWSpec({
            ...wSpec
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-1 mt-1 flex-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            style: {
                                width: '2.8rem'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                                onChange: onCheck,
                                checked: dItem.isUsed
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageItem.js",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            style: {
                                width: 'auto'
                            },
                            className: style,
                            children: "💢"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                            className: "pe-1",
                            style: {
                                minWidth: '4rem'
                            },
                            type: "number",
                            min: "0",
                            value: dItem["damage"],
                            max: "999",
                            maxLength: "6",
                            onChange: onDamageChange
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            style: {
                                width: '2.8rem'
                            },
                            className: style,
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                            className: "pe-1",
                            style: {
                                minWidth: '4rem'
                            },
                            type: "number",
                            min: "0",
                            value: dItem["accuracy"],
                            max: "100",
                            maxLength: "5",
                            onChange: onAccuracyChange
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageItem.js",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageItem.js",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-1 mt-1 flex-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            style: {
                                width: '2.8rem'
                            },
                            className: style,
                            children: "🎲"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                            className: "pe-1",
                            style: {
                                minWidth: '4rem'
                            },
                            type: "number",
                            min: "0",
                            value: dItem["chance"],
                            max: "100",
                            maxLength: "5",
                            onChange: onChanceChange
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UCheckbox"], {
                                className: "me-1",
                                onChange: onStackCheck,
                                checked: dItem.stack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Stack"
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/DamageItem.js",
                                    lineNumber: 83,
                                    columnNumber: 99
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageItem.js",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                            style: {
                                width: '2.8rem'
                            },
                            className: style,
                            children: "⌛"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control, {
                            className: "pe-1",
                            style: {
                                width: '4rem'
                            },
                            type: "number",
                            min: "0",
                            value: dItem["time"],
                            max: "60",
                            maxLength: "4",
                            onChange: onTimeChange
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageItem.js",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageItem.js",
                lineNumber: 78,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
const DamageItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function DamageItem({ item, wSpec, setWSpec, modalDeleteDamage, setModalDeleteDamage }) {
    const [symbol, style] = getSymbolStyle(item.kind);
    function onTrashClick(e) {
        setModalDeleteDamage({
            id: item.index,
            name: item.name,
            show: true
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "mt-2 mb-2 shadow-outline4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                size: "small",
                className: style,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "ms-3 m-auto p-0 d-flex justify-content-start",
                            children: symbol + " " + item.name
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "me-3 mt-0 mb-0 p-0 d-flex justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "ms-1 pb-auto",
                                size: "sm",
                                id: item.id,
                                name: item.name,
                                onClick: onTrashClick,
                                variant: "white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$SVGIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrashIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/damage/DamageItem.js",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageItem.js",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageItem.js",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageItem.js",
                    lineNumber: 100,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageItem.js",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: getInputItem(item, wSpec, setWSpec, "bg-lite")
                }, void 0, false, {
                    fileName: "[project]/src/damage/DamageItem.js",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageItem.js",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/DamageItem.js",
        lineNumber: 98,
        columnNumber: 9
    }, this);
});
_c1 = DamageItem;
const __TURBOPACK__default__export__ = DamageItem;
var _c, _c1;
__turbopack_refresh__.register(_c, "DamageItem$memo");
__turbopack_refresh__.register(_c1, "DamageItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageAdd.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageAdd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$NotificationToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/NotificationToast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/notification/index.js [app-client] (ecmascript) <export default as notification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript)");
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
function getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification) {
    function onSelectCustom(e) {
        if (wSpec.damages.length >= 6) {
            openNotification();
            return;
        }
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDamageTypeFromCellName"])(e);
        const damageItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDamageItem"])(wSpec.weaponId, "custom", type[0], type[1], type[2], 0, 0, 0, 0, 100, 100, false, wSpec.damages.length, true);
        wSpec.damages.push(damageItem);
        // Reindex
        for(let i = 0; i < wSpec.damages.length; i++){
            wSpec.damages[i].index = i;
        }
        setWSpec({
            ...wSpec
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-2 mb-2 mt-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$NotificationToast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                toastState: toastState
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageAdd.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "warning",
                    size: "sm",
                    onSelect: onSelectCustom,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Add Damage"
                    }, void 0, false, {
                        fileName: "[project]/src/damage/DamageAdd.js",
                        lineNumber: 31,
                        columnNumber: 94
                    }, void 0),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "bbDamage",
                            children: "💥 Physical"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "bleed",
                            children: "🩸 Bleed"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "projExp",
                            children: "🧨 Explosive"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "ebDamage",
                            children: "⚡ Energy"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "fbDamage",
                            children: "🔥 Fire"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "cbDamage",
                            children: "❄️ Cryo"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "pbDamage",
                            children: "☣️ Poison"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                            eventKey: "rbDamage",
                            children: "☢️ Radiation"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageAdd.js",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/DamageAdd.js",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageAdd.js",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/DamageAdd.js",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
function DamageAdd({ wSpec, setWSpec }) {
    _s();
    const [toastState, setToastState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [api, contextHolder] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__["notification"].useNotification();
    const openNotification = ()=>{
        api.open({
            key: "limit",
            message: 'Warning',
            description: 'Damage limit has been achieved',
            duration: 2
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            contextHolder,
            getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification)
        ]
    }, void 0, true);
}
_s(DamageAdd, "bENzm9d78Y/DXTS2YiIo5BKcJCY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__["notification"].useNotification
    ];
});
_c = DamageAdd;
var _c;
__turbopack_refresh__.register(_c, "DamageAdd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/ModalDeleteDamage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
;
;
;
;
;
const ModalDeleteDamage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function ModalDeleteDamage(props) {
    console.log("ModalDeleteDamage");
    if (!props.modalDeleteDamage.show) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    function onHide(e) {
        props.setModalDeleteDamage({
            id: -1,
            name: 'none',
            show: false
        });
    }
    function removeItem(e) {
        try {
            const index = props.modalDeleteDamage.id;
            props.wSpec.damages.splice(index, 1);
            // Reindex
            for(let i = 0; i < props.wSpec.damages.length; i++){
                props.wSpec.damages[i].index = i;
            }
            props.setWSpec({
                ...props.wSpec
            });
        } catch  {}
        props.setModalDeleteDamage({
            id: -1,
            name: "none",
            show: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        show: props.modalDeleteDamage.show,
        onHide: onHide,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Header, {
                closeButton: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Title, {
                    id: "contained-modal-title-vcenter",
                    children: "Delete Item"
                }, void 0, false, {
                    fileName: "[project]/src/damage/ModalDeleteDamage.js",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/ModalDeleteDamage.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body, {
                children: [
                    "Do you want to delete '",
                    props.modalDeleteDamage.name,
                    "' damage?"
                ]
            }, void 0, true, {
                fileName: "[project]/src/damage/ModalDeleteDamage.js",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Footer, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-1 mt-1 flex-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-100 me-1",
                            onClick: removeItem,
                            children: "Yes"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/ModalDeleteDamage.js",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-100 ms-1",
                            onClick: onHide,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/ModalDeleteDamage.js",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/ModalDeleteDamage.js",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/damage/ModalDeleteDamage.js",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/ModalDeleteDamage.js",
        lineNumber: 29,
        columnNumber: 9
    }, this);
});
_c1 = ModalDeleteDamage;
const __TURBOPACK__default__export__ = ModalDeleteDamage;
var _c, _c1;
__turbopack_refresh__.register(_c, "ModalDeleteDamage$memo");
__turbopack_refresh__.register(_c1, "ModalDeleteDamage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/AmmoInfoView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AmmoInfoView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
;
;
;
;
;
function AmmoInfoView({ wSpec }) {
    const name = wSpec.ammoType.name;
    const type = wSpec.ammoType.type;
    const codeName = wSpec.ammoType.codeName;
    if (name && name !== "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-3 mb-0",
                    children: "Ammo"
                }, void 0, false, {
                    fileName: "[project]/src/damage/AmmoInfoView.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mt-2 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mb-1 mt-1 d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    className: "p-1 justify-content-center shadow-outline-ammo",
                                    style: {
                                        minWidth: '18rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: type
                                    }, void 0, false, {
                                        fileName: "[project]/src/damage/AmmoInfoView.js",
                                        lineNumber: 18,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/AmmoInfoView.js",
                                    lineNumber: 18,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/AmmoInfoView.js",
                                lineNumber: 17,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/AmmoInfoView.js",
                            lineNumber: 16,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mb-1 mt-1 d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    className: "p-1 justify-content-center shadow-outline-ammo",
                                    style: {
                                        minWidth: '18rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/damage/AmmoInfoView.js",
                                        lineNumber: 23,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/AmmoInfoView.js",
                                    lineNumber: 23,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/AmmoInfoView.js",
                                lineNumber: 22,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/AmmoInfoView.js",
                            lineNumber: 21,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mb-1 mt-1 d-flex justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                                    className: "p-1 justify-content-center shadow-outline-ammo",
                                    style: {
                                        minWidth: '18rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: codeName
                                    }, void 0, false, {
                                        fileName: "[project]/src/damage/AmmoInfoView.js",
                                        lineNumber: 28,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/AmmoInfoView.js",
                                    lineNumber: 28,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/AmmoInfoView.js",
                                lineNumber: 27,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/AmmoInfoView.js",
                            lineNumber: 26,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/damage/AmmoInfoView.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = AmmoInfoView;
var _c;
__turbopack_refresh__.register(_c, "AmmoInfoView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/TagInfoView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TagInfoView)
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
        className: "m-1 ps-0 pe-0 d-flex justify-content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "m-1 shadow-gold2",
            bordered: true,
            color: "volcano",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/damage/TagInfoView.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/damage/TagInfoView.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, tag, false, {
        fileName: "[project]/src/damage/TagInfoView.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
function TagInfoView({ tags }) {
    if (tags && tags.length > 0) {
        const result = [];
        for(let i = 0; i < tags.length; i++){
            result.push(getTagView(tags[i]));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "p-0 mt-3 mb-2",
                    children: "Tags"
                }, void 0, false, {
                    fileName: "[project]/src/damage/TagInfoView.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "ps-1 pe-1",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/damage/TagInfoView.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = TagInfoView;
var _c;
__turbopack_refresh__.register(_c, "TagInfoView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/damage/DamageTable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$WRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/WRow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/LegendarySelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AutoHandSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/AutoHandSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageAdd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageAdd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$ModalDeleteDamage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/ModalDeleteDamage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AmmoInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/AmmoInfoView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$TagInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/TagInfoView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)");
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
function modElement(mod) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col d-flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "mb-1 mt-1 flex-nowrap justify-content-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    className: "bg-mod-cat",
                    style: {
                        width: '8rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: mod.group
                    }, void 0, false, {
                        fileName: "[project]/src/damage/DamageTable.js",
                        lineNumber: 22,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/damage/DamageTable.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Text, {
                    className: "bg-mod-name",
                    style: {
                        minWidth: '12rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: mod.name
                    }, void 0, false, {
                        fileName: "[project]/src/damage/DamageTable.js",
                        lineNumber: 23,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/damage/DamageTable.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/damage/DamageTable.js",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, mod.id, false, {
        fileName: "[project]/src/damage/DamageTable.js",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
const DamageTable = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function DamageTable({ setWSpec, wSpec, health }) {
    _s();
    console.log("DamageTable");
    const [weaponType, setWeaponType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(wSpec.type);
    const [modalDeleteDamage, setModalDeleteDamage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: -1,
        name: 'none',
        show: false
    });
    function onWeaponChange(e) {
        wSpec.type = e;
        setWSpec({
            ...wSpec
        });
    }
    const mods = wSpec.mods.map((mod)=>modElement(mod));
    let dItems = [];
    for(let i = 0; i < wSpec.damages.length; i++){
        dItems.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            item: wSpec.damages[i],
            wSpec: wSpec,
            setWSpec: setWSpec,
            setModalDeleteDamage: setModalDeleteDamage
        }, i, false, {
            fileName: "[project]/src/damage/DamageTable.js",
            lineNumber: 40,
            columnNumber: 21
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fluid: true,
        className: "p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$ModalDeleteDamage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                wSpec: wSpec,
                setWSpec: setWSpec,
                modalDeleteDamage: modalDeleteDamage,
                setModalDeleteDamage: setModalDeleteDamage
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageAdd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                wSpec: wSpec,
                setWSpec: setWSpec
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            dItems,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-2 mb-2",
                children: "Specs"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$WRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                wSpec: wSpec,
                setWSpec: setWSpec
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-2 mb-2"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col d-flex justify-content-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            weaponType: weaponType,
                            setWeaponType: setWeaponType,
                            onSelect: onWeaponChange,
                            title: "Type"
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageTable.js",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/damage/DamageTable.js",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col d-flex justify-content-end pe-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                            bordered: true,
                            color: "volcano",
                            className: "pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "m-auto p-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowWithImage"])(wSpec.type)
                                }, void 0, false, {
                                    fileName: "[project]/src/damage/DamageTable.js",
                                    lineNumber: 55,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/damage/DamageTable.js",
                                lineNumber: 55,
                                columnNumber: 75
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/damage/DamageTable.js",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/damage/DamageTable.js",
                        lineNumber: 54,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-2 mb-2"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AutoHandSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                wSpec: wSpec,
                setWSpec: setWSpec
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-2 mb-2",
                children: "Legendary Effects"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                index: 0,
                header: "⭐",
                wSpec: wSpec,
                setWSpec: setWSpec,
                health: health
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                index: 1,
                header: "⭐⭐",
                wSpec: wSpec,
                setWSpec: setWSpec,
                health: health
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                index: 2,
                header: "⭐⭐⭐",
                wSpec: wSpec,
                setWSpec: setWSpec,
                health: health
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                index: 3,
                header: "⭐⭐⭐⭐",
                wSpec: wSpec,
                setWSpec: setWSpec,
                health: health
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$LegendarySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                index: 4,
                header: "⭐⭐⭐⭐⭐",
                wSpec: wSpec,
                setWSpec: setWSpec,
                health: health
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-2 mb-2",
                children: "Modifications"
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex",
                children: mods
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$AmmoInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                wSpec: wSpec
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$TagInfoView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tags: wSpec.tags
            }, void 0, false, {
                fileName: "[project]/src/damage/DamageTable.js",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/damage/DamageTable.js",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}, "MGjrJF0S67ZzReOCgpzSjd4SEFU=")), "MGjrJF0S67ZzReOCgpzSjd4SEFU=");
_c1 = DamageTable;
const __TURBOPACK__default__export__ = DamageTable;
var _c, _c1;
__turbopack_refresh__.register(_c, "DamageTable$memo");
__turbopack_refresh__.register(_c1, "DamageTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_damage_273c4b._.js.map