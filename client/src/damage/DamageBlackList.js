export default class DamageBlackList {
    static ignoreMap = {
        "0055c152": ["005894a9", "005894a7"],
        "0060e0ef": ["000fd3aa"],
        "0055c166": ["000fd3aa"],
        "0042b0cc": ["001b5edc"],
        "0001ec47": ["000fd3aa"],
        "00646880": ["001b5edc"],
        "0001f669": ["001b5edc"],
        "00011bf6": ["001b5edc"],
        "001109cf": ["00215e08"],
        "0042b0d0": ["00215e08"],
        "000fe268": ["00215e08"],
        "002fd97a": ["000fd3aa"],
        "00100ae9": ["000fd3aa"],
        "005a366e": ["000fd3aa"],
        "005ea441": ["000fd3aa"],
    }

    static check(weaponId, damageId) {
        const list = DamageBlackList.ignoreMap[weaponId];
        if (list) {
            return list.includes(damageId);
        }
        return false;
    }
}