import { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import EffectView from '../boostStuff/EffectView';
import General from '../boostStuff/General';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import { getMagazine, getBobbleHead, getFood, getDrink, getPsycho, getSerum, getOther } from '../helpers/BoostStuffProvider';


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

const BoostStuff = memo(function BoostStuff({foodPref, setFoodPref, magazines, setMagazines, bobbleHeads, setBobbleHeads, food, setFood, drink, setDrink, psycho, setPsycho, serum, setSerum, others, setOthers, player, setPlayer, stuffBoost, setStuffBoost, showStat, setShowStat, boostDamage, setBoostDamage, playerStats, setPlayerStats}) {
    return (
        <Accordion class="accordion">
            <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                <Badge className="mb-3 ms-4" variant="black" pill>!</Badge>
            </OverlayTrigger>
            <General eventKey="0" categoryName={"General"} showStat={showStat} setShowStat={setShowStat} player={player} setPlayer={setPlayer} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats}></General>
            <EffectView eventKey="1" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Magazines"} items={magazines} setItems={setMagazines} colorName={"orange"} colorValue={"orange"} cardHeight={'16.2rem'} picHeight={'12rem'} getPicture={getMagazine} useHeader={false} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="2" showStat={showStat} setShowStat={setShowStat} categoryName={"Bobble Heads"} items={bobbleHeads} setItems={setBobbleHeads} colorName={"blue"} colorValue={"blue"} cardHeight={'12.2rem'} picHeight={'8rem'} getPicture={getBobbleHead} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="3" showStat={showStat} setShowStat={setShowStat} categoryName={"Chemicals"} items={psycho} setItems={setPsycho} colorName={"magenta"} colorValue={"magenta"} cardHeight={'14.8rem'} picHeight={'9rem'} getPicture={getPsycho} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="4" foodPref={foodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Food"} items={food} setItems={setFood} colorName={"volcano"} colorValue={"volcano"} cardHeight={'13.1rem'} picHeight={'9rem'} getPicture={getFood} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="5" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Drink"} items={drink} setItems={setDrink} colorName={"volcano"} colorValue={"volcano"} cardHeight={'13.1rem'} picHeight={'9rem'} getPicture={getDrink} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="6" foodPref={foodPref} setFoodPref={setFoodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Serums"} items={serum} setItems={setSerum} colorName={"green"} colorValue={"green"} cardHeight={'13.7rem'} picHeight={'8rem'} getPicture={getSerum} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="7" showStat={showStat} setShowStat={setShowStat} categoryName={"Others"} items={others} setItems={setOthers} colorName={"default"} colorValue={"indigo"} cardHeight={'12.2rem'} picHeight={'8rem'} getPicture={getOther} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
        </Accordion>
    );
});

export default BoostStuff;