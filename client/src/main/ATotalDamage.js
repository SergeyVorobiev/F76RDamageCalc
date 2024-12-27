import React from 'react';
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
import EnemiesInfoView from './EnemiesInfoView';
import GraphInfoView from './GraphInfoView';
import SummaryView from './SummaryView';


const colors = getColorsForHotMeter();

export default class ATotalDamage extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("ATotalDamage");
        let weaponIcon = this.props.iconName;
        if (!weaponIcon) {
            weaponIcon = "default";
        }
        const mWidth = "21rem";
        const percentC = getHotPercentage(this.props.creatures);
        const weaponTitleName = truncateLongWords(this.props.weaponName, 25);
        return (
            <Card style={{ minWidth: mWidth}} className="d-flex justify-content-center text-center mb-0">
                <Card.Header className='p-0 m-0'>
                    <Row className='p-0 m-0'>
                        <Col className="col-2 d-flex justify-content-start p-0 m-0 ms-3">
                            {getImageElement(weaponIcon, "5rem")}
                        </Col>
                        <Col className="col-7 d-flex justify-content-center">
                           <h5 className="m-auto p-auto weapon-label-text"> {weaponTitleName} </h5>
                        </Col>
                        <Col className="col-3 d-flex justify-content-end"></Col>
                    </Row>
                </Card.Header>
                <Card.Body className="pt-2 bg-lite">
                    <Row>
                        <div className="col d-flex justify-content-center mb-2">
                            <SummaryView className="main-display-adjustable" resultDamage={this.props.resultDamage} extraDamage={this.props.extraDamage} setExtraDamage={this.props.setExtraDamage} />
                        </div>
                        <div className="col d-flex justify-content-center mb-2">
                            <GraphInfoView className="main-display-adjustable" graphValues={this.props.graphValues} percent={percentC} colors={colors} />
                        </div>
                        <div className="col d-flex justify-content-center mb-2">
                            <EnemiesInfoView className="main-display-adjustable" creatures={this.props.creatures} setCreatures={this.props.setCreatures} resultDamage={this.props.resultDamage} weaponName={this.props.weaponName} />
                        </div>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted p-1">
                    <Accordion className="accordion p-0 m-0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="m-0 p-0">
                                <HotMeter creatures={this.props.creatures} steps={50} colors={colors} />
                            </Accordion.Header>
                            <Accordion.Body style={{backgroundColor: "#fafcff"}} >
                                <DamageDetails resultDamage={this.props.resultDamage}></DamageDetails>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Footer>
            </Card>
        );
    }
}
