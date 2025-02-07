import { idNameRow, buildTextBlock } from '../../helpers/EffectViewHelper';
import { getPerkCard } from '../PerkCardProvider';
import PerkCardTools from '../PerkCardTools';
import Button from 'react-bootstrap/Button';
import { Divider } from 'antd';
import { getEffect } from '../../helpers/EffectProvider';


function perkButtons(perk, onPerkClick) {
    const result = [];
    const perkData = [];
    const costs = [];
    for (const fieldName in perk) {
        if (fieldName.startsWith("rankCost")) {
            costs.push(fieldName);
        }
    }
    for (let i = 0; i < costs.length; i++) {
        const fieldName = costs[i];
        const number = fieldName.slice(8, 9);
        const cost = perk[fieldName];
        const mPerkId = perk['mPerk' + number];
        const fPerkId = perk['fPerk' + number];
        const mPerk = getEffect(mPerkId);
        const fPerk = getEffect(fPerkId);
        if (mPerk) {
            perkData.push({name: mPerk.name, id: mPerk.id, cost: cost});
        }
        if (fPerk) {
            perkData.push({name: fPerk.name, id: fPerk.id, cost: cost});
        }
    }
    function getCostView(cost, legendary) {
        if (legendary) {
            return (<></>);
        }
        return (
            <div className="ps-1 pe-1 pt-0 pb-0" style={{color: '#fff', backgroundColor: '#ffb000', borderColor: '#ffb000', borderWidth: '1px', borderRadius: '2px', borderStyle: 'solid'}}>
                <b>{cost}</b>
            </div>
        );
    }
    for (let i = 0; i < perkData.length; i++) {
        const data = perkData[i];
        result.push(
            <div key={data.id} className="d-flex justify-content-center m-1">
                <Button className="w-100" name={data.id} variant="blue-white-border" onClick={onPerkClick}>
                    <div className="mt-1"><b>{data.name}</b></div>
                    <div className="mt-0 mb-0" style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="w-100 d-flex justify-content-start mb-1">
                            {getCostView(data.cost, perk.legendary)}
                        </div>
                        <div className="w-100 d-flex justify-content-end mt-2">
                            <small><b style={{color: '#520021'}}>{data.id}</b></small>
                        </div>
                    </div>
                </Button>
            </div>
        );
    }
    return result;
}

export default function PerkCardCompactView(props) {
    let perkCard = props.perkCard;
    if (!perkCard) {
        perkCard = getPerkCard(props.perkCardId);
    }
    const desc = (perkCard.desc && perkCard.desc !== "") ? perkCard.desc : "-";
    const bgColor = PerkCardTools.getColor(perkCard.type);
    const legBadge = (perkCard.legendary) ? <div className="badge p-1 ps-2 pe-2 bg-lite-shadow2" style={{backgroundColor: '#ffc700', color: '#513f00'}}>Legendary</div> : <></>;
    return (
        <div>
            {idNameRow(perkCard.id, perkCard.name)}
            {buildTextBlock(desc, null, null, "mt-2 p-1")}
            <div className="mt-3 mb-3" style={{display: 'flex', flexDirection: 'row'}}>
                <div className="w-100 d-flex justify-content-start">
                    {legBadge}
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="badge p-1 ps-2 pe-2 bg-lite-shadow2" style={{backgroundColor: bgColor, color: '#fff'}}>{perkCard.type}</div>
                </div>
                <div className="w-100 d-flex justify-content-end">
                    <div className="badge p-1 ps-2 pe-2 bg-lite-shadow2">Lvl {perkCard.level}</div>
                </div>
            </div>
            <Divider>Perks</Divider>
            {perkButtons(perkCard, props.onEffectClick)}
        </div>
    );
}