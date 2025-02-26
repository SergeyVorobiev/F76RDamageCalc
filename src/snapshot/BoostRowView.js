import { memo } from 'react';
import EmblemCalcRowView from '../templates/calc/view/EmblemCalcRowView';
import getPerkImage from '../perkCardBoosts/PerkImageProvider';
import ConsumablesBuilder from '../consumables/ConsumablesBuilder';


const BoostRowView = memo(function BoostRowView(props) {
    const imNames = getUsedPerks(props.boostDamage);
    return (
        <>
            <EmblemCalcRowView imNames={imNames} imageProvider={getPerkImage} iconSize='2.0rem' imageSize='1.864rem' borderRadius='5px' />
            <EmblemCalcRowView imNames={props.stuff} imageProvider={ConsumablesBuilder.getImagePathById} iconSize='2.0rem' imageSize='1.864rem' />
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