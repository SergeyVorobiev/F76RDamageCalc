import Col from 'react-bootstrap/Col';
import { keyValueBadge } from '../helpers/RowBuilder';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { memo } from 'react';
import { Divider } from 'antd';


function resultBadges(style, left1, right1, left2, right2) {
    return (
        <div className="col d-flex justify-content-center">
            <Stack className='pb-2' direction="horizontal" gap={1}>
                {keyValueBadge(style, '9rem', left1,  right1)}
                {keyValueBadge(style, '9rem', left2,  right2)}
            </Stack>
        </div>
    );
};

const AAView = memo(function AAView({resultDamage}) {
    if (!resultDamage.antiArmor) {
        return (<></>);
    }
    const antiArmor = resultDamage.antiArmor;
    let aab = antiArmor.b.toFixed(1) + "%";
    let aae = antiArmor.e.toFixed(1) + "%";
    let aaf = antiArmor.f.toFixed(1) + "%";
    let aac = antiArmor.c.toFixed(1) + "%";
    let aap = antiArmor.p.toFixed(1) + "%";
    let aar = antiArmor.r.toFixed(1) + "%";
    function getAATail(aa, aai) {
        let aav = (1 - ((1 - aa / 100.0) * aai)) * 100.0;
        return " (" + aav.toFixed(1) + "%)";
    }
    if (antiArmor.insect > 0) {
        let aai = 1 - antiArmor.insect / 100.0;
        aab += getAATail(antiArmor.b, aai);
        aae += getAATail(antiArmor.e, aai);
        aaf += getAATail(antiArmor.f, aai);
        aac += getAATail(antiArmor.c, aai);
        aap += getAATail(antiArmor.p, aai);
        aar += getAATail(antiArmor.r, aai);
    }
    return (
        <>
            <Divider className='mt-1 mb-2'>🛡️ Anti Armor</Divider>
            <Row>
                <Col>
                    <Row>
                        {resultBadges("badge bg-light-cream-outline ms-1 me-1 mb-1", "💥", aab, "⚡", aae)}
                        {resultBadges("badge bg-light-cream-outline ms-1 me-1 mb-1", "🔥", aaf, "❄️", aac)}
                        {resultBadges("badge bg-light-cream-outline ms-1 me-1", "☢️", aar, "☣️", aap)}
                    </Row>
                </Col>
            </Row>
        </>
    );
});

export default AAView;