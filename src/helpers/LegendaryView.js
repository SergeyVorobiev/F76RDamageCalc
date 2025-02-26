import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';


function formatName(legendaryName) {
    const tail = " Legendary Mod";
    if (legendaryName.endsWith(tail)) {
        return legendaryName.slice(0, legendaryName.length - tail.length);
    }
    return legendaryName;
}

export function getLegendaryBoxView(legendaryName, starsCount) {
    if (!legendaryName || legendaryName === "") {
        return null;
    }
    let stars = "⭐";
    stars = stars.repeat(starsCount);
    return keyValueBadge("bg-yellow m-1 ps-1 pe-1 shadow-gold", '20rem', stars, formatName(legendaryName));
}

export default function LegendaryView({template}) {
    const isLeg1 = (Object.keys(template.legendary1).length > 0);
    const isLeg2 = (Object.keys(template.legendary2).length > 0);
    const isLeg3 = (Object.keys(template.legendary3).length > 0);
    const isLeg4 = (Object.keys(template.legendary4).length > 0);
    const isLeg5 = (Object.keys(template.legendary5).length > 0);
    if (isLeg1 || isLeg2 || isLeg3 || isLeg4 || isLeg5) {
        const leg1 = (isLeg1) ? keyValueBadge("bg-yellow m-1 shadow-gold", '20rem', "⭐", formatName(template.legendary1.name)) : (<></>);
        const leg2 = (isLeg2) ? keyValueBadge("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐", formatName(template.legendary2.name)) : (<></>);
        const leg3 = (isLeg3) ? keyValueBadge("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐", formatName(template.legendary3.name)) : (<></>);
        const leg4 = (isLeg4) ? keyValueBadge("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐⭐", formatName(template.legendary4.name)) : (<></>);
        const leg5 = (isLeg5) ? keyValueBadge("bg-yellow m-1 shadow-gold", '20rem', "⭐⭐⭐⭐⭐", formatName(template.legendary5.name)) : (<></>);
        return (
            <>
                <Divider className='m-1 p-1'>Legendary</Divider>
                <Row className="m-1 d-flex justify-content-center">
                    {leg1}
                    {leg2}
                    {leg3}
                    {leg4}
                    {leg5}
                </Row>
            </>
        );
    }
    return (<></>);
}