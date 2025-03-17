import { memo } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import HotMeter from './HotMeter';
import { truncateLongWords } from '../helpers/Input';
import { getColorsForHotMeter } from '../helpers/Colors';
import { getHotPercentage } from '../helpers/Item';
import DamageDetails from '../damage/DamageDetails';
import { getImageElement } from '../helpers/WeaponImages';
import CreaturesCardView from '../creature/CreaturesCardView';
import GraphInfoView from './GraphInfoView';
import SummaryView from './SummaryView';
import Container from 'react-bootstrap/Container';
import StaticPopoverRenderer from '../viewComponents/popover/StaticPopoverRenderer';


const colors = getColorsForHotMeter();

const imagePopover = new StaticPopoverRenderer(<></>, <></>, "mainWeaponImage", "bottom");

const MainCardsDisplay = memo(function MainCardsDisplay(props) {
    console.log("MainCardsDisplay");
    const wSpec = props.wSpecRef.current;
    if (!wSpec) {
        return (<></>);
    }
    let weaponIcon = wSpec.iconName;
    if (!weaponIcon) {
        weaponIcon = "default";
    }
    const mWidth = "19rem";
    const percentC = getHotPercentage(props.creatures);
    const weaponTitleName = truncateLongWords(wSpec.weaponName, 25);
    function onImageClick(e) {
        imagePopover.renderToggleNewContent(e.target, <b>{wSpec.defaultName}</b>, <div className="d-flex justify-content-center">{getImageElement(weaponIcon, "12rem")}</div>);
    }
    return (
        <Card style={{minWidth: mWidth}} className="d-flex justify-content-center text-center mb-0 ms-1 me-1">
            <div id="mainWeaponImage"></div>
            <Card.Header className='p-0 m-0'>
                <Row className='p-0 m-0'>
                    <Col className="col-2 d-flex justify-content-start p-0 m-0 ps-2">
                        <div style={{cursor: 'pointer'}} onClick={onImageClick}>
                            {getImageElement(weaponIcon, "4rem", "main-weapon-image")}
                        </div>
                    </Col>
                    <Col className="col-8 d-flex justify-content-center">
                       <div className="m-auto p-0 weapon-label-text"> {weaponTitleName} </div>
                    </Col>
                    <Col className="col-2 d-flex justify-content-end p-0 m-0 pe-2">
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="pt-2 bg-lite ps-1 pe-1 pb-1">
                <Container className="p-1 pb-0 mb-0">
                    <Row>
                        <div className="col d-flex justify-content-center mb-2">
                            <SummaryView className="main-display-adjustable" resultDamage={props.resultDamage} extraDamage={props.extraDamage} boostDamageRef={props.boostDamageRef} setBoostDamage={props.setBoostDamage} setExtraDamage={props.setExtraDamage} />
                        </div>
                        <div className="col d-flex justify-content-center mb-2">
                            <GraphInfoView className="main-display-adjustable" graphValues={props.graphValues} percent={percentC} creatures={props.creatures} creatureChartNumber={props.creatureChartNumber} setCreatureChartNumber={props.setCreatureChartNumber} colors={colors} />
                        </div>
                        <div className="col d-flex justify-content-center mb-2">
                            <CreaturesCardView className="main-display-adjustable" creatureNamesRef={props.creatureNamesRef} creatures={props.creatures} setCreatures={props.setCreatures} resultDamage={props.resultDamage} weaponName={wSpec.weaponName} />
                        </div>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted p-1">
                <Accordion className="accordion p-0 m-0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="m-0 p-0">
                            <HotMeter creatures={props.creatures} steps={50} colors={colors} />
                        </Accordion.Header>
                        <Accordion.Body>
                            <DamageDetails resultDamage={props.resultDamage}></DamageDetails>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Footer>
        </Card>
    );
});

export default MainCardsDisplay;
