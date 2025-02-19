import { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import EffectView from '../boostStuff/EffectView';
import General from '../boostStuff/General';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import { getMagazine, getBobbleHead, getFood, getDrink, getPsycho, getSerum, getOther } from '../helpers/BoostStuffProvider';
import Button from 'react-bootstrap/Button';
import ConsumablesBuilder from '../boostStuff/ConsumablesBuilder';
import { leftRight2 } from '../helpers/RowBuilder';
import LoadingModal from '../helpers/views/LoadingModal';
import { useState } from 'react';


function buildLicense() {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>Licensing</strong></Popover.Header>
            <Popover.Body>
                Image files from 'Magazines' / 'Bobble Heads' / 'Chemicals' / 'Food' / 'Drink' / 'Serums' / 'Others' sections were taken from the video game Fallout 76 or from websites created and owned by Bethesda Softworks, the copyright of which is held by Bethesda Softworks, or were released to the press for promotional purposes by the same.
                The use of images to illustrate items of the game concerning the subject of the images in question is believed to qualify as fair use under United States copyright law, as such display does not significantly impede the right of the copyright holder to sell the copyrighted material and is not being used to generate profit.
            </Popover.Body>
        </Popover>
    );
}

function getInfo() {
    return (
        <div className="center-text">
            <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                <Badge variant="black" pill>!</Badge>
            </OverlayTrigger>
        </div>

    );
}

const BoostStuff = memo(function BoostStuff({foodPref, setFoodPref, magazines, setMagazines, bobbleHeads, setBobbleHeads, food, setFood, drink, setDrink, psycho, setPsycho, serum, setSerum, others, setOthers, player, setPlayer, stuffBoost, setStuffBoost, showStat, setShowStat, boostDamage, setBoostDamage, playerStats, setPlayerStats, setConsumableTouched}) {
    const [loading, setLoading] = useState(false);
    function onClick(e) {
        setLoading(true);
        setTimeout(() => {
            player.health.value = 100;
            player.team = false;
            setPlayer({...player});

            playerStats.luck.value = 1;
            playerStats.strength.value = 5;
            setPlayerStats({...playerStats});

            const [foodPref, allStuffBoosts, consumables] = ConsumablesBuilder.buildFromList([], player);
            ConsumablesBuilder.setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers);
            setFoodPref({...foodPref});
            setStuffBoost({...allStuffBoosts});
            setLoading(false);
        }, 100);
    }
    return (
        <Accordion>
            <LoadingModal show={loading} />
            <div className="ps-3 pe-3 mb-2">
                {leftRight2(getInfo(), <Button size="sm" variant="warning" onClick={onClick}><b className="best-button-shadow">Reset</b></Button>)}
            </div>
            <General eventKey="0" categoryName={"General"} showStat={showStat} setShowStat={setShowStat} player={player} setPlayer={setPlayer} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats}></General>
            <EffectView eventKey="1" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Magazines"} items={magazines} setItems={setMagazines} colorName={"orange"} colorValue={"orange"} cardHeight={'17.2rem'} picHeight={'12rem'} getPicture={getMagazine} useHeader={false} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={2} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="2" showStat={showStat} setShowStat={setShowStat} categoryName={"Bobble Heads"} items={bobbleHeads} setItems={setBobbleHeads} colorName={"blue"} colorValue={"blue"} cardHeight={'13.4rem'} picHeight={'8rem'} getPicture={getBobbleHead} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={1} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="3" showStat={showStat} setShowStat={setShowStat} categoryName={"Chemicals"} items={psycho} setItems={setPsycho} colorName={"magenta"} colorValue={"magenta"} cardHeight={'16.9rem'} picHeight={'8.5rem'} getPicture={getPsycho} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={3} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="4" foodPref={foodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Food"} items={food} setItems={setFood} colorName={"volcano"} colorValue={"volcano"} cardHeight={'14.3rem'} picHeight={'9rem'} getPicture={getFood} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={1} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="5" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Drink"} items={drink} setItems={setDrink} colorName={"volcano"} colorValue={"volcano"} cardHeight={'15.9rem'} picHeight={'9rem'} getPicture={getDrink} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={2} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="6" foodPref={foodPref} setFoodPref={setFoodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Serums"} items={serum} setItems={setSerum} colorName={"green"} colorValue={"green"} cardHeight={'14.7rem'} picHeight={'8rem'} imPadding='1rem 2.5rem' getPicture={getSerum} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={2} setConsumableTouched={setConsumableTouched} />
            <EffectView eventKey="7" showStat={showStat} setShowStat={setShowStat} categoryName={"Others"} items={others} setItems={setOthers} colorName={"default"} colorValue={"indigo"} cardHeight={'13.3rem'} picHeight={'8rem'} getPicture={getOther} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={1} setConsumableTouched={setConsumableTouched} />
        </Accordion>
    );
});

export default BoostStuff;