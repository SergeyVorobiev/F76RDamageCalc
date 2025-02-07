import Button from 'react-bootstrap/Button';
import PerkCardTools from '../PerkCardTools';


export default function PerkCardButton(props) {
    const bgColor = PerkCardTools.getColor(props.item.type);
    const desc = (props.item.desc && props.item.desc !== "") ? props.item.desc : "-";
    const legBadge = (props.item.legendary) ? <div className="badge bg-lite-shadow2" style={{backgroundColor: '#ffc700', color: '#513f00'}}>Legendary</div> : <></>;
    return (
        <div>
            <Button id={props.item['id']} className="lite-shadow" variant="blue-white-border" style={{width: '100%', margin: '0.1rem', paddingTop: '0.2rem', paddingBottom: '0.1rem', padding: "0.3rem"}} onClick={props.onClick}>
                <div className="mb-2">
                    <h6><b>{props.item.fullName}</b></h6>
                </div>
                <div className="p-1 perk-description">
                    {desc}
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="w-100 d-flex pt-2 justify-content-start">
                        {legBadge}
                    </div>
                    <div className="w-100 d-flex pt-2 justify-content-end">
                        <div className="badge bg-lite-shadow2" style={{backgroundColor: bgColor, color: '#fff'}}>{props.item.type}</div>
                    </div>
                </div>
            </Button>
        </div>
    );
}