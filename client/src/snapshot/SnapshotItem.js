import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rate, Tag} from 'antd';
import {millisToTime} from '../helpers/Calc';
import {TrashIcon, UpdateIcon, PlayIcon, RenameIcon} from '../icons/Icons';
import '../css/style.css';
import Badge from 'react-bootstrap/Badge';


//<Badge style={{color: '#2a3262', fontWeight: 'bold'}} color="pink" text={value1}  />
function row(name1, value1, colorName="default", tagColor="default", tagName=true) {
    const line = (tagName) ? <Tag bordered={false} color={colorName}>{name1}</Tag> : name1;
    return (
       <Row className="flex-nowrap">
          <Col className="text-start text-nowrap">
            <strong>
                 {line}
            </strong>
          </Col>

          <Col className="text-end text-nowrap pb-1">
              <strong >
                <Tag color={tagColor}>{value1}</Tag>

              </strong>
          </Col>
       </Row>
    );
}

export default function SnapshotItem({index, size, item, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem}) {
    const critUsed = (item.extraDamage.useCrit) ? "(Yes 1/" + item.extraDamage.critFreq + ")" : "(No)";
    const sneakUsed = (item.extraDamage.useSneak) ? "(Yes)" : "(No)";
    const headUsed = (item.extraDamage.useHead) ? "(Yes 1/" + item.extraDamage.headFreq + ")" : "(No)";
    const leg1 = item.legendary[item.legendary.current[0]].name;
    const leg2 = item.legendary[item.legendary.current[1]].name;
    let strength = (item.additionalDamages.strength.is_used) ? item.additionalDamages.strength.value : "-";

    return (
        <Card className="mb-2">
            <div class='pb-0 pt-0 card-header'>
                <Row className="pt-2 pb-1">
                    <div className='col-10'>
                        <div class="d-flex justify-content-start pt-1">
                            <h5>{item.name}</h5>
                        </div>
                    </div>
                    <Col className='my-auto'>
                        <div class="d-flex justify-content-end">
                            <Button id={item.id} onClick={(e) => setModalRenameItem({id: item.id, show: true})} className="mt-0 pt-1 mb-1" size="sm">
                                <RenameIcon />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Card.Body class="p-1">
                <Row>
                    <Col className="d-flex justify-content-center mb-1">
                        <Toast style={{ width: '26rem'}} show={true} className="bg-snapshot">
                            <Toast.Body className="m-0 p-2">
                            <Row>
                                <Col>
                                    {row("Damage:", item.resultDamage.tDamage.toFixed(1) + " x " + item.resultDamage.shotSize)}
                                    {row("Crit:", critUsed + " " + item.resultDamage.displayedCrit.toFixed(1))}
                                    {row("Sneak:", sneakUsed + " +" + item.resultDamage.displayedSneak.toFixed(1))}
                                    {row("Explosive:", item.resultDamage.explosive.toFixed(1) + "%")}
                                    {row("Health:", item.boostDamage.health.toFixed(0) + "%")}
                                    {row((<Rate count={1} defaultValue={1} disabled={true} />), leg1)}
                                </Col>
                                <Col>
                                    {row("Ammo:", item.resultDamage.ammoCapacity)}
                                    {row("Fire Rate:", item.resultDamage.fireRate)}
                                    {row("Reload Time:", item.resultDamage.reloadTime)}
                                    {row("Head Shot:", headUsed)}
                                    {row("Team:", (item.boostDamage.team) ? "Yes" : "No")}
                                    {row((<Rate count={2} defaultValue={2} disabled={true} />), leg2)}
                                </Col>
                            </Row>
                            </Toast.Body>
                        </Toast>
                    </Col>
                    <Col className="d-flex justify-content-center mb-1">
                        <Toast className="bg-snapshot" style={{ width: '26rem' }} show={true}>
                            <Toast.Body className="m-0 p-2">
                            <Row>
                                <Col>
                                    {row("Strength:", strength, "default", "default")}
                                    {row("Anti Armor:", (item.resultDamage.bAA * 100.0).toFixed(1) + "%", "default", "default")}
                                    {row("SB Queen:", millisToTime(item.creatures.sbq.lifeTime), "red", "red")}
                                    {row("Earle:", millisToTime(item.creatures.earle.lifeTime), "purple", "purple")}
                                    {row("U Titan:", millisToTime(item.creatures.titan.lifeTime), "pink", "pink")}
                                    {row("Average:", millisToTime(item.averageTime), "blue", "blue")}
                                </Col>
                            </Row>
                            </Toast.Body>
                        </Toast>
                    </Col>
                 </Row>
            </Card.Body>
            <div class='card-footer'>
                <Row>
                 <div className="col d-flex justify-content-start">
                    <Badge className="mt-auto mb-auto" pill='true' text='dark' bg="warning">{index} / {size}</Badge>
                 </div>
                <div className="col d-flex justify-content-end">
                <Button onClick={(e) => setModalUpdateItem({id: item.id, name: item.name, show: true})} className="ms-1 me-2" size="sm">
                    <UpdateIcon />
                </Button>
                <Button className="ms-1 me-2" size="sm" id={item.id} name={item.name} onClick={(e) => setModalApplyItem({id: e.currentTarget.id, name: e.currentTarget.name, show: true})}>
                    <PlayIcon />
                </Button>

                <Button className="ms-1" size="sm" id={item.id} name={item.name} onClick={(e) => setModalDeleteItem({id: e.currentTarget.id, name: e.currentTarget.name, show: true})}>
                    <TrashIcon />
                </Button>
                </div>
               </Row>
            </div>
        </Card>
    );
}