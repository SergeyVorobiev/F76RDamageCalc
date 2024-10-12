export default class DamageBlackList {
    static ignoreMap = {
        "0055c166": ["000fd3aa"],
        "0042b0cc": ["001b5edc"],
        "0001ec47": ["000fd3aa"],
        "00646880": ["001b5edc"],
        "0001f669": ["001b5edc"],
    }

    static check(weaponId, damageId) {
        const list = DamageBlackList.ignoreMap[weaponId];
        if (list) {
            return list.includes(damageId);
        }
        return false;
    }
}