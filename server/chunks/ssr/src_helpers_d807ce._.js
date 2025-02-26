module.exports = {

"[project]/src/helpers/Time.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "millisToTime": (()=>millisToTime)
});
function millisToTime(value) {
    value = parseInt(value);
    if (!value && value !== 0 || value === Infinity) {
        return "Infinity";
    } else if (value > 3599999999) {
        return "+999:59:59:999";
    }
    const t = [
        3600000,
        60000,
        1000
    ];
    let time = [];
    for(let i = 0; i < t.length; i++){
        let r = value % t[i];
        let q = (value - r) / t[i];
        time.push(q);
        value = r;
    }
    let strTime = "";
    strTime += time[0] < 10 ? "00" + time[0] + ":" : time[0] < 100 ? "0" + time[0] + ":" : time[0] + ":";
    strTime += time[1] < 10 ? "0" + time[1] + ":" : time[1] + ":";
    strTime += time[2] < 10 ? "0" + time[2] + ":" : time[2] + ":";
    if (value < 10) {
        strTime += "00" + value;
    } else if (value < 100) {
        strTime += "0" + value;
    } else {
        strTime += value;
    }
    return strTime;
}
}}),
"[project]/src/helpers/Item.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildItem": (()=>buildItem),
    "getHotPercentage": (()=>getHotPercentage),
    "timeToPercent": (()=>timeToPercent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EStuffBoost.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/ECreatures.js [app-ssr] (ecmascript)");
;
;
function getHotPercentage(creatures) {
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAverageTimeMillis"])(creatures);
    return timeToPercent(time);
}
function timeToPercent(time) {
    let percent = 0;
    if (time <= 30000) {
        percent = 100;
    } else {
        percent = (3000000 / time).toFixed(0);
    }
    return percent;
}
function buildItem(id, name, player, playerStats, creatures, boostDamage, wSpec, extraDamage, additionalDamages, resultDamage, stuffBoost) {
    const stuff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EStuffBoost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertStuffBoost"])(stuffBoost);
    const wSpecCopy = JSON.parse(JSON.stringify(wSpec));
    wSpecCopy.weaponName = name;
    return {
        id: id,
        name: name,
        averageTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$ECreatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAverageTimeMillis"])(creatures),
        player: JSON.parse(JSON.stringify(player)),
        playerStats: JSON.parse(JSON.stringify(playerStats)),
        boostDamage: JSON.parse(JSON.stringify(boostDamage)),
        wSpec: wSpecCopy,
        extraDamage: JSON.parse(JSON.stringify(extraDamage)),
        additionalDamages: JSON.parse(JSON.stringify(additionalDamages)),
        creatures: JSON.parse(JSON.stringify(creatures)),
        resultDamage: JSON.parse(JSON.stringify(resultDamage)),
        stuff: JSON.parse(JSON.stringify(stuff))
    };
}
;
}}),
"[project]/src/helpers/Input.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkLength": (()=>checkLength),
    "truncate": (()=>truncate),
    "truncateLongWords": (()=>truncateLongWords)
});
function checkLength(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.currentTarget.value = 0;
        return true;
    }
    const val = parseFloat(e.currentTarget.value);
    if (val < 0) {
        e.currentTarget.value = 0;
    } else if (e.currentTarget.value.length > e.currentTarget.maxLength) {
        e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength);
    } else if (val > e.currentTarget.max) {
        e.currentTarget.value = e.currentTarget.max;
    }
    return true;
}
function truncate(str, maxLength) {
    if (!str || str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + "…";
}
function truncateLongWords(str, maxLength) {
    if (!str || str.length <= maxLength) {
        return str;
    }
    const words = str.split(' ');
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if (word.length > maxLength) {
            words[i] = truncate(word, maxLength);
        }
    }
    return words.join(' ');
}
}}),
"[project]/src/helpers/Colors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getColorsForHotMeter": (()=>getColorsForHotMeter)
});
function getColorsForHotMeter() {
    let colors = [];
    let r = 64;
    let g = 255;
    let b = 255;
    let s = 12;
    for(let i = 0; i < 50; i++){
        if (b > 64) {
            b = b - s;
            b = b < 64 ? 64 : b;
        } else if (r < 255) {
            r = r + s;
            r = r > 255 ? 255 : r;
        } else if (g > 64) {
            g = g - s;
            g = g < 64 ? 64 : g;
        }
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colors;
}
}}),
"[project]/src/helpers/mods/DamageSetter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildBleedDamage": (()=>buildBleedDamage),
    "buildDamageItem": (()=>buildDamageItem),
    "collectAllDamages": (()=>collectAllDamages),
    "convertDamageDataToDamageItem": (()=>convertDamageDataToDamageItem),
    "default": (()=>DamageSetter),
    "getDamageTypeFromCellName": (()=>getDamageTypeFromCellName),
    "makeDamageItemCopy": (()=>makeDamageItemCopy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageBlackList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageBlackList.js [app-ssr] (ecmascript)");
;
function buildDamageItem(weaponId, damageId, type, kind, name, damage, time, interval, area, chance, accuracy, stack, index = 0, isUsed = true) {
    const ignore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageBlackList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].check(weaponId, damageId);
    return {
        "isUsed": isUsed,
        "type": type,
        "kind": kind,
        "name": name,
        "damage": damage,
        "time": time,
        "interval": interval,
        "area": area,
        "chance": chance,
        "accuracy": accuracy,
        "finalAccuracy": accuracy,
        "stack": stack,
        "index": index,
        "weaponId": weaponId,
        "damageId": damageId,
        "ignore": ignore
    };
}
function buildBleedDamage(damage, time, chance = 100, accuracy = 100, stack = false) {
    return buildDamageItem("", "", "dtPhysical", "bleed", "Bleed", damage, time, 0, 0, chance, accuracy, stack, -1, true);
}
function convertDamageDataToDamageItem(damageData) {
    const type = getDamageTypeFromCellName(damageData.type_name);
    const damage = getDamageValue(damageData);
    return buildDamageItem(damageData.weaponId, damageData.directParent, type[0], type[1], type[2], damage, damageData.time, damageData.interval, damageData.area, 100, 100, false);
}
function makeDamageItemCopy(damageItem) {
    return buildDamageItem(damageItem.weaponId, damageItem.damageId, damageItem.type, damageItem.kind, damageItem.name, damageItem.damage, damageItem.time, damageItem.interval, damageItem.area, damageItem.chance, damageItem.accuracy, damageItem.stack, damageItem.index, damageItem.isUsed);
}
function getDamageValue(damage) {
    if (damage.curv > 0) {
        return damage.curv;
    } else if (damage.value > 0) {
        return damage.value;
    }
    return damage.magnitude;
}
const cellNames = [
    'bbDamage',
    'ebDamage',
    'fbDamage',
    'pbDamage',
    'cbDamage',
    'rbDamage',
    'projExp',
    'bleed'
];
function collectAllDamages(template) {
    let result = [];
    for(let i = 0; i < template.adDamage.length; i++){
        result.push(makeDamageItemCopy(template.adDamage[i]));
    }
    for(let i = 0; i < cellNames.length; i++){
        const name = cellNames[i];
        let damage = template[name][1];
        let damageId = template[name][2];
        if (typeof damage === typeof '') {
            const split = damage.split(" / ");
            damage = parseFloat(split[0]);
            const time = parseFloat(split[1].slice(0, -1));
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(template.id, damageId, type[0], type[1], type[2], damage, time, 0, 0, 100, 100, false);
            result.push(obj);
        } else if (damage > 0) {
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(template.id, damageId, type[0], type[1], type[2], damage, 0, 0, 0, 100, 100, false);
            result.push(obj);
        }
    }
    return result;
}
function getDamageTypeFromCellName(cellName) {
    switch(cellName){
        case 'bleed':
            return [
                'dtPhysical',
                'bleed',
                "Bleed"
            ];
        case 'projExp':
            return [
                'dtPhysical',
                'explosive',
                "Explosive"
            ];
        case 'bbDamage':
        case 'dtPhysical':
            return [
                'dtPhysical',
                'physical',
                "Physical"
            ];
        case 'ebDamage':
        case 'dtEnergy':
        case 'dtElectrical':
            return [
                'dtEnergy',
                'energy',
                "Energy"
            ];
        case 'fbDamage':
        case 'dtFire':
            return [
                'dtFire',
                'fire',
                "Fire"
            ];
        case 'pbDamage':
        case 'dtPoison':
            return [
                'dtPoison',
                'poison',
                "Poison"
            ];
        case 'cbDamage':
        case 'dtCryo':
            return [
                'dtCryo',
                'cryo',
                "Cryo"
            ];
        case 'rbDamage':
        case 'dtRadiationExposure':
            return [
                'dtRadiationExposure',
                'radiation',
                "Radiation"
            ];
        default:
            console.log("Can't determine appropriate damate type by cell name: " + cellName);
            return [
                'dtPhysical',
                'ballistic',
                "Physical"
            ];
    }
}
class DamageSetter {
    setDamages(templates) {
        for(let i = 0; i < templates.length; i++){
            this.setDamage(templates[i]);
        }
    }
    setDamage(template) {
        template.adDamage = []; // Additional damages
        this.setDamageForCategory(template, "Base");
        this.setDamageForCategory(template, "Ammo");
        this.setDamageForCategory(template, "Projectile");
        this.setDamageForCategory(template, "Base Spell");
        this.setDamageForCategory(template, "Spell");
    }
    setDamageForCategory(template, category) {
        const damageData = template.damageData;
        for(const property in damageData){
            if (property !== category) {
                continue;
            }
            const damages = damageData[property];
            for(let i = 0; i < damages.length; i++){
                const damage = damages[i];
                this.setCurrent(template, damage);
            }
        }
    }
    setCurrent(template, damage) {
        if (damage.destructible === false && damage.only_player === "No") {
            const damageValue = getDamageValue(damage);
            if (damageValue === 0) {
                return;
            }
            this.placeValueByType(template, damage, damageValue);
        }
    }
    placeValueByType(template, damageData, damageValue) {
        const damage = [
            damageValue,
            damageValue
        ];
        const exp = damageData.exp;
        const blood = damageData.blood;
        switch(damageData.type_name){
            case "ArmorPenetration":
                template.antiArmor = damage;
                break;
            case "ExpDamageMult":
                template.exp[1] = damage[1] * 100;
                break;
            case "STAT_DmgAll":
            case "STAT_DmgMelee":
                template.bonusMult[1] += damage[1] / 100;
                break;
            case "dtPhysical":
                if (exp) {
                    this.putDamage(template, "projExp", damage, damageData);
                } else if (blood) {
                    const type = getDamageTypeFromCellName("bleed");
                    template.adDamage.push(buildDamageItem(template.id, damageData.directParent, type[0], type[1], type[2], damageValue, damageData.time, 0, 0, 100, 100, false));
                } else {
                    this.putDamage(template, "bbDamage", damage, damageData);
                }
                break;
            case "dtEnergy":
            case "dtElectrical":
                this.putDamage(template, "ebDamage", damage, damageData);
                break;
            case "dtFire":
                this.putDamage(template, "fbDamage", damage, damageData);
                break;
            case "dtPoison":
                this.putDamage(template, "pbDamage", damage, damageData);
                break;
            case "dtCryo":
                this.putDamage(template, "cbDamage", damage, damageData);
                break;
            case "dtRadiationExposure":
                this.putDamage(template, "rbDamage", damage, damageData);
                break;
            default:
                break;
        }
    }
    putDamage(template, field, damage, damageData) {
        const type = getDamageTypeFromCellName(field);
        if (template[field][0] > 0 || damageData.time > 0 || damageData.interval > 0) {
            // Will be modified only by boost multiplier independently
            template.adDamage.push(buildDamageItem(template.id, damageData.directParent, type[0], type[1], type[2], damage[1], damageData.time, damageData.interval, damageData.area, 100, 100, false));
        } else {
            // Later can be modified by boosts (current architecture does not allow to push it to adDamage
            const newDamage = [
                damage[0],
                damage[1],
                damageData.directParent
            ];
            template[field] = newDamage;
        }
    }
}
}}),
"[project]/src/helpers/AdditionalDView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AdditionalDView),
    "getSymbolStyle": (()=>getSymbolStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageSetter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
;
;
;
;
;
function getSymbolStyle(dType, kind) {
    switch(dType){
        case "dtPhysical":
            if (kind === 'bleed') {
                return [
                    "🩸",
                    "badge bg-lite-shadow m-1"
                ];
            } else if (kind === 'explosive') {
                return [
                    "🧨",
                    "badge bg-lite-shadow m-1"
                ];
            }
            return [
                "💥",
                "badge bg-ballistic-shadow m-1"
            ];
        case "dtEnergy":
            return [
                "⚡",
                "badge bg-energy-shadow m-1"
            ];
        case "dtFire":
            return [
                "🔥",
                "badge bg-fire-shadow m-1"
            ];
        case "dtCryo":
            return [
                "❄️",
                "badge bg-cold-shadow m-1"
            ];
        case "dtPoison":
            return [
                "☣️",
                "badge bg-poison-shadow m-1"
            ];
        case "dtRadiationExposure":
            return [
                "☢️",
                "badge bg-rad-shadow m-1"
            ];
        default:
            return [
                "",
                ""
            ];
    }
}
function getItems(adDamage, bonusMult, creatures) {
    let result = [];
    let k = 0;
    for(let i = 0; i < adDamage.length; i++){
        const damage = adDamage[i];
        if (damage.ignore) {
            continue;
        }
        const [symbol, style] = getSymbolStyle(damage.type, damage.kind);
        let value = damage.damage.toFixed(1);
        if (bonusMult > 0) {
            const bMult = (value * bonusMult).toFixed(1);
            value += " (+" + bMult + ") ";
        } else if (bonusMult < 0) {
            const bMult = (value * bonusMult).toFixed(1);
            value += " (" + bMult + ") ";
        }
        if (damage.time > 0) {
            value += " - " + damage.time + "s";
        }
        if (damage.interval > 0) {
            value += " (" + damage.interval.toFixed(1) + ")";
        }
        if (damage.area > 0) {
            value += " (" + damage.area.toFixed(0) + " area)";
        }
        result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '10rem', symbol, value, k++));
    }
    for(let i = 0; i < creatures.length; i++){
        const creature = creatures[i];
        const value = "+" + creature.value + "%";
        const name = "🐵 " + creature.name;
        result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("badge bg-lite-shadow m-1", '10rem', name, value, k++));
    }
    return result;
}
function AdditionalDView({ template }) {
    const adDamage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageSetter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectAllDamages"])(template);
    if (!adDamage || adDamage.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "m-1 p-1",
                children: "Damage"
            }, void 0, false, {
                fileName: "[project]/src/helpers/AdditionalDView.js",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "m-1 d-flex justify-content-center",
                children: getItems(adDamage, template.bonusMult[1], template.creature)
            }, void 0, false, {
                fileName: "[project]/src/helpers/AdditionalDView.js",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/helpers/Emoji.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addText": (()=>addText),
    "ammo": (()=>ammo),
    "bow": (()=>bow),
    "bullet": (()=>bullet),
    "fireRate": (()=>fireRate),
    "getNumberEmoji": (()=>getNumberEmoji),
    "getSymbolText": (()=>getSymbolText),
    "gun": (()=>gun),
    "heavy": (()=>heavy),
    "melee": (()=>melee),
    "rifle": (()=>rifle),
    "shotgun": (()=>shotgun),
    "tAmmo": (()=>tAmmo),
    "thrown": (()=>thrown),
    "unarmed": (()=>unarmed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$bullet3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$bullet3$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/bullet3.webp.mjs { IMAGE => "[project]/src/resources/icons/bullet3.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$ammo5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$ammo5$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/ammo5.webp.mjs { IMAGE => "[project]/src/resources/icons/ammo5.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$fireRate$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$fireRate$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/fireRate.webp.mjs { IMAGE => "[project]/src/resources/icons/fireRate.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$tAmmo$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$tAmmo$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/tAmmo.webp.mjs { IMAGE => "[project]/src/resources/icons/tAmmo.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$gun$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$gun$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/gun.webp.mjs { IMAGE => "[project]/src/resources/icons/gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$rifle$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$rifle$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/rifle.webp.mjs { IMAGE => "[project]/src/resources/icons/rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$shotgun$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$shotgun$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/shotgun.webp.mjs { IMAGE => "[project]/src/resources/icons/shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$bow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$bow$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/bow.webp.mjs { IMAGE => "[project]/src/resources/icons/bow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$melee$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$melee$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/melee.webp.mjs { IMAGE => "[project]/src/resources/icons/melee.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$heavy$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$heavy$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/heavy.webp.mjs { IMAGE => "[project]/src/resources/icons/heavy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$unarmed$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$unarmed$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/unarmed.webp.mjs { IMAGE => "[project]/src/resources/icons/unarmed.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$thrown$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$thrown$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/resources/icons/thrown.webp.mjs { IMAGE => "[project]/src/resources/icons/thrown.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
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
function getNumberEmoji(number) {
    switch(number){
        case 0:
            return "0️⃣";
        case 1:
            return "1️⃣";
        case 2:
            return "2️⃣";
        case 3:
            return "3️⃣";
        case 4:
            return "4️⃣";
        case 5:
            return "5️⃣";
        case 6:
            return "6️⃣";
        case 7:
            return "7️⃣";
        case 8:
            return "8️⃣";
        case 9:
            return "9️⃣";
        default:
            return "";
    }
}
function getSymbolText(symbol, text) {
    switch(symbol){
        case "B":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "💥 ",
                    text
                ]
            }, void 0, true);
        case "E":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "⚡ ",
                    text
                ]
            }, void 0, true);
        case "F":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "🔥 ",
                    text
                ]
            }, void 0, true);
        case "P":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "☣️ ",
                    text
                ]
            }, void 0, true);
        case "C":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "❄️ ",
                    text
                ]
            }, void 0, true);
        case "R":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "☢️ ",
                    text
                ]
            }, void 0, true);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    " ",
                    text
                ]
            }, void 0, true);
    }
}
function image(maxHeight, src, altName, className = null) {
    if (!className) {
        className = "mt-auto mb-auto m-0";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        priority: true,
        alt: altName,
        className: className,
        style: {
            width: 'auto',
            maxHeight: maxHeight
        },
        src: src
    }, void 0, false, {
        fileName: "[project]/src/helpers/Emoji.js",
        lineNumber: 66,
        columnNumber: 13
    }, this);
}
function bullet(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$bullet3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$bullet3$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Bullet");
}
function ammo(maxHeight, className = null) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$ammo5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$ammo5$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Ammo", className);
}
function fireRate(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$fireRate$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$fireRate$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Fire rate");
}
function tAmmo(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$tAmmo$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$tAmmo$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Ammo");
}
function gun(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$gun$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$gun$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Gun");
}
function rifle(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$rifle$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$rifle$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Rifle");
}
function shotgun(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$shotgun$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$shotgun$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Shotgun");
}
function bow(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$bow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$bow$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Bow");
}
function melee(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$melee$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$melee$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Melee");
}
function heavy(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$heavy$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$heavy$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Heavy");
}
function unarmed(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$unarmed$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$unarmed$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Unarmed");
}
function thrown(maxHeight) {
    return image(maxHeight, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2f$thrown$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$resources$2f$icons$2f$thrown$2e$webp__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], "Thrown");
}
function addText(imageF, maxHeight, marginLeft, text) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            imageF(maxHeight),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    marginLeft: marginLeft
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/src/helpers/Emoji.js",
                lineNumber: 118,
                columnNumber: 35
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/helpers/WeaponImages.js (require.context ../resources/weapon_icons/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./10mm.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/10mm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/10mm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/10mm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/10mm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./10mm_submachine_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/10mm_submachine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/10mm_submachine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/10mm_submachine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/10mm_submachine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./44.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/44.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/44.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/44.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/44.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./50_cal_machine_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/50_cal_machine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/50_cal_machine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/50_cal_machine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/50_cal_machine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./alien_blaster.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/alien_blaster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/alien_blaster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/alien_blaster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/alien_blaster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ancient_blade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ancient_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ancient_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ancient_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ancient_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./anti-scorched_training_pistol.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/anti-scorched_training_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/anti-scorched_training_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/anti-scorched_training_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/anti-scorched_training_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./assault_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/assault_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/assault_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/assault_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/assault_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./assaultron_blade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/assaultron_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/assaultron_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/assaultron_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/assaultron_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./auto_axe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/auto_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/auto_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/auto_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/auto_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./auto_grenade_launcher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/auto_grenade_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/auto_grenade_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/auto_grenade_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/auto_grenade_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bada-boom.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bada-boom.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bada-boom.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bada-boom.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bada-boom.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./baseball_bat.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/baseball_bat.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baseball_bat.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/baseball_bat.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baseball_bat.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./baseball_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/baseball_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baseball_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/baseball_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baseball_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./baton.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/baton.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baton.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/baton.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/baton.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bear_arm.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bear_arm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bear_arm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bear_arm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bear_arm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./black_powder_blunderbuss.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/black_powder_blunderbuss.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_blunderbuss.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/black_powder_blunderbuss.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_blunderbuss.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./black_powder_pistol.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/black_powder_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/black_powder_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./black_powder_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/black_powder_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/black_powder_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./black_powder_rifle_dragon.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/black_powder_rifle_dragon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_rifle_dragon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/black_powder_rifle_dragon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/black_powder_rifle_dragon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./blade_of_bastet.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/blade_of_bastet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blade_of_bastet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/blade_of_bastet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blade_of_bastet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./blast_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/blast_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blast_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/blast_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blast_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./blue_flamer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/blue_flamer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blue_flamer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/blue_flamer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/blue_flamer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./board.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/board.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/board.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/board.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/board.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bone_club.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bone_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bone_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bone_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bone_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bone_hammer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bone_hammer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bone_hammer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bone_hammer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bone_hammer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bow.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bowie_knife.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bowie_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bowie_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bowie_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bowie_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./boxing_glove.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/boxing_glove.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/boxing_glove.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/boxing_glove.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/boxing_glove.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./broadsider.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/broadsider.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/broadsider.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/broadsider.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/broadsider.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bug_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/bug_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bug_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/bug_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/bug_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./burning_love.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/burning_love.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/burning_love.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/burning_love.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/burning_love.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./camden_whacker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/camden_whacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/camden_whacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/camden_whacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/camden_whacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./candy_cane.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/candy_cane.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/candy_cane.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/candy_cane.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/candy_cane.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cattleprod.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cattleprod.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cattleprod.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cattleprod.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cattleprod.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./chainsaw.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/chainsaw.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/chainsaw.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/chainsaw.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/chainsaw.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./chinese_officer_sword.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/chinese_officer_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/chinese_officer_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/chinese_officer_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/chinese_officer_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./circuit_breaker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/circuit_breaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/circuit_breaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/circuit_breaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/circuit_breaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cold_shoulder.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cold_shoulder.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cold_shoulder.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cold_shoulder.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cold_shoulder.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./combat_knife.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/combat_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/combat_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./combat_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/combat_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/combat_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./combat_shotgun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/combat_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/combat_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/combat_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./commanders_charge.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/commanders_charge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/commanders_charge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/commanders_charge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/commanders_charge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./commie_whacker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/commie_whacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/commie_whacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/commie_whacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/commie_whacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./compound_bow.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/compound_bow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/compound_bow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/compound_bow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/compound_bow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cremator.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cremator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cremator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cremator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cremator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./crossbow.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/crossbow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crossbow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/crossbow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crossbow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./crowd_control.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/crowd_control.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crowd_control.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/crowd_control.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crowd_control.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./crusader_pistol.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/crusader_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crusader_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/crusader_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crusader_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./crushing_blow.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/crushing_blow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crushing_blow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/crushing_blow.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/crushing_blow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cryo_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cryo_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryo_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cryo_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryo_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cryogenic_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cryogenic_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryogenic_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cryogenic_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryogenic_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cryolator.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cryolator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryolator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cryolator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cryolator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cultist_blade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cultist_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cultist_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cultist_dagger.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cultist_dagger.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_dagger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cultist_dagger.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_dagger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cultist_pickaxe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/cultist_pickaxe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_pickaxe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/cultist_pickaxe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/cultist_pickaxe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./death_tambo.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/death_tambo.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/death_tambo.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/death_tambo.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/death_tambo.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./deathclaw_gauntlet.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/deathclaw_gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/deathclaw_gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/deathclaw_gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/deathclaw_gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./default.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/default.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/default.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/default.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/default.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./disorderly_conduct.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/disorderly_conduct.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/disorderly_conduct.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/disorderly_conduct.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/disorderly_conduct.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./doctors_orders.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/doctors_orders.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/doctors_orders.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/doctors_orders.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/doctors_orders.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./double-barrel_shotgun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/double-barrel_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/double-barrel_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/double-barrel_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/double-barrel_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./drill.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/drill.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/drill.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/drill.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/drill.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./dross.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/dross.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dross.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/dross.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dross.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./dynamite.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/dynamite.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dynamite.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/dynamite.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dynamite.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./dynamite_bundle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/dynamite_bundle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dynamite_bundle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/dynamite_bundle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/dynamite_bundle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./electro_enforcer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/electro_enforcer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/electro_enforcer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/electro_enforcer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/electro_enforcer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./enclave_plasma.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/enclave_plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/enclave_plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/enclave_plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/enclave_plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./enclave_plasma_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/enclave_plasma_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/enclave_plasma_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/enclave_plasma_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/enclave_plasma_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./explosive_bait.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/explosive_bait.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/explosive_bait.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/explosive_bait.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/explosive_bait.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./face_breaker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/face_breaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/face_breaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/face_breaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/face_breaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fancy_pump_action_shotgun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fancy_pump_action_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fancy_pump_action_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fancy_pump_action_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fancy_pump_action_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fat_man.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fat_man.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fat_man.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fat_man.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fat_man.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./final_word.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/final_word.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/final_word.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/final_word.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/final_word.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fire_axe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fire_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fire_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fire_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fire_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./flamer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/flamer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/flamer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/flamer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/flamer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./floater_flamer_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/floater_flamer_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_flamer_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/floater_flamer_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_flamer_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./floater_freezer_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/floater_freezer_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_freezer_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/floater_freezer_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_freezer_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./floater_gnasher_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/floater_gnasher_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_gnasher_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/floater_gnasher_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/floater_gnasher_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./foundations_vengeance.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/foundations_vengeance.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/foundations_vengeance.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/foundations_vengeance.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/foundations_vengeance.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fragmentation_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fragmentation_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fragmentation_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fragmentation_grenade_mirv.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fragmentation_grenade_mirv.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_grenade_mirv.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fragmentation_grenade_mirv.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_grenade_mirv.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fragmentation_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/fragmentation_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/fragmentation_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/fragmentation_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gamma_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gamma_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gamma_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gamma_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gamma_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gatling_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gatling_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gatling_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gatling_laser.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gatling_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gatling_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gatling_plasma.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gatling_plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gatling_plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gatling_plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gauntlet.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gauss_minigun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gauss_minigun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_minigun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gauss_minigun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_minigun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gauss_pistol.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gauss_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gauss_pistol.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_pistol.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gauss_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gauss_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gauss_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gauss_shotgun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gauss_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gauss_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gauss_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./golf_club.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/golf_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/golf_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/golf_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/golf_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./grand_finale.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/grand_finale.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grand_finale.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/grand_finale.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grand_finale.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./grants_saber.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/grants_saber.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grants_saber.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/grants_saber.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grants_saber.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./grognaks_axe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/grognaks_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grognaks_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/grognaks_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/grognaks_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./guitar_sword.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/guitar_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/guitar_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/guitar_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/guitar_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gulper_smacker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gulper_smacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gulper_smacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gulper_smacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gulper_smacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gunthers_big_iron.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/gunthers_big_iron.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gunthers_big_iron.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/gunthers_big_iron.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/gunthers_big_iron.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./handmade_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/handmade_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/handmade_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/handmade_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/handmade_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./harpoon_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/harpoon_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/harpoon_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/harpoon_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/harpoon_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./hatchet.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/hatchet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hatchet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/hatchet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hatchet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./hellstorm.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/hellstorm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hellstorm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/hellstorm.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hellstorm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./hunting_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/hunting_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hunting_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/hunting_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/hunting_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./imposter_assaultron_head.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/imposter_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/imposter_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/imposter_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/imposter_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./kingfisher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/kingfisher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/kingfisher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/kingfisher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/kingfisher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./knuckles.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/knuckles.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/knuckles.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/knuckles.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/knuckles.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./laser.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./laser_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/laser_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/laser_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/laser_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/laser_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./lead_pipe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/lead_pipe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lead_pipe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/lead_pipe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lead_pipe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./lever_action_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/lever_action_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lever_action_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/lever_action_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lever_action_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./light_machine_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/light_machine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/light_machine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/light_machine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/light_machine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./love-tap.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/love-tap.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/love-tap.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/love-tap.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/love-tap.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./lucky_rabbits_foot.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/lucky_rabbits_foot.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lucky_rabbits_foot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/lucky_rabbits_foot.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/lucky_rabbits_foot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./m79_grenade_launcher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/m79_grenade_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/m79_grenade_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/m79_grenade_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/m79_grenade_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./machete.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/machete.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/machete.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/machete.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/machete.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./meat_cleaver.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/meat_cleaver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meat_cleaver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/meat_cleaver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meat_cleaver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./meat_hook.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/meat_hook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meat_hook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/meat_hook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meat_hook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mechanics_best_friend.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/mechanics_best_friend.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mechanics_best_friend.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/mechanics_best_friend.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mechanics_best_friend.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./medical_malpractice.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/medical_malpractice.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/medical_malpractice.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/medical_malpractice.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/medical_malpractice.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./meteoritic_sword.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/meteoritic_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meteoritic_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/meteoritic_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/meteoritic_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mind_over_matter.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/mind_over_matter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mind_over_matter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/mind_over_matter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mind_over_matter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mind_over_matter_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/mind_over_matter_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mind_over_matter_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/mind_over_matter_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mind_over_matter_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./minigun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/minigun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/minigun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/minigun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/minigun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./missile_launcher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/missile_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/missile_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/missile_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/missile_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mole_miner_gauntlet.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/mole_miner_gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mole_miner_gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/mole_miner_gauntlet.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mole_miner_gauntlet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./molerat_bat.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/molerat_bat.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/molerat_bat.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/molerat_bat.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/molerat_bat.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./molotov_cocktail.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/molotov_cocktail.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/molotov_cocktail.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/molotov_cocktail.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/molotov_cocktail.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mr_handy_buzz_blade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/mr_handy_buzz_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mr_handy_buzz_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/mr_handy_buzz_blade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/mr_handy_buzz_blade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./multi-purpose_axe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/multi-purpose_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/multi-purpose_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/multi-purpose_axe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/multi-purpose_axe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nailer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/nailer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nailer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/nailer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nailer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./night_light.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/night_light.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/night_light.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/night_light.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/night_light.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./noxious_fog_crawler.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/noxious_fog_crawler.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/noxious_fog_crawler.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/noxious_fog_crawler.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/noxious_fog_crawler.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka-launcher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/nuka-launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka-launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/nuka-launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka-launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/nuka_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/nuka_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka_quantum_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/nuka_quantum_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka_quantum_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/nuka_quantum_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuka_quantum_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuke_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/nuke_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuke_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/nuke_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/nuke_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./oathbreaker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/oathbreaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/oathbreaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/oathbreaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/oathbreaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./old_guards_10mm_smg.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/old_guards_10mm_smg.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/old_guards_10mm_smg.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/old_guards_10mm_smg.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/old_guards_10mm_smg.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./orbital_scan_beacon.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/orbital_scan_beacon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/orbital_scan_beacon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/orbital_scan_beacon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/orbital_scan_beacon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./orbital_strike_beacon.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/orbital_strike_beacon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/orbital_strike_beacon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/orbital_strike_beacon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/orbital_strike_beacon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pepper_shaker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pepper_shaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pepper_shaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pepper_shaker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pepper_shaker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pickaxe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pickaxe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pickaxe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pickaxe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pickaxe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_bolt-action.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_bolt-action.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_bolt-action.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_bolt-action.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_bolt-action.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_bolt-action_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_bolt-action_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_bolt-action_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_bolt-action_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_bolt-action_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_revolver.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_revolver_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_revolver_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_revolver_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_revolver_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_revolver_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pipe_wrench.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pipe_wrench.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_wrench.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pipe_wrench.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pipe_wrench.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pirate_punch.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pirate_punch.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pirate_punch.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pirate_punch.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pirate_punch.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pitchfork.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pitchfork.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pitchfork.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pitchfork.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pitchfork.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_caster.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma_caster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_caster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma_caster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_caster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_cutter.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma_cutter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_cutter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma_cutter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_cutter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/plasma_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/plasma_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/plasma_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pole_hook.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pole_hook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pole_hook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pole_hook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pole_hook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pollys_assaultron_head.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pollys_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pollys_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pollys_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pollys_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pool_cue.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pool_cue.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pool_cue.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pool_cue.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pool_cue.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./power_fist.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/power_fist.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/power_fist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/power_fist.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/power_fist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./protest_sign_-_against_automation.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/protest_sign_-_against_automation.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/protest_sign_-_against_automation.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/protest_sign_-_against_automation.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/protest_sign_-_against_automation.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pulse_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pulse_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pulse_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pulse_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pulse_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pulse_mine.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pulse_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pulse_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pulse_mine.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pulse_mine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pump_action_shotgun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pump_action_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pump_action_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pump_action_shotgun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pump_action_shotgun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pumpkin_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/pumpkin_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pumpkin_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/pumpkin_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/pumpkin_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./quad_launcher.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/quad_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/quad_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/quad_launcher.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/quad_launcher.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./radium.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/radium.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/radium.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/radium.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/radium.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./railway.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/railway.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/railway.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/railway.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/railway.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./resolute_veteran.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/resolute_veteran.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/resolute_veteran.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/resolute_veteran.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/resolute_veteran.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./revolutionary_sword.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/revolutionary_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/revolutionary_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/revolutionary_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/revolutionary_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ripper.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ripper.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ripper.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ripper.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ripper.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./rolling_pin.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/rolling_pin.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/rolling_pin.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/rolling_pin.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/rolling_pin.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./salt_of_the_earth.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/salt_of_the_earth.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/salt_of_the_earth.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/salt_of_the_earth.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/salt_of_the_earth.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./salvaged_assaultron_head.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/salvaged_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/salvaged_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/salvaged_assaultron_head.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/salvaged_assaultron_head.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sheepsquatch_club.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sheepsquatch_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sheepsquatch_club.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_club.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sheepsquatch_shard.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sheepsquatch_shard.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_shard.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sheepsquatch_shard.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_shard.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sheepsquatch_staff.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sheepsquatch_staff.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_staff.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sheepsquatch_staff.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sheepsquatch_staff.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./shepherds_crook.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/shepherds_crook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shepherds_crook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/shepherds_crook.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shepherds_crook.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./shishkebab.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/shishkebab.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shishkebab.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/shishkebab.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shishkebab.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./shovel.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/shovel.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shovel.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/shovel.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/shovel.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sickle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sickle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sickle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sickle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sickle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./single_action_revolver.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/single_action_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/single_action_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/single_action_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/single_action_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ski_sword.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ski_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ski_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ski_sword.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ski_sword.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sledgehammer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sledgehammer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sledgehammer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sledgehammer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sledgehammer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./slug_buster.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/slug_buster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/slug_buster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/slug_buster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/slug_buster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./slug_buster_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/slug_buster_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/slug_buster_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/slug_buster_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/slug_buster_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./smart_fragmentation_grenade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/smart_fragmentation_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/smart_fragmentation_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/smart_fragmentation_grenade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/smart_fragmentation_grenade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sole_survivor.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/sole_survivor.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sole_survivor.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/sole_survivor.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/sole_survivor.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./spear.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/spear.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/spear.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/spear.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/spear.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./submachine_gun.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/submachine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/submachine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/submachine_gun.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/submachine_gun.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./super_sledge.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/super_sledge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/super_sledge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/super_sledge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/super_sledge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./switchblade.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/switchblade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/switchblade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/switchblade.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/switchblade.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tenderizer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/tenderizer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tenderizer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/tenderizer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tenderizer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tesla.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/tesla.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tesla.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/tesla.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tesla.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_action_hero.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_action_hero.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_action_hero.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_action_hero.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_action_hero.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_debilitator.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_debilitator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_debilitator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_debilitator.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_debilitator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_dragon.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_dragon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_dragon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_dragon.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_dragon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_farmhand.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_farmhand.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_farmhand.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_farmhand.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_farmhand.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_fixer.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_fixer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_fixer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_fixer.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_fixer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_guarantee.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_guarantee.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_guarantee.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_guarantee.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_guarantee.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_gutter.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_gutter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_gutter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_gutter.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_gutter.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_invader.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_invader.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_invader.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_invader.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_invader.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_quick_fix.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_quick_fix.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_quick_fix.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_quick_fix.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_quick_fix.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_vats_unknown.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/the_vats_unknown.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_vats_unknown.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/the_vats_unknown.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/the_vats_unknown.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./throwing_knife.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/throwing_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/throwing_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/throwing_knife.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/throwing_knife.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tire_iron.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/tire_iron.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tire_iron.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/tire_iron.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tire_iron.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tomahawk.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/tomahawk.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tomahawk.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/tomahawk.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tomahawk.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tone_death.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/tone_death.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tone_death.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/tone_death.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/tone_death.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ultracite_gatling_laser.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ultracite_gatling_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_gatling_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ultracite_gatling_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_gatling_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ultracite_laser.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ultracite_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ultracite_laser.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_laser.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ultracite_laser_rifle.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/ultracite_laser_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_laser_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/ultracite_laser_rifle.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/ultracite_laser_rifle.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./unstoppable_monster.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/unstoppable_monster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/unstoppable_monster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/unstoppable_monster.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/unstoppable_monster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./v63_zweihaender.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/v63_zweihaender.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/v63_zweihaender.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/v63_zweihaender.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/v63_zweihaender.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./walking_cane.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/walking_cane.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/walking_cane.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/walking_cane.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/walking_cane.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./war_drum.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/war_drum.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/war_drum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/war_drum.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/war_drum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./war_glaive.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/war_glaive.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/war_glaive.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/war_glaive.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/war_glaive.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./western_revolver.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/western_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/western_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/western_revolver.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/western_revolver.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./western_spirit.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/western_spirit.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/western_spirit.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/western_spirit.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/western_spirit.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./whacker_smacker.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/whacker_smacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/whacker_smacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/whacker_smacker.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/whacker_smacker.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./whistle_in_the_dark.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/whistle_in_the_dark.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/whistle_in_the_dark.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/whistle_in_the_dark.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/whistle_in_the_dark.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./zetas_revenge.webp": {
        id: ()=>'[project]/src/resources/weapon_icons/zetas_revenge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/zetas_revenge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/weapon_icons/zetas_revenge.webp.mjs { IMAGE => "[project]/src/resources/weapon_icons/zetas_revenge.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/WeaponImages.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getImageElement": (()=>getImageElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const images = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/WeaponImages.js (require.context ../resources/weapon_icons/**)"));
const imageNames = images.keys();
const imageList = imageNames.map((image)=>images(image));
function getImageElement(name, maxHeight = '1.5rem', className = "") {
    for(let i = 0; i < imageList.length; i++){
        let wName = imageNames[i];
        const firstIndex = wName.lastIndexOf("/") + 1;
        const lastIndex = wName.lastIndexOf(".");
        wName = wName.substring(firstIndex, lastIndex);
        if (wName === name) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alt: wName,
                className: "p-0 m-0 " + className,
                style: {
                    width: 'auto',
                    maxHeight: maxHeight
                },
                src: imageList[i]
            }, void 0, false, {
                fileName: "[project]/src/helpers/WeaponImages.js",
                lineNumber: 15,
                columnNumber: 21
            }, this);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
}}),
"[project]/src/helpers/DropdownHelpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUniqueDropdownItemsByNames": (()=>getUniqueDropdownItemsByNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-ssr] (ecmascript)");
;
;
function getUniqueDropdownItemsByNames(names) {
    const result = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: name,
            children: name
        }, name + i, false, {
            fileName: "[project]/src/helpers/DropdownHelpers.js",
            lineNumber: 8,
            columnNumber: 21
        }, this));
    }
    return result;
}
}}),
"[project]/src/helpers/views/SimpleNameDropdown.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SimpleNameDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DropdownHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/DropdownHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-ssr] (ecmascript)");
;
;
;
function SimpleNameDropdown(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        variant: props.variant,
        size: props.size,
        onSelect: props.onSelect,
        title: props.title,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DropdownHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUniqueDropdownItemsByNames"])(props.names)
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/SimpleNameDropdown.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/StringHelpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildRandomEmojiString": (()=>buildRandomEmojiString),
    "getRandomEmoji": (()=>getRandomEmoji),
    "getRandomNumber": (()=>getRandomNumber),
    "numberToString": (()=>numberToString)
});
function numberToString(number, round = 0) {
    if (round > 0) {
        return (+number.toFixed(round)).toString();
    }
    return number.toString();
}
const emojis = [
    '🍦',
    '🍧',
    '🍨',
    '🍩',
    '🍪',
    '🎂',
    '🍰',
    '🧁',
    '🥧',
    '🍫',
    '🍬',
    '🍭',
    '🥨',
    '🥯',
    '🥞',
    '🧇',
    '🧀',
    '🍖',
    '🍗',
    '🥩',
    '🥓',
    '🍔',
    '🍮',
    '🍯'
];
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function getRandomEmoji() {
    return emojis[getRandomNumber(emojis.length)];
}
function buildRandomEmojiString(length, space = 1) {
    const spaceChar = '\xa0';
    let spaceChars = "";
    if (space > 0) {
        spaceChars = spaceChar.repeat(space);
    }
    let result = "";
    const eSize = emojis.length;
    for(let i = 0; i < length; i++){
        result += emojis[getRandomNumber(eSize)];
        if (i < length - 1) {
            result += spaceChars;
        }
    }
    return result;
}
}}),
"[project]/src/helpers/Strings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Strings)
});
class Strings {
    static Melee = "Melee";
    static Unarmed = "Unarmed";
    static getFireRate(wType = null) {
        return wType && (wType === Strings.Melee || wType === Strings.Unarmed) ? "Hit Rate" : "Fire Rate";
    }
}
}}),
"[project]/src/helpers/Mods.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getMods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$mods$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/mods.json (json)");
;
function createMap() {
    let map = new Map();
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$mods$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$mods$2e$json__$28$json$29$__["default"][i];
        map.set(item['id'], item);
    }
    return map;
}
const iMap = createMap();
function getMods() {
    return iMap;
}
}}),
"[project]/src/helpers/mods/ModTools.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ModTools": (()=>ModTools)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
;
class ModTools {
    static hasSilencerById(modId) {
        return ModTools.hasSilencer((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modId));
    }
    static hasSilencer(modData) {
        for(let i = 0; i < modData.modifiers.length; i++){
            const val = modData.modifiers[i].val1;
            if (val === '001e05d6 / HasSilencer') {
                return true;
            }
        }
        return false;
    }
}
}}),
"[project]/src/helpers/LegendaryProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLegendary": (()=>getLegendary),
    "getLegendaryByStar": (()=>getLegendaryByStar),
    "getLegendaryNameFromSpec": (()=>getLegendaryNameFromSpec)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$legendary$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/legendary.json (json)");
;
function createMap() {
    let map = new Map();
    let legendary = [
        [
            {
                name: "None",
                id: "1"
            }
        ],
        [
            {
                name: "None",
                id: "2"
            }
        ],
        [
            {
                name: "None",
                id: "3"
            }
        ],
        [
            {
                name: "None",
                id: "4"
            }
        ],
        [
            {
                name: "None",
                id: "5"
            }
        ]
    ];
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$legendary$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$legendary$2e$json__$28$json$29$__["default"][i];
        map.set(item.id, item);
        legendary[item.star - 1].push(item);
    }
    return [
        map,
        legendary
    ];
}
const [iMap, legendary] = createMap();
function getLegendary(id) {
    return iMap.get(id);
}
function getLegendaryByStar() {
    return legendary;
}
function getLegendaryNameFromSpec(wSpec, star) {
    if (wSpec && wSpec.legendary) {
        const leg = wSpec.legendary[star - 1][0];
        if (leg && leg !== "") {
            const legObj = getLegendary(leg);
            if (legObj) {
                return legObj.name;
            }
            return "";
        }
    }
    return "";
}
}}),
"[project]/src/helpers/views/BSRadio.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BSRadio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function getButtons(pairs, selectedValue, onClick, small) {
    const result = [];
    let style = null;
    for(const name in pairs){
        const value = pairs[name];
        if (selectedValue === value) {
            style = {
                color: '#0068ae',
                borderColor: '#0098ff',
                marginRight: '1px'
            };
        } else {
            style = {
                marginRight: '1px'
            };
        }
        let tail = "";
        if (small) {
            tail = "-small";
        }
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            value: value,
            style: style,
            onClick: onClick,
            className: "btn btn-blue-white" + tail,
            children: name
        }, name, false, {
            fileName: "[project]/src/helpers/views/BSRadio.js",
            lineNumber: 15,
            columnNumber: 21
        }, this));
    }
    return result;
}
function BSRadio(props) {
    let onClick = null;
    if (!props.onClick) {
        onClick = onClick = (e)=>{
            if (props.setSelectedValue) {
                if (props.parseValueInt) {
                    props.setSelectedValue(parseInt(e.target.value));
                } else {
                    props.setSelectedValue(e.target.value);
                }
            }
        };
    } else {
        onClick = props.onClick;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: props.className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "btn-group",
            role: "group",
            children: getButtons(props.pairs, props.selectedValue, onClick, props.small)
        }, void 0, false, {
            fileName: "[project]/src/helpers/views/BSRadio.js",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/BSRadio.js",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/Array.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteItemFromArray": (()=>deleteItemFromArray),
    "intersects": (()=>intersects)
});
function intersects(array1, array2) {
    if (!array1 || array1 === null || array1.length === 0 || !array2 || array2 === null || array2.length === 0) {
        return false;
    }
    let arrayLess = array1;
    let arrayMore = array2;
    if (array1.length > array2.length) {
        arrayLess = array2;
        arrayMore = array1;
    }
    for(let i = 0; i < arrayLess.length; i++){
        const value = arrayLess[i];
        if (arrayMore.includes(value)) {
            return true;
        }
    }
    return false;
}
function deleteItemFromArray(array, index) {
    array.splice(index, 1);
}
}}),
"[project]/src/helpers/AccuracyAdjuster.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// TODO: adjust accuracy by using default accuracy and possible effects from legendary, perks, consumables
// Currently 100
__turbopack_esm__({
    "default": (()=>AccuracyAdjuster)
});
class AccuracyAdjuster {
    static adjustByLegendary(damages, legendary) {}
    static adjustByPerks(damages, legendary) {}
    static adjustByConsumables(damages, consumables) {}
}
}}),
"[project]/src/helpers/Calc.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calcDamage": (()=>calcDamage),
    "graphDamage": (()=>graphDamage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/weapon/WeaponFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesProduction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/creature/CreaturesProduction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageEmulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageEmulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Global.js [app-ssr] (ecmascript)");
;
;
;
;
function calcDamage(weaponFactory, creaturesInfo) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageEmulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](weaponFactory.build(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DEFAULT), creaturesInfo).emulate();
}
function buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, crit = true) {
    weapon.setEnableCrit(crit);
    for(let i = 0; i < xValues.length; i++){
        const xValue = xValues[i];
        const armor = [
            xValue,
            xValue,
            xValue,
            xValue,
            xValue,
            xValue
        ];
        const creature = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesProduction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].produceByArmor(creaturesInfo, armor);
        creature.reduceArmor(weapon.getAntiArmor());
        creature.takeDamage(weapon.getMaxHit());
        yValues.push(creature.getLastTotalDamageWithAccuracy() * shotsPerSecond);
    }
}
function graphDamage(creaturesInfo, weaponFactory, resistanceByAntiArmor = false, addResPoints = false, accuracy = 100, pointsSize = 0, staticResistance = 0) {
    const weapon = weaponFactory.build(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$weapon$2f$WeaponFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DEFAULT, creaturesInfo);
    weapon.setAlwaysMaxHit(true);
    // We multiply result by headShot frequency later, to calc correct dps
    weapon.setEnableHeadShot(false);
    const headShotPercent = weapon.getHeadShotFrequency() / 100.0;
    const normalShotPercent = 1 - headShotPercent;
    const headShotMult = creaturesInfo.headShot;
    const critFreq = weapon.getCritShotFrequency();
    const normalShotCount = critFreq > 0 ? critFreq - 1 : 1;
    const critShotCount = critFreq > 0 ? 1 : 0;
    const shotSum = normalShotCount + critShotCount;
    accuracy = accuracy / 100.0;
    // In case we have only 1 ammo to not count reloading
    weapon.disableReloadTimeCounting();
    // Actual shot per second + we need to care about reloading time
    let fireRate = weapon.getFireRate() / 10.0;
    fireRate = 1 / fireRate + weapon.getChargeTime();
    fireRate = 1 / fireRate;
    let ammoCapacity = weapon.getAmmoCapacity();
    if (ammoCapacity === 0) {
        ammoCapacity = 1;
    }
    const totalTime = ammoCapacity / fireRate + weapon.getReloadTime();
    const shotTime = totalTime / ammoCapacity;
    const shotsPerSecond = 1 / shotTime;
    // 1 Hit per second which later will be multiplied by actual fire rate to get correct DPS
    weapon.setFireRate(10);
    weapon.setChargeTime(0);
    weapon.setFirstBloodBonus(0);
    weapon.setLastShotBonus(0);
    let yValues = [];
    let yValuesNoCrit = [];
    let xValues = [];
    const r = creaturesInfo.immuneToRadiation ? 0 : creaturesInfo.r;
    const p = creaturesInfo.immuneToPoison ? 0 : creaturesInfo.p;
    // Max resistance with armor penetration
    let maxRes = staticResistance;
    const creatureRes = [
        creaturesInfo.b,
        creaturesInfo.e,
        creaturesInfo.f,
        p,
        creaturesInfo.c,
        r
    ];
    if (maxRes < 1) {
        maxRes = Math.max(...creatureRes);
        if (maxRes > 0 && resistanceByAntiArmor) {
            const creature = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$creature$2f$CreaturesProduction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].produceByArmor(creaturesInfo, [
                maxRes,
                maxRes,
                maxRes,
                maxRes,
                maxRes,
                maxRes
            ]);
            const cArmor = creature.reduceArmor(weapon.getAntiArmor()).getArmor();
            maxRes = Math.max(...cArmor);
        }
    }
    let points = pointsSize;
    if (points < 1) {
        points = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphPoints;
    }
    if (maxRes < 0) {
        maxRes = 0;
    }
    if (maxRes < points) {
        points = maxRes;
    }
    const coef = points === 0 ? 0 : maxRes / points;
    for(let i = 0; i <= points; i++){
        xValues.push(Math.ceil(coef * i));
    }
    if (addResPoints) {
        for(let i = 0; i < creatureRes.length; i++){
            const res = creatureRes[i];
            xValues.push(res);
        }
        xValues = [
            ...new Set(xValues)
        ]; // Get rid of duplicates
        xValues.sort((a, b)=>a - b);
    }
    buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond);
    buildGraphValues(xValues, yValuesNoCrit, creaturesInfo, weapon, shotsPerSecond, false);
    for(let i = 0; i < yValues.length; i++){
        const yVal = yValues[i];
        const yValNoCrit = yValuesNoCrit[i];
        let result = (yVal * critShotCount + yValNoCrit * normalShotCount) / shotSum;
        result = result * headShotMult * headShotPercent + result * normalShotPercent;
        result = result * accuracy;
        yValues[i] = result;
    }
    return {
        xValues: xValues,
        yValues: yValues
    };
}
}}),
"[project]/src/helpers/Ammo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getAmmo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$ammo$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/ammo.json (json)");
;
function createMap() {
    let map = new Map();
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$ammo$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$ammo$2e$json__$28$json$29$__["default"][i];
        map.set(item['id'], item);
    }
    return map;
}
const iMap = createMap();
function getAmmo() {
    return iMap;
}
}}),
"[project]/src/helpers/Proj.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getProj)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$proj$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/proj.json (json)");
;
function createMap() {
    let map = new Map();
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$proj$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$proj$2e$json__$28$json$29$__["default"][i];
        map.set(item['id'], item);
    }
    return map;
}
const iMap = createMap();
function getProj() {
    return iMap;
}
}}),
"[project]/src/helpers/Spell.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getSpell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$spel$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/spel.json (json)");
;
function createMap() {
    let map = new Map();
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$spel$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$spel$2e$json__$28$json$29$__["default"][i];
        map.set(item['id'], item);
    }
    return map;
}
const iMap = createMap();
function getSpell() {
    return iMap;
}
}}),
"[project]/src/helpers/PerkProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getPerks),
    "getPerk": (()=>getPerk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perk$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/perk.json (json)");
;
function createMap() {
    let map = new Map();
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perk$2e$json__$28$json$29$__["default"].length; i++){
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$perk$2e$json__$28$json$29$__["default"][i];
        map.set(item['id'], item);
    }
    return map;
}
const iMap = createMap();
function getPerks() {
    return iMap;
}
function getPerk(id) {
    return getPerks().get(id);
}
}}),
"[project]/src/helpers/TemplatesRegister.js (require.context ../resources/weaponTemplates/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./10mm.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/10mm.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/10mm.json (json)")
    },
    "./10mmSubmachineGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/10mmSubmachineGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/10mmSubmachineGun.json (json)")
    },
    "./44.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/44.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/44.json (json)")
    },
    "./50CalMachineGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/50CalMachineGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/50CalMachineGun.json (json)")
    },
    "./AlienBlaster.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AlienBlaster.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AlienBlaster.json (json)")
    },
    "./AncientBlade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AncientBlade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AncientBlade.json (json)")
    },
    "./Anti-ScorchedTrainingPistol.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Anti-ScorchedTrainingPistol.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Anti-ScorchedTrainingPistol.json (json)")
    },
    "./AssaultRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AssaultRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AssaultRifle.json (json)")
    },
    "./AssaultronBlade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AssaultronBlade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AssaultronBlade.json (json)")
    },
    "./AutoAxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AutoAxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AutoAxe.json (json)")
    },
    "./AutoGrenadeLauncher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/AutoGrenadeLauncher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/AutoGrenadeLauncher.json (json)")
    },
    "./Bada-Boom.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Bada-Boom.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Bada-Boom.json (json)")
    },
    "./BaseballBat.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BaseballBat.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BaseballBat.json (json)")
    },
    "./BaseballGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BaseballGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BaseballGrenade.json (json)")
    },
    "./Baton.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Baton.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Baton.json (json)")
    },
    "./BearArm.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BearArm.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BearArm.json (json)")
    },
    "./BlackPowderBlunderbuss.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BlackPowderBlunderbuss.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BlackPowderBlunderbuss.json (json)")
    },
    "./BlackPowderPistol.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BlackPowderPistol.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BlackPowderPistol.json (json)")
    },
    "./BlackPowderRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BlackPowderRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BlackPowderRifle.json (json)")
    },
    "./BladeofBastet.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BladeofBastet.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BladeofBastet.json (json)")
    },
    "./BlastMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BlastMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BlastMine.json (json)")
    },
    "./BlueFlamer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BlueFlamer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BlueFlamer.json (json)")
    },
    "./Board.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Board.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Board.json (json)")
    },
    "./BoneClub.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BoneClub.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BoneClub.json (json)")
    },
    "./BoneHammer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BoneHammer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BoneHammer.json (json)")
    },
    "./Bow.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Bow.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Bow.json (json)")
    },
    "./BowieKnife.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BowieKnife.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BowieKnife.json (json)")
    },
    "./BoxingGlove.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BoxingGlove.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BoxingGlove.json (json)")
    },
    "./Broadsider.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Broadsider.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Broadsider.json (json)")
    },
    "./BugGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BugGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BugGrenade.json (json)")
    },
    "./BurningLove.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/BurningLove.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/BurningLove.json (json)")
    },
    "./CamdenWhacker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CamdenWhacker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CamdenWhacker.json (json)")
    },
    "./CandyCane.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CandyCane.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CandyCane.json (json)")
    },
    "./Cattleprod.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Cattleprod.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Cattleprod.json (json)")
    },
    "./Chainsaw.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Chainsaw.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Chainsaw.json (json)")
    },
    "./ChineseOfficerSword.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ChineseOfficerSword.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ChineseOfficerSword.json (json)")
    },
    "./CircuitBreaker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CircuitBreaker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CircuitBreaker.json (json)")
    },
    "./ColdShoulder.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ColdShoulder.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ColdShoulder.json (json)")
    },
    "./CombatKnife.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CombatKnife.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CombatKnife.json (json)")
    },
    "./CombatRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CombatRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CombatRifle.json (json)")
    },
    "./CombatShotgun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CombatShotgun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CombatShotgun.json (json)")
    },
    "./CommandersCharge.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CommandersCharge.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CommandersCharge.json (json)")
    },
    "./CommieWhacker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CommieWhacker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CommieWhacker.json (json)")
    },
    "./CompoundBow.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CompoundBow.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CompoundBow.json (json)")
    },
    "./Cremator.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Cremator.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Cremator.json (json)")
    },
    "./Crossbow.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Crossbow.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Crossbow.json (json)")
    },
    "./CrowdControl.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CrowdControl.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CrowdControl.json (json)")
    },
    "./CrusaderPistol.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CrusaderPistol.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CrusaderPistol.json (json)")
    },
    "./CrushingBlow.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CrushingBlow.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CrushingBlow.json (json)")
    },
    "./CryoMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CryoMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CryoMine.json (json)")
    },
    "./CryogenicGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CryogenicGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CryogenicGrenade.json (json)")
    },
    "./Cryolator.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Cryolator.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Cryolator.json (json)")
    },
    "./CultistBlade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CultistBlade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CultistBlade.json (json)")
    },
    "./CultistDagger.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CultistDagger.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CultistDagger.json (json)")
    },
    "./CultistPickaxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/CultistPickaxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/CultistPickaxe.json (json)")
    },
    "./DeathTambo.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/DeathTambo.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/DeathTambo.json (json)")
    },
    "./DeathclawGauntlet.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/DeathclawGauntlet.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/DeathclawGauntlet.json (json)")
    },
    "./DisorderlyConduct.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/DisorderlyConduct.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/DisorderlyConduct.json (json)")
    },
    "./DoctorsOrders.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/DoctorsOrders.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/DoctorsOrders.json (json)")
    },
    "./Double-BarrelShotgun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Double-BarrelShotgun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Double-BarrelShotgun.json (json)")
    },
    "./Drill.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Drill.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Drill.json (json)")
    },
    "./Dross.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Dross.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Dross.json (json)")
    },
    "./Dynamite.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Dynamite.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Dynamite.json (json)")
    },
    "./DynamiteBundle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/DynamiteBundle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/DynamiteBundle.json (json)")
    },
    "./ElectroEnforcer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ElectroEnforcer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ElectroEnforcer.json (json)")
    },
    "./EnclavePlasma.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/EnclavePlasma.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/EnclavePlasma.json (json)")
    },
    "./ExplosiveBait.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ExplosiveBait.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ExplosiveBait.json (json)")
    },
    "./FaceBreaker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FaceBreaker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FaceBreaker.json (json)")
    },
    "./FancyPumpActionShotgun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FancyPumpActionShotgun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FancyPumpActionShotgun.json (json)")
    },
    "./FatMan.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FatMan.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FatMan.json (json)")
    },
    "./FinalWord.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FinalWord.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FinalWord.json (json)")
    },
    "./FireAxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FireAxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FireAxe.json (json)")
    },
    "./Flamer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Flamer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Flamer.json (json)")
    },
    "./FloaterFlamerGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FloaterFlamerGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FloaterFlamerGrenade.json (json)")
    },
    "./FloaterFreezerGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FloaterFreezerGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FloaterFreezerGrenade.json (json)")
    },
    "./FloaterGnasherGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FloaterGnasherGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FloaterGnasherGrenade.json (json)")
    },
    "./FoundationsVengeance.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FoundationsVengeance.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FoundationsVengeance.json (json)")
    },
    "./FragmentationGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FragmentationGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FragmentationGrenade.json (json)")
    },
    "./FragmentationGrenadeMIRV.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FragmentationGrenadeMIRV.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FragmentationGrenadeMIRV.json (json)")
    },
    "./FragmentationMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/FragmentationMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/FragmentationMine.json (json)")
    },
    "./GammaGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GammaGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GammaGun.json (json)")
    },
    "./GatlingGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GatlingGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GatlingGun.json (json)")
    },
    "./GatlingLaser.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GatlingLaser.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GatlingLaser.json (json)")
    },
    "./GatlingPlasma.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GatlingPlasma.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GatlingPlasma.json (json)")
    },
    "./Gauntlet.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Gauntlet.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Gauntlet.json (json)")
    },
    "./GaussMinigun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GaussMinigun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GaussMinigun.json (json)")
    },
    "./GaussPistol.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GaussPistol.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GaussPistol.json (json)")
    },
    "./GaussRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GaussRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GaussRifle.json (json)")
    },
    "./GaussShotgun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GaussShotgun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GaussShotgun.json (json)")
    },
    "./GolfClub.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GolfClub.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GolfClub.json (json)")
    },
    "./GrandFinale.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GrandFinale.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GrandFinale.json (json)")
    },
    "./GrantsSaber.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GrantsSaber.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GrantsSaber.json (json)")
    },
    "./GrognaksAxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GrognaksAxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GrognaksAxe.json (json)")
    },
    "./GuitarSword.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GuitarSword.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GuitarSword.json (json)")
    },
    "./GulperSmacker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GulperSmacker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GulperSmacker.json (json)")
    },
    "./GunthersBigIron.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/GunthersBigIron.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/GunthersBigIron.json (json)")
    },
    "./HandmadeRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/HandmadeRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/HandmadeRifle.json (json)")
    },
    "./HarpoonGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/HarpoonGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/HarpoonGun.json (json)")
    },
    "./Hatchet.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Hatchet.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Hatchet.json (json)")
    },
    "./Hellstorm.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Hellstorm.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Hellstorm.json (json)")
    },
    "./HuntingRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/HuntingRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/HuntingRifle.json (json)")
    },
    "./ImposterAssaultronHead.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ImposterAssaultronHead.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ImposterAssaultronHead.json (json)")
    },
    "./Kingfisher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Kingfisher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Kingfisher.json (json)")
    },
    "./Knuckles.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Knuckles.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Knuckles.json (json)")
    },
    "./Laser.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Laser.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Laser.json (json)")
    },
    "./LeadPipe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/LeadPipe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/LeadPipe.json (json)")
    },
    "./LeverActionRifle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/LeverActionRifle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/LeverActionRifle.json (json)")
    },
    "./LightMachineGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/LightMachineGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/LightMachineGun.json (json)")
    },
    "./Love-Tap.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Love-Tap.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Love-Tap.json (json)")
    },
    "./M79GrenadeLauncher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/M79GrenadeLauncher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/M79GrenadeLauncher.json (json)")
    },
    "./Machete.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Machete.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Machete.json (json)")
    },
    "./MeatCleaver.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MeatCleaver.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MeatCleaver.json (json)")
    },
    "./MeatHook.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MeatHook.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MeatHook.json (json)")
    },
    "./MechanicsBestFriend.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MechanicsBestFriend.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MechanicsBestFriend.json (json)")
    },
    "./MedicalMalpractice.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MedicalMalpractice.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MedicalMalpractice.json (json)")
    },
    "./MeteoriticSword.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MeteoriticSword.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MeteoriticSword.json (json)")
    },
    "./MindOverMatter.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MindOverMatter.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MindOverMatter.json (json)")
    },
    "./Minigun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Minigun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Minigun.json (json)")
    },
    "./MissileLauncher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MissileLauncher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MissileLauncher.json (json)")
    },
    "./MoleMinerGauntlet.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MoleMinerGauntlet.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MoleMinerGauntlet.json (json)")
    },
    "./MoleratBat.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MoleratBat.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MoleratBat.json (json)")
    },
    "./MolotovCocktail.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MolotovCocktail.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MolotovCocktail.json (json)")
    },
    "./MrHandyBuzzBlade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/MrHandyBuzzBlade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/MrHandyBuzzBlade.json (json)")
    },
    "./Multi-PurposeAxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Multi-PurposeAxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Multi-PurposeAxe.json (json)")
    },
    "./Nailer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Nailer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Nailer.json (json)")
    },
    "./NightLight.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/NightLight.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/NightLight.json (json)")
    },
    "./NoxiousFogCrawler.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/NoxiousFogCrawler.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/NoxiousFogCrawler.json (json)")
    },
    "./Nuka-Launcher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Nuka-Launcher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Nuka-Launcher.json (json)")
    },
    "./NukaGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/NukaGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/NukaGrenade.json (json)")
    },
    "./NukaQuantumGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/NukaQuantumGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/NukaQuantumGrenade.json (json)")
    },
    "./NukeMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/NukeMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/NukeMine.json (json)")
    },
    "./Oathbreaker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Oathbreaker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Oathbreaker.json (json)")
    },
    "./OldGuards10mmSMG.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/OldGuards10mmSMG.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/OldGuards10mmSMG.json (json)")
    },
    "./PepperShaker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PepperShaker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PepperShaker.json (json)")
    },
    "./Pickaxe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Pickaxe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Pickaxe.json (json)")
    },
    "./Pipe.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Pipe.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Pipe.json (json)")
    },
    "./PipeBolt-Action.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PipeBolt-Action.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PipeBolt-Action.json (json)")
    },
    "./PipeRevolver.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PipeRevolver.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PipeRevolver.json (json)")
    },
    "./PipeWrench.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PipeWrench.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PipeWrench.json (json)")
    },
    "./PiratePunch.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PiratePunch.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PiratePunch.json (json)")
    },
    "./Pitchfork.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Pitchfork.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Pitchfork.json (json)")
    },
    "./Plasma.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Plasma.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Plasma.json (json)")
    },
    "./PlasmaCaster.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PlasmaCaster.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PlasmaCaster.json (json)")
    },
    "./PlasmaCutter.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PlasmaCutter.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PlasmaCutter.json (json)")
    },
    "./PlasmaGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PlasmaGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PlasmaGrenade.json (json)")
    },
    "./PlasmaMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PlasmaMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PlasmaMine.json (json)")
    },
    "./PoleHook.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PoleHook.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PoleHook.json (json)")
    },
    "./PollysAssaultronHead.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PollysAssaultronHead.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PollysAssaultronHead.json (json)")
    },
    "./PoolCue.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PoolCue.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PoolCue.json (json)")
    },
    "./PowerFist.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PowerFist.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PowerFist.json (json)")
    },
    "./PulseGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PulseGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PulseGrenade.json (json)")
    },
    "./PulseMine.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PulseMine.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PulseMine.json (json)")
    },
    "./PumpActionShotgun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PumpActionShotgun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PumpActionShotgun.json (json)")
    },
    "./PumpkinGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/PumpkinGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/PumpkinGrenade.json (json)")
    },
    "./QuadLauncher.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/QuadLauncher.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/QuadLauncher.json (json)")
    },
    "./Radium.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Radium.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Radium.json (json)")
    },
    "./Railway.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Railway.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Railway.json (json)")
    },
    "./ResoluteVeteran.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ResoluteVeteran.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ResoluteVeteran.json (json)")
    },
    "./RevolutionarySword.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/RevolutionarySword.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/RevolutionarySword.json (json)")
    },
    "./Ripper.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Ripper.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Ripper.json (json)")
    },
    "./RollingPin.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/RollingPin.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/RollingPin.json (json)")
    },
    "./SaltoftheEarth.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SaltoftheEarth.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SaltoftheEarth.json (json)")
    },
    "./SalvagedAssaultronHead.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SalvagedAssaultronHead.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SalvagedAssaultronHead.json (json)")
    },
    "./SheepsquatchClub.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SheepsquatchClub.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SheepsquatchClub.json (json)")
    },
    "./SheepsquatchShard.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SheepsquatchShard.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SheepsquatchShard.json (json)")
    },
    "./SheepsquatchStaff.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SheepsquatchStaff.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SheepsquatchStaff.json (json)")
    },
    "./ShepherdsCrook.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ShepherdsCrook.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ShepherdsCrook.json (json)")
    },
    "./Shishkebab.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Shishkebab.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Shishkebab.json (json)")
    },
    "./Shovel.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Shovel.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Shovel.json (json)")
    },
    "./Sickle.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Sickle.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Sickle.json (json)")
    },
    "./SingleActionRevolver.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SingleActionRevolver.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SingleActionRevolver.json (json)")
    },
    "./SkiSword.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SkiSword.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SkiSword.json (json)")
    },
    "./Sledgehammer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Sledgehammer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Sledgehammer.json (json)")
    },
    "./SlugBuster.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SlugBuster.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SlugBuster.json (json)")
    },
    "./SmartFragmentationGrenade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SmartFragmentationGrenade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SmartFragmentationGrenade.json (json)")
    },
    "./SoleSurvivor.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SoleSurvivor.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SoleSurvivor.json (json)")
    },
    "./Spear.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Spear.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Spear.json (json)")
    },
    "./SubmachineGun.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SubmachineGun.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SubmachineGun.json (json)")
    },
    "./SuperSledge.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/SuperSledge.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/SuperSledge.json (json)")
    },
    "./Switchblade.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Switchblade.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Switchblade.json (json)")
    },
    "./Tenderizer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Tenderizer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Tenderizer.json (json)")
    },
    "./Tesla.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Tesla.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Tesla.json (json)")
    },
    "./TheActionHero.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheActionHero.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheActionHero.json (json)")
    },
    "./TheDebilitator.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheDebilitator.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheDebilitator.json (json)")
    },
    "./TheDragon.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheDragon.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheDragon.json (json)")
    },
    "./TheFarmhand.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheFarmhand.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheFarmhand.json (json)")
    },
    "./TheFixer.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheFixer.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheFixer.json (json)")
    },
    "./TheGuarantee.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheGuarantee.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheGuarantee.json (json)")
    },
    "./TheGutter.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheGutter.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheGutter.json (json)")
    },
    "./TheInvader.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheInvader.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheInvader.json (json)")
    },
    "./TheQuickFix.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheQuickFix.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheQuickFix.json (json)")
    },
    "./TheVATSUnknown.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TheVATSUnknown.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TheVATSUnknown.json (json)")
    },
    "./ThrowingKnife.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ThrowingKnife.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ThrowingKnife.json (json)")
    },
    "./TireIron.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/TireIron.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/TireIron.json (json)")
    },
    "./Tomahawk.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/Tomahawk.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/Tomahawk.json (json)")
    },
    "./ToneDeath.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ToneDeath.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ToneDeath.json (json)")
    },
    "./UltraciteGatlingLaser.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/UltraciteGatlingLaser.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/UltraciteGatlingLaser.json (json)")
    },
    "./UltraciteLaser.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/UltraciteLaser.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/UltraciteLaser.json (json)")
    },
    "./UnstoppableMonster.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/UnstoppableMonster.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/UnstoppableMonster.json (json)")
    },
    "./V63Zweihaender.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/V63Zweihaender.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/V63Zweihaender.json (json)")
    },
    "./WalkingCane.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WalkingCane.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WalkingCane.json (json)")
    },
    "./WarDrum.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WarDrum.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WarDrum.json (json)")
    },
    "./WarGlaive.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WarGlaive.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WarGlaive.json (json)")
    },
    "./WesternRevolver.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WesternRevolver.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WesternRevolver.json (json)")
    },
    "./WesternSpirit.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WesternSpirit.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WesternSpirit.json (json)")
    },
    "./WhackerSmacker.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WhackerSmacker.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WhackerSmacker.json (json)")
    },
    "./WhistleInTheDark.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/WhistleInTheDark.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/WhistleInTheDark.json (json)")
    },
    "./ZetasRevenge.json": {
        id: ()=>"[project]/src/resources/weaponTemplates/ZetasRevenge.json (json)",
        module: ()=>__turbopack_require__("[project]/src/resources/weaponTemplates/ZetasRevenge.json (json)")
    }
});
}}),
"[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getTemplates),
    "getTemplateById": (()=>getTemplateById),
    "getTemplateCopyById": (()=>getTemplateCopyById)
});
const templates = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/TemplatesRegister.js (require.context ../resources/weaponTemplates/**)"));
const templateList = templates.keys().map((template)=>templates(template)[0]);
function getTemplates() {
    return templateList;
}
function getTemplateCopyById(id) {
    // The amount of templates will never exceed several hundreds, so it is ok.
    for(let i = 0; i < templateList.length; i++){
        const template = templateList[i];
        if (template.id === id) {
            return JSON.parse(JSON.stringify(template));
        }
    }
    return null;
}
function getTemplateById(id) {
    for(let i = 0; i < templateList.length; i++){
        const template = templateList[i];
        if (template.id === id) {
            return template;
        }
    }
    return null;
}
}}),
"[project]/src/helpers/mods/DamageExtractor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageExtractor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Ammo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Proj.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Spell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/PerkProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)");
;
;
;
;
;
class DamageExtractor {
    damageTypes = {
        "electrical": {
            "id": "00060a80",
            "name": "dtElectrical",
            "full": "Electrical Damage"
        },
        "energy": {
            "id": "00060a81",
            "name": "dtEnergy",
            "full": "Energy Damage"
        },
        "radiation": {
            "id": "00060a85",
            "name": "dtRadiationExposure",
            "full": "Radiation Damage"
        },
        "fire": {
            "id": "00060a82",
            "name": "dtFire",
            "full": "Fire Damage"
        },
        "cryo": {
            "id": "00060a83",
            "name": "dtCryo",
            "full": "Cryo Damage"
        },
        "poison": {
            "id": "00060a84",
            "name": "dtPoison",
            "full": "Poison Damage"
        },
        "physical": {
            "id": "00060a87",
            "name": "dtPhysical",
            "full": "Physical Damage"
        },
        "pure": {
            "id": "00060a8d",
            "name": "dtPureDamage",
            "full": "Pure Damage"
        }
    };
    // Based on resistance
    resTypes = {
        '000002ea': this.damageTypes['radiation'],
        '000002eb': this.damageTypes['energy'],
        '000002e7': this.damageTypes['cryo'],
        '000002e4': this.damageTypes['poison'],
        '000002e5': this.damageTypes['fire'],
        '000002e6': this.damageTypes['electrical'],
        '000002e3': 'DamageResistance'
    };
    constructor(extractPlacedObjects = true){
        // Some of the weapon's projectiles contain weapons inside
        if (extractPlacedObjects) {
            this.tomahawk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTemplateCopyById"])('000042f2');
            this.throwingKnife = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTemplateCopyById"])('003879a3');
            this.extractFromTemplate(this.tomahawk);
            this.extractFromTemplate(this.throwingKnife);
        }
    }
    extract(templates) {
        for(let i = 0; i < templates.length; i++){
            this.extractFromTemplate(templates[i]);
        }
    }
    extractFromTemplate(template) {
        // Ammo
        const ammoId = template.ammoId[1];
        const curWeapId = template.id;
        if (!curWeapId) {
            throw new Error("Weapon has no id");
        }
        if (ammoId && ammoId !== '00000000' && ammoId !== '') {
            const ammoData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(ammoId);
            this.extractAmmo(ammoData, template.damageData, "Ammo: " + ammoId, curWeapId);
        }
        // Additional Proj
        const projIds = template.projId[1];
        for(let i = 0; i < projIds.length; i++){
            const projId = projIds[i];
            if (projId !== '00000000' && projId !== '') {
                if (typeof projId !== typeof '') {
                    throw new Error("ProjId is not an Id");
                }
                const projData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(projId);
                this.extractProj(projData, template.damageData, "Projectile: " + projId, false, curWeapId);
            }
        }
        // Additional Mod Effects
        const effectIds = template.adEffects[1];
        for(let i = 0; i < effectIds.length; i++){
            const effectId = effectIds[i];
            if (effectId !== '00000000' && effectId !== '') {
                if (typeof effectId !== typeof '') {
                    throw new Error("EffectId is not an Id");
                }
                this.extractEnch(effectId, template.damageData, "Spell: " + effectId, false, curWeapId, 0, 0);
            }
        }
    }
    extractAmmo(ammo, result, parent, curWeapId) {
        const ammoDamage = ammo.damage;
        const ammoId = ammo.id;
        if (!parent) {
            parent = "Ammo: " + ammoId;
        }
        if (ammoDamage > 0) {
            if (ammo.ammo_type !== 'Ballistic') {
                throw new Error("Ammo type is not 'Ballistic'");
            }
            const dTypes = this.damageTypes.physical;
            this.addDamageNode(result, "Ammo", false, "Ammo Damage", dTypes.name, dTypes.id, dTypes.full, 0, ammoDamage, 0, 0, 0, 0, parent, ammoId, curWeapId, "No", false, false, false);
        }
        const projId = ammo.projectile;
        if (projId && projId !== '' && projId !== '00000000') {
            const projData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(projId);
            this.extractProj(projData, result, parent, false, curWeapId);
        }
    }
    extractProj(proj, result, parent, destructible, curWeapId) {
        this.extractExp(proj.destructible, result, parent, true, curWeapId);
        this.extractExp(proj.expl, result, parent, destructible, curWeapId); // In case if some inner proj comes from destructible parent
    }
    resolveAndExtractProj(projId, result, parent, destructible, curWeapId) {
        if (projId !== '' && projId !== '00000000') {
            if (typeof projId !== typeof '') {
                throw new Error("Proj id is not an id");
            }
            const projData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(projId);
            this.extractProj(projData, result, parent, destructible, curWeapId);
        }
    }
    extractEnch(ench, result, parent, destructible, curWeapId, time = 0, interval = 0) {
        if (ench && typeof ench !== typeof '') {
            throw new Error("Enchantment is not an id");
        }
        ench = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(ench);
        let perk = ench.perk;
        this.extractPerk(perk, result, parent, destructible, curWeapId);
        let duration = ench.duration;
        if (duration && duration > 0) {
            throw new Error("Enchantment has duration");
        }
        let enchTime = ench.time;
        if (!enchTime) {
            enchTime = 0;
        }
        if (enchTime === 0) {
            enchTime = time;
        }
        this.extractEffects(ench.mag_effects, ench.id, result, parent, destructible, curWeapId, enchTime, interval);
    }
    extractEffects(effects, enchId, result, parent, destructible, curWeapId, time, interval) {
        if (!effects) {
            return;
        }
        let existedEffects = new Set();
        for(let e = 0; e < effects.length; e++){
            const effect = effects[e];
            // Effect part
            let magnitude = effect.magnitude;
            let curv = effect.d_curv;
            let area = effect.area;
            let duration = effect.duration;
            let globMagnitude = effect.glob_magnitude;
            let globDuration = effect.glob_duration;
            let onlyPlayer = effect.only_player;
            if (!onlyPlayer) {
                onlyPlayer = 'No';
            }
            // MEffect
            const mEffect = effect.m_effect;
            if (existedEffects.has(mEffect.id)) {
                continue;
            }
            // Crit check
            const name = mEffect.name;
            const full = mEffect.full;
            let crit = false;
            if (name.toLowerCase().includes("crit") || full.toLowerCase().includes("crit")) {
                crit = true;
            }
            // Blood check
            let blood = false;
            if (name.toLowerCase().includes("bleed") || full.toLowerCase().includes("bleed")) {
                blood = true;
            }
            existedEffects.add(mEffect.id);
            this.extractPerk(mEffect.perk, result, parent, destructible, curWeapId);
            this.extractExp(mEffect.explosion, result, parent, destructible, curWeapId);
            const proj = mEffect.projectile;
            if (proj !== '00000000') {
                throw new Error("Proj / Expl found in mag effects");
            }
            if (magnitude !== 0 || curv !== '' && curv !== 0 || globMagnitude !== '') {
                if (globDuration && globDuration !== '' && globDuration !== '00000000') {
                    globDuration = globDuration.value;
                } else {
                    globDuration = 0;
                }
                if (globDuration > 0) {
                    duration = globDuration;
                }
                if (duration > 0) {
                    time = duration;
                }
                if (globMagnitude && globMagnitude !== '' && globMagnitude !== '00000000') {
                    globMagnitude = globMagnitude.value;
                } else {
                    globMagnitude = 0;
                }
                if (globMagnitude > 0) {
                    magnitude = globMagnitude;
                }
                curv = this.resolveCurv(curv);
                if (curv === 0 && magnitude === 0) {
                    continue;
                }
                let dType = this.findEffectDamageType(mEffect, enchId, curWeapId);
                if (dType && onlyPlayer === 'No') {
                    let name = '';
                    if (destructible) {
                        name = "Destructible Spell";
                    } else {
                        name = "Spell";
                    }
                    // Armor penetration
                    if (dType.id === '00097341') {
                        name = "Armor Penetration";
                    } else if (dType.id === '0018eee1' || dType.id === '00312d66') {
                        name = "Damage Bonus";
                    }
                    let source = '';
                    if (crit) {
                        source = "Crit Spell";
                    } else {
                        source = "Spell";
                    }
                    this.addDamageNode(result, source, destructible, name, dType['name'], dType['id'], dType['full'], curv, 0, magnitude, time, interval, area, parent, mEffect.id, curWeapId, onlyPlayer, false, crit, blood);
                }
            }
        }
    }
    findEffectDamageType(mEffect, enchId, curWeapId) {
        if (mEffect['id'] === '00239552' || mEffect['id'] === '00239550') {
            return null;
        }
        let result = mEffect['d_type']['id'];
        if (result) {
            return mEffect['d_type'];
        }
        let resId = mEffect['resist']['id'];
        if (resId) {
            return this.resTypes[resId];
        }
        let actor1 = mEffect['actor_value1']['id'];
        if (actor1 === '000002e3') {
            return null;
        } else if (actor1 === '00097341') {
            return mEffect['actor_value1'];
        } else if (actor1 === '0018eee1') {
            return mEffect['actor_value1'];
        } else if (actor1 === '00312d66') {
            return mEffect['actor_value1'];
        } else if (actor1 === '000002d4') {
            console.log("Actor: " + mEffect.actor_value1.name + " WId: " + curWeapId + " AId: " + mEffect.actor_value1.id + " EId: " + enchId);
        }
        let actor2 = mEffect['actor_value2']['name'];
        if (actor2) {
            throw new Error("Actor2 Exists");
        }
        return null;
    }
    extractObject(obj, result, parent, destructible, curWeapId) {
        if (!obj || obj === '' || obj === '00000000' || obj === '0017a580') {
            return;
        }
        if (obj['type'] === 'WEAP') {
            const wId = obj['value']['id'];
            let damageData = null;
            if (curWeapId === wId) {
                return;
            } else if (wId === '000042f2') {
                damageData = this.tomahawk.damageData;
            } else if (wId === '003879a3') {
                damageData = this.throwingKnife.damageData;
            } else {
                throw new Error("Unknown weapon id: " + wId);
            }
            for(const property in damageData){
                const damages = damageData[property];
                for(let i = 0; i < damages.length; i++){
                    const damage = damages[i];
                    this.addDamageNode(result, damage['source'], damage['destructible'], damage['view_name'], damage['type_name'], damage['type_id'], damage['type_full_name'], damage['curv'], damage['value'], damage['magnitude'], damage['time'], damage['interval'], 0, parent, wId, curWeapId, "No", false, false, false);
                }
            }
        } else if (obj['type'] === 'HAZD') {
            const hazd = obj['value'];
            this.extractEnch(hazd['effect'], result, parent, destructible, curWeapId, hazd['lifeTime'], hazd['interval']);
        } else if (obj['type'] === 'MSTT') {
            const value = obj['value'];
            const spell = value['spell'];
            if (spell && spell !== '' && spell !== '00000000') {
                throw new Error("Spell in explosive object");
            }
            this.extractExp(value['expl'], result, parent, destructible, curWeapId);
            const hazd = value['hazd'];
            this.extractEnch(hazd['effect'], result, parent, destructible, curWeapId, hazd['lifeTime'], hazd['interval']);
        } else if (obj['type'] === 'EXPL') {
            this.extractExp(obj['value'], result, parent, destructible, curWeapId);
        } else {
            throw new Error("Unknown object type");
        }
    }
    e_type_name = {
        256: "Ability",
        512: "Function"
    };
    v_type_name = {
        1: "Float",
        3: "List",
        4: "Activate",
        5: "Spell",
        8: "Actor",
        9: "Item"
    };
    operation = {
        1: "SetValue",
        2: "AddValue",
        3: "MulValue",
        5: "MulAddValue",
        6: "Abs",
        8: "AddItem",
        9: "AddActivate",
        10: "SetSpell",
        12: "AddValueToActor",
        13: "MultiplyActorValueMultiply",
        14: "MulAddValueToActor",
        16: "SetItem"
    };
    // TODO: LimbBash and WeaponAttackDamage for v_type 1 - 'Float'
    // 3 - 'List' is not presented, 4 - 'Activate' is not presented, 9 - 'Item' is not presented
    // 5 - 'Spell' is solved, 8 - 'Actor' is solved.
    // Check this - 00621a92 0077176b 198 1 (Zeta's Revenge)
    skipFunctions = [
        "198",
        "OutgoingLimbBashDamage",
        "OutgoingLimbDamage",
        "MaxConsecutiveHits",
        "SetDamageOnConsecutiveHits",
        "LossCondition",
        "WeaponAttackDamage"
    ];
    extractPerk(perkId, result, parent, destructible, curWeapId) {
        if (perkId && perkId !== '00000000' && perkId !== '') {
            const perk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(perkId);
            const effects = perk.effects;
            for(let i = 0; i < effects.length; i++){
                const effect = effects[i];
                if (effect.v_type === 1) {
                // if (this.skipFunctions.includes(effect.entry)) {
                //     continue;
                // }
                } else if (effect.v_type === 3) {
                    throw new Error("Found v_type 3");
                } else if (effect.v_type === 4) {
                    throw new Error("Found v_type 4");
                } else if (effect.v_type === 5) {
                    this.extractEnch(effect.value, result, parent, destructible, curWeapId);
                } else if (effect.v_type === 8) {
                // console.log("Perk8: " + curWeapId + " " + perkId + " " + effect.entry + " " + effect.value.value);
                } else if (effect.v_type === 9) {
                    throw new Error("Found v_type 9");
                }
            }
        }
    }
    extractExp(exp, result, parent, destructible, curWeapId) {
        if (!exp || exp === '' || exp === '00000000') {
            return;
        }
        if (typeof exp !== typeof {}) {
            throw new Error("Explosive is not an object but id: " + exp);
        }
        const ench = exp.enchantment;
        if (ench && ench !== '' && ench !== '00000000') {
            this.extractEnch(ench, result, parent, destructible, curWeapId);
        }
        this.resolveAndExtractProj(exp.projectile, result, parent, destructible, curWeapId);
        this.extractObject(exp.object, result, parent, destructible, curWeapId);
        this.dDamage(exp, result, destructible, parent, curWeapId);
        const damageType = this.damageTypes.physical;
        const damage = exp.damage;
        const expCurv = exp.exp_curv;
        let curv = 0;
        if (expCurv !== '' && expCurv !== '00000000') {
            curv = this.resolveCurv(expCurv);
        }
        let name = '';
        if (destructible) {
            name = "Destructible Explosive Damage";
        } else {
            name = "Explosive Damage";
        }
        this.addDamageNode(result, "Projectile", destructible, name, damageType.name, damageType.id, damageType.full, curv, damage, 0, 0, 0, 0, parent, exp.id, curWeapId, "No", true, false, false);
        if (exp.damage_mult > 0) {
            this.addDamageNode(result, "Projectile", destructible, "Explosive Damage Multiplier", "ExpDamageMult", "", "", 0, exp.damage_mult, 0, 0, 0, 0, parent, exp.id, curWeapId, "No", true, false, false);
        }
    }
    addDamageNode(result, source, destructible, view_name, type_name, type_id, type_full_name, curv, value, magnitude, time, interval, area, parent, directParent, weapId, only_player, exp, crit, blood) {
        if (curv === 0 && magnitude === 0 && value === 0) {
            return;
        }
        if (crit && parent !== "Base Crit") {
            console.log("Spell Crit is found");
        }
        const obj = {
            "destructible": destructible,
            "source": source,
            "view_name": view_name,
            "type_name": type_name,
            "type_id": type_id,
            "weaponId": weapId,
            "type_full_name": type_full_name,
            "curv": curv,
            "value": value,
            "magnitude": magnitude,
            "time": time,
            "area": area,
            "interval": interval,
            "parent": parent,
            "directParent": directParent,
            "only_player": only_player,
            "exp": exp,
            "crit": crit,
            "blood": blood
        };
        const entries = result[source];
        if (!entries) {
            result[source] = [
                obj
            ];
        } else {
            entries.push(obj);
        }
    }
    resolveCurv(expCurv) {
        if (expCurv !== '' && expCurv !== '00000000') {
            if (typeof expCurv === typeof '') {
                console.log("ExpCurv: " + expCurv);
                throw new Error("expCurv must be already evaluated: " + expCurv);
            /*
                let curv = expCurv.split("\n");
                try {
                    curv = eval(curv[1])["curve"];
                    return curv[curv.length - 1]['y'];
                } catch(error) {
                    return 0;
                }
                */ } else {
                return expCurv; // Consider it is a number.
            }
        } else {
            return 0;
        }
    }
    dDamage(explosive, result, destructible, parent, weaponId) {
        let value = explosive['d_value'];
        if (Math.abs(value) < 0.01) {
            value = 0;
        }
        let curv = explosive['d_curv'];
        if (value > 0 || curv !== '' && curv !== '00000000') {
            curv = this.resolveCurv(curv);
            let dType = explosive.d_type;
            if (dType === '' || dType === '00000000') {
                dType = this.damageTypes.physical;
            }
            let name = '';
            if (destructible) {
                name = "Destructible Damage";
            } else {
                name = "Damage";
            }
            this.addDamageNode(result, "Projectile", destructible, name, dType.name, dType.id, dType.full, curv, value, 0, 0, 0, 0, parent, explosive.id, weaponId, "No", true, false, false);
        }
    }
}
}}),
"[project]/src/helpers/CritView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CritView),
    "getCritDamages": (()=>getCritDamages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageExtractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/AdditionalDView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const damageExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
function CritView({ crits, weapId }) {
    if (!crits || crits.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let allItems = getCritDamages(crits, weapId, true);
    if (allItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "m-1 p-1",
                children: "Critical Hit"
            }, void 0, false, {
                fileName: "[project]/src/helpers/CritView.js",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "m-1 d-flex justify-content-center",
                children: allItems
            }, void 0, false, {
                fileName: "[project]/src/helpers/CritView.js",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getCritDamages(crits, weapId, visual = false) {
    let allItems = [];
    if (!crits) {
        return allItems;
    }
    for(let i = 0; i < crits.length; i++){
        let result = {};
        const ench = crits[i];
        damageExtractor.extractEnch(ench, result, "Base Crit", false, weapId);
        for(const property in result){
            const spells = result[property];
            if (visual) {
                allItems.push(getItems(spells));
            } else {
                allItems.push(spells);
            }
        }
    }
    return allItems;
}
function getItems(crits) {
    let result = [];
    for(let i = 0; i < crits.length; i++){
        const damage = crits[i];
        const [symbol, style] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$AdditionalDView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolStyle"])(damage.type_name);
        let value = damage.curv;
        if (value === 0) {
            value = damage.value;
            if (value === 0) {
                value = damage.magnitude;
            }
        }
        if (damage.time > 0) {
            value += " - " + damage.time + "s";
        }
        if (damage.interval > 0) {
            value += " (" + damage.interval.toFixed(1) + ")";
        }
        result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])(style, '10rem', symbol, value, i));
    }
    return result;
}
}}),
"[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Apply": (()=>Apply)
});
class Apply {
    checkOp(mod, weaponId, expected) {
        if (mod.op !== expected) {
            throw new Error("Mult must have '" + expected + "' op, but not '" + mod.op + "', " + "WeaponId: " + weaponId + " Prop: " + mod.prop);
        }
    }
    getCurvValue(mod) {
        if (!mod.curv || mod.curv === '') {
            return 0;
        } else {
            const val1 = parseFloat(mod.curv);
            if (!val1) {
                return 0;
            }
            return val1;
        }
    }
    getValue(mod) {
        const val1 = this.getCurvValue(mod);
        const val2 = parseFloat(mod.val1);
        const val3 = parseFloat(mod.val2);
        if (val1 !== 0) {
            return val1;
        } else if (val2 !== 0) {
            return val2;
        } else {
            return val3;
        }
    }
    mullAddFromTo(from, to, value, apply, allowNegative = false) {
        if (apply) {
            to[1] += from[0] * value;
        } else {
            to[1] -= from[0] * value;
        }
        if (to[1] < 0 && !allowNegative) {
            to[1] = 0;
        }
    }
    mullAdd(field, value, apply, allowNegative = false) {
        this.mullAddFromTo(field, field, value, apply, allowNegative);
    }
    add(field, value, apply, allowNegative = false, index = 1) {
        if (apply) {
            field[index] += value;
        } else {
            field[index] -= value;
        }
        if (field[index] < 0 && !allowNegative) {
            field[index] = 0;
        }
    }
    addToProperty(obj, property, value, apply, allowNegative = false) {
        if (apply) {
            obj[property] += value;
        } else {
            obj[property] -= value;
        }
        if (obj[property] < 0 && !allowNegative) {
            obj[property] = 0;
        }
    }
    mullAddToProperty(obj, property, value, apply) {
        if (apply) {
            obj[property] += obj[property] * value;
        } else {
            obj[property] /= value + 1;
        }
    }
    setToProperty(obj, property, value) {
        obj[property] = value;
    }
    set(field, value, apply, allowNegative = false) {
        if (apply) {
            field[1] = value;
            if (field[1] < 0 && !allowNegative) {
                field[1] = 0;
            }
        } else {
            field[1] = field[0];
        }
    }
    mullSet(field, value, apply, allowNegative = false) {
        if (apply) {
            field[1] = field[0] * value;
            if (field[1] < 0 && !allowNegative) {
                field[1] = 0;
            }
        } else {
            field[1] = field[0];
        }
    }
    addSetMullAdd(field, value, op, apply, allowNegative = false) {
        if (op === 'Add') {
            this.add(field, value, apply, allowNegative);
        } else if (op === 'MullAdd') {
            this.mullAdd(field, value, apply, allowNegative);
        } else if (op === 'Set') {
            this.set(field, value, apply, allowNegative);
        }
    }
    isChangingDefaultDamage() {
        return false;
    }
}
}}),
"[project]/src/helpers/mods/appliers/DamageBonusMult.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DamageBonusMult": (()=>DamageBonusMult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class DamageBonusMult extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const mult = super.getValue(mod);
        super.addSetMullAdd(template.bonusMult, mult, mod.op, apply, true);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        super.checkOp(mod, "legendary", "Add");
        const value = super.getValue(mod);
        if (update) {
            return false;
        }
        // Expected that every particular legendary has only one damage bonus multiplier
        wSpec.legendary[starIndex][1] = apply ? value * 100 : 0;
        wSpec.legendary[starIndex][2] = apply ? "BDB" : "";
    }
}
}}),
"[project]/src/helpers/mods/appliers/Ammo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Ammo": (()=>Ammo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Ammo.js [app-ssr] (ecmascript)");
;
;
class Ammo extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Set");
        if (apply) {
            template.ammoId[1] = mod.val1.split(" / ")[0];
        } else {
            template.ammoId[1] = template.ammoId[0];
        }
        const ammoData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(template.ammoId[1]);
        template.ammoType = {
            name: ammoData.full,
            type: ammoData.ammo_type,
            codeName: ammoData.name
        };
    }
    isChangingDefaultDamage() {
        return true;
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Expected we do not have legendary which changes ammo type
        throw new Error("Legendary changes ammo type");
    }
}
}}),
"[project]/src/helpers/mods/appliers/IsAutomatic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IsAutomatic": (()=>IsAutomatic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class IsAutomatic extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Set");
        if (apply) {
            template.isAuto[1] = parseInt(mod.val1);
        } else {
            template.isAuto[1] = template.isAuto[0];
        }
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        throw new Error("Legendary changes auto fire");
    }
}
}}),
"[project]/src/helpers/mods/appliers/Speed.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Speed": (()=>Speed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class Speed extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.speed, value, mod.op, apply);
        template.autoRate[1] = template.defRate * template.speed[1];
        template.manualRate[1] = template.manualRate[1] / template.speed[1];
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "speed", value, apply);
    }
}
}}),
"[project]/src/helpers/mods/appliers/APCost.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APCost": (()=>APCost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class APCost extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.ap, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
    // Currently there is no reason to change ap
    }
}
}}),
"[project]/src/helpers/mods/appliers/Weight.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Weight": (()=>Weight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class Weight extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.weight, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
    // Currently there is no reason to change weight
    }
}
}}),
"[project]/src/helpers/mods/appliers/AttackDelay.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttackDelay": (()=>AttackDelay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class AttackDelay extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.manualRate, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Expected we do not have legendary which changes attack delay
        throw new Error("Legendary changes attack delay");
    }
}
}}),
"[project]/src/helpers/mods/appliers/CriticalDamageMult.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CriticalDamageMult": (()=>CriticalDamageMult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class CriticalDamageMult extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod) * 100.0;
        if (apply) {
            template.crit[1] += value;
        } else {
            template.crit[1] -= value;
        }
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "Add");
        const value = super.getValue(mod) * 100;
        super.addToProperty(wSpec, "crit", value, apply);
    }
}
}}),
"[project]/src/helpers/mods/appliers/AmmoCapacity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AmmoCapacity": (()=>AmmoCapacity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class AmmoCapacity extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.capacity, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "ammoCapacity", value, apply);
        // Protect if a user change the number
        wSpec.ammoCapacity = parseInt(wSpec.ammoCapacity);
        if (wSpec.ammoCapacity < 1) {
            wSpec.ammoCapacity = 1;
        }
    }
}
}}),
"[project]/src/helpers/mods/appliers/ReloadSpeed.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ReloadSpeed": (()=>ReloadSpeed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class ReloadSpeed extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.reloadSpeed, value, mod.op, apply);
        template.reloadTime[1] = template.reloadTime[0] / template.reloadSpeed[1];
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "reloadSpeed", value, apply);
    }
}
}}),
"[project]/src/helpers/mods/appliers/OverrideProjectile.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OverrideProjectile": (()=>OverrideProjectile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class OverrideProjectile extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const field = template.projId;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                field[1] = [
                    value
                ];
            } else {
                field[1] = [
                    ...field[0]
                ];
            }
        } else if (mod.op === "MullAdd" || mod.op === "Add") {
            if (apply) {
                field[1].push(value);
            } else {
                // Avoid removing default one if it is previously was overridden by 'set'
                if (field[1].toString() === field[0].toString()) {
                    return;
                }
                const index = field[1].indexOf(value);
                if (index > -1) {
                    field[1].splice(index, 1);
                }
            }
        }
    }
    isChangingDefaultDamage() {
        return true;
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        throw new Error("Legendary changes projectile");
    }
}
}}),
"[project]/src/helpers/mods/appliers/HasRepeatableSingleFire.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HasRepeatableSingleFire": (()=>HasRepeatableSingleFire)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class HasRepeatableSingleFire extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Set");
        if (apply) {
            template.isAuto[1] = 1;
        } else {
            template.isAuto[1] = template.isAuto[0];
        }
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        throw new Error("Legendary changes auto fire");
    }
}
}}),
"[project]/src/helpers/mods/appliers/ActorValues.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ActorValues": (()=>ActorValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class ActorValues extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    getValue(mod, weapId) {
        super.checkOp(mod, weapId, "Add");
        let value = super.getCurvValue(mod);
        if (value === 0) {
            value = parseFloat(mod.val2);
        }
        return value;
    }
    applyValue(mod, obj, name, value, apply, isLegendary = false) {
        switch(mod.val1){
            case '00058d36 / STAT_DmgVsScorched':
                this.damageToCreature(obj, name, value, apply, "Scorched");
                break;
            case '0018eeee / STAT_DmgVsGhouls':
                this.damageToCreature(obj, name, value, apply, "Ghoul");
                break;
            case '00674c85 / STAT_DmgVsMoleMiners':
                this.damageToCreature(obj, name, value, apply, "MoleMiner");
                break;
            case '0018eef2 / STAT_DmgVsHumans':
                this.damageToCreature(obj, name, value, apply, "Human");
                break;
            case '004f5775 / STAT_DmgVsBugs':
                this.damageToCreature(obj, name, value, apply, "Bug");
                break;
            case '0018eeed / STAT_DmgVsSuperMutants':
                this.damageToCreature(obj, name, value, apply, "SuperMutant");
                break;
            case '0018eeef / STAT_DmgVsRobots':
                this.damageToCreature(obj, name, value, apply, "Robot");
                break;
            case '00674c84 / STAT_DmgVsMolerats':
                this.damageToCreature(obj, name, value, apply, "Molerat");
                break;
            case '00690c78 / STAT_DmgVsCryptids':
                this.damageToCreature(obj, name, value, apply, "Cryptid");
                break;
            case '0018eeec / STAT_DmgVsMirelurks':
                this.damageToCreature(obj, name, value, apply, "Mirelurk");
                break;
            case '0018eeeb / STAT_DmgVsAnimals':
                this.damageToCreature(obj, name, value, apply, "Animal");
                break;
            case '00097341 / ArmorPenetration':
                if (isLegendary) {
                    super.addToProperty(obj, "aa", value, apply);
                } else {
                    super.add(obj.antiArmor, value, apply);
                }
                break;
            case '006e1052 / STAT_SneakAttackBonus':
                if (isLegendary) {
                    super.addToProperty(obj, "sneak", value, apply);
                } else {
                    super.add(obj.sneak, value, apply);
                }
                break;
            case '007a6c35 / LGND_ExplosivePayload':
                if (isLegendary) {
                    super.addToProperty(obj, "exp", value, apply);
                } else {
                    this.checkZero(obj.exp, obj.id);
                    obj.exp[1] = apply ? value : obj.exp[0];
                }
                break;
            case '001ef5d9 / STAT_DmgLimbs':
                if (isLegendary) {
                    super.addToProperty(obj, "cripple", value, apply);
                } else {
                    super.add(obj.cripple, value, apply);
                }
                break;
            case '006c1fa9 / STAT_DmgPowerAttack':
                if (isLegendary) {
                    super.addToProperty(obj, "powerAttack", value, apply);
                } else {
                    super.add(obj.powerAttack, value, apply);
                }
                break;
            case '006c2221 / STAT_DmgBash':
                if (isLegendary) {
                    super.addToProperty(obj, "bash", value, apply);
                } else {
                    super.add(obj.bash, value, apply);
                }
                break;
            case '00527f83 / LGND_ExecuteDmg':
                if (isLegendary) {
                    super.addToProperty(obj, "totalD", value, apply);
                } else {
                    super.add(obj.totalD, value, apply);
                }
                break;
            case '000002c2 / Strength':
                if (isLegendary) {
                    super.addToProperty(obj, "strPoints", value, apply);
                } else {
                    super.add(obj.strPoints, value, apply);
                }
                break;
            default:
                break;
        }
    }
    apply(template, mod, apply) {
        const value = this.getValue(mod, template.id);
        this.applyValue(mod, template, "creature", value, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        const value = this.getValue(mod, "Legendary");
        this.applyValue(mod, wSpec, "creature", value, apply, true);
    }
    damageToCreature(obj, property, value, apply, name) {
        const creatures = obj[property];
        let applied = false;
        let needToRemove = -1;
        // Apply to existing one
        for(let i = 0; i < creatures.length; i++){
            const creature = creatures[i];
            if (creature.name === name) {
                applied = true;
                if (apply) {
                    creature.value += value;
                } else {
                    creature.value -= value;
                }
                if (creature.value <= 0) {
                    needToRemove = i;
                }
                break;
            }
        }
        // Remove existed because the value of it less than or equal to zero
        if (needToRemove > -1) {
            creatures.splice(needToRemove, 1);
        }
        // Add new one
        if (apply && !applied) {
            creatures.push({
                "name": name,
                "value": value
            });
        }
    }
    checkZero(field, weaponId) {
        if (field[1] > 0) {
            console.log("ActorValues already has a value: " + weaponId);
        }
    }
}
}}),
"[project]/src/helpers/mods/appliers/Keywords.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Keywords": (()=>Keywords)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class Keywords extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    addTag(template, tag, apply) {
        if (apply) {
            template.tags.push(tag);
        } else {
            let k = -1;
            for(let i = 0; i < template.tags.length; i++){
                if (template.tags[i] === tag) {
                    k = i;
                    break;
                }
            }
            if (k > -1) {
                template.tags.splice(k, 1);
            }
        }
    }
    print(name) {
        if (!name.includes("IsAmmoType") && !name.includes("dn_Has") && !name.includes("HasS") && !name.includes("legendary") && !name.includes("s_30") && !name.includes("Anims") && !name.includes("remapNode") && !name.includes("CustomItem") && !name.includes("Legendary") && !name.includes("ATX") && !name.includes("UI_") && !name.includes("s_35") && !name.includes("ma_") && !name.includes("s_20") && !name.includes("FeaturedItem") && !name.includes("00000000") && !name.includes("WeaponTypePistol") && !name.includes("WeaponTypeRifle") && !name.includes("VATSWeaponLongBurst") && !name.includes("DamageType") && !name.includes("s_00")) {
            console.log("Keywords: " + name);
        }
    }
    apply(template, mod, apply) {
        const name = mod.val1;
        switch(name){
            case '005c3874 / IsAmmoType_FusionCore':
            case '005dc32d / IsAmmoType_FusionCore_AntiScorchBeast':
                this.addTag(template, "FusionCore", apply);
                return;
            case '00060a81 / dtEnergy':
            case '0033a7c9 / WeaponTypeEnergy':
                this.addTag(template, "Energy", apply);
                return;
            case '001e05d6 / HasSilencer':
                this.addTag(template, "HasSilencer", apply);
                return;
            case '0004a0a2 / WeaponTypeAutomatic':
            case '0034087a / WeaponTypeAutomaticRifle':
                this.addTag(template, "Automatic", apply);
                if (apply) {
                    template.isAuto[1] = 1;
                } else {
                    template.isAuto[1] = template.isAuto[0];
                }
                return;
            default:
                break;
        }
        // Some weapons like MG-42 can have 'Rifle' keyword we skip it to not change its type
        if (template.type[0] !== 'Rifle' && template.type[0] !== 'Pistol') {
            return;
        }
        switch(name){
            case '0004a0a1 / WeaponTypeRifle':
                template.type[1] = apply ? "Rifle" : template.type[0];
                break;
            case '0004a0a0 / WeaponTypePistol':
                template.type[1] = apply ? "Pistol" : template.type[0];
                break;
            default:
                break;
        }
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        const name = mod.val1;
        if (name.includes("dt") || name.includes("WeaponType")) {
            throw new Error("Legendary changes weapon or damage type");
        }
    }
}
}}),
"[project]/src/helpers/mods/appliers/CritEffect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CritEffect": (()=>CritEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class CritEffect extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const field = template.crSpellId;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                field[1] = [
                    value
                ];
            } else {
                field[1] = [
                    ...field[0]
                ];
            }
        } else if (mod.op === "Add" || mod.op === "MullAdd") {
            if (apply) {
                field[1].push(value);
            } else {
                // Avoid removing default one if it is previously was overridden by 'set'
                if (field[1].toString() === field[0].toString()) {
                    return;
                }
                const index = field[1].indexOf(value);
                if (index > -1) {
                    field[1].splice(index, 1);
                }
            }
        }
    }
    isChangingDefaultDamage() {
        return true;
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Expected we do not have legendary which changes crit effect
        throw new Error("Legendary changes crit effect");
    }
}
}}),
"[project]/src/helpers/mods/appliers/AttackDamage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttackDamage": (()=>AttackDamage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class AttackDamage extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.bbDamage, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Expected we do not have legendary which changes attack damage
        throw new Error("Legendary changes attack damage");
    }
}
}}),
"[project]/src/helpers/mods/appliers/DamageTypeValues.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DamageTypeValues": (()=>DamageTypeValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class DamageTypeValues extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        let value = super.getCurvValue(mod);
        if (value === 0) {
            value = parseFloat(mod.val2);
        }
        let from = null;
        switch(mod.val1){
            case '00060a81 / dtEnergy':
                from = template.ebDamage[0] === 0 ? template.bbDamage : template.ebDamage;
                this.setDamage(template.ebDamage, from, value, mod.op, apply);
                break;
            case '00060a82 / dtFire':
                from = template.fbDamage[0] === 0 ? template.bbDamage : template.fbDamage;
                this.setDamage(template.fbDamage, from, value, mod.op, apply);
                break;
            case '00060a84 / dtPoison':
                from = template.pbDamage[0] === 0 ? template.bbDamage : template.pbDamage;
                this.setDamage(template.pbDamage, from, value, mod.op, apply);
                break;
            case '00060a83 / dtCryo':
                from = template.cbDamage[0] === 0 ? template.bbDamage : template.cbDamage;
                this.setDamage(template.cbDamage, from, value, mod.op, apply);
                break;
            case '00060a85 / dtRadiationExposure':
                from = template.rbDamage[0] === 0 ? template.bbDamage : template.rbDamage;
                this.setDamage(template.rbDamage, from, value, mod.op, apply);
                break;
            default:
                throw new Error("New damage type values: " + mod.val1);
        }
    }
    setDamage(to, from, value, op, apply) {
        if (op === 'MullAdd') {
            super.mullAddFromTo(from, to, value, apply);
        } else if (op === 'Set') {
            super.set(to, value, apply);
        } else if (op === 'Add') {
            super.add(to, value, apply);
        }
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        throw new Error("Legendary changes damage type values");
    }
}
}}),
"[project]/src/helpers/mods/appliers/WeightReduction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WeightReduction": (()=>WeightReduction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class WeightReduction extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod);
        super.mullAdd(template.weight, value, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
    // Currently there is no reason to change weight
    }
}
}}),
"[project]/src/helpers/mods/appliers/Enchantments.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Enchantments": (()=>Enchantments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/DamageExtractor.js [app-ssr] (ecmascript)");
;
;
class Enchantments extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    constructor(){
        super();
        this.damageExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$DamageExtractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    apply(template, mod, apply) {
        const field = template.adEffects;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                field[1] = [
                    value
                ];
            } else {
                field[1] = [
                    ...field[0]
                ];
            }
        } else if (mod.op === "MullAdd" || mod.op === "Add") {
            if (apply) {
                field[1].push(value);
            } else {
                // Possibly useless cause now any changes lead to full recalculation.
                // Avoid removing default one if it is previously was overridden by 'set'
                if (field[1].toString() === field[0].toString()) {
                    return;
                }
                const index = field[1].indexOf(value);
                if (index > -1) {
                    field[1].splice(index, 1);
                }
            }
        }
    }
    isChangingDefaultDamage() {
        return true;
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        let result = [];
        const ench = mod.val1.split(" / ")[0];
        this.damageExtractor.extractEnch(ench, result, "Legendary", false, "");
        for(const property in result){
            const effects = result[property];
            for(let i = 0; i < effects.length; i++){
                const effect = effects[i];
                if (effect.type_name === 'STAT_DmgAll' || effect.type_name === "STAT_DmgMelee") {
                    let value = effect.curv;
                    if (value === 0) {
                        value = effect.magnitude;
                        if (value === 0) {
                            throw new Error("Effect damage for legendary is 0");
                        }
                    }
                    const [newValue, depend] = this.adjustValueByHealth(modId, value, health);
                    // We do not want to update values which do not depend on health
                    // because they can be adjusted by user and updating just reset them to default.
                    if (!depend && update) {
                        continue;
                    }
                    wSpec.legendary[starIndex][1] = apply ? newValue : 0;
                    wSpec.legendary[starIndex][2] = apply ? "BDB" : "";
                } else {
                // throw new Error("Not known effect type for legendary: " + effect.type_name);
                }
            }
        }
    }
    adjustValueByHealth(modId, value, health) {
        switch(modId){
            case '00606b73':
                if (health > 95) {
                    health = 95;
                }
                health -= 5;
                return [
                    parseInt(24 / 90 * health + 1),
                    true
                ];
            case '004f6aa0':
                return [
                    100 - health,
                    true
                ];
            default:
                return [
                    value,
                    false
                ];
        }
    }
}
}}),
"[project]/src/helpers/mods/appliers/NumProjectiles.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NumProjectiles": (()=>NumProjectiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class NumProjectiles extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.shotSize, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        const value = super.getValue(mod);
        super.checkOp(mod, "legendary", "Add");
        super.addToProperty(wSpec, "shot_size", value, apply);
        // Protect projectile if a user change the value
        if (wSpec.shot_size === 0) {
            wSpec.shot_size = 1;
        }
    }
}
}}),
"[project]/src/helpers/mods/appliers/ConIronSight.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConIronSight": (()=>ConIronSight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class ConIronSight extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.conIronSight, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/SightedTransition.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SightedTransition": (()=>SightedTransition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class SightedTransition extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.sightedTransition, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/MaxConDegree.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MaxConDegree": (()=>MaxConDegree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class MaxConDegree extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.maxConDegree, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/MinConDegree.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MinConDegree": (()=>MinConDegree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class MinConDegree extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.minConDegree, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/RecoilMaxDegree.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecoilMaxDegree": (()=>RecoilMaxDegree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class RecoilMaxDegree extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.recoilMaxDegree, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/RecoilMinDegree.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecoilMinDegree": (()=>RecoilMinDegree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Apply.js [app-ssr] (ecmascript)");
;
class RecoilMinDegree extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Apply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Apply"] {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.recoilMinDegree, value, mod.op, apply);
    }
    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {}
}
}}),
"[project]/src/helpers/mods/appliers/Appliers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Appliers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$DamageBonusMult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/DamageBonusMult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Ammo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$IsAutomatic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/IsAutomatic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Speed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Speed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$APCost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/APCost.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Weight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Weight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AttackDelay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/AttackDelay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$CriticalDamageMult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/CriticalDamageMult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AmmoCapacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/AmmoCapacity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ReloadSpeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/ReloadSpeed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$OverrideProjectile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/OverrideProjectile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$HasRepeatableSingleFire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/HasRepeatableSingleFire.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ActorValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/ActorValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Keywords$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Keywords.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$CritEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/CritEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AttackDamage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/AttackDamage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$DamageTypeValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/DamageTypeValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$WeightReduction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/WeightReduction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Enchantments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Enchantments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$NumProjectiles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/NumProjectiles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ConIronSight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/ConIronSight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$SightedTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/SightedTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MaxConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/MaxConDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MinConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/MinConDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMaxDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/RecoilMaxDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMinDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/RecoilMinDegree.js [app-ssr] (ecmascript)");
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
class Appliers {
    constructor(){
        // TODO: Has to be generated and set automatically via names instead of manual setting
        this.appliers = new Map();
        this.appliers.set("DamageBonusMult", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$DamageBonusMult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DamageBonusMult"]());
        this.appliers.set("Ammo", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ammo"]());
        this.appliers.set("IsAutomatic", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$IsAutomatic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsAutomatic"]());
        this.appliers.set("Speed", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Speed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Speed"]());
        this.appliers.set("APCost", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$APCost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APCost"]());
        this.appliers.set("Weight", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Weight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Weight"]());
        this.appliers.set("AttackDelay", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AttackDelay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttackDelay"]());
        this.appliers.set("CriticalDamageMult", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$CriticalDamageMult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CriticalDamageMult"]());
        this.appliers.set("AmmoCapacity", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AmmoCapacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmmoCapacity"]());
        this.appliers.set("ReloadSpeed", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ReloadSpeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReloadSpeed"]());
        this.appliers.set("OverrideProjectile", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$OverrideProjectile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OverrideProjectile"]());
        this.appliers.set("HasRepeatableSingleFire", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$HasRepeatableSingleFire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HasRepeatableSingleFire"]());
        this.appliers.set("ActorValues", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ActorValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActorValues"]());
        this.appliers.set("Keywords", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Keywords$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Keywords"]());
        this.appliers.set("CritEffect", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$CritEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CritEffect"]());
        this.appliers.set("AttackDamage", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$AttackDamage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttackDamage"]());
        this.appliers.set("DamageTypeValues", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$DamageTypeValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DamageTypeValues"]());
        this.appliers.set("WeightReduction", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$WeightReduction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeightReduction"]());
        this.appliers.set("Enchantments", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Enchantments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Enchantments"]());
        this.appliers.set("NumProjectiles", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$NumProjectiles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumProjectiles"]());
        this.appliers.set("ConIronSight", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ConIronSight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConIronSight"]());
        this.appliers.set("SightedTransition", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$SightedTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SightedTransition"]());
        this.appliers.set("MaxConDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MaxConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxConDegree"]());
        this.appliers.set("MinConDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MinConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinConDegree"]());
        this.appliers.set("RecoilMaxDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMaxDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecoilMaxDegree"]());
        this.appliers.set("RecoilMinDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMinDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecoilMinDegree"]());
    }
}
}}),
"[project]/src/helpers/mods/ModParser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ModParser": (()=>ModParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Appliers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/Appliers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
;
;
class ModParser {
    constructor(){
        this.appliers = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$Appliers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]().appliers;
        this.skip_legendary = [
            "0040bd7c",
            "004f577d",
            "004f5776",
            "004f5778",
            "004ed02f",
            "004e89af",
            "00529a02"
        ];
    }
    // mutatingDamage is used when default damages like (ammo, projectile) must be overridden
    // this types of modes must be applied separately to correctly multiply buffs.
    applyOrRevoke(modData, template, apply, mutatingDamage = false) {
        for(let i = 0; i < modData.modifiers.length; i++){
            const mod = modData.modifiers[i];
            const applier = this.appliers.get(mod.prop);
            if (applier) {
                const changeDefault = applier.isChangingDefaultDamage();
                if (mutatingDamage && changeDefault || !mutatingDamage && !changeDefault) {
                    applier.apply(template, mod, apply);
                }
            }
        }
    }
    static applySpecific(template, modData, modEffects) {
        for(let i = 0; i < modData.modifiers.length; i++){
            const mod = modData.modifiers[i];
            const applier = modEffects.get(mod.prop);
            if (applier) {
                applier.apply(template, mod, true);
            }
        }
    }
    // Update means that it can be applied to legendary which reset their value according to health
    // Effects which add and remove their static values can not be updated (otherwise they will stack values up every time)
    applyLegendaryModToWSpec(modId, wSpec, starIndex, health, update, apply) {
        if (this.skip_legendary.includes(modId)) {
            return;
        }
        const modData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modId);
        if (modData) {
            for(let i = 0; i < modData.modifiers.length; i++){
                const mod = modData.modifiers[i];
                const applier = this.appliers.get(mod.prop);
                if (applier) {
                    applier.applyLegendary(wSpec, mod, modId, starIndex, health, update, apply);
                }
            }
        }
    }
}
}}),
"[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getField": (()=>getField),
    "getNameValueField": (()=>getNameValueField),
    "getResolvedField": (()=>getResolvedField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
;
;
;
;
function getField(data, name, id, color, width, hideEmpty = true, round = 0, cell = -1, css = "") {
    let value = data[id];
    return getResolvedField(name, value, color, width, hideEmpty, round, cell, css);
}
function getResolvedField(name, value, color, width, hideEmpty = true, round = 0, cell = -1, css = "") {
    if (cell > -1) {
        value = value[cell];
    }
    if (round > 0) {
        value = value.toFixed(round);
    }
    if (hideEmpty) {
        if (!value || value === 0 || value === '00000000' || value === '') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        }
    }
    return getNameValueField(name, value, color, width, css);
}
function getNameValueField(value1, value2, color, width, css = "") {
    if (value2 && typeof value2 === typeof '') {
        value2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncate"])(value2, 30);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: 'd-flex justify-content-center ' + css,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])(value1, value2, color, {
            width: width
        })
    }, void 0, false, {
        fileName: "[project]/src/helpers/ViewHelper.js",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/PerkPopover.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>perkPopover),
    "getEffects": (()=>getEffects),
    "getPerkContent": (()=>getPerkContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/PerkProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/SpellView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/EffectPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Spell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// TODO: Deprecated. Must be deleted in the future.
const kind = {
    1: "Float",
    3: "List",
    4: "Activate",
    5: "Spell",
    8: "Actor",
    9: "Item"
};
function perkPopover(perk) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Perk"
    }, void 0, false, {
        fileName: "[project]/src/helpers/PerkPopover.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function getEffects(effects, width) {
    const result = [];
    for(let i = 0; i < effects.length; i++){
        const effect = effects[i];
        const vType = effect.v_type;
        if (vType === 8) {
            result.push(buildEightEffect(effect, width, kind[vType]));
        } else if (vType === 5 || vType === 0) {
            result.push(buildFifthEffect(effect, width, kind[vType]));
        } else if (vType === 1) {
            result.push(buildFirstEffect(effect, width, kind[vType]));
        } else {
            throw new Error("Unsupported vType: " + vType);
        }
    }
    return result;
}
function buildFirstEffect(effect, width, kind) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        border: "secondary",
        className: "mt-1 mb-1 p-0 m-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "pt-1 pb-2",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Kind:', kind, 'pink', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Type:', 'e_type', 'pink', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Entry:', 'entry', 'pink', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Operation:', 'op', 'pink', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Value:', 'value', 'pink', width, false)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/PerkPopover.js",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/PerkPopover.js",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
function buildFifthEffect(effect, width, kind) {
    let spell = effect.value;
    if (typeof spell === typeof '') {
        spell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(spell);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        border: "secondary",
        className: "mt-1 mb-1 p-0 m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-1 pb-2",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Kind:', kind, 'purple', width),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Type:', 'e_type', 'purple', width),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Entry:', 'entry', 'purple', width),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Operation:', 'op', 'purple', width)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/PerkPopover.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpellHeader"])(spell),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-1"
            }, void 0, false, {
                fileName: "[project]/src/helpers/PerkPopover.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectsForPopover"])(spell.mag_effects)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/PerkPopover.js",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
function buildEightEffect(effect, width, kind) {
    const actor1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorData"])(effect.value.actor1);
    const actor2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorData"])(effect.value.actor2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        border: "secondary",
        className: "mt-1 mb-1 p-0 m-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "pt-1 pb-2",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Kind:', kind, 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Type:', 'e_type', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Entry:', 'entry', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect, 'Operation:', 'op', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(effect.value, 'Value:', 'value', 'blue', width, false, 3),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])("Actor1:", actor1, 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])("Actor2:", actor2, 'blue', width)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/PerkPopover.js",
            lineNumber: 76,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/PerkPopover.js",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
function getPerkContent(perkId, width = '20rem') {
    const perk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$PerkProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(perkId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(perk, 'Id:', 'id', 'default', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(perk, 'Code Name:', 'name', 'purple', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(perk, 'Name:', 'full', 'purple', width),
            getEffects(perk.effects, width)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/PerkPopover.js",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/WeaponPopoverOverlay.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WeaponPopoverOverlay": (()=>WeaponPopoverOverlay),
    "renderWeaponPopover": (()=>renderWeaponPopover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
let number = 0;
let popoverContent = [];
function WeaponPopoverOverlay({ popoverHeader, popoverContent, itemToOverly }) {
    const popover = weaponPopover(popoverHeader, popoverContent);
    function openPopover(e) {
        if (e) {
            initWeaponPopover(popoverContent);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onToggle: openPopover,
        trigger: "click",
        placement: "top",
        rootClose: "true",
        overlay: popover,
        children: itemToOverly
    }, void 0, false, {
        fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function weaponPopover(header, content) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "popover-adjustable2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        minHeight: '2rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "col-10 d-flex justify-content-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "m-auto ms-2",
                                children: header
                            }, void 0, false, {
                                fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "",
                                style: {
                                    display: 'none',
                                    borderRadius: '1rem',
                                    height: '2.0rem',
                                    paddingTop: '0.22rem',
                                    paddingLeft: '0.4rem'
                                },
                                variant: "blue-white-border",
                                id: "WeaponDetailsPopoverBackButton",
                                onClick: popoverBack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    children: "⇜"
                                }, void 0, false, {
                                    fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "popover-body2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "WeaponDetailsPopover",
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/WeaponPopoverOverlay.js",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
function initWeaponPopover(content) {
    number = 0;
    popoverContent = [
        content
    ];
}
function renderWeaponPopover(content) {
    number += 1;
    popoverContent[number] = content;
    document.getElementById("WeaponDetailsPopoverBackButton").style.display = 'inline';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRoot(document.getElementById("WeaponDetailsPopover")).render(content);
}
function popoverBack(e) {
    number -= 1;
    if (number < 1) {
        document.getElementById("WeaponDetailsPopoverBackButton").style.display = 'none';
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRoot(document.getElementById("WeaponDetailsPopover")).render(popoverContent[number]);
}
}}),
"[project]/src/helpers/ProjView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildProjViewById": (()=>buildProjViewById),
    "default": (()=>ProjView),
    "getExpView": (()=>getExpView),
    "getExplosiveForPopover": (()=>getExplosiveForPopover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Proj.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/SpellView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponPopoverOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript) <export default as Collapse>");
;
;
;
;
;
;
;
;
;
function getProjectileOverlay(proj) {
    const overlayButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center mb-1 m-auto",
        size: "sm",
        style: {
            width: '15rem'
        },
        children: [
            "Projectile: ",
            proj['id']
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 12,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeaponPopoverOverlay"], {
        popoverHeader: "Projectile",
        popoverContent: buildProjView(proj),
        itemToOverly: overlayButton
    }, void 0, false, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
function getHazardOverlay(hazard) {
    const overlayButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center mt-1 mb-1 m-auto",
        variant: "success",
        size: "sm",
        style: {
            width: '15rem'
        },
        children: [
            "Hazard: ",
            hazard['id']
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 19,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeaponPopoverOverlay"], {
        popoverHeader: "Hazard",
        popoverContent: buildHazardView(hazard),
        itemToOverly: overlayButton
    }, void 0, false, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
function getProjButton(proj) {
    function onClick(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderWeaponPopover"])(buildProjView(proj, true));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center mb-1 m-auto",
        size: "sm",
        onClick: onClick,
        style: {
            width: '15rem'
        },
        children: [
            "Projectile: ",
            proj['id']
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
function getExpView(expl, header = "Explosive", popover = false) {
    let projectile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    let hazard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    let objectExplosion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    let placedWeapon = '';
    let combined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    if (expl && expl !== '' && expl !== '00000000') {
        if (expl.projectile !== '00000000') {
            if (expl.projectile === 'Same') {
                projectile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Projectile:', 'Same', 'default', '20rem');
            } else {
                const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(expl.projectile);
                // If it is not a popover we need to create a button to open a pover, otherwise we need to create a content for an opened popover
                if (!popover) {
                    projectile = getProjectileOverlay(proj);
                } else {
                    projectile = getProjButton(proj);
                }
            }
        }
        if (expl.object !== '') {
            if (expl.object.type === 'HAZD') {
                hazard = getHazardOverlay(expl.object.value);
            } else if (expl.object.type === 'WEAP') {
                placedWeapon = expl.object.value.id + " / " + expl.object.value.name;
            } else if (expl.object.type === 'EXPL') {
                objectExplosion = getExpView(expl.object.value, "Explosive", true);
            } else if (expl.object.type === 'MSTT') {
                combined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        getExpView(expl.object.value.expl, "Explosive", true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/ProjView.js",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this),
                        getHazardOverlay(expl.object.value.hazd)
                    ]
                }, void 0, true);
            }
        }
        let dType = expl.d_type;
        if (dType && dType !== '' && dType !== '00000000') {
            dType = dType.id + " - " + dType.name + " / " + dType.full;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "m-0 mt-2 p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "m-0 p-1 ps-2 bg-proj-header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: header
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/ProjView.js",
                        lineNumber: 79,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/ProjView.js",
                    lineNumber: 79,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'Id:', 'id', 'default', '20rem'),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'Name:', 'name', 'purple', '20rem'),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'Damage:', 'damage', 'blue', '20rem', false),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'Force:', 'force', 'blue', '20rem', false),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'ExpCurv:', 'exp_curv', 'blue', '20rem', false),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'DMult:', 'damage_mult', 'blue', '20rem', false, 3),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('DType:', dType, 'blue', '20rem'),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Placed Weapon:', placedWeapon, 'blue', '20rem'),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'DValue:', 'd_value', 'blue', '20rem', false),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(expl, 'DCurv:', 'd_curv', 'blue', '20rem', false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/helpers/ProjView.js",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-1"
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/ProjView.js",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        projectile,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCardSpell"])(expl.enchantment),
                        hazard,
                        objectExplosion,
                        combined
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/ProjView.js",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/ProjView.js",
            lineNumber: 78,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getExplosiveForPopover(expl, header = "Explosive") {
    return getExpView(expl, header, true);
}
function buildProjViewById(projId) {
    const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(projId);
    if (!proj || proj === '' || proj === '00000000') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return buildProjView(proj);
}
function buildProjView(proj, popover = false) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Id:', 'id', 'default', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Code Name:', 'name', 'pink', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Full Name:', 'full', 'pink', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Gravity:', 'gravity', 'blue', '20rem', true, 3),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Range:', 'range', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Relaunch:', 'relaunch', 'blue', '20rem', true, 3),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(proj, 'Speed:', 'speed', 'blue', '20rem')
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/ProjView.js",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            getExpView(proj.expl, "Explosive", popover),
            getExpView(proj.destructible, "Destructible", popover)
        ]
    }, void 0, true);
}
function buildHazardView(hazard) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Id:', 'id', 'default', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Code Name:', 'name', 'pink', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Full Name:', 'full', 'pink', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Radius:', 'radius', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Life Time:', 'lifeTime', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(hazard, 'Interval:', 'interval', 'blue', '20rem', true, 3)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/ProjView.js",
                lineNumber: 141,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCardSpell"])(hazard.effect)
        ]
    }, void 0, true);
}
function buildProjViewByIds(ids) {
    const result = [];
    for(let i = 0; i < ids.length; i++){
        const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(ids[i]);
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "p-1 mb-1",
            children: buildProjView(proj)
        }, ids[i], false, {
            fileName: "[project]/src/helpers/ProjView.js",
            lineNumber: 158,
            columnNumber: 21
        }, this));
    }
    return result;
}
function projInfo(className, ids) {
    if (!ids || ids.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const items = [
        {
            key: '1',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Additional Projectile"
            }, void 0, false, {
                fileName: "[project]/src/helpers/ProjView.js",
                lineNumber: 171,
                columnNumber: 20
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: buildProjViewByIds(ids)
            }, void 0, false)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
            size: "small",
            items: items
        }, void 0, false, {
            fileName: "[project]/src/helpers/ProjView.js",
            lineNumber: 178,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/ProjView.js",
        lineNumber: 177,
        columnNumber: 9
    }, this);
}
function ProjView({ className, projId }) {
    return projInfo(className, projId);
}
}}),
"[project]/src/helpers/SpellView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SpellView),
    "getCardSpell": (()=>getCardSpell),
    "getEffects": (()=>getEffects),
    "getEffectsForPopover": (()=>getEffectsForPopover),
    "getSpellHeader": (()=>getSpellHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Spell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/EffectPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WeaponPopoverOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
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
// TODO: This class is Deprecated
function getOverlay(effect, buttonStyle, key) {
    const mEffect = effect['m_effect'];
    const overlayButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center m-1",
        size: "sm",
        style: buttonStyle,
        children: [
            "Effect: ",
            mEffect['id']
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/SpellView.js",
        lineNumber: 13,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeaponPopoverOverlay"], {
        popoverHeader: mEffect.full,
        popoverContent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectContent"])(effect),
        itemToOverly: overlayButton
    }, key, false, {
        fileName: "[project]/src/helpers/SpellView.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function getEffectButton(effect, key) {
    function onClick(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WeaponPopoverOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderWeaponPopover"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectContent"])(effect));
    }
    const mEffect = effect['m_effect'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center mb-1 m-auto",
        size: "sm",
        onClick: onClick,
        style: {
            width: '15rem'
        },
        children: [
            "Effect: ",
            mEffect['id']
        ]
    }, key, true, {
        fileName: "[project]/src/helpers/SpellView.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function getEffectsForPopover(effects) {
    let result = [];
    for(let i = 0; i < effects.length; i++){
        const effect = effects[i];
        result.push(getEffectButton(effect, i));
    }
    return result;
}
function getEffects(effects, buttonStyle = {
    width: '15rem'
}) {
    let result = [];
    for(let i = 0; i < effects.length; i++){
        const effect = effects[i];
        result.push(getOverlay(effect, buttonStyle, i));
    }
    return result;
}
function getSpellHeader(spell, width = '20rem') {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Id:', 'id', 'default', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Code Name:', 'name', 'purple', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Name:', 'full', 'purple', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Type:', 'type', 'blue', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Activity:', 'e_type', 'blue', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(spell, 'Target:', 'target', 'blue', width),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$EffectPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPerkButton"])(spell.perk)
        ]
    }, void 0, true);
}
function buildSpellView(spell) {
    const effects = spell['mag_effects'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: getSpellHeader(spell)
            }, void 0, false, {
                fileName: "[project]/src/helpers/SpellView.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "m-0 pt-2 pb-1 ps-4 pe-4",
                children: "Effects"
            }, void 0, false, {
                fileName: "[project]/src/helpers/SpellView.js",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "d-flex justify-content-center ps-1 pe-1",
                children: getEffects(effects)
            }, void 0, false, {
                fileName: "[project]/src/helpers/SpellView.js",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function getCardSpell(spellId, header) {
    const spell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Spell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(spellId);
    if (!spell) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (!header) {
        header = "Spell";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "bg-spell-body",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "bg-spell-header m-0 ps-2 p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: header
                }, void 0, false, {
                    fileName: "[project]/src/helpers/SpellView.js",
                    lineNumber: 87,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/SpellView.js",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-0 ms-1 me-1",
                children: buildSpellView(spell)
            }, void 0, false, {
                fileName: "[project]/src/helpers/SpellView.js",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/SpellView.js",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
function SpellView({ spellId, header }) {
    return getCardSpell(spellId, header);
}
}}),
"[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getImage": (()=>getImage),
    "getRowWithImage": (()=>getRowWithImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-ssr] (ecmascript)");
;
;
;
;
;
const WTypeDropdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WTypeDropdown({ weaponType, setWeaponType, resetPage = null, onSelect = null, title = null }) {
    function onSelectCustom(e) {
        setWeaponType(e);
        if (resetPage) {
            resetPage();
        }
        if (onSelect) {
            onSelect(e);
        }
    }
    const customTitle = title ? title : weaponType;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onSelect: onSelectCustom,
        id: "dropdown-basic-button",
        title: customTitle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "All",
                children: "All"
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Heavy",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heavy"], '1.1rem', '0.27rem', "Heavy")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Shotgun",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shotgun"], '1.1rem', '0.27rem', "Shotgun")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Rifle",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rifle"], '1.1rem', '0.27rem', "Rifle")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Pistol",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gun"], '1.1rem', '0.27rem', "Pistol")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Bow",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bow"], '1.1rem', '0.27rem', "Bow")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Melee",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["melee"], '1.1rem', '0.27rem', "Melee")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Unarmed",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unarmed"], '1.1rem', '0.27rem', "Unarmed")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Thrown",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thrown"], '1.1rem', '0.27rem', "Thrown")
            }, void 0, false, {
                fileName: "[project]/src/helpers/WTypeDropdown.js",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/WTypeDropdown.js",
        lineNumber: 19,
        columnNumber: 9
    }, this);
});
const __TURBOPACK__default__export__ = WTypeDropdown;
function getRowWithImage(name, customName = null, maxHeight = '1.1rem', space = '0.27rem') {
    if (!customName) {
        customName = name;
    }
    switch(name){
        case "Heavy":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heavy"], maxHeight, space, customName);
        case "Shotgun":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shotgun"], maxHeight, space, customName);
        case "Rifle":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rifle"], maxHeight, space, customName);
        case "Pistol":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gun"], maxHeight, space, customName);
        case "Bow":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bow"], maxHeight, space, customName);
        case "Melee":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["melee"], maxHeight, space, customName);
        case "Unarmed":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unarmed"], maxHeight, space, customName);
        case "Thrown":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addText"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thrown"], maxHeight, space, customName);
        default:
            return customName;
    }
}
;
function getImage(name, maxHeight = '1.3rem') {
    switch(name){
        case "Heavy":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heavy"])(maxHeight);
        case "Shotgun":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shotgun"])(maxHeight);
        case "Rifle":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rifle"])(maxHeight);
        case "Pistol":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gun"])(maxHeight);
        case "Bow":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bow"])(maxHeight);
        case "Melee":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["melee"])(maxHeight);
        case "Unarmed":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unarmed"])(maxHeight);
        case "Thrown":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thrown"])(maxHeight);
        default:
            return "";
    }
}
}}),
"[project]/src/helpers/NotificationToast.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>NotificationToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Toast.js [app-ssr] (ecmascript)");
;
;
;
;
;
function NotificationToast({ toastState }) {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(toastState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            xs: 6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShow(false),
                show: show,
                delay: 2000,
                autohide: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "me-auto",
                            children: "Limit"
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/NotificationToast.js",
                            lineNumber: 14,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/NotificationToast.js",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                        children: "Damage limit has been achieved"
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/NotificationToast.js",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/NotificationToast.js",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/helpers/NotificationToast.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/NotificationToast.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/views/GroupView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>GroupView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GroupView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex justify-content-center",
        style: props.style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: props.className,
                style: {
                    width: 'max-content',
                    borderRadius: '6px'
                },
                children: props.children
            }, void 0, false, {
                fileName: "[project]/src/helpers/views/GroupView.js",
                lineNumber: 5,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/helpers/views/GroupView.js",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/GroupView.js",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/EffectProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clearVMADObjects": (()=>clearVMADObjects),
    "getEffect": (()=>getEffect),
    "getVMADObject": (()=>getVMADObject),
    "printVMADS": (()=>printVMADS),
    "setVMADObject": (()=>setVMADObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$effects$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/resources/effects.json (json)");
;
const vmadObjects = new Map();
function getEffect(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$effects$2e$json__$28$json$29$__["default"][0][id];
}
function setVMADObject(id, object) {
    vmadObjects.set(id, object);
}
function getVMADObject(id) {
    return vmadObjects.get(id);
}
function clearVMADObjects() {
    vmadObjects.clear();
}
function printVMADS() {
    console.log(vmadObjects);
}
}}),
"[project]/src/helpers/EffectViewHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "blue": (()=>blue),
    "buildActor": (()=>buildActor),
    "buildBadge": (()=>buildBadge),
    "buildBadge2": (()=>buildBadge2),
    "buildConditionStrings": (()=>buildConditionStrings),
    "buildCurve": (()=>buildCurve),
    "buildEffect": (()=>buildEffect),
    "buildRow": (()=>buildRow),
    "buildTextBlock": (()=>buildTextBlock),
    "darkBlue": (()=>darkBlue),
    "getEffectButton": (()=>getEffectButton),
    "getGlobDuration": (()=>getGlobDuration),
    "getGlobMagnitude": (()=>getGlobMagnitude),
    "getGlobValue": (()=>getGlobValue),
    "getNameByLabel": (()=>getNameByLabel),
    "getVMADButton": (()=>getVMADButton),
    "idNameRow": (()=>idNameRow),
    "indigo": (()=>indigo),
    "isEffectIdEmpty": (()=>isEffectIdEmpty),
    "magenta": (()=>magenta),
    "orange": (()=>orange),
    "redRounded": (()=>redRounded),
    "resolveEffectOrNull": (()=>resolveEffectOrNull),
    "vmadView": (()=>vmadView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const blue = {
    backgroundColor: '#f7fbff',
    borderColor: '#0072a3',
    color: '#005691'
};
const orange = {
    backgroundColor: '#fffaf0',
    borderColor: '#ffa800',
    color: '#b77100'
};
const magenta = {
    backgroundColor: '#fff1fa',
    borderColor: '#ca007c',
    color: '#830f57'
};
const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d'
};
const indigo = {
    backgroundColor: '#fdfaff',
    borderColor: '#5a008a',
    color: '#430067'
};
const redRounded = {
    backgroundColor: '#fff4f4',
    borderColor: '#890000',
    color: '#c90000',
    borderRadius: '0.5rem'
};
function getNameByLabel(label) {
    switch(label){
        case 'SPEL':
            return "Spell";
        case 'PERK':
            return "Perk";
        case 'PCRD':
            return "Card";
        case 'ENCH':
            return "Enchantment";
        case 'MGEF':
            return "Effect";
        case 'ALCH':
            return "Alchemy";
        case 'HZRD':
            return "Hazard";
        case 'QUST':
            return "Quest";
        case 'KYWD':
            return "Tag";
        case 'RACE':
            return "Race";
        default:
            return label;
    }
}
function resolveEffectOrNull(effectId) {
    if (typeof effectId === typeof {}) {
        return effectId;
    }
    if (isEffectIdEmpty(effectId)) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffect"])(effectId);
}
function isEffectIdEmpty(effectId) {
    return !effectId || effectId === "" || effectId === "00000000";
}
function getVMADButton(effectId, vmad, onEffectClick, buttonName = 'VMAD') {
    const id = "vmad" + effectId;
    const vmadObject = {
        label: "VMAD",
        vmad: vmad,
        id: id
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setVMADObject"])(id, vmadObject);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "w-100 p-1 mt-1",
        name: id,
        variant: "blue-border",
        onClick: onEffectClick,
        children: buttonName
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
function getEffectButton(effectId, onEffectClick) {
    if (isEffectIdEmpty(effectId)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffect"])(effectId);
    if (!effect) {
        effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItem"])(effectId);
        if (!effect) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Can not resolve effect: ",
                    effectId
                ]
            }, void 0, true);
        }
    }
    const name = effect.full === "" ? effect.name : effect.full;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "w-100 p-0 mt-1",
        name: effectId,
        variant: "blue-border",
        onClick: onEffectClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/EffectViewHelper.js",
                        lineNumber: 111,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 111,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leftRight2"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0",
                style: {
                    fontSize: '.6rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: getNameByLabel(effect.label)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 112,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 112,
                columnNumber: 25
            }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0",
                style: {
                    fontSize: '.6rem'
                },
                children: effectId
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 113,
                columnNumber: 13
            }, this), -1, "w-100 ps-1 pe-1 p-0")
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
function vmadView(id, vmad, onEffectClick) {
    if (!vmad || vmad.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-2",
        children: getVMADButton(id, vmad, onEffectClick)
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 123,
        columnNumber: 9
    }, this);
}
function buildRow(left, right, color, border = true, skipZero = false, skipEmpty = true) {
    if (skipEmpty && (right === null || right === "")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (skipZero && right === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leftRightTag"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
        className: "ps-1",
        children: left
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 136,
        columnNumber: 25
    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
        className: "pe-1",
        children: right
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 136,
        columnNumber: 57
    }, this), color, border, -1, "w-100 p-0 mt-1 mb-1");
}
function buildConditionStrings(conditions, className = "mt-1", color = '#332500', bgColor = '#fffdf6') {
    const conditionStrings = [];
    if (!conditions) {
        return conditionStrings;
    }
    for(let i = 0; i < conditions.length; i++){
        const cond = conditions[i];
        conditionStrings.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: {
                fontSize: '0.7rem',
                textAlign: 'center',
                textWrap: 'balance',
                backgroundColor: bgColor,
                color: color
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: cond
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 146,
                columnNumber: 177
            }, this)
        }, i, false, {
            fileName: "[project]/src/helpers/EffectViewHelper.js",
            lineNumber: 146,
            columnNumber: 31
        }, this));
    }
    return conditionStrings;
}
function buildTextBlock(text, header = null, footer = null, className = "mt-2", color = "#003112", borderColor = "#effff5", backgroundColor = "#effff5") {
    if (!text || text === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    if (typeof text === typeof "" && text.trim() === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const headerView = header ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: header
        }, void 0, false, {
            fileName: "[project]/src/helpers/EffectViewHelper.js",
            lineNumber: 158,
            columnNumber: 58
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 158,
        columnNumber: 36
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    const footerView = footer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1",
        children: footer
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 159,
        columnNumber: 36
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            fontSize: '0.7rem',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: borderColor,
            textAlign: 'center',
            textWrap: 'balance',
            backgroundColor: backgroundColor,
            color: color
        },
        children: [
            headerView,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 163,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 163,
                columnNumber: 13
            }, this),
            footerView
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 161,
        columnNumber: 9
    }, this);
}
function buildActor(actor, header = "Actor", footer = null) {
    if (!actor || actor === "" || actor === "00000000") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const label = actor.label;
    if (label === "AVIF") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1 m-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "pt-0 pb-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: header
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/EffectViewHelper.js",
                            lineNumber: 178,
                            columnNumber: 24
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/EffectViewHelper.js",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 177,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-1",
                    children: [
                        buildTextBlock(actor.desc, null, null, "p-1"),
                        buildRow("Id:", actor.id, 'purple'),
                        buildRow("Name:", actor.name, 'purple'),
                        buildRow("Full:", actor.full, 'purple'),
                        buildRow("Default value:", actor.def, 'purple'),
                        buildRow("Min value:", actor.min, 'purple'),
                        buildRow("Max value:", actor.max, 'purple'),
                        footer
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 180,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/EffectViewHelper.js",
            lineNumber: 176,
            columnNumber: 13
        }, this);
    } else if (label === "DMGT") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1 m-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "pt-0 pb-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: header
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/EffectViewHelper.js",
                            lineNumber: 196,
                            columnNumber: 24
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/EffectViewHelper.js",
                        lineNumber: 196,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 195,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-1",
                    children: [
                        buildRow("Id:", actor.id, 'purple'),
                        buildRow("Name:", actor.name, 'purple'),
                        buildRow("Full:", actor.full, 'purple'),
                        footer
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 198,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/EffectViewHelper.js",
            lineNumber: 194,
            columnNumber: 13
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Unsupported label for actor: ",
                label
            ]
        }, void 0, true);
    }
}
function idNameRow(id, name) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex flex-nowrap",
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pe-0 d-flex justify-content-start",
                style: {
                    width: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "tag",
                    children: id
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 215,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 214,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-end ms-2",
                style: {
                    width: '100%',
                    textWrap: 'nowrap',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "tag",
                    style: darkBlue,
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 218,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 217,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 213,
        columnNumber: 9
    }, this);
}
function getGlobDuration(effect) {
    return getGlob(effect.glob_duration, "duration");
}
function getGlob(glob, name, footerView = null) {
    const footer = footerView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Footer, {
        className: "bg-spell-header p-0 ps-2",
        children: footerView
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 229,
        columnNumber: 35
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    if (glob !== '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: "bg-spell-header p-0 ps-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: [
                            "Glob ",
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/helpers/EffectViewHelper.js",
                        lineNumber: 233,
                        columnNumber: 67
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 233,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-1",
                    children: [
                        buildRow("Id:", glob.id, "purple"),
                        buildRow("Name:", glob.name, "purple"),
                        buildRow("Value:", glob.value, "purple")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 234,
                    columnNumber: 17
                }, this),
                footer
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/EffectViewHelper.js",
            lineNumber: 232,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getGlobMagnitude(effect) {
    return getGlob(effect.glob_magnitude, "magnitude");
}
function getGlobValue(obj, name = "value", footerView = null) {
    return getGlob(obj, name, footerView);
}
function buildEffect(index, body) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "mt-1 mb-1 m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                className: "pt-0 pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: [
                            "E",
                            index + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/helpers/EffectViewHelper.js",
                        lineNumber: 257,
                        columnNumber: 20
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 257,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 256,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                className: "p-1",
                children: body
            }, void 0, false, {
                fileName: "[project]/src/helpers/EffectViewHelper.js",
                lineNumber: 259,
                columnNumber: 13
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 255,
        columnNumber: 9
    }, this);
}
function buildCurve(curve, maxValue, className = "mt-1") {
    if (!curve || curve === "") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const pathCurve = curve.split("\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: buildTextBlock(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-1",
                    children: "Curve magnitude"
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 276,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-1",
                    children: pathCurve[0]
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 279,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: pathCurve[1]
                }, void 0, false, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 282,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-1",
                    children: [
                        "Curve magnitude max: ",
                        maxValue
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/EffectViewHelper.js",
                    lineNumber: 285,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true), null, null, className, "#7b3b00", "#fff9f3", "#fff9f3")
    }, void 0, false);
}
function buildBadge(name, color = "#000", backgroundColor = "#fff") {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "badge p-1 ps-2 pe-2 bg-lite-shadow2",
        style: {
            backgroundColor: backgroundColor,
            color: color
        },
        children: name
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 295,
        columnNumber: 13
    }, this);
}
function buildBadge2(name, color = "#000", backgroundColor = "#fff") {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "badge p-1 ps-2 pe-2",
        style: {
            borderStyle: 'solid',
            borderColor: backgroundColor,
            borderWidth: '0.5px',
            backgroundColor: backgroundColor,
            color: color
        },
        children: name
    }, void 0, false, {
        fileName: "[project]/src/helpers/EffectViewHelper.js",
        lineNumber: 299,
        columnNumber: 13
    }, this);
}
}}),
"[project]/src/helpers/views/StackEffectView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StackEffectView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/EffectProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/view/PerkCardCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perk$2f$view$2f$PerkCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perk/view/PerkCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spell$2f$view$2f$SpellCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/spell/view/SpellCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$effect$2f$view$2f$EffectCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/effect/view/EffectCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$AlchemyCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/AlchemyCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$vmad$2f$view$2f$VMADCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/vmad/view/VMADCompactView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/consumables/view/ConsumableItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
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
function effectView(effect, onEffectClick, backButton) {
    const label = effect['label'];
    if (label === "PCRD") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$view$2f$PerkCardCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    perkCard: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/views/StackEffectView.js",
            lineNumber: 17,
            columnNumber: 13
        }, this);
    } else if (label === "PERK") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perk$2f$view$2f$PerkCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    perk: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true);
    } else if (label === "SPEL") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spell$2f$view$2f$SpellCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    spell: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true);
    } else if (label === "MGEF") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$effect$2f$view$2f$EffectCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    effect: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true);
    } else if (label === "VMAD") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$vmad$2f$view$2f$VMADCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    vmad: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true);
    } else if (label === "ENCH") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "ENCHANTMENT",
                backButton
            ]
        }, void 0, true);
    } else if (label === "ALCH") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$AlchemyCompactView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    alchemy: effect,
                    onEffectClick: onEffectClick
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/StackEffectView.js",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                backButton
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getEffectItem(viewIdStackRef, startItem) {
    const lastViewIdIndex = viewIdStackRef.current.length - 1;
    if (lastViewIdIndex > -1) {
        const id = viewIdStackRef.current[lastViewIdIndex];
        if (id.startsWith("vmad")) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVMADObject"])(id);
        }
        const effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffect"])(id);
        if (!effect) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$consumables$2f$view$2f$ConsumableItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItem"])(id);
        }
        return effect;
    }
    if (typeof startItem === typeof '') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffect"])(startItem);
    }
    return startItem;
}
function getBackButton(viewIdStackRef, onBackClick) {
    if (viewIdStackRef.current.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "w-100 mt-2 mb-0 p-1",
            variant: "blue-white-border",
            onClick: onBackClick,
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/src/helpers/views/StackEffectView.js",
            lineNumber: 89,
            columnNumber: 17
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function StackEffectView(props) {
    const [, setRedraw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const viewIdStackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startItemIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!startItemIdRef.current) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearVMADObjects"])();
        startItemIdRef.current = props.item.id;
    } else if (startItemIdRef.current !== props.item.id) {
        startItemIdRef.current = props.item.id;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$EffectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearVMADObjects"])();
        viewIdStackRef.current = [];
    }
    function onBackClick(e) {
        const newLength = viewIdStackRef.current.length - 1;
        viewIdStackRef.current.length = newLength < 0 ? 0 : newLength;
        setRedraw({});
    }
    function onEffectClick(e) {
        const id = e.currentTarget.name;
        viewIdStackRef.current.push(id);
        setRedraw({});
    }
    const effect = getEffectItem(viewIdStackRef, props.item);
    const backButton = getBackButton(viewIdStackRef, onBackClick);
    return effectView(effect, onEffectClick, backButton);
}
}}),
"[project]/src/helpers/Files.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFileRef": (()=>getFileRef),
    "getJsonFileRef": (()=>getJsonFileRef),
    "getTextFileRef": (()=>getTextFileRef)
});
function getTextFileRef(content) {
    return URL.createObjectURL(new Blob([
        content
    ], {
        type: 'text/plain'
    }));
}
function getFileRef(content) {
    return URL.createObjectURL(new Blob([
        content
    ], {
        type: 'application/json'
    }));
}
function getJsonFileRef(content) {
    return getFileRef(JSON.stringify([
        ...content
    ]));
}
}}),
"[project]/src/helpers/FetchSnapshots.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readSnapshotsFromInput": (()=>readSnapshotsFromInput),
    "readSnapshotsFromResources": (()=>readSnapshotsFromResources)
});
function readSnapshotsFromInput(inputId, setIdCallback, setItemsCallback, oldItems = null, add = true, maxItems = 1000) {
    const file = document.getElementById(inputId).files[0];
    readSnapshotsFrom(file, setIdCallback, setItemsCallback, oldItems, add, maxItems);
}
;
function readSnapshotsFromResources(file, setIdCallback, setItemsCallback, maxItems = 1000) {
    readSnapshotsJson(file, setIdCallback, setItemsCallback, null, true, maxItems = 1000);
}
;
function readSnapshotsJson(items, setIdCallback, setItemsCallback, oldItems, add = true, maxItems = 1000) {
    let map = new Map();
    let k = 0;
    if (oldItems && add) {
        for (const [, value] of oldItems.entries()){
            value.id = k;
            map.set(k++, value);
        }
    }
    let newMaxItems = maxItems - map.size;
    newMaxItems = newMaxItems < 0 ? 0 : newMaxItems;
    const length = items.length > newMaxItems ? newMaxItems : items.length;
    for(let i = 0; i < length; i++){
        items[i].id = i + k;
        map.set(i + k, items[i]);
    }
    const newItems = {
        map: map
    };
    setIdCallback(map.size);
    setItemsCallback(newItems);
}
function readSnapshotsFrom(file, setIdCallback, setItemsCallback, oldItems, add, maxItems = 1000) {
    try {
        const reader = new FileReader();
        reader.onload = (e)=>{
            let items = JSON.parse(e.target.result);
            readSnapshotsJson(items, setIdCallback, setItemsCallback, oldItems, add, maxItems);
        };
        reader.readAsText(file);
    } catch  {
    // Ok
    }
}
;
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/magazines/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./acceptable_overkill.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/acceptable_overkill.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/acceptable_overkill.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/acceptable_overkill.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/acceptable_overkill.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./attack_of_the_fishmen.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/attack_of_the_fishmen.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/attack_of_the_fishmen.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/attack_of_the_fishmen.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/attack_of_the_fishmen.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bear_proofing_your_campsite.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/bear_proofing_your_campsite.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/bear_proofing_your_campsite.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/bear_proofing_your_campsite.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/bear_proofing_your_campsite.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./blood_on_the_harp.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/blood_on_the_harp.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/blood_on_the_harp.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/blood_on_the_harp.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/blood_on_the_harp.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./camouflage_special.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/camouflage_special.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/camouflage_special.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/camouflage_special.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/camouflage_special.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./corsair_queen.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/corsair_queen.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/corsair_queen.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/corsair_queen.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/corsair_queen.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./curse_of_the_burned.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/curse_of_the_burned.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/curse_of_the_burned.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/curse_of_the_burned.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/curse_of_the_burned.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./demon_slaves_demon_sands.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/demon_slaves_demon_sands.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/demon_slaves_demon_sands.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/demon_slaves_demon_sands.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/demon_slaves_demon_sands.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./down_home_cooking.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/down_home_cooking.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/down_home_cooking.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/down_home_cooking.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/down_home_cooking.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./flatwoods_monster.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/flatwoods_monster.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/flatwoods_monster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/flatwoods_monster.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/flatwoods_monster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./future_of_warfare.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/future_of_warfare.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/future_of_warfare.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/future_of_warfare.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/future_of_warfare.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./giant_super_weapons.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/giant_super_weapons.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/giant_super_weapons.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/giant_super_weapons.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/giant_super_weapons.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./guide_to_hunting_commies.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/guide_to_hunting_commies.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/guide_to_hunting_commies.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/guide_to_hunting_commies.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/guide_to_hunting_commies.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./hills_grafton.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/hills_grafton.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/hills_grafton.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/hills_grafton.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/hills_grafton.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./home_in_the_hills.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/home_in_the_hills.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/home_in_the_hills.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/home_in_the_hills.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/home_in_the_hills.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./invasion_of_the_zetans.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/invasion_of_the_zetans.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/invasion_of_the_zetans.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/invasion_of_the_zetans.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/invasion_of_the_zetans.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./little_guns_for_little_ladies.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/little_guns_for_little_ladies.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/little_guns_for_little_ladies.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/little_guns_for_little_ladies.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/little_guns_for_little_ladies.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mothman.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/mothman.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/mothman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/mothman.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/mothman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuke_the_man.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/nuke_the_man.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/nuke_the_man.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/nuke_the_man.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/nuke_the_man.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./plasma_the_weapon_of_tomorrow.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/plasma_the_weapon_of_tomorrow.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/plasma_the_weapon_of_tomorrow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/plasma_the_weapon_of_tomorrow.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/plasma_the_weapon_of_tomorrow.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./rise_of_the_mutants.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/rise_of_the_mutants.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/rise_of_the_mutants.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/rise_of_the_mutants.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/rise_of_the_mutants.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./rockobot_takes_the_nation_by_storm.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/rockobot_takes_the_nation_by_storm.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/rockobot_takes_the_nation_by_storm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/rockobot_takes_the_nation_by_storm.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/rockobot_takes_the_nation_by_storm.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./snallygaster.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/snallygaster.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/snallygaster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/snallygaster.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/snallygaster.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./take_aim_army_style.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/take_aim_army_style.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/take_aim_army_style.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/take_aim_army_style.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/take_aim_army_style.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_future_of_hunting.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/the_future_of_hunting.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/the_future_of_hunting.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/the_future_of_hunting.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/the_future_of_hunting.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./the_starlet_sniper.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/the_starlet_sniper.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/the_starlet_sniper.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/the_starlet_sniper.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/the_starlet_sniper.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tomorrow_technology.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/tomorrow_technology.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/tomorrow_technology.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/tomorrow_technology.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/tomorrow_technology.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./us_army_goes_to_space.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/us_army_goes_to_space.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/us_army_goes_to_space.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/us_army_goes_to_space.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/us_army_goes_to_space.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./wendigo.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/wendigo.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/wendigo.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/wendigo.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/wendigo.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./when_apes_go_bananas.webp": {
        id: ()=>'[project]/src/resources/boostStuff/magazines/when_apes_go_bananas.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/when_apes_go_bananas.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/magazines/when_apes_go_bananas.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/magazines/when_apes_go_bananas.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/bobbleHeads/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./bh_big_guns.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_big_guns.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_big_guns.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_big_guns.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_big_guns.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_energy.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_energy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_energy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_energy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_energy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_explosive.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_explosive.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_explosive.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_explosive.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_explosive.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_melee.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_melee.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_melee.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_melee.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_melee.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_repair.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_repair.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_repair.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_repair.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_repair.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_small_guns.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_small_guns.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_small_guns.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_small_guns.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_small_guns.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_sneak.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_sneak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_sneak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_sneak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_sneak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_strength.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_strength.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_strength.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_strength.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_strength.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bh_unarmed.webp": {
        id: ()=>'[project]/src/resources/boostStuff/bobbleHeads/bh_unarmed.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_unarmed.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/bobbleHeads/bh_unarmed.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/bobbleHeads/bh_unarmed.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/food/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./blight_soup.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/blight_soup.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/blight_soup.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/blight_soup.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/blight_soup.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./candy.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/candy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/candy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/candy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/candy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./deathclaw_steak.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/deathclaw_steak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/deathclaw_steak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/deathclaw_steak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/deathclaw_steak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./deathclaw_wellington.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/deathclaw_wellington.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/deathclaw_wellington.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/deathclaw_wellington.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/deathclaw_wellington.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./glowing_steak.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/glowing_steak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/glowing_steak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/glowing_steak.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/glowing_steak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gulper_stuffed_foot.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/gulper_stuffed_foot.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/gulper_stuffed_foot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/gulper_stuffed_foot.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/gulper_stuffed_foot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./light_mutant_hound_chops.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/light_mutant_hound_chops.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/light_mutant_hound_chops.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/light_mutant_hound_chops.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/light_mutant_hound_chops.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mole_rat_chunks.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/mole_rat_chunks.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/mole_rat_chunks.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/mole_rat_chunks.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/mole_rat_chunks.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./molerat_jerky.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/molerat_jerky.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/molerat_jerky.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/molerat_jerky.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/molerat_jerky.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mutton_chops.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/mutton_chops.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/mutton_chops.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/mutton_chops.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/mutton_chops.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka_cola_candy.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/nuka_cola_candy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/nuka_cola_candy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/nuka_cola_candy.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/nuka_cola_candy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./stingwing_filet.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/stingwing_filet.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/stingwing_filet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/stingwing_filet.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/stingwing_filet.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tasty_mutant_hound_stew.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/tasty_mutant_hound_stew.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/tasty_mutant_hound_stew.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/tasty_mutant_hound_stew.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/tasty_mutant_hound_stew.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tasty_mutton_meat_pie.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/tasty_mutton_meat_pie.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/tasty_mutton_meat_pie.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/tasty_mutton_meat_pie.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/tasty_mutton_meat_pie.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./yao_guai_ribs.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/yao_guai_ribs.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/yao_guai_ribs.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/yao_guai_ribs.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/yao_guai_ribs.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./yao_guai_roast.webp": {
        id: ()=>'[project]/src/resources/boostStuff/food/yao_guai_roast.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/yao_guai_roast.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/food/yao_guai_roast.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/food/yao_guai_roast.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/drink/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./ballistic_bock.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/ballistic_bock.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/ballistic_bock.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/ballistic_bock.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/ballistic_bock.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./beer.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/beer.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/beer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/beer.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/beer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./blackwater_brew.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/blackwater_brew.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/blackwater_brew.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/blackwater_brew.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/blackwater_brew.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bourbon.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/bourbon.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/bourbon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/bourbon.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/bourbon.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./chally_milk.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/chally_milk.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/chally_milk.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/chally_milk.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/chally_milk.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./cranberry_moonshine.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/cranberry_moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/cranberry_moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/cranberry_moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/cranberry_moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./fern_flower_tea.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/fern_flower_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/fern_flower_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/fern_flower_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/fern_flower_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./firecracker_berry_juice.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/firecracker_berry_juice.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/firecracker_berry_juice.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/firecracker_berry_juice.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/firecracker_berry_juice.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./high_voltage_hefe.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/high_voltage_hefe.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/high_voltage_hefe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/high_voltage_hefe.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/high_voltage_hefe.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./liquid_courage.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/liquid_courage.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/liquid_courage.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/liquid_courage.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/liquid_courage.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mire_magic_moonshine.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/mire_magic_moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/mire_magic_moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/mire_magic_moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/mire_magic_moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./moonshine.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/moonshine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/moonshine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mountain_honey.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/mountain_honey.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/mountain_honey.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/mountain_honey.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/mountain_honey.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./new_river_red_ale.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/new_river_red_ale.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/new_river_red_ale.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/new_river_red_ale.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/new_river_red_ale.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka_cola_dark.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/nuka_cola_dark.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nuka_cola_dark.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/nuka_cola_dark.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nuka_cola_dark.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nuka_twist.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/nuka_twist.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nuka_twist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/nuka_twist.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nuka_twist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nukashine.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/nukashine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nukashine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/nukashine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/nukashine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./oak_holler_lager.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/oak_holler_lager.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/oak_holler_lager.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/oak_holler_lager.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/oak_holler_lager.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./old_possum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/old_possum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/old_possum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/old_possum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/old_possum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pickaxe_pilsner.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/pickaxe_pilsner.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/pickaxe_pilsner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/pickaxe_pilsner.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/pickaxe_pilsner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./rum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/rum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/rum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/rum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/rum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./steeped_fern_flower_tea.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/steeped_fern_flower_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/steeped_fern_flower_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/steeped_fern_flower_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/steeped_fern_flower_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./steeped_thistle_tea.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/steeped_thistle_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/steeped_thistle_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/steeped_thistle_tea.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/steeped_thistle_tea.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sweetmutfruit.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/sweetmutfruit.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/sweetmutfruit.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/sweetmutfruit.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/sweetmutfruit.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./vodka.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/vodka.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/vodka.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/vodka.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/vodka.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./whiskey.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/whiskey.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/whiskey.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/whiskey.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/whiskey.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./wine.webp": {
        id: ()=>'[project]/src/resources/boostStuff/drink/wine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/wine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/drink/wine.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/drink/wine.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/psycho/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./buffout.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/buffout.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/buffout.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/buffout.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/buffout.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bufftats.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/bufftats.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/bufftats.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/bufftats.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/bufftats.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./calmex.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/calmex.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/calmex.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/calmex.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/calmex.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./f.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/f.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/f.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/f.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/f.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mk1.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/mk1.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk1.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/mk1.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk1.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mk2.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/mk2.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk2.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/mk2.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk2.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mk3.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/mk3.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk3.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/mk3.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk3.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mk4.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/mk4.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk4.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/mk4.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/mk4.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nd.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/nd.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/nd.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/nd.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/nd.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./o.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/o.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/o.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/o.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/o.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./p.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/p.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/p.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/p.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/p.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pb.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/pb.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/pb.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/pb.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/pb.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./psycho.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/psycho.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/psycho.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/psycho.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/psycho.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./pt.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/pt.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/pt.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/pt.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/pt.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./x_cell.webp": {
        id: ()=>'[project]/src/resources/boostStuff/psycho/x_cell.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/x_cell.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/psycho/x_cell.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/psycho/x_cell.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/serums/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./ar_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/ar_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/ar_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/ar_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/ar_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./c_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/c_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/c_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/c_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/c_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./e_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/e_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/e_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/e_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/e_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ee_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/ee_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/ee_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/ee_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/ee_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./h_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/h_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/h_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/h_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/h_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./hm_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/hm_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/hm_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/hm_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/hm_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./sd_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/sd_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/sd_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/sd_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/sd_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./t_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/t_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/t_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/t_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/t_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tm_serum.webp": {
        id: ()=>'[project]/src/resources/boostStuff/serums/tm_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/tm_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/serums/tm_serum.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/serums/tm_serum.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/others/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./syringer.webp": {
        id: ()=>'[project]/src/resources/boostStuff/others/syringer.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/others/syringer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/boostStuff/others/syringer.webp.mjs { IMAGE => "[project]/src/resources/boostStuff/others/syringer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/helpers/BoostStuffProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBobbleHead": (()=>getBobbleHead),
    "getDrink": (()=>getDrink),
    "getFood": (()=>getFood),
    "getMagazine": (()=>getMagazine),
    "getOther": (()=>getOther),
    "getPsycho": (()=>getPsycho),
    "getSerum": (()=>getSerum)
});
const magazines = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/magazines/**)"));
const bobbleHeads = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/bobbleHeads/**)"));
const foods = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/food/**)"));
const drinks = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/drink/**)"));
const psychos = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/psycho/**)"));
const serums = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/serums/**)"));
const others = __turbopack_module_context__(__turbopack_require__("[project]/src/helpers/BoostStuffProvider.js (require.context ../resources/boostStuff/others/**)"));
function getOther(name) {
    return getItem(name, others);
}
function getBobbleHead(name) {
    return getItem(name, bobbleHeads);
}
function getMagazine(name) {
    return getItem(name, magazines);
}
function getFood(name) {
    return getItem(name, foods);
}
function getDrink(name) {
    return getItem(name, drinks);
}
function getPsycho(name) {
    return getItem(name, psychos);
}
function getSerum(name) {
    return getItem(name, serums);
}
function getItem(name, collection) {
    return collection('./' + name + '.webp');
}
}}),
"[project]/src/helpers/views/LoadingModal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoadingModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Modal.js [app-ssr] (ecmascript)");
;
;
function LoadingModal(props) {
    function onHide(e) {}
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        show: props.show,
        onHide: onHide,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
            className: "modal-scroll-80-60",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/helpers/views/LoadingModal.js",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/helpers/views/LoadingModal.js",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/LoadingModal.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/helpers/AmmoView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AmmoView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Ammo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ProjView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript) <export default as Collapse>");
;
;
;
;
;
;
;
function buildProj(proj) {
    const result = [];
    if (proj && proj.length > 0) {
        for(let i = 0; i < proj.length; i++){
            const projId = proj[i];
            result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "m-0 mt-2 p-0 bg-light-pink",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                        className: "m-0 p-1 ps-2 bg-proj-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "Projectile"
                        }, void 0, false, {
                            fileName: "[project]/src/helpers/AmmoView.js",
                            lineNumber: 16,
                            columnNumber: 74
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/AmmoView.js",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                        className: "p-1 m-0",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ProjView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProjViewById"])(projId)
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/AmmoView.js",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/helpers/AmmoView.js",
                lineNumber: 15,
                columnNumber: 17
            }, this));
        }
    }
    return result;
}
function buildAmmoView(ammoData, proj) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "bg-lite",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Id:', 'id', 'default', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Code Name:', 'name', 'purple', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Full Name:', 'full', 'purple', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Type:', 'ammo_type', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Value:', 'value', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Weight:', 'weight', 'blue', '20rem', true, 3),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Damage:', 'damage', 'blue', '20rem', false),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(ammoData, 'Health:', 'health', 'blue', '20rem', false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/AmmoView.js",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            buildProj(proj)
        ]
    }, void 0, true);
}
function ammoInfo(className, id, overrideProj) {
    if (id === '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    const ammoData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Ammo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(id);
    let proj = [
        ammoData['projectile']
    ];
    if (overrideProj && overrideProj.length > 0) {
        proj = overrideProj;
    }
    const items = [
        {
            key: '1',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Ammo"
            }, void 0, false, {
                fileName: "[project]/src/helpers/AmmoView.js",
                lineNumber: 58,
                columnNumber: 20
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: buildAmmoView(ammoData, proj)
            }, void 0, false)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
            size: "small",
            items: items
        }, void 0, false, {
            fileName: "[project]/src/helpers/AmmoView.js",
            lineNumber: 65,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/helpers/AmmoView.js",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
function AmmoView({ className, ammoId, overrideProj }) {
    return ammoInfo(className, ammoId, overrideProj);
}
}}),
"[project]/src/helpers/DamageView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
;
;
;
;
function getDamagesData(damageData, width = '20rem') {
    let result = [];
    for(let i = 0; i < damageData.length; i++){
        result.push(getDamageData(i, damageData[i], width));
    }
    return result;
}
function getDamageData(key, damageData, width = '20rem') {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "p-0 m-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Id:', 'type_id', 'default', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Code Name:', 'type_name', 'purple', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Name:', 'type_full_name', 'purple', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'DCurv:', 'curv', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Value:', 'value', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Magnitude:', 'magnitude', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Time:', 'time', 'blue', width),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Interval:', 'interval', 'blue', width)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/DamageView.js",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, key, false, {
        fileName: "[project]/src/helpers/DamageView.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
function buildCard(damageData, header, className) {
    if (damageData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "bg-light-pink",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: className,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: header
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/DamageView.js",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/DamageView.js",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "p-0 m-0",
                    children: getDamagesData(damageData)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/DamageView.js",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/DamageView.js",
            lineNumber: 34,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function DamageView({ damageData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: buildCard(damageData.Base, "Damage", "bg-damage-header m-0 p-1 ps-2")
    }, void 0, false);
}
}}),
"[project]/src/helpers/GeneralView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/SpellView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DamageView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/DamageView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript) <export default as Collapse>");
;
;
;
;
;
;
;
;
function getTags(template) {
    let result = [];
    const tagNames = template['tags'];
    for(let i = 0; i < tagNames.length; i++){
        result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "d-flex justify-content-center",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueTag"])("Tag: ", tagNames[i], 'magenta', {
                width: '20rem'
            })
        }, i, false, {
            fileName: "[project]/src/helpers/GeneralView.js",
            lineNumber: 16,
            columnNumber: 17
        }, this));
    }
    return result;
}
function buildGeneralView(template) {
    const auto = template.isAuto[1] === 1 ? "Yes" : "No";
    const crit = template.crMult + template.crit[1] / 100.0;
    const crit_spells = template.crSpellId[1];
    let crit_views = [];
    for(let i = 0; i < crit_spells.length; i++){
        crit_views.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            spellId: crit_spells[i],
            header: "Crit Spell"
        }, i, false, {
            fileName: "[project]/src/helpers/GeneralView.js",
            lineNumber: 31,
            columnNumber: 25
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-2 bg-lite",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Id:', 'id', 'default', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Code Name:', 'cName', 'purple', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Full Name:', 'name', 'purple', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])("Automatic", auto, 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'AP:', 'ap', 'blue', '20rem', false, 3, 1),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Weight:', 'weight', 'blue', '20rem', false, 3, 1),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Levels:', 'levels', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Crit Mult:', crit, 'blue', '20rem', false, 3),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Crit Charge:', 'crChar', 'blue', '20rem'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(template, 'Crit Spell:', 'crSpellId', 'blue', '20rem', true, 0, 1),
                    getTags(template)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$DamageView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                damageData: template['damageData']
            }, void 0, false, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2"
            }, void 0, false, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$SpellView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                spellId: template.spellId,
                header: "Base Spell"
            }, void 0, false, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2"
            }, void 0, false, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            crit_views
        ]
    }, void 0, true);
}
function general(template) {
    const items = [
        {
            key: '1',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "General"
            }, void 0, false, {
                fileName: "[project]/src/helpers/GeneralView.js",
                lineNumber: 61,
                columnNumber: 20
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: buildGeneralView(template)
            }, void 0, false)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
        size: "small",
        items: items
    }, void 0, false, {
        fileName: "[project]/src/helpers/GeneralView.js",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
const GeneralView = function GeneralView(props) {
    return general(props.template);
};
const __TURBOPACK__default__export__ = GeneralView;
}}),
"[project]/src/helpers/LegendaryView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegendaryView),
    "getLegendaryBoxView": (()=>getLegendaryBoxView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/RowBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
;
;
;
;
function formatName(legendaryName) {
    const tail = " Legendary Mod";
    if (legendaryName.endsWith(tail)) {
        return legendaryName.slice(0, legendaryName.length - tail.length);
    }
    return legendaryName;
}
function getLegendaryBoxView(legendaryName, starsCount) {
    if (!legendaryName || legendaryName === "") {
        return null;
    }
    let stars = "⭐";
    stars = stars.repeat(starsCount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 ps-1 pe-1 shadow-gold", '20rem', stars, formatName(legendaryName));
}
function LegendaryView({ template }) {
    const isLeg1 = Object.keys(template.legendary1).length > 0;
    const isLeg2 = Object.keys(template.legendary2).length > 0;
    const isLeg3 = Object.keys(template.legendary3).length > 0;
    const isLeg4 = Object.keys(template.legendary4).length > 0;
    const isLeg5 = Object.keys(template.legendary5).length > 0;
    if (isLeg1 || isLeg2 || isLeg3 || isLeg4 || isLeg5) {
        const leg1 = isLeg1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 shadow-gold", '20rem', "⭐", formatName(template.legendary1.name)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        const leg2 = isLeg2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐", formatName(template.legendary2.name)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        const leg3 = isLeg3 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐", formatName(template.legendary3.name)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        const leg4 = isLeg4 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐⭐", formatName(template.legendary4.name)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        const leg5 = isLeg5 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$RowBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyValueBadge"])("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐⭐⭐", formatName(template.legendary5.name)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    className: "m-1 p-1",
                    children: "Legendary"
                }, void 0, false, {
                    fileName: "[project]/src/helpers/LegendaryView.js",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "m-1 d-flex justify-content-center",
                    children: [
                        leg1,
                        leg2,
                        leg3,
                        leg4,
                        leg5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/helpers/LegendaryView.js",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
}}),
"[project]/src/helpers/DamageOverview.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DamageOverview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/ViewHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript) <export default as Collapse>");
;
;
;
;
;
function getDamagesData(damageData, width = '20rem') {
    let result = [];
    for(let i = 0; i < damageData.length; i++){
        result.push(getDamageData(i, damageData[i], width));
    }
    return result;
}
function getDamageData(key, damageData, width = '20rem') {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "mt-1 mb-1 bg-lite",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Damage From:', 'directParent', 'default', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Damage Type Id:', 'type_id', 'default', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Code Name:', 'type_name', 'purple', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Name:', 'type_full_name', 'purple', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'DCurv:', 'curv', 'blue', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'DValue:', 'value', 'blue', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Magnitude:', 'magnitude', 'blue', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Time:', 'time', 'blue', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getField"])(damageData, 'Interval:', 'interval', 'blue', width, false, 3),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Destructible:', damageData.destructible.toString(), 'blue', width, false),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$ViewHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedField"])('Parent:', damageData.parent, 'indigo', width, false)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/DamageOverview.js",
            lineNumber: 18,
            columnNumber: 17
        }, this)
    }, key, false, {
        fileName: "[project]/src/helpers/DamageOverview.js",
        lineNumber: 17,
        columnNumber: 13
    }, this);
}
function buildCard(key, damageData, header, className) {
    if (damageData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "mt-1 mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    className: className,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: header
                    }, void 0, false, {
                        fileName: "[project]/src/helpers/DamageOverview.js",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/DamageOverview.js",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    children: getDamagesData(damageData)
                }, void 0, false, {
                    fileName: "[project]/src/helpers/DamageOverview.js",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, key, true, {
            fileName: "[project]/src/helpers/DamageOverview.js",
            lineNumber: 38,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function getDamageCards(damageData) {
    let result = [];
    let i = 0;
    for(let key in damageData){
        const damage = damageData[key];
        result.push(buildCard(i++, damage, key, "bg-proj-header m-0 p-1 ps-2"));
    }
    return result;
}
function damageCollapse(damageData) {
    const items = [
        {
            key: '1',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Damage Overview"
            }, void 0, false, {
                fileName: "[project]/src/helpers/DamageOverview.js",
                lineNumber: 65,
                columnNumber: 20
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: getDamageCards(damageData)
            }, void 0, false)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
        size: "small",
        items: items
    }, void 0, false, {
        fileName: "[project]/src/helpers/DamageOverview.js",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
function DamageOverview({ damageData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: damageCollapse(damageData)
    }, void 0, false);
}
}}),
"[project]/src/helpers/WeaponRestrictions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "weaponRestrictions": (()=>weaponRestrictions)
});
const weaponRestrictions = {
    "00646880": "Shredder mod will not add bash damage automatically",
    "0001f669": "Shredder mod will not add bash damage automatically",
    "000d1eb0": "Charging has to be setup manually for this weapon"
};
}}),
"[project]/src/helpers/mods/LegendarySetter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegendarySetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
;
class LegendarySetter {
    set(template, mod) {
        this.privateSet(template, mod);
    }
    privateSet(obj, mod) {
        const words = mod.ap.split("_");
        const lastWord = words[words.length - 1];
        if (lastWord === "Legendary1") {
            if (mod.name !== '') {
                obj.legendary1 = {
                    "id": mod.id,
                    "name": mod.name
                };
            }
        } else if (lastWord === "Legendary2") {
            if (mod.name !== '') {
                obj.legendary2 = {
                    "id": mod.id,
                    "name": mod.name
                };
            }
        } else if (lastWord === "Legendary3") {
            if (mod.name !== '') {
                obj.legendary3 = {
                    "id": mod.id,
                    "name": mod.name
                };
            }
        } else if (lastWord === "Legendary4") {
            if (mod.name !== '') {
                obj.legendary4 = {
                    "id": mod.id,
                    "name": mod.name
                };
            }
        } else if (lastWord === "Legendary5") {
            if (mod.name !== '') {
                obj.legendary5 = {
                    "id": mod.id,
                    "name": mod.name
                };
            }
        }
    }
    extractDefaultLegendary(template) {
        const result = {};
        for(const property in template.allMods){
            const propMods = template.allMods[property];
            for(let j = 0; j < propMods.length; j++){
                const mod = propMods[j];
                const modId = mod[0];
                const isUsed = mod[1];
                const modData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modId);
                if (modData) {
                    if (isUsed) {
                        this.privateSet(result, modData);
                    }
                }
            }
        }
        return result;
    }
}
}}),
"[project]/src/helpers/mods/ModsSetter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModsSetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/TemplatesRegister.js [app-ssr] (ecmascript)");
;
;
class ModsSetter {
    constructor(legendarySetter, modParser, damageExtractor, damageSetter){
        this.legendarySetter = legendarySetter;
        this.modParser = modParser;
        this.damageExtractor = damageExtractor;
        this.damageSetter = damageSetter;
    }
    // Probably deprecated (Current mods apparently have activated default mods at the beginning)
    setTemplatesDefaultMods(templates) {
        throw new Error("Not implemented");
    }
    cleanTemplateAndApplyCurrentMods(template) {
        this.resetTemplate(template);
        this.setTemplatesMods([
            template
        ]);
    }
    // It will set mods on current template, use this only for clean ones.
    setTemplatesMods(templates) {
        // Apply default damage effects like (Ammo, Projectile) they will modify default damage values
        // which later have to be modified by other buffs
        this.applyModValues(templates, true, true);
        // Extract all damages with current settings
        this.damageExtractor.extract(templates);
        this.damageSetter.setDamages(templates);
        // Apply all buffs including those who boost damage
        this.applyModValues(templates, false, false);
    }
    applyModValues(templates, mutatingDamage, setLegendary) {
        for(let i = 0; i < templates.length; i++){
            const template = templates[i];
            const allMods = template.allMods;
            for(let property in allMods){
                const propMods = allMods[property];
                for(let j = 0; j < propMods.length; j++){
                    const mod = propMods[j];
                    const modId = mod[0];
                    const isUsed = mod[1];
                    if (isUsed) {
                        const modData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modId);
                        if (modData) {
                            if (setLegendary) {
                                this.legendarySetter.set(template, modData);
                            }
                            this.modParser.applyOrRevoke(modData, template, true, mutatingDamage);
                        }
                    }
                }
            }
        }
    }
    // Forced measure due to bad-knee design
    resetTemplate(template) {
        const cleanTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$TemplatesRegister$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTemplateCopyById"])(template.id);
        for(const property in cleanTemplate){
            if (property !== "allMods") {
                template[property] = cleanTemplate[property];
            }
        }
    }
}
}}),
"[project]/src/helpers/Combinator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Iterate through {name11: ['A', 'B', 1], name12: [], name13: ['D', obj]}
// Returning every possible combinations:
// {name11: 'A', name13: 'D'}, {name11: 'B', name13: 'D'} ... {name11: 1, name13: obj}
__turbopack_esm__({
    "default": (()=>Combinator)
});
class Combinator {
    /*
        Usage:
            const comb = {name11: ['A', 'B', 'C'], name12: [], name13: ['D', 'E']};
            const combinator = new Combinator(comb);
            let result = combinator.current();
            console.log(result); // First combination
            while(combinator.next()) {
                combinator.current();
                console.log(result);
            }
    */ constructor(combinations){
        this.combinations = combinations;
        this.currentCombination = {};
        this.lastIndexes = [];
        this.curIndexes = [];
        this.names = [];
        this.hbRead = false;
        this.combinationsCount = 1;
        for(const groupName in combinations){
            this.names.push(groupName);
            const group = combinations[groupName];
            const last = group.length - 1;
            this.lastIndexes.push(last);
            if (group.length > 0) {
                this.combinationsCount *= group.length;
                this.currentCombination[groupName] = this.combinations[groupName][0];
                this.curIndexes.push(0);
            } else {
                this.curIndexes.push(-1);
            }
        }
        this.currentNumber = 1;
    }
    getCombinationsCount() {
        return this.combinationsCount;
    }
    getCurrentNumber() {
        return this.currentNumber;
    }
    next() {
        if (this.isLast()) {
            return false;
        }
        this.currentNumber += 1;
        this.nextCombination();
        this.hbRead = false;
        return true;
    }
    // Only for reading
    current() {
        if (this.hbRead) {
            return this.currentCombinations;
        } else {
            for(let i = 0; i < this.curIndexes.length; i++){
                const rowPos = this.curIndexes[i];
                const name = this.names[i];
                if (rowPos > -1) {
                    this.currentCombination[name] = this.combinations[name][rowPos];
                }
            }
            this.hbRead = true;
            return this.currentCombination;
        }
    }
    isLast() {
        let result = true;
        for(let i = 0; i < this.curIndexes.length; i++){
            if (this.curIndexes[i] !== this.lastIndexes[i]) {
                result = false;
                break;
            }
        }
        return result;
    }
    nextCombination() {
        for(let i = 0; i < this.curIndexes.length; i++){
            let next = false;
            if (this.curIndexes[i] > -1) {
                this.curIndexes[i] += 1;
                if (this.curIndexes[i] > this.lastIndexes[i]) {
                    this.curIndexes[i] = 0;
                    next = true;
                }
            } else {
                next = true;
            }
            if (!next) {
                break;
            }
        }
    }
}
}}),
"[project]/src/helpers/AccuracyHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AccuracyHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ConIronSight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/ConIronSight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$SightedTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/SightedTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MaxConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/MaxConDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MinConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/MinConDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMaxDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/RecoilMaxDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMinDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/appliers/RecoilMinDegree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/TemplateTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/mods/ModTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Mods.js [app-ssr] (ecmascript)");
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
class AccuracyHelper {
    static RECOIL = 0;
    static CON = 1;
    static BALANCE = 2;
    static ACCURACY_INFO = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Only for range weapons."
                }, void 0, false, {
                    fileName: "[project]/src/helpers/AccuracyHelper.js",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/helpers/AccuracyHelper.js",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "The calculator does not calculate accuracy from these parameters, hence it has no influence on damage, but it still can choose the best among the raw values from mods."
            }, void 0, false, {
                fileName: "[project]/src/helpers/AccuracyHelper.js",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    static ACC_PREFERENCE = {
        Recoil: AccuracyHelper.RECOIL,
        Spread: AccuracyHelper.CON,
        Balance: AccuracyHelper.BALANCE
    };
    constructor(){
        this.modEffects = new Map();
        this.modEffects.set("ConIronSight", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$ConIronSight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConIronSight"]());
        this.modEffects.set("SightedTransition", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$SightedTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SightedTransition"]());
        this.modEffects.set("MaxConDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MaxConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxConDegree"]());
        this.modEffects.set("MinConDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$MinConDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinConDegree"]());
        this.modEffects.set("RecoilMaxDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMaxDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecoilMaxDegree"]());
        this.modEffects.set("RecoilMinDegree", new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$appliers$2f$RecoilMinDegree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecoilMinDegree"]());
    }
    getCleanTemplate() {
        const result = {};
        result["maxConDegree"] = [
            1,
            1
        ];
        result["minConDegree"] = [
            1,
            1
        ];
        result["recoilMaxDegree"] = [
            1,
            1
        ];
        result["recoilMinDegree"] = [
            1,
            1
        ];
        result["conIronSight"] = [
            1,
            1
        ];
        result["sightedTransition"] = [
            1,
            1
        ];
        result["defaultMod"] = false;
        return result;
    }
    // Find best mods which do not affect on damage directly, not hidden and not excluded
    // If all are equal then default is used.
    getBestMods(template, includeGroups, preference) {
        const result = {};
        for(const categoryName in template.allMods){
            const mods = template.allMods[categoryName];
            const resultMods = {};
            if (!includeGroups.includes(categoryName)) {
                continue;
            }
            for(let i = 0; i < mods.length; i++){
                const temp = this.getCleanTemplate();
                const mod = mods[i];
                const modId = mod[0];
                const modData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Mods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().get(modId);
                if (!modData || modData.hide || !AccuracyHelper.hasAccuracyData(modData)) {
                    continue;
                }
                // 4-useful (means directly affecting on damage, we skip them)
                // Consider silencer does not affect damage except some conditions
                const useful = mod[4] && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModTools"].hasSilencer(modData);
                // 3-hidden
                if (!mod[3] && !useful && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$TemplateTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].excludeMod(template.id, modId)) {
                    temp["defaultMod"] = mod[1];
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$mods$2f$ModParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModParser"].applySpecific(temp, modData, this.modEffects);
                    resultMods[modId] = temp;
                }
            }
            result[categoryName] = resultMods;
        }
        return this.getTheBestModsForCategory(result, preference);
    }
    getTheBestModsForCategory(allMods, preference) {
        const result = {};
        let pFunc = null;
        switch(preference){
            case AccuracyHelper.RECOIL:
                pFunc = this.determineBestRecoilPriority;
                break;
            case AccuracyHelper.CON:
                pFunc = this.determineBestConPriority;
                break;
            case AccuracyHelper.BALANCE:
                pFunc = this.determineBestBalance;
                break;
            default:
                pFunc = this.determineBestBalance;
        }
        for(const groupName in allMods){
            let best = null;
            const mods = allMods[groupName];
            for(const id in mods){
                const modData = mods[id];
                best = pFunc(id, modData, best, this);
            }
            if (best) {
                result[groupName] = best[0];
            }
        }
        return result;
    }
    determineBestBalance(currentId, currentData, best, th) {
        if (!best) {
            return [
                currentId,
                currentData
            ];
        }
        const bestCon = th.getAverageCon(best[1]);
        const currentCon = th.getAverageCon(currentData);
        const bestRecoil = th.getAverageRecoil(best[1]);
        const currentRecoil = th.getAverageRecoil(currentData);
        const bestBalance = (bestCon + bestRecoil) / 2.0;
        const currentBalance = (currentCon + currentRecoil) / 2.0;
        if (bestBalance > currentBalance) {
            return [
                currentId,
                currentData
            ];
        } else if (bestBalance === currentBalance) {
            const bestTransition = th.getTransition(best[1]);
            const currentTransition = th.getTransition(currentData);
            if (bestTransition > currentTransition) {
                return [
                    currentId,
                    currentData
                ];
            } else if (bestTransition === currentTransition) {
                const bestSight = th.getSight(best[1]);
                const currentSight = th.getSight(currentData);
                if (bestSight > currentSight) {
                    return [
                        currentId,
                        currentData
                    ];
                } else if (bestSight === currentSight) {
                    if (currentData['defaultMod']) {
                        return [
                            currentId,
                            currentData
                        ];
                    }
                }
            }
        }
        return best;
    }
    determineBestConPriority(currentId, currentData, best, th) {
        if (!best) {
            return [
                currentId,
                currentData
            ];
        }
        const bestCon = th.getAverageCon(best[1]);
        const currentCon = th.getAverageCon(currentData);
        if (bestCon > currentCon) {
            return [
                currentId,
                currentData
            ];
        } else if (bestCon === currentCon) {
            const bestRecoil = th.getAverageRecoil(best[1]);
            const currentRecoil = th.getAverageRecoil(currentData);
            if (bestRecoil > currentRecoil) {
                return [
                    currentId,
                    currentData
                ];
            } else if (bestRecoil === currentRecoil) {
                const bestTransition = th.getTransition(best[1]);
                const currentTransition = th.getTransition(currentData);
                if (bestTransition > currentTransition) {
                    return [
                        currentId,
                        currentData
                    ];
                } else if (bestTransition === currentTransition) {
                    const bestSight = th.getSight(best[1]);
                    const currentSight = th.getSight(currentData);
                    if (bestSight > currentSight) {
                        return [
                            currentId,
                            currentData
                        ];
                    } else if (bestSight === currentSight) {
                        if (currentData['defaultMod']) {
                            return [
                                currentId,
                                currentData
                            ];
                        }
                    }
                }
            }
        }
        return best;
    }
    determineBestRecoilPriority(currentId, currentData, best, th) {
        if (!best) {
            return [
                currentId,
                currentData
            ];
        }
        const bestRecoil = th.getAverageRecoil(best[1]);
        const currentRecoil = th.getAverageRecoil(currentData);
        if (bestRecoil > currentRecoil) {
            return [
                currentId,
                currentData
            ];
        } else if (bestRecoil === currentRecoil) {
            const bestCon = th.getAverageCon(best[1]);
            const currentCon = th.getAverageCon(currentData);
            if (bestCon > currentCon) {
                return [
                    currentId,
                    currentData
                ];
            } else if (bestCon === currentCon) {
                const bestTransition = th.getTransition(best[1]);
                const currentTransition = th.getTransition(currentData);
                if (bestTransition > currentTransition) {
                    return [
                        currentId,
                        currentData
                    ];
                } else if (bestTransition === currentTransition) {
                    const bestSight = th.getSight(best[1]);
                    const currentSight = th.getSight(currentData);
                    if (bestSight > currentSight) {
                        return [
                            currentId,
                            currentData
                        ];
                    } else if (bestSight === currentSight) {
                        if (currentData['defaultMod']) {
                            return [
                                currentId,
                                currentData
                            ];
                        }
                    }
                }
            }
        }
        return best;
    }
    getAverageRecoil(modData) {
        const maxR = modData.recoilMaxDegree[1];
        const minR = modData.recoilMinDegree[1];
        return (maxR + minR) / 2.0;
    }
    getAverageCon(modData) {
        const maxC = modData.maxConDegree[1];
        const minC = modData.minConDegree[1];
        return (maxC + minC) / 2.0;
    }
    getTransition(modData) {
        return modData.sightedTransition[1];
    }
    getSight(modData) {
        return modData.conIronSight[1];
    }
    static accuracyProps = [
        "conIronSight",
        "maxConDegree",
        "minConDegree",
        "recoilMaxDegree",
        "recoilMinDegree",
        "sightedTransition"
    ];
    static hasAccuracyData(modData) {
        /*
        let result = false;
        for (let i = 0; i < modData.modifiers.length; i++) {
            const mod = modData.modifiers[i];
        }
        return AccuracyHelper.accuracyProps.includes(modData.props)
        */ return true;
    }
}
}}),
"[project]/src/helpers/LegsId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegsId)
});
class LegsId {
    static QUAD = '00692275';
    static ARISTOCRAT = '00606b71';
    static ANTI_ARMOR = '005281b4';
    static TWO_SHOT = '004f6d76';
    static EXECUTIONER = '004f6aa1';
    static BLOODIED = '004f6aa0';
    static STEADY = '00606c8d';
    static MELEE_RAPID = '001a7bda';
    static HITMAN = '0052414e';
    static RANGED_RAPID = '0052414f';
    static VITAL = '0052414b';
    static EXPLOSIVE = '004f5771';
    static CRIPPLING = '004ed02c';
    static SWIFT = '00524150';
    static STRENGTH = '005299fc';
    static names = LegsId.getNames();
    static getNames() {
        const names = new Map();
        names.set(LegsId.QUAD, "Quad");
        names.set(LegsId.ARISTOCRAT, "Aristocrat");
        names.set(LegsId.ANTI_ARMOR, "Anti Armor");
        names.set(LegsId.TWO_SHOT, "Two Shot");
        names.set(LegsId.EXECUTIONER, "Executioner");
        names.set(LegsId.BLOODIED, "Bloodied");
        names.set(LegsId.STEADY, "Steady");
        names.set(LegsId.MELEE_RAPID, "Melee Rapid");
        names.set(LegsId.HITMAN, "Hitman");
        names.set(LegsId.RANGED_RAPID, "Ranged Rapid");
        names.set(LegsId.VITAL, "Vital");
        names.set(LegsId.EXPLOSIVE, "Explosive");
        names.set(LegsId.CRIPPLING, "Crippling");
        names.set(LegsId.SWIFT, "Swift");
        names.set(LegsId.STRENGTH, "Strength");
        return names;
    }
    static getName(id) {
        return LegsId.names.get(id);
    }
    static getLeg1() {
        const leg = {};
        leg[LegsId.QUAD] = true;
        leg[LegsId.ARISTOCRAT] = true;
        leg[LegsId.ANTI_ARMOR] = true;
        leg[LegsId.TWO_SHOT] = true;
        leg[LegsId.EXECUTIONER] = true;
        leg[LegsId.BLOODIED] = true;
        return leg;
    }
    static getLeg2() {
        const leg = {};
        leg[LegsId.STEADY] = true;
        leg[LegsId.MELEE_RAPID] = true;
        leg[LegsId.HITMAN] = true;
        leg[LegsId.RANGED_RAPID] = true;
        leg[LegsId.VITAL] = true;
        leg[LegsId.EXPLOSIVE] = true;
        leg[LegsId.CRIPPLING] = true;
        return leg;
    }
    static getLeg3() {
        const leg = {};
        leg[LegsId.SWIFT] = true;
        leg[LegsId.STRENGTH] = true;
        return leg;
    }
}
}}),
"[project]/src/helpers/LegendaryCalcBuilder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LegendaryCalcBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/LegsId.js [app-ssr] (ecmascript)");
;
class LegendaryCalcBuilder {
    static pushIfAccessible(legs, id, accessibleList) {
        if (accessibleList[id]) {
            legs.push(id);
        }
    }
    static getLegendary1(isRange, lowHP, accessibleList, legs = null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ANTI_ARMOR, accessibleList);
        LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].EXECUTIONER, accessibleList);
        if (isRange) {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].QUAD, accessibleList);
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].TWO_SHOT, accessibleList);
        }
        if (lowHP) {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BLOODIED, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ARISTOCRAT, accessibleList);
        }
        return legs;
    }
    static initLegs(legs) {
        if (!legs) {
            legs = [];
        } else {
            legs.length = 0;
        }
        return legs;
    }
    static getLegendary2(isRange, explosive, scoped, accessibleList, legs = null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].VITAL, accessibleList);
        LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].CRIPPLING, accessibleList);
        if (isRange) {
            if (scoped) {
                LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].HITMAN, accessibleList);
            }
            if (!explosive) {
                LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].EXPLOSIVE, accessibleList);
            }
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RANGED_RAPID, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].STEADY, accessibleList);
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].MELEE_RAPID, accessibleList);
        }
        return legs;
    }
    static getLegendary3(isRange, accessibleList, legs = null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        if (isRange) {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SWIFT, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$LegsId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].STRENGTH, accessibleList);
        }
        return legs;
    }
}
}}),
"[project]/src/helpers/views/WeaponBadgeView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WeaponBadgeView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/Emoji.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/damage/DamageItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Stack.js [app-ssr] (ecmascript)");
;
;
;
;
;
function getColTag(key, value, keyId, minWidth) {
    if (!minWidth) {
        minWidth = '1rem';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 m-1 shadow-outline5",
        style: {
            width: 'fit-content',
            borderStyle: 'solid',
            backgroundColor: '#f5f5f1',
            borderColor: '#87836c',
            borderRadius: '5px',
            borderWidth: '1px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            direction: "horizontal",
            gap: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: key
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minWidth: minWidth
                    }
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                    lineNumber: 14,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    style: {
                        fontSize: '0.7rem'
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                    lineNumber: 14,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, keyId, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
function getAmmoCapacity(weapon) {
    if (weapon.getAmmoCapacity() === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return getColTag((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ammo"])("0.7rem", "m-1"), weapon.getAmmoCapacity());
}
function getBulletSize(weapon) {
    if (!weapon.isRanged()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return getColTag((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bullet"])("0.7rem", "m-1"), weapon.getShotSize());
}
function getFireRate(weapon) {
    const range = weapon.isRanged();
    const key = range ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$Emoji$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fireRate"])("0.7rem", "m-1") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "👊🏼"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 36,
        columnNumber: 55
    }, this);
    return getColTag(key, weapon.getFireRate().toFixed(0));
}
function getReload(weapon) {
    if (weapon.getReloadTime() === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "⌛"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 44,
        columnNumber: 22
    }, this), weapon.getReloadTime().toFixed(1));
}
function getCrit(weapon) {
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "☠️"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 48,
        columnNumber: 22
    }, this), weapon.getCritBonus().toFixed(0));
}
function getSneak(weapon) {
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "🐍"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 52,
        columnNumber: 22
    }, this), weapon.getSneakBonus().toFixed(0));
}
function getHealth(player) {
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "❤️"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 56,
        columnNumber: 22
    }, this), player.health.value.toFixed(0));
}
function getTeam(player) {
    if (!player.team) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "👨‍👩‍👧‍👦"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 63,
        columnNumber: 22
    }, this), "", null, "0rem");
}
function getStrength(playerStats, weapon) {
    if (weapon.isRanged()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.7rem'
        },
        children: "💪"
    }, void 0, false, {
        fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
        lineNumber: 70,
        columnNumber: 22
    }, this), playerStats.strength.value);
}
function buildChanceAccuracyString(damage) {
    const chance = damage.chance;
    const accuracy = damage.finalAccuracy;
    if (chance === 100 && accuracy === 100) {
        return "";
    } else if (accuracy === 100 && chance < 100) {
        return " (🎲" + chance + "%)";
    } else if (accuracy < 100 && chance === 100) {
        return " (🎯" + accuracy + "%)";
    } else {
        return " (🎲" + chance + "% | 🎯" + accuracy + "%)";
    }
}
function getDamages(weapon) {
    const result = [];
    for(let i = 0; i < weapon.damages.length; i++){
        const damage = weapon.damages[i];
        if (!damage.isUsed) {
            continue;
        }
        const accuracyString = buildChanceAccuracyString(damage);
        let value = damage.time === 0 ? damage.damage + accuracyString : damage.damage + " - " + damage.time + "s" + accuracyString;
        const icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$damage$2f$DamageItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSymbolStyle"])(damage.kind)[0];
        result.push(getColTag(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: '0.7rem'
            },
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
            lineNumber: 98,
            columnNumber: 31
        }, this), value, i));
    }
    return result;
}
function WeaponBadgeView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                className: "p-0 mt-3 mb-0",
                children: "Specs"
            }, void 0, false, {
                fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-0"
            }, void 0, false, {
                fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row p-1 justify-content-center mb-2",
                children: [
                    getDamages(props.weapon),
                    getAmmoCapacity(props.weapon),
                    getBulletSize(props.weapon),
                    getFireRate(props.weapon),
                    getReload(props.weapon),
                    getCrit(props.weapon),
                    getSneak(props.weapon),
                    getHealth(props.player),
                    getTeam(props.player),
                    getStrength(props.playerStats, props.weapon)
                ]
            }, void 0, true, {
                fileName: "[project]/src/helpers/views/WeaponBadgeView.js",
                lineNumber: 108,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=src_helpers_d807ce._.js.map