export function defaultResultDamage() {
    return {
        bDamage: 0.0,
        eDamage: 0.0,
        fDamage: 0.0,
        pDamage: 0.0,
        cDamage: 0.0,
        rDamage: 0.0,
        tDamage: 0.0,
        displayedCrit: 0.0,

        bAA: 0.0,
        eAA: 0.0,
        fAA: 0.0,
        pAA: 0.0,
        cAA: 0.0,
        rAA: 0.0,

        bExpDamage: 0.0,
        eExpDamage: 0.0,
        bExpCrit: 0.0,
        eExpCrit: 0.0,

        bSneak: 0.0,
        eSneak: 0.0,
        fSneak: 0.0,
        pSneak: 0.0,
        cSneak: 0.0,
        rSneak: 0.0,
        displayedSneak: 0.0,

        bCrit: 0.0,
        eCrit: 0.0,
        fCrit: 0.0,
        pCrit: 0.0,
        cCrit: 0.0,
        rCrit: 0.0,

        shotSize: 0,
        reloadTime: 0,
        fireRate: 0,
        ammoCapacity: 0,
        explosive: 0.0,
    };
}

export function defaultExtraDamage() {
    return {
        useCrit: false,
        useSneak: false,
        useHead: false,
        useStrength: false,
        critFreq: 1.0,
        headFreq: 1.0,
    };
}
