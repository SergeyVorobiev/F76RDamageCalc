import { keyValueTag } from '../helpers/RowBuilder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collapse } from 'antd';
import { getField, getResolvedField } from './ViewHelper';
import SpellView from './SpellView';
import DamageView from './DamageView';


function getTags(template) {
    let result = [];
    const tagNames = template['tags'];
    for (let i = 0; i < tagNames.length; i++) {
        result.push(
            (
                <Col key={i} className='d-flex justify-content-center'>
                    {keyValueTag("Tag: ",  tagNames[i], 'magenta', {width: '20rem'})}
                </Col>
            )
        );
    }
    return result;
}

export function print() {
    console.log("GeneralView");
}

function buildGeneralView(template) {
    const auto = (template.isAuto[1] === 1) ? "Yes" : "No";
    const crit = template.crMult + template.crit[1] / 100.0;
    const crit_spells = template.crSpellId[1];
    let crit_views = [];
    for (let i = 0; i < crit_spells.length; i++) {
        crit_views.push(<SpellView spellId={crit_spells[i]} header={"Crit Spell"}></SpellView>);
    }
    return (
        <>
            <Row className="mb-2 bg-lite">
                {getField(template, 'Id:', 'id', 'default', '20rem')}
                {getField(template, 'Code Name:', 'cName', 'purple', '20rem')}
                {getField(template, 'Full Name:', 'name', 'purple', '20rem')}
                {getResolvedField("Automatic", auto, 'blue', '20rem')}
                {getField(template, 'AP:', 'ap', 'blue', '20rem', false, 3, 1)}
                {getField(template, 'Weight:', 'weight', 'blue', '20rem', false, 3, 1)}
                {getField(template, 'Levels:', 'levels', 'blue', '20rem')}
                {getResolvedField('Crit Mult:', crit, 'blue', '20rem', false, 3)}
                {getField(template, 'Crit Charge:', 'crChar', 'blue', '20rem')}
                {getField(template, 'Crit Spell:', 'crSpellId', 'blue', '20rem', true, 0, 1)}
                {getTags(template)}
            </Row>
            <DamageView damageData={template['damageData']}></DamageView>
            <div className="mb-2" />
            <SpellView spellId={template.spellId} header={"Base Spell"}></SpellView>
            <div className="mb-2" />
            {crit_views}
        </>
    );
}

function general(template) {
    const items = [
        {
            key: '1',
            label: <strong>General</strong>,
            children: <>{buildGeneralView(template)}</>,
        },
    ];

    return (
        <Collapse size='small' items={items} />
    );
}

const GeneralView = function GeneralView(props) {
    return general(props.template);
}

export default GeneralView;