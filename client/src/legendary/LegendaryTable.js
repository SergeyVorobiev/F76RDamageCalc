import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import JunkieRow from './JunkieRow';
import AristocratRow from './AristocratRow';
import AARow from './AARow';
import Badge from 'react-bootstrap/Badge';
import BloodiedRow from './BloodiedRow';
import BerserkerRow from './BerserkerRow';
import ExecutionerRow from './ExecutionerRow';
import QuadRow from './QuadRow';
import TwoShotRow from './TwoShotRow';
import MutantRow from './MutantRow';
import None1Row from './None1Row';
import None2Row from './None2Row';
import ExplosiveRow from './ExplosiveRow';
import HitmanRow from './HitmanRow';
import RapidRow from './RapidRow';
import { Rate } from 'antd';
import { memo } from 'react';


const LegendaryTable = memo(function LegendaryTable({setLegendary, legendary}) {
    console.log("LegendaryTable");
    return (
        <Container fluid className="ps-0 pe-0">
            <Card className="text-center mb-2">
                <Card.Header className="pb-1"><Rate count={1} defaultValue={1} disabled={true} /></Card.Header>
                <Card.Body>
                    <Container fluid className="ps-0 pe-0">
                        <None1Row setLegendary={setLegendary} legendary={legendary}></None1Row>
                        <JunkieRow setLegendary={setLegendary} legendary={legendary}></JunkieRow>
                        <AristocratRow setLegendary={setLegendary} legendary={legendary}></AristocratRow>
                        <AARow setLegendary={setLegendary} legendary={legendary}></AARow>
                        <BloodiedRow setLegendary={setLegendary} legendary={legendary}></BloodiedRow>
                        <BerserkerRow setLegendary={setLegendary} legendary={legendary}></BerserkerRow>
                        <ExecutionerRow setLegendary={setLegendary} legendary={legendary}></ExecutionerRow>
                        <QuadRow setLegendary={setLegendary} legendary={legendary}></QuadRow>
                        <TwoShotRow setLegendary={setLegendary} legendary={legendary}></TwoShotRow>
                        <MutantRow setLegendary={setLegendary} legendary={legendary}></MutantRow>
                    </Container>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Badge bg="success" pill="true">{legendary[legendary.current[0]].name + " " + legendary[legendary.current[0]].value + "%"}</Badge>
                </Card.Footer>
            </Card>
            <Card className="text-center mb-2">
                <Card.Header className="pb-1"><Rate count={2} defaultValue={2} disabled={true} /></Card.Header>
                <Card.Body>
                    <Container fluid className="ps-0 pe-0">
                        <None2Row setLegendary={setLegendary} legendary={legendary}></None2Row>
                        <ExplosiveRow setLegendary={setLegendary} legendary={legendary}></ExplosiveRow>
                        <HitmanRow setLegendary={setLegendary} legendary={legendary}></HitmanRow>
                        <RapidRow setLegendary={setLegendary} legendary={legendary}></RapidRow>
                    </Container>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Badge bg="success" pill="true">{legendary[legendary.current[1]].name + " " + legendary[legendary.current[1]].value + "%"}</Badge>
                </Card.Footer>
            </Card>
        </Container>
    );
});

export default LegendaryTable;