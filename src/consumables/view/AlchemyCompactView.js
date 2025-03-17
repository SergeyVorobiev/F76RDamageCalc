import ConsumableTagsView from './ConsumableTagsView';
import { idNameRow, getEffectButton, indigo, redRounded } from '../../helpers/EffectViewHelper';
import { numberToString } from '../../helpers/StringHelpers';
import { Divider, Tag } from 'antd';
import { getEffects } from '../../spell/view/SpellCompactView';


function getItemDescription(desc) {
    if (!desc || desc === "") {
        return (<></>);
    }
    const mt = 2;
    const mb = 2;
    return (
        <div style={{width: '100%', backgroundColor: '#fffaf0'}} className={"mt-" + mt + " mb-" + mb + " d-flex justify-content-center"}>
            <div style={{textAlign: 'center', padding: '0.3rem'}}>
                <small><b style={{color: '#bf6400'}}>{desc}</b></small>
            </div>
        </div>
    );
}

function getTag3(value, style, mt, mb) {
    return (
        <div style={{width: '100%'}} className={"mt-" + mt + " mb-" + mb + " d-flex justify-content-center"}>
            <div className="tag" style={style}>
                <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {value}
                </div>
            </div>
        </div>
    );
}

function getWeight(item) {
    const weight = "Weight: " + numberToString(item.weight, 3);
    return getTag3(weight, indigo, 2, 0)
}

function getAddictionView(item, onEffectClick) {
    let addictionChance = "";
    if (item.addiction_chance > 0) {
        addictionChance = "Addiction chance: " + (item.addiction_chance * 100).toFixed(1) + "%";
    }
    if (addictionChance === "") {
        return (<></>);
    }
    return (
        <>
            <Divider className="mt-2 mb-0"><small>Addiction</small></Divider>
            {getTag3(addictionChance, redRounded, 1, 1)}
            {getEffectButton(item.addiction_spell, onEffectClick)}
        </>
    )
}
/*
function viewButton(isMain, setIsMain) {
    function onClick(e) {
        setIsMain(!isMain);
    }
    const name = (isMain) ? "Details" : "Main";
    return (
        <Button className="w-100 p-1 mt-2 mb-2" variant="blue-border" onClick={onClick}>
            {name}
        </Button>
    );
}*/

export function mainView(item, onEffectClick) {
    return (
        <>
            {idNameRow(item.id, item.name)}
            {getItemDescription(item.dnam_desc)}
            {getItemDescription(item.desc)}
            {getWeight(item)}
            <ConsumableTagsView className="pt-2" tags={item.tags} color='blue' title="Tags" />
            <ConsumableTagsView className="pt-2" color='magenta' tags={item.effectTags} title="Effect Tags" />
            {getAddictionView(item, onEffectClick)}
            <Divider className="mt-2 mb-0"><small>Effects</small></Divider>
        </>
    );
}

function detailsView(alchemy, onEffectClick) {
    return (
        <>
            {getEffects(alchemy.effects, onEffectClick)}
        </>
    );
}

export default function AlchemyCompactView(props) {
    // const [isMain, setIsMain] = useState(true);
    const alchemy = props.alchemy;
    // const view = (isMain) ? mainView(alchemy, props.onEffectClick, isMain, setIsMain) : detailsView(alchemy, props.onEffectClick, isMain, setIsMain);
    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <Tag bordered={false} color="volcano"><b>{alchemy.full}</b></Tag>
            </div>
            {mainView(alchemy, props.onEffectClick)}
            {detailsView(alchemy, props.onEffectClick)}
        </>
    );
}