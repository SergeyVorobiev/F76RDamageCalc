import { memo, useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import EffectView from '../boostStuff/EffectView';
import General from '../boostStuff/General';
import { getMagazine, getBobbleHead, getFood, getDrink, getPsycho, getSerum } from '../helpers/BoostStuffProvider';


const BoostStuff = memo(function BoostStuff({foodPref, setFoodPref, magazines, setMagazines, bobbleHeads, setBobbleHeads, food, setFood, drink, setDrink, psycho, setPsycho, serum, setSerum, player, setPlayer, stuffBoost, setStuffBoost, showStat, setShowStat, legendary, setLegendary, boostDamage, setBoostDamage, playerStats, setPlayerStats}) {
    return (
        <Accordion class="accordion">
            <General eventKey="0" categoryName={"General"} showStat={showStat} setShowStat={setShowStat} player={player} setPlayer={setPlayer} legendary={legendary} setLegendary={setLegendary} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats}></General>
            <EffectView eventKey="1" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Magazines"} items={magazines} setItems={setMagazines} colorName={"orange"} colorValue={"orange"} cardHeight={'16.2rem'} picHeight={'12rem'} getPicture={getMagazine} useHeader={false} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="2" showStat={showStat} setShowStat={setShowStat} categoryName={"Bobble Heads"} items={bobbleHeads} setItems={setBobbleHeads} colorName={"blue"} colorValue={"blue"} cardHeight={'12.2rem'} picHeight={'8rem'} getPicture={getBobbleHead} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="3" showStat={showStat} setShowStat={setShowStat} categoryName={"Chemicals"} items={psycho} setItems={setPsycho} colorName={"magenta"} colorValue={"magenta"} cardHeight={'14.8rem'} picHeight={'9rem'} getPicture={getPsycho} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="4" foodPref={foodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Food"} items={food} setItems={setFood} colorName={"volcano"} colorValue={"volcano"} cardHeight={'13.1rem'} picHeight={'9rem'} getPicture={getFood} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="5" player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Drink"} items={drink} setItems={setDrink} colorName={"volcano"} colorValue={"volcano"} cardHeight={'13.1rem'} picHeight={'9rem'} getPicture={getDrink} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            <EffectView eventKey="6" foodPref={foodPref} setFoodPref={setFoodPref} player={player} showStat={showStat} setShowStat={setShowStat} categoryName={"Serums"} items={serum} setItems={setSerum} colorName={"green"} colorValue={"green"} cardHeight={'13.7rem'} picHeight={'8rem'} getPicture={getSerum} useHeader={true} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
        </Accordion>
    );
});

export default BoostStuff;