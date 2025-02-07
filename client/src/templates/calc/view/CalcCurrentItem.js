import Card from 'react-bootstrap/Card';
import WeaponEmblem from '../../WeaponEmblem';
import { keyValueTag } from '../../../helpers/RowBuilder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LegendaryCalcRowView from './LegendaryCalcRowView';
import ModsCalcRowView from './ModsCalcRowView';
import EmblemCalcRowView from './EmblemCalcRowView';
import ConsumablesBuilder from '../../../boostStuff/ConsumablesBuilder';
import getPerkImage from '../../../perkCardBoosts/PerkImageProvider';
import { useRef } from 'react';


export default function CalcCurrentItem(props) {
    const minHeight = useRef(null);
    const weaponName = useRef(null);
    const leftValue = props.count.current + " - " + props.count.percent + "%";
    const rightValue = props.count.bestTime;
    const perksHeight = null; // (props.perksUsed) ? '4rem' : '0rem';
    const consHeight = null; // (props.consUsed) ? '6rem' : '0rem';
    const currentElement = document.getElementById("current-calc-item");

    // Adjust card height according to weapon name, we want to avoid height bouncing but be adjusted to
    // every weapon
    if (weaponName.current !== props.wName) {
        weaponName.current = props.wName;
        minHeight.current = null;
    } else {
        if (currentElement) {
            const curHeight = currentElement.offsetHeight;
            if (!minHeight.current || minHeight.current < curHeight) {
                minHeight.current = curHeight;
            }
        }
    }
    return (
        <>
            <Card className="shadow-card-gold" id="current-calc-item" style={{minHeight: minHeight.current}}>
                <Card.Body className="p-1 ps-2 m-0">
                    <Row>
                        <Col className="m-auto" xs={3}>
                            <WeaponEmblem className="shadow-card-grey" iconName={props.iconName} iconSize='2.8rem'></WeaponEmblem>
                        </Col>
                        <Col xs={9}>
                            <div className="d-flex justify-content-end pe-1"><strong className="text-shadow-blue2">{props.wName}</strong></div>
                            <div className="d-flex justify-content-end">{keyValueTag(leftValue,  rightValue, 'red', {width: '100%', height: '1.34rem', fontSize: '1rem'})}</div>
                        </Col>
                    </Row>
                    <LegendaryCalcRowView legendary={props.count.config.legendary} width='50%' fontSize='65%' starSize='50%' />
                    <ModsCalcRowView minHeight='2.9rem' mods={props.count.config.mods} fontSize='65%' wrapText={false} />
                    <EmblemCalcRowView style={{minHeight: perksHeight}} imNames={props.count.config.perks} imageProvider={getPerkImage} iconSize='1.5rem' imageSize='1.364rem' borderRadius='5px' />
                    <EmblemCalcRowView style={{minHeight: consHeight}} imNames={props.count.config.consumables} imageProvider={ConsumablesBuilder.getImagePathById} iconSize='1.5rem' imageSize='1.364rem' />
                </Card.Body>
            </Card>
        </>
    );
}