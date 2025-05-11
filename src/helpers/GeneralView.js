import { keyValueTag } from '../helpers/RowBuilder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collapse } from 'antd';
import { getField, getResolvedField } from './ViewHelper';
import SpellView from './SpellView';
import DamageView from './DamageView';
import { Divider, Tag } from 'antd';


function getTags(template) {
    let result = [];
    const tagNames = template['tags'];
    for (let i = 0; i < tagNames.length; i++) {
        result.push(<Tag key={i + tagNames[i]} color="volcano" className="m-1" style={{width: 'auto'}}><b>{tagNames[i]}</b></Tag>);
    }
    return (
        <>
            <Divider>Tags</Divider>
            <Row className="d-flex justify-content-center">{result}</Row>
        </>
    )
    return result;
}

function buildGeneralView(template) {
    const auto = (template.isAuto[1] === 1) ? "Yes" : "No";
    const crit = template.crMult[1];
    const critSpells = template.crSpellId[1];
    let critViews = [];
    for (let i = 0; i < critSpells.length; i++) {
        critViews.push(<SpellView key={i} spellId={critSpells[i]} header={"Crit Spell"}></SpellView>);
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
                {getField(template, 'Crit Charge:', 'crCharge', 'blue', '20rem')}
                {getField(template, 'Crit Spell:', 'crSpellId', 'blue', '20rem', true, 0, 1)}
                {getField(template, "Type:", "typeNumber", 'blue', '20rem')}
                {getTags(template)}
            </Row>
            <DamageView damageData={template['damageData']}></DamageView>
            <div className="mb-2" />
            <SpellView spellId={template.spellId} header={"Base Spell"}></SpellView>
            <div className="mb-2" />
            {critViews}
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