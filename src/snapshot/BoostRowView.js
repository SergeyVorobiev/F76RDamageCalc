import { memo } from 'react';
import EmblemCalcRowView from '../templates/calc/view/EmblemCalcRowView';
import getPerkImage from '../perkCardBoosts/PerkImageProvider';
import ConsumablesBuilder from '../consumables/ConsumablesBuilder';


const BoostRowView = memo(function BoostRowView(props) {
    const imNames = getUsedPerks(props.boostDamage);
    const ratio = 1.864 / 2;
    const iconSize = (props.iconSize) ? props.iconSize : 2;
    const imageSize = iconSize * ratio;
    const iconSizeRem = iconSize + "rem";
    const imageSizeRem = imageSize + "rem";
    return (
        <>
            <EmblemCalcRowView imNames={imNames} imageProvider={getPerkImage} iconSize={iconSizeRem} imageSize={imageSizeRem} borderRadius='5px' />
            <EmblemCalcRowView imNames={props.stuff} imageProvider={ConsumablesBuilder.getImagePathById} iconSize={iconSizeRem} imageSize={imageSizeRem} />
        </>
    );
});

export function getUsedPerks(boostDamage) {
    const result = [];
    for (const name in boostDamage) {
        const perk = boostDamage[name];
        if (perk.is_used) {
            result.push(perk.im_name);
        }
    }
    return result;
}

export default BoostRowView;