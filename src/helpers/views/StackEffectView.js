import { getEffect, getVMADObject, clearVMADObjects } from '../EffectProvider';
import { useState, useRef } from 'react';
import PerkCardCompactView from '../../perkCard/view/PerkCardCompactView';
import PerkCompactView from '../../perk/view/PerkCompactView';
import SpellCompactView from '../../spell/view/SpellCompactView';
import EnchCompactView from '../../spell/view/EnchCompactView';
import EffectCompactView from '../../effect/view/EffectCompactView';
import AlchemyCompactView from '../../consumables/view/AlchemyCompactView';
import ModCompactView from '../../templates/ModCompactView';
import ExplCompactView from '../../templates/ExplCompactView';
import HazardCompactView from '../../templates/HazardCompactView';
import ProjCompactView from '../../templates/ProjCompactView';
import AmmoCompactView from '../../templates/AmmoCompactView';
import VMADCompactView from '../../vmad/view/VMADCompactView';
import { getItem } from '../../consumables/view/ConsumableItems';
import Button from 'react-bootstrap/Button';


function effectView(effect, onEffectClick, backButton) {
    const label = effect['label'];
    if (label === "PCRD") {
        return (
            <div>
                <PerkCardCompactView perkCard={effect} onEffectClick={onEffectClick} />
                {backButton}
            </div>
        );
    } else if (label === "PERK") {
        return (
            <>
                <PerkCompactView perk={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "SPEL") {
        return (
            <>
                <SpellCompactView spell={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "MGEF") {
        return (
            <>
                <EffectCompactView effect={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "VMAD") {
        return (
             <>
                <VMADCompactView vmad={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "ENCH") {
        return (
            <>
                <EnchCompactView ench={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "ALCH") {
        return (
            <>
                <AlchemyCompactView alchemy={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "CMOD") {
        return (
            <>
                <ModCompactView mod={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "HAZD") {
        return (
            <>
                <HazardCompactView hazard={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "EXPL") {
        return (
            <>
                <ExplCompactView expl={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "PROJ") {
        return (
            <>
                <ProjCompactView proj={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    } else if (label === "AMMO") {
        return (
            <>
                <AmmoCompactView ammo={effect} onEffectClick={onEffectClick} />
                {backButton}
            </>
        );
    }
    return (<>{label}</>);
}

function getEffectItem(viewIdStackRef, startItem) {
    const lastViewIdIndex = viewIdStackRef.current.length - 1;
    if (lastViewIdIndex > -1) {
        const id = viewIdStackRef.current[lastViewIdIndex];
        if (id.startsWith("vmad")) {
            return getVMADObject(id);
        }
        const effect = getEffect(id);
        if (!effect) {
            return getItem(id);
        }
        return effect;
    }
    if (typeof startItem === typeof '') {
        return getEffect(startItem);
    }
    return startItem;
}

function getBackButton(viewIdStackRef, onBackClick) {
    if (viewIdStackRef.current.length > 0) {
        return (<Button className="w-100 mt-2 mb-0 p-1" variant="blue-white-border" onClick={onBackClick}>Back</Button>);
    }
    return (<></>);
}

export default function StackEffectView(props) {
    const [,setRedraw] = useState(null);
    const viewIdStackRef = useRef([]);
    const startItemIdRef = useRef(null);
    if (!startItemIdRef.current) { // Was closed and opened
        clearVMADObjects();
        startItemIdRef.current = props.item.id;
    } else if (startItemIdRef.current !== props.item.id) { // Re-Rendered but new item was chosen
        startItemIdRef.current = props.item.id;
        clearVMADObjects();
        viewIdStackRef.current = [];
    }
    
    function onBackClick(e) {
        const newLength = viewIdStackRef.current.length - 1;
        viewIdStackRef.current.length = (newLength < 0) ? 0 : newLength;
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