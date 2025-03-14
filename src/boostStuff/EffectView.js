import Accordion from 'react-bootstrap/Accordion';
import EffectItems from "./EffectItems";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function EffectView({foodPref, setFoodPref, player, showStat, setShowStat, eventKey, categoryName, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched}) {
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">{categoryName}</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1 pb-1">
                    <EffectItems categoryName={categoryName} foodPref={foodPref} setFoodPref={setFoodPref} player={player} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} cardHeight={cardHeight} picHeight={picHeight} imPadding={imPadding} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={maxRows} setConsumableTouched={setConsumableTouched}></EffectItems>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}