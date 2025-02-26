module.exports = {

"[project]/src/perkCardBoosts/BoostHelpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calculateSpecial": (()=>calculateSpecial)
});
function calculateSpecial(boostDamage) {
    for(let key in boostDamage.special){
        boostDamage.special[key] = 0;
    }
    for(let key in boostDamage){
        if (key === "special") {
            continue;
        }
        const card = boostDamage[key];
        const special = boostDamage.special;
        const type = card.category.toLowerCase();
        if (card.is_used) {
            special[type] += card.cost[card.rank - 1];
        }
    }
}
}}),
"[project]/src/perkCardBoosts/PerkImageProvider.js (require.context ../resources/perks/**)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
    "./adrenaline.webp": {
        id: ()=>'[project]/src/resources/perks/adrenaline.webp.mjs { IMAGE => "[project]/src/resources/perks/adrenaline.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/adrenaline.webp.mjs { IMAGE => "[project]/src/resources/perks/adrenaline.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./archer.webp": {
        id: ()=>'[project]/src/resources/perks/archer.webp.mjs { IMAGE => "[project]/src/resources/perks/archer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/archer.webp.mjs { IMAGE => "[project]/src/resources/perks/archer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./better_criticals.webp": {
        id: ()=>'[project]/src/resources/perks/better_criticals.webp.mjs { IMAGE => "[project]/src/resources/perks/better_criticals.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/better_criticals.webp.mjs { IMAGE => "[project]/src/resources/perks/better_criticals.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bloody_mess.webp": {
        id: ()=>'[project]/src/resources/perks/bloody_mess.webp.mjs { IMAGE => "[project]/src/resources/perks/bloody_mess.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/bloody_mess.webp.mjs { IMAGE => "[project]/src/resources/perks/bloody_mess.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./bow_before_me.webp": {
        id: ()=>'[project]/src/resources/perks/bow_before_me.webp.mjs { IMAGE => "[project]/src/resources/perks/bow_before_me.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/bow_before_me.webp.mjs { IMAGE => "[project]/src/resources/perks/bow_before_me.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./class_freak.webp": {
        id: ()=>'[project]/src/resources/perks/class_freak.webp.mjs { IMAGE => "[project]/src/resources/perks/class_freak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/class_freak.webp.mjs { IMAGE => "[project]/src/resources/perks/class_freak.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./commando.webp": {
        id: ()=>'[project]/src/resources/perks/commando.webp.mjs { IMAGE => "[project]/src/resources/perks/commando.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/commando.webp.mjs { IMAGE => "[project]/src/resources/perks/commando.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./covert_operative.webp": {
        id: ()=>'[project]/src/resources/perks/covert_operative.webp.mjs { IMAGE => "[project]/src/resources/perks/covert_operative.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/covert_operative.webp.mjs { IMAGE => "[project]/src/resources/perks/covert_operative.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./demolition_expert.webp": {
        id: ()=>'[project]/src/resources/perks/demolition_expert.webp.mjs { IMAGE => "[project]/src/resources/perks/demolition_expert.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/demolition_expert.webp.mjs { IMAGE => "[project]/src/resources/perks/demolition_expert.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./exterminator.webp": {
        id: ()=>'[project]/src/resources/perks/exterminator.webp.mjs { IMAGE => "[project]/src/resources/perks/exterminator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/exterminator.webp.mjs { IMAGE => "[project]/src/resources/perks/exterminator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./follow_through.webp": {
        id: ()=>'[project]/src/resources/perks/follow_through.webp.mjs { IMAGE => "[project]/src/resources/perks/follow_through.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/follow_through.webp.mjs { IMAGE => "[project]/src/resources/perks/follow_through.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gladiator.webp": {
        id: ()=>'[project]/src/resources/perks/gladiator.webp.mjs { IMAGE => "[project]/src/resources/perks/gladiator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/gladiator.webp.mjs { IMAGE => "[project]/src/resources/perks/gladiator.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./glow_sight.webp": {
        id: ()=>'[project]/src/resources/perks/glow_sight.webp.mjs { IMAGE => "[project]/src/resources/perks/glow_sight.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/glow_sight.webp.mjs { IMAGE => "[project]/src/resources/perks/glow_sight.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ground_pounder.webp": {
        id: ()=>'[project]/src/resources/perks/ground_pounder.webp.mjs { IMAGE => "[project]/src/resources/perks/ground_pounder.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/ground_pounder.webp.mjs { IMAGE => "[project]/src/resources/perks/ground_pounder.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./guerrilla.webp": {
        id: ()=>'[project]/src/resources/perks/guerrilla.webp.mjs { IMAGE => "[project]/src/resources/perks/guerrilla.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/guerrilla.webp.mjs { IMAGE => "[project]/src/resources/perks/guerrilla.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gun_fu.webp": {
        id: ()=>'[project]/src/resources/perks/gun_fu.webp.mjs { IMAGE => "[project]/src/resources/perks/gun_fu.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/gun_fu.webp.mjs { IMAGE => "[project]/src/resources/perks/gun_fu.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./gunslinger.webp": {
        id: ()=>'[project]/src/resources/perks/gunslinger.webp.mjs { IMAGE => "[project]/src/resources/perks/gunslinger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/gunslinger.webp.mjs { IMAGE => "[project]/src/resources/perks/gunslinger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./heavy_gunner.webp": {
        id: ()=>'[project]/src/resources/perks/heavy_gunner.webp.mjs { IMAGE => "[project]/src/resources/perks/heavy_gunner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/heavy_gunner.webp.mjs { IMAGE => "[project]/src/resources/perks/heavy_gunner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./incisor.webp": {
        id: ()=>'[project]/src/resources/perks/incisor.webp.mjs { IMAGE => "[project]/src/resources/perks/incisor.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/incisor.webp.mjs { IMAGE => "[project]/src/resources/perks/incisor.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./iron_fist.webp": {
        id: ()=>'[project]/src/resources/perks/iron_fist.webp.mjs { IMAGE => "[project]/src/resources/perks/iron_fist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/iron_fist.webp.mjs { IMAGE => "[project]/src/resources/perks/iron_fist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./lock_and_load.webp": {
        id: ()=>'[project]/src/resources/perks/lock_and_load.webp.mjs { IMAGE => "[project]/src/resources/perks/lock_and_load.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/lock_and_load.webp.mjs { IMAGE => "[project]/src/resources/perks/lock_and_load.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./martial_artist.webp": {
        id: ()=>'[project]/src/resources/perks/martial_artist.webp.mjs { IMAGE => "[project]/src/resources/perks/martial_artist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/martial_artist.webp.mjs { IMAGE => "[project]/src/resources/perks/martial_artist.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./mister_sandman.webp": {
        id: ()=>'[project]/src/resources/perks/mister_sandman.webp.mjs { IMAGE => "[project]/src/resources/perks/mister_sandman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/mister_sandman.webp.mjs { IMAGE => "[project]/src/resources/perks/mister_sandman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./nerd_rage.webp": {
        id: ()=>'[project]/src/resources/perks/nerd_rage.webp.mjs { IMAGE => "[project]/src/resources/perks/nerd_rage.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/nerd_rage.webp.mjs { IMAGE => "[project]/src/resources/perks/nerd_rage.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./ninja.webp": {
        id: ()=>'[project]/src/resources/perks/ninja.webp.mjs { IMAGE => "[project]/src/resources/perks/ninja.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/ninja.webp.mjs { IMAGE => "[project]/src/resources/perks/ninja.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./party_girl_boy.webp": {
        id: ()=>'[project]/src/resources/perks/party_girl_boy.webp.mjs { IMAGE => "[project]/src/resources/perks/party_girl_boy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/party_girl_boy.webp.mjs { IMAGE => "[project]/src/resources/perks/party_girl_boy.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./power_user.webp": {
        id: ()=>'[project]/src/resources/perks/power_user.webp.mjs { IMAGE => "[project]/src/resources/perks/power_user.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/power_user.webp.mjs { IMAGE => "[project]/src/resources/perks/power_user.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./rifleman.webp": {
        id: ()=>'[project]/src/resources/perks/rifleman.webp.mjs { IMAGE => "[project]/src/resources/perks/rifleman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/rifleman.webp.mjs { IMAGE => "[project]/src/resources/perks/rifleman.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./scattershot.webp": {
        id: ()=>'[project]/src/resources/perks/scattershot.webp.mjs { IMAGE => "[project]/src/resources/perks/scattershot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/scattershot.webp.mjs { IMAGE => "[project]/src/resources/perks/scattershot.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./science.webp": {
        id: ()=>'[project]/src/resources/perks/science.webp.mjs { IMAGE => "[project]/src/resources/perks/science.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/science.webp.mjs { IMAGE => "[project]/src/resources/perks/science.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./shotgunner.webp": {
        id: ()=>'[project]/src/resources/perks/shotgunner.webp.mjs { IMAGE => "[project]/src/resources/perks/shotgunner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/shotgunner.webp.mjs { IMAGE => "[project]/src/resources/perks/shotgunner.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./slugger.webp": {
        id: ()=>'[project]/src/resources/perks/slugger.webp.mjs { IMAGE => "[project]/src/resources/perks/slugger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/slugger.webp.mjs { IMAGE => "[project]/src/resources/perks/slugger.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./stabilized.webp": {
        id: ()=>'[project]/src/resources/perks/stabilized.webp.mjs { IMAGE => "[project]/src/resources/perks/stabilized.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/stabilized.webp.mjs { IMAGE => "[project]/src/resources/perks/stabilized.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./strange_in_numbers.webp": {
        id: ()=>'[project]/src/resources/perks/strange_in_numbers.webp.mjs { IMAGE => "[project]/src/resources/perks/strange_in_numbers.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/strange_in_numbers.webp.mjs { IMAGE => "[project]/src/resources/perks/strange_in_numbers.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tank_killer.webp": {
        id: ()=>'[project]/src/resources/perks/tank_killer.webp.mjs { IMAGE => "[project]/src/resources/perks/tank_killer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/tank_killer.webp.mjs { IMAGE => "[project]/src/resources/perks/tank_killer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./tenderizer.webp": {
        id: ()=>'[project]/src/resources/perks/tenderizer.webp.mjs { IMAGE => "[project]/src/resources/perks/tenderizer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/tenderizer.webp.mjs { IMAGE => "[project]/src/resources/perks/tenderizer.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    },
    "./toft.webp": {
        id: ()=>'[project]/src/resources/perks/toft.webp.mjs { IMAGE => "[project]/src/resources/perks/toft.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)',
        module: ()=>__turbopack_require__('[project]/src/resources/perks/toft.webp.mjs { IMAGE => "[project]/src/resources/perks/toft.webp [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)')
    }
});
}}),
"[project]/src/perkCardBoosts/PerkImageProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getPerkImage)
});
const perks = __turbopack_module_context__(__turbopack_require__("[project]/src/perkCardBoosts/PerkImageProvider.js (require.context ../resources/perks/**)"));
function getPerkImage(name) {
    try {
        return perks('./' + name + '.webp');
    } catch  {
        return '';
    }
}
}}),
"[project]/src/perkCardBoosts/BRows.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BRow1": (()=>BRow1),
    "BRow10": (()=>BRow10),
    "BRow2": (()=>BRow2),
    "BRow3": (()=>BRow3),
    "BRow4": (()=>BRow4),
    "BRow5": (()=>BRow5),
    "BRow6": (()=>BRow6),
    "BRow7": (()=>BRow7),
    "BRow8": (()=>BRow8),
    "BRow9": (()=>BRow9)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WarningPopover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/GroupView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/BoostHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkImageProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/templates/calc/view/EmblemCalcRowView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/viewComponents/checkbox/UCheckbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/StackEffectView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCard/PerkCardProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/views/BSRadio.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript)");
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
function getPerkColor(category) {
    return "bg-" + category.toLowerCase() + "-card";
}
function getPerkOutline(category) {
    return category.toLowerCase() + "-outline-card";
}
function badgeIf(value, condition, onClick) {
    if (condition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "p-1",
            onClick: onClick,
            style: {
                width: '2.5rem'
            },
            variant: "warning",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BRows.js",
            lineNumber: 27,
            columnNumber: 17
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
function checkCardConditions(card, player, setPlayer, extraDamage) {
    if (card.name === "Nerd Rage") {
        card.displayed_value = card.is_used && player.health.value <= 20.0 ? card.value : 0.0;
    } else if (card.name === "TOFT") {
        card.displayed_value = card.is_used && player.team ? card.value : 0.0;
    } else if (card.name === "Follow Through") {
        card.displayed_value = card.is_used && extraDamage.useSneak ? card.value : 0.0;
    } else {
        card.displayed_value = card.is_used ? card.value : 0.0;
    }
    if (card.name === "Party Girl / Boy") {
        if (card.displayed_value === 0) {
            player.alcoholEffects = 1.0;
        } else {
            player.alcoholEffects = card.displayed_value;
        }
        setPlayer({
            ...player
        });
    } else if (card.name === "Strange In Nums") {
        player.strange = card.displayed_value;
        setPlayer({
            ...player
        });
    } else if (card.name === "Class Freak") {
        player.freak = card.displayed_value;
        setPlayer({
            ...player
        });
    }
}
function getItem(card, setBoostDamage, boostDamage, cardType, setCardType, xBadge = false, symbol = '%', player = null, setPlayer = null, extraDamage = null) {
    function onClick(e) {
        changeRank();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boostDamage);
        setBoostDamage({
            ...boostDamage
        });
    }
    function changeRank() {
        const rank_len = card.rank_values.length;
        card.rank = card.rank % rank_len + 1;
        card.value = card.rank_values[card.rank - 1] * card.x;
        checkCardConditions(card, player, setPlayer, extraDamage);
    }
    function onClickX(e) {
        card.x = card.x % card.max_x + 1;
        card.value = card.rank_values[card.rank - 1] * card.x;
        card.displayed_value = card.is_used ? card.value : 0.0;
        setBoostDamage({
            ...boostDamage
        });
    }
    function isUsed(e) {
        card.is_used = e.target.checked;
        checkCardConditions(card, player, setPlayer, extraDamage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boostDamage);
        setBoostDamage({
            ...boostDamage
        });
    }
    function getInfo() {
        // let info = card.info.replaceAll("{1}", number).replace("{2}", parseInt(number / 4)).replace("{3}", parseInt(number * 2));
        // info = info.replaceAll("{4}", number * 3);
        function onRadioClick(e) {
            console.log(e);
            setCardType(parseInt(e.target.value));
        }
        function getTypeRadio() {
            if (card.id.length > 1) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-0 pb-2 d-flex justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$BSRadio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        small: "true",
                        pairs: {
                            Basic: 0,
                            Expert: 1,
                            Master: 2
                        },
                        selectedValue: cardType,
                        onClick: onRadioClick
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BRows.js",
                        lineNumber: 102,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCardBoosts/BRows.js",
                    lineNumber: 101,
                    columnNumber: 21
                }, this);
            } else {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
            }
        }
        const index = card.id.length > 1 ? cardType : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                getTypeRadio(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$StackEffectView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCard$2f$PerkCardProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPerkCard"])(card.id[index])
                }, void 0, false, {
                    fileName: "[project]/src/perkCardBoosts/BRows.js",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    }
    const outline = card.is_used ? getPerkOutline(card.category) : "";
    const w = xBadge ? '9rem' : '11.5rem';
    const perkColor = getPerkColor(card.category);
    const cName = "btn text-start " + perkColor;
    const filter = card.is_used ? "grayscale(0%) contrast(1.1)" : "grayscale(80%) contrast(1.1)";
    const imagePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkImageProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(card.im_name);
    const header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex center-text",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$templates$2f$calc$2f$view$2f$EmblemCalcRowView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMark"])(card.im_name, imagePath, "mt-0 mb-0 ms-0 me-3 shadow-outline-gold2", '2rem', '1.8rem', '4px'),
            card.name
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 123,
        columnNumber: 20
    }, this);
    const bgCardColor = getComputedStyle(document.documentElement).getPropertyValue("--" + perkColor + "-color");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-1 pe-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$views$2f$GroupView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: outline,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "justify-content-center mb-1 mt-1 flex-nowrap",
                style: {
                    filter: filter
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        className: "ps-2 pe-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$viewComponents$2f$checkbox$2f$UCheckbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UCheckbox"], {
                            onChange: isUsed,
                            checked: card.is_used,
                            checkBorderColor: bgCardColor,
                            checkBgColor: bgCardColor
                        }, void 0, false, {
                            fileName: "[project]/src/perkCardBoosts/BRows.js",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BRows.js",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: cName,
                        style: {
                            width: w
                        },
                        onClick: onClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "ms-0 me-2",
                                bg: "warning",
                                children: card.cost[card.rank - 1]
                            }, void 0, false, {
                                fileName: "[project]/src/perkCardBoosts/BRows.js",
                                lineNumber: 133,
                                columnNumber: 25
                            }, this),
                            card.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/perkCardBoosts/BRows.js",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this),
                    badgeIf("x" + card.x, xBadge, onClickX),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        className: "justify-content-center p-0",
                        style: {
                            width: '3.5rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge " + perkColor,
                            style: {
                                width: '2.7rem'
                            },
                            children: [
                                card.displayed_value,
                                symbol
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/perkCardBoosts/BRows.js",
                            lineNumber: 138,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BRows.js",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                        className: "ps-1 pe-1 p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WarningPopover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningPopover"], {
                            element: infoButton(),
                            message: getInfo(),
                            header: header,
                            className: "popover-adjustable2"
                        }, void 0, false, {
                            fileName: "[project]/src/perkCardBoosts/BRows.js",
                            lineNumber: 141,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BRows.js",
                        lineNumber: 140,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/perkCardBoosts/BRows.js",
                lineNumber: 128,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BRows.js",
            lineNumber: 127,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 126,
        columnNumber: 9
    }, this);
}
function infoButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "p-1",
        variant: "white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "❗"
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BRows.js",
                lineNumber: 152,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BRows.js",
            lineNumber: 152,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 151,
        columnNumber: 9
    }, this);
}
function BRow1({ setBoostDamage, boostDamage, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.incisor, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.lock_and_load, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.martial_artist, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.scattershot, setBoostDamage, boostDamage, cardType, setCardType)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 159,
        columnNumber: 9
    }, this);
}
;
function BRow2({ setBoostDamage, boostDamage, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.gladiator, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.heavy_gunner, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.shotgunner, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.slugger, setBoostDamage, boostDamage, cardType, setCardType)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 170,
        columnNumber: 9
    }, this);
}
;
function BRow3({ setBoostDamage, boostDamage, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.iron_fist, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.archer, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.commando, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.rifleman, setBoostDamage, boostDamage, cardType, setCardType)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 181,
        columnNumber: 9
    }, this);
}
;
function BRow4({ setBoostDamage, boostDamage, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.glow_sight, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.bow_before_me, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.exterminator, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.tank_killer, setBoostDamage, boostDamage, cardType, setCardType)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 192,
        columnNumber: 9
    }, this);
}
;
function BRow5({ setBoostDamage, boostDamage, player, setPlayer, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.ground_pounder, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.tenderizer, setBoostDamage, boostDamage, cardType, setCardType, true),
            getItem(boostDamage.party_girl_boy, setBoostDamage, boostDamage, cardType, setCardType, false, "x", player, setPlayer),
            getItem(boostDamage.strange_in_numbers, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 203,
        columnNumber: 9
    }, this);
}
;
function BRow6({ setBoostDamage, boostDamage, player, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.stabilized, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.demolition_expert, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.science, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.nerd_rage, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 214,
        columnNumber: 9
    }, this);
}
;
function BRow7({ setBoostDamage, boostDamage, player, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.power_user, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.adrenaline, setBoostDamage, boostDamage, cardType, setCardType, true),
            getItem(boostDamage.gun_fu, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.covert_operative, setBoostDamage, boostDamage, cardType, setCardType, false, 'x')
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 225,
        columnNumber: 9
    }, this);
}
function BRow8({ setBoostDamage, boostDamage, player, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.mister_sandman, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.ninja, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.guerrilla, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.gunslinger, setBoostDamage, boostDamage, cardType, setCardType)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 236,
        columnNumber: 9
    }, this);
}
function BRow9({ setBoostDamage, boostDamage, player, setPlayer, cardType, setCardType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            getItem(boostDamage.bloody_mess, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.better_criticals, setBoostDamage, boostDamage, cardType, setCardType),
            getItem(boostDamage.class_freak, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer),
            getItem(boostDamage.toft, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 247,
        columnNumber: 9
    }, this);
}
function BRow10({ setBoostDamage, boostDamage, cardType, setCardType, extraDamage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: getItem(boostDamage.follow_through, setBoostDamage, boostDamage, cardType, setCardType, false, "%", null, null, extraDamage)
    }, void 0, false, {
        fileName: "[project]/src/perkCardBoosts/BRows.js",
        lineNumber: 258,
        columnNumber: 9
    }, this);
}
;
}}),
"[project]/src/perkCardBoosts/PerkCardBuilder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PerkCardBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EBoosts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/entities/EBoosts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/BoostHelpers.js [app-ssr] (ecmascript)");
;
;
class PerkCardBuilder {
    static build(buildName, setBoostDamage, player, setPlayer) {
        let boosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EBoosts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultBoosts"])();
        if (buildName !== "Reset") {
            PerkCardBuilder.setupGeneral(boosts, player);
        }
        switch(buildName){
            case "Heavy":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                break;
            case "Heavy Explosive":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                PerkCardBuilder.setupCard(boosts.demolition_expert, 5);
                break;
            case "Heavy FullHouse":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                PerkCardBuilder.setupCard(boosts.demolition_expert, 5);
                PerkCardBuilder.setupCard(boosts.adrenaline, 5, 6);
                PerkCardBuilder.setupCard(boosts.tenderizer, 3);
                PerkCardBuilder.setupCard(boosts.toft, 4);
                break;
            case "Shotgun":
                PerkCardBuilder.setupCard(boosts.shotgunner, 11);
                PerkCardBuilder.setupCard(boosts.scattershot, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Rifle":
                PerkCardBuilder.setupCard(boosts.commando, 11);
                PerkCardBuilder.setupCard(boosts.ground_pounder, 3);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Rifle":
                PerkCardBuilder.setupCard(boosts.rifleman, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Pistol":
                PerkCardBuilder.setupCard(boosts.guerrilla, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Pistol":
                PerkCardBuilder.setupCard(boosts.gunslinger, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Bow":
                PerkCardBuilder.setupCard(boosts.archer, 11);
                PerkCardBuilder.setupCard(boosts.bow_before_me, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Melee One-Handed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.gladiator, 11);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Melee Two-Handed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.slugger, 11);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Unarmed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.iron_fist, 3);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            default:
                break;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boosts);
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.alcoholEffects = boosts.party_girl_boy.displayed_value > 0 ? boosts.party_girl_boy.displayed_value : 1;
        setPlayer({
            ...player
        });
        setBoostDamage(boosts);
    }
    static setupGeneral(boosts, player) {
        PerkCardBuilder.setupCard(boosts.bloody_mess, 3);
        PerkCardBuilder.setupCard(boosts.class_freak, 3);
        PerkCardBuilder.setupCard(boosts.strange_in_numbers, 1);
        PerkCardBuilder.setupCard(boosts.nerd_rage, 3);
        boosts.nerd_rage.displayed_value = player.health.value <= 20.0 ? boosts.nerd_rage.value : 0.0;
    }
    static setupCard(card, rank, x = 1) {
        if (rank === 0) {
            x = 1;
        }
        card.rank = rank;
        card.x = x;
        card.value = card.rank_values[card.rank - 1] * x;
        card.is_used = rank !== 0;
        card.displayed_value = card.value;
    }
    static getImageNamesForPickedCards(boosts) {
        const result = [];
        for(const name in boosts){
            const perk = boosts[name];
            if (perk.is_used) {
                result.push(perk.im_name);
            }
        }
        return result;
    }
    static setupIfAccessible(boosts, fieldName, rank, accessibleItems, x = 1) {
        if (accessibleItems[fieldName]) {
            PerkCardBuilder.setupCard(boosts[fieldName], rank, x);
        }
    }
    static buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag, shotgunTag, main, temp, leg, drink, team, lowHp, pa, explosive, crit, sneak, night, useSerums, player, bodyTags, creatureTags, accessiblePerks) {
        let boosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$EBoosts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultBoosts"])();
        if (main) {
            PerkCardBuilder.setupIfAccessible(boosts, "bloody_mess", 3, accessiblePerks.main);
            if (bodyTags.includes("glowing")) {
                PerkCardBuilder.setupIfAccessible(boosts, "glow_sight", 3, accessiblePerks.main);
            }
        }
        if (silencerTag && sneak && night && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "mister_sandman", 2, accessiblePerks.main);
        }
        if (useSerums && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "class_freak", 3, accessiblePerks.main);
        }
        if (team && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "strange_in_numbers", 1, accessiblePerks.main);
        }
        if (crit && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "better_criticals", 3, accessiblePerks.main);
        }
        if (lowHp && main) {
            player.health.value = 20;
            PerkCardBuilder.setupIfAccessible(boosts, "nerd_rage", 3, accessiblePerks.main);
        }
        if (energyTag && wType !== "Heavy" && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "science", 6, accessiblePerks.main);
        }
        if (fusionTag && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "power_user", 3, accessiblePerks.main);
        }
        if (temp) {
            PerkCardBuilder.setupIfAccessible(boosts, "adrenaline", 5, accessiblePerks.temp, 6);
            PerkCardBuilder.setupIfAccessible(boosts, "tenderizer", 3, accessiblePerks.temp);
        }
        if (leg) {
            if (sneak) {
                PerkCardBuilder.setupIfAccessible(boosts, "follow_through", 4, accessiblePerks.leg);
            } else {
                PerkCardBuilder.setupIfAccessible(boosts, "toft", 4, accessiblePerks.leg);
            }
        }
        if (sneak && main) {
            if (wType === "Melee" || wType === "Unarmed") {
                PerkCardBuilder.setupIfAccessible(boosts, "ninja", 3, accessiblePerks.main);
            } else {
                PerkCardBuilder.setupIfAccessible(boosts, "covert_operative", 3, accessiblePerks.main);
            }
        }
        if (explosive && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "demolition_expert", 5, accessiblePerks.main);
        }
        if (main) {
            switch(wType){
                case "Heavy":
                    if (pa) {
                        PerkCardBuilder.setupIfAccessible(boosts, "stabilized", 3, accessiblePerks.main); // Works with rockets / grenades?
                    }
                    PerkCardBuilder.setupIfAccessible(boosts, "lock_and_load", 3, accessiblePerks.main); // Works with rockets / grenades?
                    if (!explosiveTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "heavy_gunner", 11, accessiblePerks.main);
                    }
                    if (shotgunTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "lock_and_load", 2, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "heavy_gunner", 9, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "shotgunner", 8, accessiblePerks.main);
                    }
                    break;
                case "Shotgun":
                    PerkCardBuilder.setupIfAccessible(boosts, "shotgunner", 11, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "scattershot", 3, accessiblePerks.main);
                    break;
                case "Rifle":
                    PerkCardBuilder.setupIfAccessible(boosts, "tank_killer", 3, accessiblePerks.main);
                    if (automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "commando", 11, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "ground_pounder", 3, accessiblePerks.main);
                    } else {
                        PerkCardBuilder.setupIfAccessible(boosts, "rifleman", 11, accessiblePerks.main);
                    }
                    break;
                case "Pistol":
                    PerkCardBuilder.setupIfAccessible(boosts, "tank_killer", 3, accessiblePerks.main);
                    if (automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "guerrilla", 11, accessiblePerks.main);
                    } else {
                        PerkCardBuilder.setupIfAccessible(boosts, "gunslinger", 11, accessiblePerks.main);
                    }
                    break;
                case "Bow":
                    PerkCardBuilder.setupIfAccessible(boosts, "archer", 11, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "bow_before_me", 3, accessiblePerks.main);
                    break;
                case "Melee":
                    PerkCardBuilder.setupIfAccessible(boosts, "incisor", 3, accessiblePerks.main);
                    if (!automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "martial_artist", 3, accessiblePerks.main);
                    }
                    if (drink) {
                        PerkCardBuilder.setupIfAccessible(boosts, "party_girl_boy", 2, accessiblePerks.main);
                    }
                    if (oneHandedTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "gladiator", 11, accessiblePerks.main);
                    } else if (twoHandedTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "slugger", 11, accessiblePerks.main);
                    }
                    break;
                case "Unarmed":
                    PerkCardBuilder.setupIfAccessible(boosts, "incisor", 3, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "martial_artist", 3, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "iron_fist", 3, accessiblePerks.main);
                    if (drink) {
                        PerkCardBuilder.setupIfAccessible(boosts, "party_girl_boy", 2, accessiblePerks.main);
                    }
                    break;
                default:
                    break;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boosts);
        if (temp && boosts.special.agility > 15) {
            const extra = boosts.special.agility - 15;
            let adr = 5 - extra;
            if (adr < 0) {
                adr = 0;
            }
            if (adr > 0) {
                PerkCardBuilder.setupIfAccessible(boosts, "adrenaline", adr, accessiblePerks.temp, 6);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boosts);
        }
        if (main && boosts.special.perception < 15 && creatureTags.includes("bug")) {
            let extra = 15 - boosts.special.perception;
            if (extra > 3) {
                extra = 3;
            }
            if (extra > 0) {
                PerkCardBuilder.setupIfAccessible(boosts, "exterminator", extra, accessiblePerks.main);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpecial"])(boosts);
        }
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.team = team;
        player.alcoholEffects = boosts.party_girl_boy.displayed_value > 0 ? boosts.party_girl_boy.displayed_value : 1;
        return boosts;
    }
}
}}),
"[project]/src/perkCardBoosts/BoostTable.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/BRows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/WTypeDropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/PerkCardBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/OverlayTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Popover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/DropdownButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-ssr] (ecmascript)");
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
const popover = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    className: "popover-adjustable",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
            as: "h3",
            children: "Perks"
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
            lineNumber: 16,
            columnNumber: 9
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
            children: "'Incisor' is applied to 'All / Melee / Unarmed' weapon's type. 'Stabilized' is applied to 'All / Heavy' weapon's type. 'Tank Killer' is applied to 'All / Pistol / Rifle' weapon's type. 'TOFT' can reduce ballistic resistance of a creature when it hits back so you have to handle this manually under the 'Creature' section if you want to see the exact damage number as in the game."
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
            lineNumber: 17,
            columnNumber: 9
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
    lineNumber: 15,
    columnNumber: 5
}, this);
function getStatBadge(name, value) {
    const cParams = 'ms-1 me-1 mt-0 mb-0 pt-1 pb-1 bg-' + name + "-card shadow-outline";
    const letter = name.charAt(0).toUpperCase();
    const color = value > 15 ? "red" : "black";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: cParams,
        style: {
            width: '2.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1rem',
                    fontWeight: 'bold'
                },
                children: letter
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 32,
                columnNumber: 62
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-1 p-auto",
                bg: "white",
                text: "black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: color
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                    lineNumber: 33,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
function getDropdown(setBoostDamage, player, setPlayer) {
    function onSelect(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$PerkCardBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].build(e, setBoostDamage, player, setPlayer);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "d-flex justify-content-center mb-3",
        onSelect: onSelect,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "Choose a build"
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 43,
                columnNumber: 106
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
            lineNumber: 43,
            columnNumber: 99
        }, void 0),
        variant: "warning",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Reset",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Reset")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Heavy",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Heavy")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Heavy Explosive",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Heavy", "Heavy Explosive")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Heavy FullHouse",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Heavy", "Heavy FullHouse")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Shotgun",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Shotgun")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Automatic Rifle",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Rifle", "Automatic Rifle")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Non-Automatic Rifle",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Rifle", "Non-Automatic Rifle")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Automatic Pistol",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Pistol", "Automatic Pistol")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Non-Automatic Pistol",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Pistol", "Non-Automatic Pistol")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Bow",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Bow")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Melee One-Handed",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Melee", "Melee One-Handed")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Melee Two-Handed",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Melee", "Melee Two-Handed")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
                eventKey: "Unarmed",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$WTypeDropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRowWithImage"])("Unarmed")
            }, void 0, false, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
const BoostTable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function BoostTable({ player, setPlayer, setBoostDamage, boostDamage, extraDamage }) {
    console.log("BoostTable");
    const [cardType, setCardType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Basic Expert Master
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "ps-0 pe-0",
        children: [
            getDropdown(setBoostDamage, player, setPlayer),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                        className: "ps-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex justify-content-center",
                            children: [
                                getStatBadge("strength", boostDamage.special.strength),
                                getStatBadge("perception", boostDamage.special.perception),
                                getStatBadge("endurance", boostDamage.special.endurance),
                                getStatBadge("charisma", boostDamage.special.charisma),
                                getStatBadge("intelligence", boostDamage.special.intelligence),
                                getStatBadge("agility", boostDamage.special.agility),
                                getStatBadge("luck", boostDamage.special.luck)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                        className: "bg-lite p-1 m-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-0 m-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow1"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow2"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow3"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow4"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow5"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow6"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow7"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow8"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow9"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BRows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRow10"], {
                                    setBoostDamage: setBoostDamage,
                                    boostDamage: boostDamage,
                                    player: player,
                                    setPlayer: setPlayer,
                                    cardType: cardType,
                                    setCardType: setCardType,
                                    extraDamage: extraDamage
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Footer, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OverlayTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            rootClose: "true",
                            trigger: "click",
                            placement: "top",
                            overlay: popover,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "ms-3 mt-0 mb-1 p-auto",
                                bg: "danger",
                                style: {
                                    cursor: 'pointer'
                                },
                                pill: true,
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/perkCardBoosts/BoostTable.js",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/perkCardBoosts/BoostTable.js",
        lineNumber: 65,
        columnNumber: 9
    }, this);
});
const __TURBOPACK__default__export__ = BoostTable;
}}),
"[project]/src/perkCardBoosts/PerkCardBoosts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/perkCardBoosts/BoostTable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Accordion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const PerkCardBoosts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function PerkCardBoosts({ player, setPlayer, boostDamage, extraDamage, setBoostDamage, showStatRef, setShowStat }) {
    console.log("PerkCardBoosts");
    const openStat = (e)=>{
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ps-1 pe-1 pb-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, {
            eventKey: "1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, {
                                style: {
                                    width: '10rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ac-text",
                                    children: "Card Boosts"
                                }, void 0, false, {
                                    fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "stats-text",
                                style: {
                                    width: '4rem'
                                },
                                onClick: openStat,
                                children: "Stats"
                            }, void 0, false, {
                                fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Accordion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body, {
                    className: "ps-1 pe-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$perkCardBoosts$2f$BoostTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        player: player,
                        setPlayer: setPlayer,
                        extraDamage: extraDamage,
                        setBoostDamage: setBoostDamage,
                        boostDamage: boostDamage
                    }, void 0, false, {
                        fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/perkCardBoosts/PerkCardBoosts.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
});
const __TURBOPACK__default__export__ = PerkCardBoosts;
}}),

};

//# sourceMappingURL=src_perkCardBoosts_2fb0e4._.js.map