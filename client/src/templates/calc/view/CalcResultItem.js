import Card from 'react-bootstrap/Card';
import WeaponEmblem from '../../WeaponEmblem';
import { keyValueTag } from '../../../helpers/RowBuilder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LegendaryCalcRowView from './LegendaryCalcRowView';
import ModsCalcRowView from './ModsCalcRowView';
import EmblemCalcRowView from './EmblemCalcRowView';
import { memo } from 'react';
import ConsumablesBuilder from '../../../boostStuff/ConsumablesBuilder';
import getPerkImage from '../../../perkCardBoosts/PerkImageProvider';


const CalcResultItem = memo(function CalcResultItem(props) {
    // console.log("CalcResultItem");
    const leftValue = "";
    const rightValue = props.bestTime;
    function onClick(e) {
        if (props.finishedRef.current) {
            props.setWNameToApply(props.wName);
        }
    }
    return (
        <>
            <Card className="shadow-outline-result-item mb-3" onClick={onClick}>
                <Card.Body className="p-1 ps-2 m-0">
                    <Row>
                        <Col className="m-auto" xs={3}>
                            <WeaponEmblem className="shadow-card-grey" iconName={props.iconName} iconSize='2.8rem'></WeaponEmblem>
                        </Col>
                        <Col xs={9}>
                            <div className="d-flex justify-content-end pe-1"><strong className="text-shadow-grey-blue">{props.wName}</strong></div>
                            <div className="d-flex justify-content-end">{keyValueTag(leftValue,  rightValue, 'volcano', {width: '100%', height: '1.34rem', fontSize: '1rem'})}</div>
                        </Col>
                    </Row>
                    <LegendaryCalcRowView legendary={props.config.legendary} width='50%' fontSize='65%' starSize='50%' />
                    <ModsCalcRowView minHeight='1rem' mods={props.config.mods} fontSize='65%' wrapText={true} />
                    <EmblemCalcRowView imNames={props.config.perks} imageProvider={getPerkImage} iconSize='1.5rem' imageSize='1.364rem' borderRadius='5px' />
                    <EmblemCalcRowView imNames={props.config.consumables} imageProvider={ConsumablesBuilder.getImagePathById} iconSize='1.5rem' imageSize='1.364rem' borderRadius='4px' />
                </Card.Body>
            </Card>
        </>
    );
});

export default CalcResultItem;