import Card from 'react-bootstrap/Card';
import { keyValueRow } from '../helpers/RowBuilder';
import { useEffect } from 'react';
import { applyBoost, applyStuff } from '../entities/EStuffBoost';
import { memo } from 'react';


// Find dynamically used items to recalculate them
function recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player) {
    if (item.used && applyBoost(foodPref, item, stuffBoost, player, false)) {
        setStuffBoost({...stuffBoost});
    }
}

const EffectItem = memo(function EffectItem({foodPref, setFoodPref, player, item, height, picHeight, items, setItems, colorName, colorValue, getPicture, useHeader, stuffBoost, setStuffBoost}) {
    useEffect(() => {
        recalculateDynamicItems(foodPref, item, stuffBoost, setStuffBoost, player);
    }, [player, foodPref]);
    function cardClick(e) {
        item.used = !item.used;
        if (item.id === "carnivore_serum") {
            foodPref.carnivore = item.used;
            setFoodPref({...foodPref});
        } else if (item.id === "herbivore_serum") {
            foodPref.herbivore = item.used;
            setFoodPref({...foodPref});
        }
        applyStuff(foodPref, item, stuffBoost, player);
        setItems([...items]);
        setStuffBoost({...stuffBoost});
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
    const filter = item.used ? "grayscale(0%)" : "grayscale(90%)";
    const outline = item.used ? "shadow-outline-gold" : "shadow-outline-unselected";
    const head = (useHeader) ? (<Card.Header className='d-flex justify-content-center p-0 m-0 pt-1 pb-1'><div style={{textAlign: 'center', width: '100%', fontSize: '0.75rem', backgroundColor: '#f2efe1', fontWeight: 'bold'}}>{item.name}</div></Card.Header>) : (<></>);
    return (
        <Card className={outline} style={{ width: '10.5rem', height: height, filter: filter }} onClick={cardClick}>
            <Card.Img variant='top' style={{ height: picHeight}} src={getPicture(item.imName)} />
            {head}
            <Card.Body className="p-1 mt-1">
                {boosts}
            </Card.Body>
        </Card>
    );
});

export default EffectItem;
