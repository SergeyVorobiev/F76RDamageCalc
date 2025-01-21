import InputGroup from 'react-bootstrap/InputGroup';
import BaseDropdown from '../../viewComponents/dropdown/BaseDropdown';
import Form from 'react-bootstrap/Form';


const typeDict = {All: 'All', Chem: 'Chem', Food: 'Food', Magazine: 'Magazine', Serum: 'Serum', Drink: 'Drink', Bobblehead: 'Bobblehead', Stimpak: 'Stimpak', BloodPack: 'BloodPack', Other: 'Other'};

const effectDict = {
	None: 'None',
	APRegen: 'APRegen',
	AddBottlecap: 'AddBottlecap',
	AddPerk: 'AddPerk',
	AddictionCount: 'AddictionCount',
	AddictionEffect: 'AddictionEffect',
	AddictionOdds: 'AddictionOdds',
	AdjustFallSpeed: 'AdjustFallSpeed',
	Ammo: 'Ammo',
	Banner: 'Banner',
	Barter: 'Barter',
	Bleed: 'Bleed',
	Chameleon: 'Chameleon',
	CheaperCrafting: 'CheaperCrafting',
	ConditionCost: 'ConditionCost',
	CureAddiction: 'CureAddiction',
	DamageHealth: 'DamageHealth',
	DamageParalyze: 'DamageParalyze',
	DamageResist: 'DamageResist',
	Detect: 'Detect',
	DetectLife: 'DetectLife',
	Disease: 'Disease',
	DiseaseChance: 'DiseaseChance',
	DiseaseCure: 'DiseaseCure',
	DiseaseResist: 'DiseaseResist',
	Duration: 'Duration',
	ExtraDamage: 'ExtraDamage',
	Festive: 'Festive',
	FireDamage: 'FireDamage',
	FortifyAP: 'FortifyAP',
	FortifyAPRegen: 'FortifyAPRegen',
	FortifyAgility: 'FortifyAgility',
	FortifyBarter: 'FortifyBarter',
	FortifyCarryWeight: 'FortifyCarryWeight',
	FortifyCharisma: 'FortifyCharisma',
	FortifyCritDamage: 'FortifyCritDamage',
	FortifyCryoResist: 'FortifyCryoResist',
	FortifyDamage: 'FortifyDamage',
	FortifyDamageResist: 'FortifyDamageResist',
	FortifyEndurance: 'FortifyEndurance',
	FortifyEnergyResist: 'FortifyEnergyResist',
	FortifyExplosionRadius: 'FortifyExplosionRadius',
	FortifyExplosiveDamage: 'FortifyExplosiveDamage',
	FortifyFireResist: 'FortifyFireResist',
	FortifyGunAccuracy: 'FortifyGunAccuracy',
	FortifyHealRate: 'FortifyHealRate',
	FortifyHealing: 'FortifyHealing',
	FortifyHealth: 'FortifyHealth',
	FortifyIntelligence: 'FortifyIntelligence',
	FortifyJumpHeight: 'FortifyJumpHeight',
	FortifyLuck: 'FortifyLuck',
	FortifyMeleeDamage: 'FortifyMeleeDamage',
	FortifyMoveSpeed: 'FortifyMoveSpeed',
	FortifyPerception: 'FortifyPerception',
	FortifyRadAway: 'FortifyRadAway',
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
	HungerIncrease: 'HungerIncrease',
	HungerNo: 'HungerNo',
	HungerReduce: 'HungerReduce',
	HungerThirstHeal: 'HungerThirstHeal',
	HungerThirstIncrease: 'HungerThirstIncrease',
	HungerThirstNo: 'HungerThirstNo',
	HungerThirstReduce: 'HungerThirstReduce',
	HungerThirstSlow: 'HungerThirstSlow',
	IncreaseDiseaseResistance: 'IncreaseDiseaseResistance',
	IncreaseSprintAP: 'IncreaseSprintAP',
	IncreasedFood: 'IncreasedFood',
	InsectRepellent: 'InsectRepellent',
	Invisibility: 'Invisibility',
	LockPick: 'LockPick',
	LootEffect: 'LootEffect',
	MutationTreated: 'MutationTreated',
	Other: 'Other',
	PoisonDamage: 'PoisonDamage',
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
	ReduceDamage: 'ReduceDamage',
	ReduceDamageFromRobots: 'ReduceDamageFromRobots',
	ReduceDamageResist: 'ReduceDamageResist',
	ReduceDisease: 'ReduceDisease',
	ReduceDiseaseChance: 'ReduceDiseaseChance',
	ReduceDiseaseResistance: 'ReduceDiseaseResistance',
	ReduceEndurance: 'ReduceEndurance',
	ReduceEnemyDamage: 'ReduceEnemyDamage',
	ReduceEnergyDamage: 'ReduceEnergyDamage',
	ReduceFallDamage: 'ReduceFallDamage',
	ReduceFallSpeed: 'ReduceFallSpeed',
	ReduceIntelligence: 'ReduceIntelligence',
	ReduceItemDegradation: 'ReduceItemDegradation',
	ReduceLimbDamage: 'ReduceLimbDamage',
	ReduceLuck: 'ReduceLuck',
	ReduceMaxHealth: 'ReduceMaxHealth',
	ReducePerception: 'ReducePerception',
	ReduceStrength: 'ReduceStrength',
	ReduceWeight: 'ReduceWeight',
	Regen: 'Regen',
	Repair: 'Repair',
	ResistRadiation: 'ResistRadiation',
	RestoreAP: 'RestoreAP',
	RestoreAddiction: 'RestoreAddiction',
	RestoreHealth: 'RestoreHealth',
	RestoreRads: 'RestoreRads',
	Reward: 'Reward',
	Science: 'Science',
	ScopeStability: 'ScopeStability',
	Scrap: 'Scrap',
	SearchMeat: 'SearchMeat',
	ThirstIncrease: 'ThirstIncrease',
	ThirstNo: 'ThirstNo',
	ThirstReduce: 'ThirstReduce',
	TreasureHunt: 'TreasureHunt',
	VATSAccuracy: 'VATSAccuracy',
	Workshop: 'Workshop',
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