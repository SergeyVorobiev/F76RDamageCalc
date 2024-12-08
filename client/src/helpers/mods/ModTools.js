import getMods from '../Mods';


export class ModTools {

    static hasSilencerById(modId) {
        const modData = getMods().get(modId);
        ModTools.hasSilencer(modData);
    }

    static hasSilencer(modData) {
        for (let i = 0; i < modData.modifiers.length; i++) {
            const val = modData.modifiers[i].val1;
            if (val === '001e05d6 / HasSilencer') {
                return true;
            }
        }
        return false;
    }
}