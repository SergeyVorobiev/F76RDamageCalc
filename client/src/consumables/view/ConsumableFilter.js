import InputGroup from 'react-bootstrap/InputGroup';
import BaseDropdown from '../../viewComponents/dropdown/BaseDropdown';
import Form from 'react-bootstrap/Form';


const typeDict = {All: 'All', Chem: 'Chem', Food: 'Food', Magazine: 'Magazine', Serum: 'Serum', Drink: 'Drink', Bobblehead: 'Bobblehead', Stimpak: 'Stimpak', BloodPack: 'BloodPack', Other: 'Other'};

const effectDict = {
	None: 'None',
	APRegen: 'APRegen',
	AddHunger: 'AddHunger',
	AddictionOdds: 'AddictionOdds',
	AdjustFallSpeed: 'AdjustFallSpeed',
	BobbleHead: 'BobbleHead',
	Chameleon: 'Chameleon',
	ConditionCost: 'ConditionCost',
	CureAddiction: 'CureAddiction',
	DamageBuff: 'DamageBuff',
	DamageHealth: 'DamageHealth',
	DamageResist: 'DamageResist',
	DetectLife: 'DetectLife',
	Disease: 'Disease',
	DiseaseChance: 'DiseaseChance',
	DiseaseCure: 'DiseaseCure',
	DiseaseResist: 'DiseaseResist',
	Drink: 'Drink',
	Duration: 'Duration',
	ExtraDamage: 'ExtraDamage',
	FortifyAP: 'FortifyAP',
	FortifyAPRegen: 'FortifyAPRegen',
	FortifyAgility: 'FortifyAgility',
	FortifyCarryWeight: 'FortifyCarryWeight',
	FortifyCharisma: 'FortifyCharisma',
	FortifyCritDamage: 'FortifyCritDamage',
	FortifyDamage: 'FortifyDamage',
	FortifyDamageResist: 'FortifyDamageResist',
	FortifyEndurance: 'FortifyEndurance',
	FortifyEnergyResist: 'FortifyEnergyResist',
	FortifyExplosionRadius: 'FortifyExplosionRadius',
	FortifyExplosiveDamage: 'FortifyExplosiveDamage',
	FortifyGunAccuracy: 'FortifyGunAccuracy',
	FortifyHealRate: 'FortifyHealRate',
	FortifyHealing: 'FortifyHealing',
	FortifyHealth: 'FortifyHealth',
	FortifyIntelligence: 'FortifyIntelligence',
	FortifyJumpHeight: 'FortifyJumpHeight',
	FortifyLockpicking: 'FortifyLockpicking',
	FortifyLuck: 'FortifyLuck',
	FortifyMeleeDamage: 'FortifyMeleeDamage',
	FortifyMoveSpeed: 'FortifyMoveSpeed',
	FortifyPerception: 'FortifyPerception',
	FortifyReloadSpeed: 'FortifyReloadSpeed',
	FortifyResistDamage: 'FortifyResistDamage',
	FortifyResistEnergy: 'FortifyResistEnergy',
	FortifyResistPoison: 'FortifyResistPoison',
	FortifyResistRad: 'FortifyResistRad',
	FortifySneak: 'FortifySneak',
	FortifySprintAP: 'FortifySprintAP',
	FortifyStrength: 'FortifyStrength',
	FortifyUnarmedDamage: 'FortifyUnarmedDamage',
	FortifyVATSAccuracy: 'FortifyVATSAccuracy',
	FortifyWaterBreathing: 'FortifyWaterBreathing',
	FortifyXPBonus: 'FortifyXPBonus',
	HealthRegen: 'HealthRegen',
	Hunger: 'Hunger',
	IncreaseConditionCost: 'IncreaseConditionCost',
	IncreaseDiseaseResistance: 'IncreaseDiseaseResistance',
	IncreaseSprintAP: 'IncreaseSprintAP',
	IncreasedHungerThirst: 'IncreasedHungerThirst',
	InsectRepellent: 'InsectRepellent',
	Invisibility: 'Invisibility',
	Magazine: 'Magazine',
	NoHunger: 'NoHunger',
	NoHungerNoThirst: 'NoHungerNoThirst',
	NoThirst: 'NoThirst',
	Other: 'Other',
	RadDamage: 'RadDamage',
	RadExtreme: 'RadExtreme',
	RadiationHazard: 'RadiationHazard',
	RandomEffect: 'RandomEffect',
	ReduceAPRegen: 'ReduceAPRegen',
	ReduceAccuracy: 'ReduceAccuracy',
	ReduceActionPoints: 'ReduceActionPoints',
	ReduceAgility: 'ReduceAgility',
	ReduceCarryWeight: 'ReduceCarryWeight',
	ReduceCharisma: 'ReduceCharisma',
	ReduceChemEffect: 'ReduceChemEffect',
	ReduceDamageFromRobots: 'ReduceDamageFromRobots',
	ReduceDiseaseChance: 'ReduceDiseaseChance',
	ReduceDiseaseResistance: 'ReduceDiseaseResistance',
	ReduceEndurance: 'ReduceEndurance',
	ReduceEnergyDamage: 'ReduceEnergyDamage',
	ReduceFallSpeed: 'ReduceFallSpeed',
	ReduceIntelligence: 'ReduceIntelligence',
	ReduceItemDegradation: 'ReduceItemDegradation',
	ReduceLimbDamage: 'ReduceLimbDamage',
	ReduceLuck: 'ReduceLuck',
	ReduceMaxHealth: 'ReduceMaxHealth',
	ReducePABatteryDamageRate: 'ReducePABatteryDamageRate',
	ReducePerception: 'ReducePerception',
	ReduceStrength: 'ReduceStrength',
	Regen: 'Regen',
	Repair: 'Repair',
	ResistRadiation: 'ResistRadiation',
	RestoreAP: 'RestoreAP',
	RestoreAddiction: 'RestoreAddiction',
	RestoreHealth: 'RestoreHealth',
	RestoreRads: 'RestoreRads',
	Science: 'Science',
	ScopeStability: 'ScopeStability',
	Serum: 'Serum',
	SlowHungerThirst: 'SlowHungerThirst',
	Thirst: 'Thirst',
};

export default function ConsumableFilter(props) {
    function nameChanged(e) {
        props.setFilterName(e.target.value);
        props.setCurrentPage(1);
    }
    function onSelectType(e) {
        props.setFilterType(e);
        props.setCurrentPage(1);
    }
    function onSelectEffect(e) {
        props.setFilterEffect(e);
        props.setCurrentPage(1);
    }
    return (
        <div>
            <InputGroup className="ps-1 pe-1 pb-2 flex-nowrap">
                <BaseDropdown title={"Type"} dict={typeDict} onSelect={onSelectType}></BaseDropdown>
                <Form.Control style={{width: '10rem'}} maxLength="70" onChange={nameChanged} />
                <BaseDropdown title={"Effect"} dict={effectDict} onSelect={onSelectEffect}></BaseDropdown>
            </InputGroup>
        </div>
    );
}