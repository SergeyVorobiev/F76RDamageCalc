import Card from 'react-bootstrap/Card';
import { keyValueRow } from '../helpers/RowBuilder';
import StackEffectView from '../helpers/views/StackEffectView';
import { useEffect, memo, useState } from 'react';
import { applyBoost, applyStuff } from '../entities/EStuffBoost';
import InfoPopover from '../viewComponents/popover/InfoPopover';
import { getItem } from '../consumables/view/ConsumableItems';
import { buildRandomEmojiString, getRandomEmoji } from '../helpers/StringHelpers';
import Image from "next/image";


// Find dynamically used items to recalculate them
function recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player) {
    if (item.used && applyBoost(foodPref, item, stuffBoost, player, false)) {
        setStuffBoost({...stuffBoost});
    }
}

function getPopoverInfoBody(popoverId) {
    const item = getItem(popoverId);
    if (item) {
        return (
            <StackEffectView item={item} />
        );
    }
    return (<></>);
}

function getPopoverInfoHeader(title) {
    return (<b>{title}</b>);
}

const EffectItem = memo(function EffectItem({categoryName, foodPref, setFoodPref, player, item, height, picHeight, imPadding, items, setItems, colorName, colorValue, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched}) {
    const [, setUpdate] = useState([]);
    useEffect(() => {
        recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player);
    }, [player, foodPref]);
    function cardClick(e) {
        item.used = !item.used;
        setUpdate([]);
        if (item.id === "carnivore_serum") {
            foodPref.carnivore = item.used;
            setFoodPref({...foodPref});
        } else if (item.id === "herbivore_serum") {
            foodPref.herbivore = item.used;
            setFoodPref({...foodPref});
        }
        applyStuff(foodPref, item, stuffBoost, player);

        // Say to parent to recalculate
        setConsumableTouched([]);

        // Do not say to react to update view for every boost item
        setItems(items);
        setStuffBoost(stuffBoost);
    }
    const boosts = item.boosts.map((boost) => {
        let tail = "";
        if (boost.valueType === "percent") {
            tail = "%"
        } else if (boost.valueType === "multiplier") {
            tail = "x"
        }
        let sign = "";
        if (boost.value > 0 && boost.valueType !== "multiplier") {
            sign = "+";
        }
        const value = (item.used) ? sign + boost.value + tail : "-";
        return keyValueRow(boost.description, value, colorName, colorValue, 0);
    });
    const emptyRows = maxRows - boosts.length;
    //if (!item.emojiStrings) {
    const result = []
    for (let i = 0; i < emptyRows; i++) {
        result.push(buildRandomEmojiString(3, 3));
    }
    item.emojiStrings = result;
    //}
    const secondEmoji = (item.used) ? getRandomEmoji() : "-";
    for (let i = 0; i < item.emojiStrings.length; i++) {
        boosts.push(keyValueRow(item.emojiStrings[i], secondEmoji, colorName, colorValue, 0));
    }
    const filter = item.used ? "grayscale(0%)" : "grayscale(90%)";
    const outline = item.used ? "shadow-outline-gold" : "shadow-outline-unselected";
    const head = (useHeader) ? (<Card.Header className='d-flex justify-content-center p-0 m-0 pt-1 pb-1'><div style={{textWrap: 'nowrap', overflow: 'hidden', textAlign: 'center', width: '100%', fontSize: '0.75rem', backgroundColor: '#f2efe1', fontWeight: 'bold'}}>{item.name}</div></Card.Header>) : (<></>);
    const maxPopoverHeight = document.documentElement.style.getPropertyValue('--screen-modal-body-height-60');
    return (
        <Card key={item.id} className={outline} style={{width: '10.5rem', height: height, filter: filter }}>
            <Image style={{width: 'auto', cursor: "pointer", height: picHeight, padding: imPadding}}
                src={getPicture(item.imName)}
                alt={item.imName}
                priority
                onClick={cardClick} />
            {head}
            <Card.Body onClick={cardClick} style={{cursor: "pointer"}} className="ps-1 pe-1 p-0 mb-1">
                {boosts}
            </Card.Body>
            <Card.Footer className="p-1">
                <InfoPopover id={item.gameId} title={item.name} sign='?' className="d-flex justify-content-end" popoverBodyStyle={{maxHeight: maxPopoverHeight, overflow: 'auto'}} headerBuilder={getPopoverInfoHeader} bodyBuilder={getPopoverInfoBody} placement='top' />
            </Card.Footer>
        </Card>
    );
});

export default EffectItem;
