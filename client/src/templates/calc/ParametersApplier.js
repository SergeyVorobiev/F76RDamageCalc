import ConsumablesBuilder from '../../boostStuff/ConsumablesBuilder';


export default class ParametersApplier {

    static applyCalculatedParameters(parameters, props) {
        props.setWSpec(parameters.wSpec);
        props.setBoostDamage(parameters.boostDamage);
        props.setPlayer(parameters.player);
        props.setPlayerStats(parameters.playerStats);
        props.setAdditionalDamages(parameters.additionalDamages);
        props.setExtraDamage(parameters.extraDamage);

        // Have to recalculate it for best result to set appropriate selection to items.
        const [foodPref, stuffBoost, consumables] = ConsumablesBuilder.buildFromList(parameters.consumableList, parameters.player);
        ConsumablesBuilder.setConsumableItems(consumables, props.setMagazines, props.setBobbleHeads, props.setFood, props.setDrink, props.setPsycho, props.setSerum, props.setOthers);
        props.setFoodPref(foodPref);
        props.setStuffBoost(stuffBoost);
    }
}