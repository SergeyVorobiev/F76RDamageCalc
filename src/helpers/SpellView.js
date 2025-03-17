import Card from 'react-bootstrap/Card';
import { getEffect } from '../helpers/EffectProvider';
import StackEffectView from '../helpers/views/StackEffectView';


export default function SpellView({spellId, header}) {
    const spell = getEffect(spellId);
    if (!spell) {
        return (<></>);
    }
    if (!header) {
        header = "Spell"
    }
    return (
        <Card className="bg-spell-body">
            <Card.Header className="bg-spell-header m-0 ps-2 p-1">
                <small>{header}</small>
            </Card.Header>
            <Card.Body className="p-1 ms-1 me-1">
                <StackEffectView item={spell} />
            </Card.Body>
        </Card>
    );
}